---
id: user_journey
kind: journey
title: User Creation Flow
status: inferred
summary: Candidate user journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_user
related_capabilities:
  - cap_create_user
  - cap_get_user
  - cap_update_user
related_workflows:
  - workflow_user
provenance:
  - config/routes.rb#GET /api/users/:id
  - config/routes.rb#GET /api/user
  - app/controllers/users_controller.rb
  - config/routes.rb#POST /api/users
  - config/routes.rb#PUT /api/user
  - db/schema.rb
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on creating user work safely based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: `cap_create_user`, `cap_get_user`, `cap_update_user`
Workflows: `workflow_user`
Rules: _none_
Screens: _none_
Routes: _none_

## Happy Path

1. The user enters the flow through the user API surface.
2. The recovered flow uses `cap_get_user` to load or establish the current user state.
3. The user continues through `cap_update_user` while keeping the recovered user lifecycle coherent.

## Alternate Paths

- Workflow evidence such as `workflow_user` should stay aligned with the journey instead of drifting into an undocumented lifecycle.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- If only API evidence exists today, add UI or docs context before promoting this journey as canonical.

## Change Review Notes

Review this journey when changing user capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/user_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `user` so future reconcile runs continue to explain the same user-goal flow.
