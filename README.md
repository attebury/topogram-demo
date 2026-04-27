# Topogram Demo

This repo contains the imported proof targets for [Topogram](https://github.com/attebury/topogram).

Use the main `topogram` repo for:

- product code
- generated examples
- maintained proof apps
- fast engine and product verification

Use this repo for:

- imported brownfield proof targets
- committed `topogram/` outputs for real external apps
- proof status and rerun commands
- proof-ops verification for the active imported claim set

The alpha operator playbook for keeping those imported claims current lives in [ops/README.md](./ops/README.md).

## Example Taxonomy

Topogram uses three example relationships:

- `examples/generated/<app>`: generated reference apps
- `examples/maintained/<app>`: maintained proof apps
- `examples/imported/<app>`: real existing systems imported into Topogram

This repo owns the `examples/imported` side of that split.

## Active Imported Claims

The canonical active imported claim set lives in [ops/active-targets.json](./ops/active-targets.json) and is surfaced as navigable targets under [examples/imported](./examples/imported/README.md).

Every active imported target publishes:

- a source snapshot under `source/`
- committed imported outputs under `topogram/`
- a `proof-status.json`
- a committed `rerun-manifest.json` tying the published status to the exact committed `source/` and `topogram/` trees
- an executable rerun command
- the adoption-status evidence used to justify its published status

## Verification

Run the imported-proof structure verifier from the repo root:

```bash
node ./ops/verify-imported-targets.mjs
```

That command checks the active target inventory in [ops/active-targets.json](./ops/active-targets.json) and verifies that every published `closed` target still satisfies the stored imported-proof contract:

- `next_bundle === null`
- `blocked_item_count === 0`
- `applied_item_count > 0`

Run the freshness verifier to compare active claims against the current proof-affecting Topogram commit:

```bash
node ./ops/claim-freshness.mjs --topogram-repo ../topogram
```

That command reports freshness drift when:

- `topogram_commit_tested` does not match the current proof-affecting Topogram commit you are comparing against
- `last_verified_date` is older than the freshness window

GitHub Actions also runs this freshness check automatically in [`.github/workflows/imported-proof-freshness.yml`](./.github/workflows/imported-proof-freshness.yml) on pull requests, pushes to `main`, weekday schedule, and manual dispatch.

That workflow now also:

- uploads the JSON freshness report as a workflow artifact
- writes a job summary naming stale targets directly
- opens or updates a single `Imported proof freshness drift` issue on non-PR runs when the active claim set goes stale

Manual dispatch supports two scopes:

- `scope=all`: check the full active imported claim set
- `scope=single` with `slug=<target>`: check one imported target without opening or closing the global drift issue

After rerunning a target, first capture a local verification receipt from the rerun workspace, then refresh metadata only after the committed `source/`, committed `topogram/`, and committed `rerun-manifest.json` all line up with that receipt:

```bash
node ./ops/rerun-imported-target.mjs <slug> --topogram-repo ../topogram
node ./ops/capture-verification-receipt.mjs <slug> --topogram-repo ../topogram --rerun-root /path/to/rerun-workspace
node ./ops/refresh-proof-status-metadata.mjs --topogram-repo ../topogram <slug>
```

`rerun-imported-target.mjs` encodes the real closure loop. It imports the committed `source/` snapshot into a temp workspace, runs the standard import/reconcile flow, then repeatedly applies the current `bundle-review:*` selector plus `from-plan` until `next_bundle` is `null` or the run stops making progress.

## Repo Layout

```text
examples/
  imported/
    README.md
    supabase-express-api/
    eshoponweb/
    clean-architecture-swiftui/
    rails-realworld-example-app/
    django-realworld-example-app/
ops/
  README.md
  active-targets.json
  verify-imported-targets.mjs
```

## Status Model

Each imported target carries a `proof-status.json` with:

- `status`
- `topogram_commit_tested`
- `last_verified_date`
- `known_blockers`
- `notes`

Allowed status values:

- `closed`
- `partial`
- `drifting`
- `broken`
- `archived`
