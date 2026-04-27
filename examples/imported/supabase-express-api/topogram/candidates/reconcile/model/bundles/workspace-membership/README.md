# Workspace Membership Candidate Bundle

Concept id: `entity_workspace-membership`

Actors: 0
Roles: 0
Entities: 1
Enums: 0
Capabilities: 4
Shapes: 1
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 2
Docs: 1

## Operator Summary

- Primary concept: `entity_workspace-membership`
- Primary entity: `entity_workspace-membership`
- Participants: _none_
- Main capabilities: `cap_create_workspace_membership`, `cap_delete_workspace_membership`, `cap_list_workspace_memberships`, `cap_update_workspace_membership_role`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_workspace-membership`
- Auth permission hints: permission `workspaces.create` (medium), permission `workspaces.delete` (medium), permission `workspaces.read` (medium), permission `workspaces.update` (medium)
- Auth claim hints: claim `tenant` = _dynamic_ (low)
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=5)
- Auth escalation: escalated (high-risk runs=21)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same workspace membership concept.

## Auth Permission Hints

- permission `workspaces.create` (medium) <- `cap_create_workspace_membership`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `workspaces.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `workspaces.delete` (medium) <- `cap_delete_workspace_membership`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `workspaces.delete` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `workspaces.read` (medium) <- `cap_list_workspace_memberships`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `workspaces.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `workspaces.update` (medium) <- `cap_update_workspace_membership_role`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `workspaces.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Auth Claim Hints

- claim `tenant` = _dynamic_ (low) <- `cap_create_workspace_membership`, `cap_delete_workspace_membership`, `cap_list_workspace_memberships`
  - evidence capability=3, route=3, participants=0, docs=1
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Tenant or workspace naming suggests a request-scoped claim may be part of access control here. This inference is based on 3 secured capability matches, 3 route matches, 1 imported doc match.
  - review next: Confirm whether claim `tenant` = _dynamic_ should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_workspace_membership`, `cap_delete_workspace_membership`, `cap_list_workspace_memberships`, `cap_update_workspace_membership_role`
- Promote shapes: `shape_input_create_workspace_membership`

## Suggested Adoption

- `promote_entity` `entity_workspace-membership`
- `promote_capability` `cap_create_workspace_membership`
- `promote_capability` `cap_delete_workspace_membership`
- `promote_capability` `cap_list_workspace_memberships`
- `promote_capability` `cap_update_workspace_membership_role`
- `promote_shape` `shape_input_create_workspace_membership`
- `promote_doc` `workspace_membership_journey`
- `promote_workflow_decision` `dec_workspace-membership`
- `promote_workflow_doc` `workflow_workspace-membership`

## Journey Drafts

- `workspace_membership_journey` (Workspace Membership Creation Flow) -> `docs/journeys/workspace_membership_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:workspace-membership` requires workflow review for `workflow_workspace-membership`

## Entity Evidence

- `entity_workspace-membership` from `src/schema.ts`

## API Evidence

- `cap_create_workspace_membership` at `POST /workspaces/{id}/members`
- `cap_delete_workspace_membership` at `DELETE /workspaces/{id}/members/{memberId}`
- `cap_list_workspace_memberships` at `GET /workspaces/{id}/members`
- `cap_update_workspace_membership_role` at `PUT /workspaces/{id}/members/{memberId}/role`

## Workflow Evidence

- `workflow_workspace-membership` for `entity_workspace-membership`

## Doc Evidence

- `workspace_membership_journey` (journey) from `src/docs/openapi.ts#PUT /workspaces/{id}/members/{memberId}/role`, `src/docs/openapi.ts#DELETE /workspaces/{id}/members/{memberId}`
