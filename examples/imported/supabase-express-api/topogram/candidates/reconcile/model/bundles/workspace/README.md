# Workspace Candidate Bundle

Concept id: `entity_workspace`

Entities: 1
Enums: 0
Capabilities: 5
Shapes: 3
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 2
Docs: 0

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
- `promote_workflow_decision` `dec_workspace`
- `promote_workflow_doc` `workflow_workspace`

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
