# Active Imported Claims

The active imported proof set is intentionally small and explicit:

- `supabase-express-api`
- `eshoponweb`
- `clean-architecture-swiftui`
- `rails-realworld-example-app`
- `django-realworld-example-app`

The machine-readable inventory lives in [active-targets.json](./active-targets.json).

Active claims need two kinds of honesty:

- the stored imported proof must still close structurally
- the published commit/date metadata must still be fresh relative to current Topogram

Use:

- `node ./ops/verify-imported-targets.mjs`
- `node ./ops/claim-freshness.mjs --topogram-repo ../topogram`

before treating the active set as current.
