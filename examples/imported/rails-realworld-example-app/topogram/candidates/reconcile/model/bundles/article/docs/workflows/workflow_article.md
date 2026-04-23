---
id: workflow_article
kind: workflow
title: Article Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_article
related_capabilities:
  - cap_create_article
  - cap_delete_article
  - cap_favorite_article
  - cap_feed_article
  - cap_get_article
  - cap_list_articles
  - cap_unfavorite_article
  - cap_update_article
provenance:
  - config/routes.rb#POST /api/articles/:slug/favorite
  - app/controllers/articles_controller.rb
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_article`
States: _none_
Transitions: `cap_create_article` -> `created`, `cap_delete_article` -> `deleted`, `cap_favorite_article` -> `favorited`, `cap_unfavorite_article` -> `not_favorited`

Review this workflow before promoting it as canonical.
