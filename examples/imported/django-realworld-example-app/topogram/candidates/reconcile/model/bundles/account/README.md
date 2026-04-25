# Account Candidate Bundle

Concept id: `entity_account`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 1
Shapes: 2
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 1
Docs: 1

## Operator Summary

- Primary concept: `entity_account`
- Primary entity: `entity_account`
- Participants: _none_
- Main capabilities: `cap_sign_in_account`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_account`
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because API capability evidence, workflow evidence, doc evidence converges on the same account concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_sign_in_account`
- Promote shapes: `shape_input_sign_in_account`, `shape_output_sign_in_account`

## Suggested Adoption

- `promote_capability` `cap_sign_in_account`
- `promote_shape` `shape_input_sign_in_account`
- `promote_shape` `shape_output_sign_in_account`
- `promote_doc` `account_journey`
- `promote_workflow_decision` `dec_account`
- `promote_workflow_doc` `workflow_account`

## Journey Drafts

- `account_journey` (Account Sign-In and Session Flow) -> `docs/journeys/account_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:account` requires workflow review for `workflow_account`

## API Evidence

- `cap_sign_in_account` at `POST /api/users/login`

## Workflow Evidence

- `workflow_account` for `entity_account`

## Doc Evidence

- `account_journey` (journey) from `conduit/apps/authentication/urls.py#POST /api/users/login`, `conduit/apps/authentication/serializers.py`
