# Tag Candidate Bundle

Concept id: `entity_tag`

Actors: 0
Roles: 0
Entities: 1
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

- Primary concept: `entity_tag`
- Primary entity: `entity_tag`
- Participants: _none_
- Main capabilities: `cap_list_tags`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_tag`
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same tag concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_list_tags`
- Promote shapes: `shape_output_list_tags`

## Suggested Adoption

- `promote_entity` `entity_tag`
- `promote_capability` `cap_list_tags`
- `promote_shape` `shape_output_list_tags`
- `promote_doc` `tag_journey`
- `promote_workflow_decision` `dec_tag`
- `promote_workflow_doc` `workflow_tag`

## Journey Drafts

- `tag_journey` (Tag Workflow Flow) -> `docs/journeys/tag_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:tag` requires workflow review for `workflow_tag`

## Entity Evidence

- `entity_tag` from `conduit/apps/articles/models.py`

## API Evidence

- `cap_list_tags` at `GET /api/tags`

## Workflow Evidence

- `workflow_tag` for `entity_tag`

## Doc Evidence

- `tag_journey` (journey) from `conduit/apps/articles/urls.py#GET /api/tags`, `conduit/apps/articles/serializers.py`
