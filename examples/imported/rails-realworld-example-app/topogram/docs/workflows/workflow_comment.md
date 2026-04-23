---
id: workflow_comment
kind: workflow
title: Comment Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_comment
related_capabilities:
  - cap_create_comment
  - cap_delete_comment
  - cap_list_comments
provenance:
  - config/routes.rb#GET /api/articles/:slug/comments
  - app/controllers/comments_controller.rb
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_comment`
States: _none_
Transitions: `cap_create_comment` -> `created`, `cap_delete_comment` -> `deleted`

Review this workflow before promoting it as canonical.
