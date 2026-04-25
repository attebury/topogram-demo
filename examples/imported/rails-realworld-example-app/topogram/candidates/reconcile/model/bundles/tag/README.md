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
- Auth permission hints: permission `api.read` (medium)
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=1)
- Auth escalation: escalated (high-risk runs=17)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same tag concept.

## Auth Permission Hints

- permission `api.read` (medium) <- `cap_list_tags`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

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

- `entity_tag` from `db/schema.rb`

## API Evidence

- `cap_list_tags` at `GET /api/tags`

## Workflow Evidence

- `workflow_tag` for `entity_tag`

## Doc Evidence

- `tag_journey` (journey) from `config/routes.rb#GET /api/tags`, `app/controllers/tags_controller.rb`
