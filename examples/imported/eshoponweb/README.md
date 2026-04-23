# eShopOnWeb

## What This Proves

This target shows that Topogram can import, reconcile, and adopt a real .NET brownfield app into a closed imported proof state without losing the maintained-seam conservatism demonstrated in the product repo.

## Current Status

- proof status: `closed`
- Topogram commit tested: `396fd5c`
- last verified date: `2026-04-22`

## Rerun

```bash
export TOPOGRAM_REPO="${TOPOGRAM_REPO:-../topogram}"
export TOPOGRAM_DEMO_REPO="${TOPOGRAM_DEMO_REPO:-../topogram-demo}"
export TARGET_ROOT="${TARGET_ROOT:-$(mktemp -d /tmp/topogram-demo-eshoponweb-XXXXXX)}"

rsync -a \
  "$TOPOGRAM_DEMO_REPO/examples/imported/eshoponweb/source/" \
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

## Current Limits

- This repo stores a closed imported proof snapshot, not a continuously rerun upstream sync.
- Fresh reruns should be compared against the committed `topogram/` tree rather than assumed to match byte-for-byte forever.

## Source Of Truth

- source snapshot: [`source/`](./source/)
- committed imported outputs: [`topogram/`](./topogram/)
- seeded from: `topogram/trials/eShopOnWeb` at Topogram commit `396fd5c`
