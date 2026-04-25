---
id: country_journey
kind: journey
title: Country Workflow Flow
status: inferred
summary: Candidate country journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_country
related_capabilities:
  - cap_list_countries
related_workflows:
  - workflow_country
provenance:
  - CountriesSwiftUI/Repositories/WebAPI/CountriesWebRepository.swift#countries
  - CountriesSwiftUI/UI/CountriesList/CountriesListView.swift#CountriesList
  - CountriesSwiftUI/UI/CountryDetails/CountryDetailsView.swift#CountryDetails
  - CountriesSwiftUI/UI/CountryDetails/ModalFlagView.swift#ModalFlagView
  - CountriesSwiftUI/Repositories/Models/Country.swift
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on moving through the recovered country flow with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: `cap_list_countries`
Workflows: `workflow_country`
Rules: _none_
Screens: `country_list`, `country_detail`, `country_flag_modal`
Routes: `/countries`, `/countries/:alpha3Code`, `/countries/:alpha3Code/flag`

## Happy Path

1. The user enters the flow through `/countries` or `/countries/:alpha3Code`.
2. The recovered flow uses `cap_list_countries` to load or establish the current country state.
3. The user continues through `cap_list_countries` while keeping list, detail, flow surfaces `country_list`, `country_detail`, `country_flag_modal` coherent.

## Alternate Paths

- Workflow evidence such as `workflow_country` should stay aligned with the journey instead of drifting into an undocumented lifecycle.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- Recovered routes `/countries`, `/countries/:alpha3Code`, `/countries/:alpha3Code/flag` should remain understandable to the user instead of fragmenting the flow.

## Change Review Notes

Review this journey when changing country capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/country_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `country` so future reconcile runs continue to explain the same user-goal flow.
