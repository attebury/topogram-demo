# Workspace Candidate Bundle

Concept id: `entity_workspace`

Actors: 0
Roles: 0
Entities: 1
Enums: 0
Capabilities: 5
Shapes: 3
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 2
Docs: 1

## Operator Summary

- Primary concept: `entity_workspace`
- Primary entity: `entity_workspace`
- Participants: _none_
- Main capabilities: `cap_create_workspace`, `cap_delete_workspace`, `cap_get_workspace`, `cap_list_workspaces`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_workspace`
- Auth permission hints: permission `workspaces.create` (medium), permission `workspaces.delete` (medium), permission `workspaces.read` (medium), permission `workspaces.update` (medium)
- Auth claim hints: claim `tenant` = _dynamic_ (low)
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=5)
- Auth escalation: escalated (high-risk runs=20)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same workspace concept.

## Auth Permission Hints

- permission `workspaces.create` (medium) <- `cap_create_workspace`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `workspaces.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `workspaces.delete` (medium) <- `cap_delete_workspace`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `workspaces.delete` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `workspaces.read` (medium) <- `cap_get_workspace`, `cap_list_workspaces`
  - evidence capabilities=2, routes=2, docs=2, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 2 secured capability matches, 2 route/resource matches, 2 imported doc or policy matches.
  - review next: Confirm whether permission `workspaces.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `workspaces.update` (medium) <- `cap_update_workspace`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `workspaces.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Auth Claim Hints

- claim `tenant` = _dynamic_ (low) <- `cap_create_workspace`, `cap_delete_workspace`, `cap_get_workspace`, `cap_update_workspace`
  - evidence capability=4, route=4, participants=0, docs=1
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Tenant or workspace naming suggests a request-scoped claim may be part of access control here. This inference is based on 4 secured capability matches, 4 route matches, 1 imported doc match.
  - review next: Confirm whether claim `tenant` = _dynamic_ should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_workspace`, `cap_delete_workspace`, `cap_get_workspace`, `cap_list_workspaces`, `cap_update_workspace`
- Promote shapes: `shape_output_create_workspace`, `shape_output_get_workspace`, `shape_output_list_workspaces`

## Suggested Adoption

- `promote_entity` `entity_workspace`
- `promote_capability` `cap_create_workspace`
- `promote_capability` `cap_delete_workspace`
- `promote_capability` `cap_get_workspace`
- `promote_capability` `cap_list_workspaces`
- `promote_capability` `cap_update_workspace`
- `promote_shape` `shape_output_create_workspace`
- `promote_shape` `shape_output_get_workspace`
- `promote_shape` `shape_output_list_workspaces`
- `promote_doc` `workspace_journey`
- `promote_workflow_decision` `dec_workspace`
- `promote_workflow_doc` `workflow_workspace`

## Journey Drafts

- `workspace_journey` (Workspace Creation, Detail, and Lifecycle Flow) -> `docs/journeys/workspace_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:workspace` requires workflow review for `workflow_workspace`

## Entity Evidence

- `entity_workspace` from `src/schema.ts`

## API Evidence

- `cap_create_workspace` at `POST /workspaces`
- `cap_delete_workspace` at `DELETE /workspaces/{id}`
- `cap_get_workspace` at `GET /workspaces/{id}`
- `cap_list_workspaces` at `GET /workspaces`
- `cap_update_workspace` at `PATCH /workspaces/{id}`

## Workflow Evidence

- `workflow_workspace` for `entity_workspace`

## Doc Evidence

- `workspace_journey` (journey) from `src/docs/openapi.ts#GET /workspaces`, `src/docs/openapi.ts#GET /admin/workspaces`
