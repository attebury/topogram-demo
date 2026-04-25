---
id: catalog_item_journey
kind: journey
title: Catalog Item Core Journey
status: inferred
summary: Candidate catalog item journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_catalog-item
provenance:
  - src/BlazorAdmin/Pages/CatalogItemPage/Create.razor
  - src/BlazorAdmin/Pages/CatalogItemPage/Delete.razor
  - src/BlazorAdmin/Pages/CatalogItemPage/Details.razor
  - src/BlazorAdmin/Pages/CatalogItemPage/Edit.razor
  - src/BlazorAdmin/Pages/CatalogItemPage/List.razor
  - src/Web/Pages/Admin/EditCatalogItem.cshtml
  - src/Web/Pages/Admin/Index.cshtml
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on moving through the recovered catalog item flow with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: _none_
Workflows: _none_
Rules: _none_
Screens: `catalog_item_create`, `catalog_item_delete`, `catalog_item_detail`, `catalog_item_edit`, `catalog_item_list`, `catalog_item_admin_edit`, `catalog_item_admin`
Routes: `/admin/catalog-items/create`, `/admin/catalog-items/:id/delete`, `/admin/catalog-items/:id`, `/admin/catalog-items/:id/edit`, `/admin`, `/admin/edit-catalog-item`

## Happy Path

1. The user enters the flow through `/admin/catalog-items/create` or `/admin/catalog-items/:id/delete`.
2. The recovered flow uses the inferred catalog item capabilities to load or establish the current catalog item state.
3. The user continues through the remaining catalog item actions while keeping form, detail, list surfaces `catalog_item_create`, `catalog_item_delete`, `catalog_item_detail` coherent.

## Alternate Paths

- If the brownfield app exposes alternate lifecycle branches, capture them explicitly before promoting this journey.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- Recovered routes `/admin/catalog-items/create`, `/admin/catalog-items/:id/delete`, `/admin/catalog-items/:id` should remain understandable to the user instead of fragmenting the flow.

## Change Review Notes

Review this journey when changing catalog item capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/catalog_item_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `catalog-item` so future reconcile runs continue to explain the same user-goal flow.
