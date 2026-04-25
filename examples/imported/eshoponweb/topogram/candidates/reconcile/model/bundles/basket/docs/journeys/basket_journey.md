---
id: basket_journey
kind: journey
title: Basket Core Journey
status: inferred
summary: Candidate basket journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_basket
provenance:
  - src/Web/Pages/Basket/Checkout.cshtml
  - src/Web/Pages/Basket/Index.cshtml
  - src/Web/Pages/Basket/Success.cshtml
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on moving through the recovered basket flow with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: _none_
Workflows: _none_
Rules: _none_
Screens: `basket_checkout`, `basket`, `basket_success`
Routes: `/basket/checkout`, `{handler?}`, `/basket/success`

## Happy Path

1. The user enters the flow through `/basket/checkout` or `{handler?}`.
2. The recovered flow uses the inferred basket capabilities to load or establish the current basket state.
3. The user continues through the remaining basket actions while keeping form, list, detail surfaces `basket_checkout`, `basket`, `basket_success` coherent.

## Alternate Paths

- If the brownfield app exposes alternate lifecycle branches, capture them explicitly before promoting this journey.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- Recovered routes `/basket/checkout`, `{handler?}`, `/basket/success` should remain understandable to the user instead of fragmenting the flow.

## Change Review Notes

Review this journey when changing basket capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/basket_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `basket` so future reconcile runs continue to explain the same user-goal flow.
