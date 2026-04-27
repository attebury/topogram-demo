# Active Imported Claims

The active imported proof set is intentionally small and explicit. The canonical inventory lives in [active-targets.json](./active-targets.json), and the browsable target index lives under [../examples/imported](../examples/imported/README.md).

Active claims need two kinds of honesty:

- the stored imported proof must still close structurally
- the published commit/date metadata must still be fresh relative to current Topogram

Use:

- `node ./ops/verify-imported-targets.mjs`
- `node ./ops/claim-freshness.mjs --topogram-repo ../topogram`
- `node ./ops/capture-verification-receipt.mjs <slug> --topogram-repo ../topogram --rerun-root /path/to/rerun-workspace`
- `node ./ops/refresh-proof-status-metadata.mjs --topogram-repo ../topogram <slug>`

before treating the active set as current. The metadata refresh step is now receipt-gated, so commit/date metadata cannot be bumped without a matching rerun receipt and a committed snapshot that matches it.

Those checks also run automatically in GitHub Actions through [`.github/workflows/imported-proof-freshness.yml`](../.github/workflows/imported-proof-freshness.yml), which compares the active claims against `attebury/topogram` `main` on PRs, pushes, a weekday schedule, and manual dispatch.

When freshness drift appears on a non-PR run, that workflow now opens or updates a single `Imported proof freshness drift` issue so the refresh queue is explicit instead of living only in CI logs.
