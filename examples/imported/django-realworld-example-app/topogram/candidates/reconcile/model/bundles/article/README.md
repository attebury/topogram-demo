# Article Candidate Bundle

Concept id: `entity_article`

Entities: 1
Enums: 0
Capabilities: 7
Shapes: 14
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 3
Docs: 0

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_article`, `cap_favorite_article`, `cap_feed_article`, `cap_get_article`, `cap_list_articles`, `cap_unfavorite_article`, `cap_update_article`
- Promote shapes: `shape_input_create_article`, `shape_input_favorite_article`, `shape_input_feed_article`, `shape_input_get_article`, `shape_input_list_articles`, `shape_input_unfavorite_article`, `shape_input_update_article`, `shape_output_create_article`, `shape_output_favorite_article`, `shape_output_feed_article`, `shape_output_get_article`, `shape_output_list_articles`, `shape_output_unfavorite_article`, `shape_output_update_article`

## Suggested Adoption

- `promote_entity` `entity_article`
- `promote_capability` `cap_create_article`
- `promote_capability` `cap_favorite_article`
- `promote_capability` `cap_feed_article`
- `promote_capability` `cap_get_article`
- `promote_capability` `cap_list_articles`
- `promote_capability` `cap_unfavorite_article`
- `promote_capability` `cap_update_article`
- `promote_shape` `shape_input_create_article`
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
- `promote_workflow_decision` `dec_article`
- `promote_workflow_doc` `workflow_article`

## Workflow Impacts

- `workflow_review:article` requires workflow review for `workflow_article`

## Entity Evidence

- `entity_article` from `conduit/apps/articles/models.py`

## API Evidence

- `cap_create_article` at `POST /api/articles`
- `cap_favorite_article` at `POST /api/articles/{article_slug}/favorite`
- `cap_feed_article` at `GET /api/articles/feed`
- `cap_get_article` at `GET /api/articles/{slug}`
- `cap_list_articles` at `GET /api/articles`
- `cap_unfavorite_article` at `DELETE /api/articles/{article_slug}/favorite`
- `cap_update_article` at `PUT /api/articles/{slug}`

## Workflow Evidence

- `workflow_article` for `entity_article`
