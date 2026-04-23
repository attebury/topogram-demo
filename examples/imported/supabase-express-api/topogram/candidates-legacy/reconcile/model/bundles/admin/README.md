# Admin Candidate Bundle

Concept id: `entity_admin`

Entities: 0
Enums: 0
Capabilities: 3
Shapes: 4
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 1
Docs: 0

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_admin`, `cap_get_admin`, `cap_update_admin`
- Promote shapes: `shape_input_get_admin`, `shape_output_create_admin`, `shape_output_get_admin`, `shape_output_update_admin`

## Suggested Adoption

- `promote_capability` `cap_create_admin`
- `promote_capability` `cap_get_admin`
- `promote_capability` `cap_update_admin`
- `promote_shape` `shape_input_get_admin`
- `promote_shape` `shape_output_create_admin`
- `promote_shape` `shape_output_get_admin`
- `promote_shape` `shape_output_update_admin`
- `promote_workflow_decision` `dec_admin`
- `promote_workflow_doc` `workflow_admin`

## Workflow Impacts

- `workflow_review:admin` requires workflow review for `workflow_admin`

## API Evidence

- `cap_create_admin` at `POST /admin/accounts`
- `cap_get_admin` at `GET /admin/accounts`
- `cap_update_admin` at `PUT /admin/accounts/{id}/role`

## Workflow Evidence

- `workflow_admin` for `entity_admin`
