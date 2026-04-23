---
id: workflow_tag
kind: workflow
title: Tag Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_tag
related_capabilities:
  - cap_list_tags
provenance:
  - conduit/apps/articles/urls.py#GET /api/tags
  - conduit/apps/articles/serializers.py
  - conduit/apps/articles/views.py
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_tag`
States: _none_
Transitions: _none_

Review this workflow before promoting it as canonical.
