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
