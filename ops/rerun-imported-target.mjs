#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { mkdtempSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const inventoryPath = path.join(__dirname, "active-targets.json");

function usage(message = null) {
  if (message) {
    console.error(message);
    console.error("");
  }
  console.error(
    "Usage: node ./ops/rerun-imported-target.mjs <slug> --topogram-repo <path> [--target-root <path>] [--max-review-iterations <n>]",
  );
  process.exit(1);
}

function parseArgs(argv) {
  const args = {
    slug: null,
    topogramRepo: null,
    targetRoot: null,
    maxReviewIterations: 20,
  };
  const rest = [...argv];
  while (rest.length > 0) {
    const token = rest.shift();
    if (!args.slug && !token.startsWith("--")) {
      args.slug = token;
      continue;
    }
    if (token === "--topogram-repo") {
      args.topogramRepo = rest.shift();
      continue;
    }
    if (token === "--target-root") {
      args.targetRoot = rest.shift();
      continue;
    }
    if (token === "--max-review-iterations") {
      args.maxReviewIterations = Number.parseInt(rest.shift() ?? "", 10);
      continue;
    }
    usage(`Unknown argument: ${token}`);
  }
  if (!args.slug) {
    usage("Missing target slug.");
  }
  if (!args.topogramRepo) {
    usage("Missing --topogram-repo.");
  }
  if (!Number.isInteger(args.maxReviewIterations) || args.maxReviewIterations <= 0) {
    usage("Expected --max-review-iterations to be a positive integer.");
  }
  return args;
}

function runOrThrow(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: options.capture ? "pipe" : "inherit",
    encoding: "utf8",
    cwd: options.cwd,
  });
  if (result.status !== 0) {
    const rendered = [command, ...args].join(" ");
    const stderr = result.stderr?.trim();
    throw new Error(stderr ? `${rendered}\n${stderr}` : rendered);
  }
  return result.stdout ?? "";
}

function readJson(jsonPath) {
  return JSON.parse(fs.readFileSync(jsonPath, "utf8"));
}

function getTargetEntry(slug) {
  const inventory = readJson(inventoryPath);
  return inventory.find((entry) => entry.slug === slug) ?? null;
}

function renderStatus(status) {
  return {
    next_bundle: status.next_bundle?.bundle ?? null,
    next_selector: status.next_bundle?.next_action?.selector ?? null,
    blocked_item_count: status.blocked_item_count,
    applied_item_count: status.applied_item_count,
    approved_review_groups: status.approved_review_groups ?? [],
  };
}

function ensureProgressGuard(seenStates, status) {
  const key = JSON.stringify({
    next_bundle: status.next_bundle?.bundle ?? null,
    next_selector: status.next_bundle?.next_action?.selector ?? null,
    blocked_item_count: status.blocked_item_count,
    applied_item_count: status.applied_item_count,
    approved_review_groups: status.approved_review_groups ?? [],
  });
  if (seenStates.has(key)) {
    throw new Error(`Rerun loop stopped making progress at state ${key}`);
  }
  seenStates.add(key);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const target = getTargetEntry(args.slug);
  if (!target) {
    usage(`Unknown imported target slug: ${args.slug}`);
  }

  const topogramRepo = path.resolve(args.topogramRepo);
  const engineDir = path.join(topogramRepo, "engine");
  const cliPath = path.join(engineDir, "src", "cli.js");
  if (!fs.existsSync(cliPath)) {
    throw new Error(`Topogram engine CLI not found at ${cliPath}`);
  }

  const targetDir = path.join(repoRoot, target.target_dir);
  const sourceDir = path.join(targetDir, "source");
  const targetRoot =
    args.targetRoot
      ? path.resolve(args.targetRoot)
      : mkdtempSync(path.join(os.tmpdir(), `topogram-demo-${args.slug}-`));

  fs.mkdirSync(targetRoot, { recursive: true });
  runOrThrow("rsync", ["-a", "--delete", `${sourceDir}/`, `${targetRoot}/`], {
    cwd: repoRoot,
  });

  const cli = (...cliArgs) => runOrThrow("node", [cliPath, ...cliArgs], { cwd: engineDir });
  cli("import", "app", targetRoot, "--from", "db,api,ui,workflows", "--write");
  cli("import", "docs", targetRoot, "--write");
  cli("report", "gaps", targetRoot, "--write");
  cli("reconcile", targetRoot, "--write");
  cli("adoption", "status", targetRoot, "--write");

  const statusPath = path.join(targetRoot, "topogram", "candidates", "reconcile", "adoption-status.json");
  const seenStates = new Set();

  for (let iteration = 0; iteration < args.maxReviewIterations; iteration += 1) {
    const status = readJson(statusPath);
    ensureProgressGuard(seenStates, status);
    const selector = status.next_bundle?.next_action?.selector ?? null;
    if (!selector) {
      const summary = renderStatus(status);
      console.log(JSON.stringify({ slug: args.slug, target_root: targetRoot, closed: true, ...summary }, null, 2));
      return;
    }
    cli("reconcile", "adopt", selector, targetRoot, "--write");
    cli("reconcile", targetRoot, "--write");
    cli("adoption", "status", targetRoot, "--write");
    cli("reconcile", "adopt", "from-plan", targetRoot, "--write");
    cli("reconcile", targetRoot, "--write");
    cli("adoption", "status", targetRoot, "--write");
  }

  const status = readJson(statusPath);
  console.log(JSON.stringify({ slug: args.slug, target_root: targetRoot, closed: false, ...renderStatus(status) }, null, 2));
  process.exit(1);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
