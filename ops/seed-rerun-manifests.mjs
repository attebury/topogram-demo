import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const inventoryPath = path.join(repoRoot, "ops", "active-targets.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
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

function parseArgs(argv) {
  const options = { all: false, slugs: [] };
  for (const token of argv) {
    if (token === "--all") {
      options.all = true;
    } else {
      options.slugs.push(token);
    }
  }
  if (!options.all && options.slugs.length === 0) {
    throw new Error("Pass --all or one or more slugs.");
  }
  return options;
}

const options = parseArgs(process.argv.slice(2));
const inventory = readJson(inventoryPath);
const selected = new Set(options.all ? inventory.map((entry) => entry.slug) : options.slugs);
const seeded = [];

for (const entry of inventory) {
  if (!selected.has(entry.slug)) {
    continue;
  }
  const targetRoot = path.join(repoRoot, entry.target_dir);
  const proofStatus = readJson(path.join(targetRoot, "proof-status.json"));
  const adoptionStatus = readJson(path.join(targetRoot, "topogram", "candidates", "reconcile", "adoption-status.json"));
  const manifest = {
    version: 1,
    target: entry.slug,
    display_name: proofStatus.display_name || entry.display_name,
    published_status: proofStatus.status,
    topogram_commit_tested: proofStatus.topogram_commit_tested,
    last_verified_date: proofStatus.last_verified_date,
    evidence_origin: "seeded_snapshot",
    rerun_recipe_ref: "README.md#rerun",
    source_tree_hash: hashDirectory(path.join(targetRoot, "source")),
    topogram_tree_hash: hashDirectory(path.join(targetRoot, "topogram")),
    adoption_contract: {
      next_bundle: adoptionStatus.next_bundle,
      blocked_item_count: adoptionStatus.blocked_item_count,
      applied_item_count: adoptionStatus.applied_item_count
    },
    receipt_recorded_at: proofStatus.last_verification_receipt_recorded_at || null
  };
  const manifestPath = path.join(targetRoot, "rerun-manifest.json");
  writeJson(manifestPath, manifest);
  seeded.push({ slug: entry.slug, manifest_path: path.relative(repoRoot, manifestPath) });
}

if (seeded.length === 0) {
  throw new Error("No matching targets were seeded.");
}

console.log(JSON.stringify({ type: "rerun_manifest_seed", seeded }, null, 2));
