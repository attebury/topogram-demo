---
id: account_journey
kind: journey
title: Account Sign-In and Session Flow
status: inferred
summary: Candidate account journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_account
related_capabilities:
  - cap_create_account
  - cap_list_accounts
  - cap_register_account
  - cap_sign_in_account
  - cap_update_account_role
  - cap_update_account_status
related_workflows:
  - workflow_account
provenance:
  - src/docs/openapi.ts#POST /login
  - src/docs/openapi.ts#POST /signup
  - src/docs/openapi.ts#GET /admin/accounts
  - src/docs/openapi.ts#POST /admin/accounts
  - src/docs/openapi.ts#PUT /admin/accounts/{id}/role
  - src/docs/openapi.ts#PUT /admin/accounts/{id}/status
  - src/schema.ts
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on signing in and establishing account access cleanly based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: `cap_create_account`, `cap_list_accounts`, `cap_register_account`, `cap_sign_in_account`, `cap_update_account_role`, `cap_update_account_status`
Workflows: `workflow_account`
Rules: _none_
Screens: _none_
Routes: _none_

## Happy Path

1. The user through the account API surface and provides the credentials or session input required by `cap_register_account`, `cap_sign_in_account`.
2. The recovered flow returns the user to the authenticated account state without losing the intended next step.
3. The user continues through `cap_update_account_role`, `cap_update_account_status` while keeping the recovered account lifecycle coherent.

## Alternate Paths

- Workflow evidence such as `workflow_account` should stay aligned with the journey instead of drifting into an undocumented lifecycle.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- If only API evidence exists today, add UI or docs context before promoting this journey as canonical.

## Change Review Notes

Review this journey when changing account capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/account_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `account` so future reconcile runs continue to explain the same user-goal flow.
