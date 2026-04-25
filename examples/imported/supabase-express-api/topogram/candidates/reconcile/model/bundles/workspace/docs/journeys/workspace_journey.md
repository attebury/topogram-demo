---
id: workspace_journey
kind: journey
title: Workspace Creation, Detail, and Lifecycle Flow
status: inferred
summary: Candidate workspace journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_workspace
related_capabilities:
  - cap_create_workspace
  - cap_delete_workspace
  - cap_get_workspace
  - cap_list_workspaces
  - cap_update_workspace
related_workflows:
  - workflow_workspace
provenance:
  - src/docs/openapi.ts#GET /workspaces
  - src/docs/openapi.ts#GET /admin/workspaces
  - src/docs/openapi.ts#POST /workspaces
  - src/docs/openapi.ts#GET /workspaces/{id}
  - src/docs/openapi.ts#PATCH /workspaces/{id}
  - src/docs/openapi.ts#DELETE /workspaces/{id}
  - src/schema.ts
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on creating workspace work, finding it again, and moving it through lifecycle changes with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: `cap_create_workspace`, `cap_delete_workspace`, `cap_get_workspace`, `cap_list_workspaces`, `cap_update_workspace`
Workflows: `workflow_workspace`
Rules: _none_
Screens: _none_
Routes: _none_

## Happy Path

1. The user enters the flow through the workspace API surface.
2. The recovered flow uses `cap_create_workspace` to create or submit new workspace work, then `cap_get_workspace`, `cap_list_workspaces` to find it again.
3. The user continues through `cap_delete_workspace`, `cap_update_workspace` while keeping the recovered workspace lifecycle coherent.

## Alternate Paths

- Workflow evidence such as `workflow_workspace` should stay aligned with the journey instead of drifting into an undocumented lifecycle.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- If only API evidence exists today, add UI or docs context before promoting this journey as canonical.

## Change Review Notes

Review this journey when changing workspace capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/workspace_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `workspace` so future reconcile runs continue to explain the same user-goal flow.
