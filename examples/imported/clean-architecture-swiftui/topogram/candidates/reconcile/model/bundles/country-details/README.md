# Country Details Candidate Bundle

Concept id: `entity_country_details`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 1
Shapes: 1
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `entity_country_details`
- Primary entity: `entity_country_details`
- Participants: _none_
- Main capabilities: `cap_get_country_details`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_country_details`
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because API capability evidence, workflow evidence, doc evidence converges on the same country details concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_get_country_details`
- Promote shapes: `shape_output_get_country_details`

## Suggested Adoption

- `promote_capability` `cap_get_country_details`
- `promote_shape` `shape_output_get_country_details`
- `promote_doc` `country_details_journey`
- `promote_workflow_decision` `dec_country_details`
- `promote_workflow_doc` `workflow_country_details`

## Journey Drafts

- `country_details_journey` (Country Details Workflow Flow) -> `docs/journeys/country_details_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:country-details` requires workflow review for `workflow_country_details`

## API Evidence

- `cap_get_country_details` at `GET /countryDetails`

## Workflow Evidence

- `workflow_country_details` for `entity_country_details`

## Doc Evidence

- `country_details_journey` (journey) from `CountriesSwiftUI/Repositories/WebAPI/CountriesWebRepository.swift#details`
