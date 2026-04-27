# Proof Ops

This repo keeps imported brownfield proof targets outside the main product repo.

## Active Inventory

The canonical active target list is [active-targets.json](./active-targets.json).

## Verification

Run this from the repo root:

```bash
node ./ops/verify-imported-targets.mjs
```

The verifier checks that every active imported target has:

- `README.md`
- `proof-status.json`
- `rerun-manifest.json`
- `source/`
- `topogram/`
- `topogram/candidates/reconcile/adoption-status.json`

It also checks that:

- published `closed` statuses still match the stored adoption contract
- the committed `rerun-manifest.json` hashes still match the committed `source/` and `topogram/` trees
- `display_name` and target identity stay aligned across the inventory, `proof-status.json`, and `rerun-manifest.json`
- the committed imported `topogram/` snapshot no longer carries stale machine-local provenance from the old `topogram/trials/...` paths
- the README status lines still match `proof-status.json`

## Freshness Drift

Run this from the repo root to compare the active claims against a Topogram checkout:

```bash
node ./ops/claim-freshness.mjs --topogram-repo ../topogram
```

By default, the script compares against the latest proof-affecting commit in `topogram`, not blindly against every merge to `main`. The current proof-affecting scope is `engine/**`.

The freshness report flags targets as stale when:

- `topogram_commit_tested` is behind the compared proof-affecting Topogram commit
- `last_verified_date` is older than the freshness window

Use this after pulling or merging Topogram changes that could affect imported-proof claims.

The same check now runs automatically in GitHub Actions via [`.github/workflows/imported-proof-freshness.yml`](../.github/workflows/imported-proof-freshness.yml). That workflow:

- verifies the committed imported targets on every PR and push to `main`
- compares the active claim set against `attebury/topogram` `main`
- runs on a weekday schedule and supports manual dispatch for on-demand freshness checks
- uploads the JSON freshness report as a workflow artifact
- writes a job summary that names stale targets directly
- opens or updates a single `Imported proof freshness drift` tracking issue on non-PR runs when claims go stale, and closes it again when the active set is current

Manual dispatch supports:

- `scope=all` for the full active imported claim set
- `scope=single` plus `slug=<target>` for one imported target

Single-target manual runs still upload a report and render a summary, but they do not open or close the global drift issue.

## Rerunning Imported Targets

Run a real imported-target rerun from the repo root with:

```bash
node ./ops/rerun-imported-target.mjs <slug> --topogram-repo ../topogram
```

That helper:

- copies the committed `examples/imported/<slug>/source` snapshot into a temp workspace
- runs the standard import + reconcile flow from the sibling `topogram` checkout
- repeatedly applies the current `bundle-review:*` selector plus `from-plan`
- stops only when `next_bundle` is `null` or the run stops making progress

Use `--target-root /path/to/workspace` if you want a stable rerun directory, or `--max-review-iterations <n>` if a target legitimately needs a higher review ceiling.

## Capturing Verification Receipts

After a real rerun into a temp workspace, capture a local verification receipt:

```bash
node ./ops/capture-verification-receipt.mjs <slug> --topogram-repo ../topogram --rerun-root /path/to/rerun-workspace
```

The receipt records:

- the Topogram commit used for the rerun
- the derived structural status from the rerun workspace
- a hash of the rerun workspace source tree
- a hash of the rerun workspace `topogram/` tree

Local receipts live under `ops/verification-receipts/` and are intentionally ignored by git. They are local evidence used to unlock a committed manifest + metadata refresh; they are not the published proof artifact themselves.

## Refreshing Proof Metadata

`refresh-proof-status-metadata.mjs` now refuses to update `proof-status.json` unless:

- a receipt exists for that target
- the receipt Topogram commit matches the current compared Topogram commit
- the committed `examples/imported/<slug>/source` tree matches the rerun receipt hash
- the committed `examples/imported/<slug>/topogram` tree matches the rerun receipt hash
- the committed imported proof still derives the published structural status

When that succeeds, it also writes the committed `rerun-manifest.json` for the target so the published claim points to a concrete committed evidence record instead of only a local receipt.

Refresh one target after syncing the committed snapshot to the rerun output:

```bash
node ./ops/refresh-proof-status-metadata.mjs --topogram-repo ../topogram <slug>
```

Or refresh the whole active set after coordinated reruns and committed snapshot updates:

```bash
node ./ops/refresh-proof-status-metadata.mjs --topogram-repo ../topogram --all
```
