# Signup Candidate Bundle

Concept id: `entity_signup`

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
- Promote capabilities: `cap_create_signup`
- Promote shapes: `shape_input_create_signup`, `shape_output_create_signup`

## Suggested Adoption

- `promote_capability` `cap_create_signup`
- `promote_shape` `shape_input_create_signup`
- `promote_shape` `shape_output_create_signup`
- `promote_workflow_decision` `dec_signup`
- `promote_workflow_doc` `workflow_signup`

## Workflow Impacts

- `workflow_review:signup` requires workflow review for `workflow_signup`

## API Evidence

- `cap_create_signup` at `POST /signup`

## Workflow Evidence

- `workflow_signup` for `entity_signup`
