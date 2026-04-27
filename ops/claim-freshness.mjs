import fs from "node:fs";
import path from "node:path";
import { resolveTopogramProofCommit } from "./topogram-proof-ref.mjs";

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
    maxAgeDays: Number(process.env.MAX_VERIFICATION_AGE_DAYS || defaultMaxVerificationAgeDays),
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
    } else if (token === "--max-age-days") {
      options.maxAgeDays = Number(argv[index + 1]);
      index += 1;
    } else if (token === "--slug") {
      const slug = argv[index + 1];
      if (!slug) {
        throw new Error("Expected --slug <target-slug>");
      }
      options.slugs.push(slug);
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
  resolvePublishedProofCommit,
  maxAgeDays,
  today,
  selectedSlugs = null,
  repoRootDir = repoRoot
}) {
  const targetInventory = selectedSlugs ? inventory.filter((entry) => selectedSlugs.has(entry.slug)) : inventory;

  const assessedTargets = targetInventory.map((entry) => {
    const targetRoot = path.join(repoRootDir, entry.target_dir);
    const proofStatus = readJson(path.join(targetRoot, "proof-status.json"));
    const lastVerifiedDate = parseIsoDate(proofStatus.last_verified_date);
    const ageDays = diffDays(today, lastVerifiedDate);
    const reasons = [];
    const publishedProofCommit = resolvePublishedProofCommit(proofStatus.topogram_commit_tested);

    if (publishedProofCommit !== topogramCommit) {
      reasons.push(
        `topogram_commit_tested=${proofStatus.topogram_commit_tested} resolves to proof commit ${publishedProofCommit}, not current ${topogramCommit}`
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
      published_proof_affecting_topogram_commit: publishedProofCommit,
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
    scope: selectedSlugs ? "selected_targets" : "active_inventory",
    selected_slugs: selectedSlugs ? Array.from(selectedSlugs) : [],
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
  const selectedSlugs = options.slugs.length > 0 ? new Set(options.slugs) : null;

  if (selectedSlugs) {
    for (const slug of selectedSlugs) {
      if (!inventory.some((entry) => entry.slug === slug)) {
        throw new Error(`Unknown target slug: ${slug}`);
      }
    }
  }

  const topogramCommit = resolveTopogramProofCommit(options.topogramRepo, options.topogramRef);
  const report = assessClaimFreshness({
    inventory,
    topogramCommit,
    resolvePublishedProofCommit: (ref) => resolveTopogramProofCommit(options.topogramRepo, ref),
    maxAgeDays: options.maxAgeDays,
    today: new Date(),
    selectedSlugs
  });

  console.log(JSON.stringify(report, null, 2));

  if (report.stale_target_count > 0) {
    process.exitCode = 1;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
