---
id: order_journey
kind: journey
title: Order Core Journey
status: inferred
summary: Candidate order journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_order
provenance:
  - src/Web/Views/Order/Detail.cshtml
  - src/Web/Views/Order/MyOrders.cshtml
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on moving through the recovered order flow with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: _none_
Workflows: _none_
Rules: _none_
Screens: `order_detail`, `order_list`
Routes: `/order/detail`, `/order/my-orders`

## Happy Path

1. The user enters the flow through `/order/detail` or `/order/my-orders`.
2. The recovered flow uses the inferred order capabilities to load or establish the current order state.
3. The user continues through the remaining order actions while keeping detail, list surfaces `order_detail`, `order_list` coherent.

## Alternate Paths

- If the brownfield app exposes alternate lifecycle branches, capture them explicitly before promoting this journey.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- Recovered routes `/order/detail`, `/order/my-orders` should remain understandable to the user instead of fragmenting the flow.

## Change Review Notes

Review this journey when changing order capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/order_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `order` so future reconcile runs continue to explain the same user-goal flow.
