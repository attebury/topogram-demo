# User Candidate Bundle

Concept id: `entity_user`

Actors: 0
Roles: 0
Entities: 1
Enums: 0
Capabilities: 3
Shapes: 5
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 1
Docs: 1

## Operator Summary

- Primary concept: `entity_user`
- Primary entity: `entity_user`
- Participants: _none_
- Main capabilities: `cap_create_user`, `cap_get_user`, `cap_update_user`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_user`
- Auth permission hints: permission `api.read` (medium), permission `api.update` (medium)
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=2)
- Auth escalation: escalated (high-risk runs=25)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same user concept.

## Auth Permission Hints

- permission `api.read` (medium) <- `cap_get_user`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `api.update` (medium) <- `cap_update_user`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_user`, `cap_get_user`, `cap_update_user`
- Promote shapes: `shape_input_create_user`, `shape_input_update_user`, `shape_output_create_user`, `shape_output_get_user`, `shape_output_update_user`

## Suggested Adoption

- `promote_entity` `entity_user`
- `promote_capability` `cap_create_user`
- `promote_capability` `cap_get_user`
- `promote_capability` `cap_update_user`
- `promote_shape` `shape_input_create_user`
- `promote_shape` `shape_input_update_user`
- `promote_shape` `shape_output_create_user`
- `promote_shape` `shape_output_get_user`
- `promote_shape` `shape_output_update_user`
- `promote_doc` `user_journey`
- `promote_workflow_decision` `dec_user`
- `promote_workflow_doc` `workflow_user`

## Journey Drafts

- `user_journey` (User Creation Flow) -> `docs/journeys/user_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:user` requires workflow review for `workflow_user`

## Entity Evidence

- `entity_user` from `conduit/apps/authentication/models.py`

## API Evidence

- `cap_create_user` at `POST /api/users`
- `cap_get_user` at `GET /api/user`
- `cap_update_user` at `PUT /api/user`

## Workflow Evidence

- `workflow_user` for `entity_user`

## Doc Evidence

- `user_journey` (journey) from `conduit/apps/authentication/urls.py#GET /api/user`, `conduit/apps/authentication/serializers.py`
