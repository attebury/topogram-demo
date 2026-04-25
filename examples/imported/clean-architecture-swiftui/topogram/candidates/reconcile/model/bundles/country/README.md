# Country Candidate Bundle

Concept id: `entity_country`

Actors: 0
Roles: 0
Entities: 1
Enums: 0
Capabilities: 1
Shapes: 1
Screens: 3
UI routes: 3
UI actions: 2
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `entity_country`
- Primary entity: `entity_country`
- Participants: _none_
- Main capabilities: `cap_list_countries`
- Main screens: `country_detail`, `country_flag_modal`, `country_list`
- Main routes: `/countries/:alpha3Code`, `/countries/:alpha3Code/flag`, `/countries`
- Main workflows: `workflow_country`
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, UI screen/route evidence, workflow evidence, doc evidence converges on the same country concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_list_countries`
- Promote shapes: `shape_output_list_countries`

## Suggested Adoption

- `promote_entity` `entity_country`
- `promote_capability` `cap_list_countries`
- `promote_shape` `shape_output_list_countries`
- `promote_doc` `country_journey`
- `promote_workflow_decision` `dec_country`
- `promote_workflow_doc` `workflow_country`
- `promote_ui_report` `ui_country_detail`
- `promote_ui_report` `ui_country_flag_modal`
- `promote_ui_report` `ui_country_list`

## Journey Drafts

- `country_journey` (Country Workflow Flow) -> `docs/journeys/country_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:country` requires workflow review for `workflow_country`

## Entity Evidence

- `entity_country` from `CountriesSwiftUI/Repositories/Models/Country.swift`

## API Evidence

- `cap_list_countries` at `GET /all?fields=name,translations,population,flag,alpha3Code`

## UI Evidence

- `country_detail` detail at `/countries/:alpha3Code`
- `country_flag_modal` flow at `/countries/:alpha3Code/flag`
- `country_list` list at `/countries`

## Workflow Evidence

- `workflow_country` for `entity_country`

## Doc Evidence

- `country_journey` (journey) from `CountriesSwiftUI/Repositories/WebAPI/CountriesWebRepository.swift#countries`, `CountriesSwiftUI/UI/CountriesList/CountriesListView.swift#CountriesList`
