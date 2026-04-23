# Login Candidate Bundle

Concept id: `entity_login`

Entities: 0
Enums: 0
Capabilities: 1
Shapes: 2
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 1
Docs: 0

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_login`
- Promote shapes: `shape_input_create_login`, `shape_output_create_login`

## Suggested Adoption

- `promote_capability` `cap_create_login`
- `promote_shape` `shape_input_create_login`
- `promote_shape` `shape_output_create_login`
- `promote_workflow_decision` `dec_login`
- `promote_workflow_doc` `workflow_login`

## Workflow Impacts

- `workflow_review:login` requires workflow review for `workflow_login`

## API Evidence

- `cap_create_login` at `POST /login`

## Workflow Evidence

- `workflow_login` for `entity_login`
