# Country Candidate Bundle

Concept id: `entity_country`

Entities: 0
Enums: 0
Capabilities: 0
Shapes: 0
Screens: 3
UI routes: 3
UI actions: 2
Workflows: 0
Workflow states: 0
Workflow transitions: 0
Docs: 0

## Suggested Merge

- Action: `merge_into_existing_entity`
- Canonical entity target: `entity_country`

## Suggested Adoption

- `merge_bundle_into_existing_entity` `country` -> `entity_country`
- `promote_ui_report` `ui_country_detail`
- `promote_ui_report` `ui_country_flag_modal`
- `promote_ui_report` `ui_country_list`

## UI Evidence

- `country_detail` detail at `/countries/:alpha3Code`
- `country_flag_modal` flow at `/countries/:alpha3Code/flag`
- `country_list` list at `/countries`
