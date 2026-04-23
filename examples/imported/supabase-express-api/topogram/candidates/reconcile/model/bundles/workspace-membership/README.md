# Workspace Membership Candidate Bundle

Concept id: `entity_workspace-membership`

Entities: 1
Enums: 0
Capabilities: 4
Shapes: 1
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 2
Docs: 0

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
- `promote_workflow_decision` `dec_workspace-membership`
- `promote_workflow_doc` `workflow_workspace-membership`

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
