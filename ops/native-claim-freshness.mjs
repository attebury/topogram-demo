import fs from "node:fs";
import path from "node:path";
import { resolveTopogramProofCommit } from "./topogram-proof-ref.mjs";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const nativeRoot = path.join(repoRoot, "examples", "native");
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

  return options;
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

function listNativeSlugs() {
  if (!fs.existsSync(nativeRoot)) {
    return [];
  }
  return fs
    .readdirSync(nativeRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("."))
    .map((d) => d.name)
    .sort();
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(options.topogramRepo)) {
    throw new Error(`Topogram repo not found at ${options.topogramRepo}. Pass --topogram-repo <path>.`);
  }

  const slugs = listNativeSlugs();
  const today = new Date();
  const topogramCommit = resolveTopogramProofCommit(options.topogramRepo, options.topogramRef);

  const assessedTargets = [];

  for (const slug of slugs) {
    const proofPath = path.join(nativeRoot, slug, "proof-status.json");
    const proofStatus = readJson(proofPath);

    if (proofStatus.status === "archived" || proofStatus.topogram_commit_tested === "pending") {
      assessedTargets.push({
        slug,
        freshness_state: "skipped_no_proof_commit",
        stale_reasons: [],
        notes: "archived or pending Topogram commit — freshness not enforced"
      });
      continue;
    }

    const lastVerifiedDate = parseIsoDate(proofStatus.last_verified_date);
    const ageDays = diffDays(today, lastVerifiedDate);
    const reasons = [];

    let publishedProofCommit;
    try {
      publishedProofCommit = resolveTopogramProofCommit(options.topogramRepo, proofStatus.topogram_commit_tested);
    } catch {
      reasons.push(`Could not resolve topogram_commit_tested=${proofStatus.topogram_commit_tested}`);
      publishedProofCommit = null;
    }

    if (publishedProofCommit && publishedProofCommit !== topogramCommit) {
      reasons.push(
        `topogram_commit_tested resolves to ${publishedProofCommit}, current proof-affecting commit is ${topogramCommit}`
      );
    }

    if (ageDays > options.maxAgeDays) {
      reasons.push(`last_verified_date is ${ageDays} day(s) old (max ${options.maxAgeDays})`);
    }

    assessedTargets.push({
      slug,
      freshness_state: reasons.length === 0 ? "current" : "stale",
      stale_reasons: reasons,
      topogram_commit_tested: proofStatus.topogram_commit_tested,
      current_proof_affecting_commit: topogramCommit
    });
  }

  const staleCount = assessedTargets.filter((t) => t.freshness_state === "stale").length;

  const report = {
    type: "native_claim_freshness_report",
    checked_at: today.toISOString().slice(0, 10),
    max_verification_age_days: options.maxAgeDays,
    stale_target_count: staleCount,
    assessed_targets: assessedTargets
  };

  console.log(JSON.stringify(report, null, 2));

  if (staleCount > 0) {
    process.exitCode = 1;
  }
}

main();
