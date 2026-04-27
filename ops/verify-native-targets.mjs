import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const nativeRoot = path.join(repoRoot, "examples", "native");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function extractReadmeStatus(readmeText, label) {
  const pattern = new RegExp(`- ${label}: ` + "`([^`]+)`");
  const match = readmeText.match(pattern);
  if (!match) {
    throw new Error(`README is missing status line for ${label}`);
  }
  return match[1];
}

if (!fs.existsSync(nativeRoot)) {
  console.log("No examples/native directory.");
  process.exit(0);
}

const entries = fs
  .readdirSync(nativeRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith("."))
  .map((d) => d.name)
  .sort();

if (entries.length === 0) {
  console.log("No examples/native targets yet.");
  process.exit(0);
}

const requiredProofFields = ["target", "display_name", "status", "topogram_commit_tested", "last_verified_date", "known_blockers"];

for (const slug of entries) {
  const targetRoot = path.join(nativeRoot, slug);
  const readmePath = path.join(targetRoot, "README.md");
  const proofStatusPath = path.join(targetRoot, "proof-status.json");

  if (!fs.existsSync(readmePath)) {
    throw new Error(`Missing README: examples/native/${slug}`);
  }
  if (!fs.existsSync(proofStatusPath)) {
    throw new Error(`Missing proof-status.json: examples/native/${slug}`);
  }

  const proofStatus = readJson(proofStatusPath);
  const readmeText = readText(readmePath);

  for (const field of requiredProofFields) {
    if (!(field in proofStatus)) {
      throw new Error(`${slug}: proof-status.json missing ${field}`);
    }
  }

  if (!Array.isArray(proofStatus.known_blockers)) {
    throw new Error(`${slug}: known_blockers must be an array`);
  }

  if (proofStatus.target !== slug) {
    throw new Error(`${slug}: proof-status target mismatch (found ${proofStatus.target})`);
  }

  const readmeStatus = extractReadmeStatus(readmeText, "proof status");
  const readmeCommit = extractReadmeStatus(readmeText, "Topogram commit tested");
  const readmeDate = extractReadmeStatus(readmeText, "last verified date");

  if (readmeStatus !== proofStatus.status) {
    throw new Error(`${slug}: README proof status ${readmeStatus} does not match proof-status.json ${proofStatus.status}`);
  }
  if (readmeCommit !== proofStatus.topogram_commit_tested) {
    throw new Error(`${slug}: README Topogram commit does not match proof-status.json`);
  }
  if (readmeDate !== proofStatus.last_verified_date) {
    throw new Error(`${slug}: README last verified date does not match proof-status.json`);
  }
}

console.log(`Verified ${entries.length} native target(s): ${entries.join(", ")}`);
