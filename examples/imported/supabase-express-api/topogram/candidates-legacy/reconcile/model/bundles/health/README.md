# Health Candidate Bundle

Concept id: `entity_health`

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
- Promote capabilities: `cap_response`

## Suggested Adoption

- `promote_capability` `cap_response`
- `promote_workflow_decision` `dec_health`
- `promote_workflow_doc` `workflow_health`

## Workflow Impacts

- `workflow_review:health` requires workflow review for `workflow_health`

## API Evidence

- `cap_response` at `GET /health`

## Workflow Evidence

- `workflow_health` for `entity_health`
