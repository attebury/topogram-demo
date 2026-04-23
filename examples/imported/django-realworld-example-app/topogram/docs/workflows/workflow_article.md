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
  - cap_favorite_article
  - cap_feed_article
  - cap_get_article
  - cap_list_articles
  - cap_unfavorite_article
  - cap_update_article
provenance:
  - conduit/apps/articles/urls.py#GET /api/articles
  - conduit/apps/articles/serializers.py
  - conduit/apps/articles/views.py
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_article`
States: _none_
Transitions: `cap_create_article` -> `created`, `cap_favorite_article` -> `favorited`, `cap_unfavorite_article` -> `not_favorited`

Review this workflow before promoting it as canonical.
