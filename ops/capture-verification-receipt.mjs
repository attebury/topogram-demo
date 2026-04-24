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
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function parseArgs(argv) {
  const options = {
    topogramRepo: process.env.TOPOGRAM_REPO || defaultTopogramRepo,
    topogramRef: process.env.TOPOGRAM_REF || "HEAD",
    receiptDir: process.env.VERIFICATION_RECEIPT_DIR || defaultReceiptDir,
    slug: null,
    rerunRoot: null
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
    } else if (token === "--rerun-root") {
      options.rerunRoot = argv[index + 1];
      index += 1;
    } else if (!options.slug) {
      options.slug = token;
    } else {
      throw new Error(`Unexpected argument: ${token}`);
    }
  }

  if (!options.slug) {
    throw new Error("Pass the target slug as the first positional argument.");
  }

  if (!options.rerunRoot) {
    throw new Error("Pass --rerun-root <path> so the receipt is tied to a real rerun workspace.");
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

function deriveStatus(adoptionStatus) {
  const isClosed =
    adoptionStatus?.next_bundle === null &&
    adoptionStatus?.blocked_item_count === 0 &&
    Number(adoptionStatus?.applied_item_count || 0) > 0;
  return isClosed ? "closed" : "partial";
}

function listFiles(rootDir, includeRelativePath = () => true, currentDir = rootDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(currentDir, entry.name);
    const relativePath = path.relative(rootDir, absolutePath);
    if (entry.isDirectory()) {
      if (includeRelativePath(relativePath)) {
        files.push(...listFiles(rootDir, includeRelativePath, absolutePath));
      }
    } else if (includeRelativePath(relativePath)) {
      files.push(relativePath);
    }
  }

  return files.sort();
}

function hashDirectory(rootDir, includeRelativePath = () => true) {
  if (!fs.existsSync(rootDir)) {
    throw new Error(`Expected directory to exist: ${rootDir}`);
  }

  const hash = crypto.createHash("sha256");
  const files = listFiles(rootDir, includeRelativePath);

  for (const relativePath of files) {
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
  const inventory = readJson(inventoryPath);
  const entry = inventory.find((candidate) => candidate.slug === options.slug);

  if (!entry) {
    throw new Error(`Unknown target slug: ${options.slug}`);
  }

  const rerunRoot = path.resolve(options.rerunRoot);
  const targetRoot = path.join(repoRoot, entry.target_dir);

  if (rerunRoot === targetRoot || rerunRoot.startsWith(`${repoRoot}${path.sep}`)) {
    throw new Error("Rerun receipts must be captured from a workspace outside topogram-demo, not from the committed target tree.");
  }

  const rerunTopogramDir = path.join(rerunRoot, "topogram");
  const adoptionStatusPath = path.join(rerunTopogramDir, "candidates", "reconcile", "adoption-status.json");

  if (!fs.existsSync(adoptionStatusPath)) {
    throw new Error(`Missing rerun adoption-status.json at ${adoptionStatusPath}`);
  }

  const adoptionStatus = readJson(adoptionStatusPath);
  const rerunStatus = deriveStatus(adoptionStatus);
  const topogramCommit = resolveGitShortSha(options.topogramRepo, options.topogramRef);
  const receipt = {
    version: 1,
    slug: entry.slug,
    display_name: entry.display_name,
    target_dir: entry.target_dir,
    expected_status: entry.expected_status,
    topogram_commit_verified: topogramCommit,
    recorded_at: new Date().toISOString(),
    rerun_status: rerunStatus,
    captured_from_rerun_root_name: path.basename(rerunRoot),
    adoption_contract: {
      next_bundle: adoptionStatus.next_bundle,
      blocked_item_count: adoptionStatus.blocked_item_count,
      applied_item_count: adoptionStatus.applied_item_count
    },
    rerun_source_tree_hash: hashDirectory(rerunRoot, (relativePath) => relativePath !== "topogram" && !relativePath.startsWith(`topogram${path.sep}`)),
    rerun_topogram_tree_hash: hashDirectory(rerunTopogramDir)
  };

  const receiptPath = path.join(options.receiptDir, `${entry.slug}.json`);
  writeJson(receiptPath, receipt);

  console.log(
    JSON.stringify(
      {
        type: "verification_receipt_capture",
        receipt_path: path.relative(repoRoot, receiptPath),
        receipt
      },
      null,
      2
    )
  );

  if (receipt.rerun_status !== entry.expected_status) {
    process.exitCode = 1;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
