# Basket Candidate Bundle

Concept id: `entity_basket`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 0
Shapes: 0
Screens: 3
UI routes: 3
UI actions: 4
Workflows: 0
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `entity_basket`
- Primary entity: `entity_basket`
- Participants: _none_
- Main capabilities: _none_
- Main screens: `basket`, `basket_checkout`, `basket_success`
- Main routes: `/basket/checkout`, `{handler?}`, `/basket/success`
- Main workflows: _none_
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because UI screen/route evidence, doc evidence converges on the same basket concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`

## Suggested Adoption

- `promote_doc` `basket_journey`
- `promote_ui_report` `ui_basket`
- `promote_ui_report` `ui_basket_checkout`
- `promote_ui_report` `ui_basket_success`

## Journey Drafts

- `basket_journey` (Basket Core Journey) -> `docs/journeys/basket_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## UI Evidence

- `basket` list at `{handler?}`
- `basket_checkout` form at `/basket/checkout`
- `basket_success` detail at `/basket/success`

## Doc Evidence

- `basket_journey` (journey) from `src/Web/Pages/Basket/Checkout.cshtml`, `src/Web/Pages/Basket/Index.cshtml`
