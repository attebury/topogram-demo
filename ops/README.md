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
