# eShopOnWeb

## What This Proves

This target shows that Topogram can import, reconcile, and adopt a real .NET brownfield app into a closed imported proof state without losing the maintained-seam conservatism demonstrated in the product repo.

## Current Status

- proof status: `closed`
- Topogram commit tested: `3e0ec40e`
- last verified date: `2026-04-27`

## Rerun

```bash
export TOPOGRAM_REPO="${TOPOGRAM_REPO:-../topogram}"
export TOPOGRAM_DEMO_REPO="${TOPOGRAM_DEMO_REPO:-../topogram-demo}"
export TARGET_ROOT="${TARGET_ROOT:-$(mktemp -d /tmp/topogram-demo-eshoponweb-XXXXXX)}"

cd "$TOPOGRAM_DEMO_REPO"
node ./ops/rerun-imported-target.mjs eshoponweb \
  --topogram-repo "$TOPOGRAM_REPO" \
  --target-root "$TARGET_ROOT"
```

That helper performs the real closure loop. It keeps applying the current `bundle-review:*` selector plus `from-plan` until `next_bundle` is `null` or the run stops making progress.

After the rerun, capture a local verification receipt and only refresh the published metadata after the committed `source/` and `topogram/` snapshot matches that rerun receipt:

```bash
cd "$TOPOGRAM_DEMO_REPO"
node ./ops/capture-verification-receipt.mjs eshoponweb --topogram-repo "$TOPOGRAM_REPO" --rerun-root "$TARGET_ROOT"
# sync examples/imported/eshoponweb/source and topogram from "$TARGET_ROOT" before refreshing metadata
node ./ops/refresh-proof-status-metadata.mjs --topogram-repo "$TOPOGRAM_REPO" eshoponweb
```

## Current Limits

- This repo stores a closed imported proof snapshot, not a continuously rerun upstream sync.
- Fresh reruns should be compared against the committed `topogram/` tree rather than assumed to match byte-for-byte forever.

## Source Of Truth

- source snapshot: [`source/`](./source/)
- committed imported outputs: [`topogram/`](./topogram/)
- committed rerun evidence: [`rerun-manifest.json`](./rerun-manifest.json)
- seeded from historical Topogram trial snapshot: `topogram/trials/eShopOnWeb` at Topogram commit `396fd5c`
