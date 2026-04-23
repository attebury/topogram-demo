---
id: ui_country_detail
kind: report
title: Country Detail UI Surface
status: inferred
source_of_truth: imported
confidence: high
review_required: true
related_entities:
  - entity_country
provenance:
  - CountriesSwiftUI/UI/CountryDetails/CountryDetailsView.swift#CountryDetails
tags:
  - import
  - ui
---

Candidate UI surface imported from brownfield route evidence.

Screen: `country_detail` (detail)
Routes: `/countries/:alpha3Code`
Actions: `cap_get_country_details`

Review this UI surface before promoting it into canonical docs or projections.
