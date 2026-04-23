# Me Candidate Bundle

Concept id: `entity_me`

Entities: 0
Enums: 0
Capabilities: 1
Shapes: 1
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 0
Docs: 0

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_list_me`
- Promote shapes: `shape_output_list_me`

## Suggested Adoption

- `promote_capability` `cap_list_me`
- `promote_shape` `shape_output_list_me`
- `promote_workflow_decision` `dec_me`
- `promote_workflow_doc` `workflow_me`

## Workflow Impacts

- `workflow_review:me` requires workflow review for `workflow_me`

## API Evidence

- `cap_list_me` at `GET /me`

## Workflow Evidence

- `workflow_me` for `entity_me`
