import childProcess from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const inventoryPath = path.join(repoRoot, "ops", "active-targets.json");
const defaultTopogramRepo = path.resolve(repoRoot, "..", "topogram");
const defaultReceiptDir = path.join(repoRoot, "ops", "verification-receipts");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function parseArgs(argv) {
  const options = {
    topogramRepo: process.env.TOPOGRAM_REPO || defaultTopogramRepo,
    topogramRef: process.env.TOPOGRAM_REF || "HEAD",
    receiptDir: process.env.VERIFICATION_RECEIPT_DIR || defaultReceiptDir,
    date: new Date().toISOString().slice(0, 10),
    all: false,
    slugs: []
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--topogram-repo") {
      options.topogramRepo = argv[index + 1];
      index += 1;
    } else if (token === "--topogram-ref") {
      options.topogramRef = argv[index + 1];
      index += 1;
    } else if (token === "--receipt-dir") {
      options.receiptDir = argv[index + 1];
      index += 1;
    } else if (token === "--date") {
      options.date = argv[index + 1];
      index += 1;
    } else if (token === "--all") {
      options.all = true;
    } else {
      options.slugs.push(token);
    }
  }

  if (!options.all && options.slugs.length === 0) {
    throw new Error("Pass --all or one or more target slugs to refresh.");
  }

  return options;
}

function resolveGitShortSha(repoPath, ref) {
  const run = childProcess.spawnSync("git", ["-C", repoPath, "rev-parse", "--short", ref], {
    encoding: "utf8",
    env: {
      ...process.env,
      PATH: process.env.PATH || ""
    }
  });

  if (run.status !== 0) {
    throw new Error(`Unable to resolve git ref ${ref} in ${repoPath}:\n${run.stderr || run.stdout}`);
  }

  return run.stdout.trim();
}

