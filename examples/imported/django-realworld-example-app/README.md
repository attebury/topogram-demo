# django-realworld-example-app

## What This Proves

This target shows that Topogram can import, reconcile, and adopt a Django RealWorld brownfield app into a closed imported proof state.

## Current Status

- proof status: `closed`
- Topogram commit tested: `7b68b970`
- last verified date: `2026-04-25`

## Rerun

```bash
export TOPOGRAM_REPO="${TOPOGRAM_REPO:-../topogram}"
export TOPOGRAM_DEMO_REPO="${TOPOGRAM_DEMO_REPO:-../topogram-demo}"
export TARGET_ROOT="${TARGET_ROOT:-$(mktemp -d /tmp/topogram-demo-django-realworld-XXXXXX)}"

rsync -a \
  "$TOPOGRAM_DEMO_REPO/examples/imported/django-realworld-example-app/source/" \
  "$TARGET_ROOT/"

cd "$TOPOGRAM_REPO/engine"
node ./src/cli.js import app "$TARGET_ROOT" --from db,api,ui,workflows --write
node ./src/cli.js import docs "$TARGET_ROOT" --write
node ./src/cli.js report gaps "$TARGET_ROOT" --write
node ./src/cli.js reconcile "$TARGET_ROOT" --write
node ./src/cli.js adoption status "$TARGET_ROOT" --write
node ./src/cli.js reconcile adopt from-plan "$TARGET_ROOT" --write
node ./src/cli.js reconcile "$TARGET_ROOT" --write
node ./src/cli.js adoption status "$TARGET_ROOT" --write
```

After the rerun, capture a local verification receipt and only refresh the published metadata after the committed `source/` and `topogram/` snapshot matches that rerun receipt:

```bash
cd "$TOPOGRAM_DEMO_REPO"
node ./ops/capture-verification-receipt.mjs django-realworld-example-app --topogram-repo "$TOPOGRAM_REPO" --rerun-root "$TARGET_ROOT"
# sync examples/imported/django-realworld-example-app/source and topogram from "$TARGET_ROOT" before refreshing metadata
node ./ops/refresh-proof-status-metadata.mjs --topogram-repo "$TOPOGRAM_REPO" django-realworld-example-app
```

## Current Limits

- This repo stores a closed imported proof snapshot, not a continuously rerun upstream sync.
- Fresh reruns should be compared against the committed `topogram/` tree rather than assumed to match byte-for-byte forever.

## Source Of Truth

- source snapshot: [`source/`](./source/)
- committed imported outputs: [`topogram/`](./topogram/)
- committed rerun evidence: [`rerun-manifest.json`](./rerun-manifest.json)
- seeded from historical Topogram trial snapshot: `topogram/trials/django-realworld-example-app` at Topogram commit `396fd5c`
