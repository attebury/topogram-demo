---
id: surface_app_journey
kind: journey
title: App Core Journey
status: inferred
summary: Candidate app journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
provenance:
  - src/Web/Pages/Error.cshtml
  - src/Web/Pages/Privacy.cshtml
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on moving through the recovered app flow with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: _none_
Workflows: _none_
Rules: _none_
Screens: `error`, `privacy`
Routes: `/error`, `/privacy`

## Happy Path

1. The user enters the flow through `/error` or `/privacy`.
2. The recovered flow uses the inferred app capabilities to load or establish the current app state.
3. The user continues through the remaining app actions while keeping detail surfaces `error`, `privacy` coherent.

## Alternate Paths

- If the brownfield app exposes alternate lifecycle branches, capture them explicitly before promoting this journey.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- Recovered routes `/error`, `/privacy` should remain understandable to the user instead of fragmenting the flow.

## Change Review Notes

Review this journey when changing app capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/surface_app_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `surface-app` so future reconcile runs continue to explain the same user-goal flow.
