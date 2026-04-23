# Country Details Candidate Bundle

Concept id: `entity_country_details`

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
- Promote capabilities: `cap_get_country_details`
- Promote shapes: `shape_output_get_country_details`

## Suggested Adoption

- `promote_capability` `cap_get_country_details`
- `promote_shape` `shape_output_get_country_details`
- `promote_workflow_decision` `dec_country_details`
- `promote_workflow_doc` `workflow_country_details`

## Workflow Impacts

- `workflow_review:country-details` requires workflow review for `workflow_country_details`

## API Evidence

- `cap_get_country_details` at `GET /countryDetails`

## Workflow Evidence

- `workflow_country_details` for `entity_country_details`
