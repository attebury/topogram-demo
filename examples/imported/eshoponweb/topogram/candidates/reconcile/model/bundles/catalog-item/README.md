# Catalog Item Candidate Bundle

Concept id: `entity_catalog-item`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 0
Shapes: 0
Screens: 7
UI routes: 7
UI actions: 9
Workflows: 0
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `entity_catalog-item`
- Primary entity: `entity_catalog-item`
- Participants: _none_
- Main capabilities: _none_
- Main screens: `catalog_item_admin`, `catalog_item_admin_edit`, `catalog_item_create`, `catalog_item_delete`
- Main routes: `/admin/edit-catalog-item`, `/admin`, `/admin/catalog-items/create`, `/admin/catalog-items/:id/delete`
- Main workflows: _none_
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because UI screen/route evidence, doc evidence converges on the same catalog item concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`

## Suggested Adoption

- `promote_doc` `catalog_item_journey`
- `promote_ui_report` `ui_catalog_item_admin`
- `promote_ui_report` `ui_catalog_item_admin_edit`
- `promote_ui_report` `ui_catalog_item_create`
- `promote_ui_report` `ui_catalog_item_delete`
- `promote_ui_report` `ui_catalog_item_detail`
- `promote_ui_report` `ui_catalog_item_edit`
- `promote_ui_report` `ui_catalog_item_list`

## Journey Drafts

- `catalog_item_journey` (Catalog Item Core Journey) -> `docs/journeys/catalog_item_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## UI Evidence

- `catalog_item_admin` list at `/admin`
- `catalog_item_admin_edit` form at `/admin/edit-catalog-item`
- `catalog_item_create` form at `/admin/catalog-items/create`
- `catalog_item_delete` form at `/admin/catalog-items/:id/delete`
- `catalog_item_detail` detail at `/admin/catalog-items/:id`
- `catalog_item_edit` form at `/admin/catalog-items/:id/edit`
- `catalog_item_list` list at `/admin`

## Doc Evidence

- `catalog_item_journey` (journey) from `src/BlazorAdmin/Pages/CatalogItemPage/Create.razor`, `src/BlazorAdmin/Pages/CatalogItemPage/Delete.razor`
