import fs from "node:fs";
import path from "node:path";
import { hashDirectory } from "./tree-hash.mjs";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const inventoryPath = path.join(repoRoot, "ops", "active-targets.json");
const forbiddenHistoricalPrefixes = [
  "/Users/attebury/Documents/topogram/trials/"
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
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

function findForbiddenProvenance(rootDir) {
  const matches = [];
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
  for (const relativePath of listFiles(rootDir)) {
    const absolutePath = path.join(rootDir, relativePath);
    const contents = fs.readFileSync(absolutePath, "utf8");
    for (const prefix of forbiddenHistoricalPrefixes) {
      if (contents.includes(prefix)) {
        matches.push({
          file: relativePath,
          prefix
        });
      }
    }
  }
  return matches;
}

function extractReadmeStatus(readmeText, label) {
  const pattern = new RegExp(`- ${label}: ` + "`([^`]+)`");
  const match = readmeText.match(pattern);
  if (!match) {
    throw new Error(`README is missing status line for ${label}`);
  }
  return match[1];
}

const inventory = readJson(inventoryPath);
const verifiedTargets = [];

for (const entry of inventory) {
  const targetRoot = path.join(repoRoot, entry.target_dir);
  const readmePath = path.join(targetRoot, "README.md");
  const proofStatusPath = path.join(targetRoot, "proof-status.json");
  const rerunManifestPath = path.join(targetRoot, "rerun-manifest.json");
  const sourceDir = path.join(targetRoot, "source");
  const topogramDir = path.join(targetRoot, "topogram");
  const adoptionStatusPath = path.join(topogramDir, "candidates", "reconcile", "adoption-status.json");

  assertExists(readmePath, "README");
  assertExists(proofStatusPath, "proof status");
  assertExists(rerunManifestPath, "rerun manifest");
  assertExists(sourceDir, "source directory");
  assertExists(topogramDir, "topogram directory");
  assertExists(adoptionStatusPath, "adoption status");

  const readmeText = readText(readmePath);
  const proofStatus = readJson(proofStatusPath);
  const rerunManifest = readJson(rerunManifestPath);
  const adoptionStatus = readJson(adoptionStatusPath);
  const derivedStatus = deriveStatus(adoptionStatus);
  const sourceTreeHash = hashDirectory(sourceDir, { normalizeText: true });
  const topogramTreeHash = hashDirectory(topogramDir, { normalizeText: true });
  const forbiddenProvenance = findForbiddenProvenance(topogramDir);

  if (path.basename(entry.target_dir) !== entry.slug) {
    throw new Error(`${entry.slug} target_dir basename must match the slug`);
  }

  if (proofStatus.status !== entry.expected_status) {
    throw new Error(`${entry.slug} expected published status ${entry.expected_status} but found ${proofStatus.status}`);
  }

  if (proofStatus.target !== entry.slug) {
    throw new Error(`${entry.slug} proof-status target mismatch: found ${proofStatus.target}`);
  }

  if (proofStatus.display_name !== entry.display_name) {
    throw new Error(`${entry.slug} proof-status display_name ${proofStatus.display_name} does not match active-targets ${entry.display_name}`);
  }

  if (proofStatus.status !== derivedStatus) {
    throw new Error(`${entry.slug} published status ${proofStatus.status} does not match adoption contract (${derivedStatus})`);
  }

  if (!proofStatus.topogram_commit_tested) {
    throw new Error(`${entry.slug} is missing topogram_commit_tested`);
  }

  if (!proofStatus.last_verified_date) {
    throw new Error(`${entry.slug} is missing last_verified_date`);
  }

  if (rerunManifest.target !== entry.slug) {
    throw new Error(`${entry.slug} rerun manifest target mismatch: found ${rerunManifest.target}`);
  }

  if (rerunManifest.display_name !== entry.display_name) {
    throw new Error(`${entry.slug} rerun manifest display_name ${rerunManifest.display_name} does not match active-targets ${entry.display_name}`);
  }

  if (!["seeded_snapshot", "rerun_receipt"].includes(rerunManifest.evidence_origin)) {
    throw new Error(`${entry.slug} rerun manifest has unsupported evidence_origin ${rerunManifest.evidence_origin}`);
  }

  if (rerunManifest.published_status !== proofStatus.status) {
    throw new Error(`${entry.slug} rerun manifest status ${rerunManifest.published_status} does not match proof-status ${proofStatus.status}`);
  }

  if (rerunManifest.topogram_commit_tested !== proofStatus.topogram_commit_tested) {
    throw new Error(`${entry.slug} rerun manifest commit ${rerunManifest.topogram_commit_tested} does not match proof-status ${proofStatus.topogram_commit_tested}`);
  }

  if (rerunManifest.last_verified_date !== proofStatus.last_verified_date) {
    throw new Error(`${entry.slug} rerun manifest date ${rerunManifest.last_verified_date} does not match proof-status ${proofStatus.last_verified_date}`);
  }

  if (rerunManifest.source_tree_hash !== sourceTreeHash) {
    throw new Error(`${entry.slug} rerun manifest source tree hash does not match the committed source snapshot`);
  }

  if (rerunManifest.topogram_tree_hash !== topogramTreeHash) {
    throw new Error(`${entry.slug} rerun manifest topogram tree hash does not match the committed topogram snapshot`);
  }

  if ((rerunManifest.adoption_contract?.blocked_item_count || 0) !== (adoptionStatus.blocked_item_count || 0) ||
      (rerunManifest.adoption_contract?.applied_item_count || 0) !== (adoptionStatus.applied_item_count || 0) ||
      rerunManifest.adoption_contract?.next_bundle !== adoptionStatus.next_bundle) {
    throw new Error(`${entry.slug} rerun manifest adoption contract does not match the committed adoption-status.json`);
  }

  if (rerunManifest.evidence_origin === "rerun_receipt" && !rerunManifest.receipt_recorded_at) {
    throw new Error(`${entry.slug} rerun manifest is marked rerun_receipt but has no receipt_recorded_at`);
  }

  if (rerunManifest.evidence_origin === "seeded_snapshot" && rerunManifest.receipt_recorded_at) {
    throw new Error(`${entry.slug} seeded rerun manifest should not carry a receipt_recorded_at`);
  }

  if ((proofStatus.last_verification_receipt_recorded_at || null) !== (rerunManifest.receipt_recorded_at || null)) {
    throw new Error(`${entry.slug} proof-status receipt timestamp does not match rerun manifest receipt timestamp`);
  }

  if (forbiddenProvenance.length > 0) {
    const example = forbiddenProvenance[0];
    throw new Error(
      `${entry.slug} committed topogram snapshot still contains forbidden historical absolute provenance in ${example.file}: ${example.prefix}`
    );
  }

  if (extractReadmeStatus(readmeText, "proof status") !== proofStatus.status) {
    throw new Error(`${entry.slug} README proof status line does not match proof-status.json`);
  }

  if (extractReadmeStatus(readmeText, "Topogram commit tested") !== proofStatus.topogram_commit_tested) {
    throw new Error(`${entry.slug} README commit line does not match proof-status.json`);
  }

  if (extractReadmeStatus(readmeText, "last verified date") !== proofStatus.last_verified_date) {
    throw new Error(`${entry.slug} README date line does not match proof-status.json`);
  }

  verifiedTargets.push({
    slug: entry.slug,
    status: proofStatus.status,
    evidence_origin: rerunManifest.evidence_origin,
    next_bundle: adoptionStatus.next_bundle,
    blocked_item_count: adoptionStatus.blocked_item_count,
    applied_item_count: adoptionStatus.applied_item_count
  });
}

console.log(JSON.stringify({
  type: "imported_target_verification",
  target_count: verifiedTargets.length,
  verified_targets: verifiedTargets
}, null, 2));
