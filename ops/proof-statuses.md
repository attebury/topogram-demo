# Proof Statuses

Imported proof targets use these statuses:

- `closed`
- `partial`
- `drifting`
- `broken`
- `archived`

`closed` means the stored `topogram/candidates/reconcile/adoption-status.json` still satisfies:

- `next_bundle === null`
- `blocked_item_count === 0`
- `applied_item_count > 0`

Freshness is tracked separately from that structural status.

An active imported claim is freshness-current only when:

- `topogram_commit_tested` matches the Topogram commit being compared against
- `last_verified_date` is still within the freshness window

That means a target can remain structurally `closed` while still being freshness-stale and needing rerun attention.
