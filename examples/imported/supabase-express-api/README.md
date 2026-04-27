# supabase-express-api

## What This Proves

This target shows that Topogram can import, reconcile, and adopt a backend-first Supabase-shaped codebase into a closed imported proof state.

## Current Status

- proof status: `closed`
- Topogram commit tested: `d7e3a029`
- last verified date: `2026-04-27`

## Rerun

```bash
export TOPOGRAM_REPO="${TOPOGRAM_REPO:-../topogram}"
export TOPOGRAM_DEMO_REPO="${TOPOGRAM_DEMO_REPO:-../topogram-demo}"
export TARGET_ROOT="${TARGET_ROOT:-$(mktemp -d /tmp/topogram-demo-supabase-XXXXXX)}"

cd "$TOPOGRAM_DEMO_REPO"
node ./ops/rerun-imported-target.mjs supabase-express-api \
  --topogram-repo "$TOPOGRAM_REPO" \
  --target-root "$TARGET_ROOT"
```

That helper performs the real closure loop. It keeps applying the current `bundle-review:*` selector plus `from-plan` until `next_bundle` is `null` or the run stops making progress.

After the rerun, capture a local verification receipt and only refresh the published metadata after the committed `source/` and `topogram/` snapshot matches that rerun receipt:

```bash
cd "$TOPOGRAM_DEMO_REPO"
node ./ops/capture-verification-receipt.mjs supabase-express-api --topogram-repo "$TOPOGRAM_REPO" --rerun-root "$TARGET_ROOT"
# sync examples/imported/supabase-express-api/source and topogram from "$TARGET_ROOT" before refreshing metadata
node ./ops/refresh-proof-status-metadata.mjs --topogram-repo "$TOPOGRAM_REPO" supabase-express-api
```

## Current Limits

- This repo stores a closed imported proof snapshot, not a continuously rerun upstream sync.
- Fresh reruns should be compared against the committed `topogram/` tree rather than assumed to match byte-for-byte forever.

## Source Of Truth

- source snapshot: [`source/`](./source/)
- committed imported outputs: [`topogram/`](./topogram/)
- committed rerun evidence: [`rerun-manifest.json`](./rerun-manifest.json)
- seeded from historical Topogram trial snapshot: `topogram/trials/supabase-express-api` at Topogram commit `396fd5c`
