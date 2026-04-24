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

The published commit/date metadata should now be updated only through the receipt-gated flow:

1. rerun the imported target into a workspace outside the repo
2. capture a verification receipt from that rerun workspace
3. sync the committed `source/` and `topogram/` snapshot to match the rerun workspace
4. refresh `proof-status.json` metadata

`refresh-proof-status-metadata.mjs` refuses to update the metadata unless those snapshot hashes and structural checks line up, and it publishes a committed `rerun-manifest.json` at the same time so the claim points to concrete committed rerun evidence.
