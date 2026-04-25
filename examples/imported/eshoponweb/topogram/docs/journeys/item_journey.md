---
id: item_journey
kind: journey
title: Item Discovery and Detail Flow
status: inferred
summary: Candidate item journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_item
related_capabilities:
  - cap_create_item
  - cap_get_item
  - cap_list_items
related_workflows:
  - workflow_item
provenance:
  - src/Web/Controllers/ManageController.cs#GET /
  - src/Web/Controllers/OrderController.cs#GET /
  - src/Web/Controllers/UserController.cs#GET /
  - src/Web/Controllers/ManageController.cs#POST /
  - src/Web/Controllers/UserController.cs#POST /
  - src/Web/Controllers/OrderController.cs#GET /{orderId}
  - src/Web/Pages/Index.cshtml
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on finding and understanding item state based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: `cap_create_item`, `cap_get_item`, `cap_list_items`
Workflows: `workflow_item`
Rules: _none_
Screens: `catalog_home`
Routes: `/`

## Happy Path

1. The user enters the flow through `/`.
2. The recovered flow uses `cap_get_item`, `cap_list_items` to load or establish the current item state.
3. The user continues through `cap_get_item`, `cap_list_items` while keeping list surfaces `catalog_home` coherent.

## Alternate Paths

- Workflow evidence such as `workflow_item` should stay aligned with the journey instead of drifting into an undocumented lifecycle.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- Recovered routes `/` should remain understandable to the user instead of fragmenting the flow.

## Change Review Notes

Review this journey when changing item capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/item_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `item` so future reconcile runs continue to explain the same user-goal flow.
