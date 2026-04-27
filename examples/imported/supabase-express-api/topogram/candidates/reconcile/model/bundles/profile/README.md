# Profile Candidate Bundle

Concept id: `entity_profile`

Actors: 0
Roles: 0
Entities: 1
Enums: 0
Capabilities: 2
Shapes: 2
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `entity_profile`
- Primary entity: `entity_profile`
- Participants: _none_
- Main capabilities: `cap_get_profile`, `cap_update_profile`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_profile`
- Auth permission hints: permission `me.read` (medium), permission `workspaces.update` (medium)
- Auth claim hints: claim `tenant` = _dynamic_ (low)
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=3)
- Auth escalation: escalated (high-risk runs=21)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same profile concept.

## Auth Permission Hints

- permission `me.read` (medium) <- `cap_get_profile`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `me.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `workspaces.update` (medium) <- `cap_update_profile`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `workspaces.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Auth Claim Hints

- claim `tenant` = _dynamic_ (low) <- `cap_update_profile`
  - evidence capability=1, route=1, participants=0, docs=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Tenant or workspace naming suggests a request-scoped claim may be part of access control here. This inference is based on 1 secured capability match, 1 route match.
  - review next: Confirm whether claim `tenant` = _dynamic_ should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_get_profile`, `cap_update_profile`
- Promote shapes: `shape_input_update_profile`, `shape_output_get_profile`

## Suggested Adoption

- `promote_entity` `entity_profile`
- `promote_capability` `cap_get_profile`
- `promote_capability` `cap_update_profile`
- `promote_shape` `shape_input_update_profile`
- `promote_shape` `shape_output_get_profile`
- `promote_doc` `profile_journey`
- `promote_workflow_decision` `dec_profile`
- `promote_workflow_doc` `workflow_profile`

## Candidate Maintained Seam Mappings

- proposal `profile:capability:cap_update_profile` (capability)
  - candidate maintained seam `seam_workspace_profile_route_update_handling` -> output `output_src` (review_required, contract_bound, confidence=0.62)
    - label workspace profile route update handling
    - kind route_glue
    - why matched path token corroboration: `profile`; proposal/seam kind alignment: `capability` -> `route_glue`; semantic overlap: `cap_update_profile`

## Journey Drafts

- `profile_journey` (Profile Lifecycle Flow) -> `docs/journeys/profile_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:profile` requires workflow review for `workflow_profile`

## Entity Evidence

- `entity_profile` from `src/schema.ts`

## API Evidence

- `cap_get_profile` at `GET /me`
- `cap_update_profile` at `PATCH /workspaces/{id}/profile`

## Workflow Evidence

- `workflow_profile` for `entity_profile`

## Doc Evidence

- `profile_journey` (journey) from `src/docs/openapi.ts#GET /me`, `src/docs/openapi.ts#PATCH /workspaces/{id}/profile`
