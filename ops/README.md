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
- `source/`
- `topogram/`
- `topogram/candidates/reconcile/adoption-status.json`

It also checks that published `closed` statuses still match the stored adoption contract.

## Freshness Drift

Run this from the repo root to compare the active claims against a Topogram checkout:

```bash
node ./ops/claim-freshness.mjs --topogram-repo ../topogram
```

The freshness report flags targets as stale when:

- `topogram_commit_tested` is behind the compared Topogram commit
- `last_verified_date` is older than the freshness window

Use this after pulling or merging Topogram changes that could affect imported-proof claims.

## Refreshing Proof Metadata

After rerunning an imported target and confirming the stored proof still matches reality, refresh the recorded commit/date metadata:

```bash
node ./ops/refresh-proof-status-metadata.mjs --topogram-repo ../topogram <slug>
```

Or refresh the whole active set after a coordinated rerun:

```bash
node ./ops/refresh-proof-status-metadata.mjs --topogram-repo ../topogram --all
```
