# Imported Proof Targets

This directory contains the active imported brownfield proof targets for Topogram.

Each target includes:

- `source/`: the imported app snapshot
- `topogram/`: the committed imported Topogram outputs
- `README.md`: proof scope, rerun commands, and limits
- `proof-status.json`: machine-readable proof metadata

## Active Imported Claim Set

- [supabase-express-api](./supabase-express-api/README.md)
- [eshoponweb](./eshoponweb/README.md)
- [clean-architecture-swiftui](./clean-architecture-swiftui/README.md)
- [rails-realworld-example-app](./rails-realworld-example-app/README.md)
- [django-realworld-example-app](./django-realworld-example-app/README.md)

Use [../../ops/README.md](../../ops/README.md) for the verification command and [../../ops/active-targets.json](../../ops/active-targets.json) for the canonical active-target inventory.

Proof metadata updates are now receipt-gated: do not hand-edit `topogram_commit_tested` or `last_verified_date`. Capture a local verification receipt from a real rerun workspace first, then refresh metadata only after the committed snapshot matches that receipt.
