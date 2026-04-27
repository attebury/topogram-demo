# Article Candidate Bundle

Concept id: `entity_article`

Actors: 0
Roles: 0
Entities: 1
Enums: 0
Capabilities: 8
Shapes: 15
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 4
Docs: 1

## Operator Summary

- Primary concept: `entity_article`
- Primary entity: `entity_article`
- Participants: _none_
- Main capabilities: `cap_create_article`, `cap_delete_article`, `cap_favorite_article`, `cap_feed_article`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_article`
- Auth permission hints: permission `api.create` (medium), permission `api.favorite_article` (medium), permission `api.feed_article` (medium), permission `api.unfavorite_article` (medium)
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=4)
- Auth escalation: escalated (high-risk runs=25)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same article concept.

## Auth Permission Hints

- permission `api.create` (medium) <- `cap_create_article`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `api.favorite_article` (medium) <- `cap_favorite_article`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.favorite_article` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `api.feed_article` (medium) <- `cap_feed_article`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.feed_article` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `api.unfavorite_article` (medium) <- `cap_unfavorite_article`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.unfavorite_article` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_article`, `cap_delete_article`, `cap_favorite_article`, `cap_feed_article`, `cap_get_article`, `cap_list_articles`, `cap_unfavorite_article`, `cap_update_article`
- Promote shapes: `shape_input_create_article`, `shape_input_delete_article`, `shape_input_favorite_article`, `shape_input_feed_article`, `shape_input_get_article`, `shape_input_list_articles`, `shape_input_unfavorite_article`, `shape_input_update_article`, `shape_output_create_article`, `shape_output_favorite_article`, `shape_output_feed_article`, `shape_output_get_article`, `shape_output_list_articles`, `shape_output_unfavorite_article`, `shape_output_update_article`

## Suggested Adoption

- `promote_entity` `entity_article`
- `promote_capability` `cap_create_article`
- `promote_capability` `cap_delete_article`
- `promote_capability` `cap_favorite_article`
- `promote_capability` `cap_feed_article`
- `promote_capability` `cap_get_article`
- `promote_capability` `cap_list_articles`
- `promote_capability` `cap_unfavorite_article`
- `promote_capability` `cap_update_article`
- `promote_shape` `shape_input_create_article`
- `promote_shape` `shape_input_delete_article`
- `promote_shape` `shape_input_favorite_article`
- `promote_shape` `shape_input_feed_article`
- `promote_shape` `shape_input_get_article`
- `promote_shape` `shape_input_list_articles`
- `promote_shape` `shape_input_unfavorite_article`
- `promote_shape` `shape_input_update_article`
- `promote_shape` `shape_output_create_article`
- `promote_shape` `shape_output_favorite_article`
- `promote_shape` `shape_output_feed_article`
- `promote_shape` `shape_output_get_article`
- `promote_shape` `shape_output_list_articles`
- `promote_shape` `shape_output_unfavorite_article`
- `promote_shape` `shape_output_update_article`
- `promote_doc` `article_journey`
- `promote_workflow_decision` `dec_article`
- `promote_workflow_doc` `workflow_article`

## Journey Drafts

- `article_journey` (Article Creation, Detail, and Lifecycle Flow) -> `docs/journeys/article_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:article` requires workflow review for `workflow_article`

## Entity Evidence

- `entity_article` from `db/schema.rb`

## API Evidence

- `cap_create_article` at `POST /api/articles`
- `cap_delete_article` at `DELETE /api/articles/{slug}`
- `cap_favorite_article` at `POST /api/articles/{slug}/favorite`
- `cap_feed_article` at `GET /api/articles/feed`
- `cap_get_article` at `GET /api/articles/{slug}`
- `cap_list_articles` at `GET /api/articles`
- `cap_unfavorite_article` at `DELETE /api/articles/{slug}/favorite`
- `cap_update_article` at `PUT /api/articles/{slug}`

## Workflow Evidence

- `workflow_article` for `entity_article`

## Doc Evidence

- `article_journey` (journey) from `config/routes.rb#POST /api/articles/:slug/favorite`, `app/controllers/articles_controller.rb`
