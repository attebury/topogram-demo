# Openapi Json Candidate Bundle

Concept id: `entity_openapi_json`

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
- Promote capabilities: `cap_res`

## Suggested Adoption

- `promote_capability` `cap_res`
- `promote_workflow_decision` `dec_openapi_json`
- `promote_workflow_doc` `workflow_openapi_json`

## Workflow Impacts

- `workflow_review:openapi-json` requires workflow review for `workflow_openapi_json`

## API Evidence

- `cap_res` at `GET /openapi.json`

## Workflow Evidence

- `workflow_openapi_json` for `entity_openapi_json`
