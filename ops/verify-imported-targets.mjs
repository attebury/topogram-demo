import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const inventoryPath = path.join(repoRoot, "ops", "active-targets.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function assertExists(targetPath, kind) {
  if (!fs.existsSync(targetPath)) {
    throw new Error(`Missing ${kind}: ${path.relative(repoRoot, targetPath)}`);
  }
}

function deriveStatus(adoptionStatus) {
  const isClosed =
    adoptionStatus?.next_bundle === null &&
    adoptionStatus?.blocked_item_count === 0 &&
    Number(adoptionStatus?.applied_item_count || 0) > 0;
  return isClosed ? "closed" : "partial";
}

const inventory = readJson(inventoryPath);
const verifiedTargets = [];

for (const entry of inventory) {
  const targetRoot = path.join(repoRoot, entry.target_dir);
  const readmePath = path.join(targetRoot, "README.md");
  const proofStatusPath = path.join(targetRoot, "proof-status.json");
  const sourceDir = path.join(targetRoot, "source");
  const topogramDir = path.join(targetRoot, "topogram");
  const adoptionStatusPath = path.join(
    topogramDir,
    "candidates",
    "reconcile",
    "adoption-status.json"
  );

  assertExists(readmePath, "README");
  assertExists(proofStatusPath, "proof status");
  assertExists(sourceDir, "source directory");
  assertExists(topogramDir, "topogram directory");
  assertExists(adoptionStatusPath, "adoption status");

  const proofStatus = readJson(proofStatusPath);
  const adoptionStatus = readJson(adoptionStatusPath);
  const derivedStatus = deriveStatus(adoptionStatus);

  if (proofStatus.status !== entry.expected_status) {
    throw new Error(
      `${entry.slug} expected published status ${entry.expected_status} but found ${proofStatus.status}`
    );
  }

  if (proofStatus.status !== derivedStatus) {
    throw new Error(
      `${entry.slug} published status ${proofStatus.status} does not match adoption contract (${derivedStatus})`
    );
  }

  if (!proofStatus.topogram_commit_tested) {
    throw new Error(`${entry.slug} is missing topogram_commit_tested`);
  }

  if (!proofStatus.last_verified_date) {
    throw new Error(`${entry.slug} is missing last_verified_date`);
  }

  verifiedTargets.push({
    slug: entry.slug,
    status: proofStatus.status,
    next_bundle: adoptionStatus.next_bundle,
    blocked_item_count: adoptionStatus.blocked_item_count,
    applied_item_count: adoptionStatus.applied_item_count
  });
}

console.log(
  JSON.stringify(
    {
      type: "imported_target_verification",
      target_count: verifiedTargets.length,
      verified_targets: verifiedTargets
    },
    null,
    2
  )
);
