import childProcess from "node:child_process";

const proofAffectingPathspec = ["engine"];

function runGit(repoPath, args) {
  const run = childProcess.spawnSync("git", ["-C", repoPath, ...args], {
    encoding: "utf8",
    env: {
      ...process.env,
      PATH: process.env.PATH || ""
    }
  });

  if (run.status !== 0) {
    throw new Error(`Git command failed in ${repoPath}: git ${args.join(" ")}\n${run.stderr || run.stdout}`);
  }

  return run.stdout.trim();
}

export function resolveTopogramProofCommit(repoPath, ref = "HEAD") {
  const proofRef = runGit(repoPath, ["rev-list", "-1", ref, "--", ...proofAffectingPathspec]);
  const resolvedRef = proofRef || ref;
  return runGit(repoPath, ["rev-parse", "--short=8", resolvedRef]);
}

export function resolveGitShortSha(repoPath, ref = "HEAD") {
  return runGit(repoPath, ["rev-parse", "--short=8", ref]);
}

export function describeTopogramProofScope() {
  return proofAffectingPathspec.map((entry) => `\`${entry}/**\``).join(", ");
}
