# Account Candidate Bundle

Concept id: `entity_account`

Actors: 0
Roles: 0
Entities: 1
Enums: 0
Capabilities: 6
Shapes: 5
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 3
Docs: 1

## Operator Summary

- Primary concept: `entity_account`
- Primary entity: `entity_account`
- Participants: _none_
- Main capabilities: `cap_create_account`, `cap_list_accounts`, `cap_register_account`, `cap_sign_in_account`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_account`
- Auth permission hints: permission `admin.create` (medium), permission `admin.read` (medium), permission `admin.update` (medium)
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=3)
- Auth escalation: escalated (high-risk runs=20)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same account concept.

## Auth Permission Hints

- permission `admin.create` (medium) <- `cap_create_account`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `admin.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `admin.read` (medium) <- `cap_list_accounts`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `admin.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `admin.update` (medium) <- `cap_update_account_role`, `cap_update_account_status`
  - evidence capabilities=2, routes=2, docs=2, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 2 secured capability matches, 2 route/resource matches, 2 imported doc or policy matches.
  - review next: Confirm whether permission `admin.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_account`, `cap_list_accounts`, `cap_register_account`, `cap_sign_in_account`, `cap_update_account_role`, `cap_update_account_status`
- Promote shapes: `shape_input_register_account`, `shape_input_sign_in_account`, `shape_output_list_accounts`, `shape_output_register_account`, `shape_output_sign_in_account`

## Suggested Adoption

- `promote_entity` `entity_account`
- `promote_capability` `cap_create_account`
- `promote_capability` `cap_list_accounts`
- `promote_capability` `cap_register_account`
- `promote_capability` `cap_sign_in_account`
- `promote_capability` `cap_update_account_role`
- `promote_capability` `cap_update_account_status`
- `promote_shape` `shape_input_register_account`
- `promote_shape` `shape_input_sign_in_account`
- `promote_shape` `shape_output_list_accounts`
- `promote_shape` `shape_output_register_account`
- `promote_shape` `shape_output_sign_in_account`
- `promote_doc` `account_journey`
- `promote_workflow_decision` `dec_account`
- `promote_workflow_doc` `workflow_account`

## Journey Drafts

- `account_journey` (Account Sign-In and Session Flow) -> `docs/journeys/account_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:account` requires workflow review for `workflow_account`

## Entity Evidence

- `entity_account` from `src/schema.ts`

## API Evidence

- `cap_create_account` at `POST /admin/accounts`
- `cap_list_accounts` at `GET /admin/accounts`
- `cap_register_account` at `POST /signup`
- `cap_sign_in_account` at `POST /login`
- `cap_update_account_role` at `PUT /admin/accounts/{id}/role`
- `cap_update_account_status` at `PUT /admin/accounts/{id}/status`

## Workflow Evidence

- `workflow_account` for `entity_account`

## Doc Evidence

- `account_journey` (journey) from `src/docs/openapi.ts#POST /login`, `src/docs/openapi.ts#POST /signup`
