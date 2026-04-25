# Order Candidate Bundle

Concept id: `entity_order`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 0
Shapes: 0
Screens: 2
UI routes: 2
UI actions: 2
Workflows: 0
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `entity_order`
- Primary entity: `entity_order`
- Participants: _none_
- Main capabilities: _none_
- Main screens: `order_detail`, `order_list`
- Main routes: `/order/detail`, `/order/my-orders`
- Main workflows: _none_
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because UI screen/route evidence, doc evidence converges on the same order concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`

## Suggested Adoption

- `promote_doc` `order_journey`
- `promote_ui_report` `ui_order_detail`
- `promote_ui_report` `ui_order_list`

## Journey Drafts

- `order_journey` (Order Core Journey) -> `docs/journeys/order_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## UI Evidence

- `order_detail` detail at `/order/detail`
- `order_list` list at `/order/my-orders`

## Doc Evidence

- `order_journey` (journey) from `src/Web/Views/Order/Detail.cshtml`, `src/Web/Views/Order/MyOrders.cshtml`