function parseIsoDate(value) {
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Expected ISO date value, received ${value}`);
  }
  return parsed;
}

function deriveStatus(adoptionStatus) {
  const isClosed =
    adoptionStatus?.next_bundle === null &&
    adoptionStatus?.blocked_item_count === 0 &&
    Number(adoptionStatus?.applied_item_count || 0) > 0;
  return isClosed ? "closed" : "partial";
}

function listFiles(rootDir, currentDir = rootDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolutePath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(rootDir, absolutePath));
    } else {
      files.push(path.relative(rootDir, absolutePath));
    }
  }
  return files.sort();
}

function hashDirectory(rootDir) {
  if (!fs.existsSync(rootDir)) {
    throw new Error(`Expected directory to exist: ${rootDir}`);
  }
  const hash = crypto.createHash("sha256");
  for (const relativePath of listFiles(rootDir)) {
    const absolutePath = path.join(rootDir, relativePath);
    hash.update(relativePath);
    hash.update("\0");
    hash.update(fs.readFileSync(absolutePath));
    hash.update("\0");
  }
  return hash.digest("hex");
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const refreshDate = parseIsoDate(options.date);
  const inventory = readJson(inventoryPath);
  const selectedSlugs = new Set(options.all ? inventory.map((entry) => entry.slug) : options.slugs);
  const topogramCommit = resolveGitShortSha(options.topogramRepo, options.topogramRef);
  const refreshed = [];

  for (const entry of inventory) {
    if (!selectedSlugs.has(entry.slug)) {
      continue;
    }

    const targetRoot = path.join(repoRoot, entry.target_dir);
    const proofStatusPath = path.join(targetRoot, "proof-status.json");
    const rerunManifestPath = path.join(targetRoot, "rerun-manifest.json");
    const proofStatus = readJson(proofStatusPath);
    const receiptPath = path.join(options.receiptDir, `${entry.slug}.json`);

    if (!fs.existsSync(receiptPath)) {
      throw new Error(
        `${entry.slug} is missing a verification receipt at ${path.relative(repoRoot, receiptPath)}. Run capture-verification-receipt.mjs from a rerun workspace first.`
      );
    }

    const receipt = readJson(receiptPath);
    const receiptDate = parseIsoDate(receipt.recorded_at.slice(0, 10));
    const sourceDir = path.join(targetRoot, "source");
    const topogramDir = path.join(targetRoot, "topogram");
    const adoptionStatusPath = path.join(topogramDir, "candidates", "reconcile", "adoption-status.json");
    const currentAdoptionStatus = readJson(adoptionStatusPath);
    const currentDerivedStatus = deriveStatus(currentAdoptionStatus);
    const currentSourceHash = hashDirectory(sourceDir);
    const currentTopogramHash = hashDirectory(topogramDir);

    if (receipt.slug !== entry.slug) {
      throw new Error(`${entry.slug} receipt slug mismatch: found ${receipt.slug}`);
    }

    if (receipt.topogram_commit_verified !== topogramCommit) {
      throw new Error(`${entry.slug} receipt commit ${receipt.topogram_commit_verified} does not match current Topogram ${topogramCommit}`);
    }

    if (receipt.rerun_status !== entry.expected_status) {
      throw new Error(`${entry.slug} receipt status ${receipt.rerun_status} does not match expected published status ${entry.expected_status}`);
    }

    if (proofStatus.status !== entry.expected_status) {
      throw new Error(`${entry.slug} proof-status.json currently says ${proofStatus.status}; refresh only supports the published expected status ${entry.expected_status}`);
    }

    if (currentDerivedStatus !== proofStatus.status) {
      throw new Error(`${entry.slug} committed topogram snapshot currently derives ${currentDerivedStatus}, not ${proofStatus.status}`);
    }

    if (currentSourceHash !== receipt.rerun_source_tree_hash) {
      throw new Error(`${entry.slug} committed source snapshot does not match the captured rerun receipt. Sync examples/imported/${entry.slug}/source before refreshing metadata.`);
    }

    if (currentTopogramHash !== receipt.rerun_topogram_tree_hash) {
      throw new Error(`${entry.slug} committed topogram snapshot does not match the captured rerun receipt. Sync examples/imported/${entry.slug}/topogram before refreshing metadata.`);
    }

    if (refreshDate.getTime() !== receiptDate.getTime()) {
      throw new Error(`${entry.slug} refresh date ${options.date} does not match receipt date ${receipt.recorded_at.slice(0, 10)}`);
    }

    const nextStatus = {
      ...proofStatus,
      topogram_commit_tested: topogramCommit,
      last_verified_date: options.date,
      last_verification_receipt_recorded_at: receipt.recorded_at
    };

    const nextManifest = {
      version: 1,
      target: entry.slug,
      display_name: proofStatus.display_name || entry.display_name,
      published_status: nextStatus.status,
      topogram_commit_tested: topogramCommit,
      last_verified_date: options.date,
      evidence_origin: "rerun_receipt",
      rerun_recipe_ref: "README.md#rerun",
      source_tree_hash: currentSourceHash,
      topogram_tree_hash: currentTopogramHash,
      adoption_contract: {
        next_bundle: currentAdoptionStatus.next_bundle,
        blocked_item_count: currentAdoptionStatus.blocked_item_count,
        applied_item_count: currentAdoptionStatus.applied_item_count
      },
      receipt_recorded_at: receipt.recorded_at
    };

    writeJson(proofStatusPath, nextStatus);
    writeJson(rerunManifestPath, nextManifest);
    refreshed.push({
      slug: entry.slug,
      proof_status_path: path.relative(repoRoot, proofStatusPath),
      rerun_manifest_path: path.relative(repoRoot, rerunManifestPath),
      receipt_path: path.relative(repoRoot, receiptPath),
      topogram_commit_tested: topogramCommit,
      last_verified_date: options.date
    });
  }

  if (refreshed.length === 0) {
    throw new Error("No matching targets were refreshed.");
  }

  console.log(JSON.stringify({ type: "proof_status_metadata_refresh", refreshed_targets: refreshed }, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
