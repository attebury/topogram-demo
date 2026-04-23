# Profile Candidate Bundle

Concept id: `entity_profile`

Entities: 1
Enums: 0
Capabilities: 2
Shapes: 2
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 0
Docs: 0

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
- `promote_workflow_decision` `dec_profile`
- `promote_workflow_doc` `workflow_profile`

## Workflow Impacts

- `workflow_review:profile` requires workflow review for `workflow_profile`

## Entity Evidence

- `entity_profile` from `src/schema.ts`

## API Evidence

- `cap_get_profile` at `GET /me`
- `cap_update_profile` at `PATCH /workspaces/{id}/profile`

## Workflow Evidence

- `workflow_profile` for `entity_profile`
