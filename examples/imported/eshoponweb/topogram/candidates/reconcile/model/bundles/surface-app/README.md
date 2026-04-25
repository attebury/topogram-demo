# App Candidate Bundle

Concept id: `surface_app`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 0
Shapes: 0
Screens: 2
UI routes: 2
UI actions: 0
Workflows: 0
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `error`
- Primary entity: _none_
- Participants: _none_
- Main capabilities: _none_
- Main screens: `error`, `privacy`
- Main routes: `/error`, `/privacy`
- Main workflows: _none_
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because UI screen/route evidence, doc evidence converges on the same app concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`

## Suggested Adoption

- `promote_doc` `surface_app_journey`
- `promote_ui_report` `ui_error`
- `promote_ui_report` `ui_privacy`

## Journey Drafts

- `surface_app_journey` (App Core Journey) -> `docs/journeys/surface_app_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## UI Evidence

- `error` detail at `/error`
- `privacy` detail at `/privacy`

## Doc Evidence

- `surface_app_journey` (journey) from `src/Web/Pages/Error.cshtml`, `src/Web/Pages/Privacy.cshtml`
