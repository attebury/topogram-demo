import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ignoredBasenames = new Set([
  ".DS_Store"
]);

const ignoredPrefixes = [
  "._"
];

const ignoredDirectoryNames = new Set([
  ".devcontainer",
  ".vscode"
]);

function shouldIgnoreSegment(segment) {
  return ignoredBasenames.has(segment) || ignoredPrefixes.some((prefix) => segment.startsWith(prefix));
}

function shouldIgnoreRelativePath(relativePath) {
  if (!relativePath || relativePath === ".") {
    return false;
  }

  const segments = relativePath.split(path.sep);
  return segments.some((segment) => ignoredDirectoryNames.has(segment) || shouldIgnoreSegment(segment));
}

export function normalizeForHash(contents) {
  if (contents.includes(0)) {
    return contents;
  }

  return Buffer.from(contents.toString("utf8").replace(/\r\n/g, "\n").replace(/\r/g, "\n"), "utf8");
}

export function listFiles(rootDir, options = {}, currentDir = rootDir) {
  const { includeRelativePath = () => true } = options;
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(currentDir, entry.name);
    const relativePath = path.relative(rootDir, absolutePath);

    if (shouldIgnoreRelativePath(relativePath)) {
      continue;
    }

    if (entry.isDirectory()) {
      if (includeRelativePath(relativePath)) {
        files.push(...listFiles(rootDir, options, absolutePath));
      }
    } else if (includeRelativePath(relativePath)) {
      files.push(relativePath);
    }
  }

  return files.sort();
}

export function hashDirectory(rootDir, options = {}) {
  const { includeRelativePath = () => true, normalizeText = false } = options;

  if (!fs.existsSync(rootDir)) {
    throw new Error(`Expected directory to exist: ${rootDir}`);
  }

  const hash = crypto.createHash("sha256");
  const files = listFiles(rootDir, { includeRelativePath });

  for (const relativePath of files) {
    const absolutePath = path.join(rootDir, relativePath);
    const contents = fs.readFileSync(absolutePath);
    hash.update(relativePath);
    hash.update("\0");
    hash.update(normalizeText ? normalizeForHash(contents) : contents);
    hash.update("\0");
  }

  return hash.digest("hex");
}
