# Native / full-stack parity

This folder holds **native mobile or desktop parity** proofs that are **too heavy** for default CI in the main [topogram](https://github.com/attebury/topogram) repo (Xcode, Gradle, pinned SDKs).

It is **not** the same as [`examples/imported`](../imported/README.md):

| Folder | Purpose |
|--------|---------|
| `examples/imported/` | Brownfield **import**, reconcile, adopt |
| `examples/native/` | **Build parity** for native workspaces (generated or hand-placed) against a documented Topogram commit |

Each `<target>/` publishes:

- `README.md` — pinned toolchain versions, status lines matching `proof-status.json`
- `proof-status.json` — same fields as imported targets (`target`, `status`, `topogram_commit_tested`, `last_verified_date`, `known_blockers`)
- `rerun.sh` — how to rebuild or refresh the proof

Verification from repo root:

```bash
node ./ops/verify-native-targets.mjs
node ./ops/native-claim-freshness.mjs --topogram-repo ../topogram
```

See [ops/README.md](../../ops/README.md) and [topogram docs — Topogram Demo Ops](https://github.com/attebury/topogram/blob/main/docs/topogram-demo-ops.md).
