import childProcess from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const inventoryPath = path.join(repoRoot, "ops", "active-targets.json");
const defaultTopogramRepo = path.resolve(repoRoot, "..", "topogram");

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
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  parseIsoDate(options.date);

  const inventory = readJson(inventoryPath);
  const selectedSlugs = new Set(options.all ? inventory.map((entry) => entry.slug) : options.slugs);
  const topogramCommit = resolveGitShortSha(options.topogramRepo, options.topogramRef);
  const refreshed = [];

  for (const entry of inventory) {
    if (!selectedSlugs.has(entry.slug)) {
      continue;
    }

    const proofStatusPath = path.join(repoRoot, entry.target_dir, "proof-status.json");
    const proofStatus = readJson(proofStatusPath);
    const nextStatus = {
      ...proofStatus,
      topogram_commit_tested: topogramCommit,
      last_verified_date: options.date
    };
    writeJson(proofStatusPath, nextStatus);
    refreshed.push({
      slug: entry.slug,
      proof_status_path: path.relative(repoRoot, proofStatusPath),
      topogram_commit_tested: topogramCommit,
      last_verified_date: options.date
    });
  }

  if (refreshed.length === 0) {
    throw new Error("No matching targets were refreshed.");
  }

  console.log(
    JSON.stringify(
      {
        type: "proof_status_metadata_refresh",
        refreshed_targets: refreshed
      },
      null,
      2
    )
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
