# Doc Candidate Bundle

Concept id: `entity_doc`

Entities: 0
Enums: 0
Capabilities: 1
Shapes: 0
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 0
Docs: 0

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_documentation`

## Suggested Adoption

- `promote_capability` `cap_documentation`
- `promote_workflow_decision` `dec_doc`
- `promote_workflow_doc` `workflow_doc`

## Workflow Impacts

- `workflow_review:doc` requires workflow review for `workflow_doc`

## API Evidence

- `cap_documentation` at `GET /docs`

## Workflow Evidence

- `workflow_doc` for `entity_doc`
