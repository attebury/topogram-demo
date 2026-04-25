import childProcess from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const inventoryPath = path.join(repoRoot, "ops", "active-targets.json");
const defaultTopogramRepo = path.resolve(repoRoot, "..", "topogram");
const defaultMaxVerificationAgeDays = 14;

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function parseArgs(argv) {
  const options = {
    topogramRepo: process.env.TOPOGRAM_REPO || defaultTopogramRepo,
    topogramRef: process.env.TOPOGRAM_REF || "HEAD",
    maxAgeDays: Number(process.env.MAX_VERIFICATION_AGE_DAYS || defaultMaxVerificationAgeDays)
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--topogram-repo") {
      options.topogramRepo = argv[index + 1];
      index += 1;
    } else if (token === "--topogram-ref") {
      options.topogramRef = argv[index + 1];
      index += 1;
    } else if (token === "--max-age-days") {
      options.maxAgeDays = Number(argv[index + 1]);
      index += 1;
    } else {
      throw new Error(`Unknown argument: ${token}`);
    }
  }

  if (!Number.isFinite(options.maxAgeDays) || options.maxAgeDays < 0) {
    throw new Error(`Expected --max-age-days to be a non-negative number, received ${options.maxAgeDays}`);
  }

  return options;
}

function resolveGitShortSha(repoPath, ref) {
  const run = childProcess.spawnSync("git", ["-C", repoPath, "rev-parse", "--short=8", ref], {
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

function diffDays(later, earlier) {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((later.getTime() - earlier.getTime()) / msPerDay);
}

export function assessClaimFreshness({
  inventory,
  topogramCommit,
  maxAgeDays,
  today,
  repoRootDir = repoRoot
}) {
  const assessedTargets = inventory.map((entry) => {
    const targetRoot = path.join(repoRootDir, entry.target_dir);
    const proofStatus = readJson(path.join(targetRoot, "proof-status.json"));
    const lastVerifiedDate = parseIsoDate(proofStatus.last_verified_date);
    const ageDays = diffDays(today, lastVerifiedDate);
    const reasons = [];

    if (proofStatus.topogram_commit_tested !== topogramCommit) {
      reasons.push(
        `topogram_commit_tested=${proofStatus.topogram_commit_tested} does not match current ${topogramCommit}`
      );
    }

    if (ageDays > maxAgeDays) {
      reasons.push(`last_verified_date is ${ageDays} day(s) old which exceeds ${maxAgeDays}`);
    }

    return {
      slug: entry.slug,
      display_name: entry.display_name,
      published_status: proofStatus.status,
      topogram_commit_tested: proofStatus.topogram_commit_tested,
      current_topogram_commit: topogramCommit,
      last_verified_date: proofStatus.last_verified_date,
      verification_age_days: ageDays,
      freshness_state: reasons.length === 0 ? "current" : "stale",
      stale_reasons: reasons
    };
  });

  return {
    type: "claim_freshness_report",
    checked_at: today.toISOString().slice(0, 10),
    max_verification_age_days: maxAgeDays,
    stale_target_count: assessedTargets.filter((target) => target.freshness_state === "stale").length,
    assessed_targets: assessedTargets
  };
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(options.topogramRepo)) {
    throw new Error(
      `Topogram repo not found at ${options.topogramRepo}. Pass --topogram-repo <path> or set TOPOGRAM_REPO.`
    );
  }

  const inventory = readJson(inventoryPath);
  const topogramCommit = resolveGitShortSha(options.topogramRepo, options.topogramRef);
  const report = assessClaimFreshness({
    inventory,
    topogramCommit,
    maxAgeDays: options.maxAgeDays,
    today: new Date()
  });

  console.log(JSON.stringify(report, null, 2));

  if (report.stale_target_count > 0) {
    process.exitCode = 1;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
