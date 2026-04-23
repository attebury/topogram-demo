---
id: workflow_profile
kind: workflow
title: Profile Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_profile
related_capabilities:
  - cap_follow_profile
  - cap_get_profile
  - cap_unfollow_profile
provenance:
  - conduit/apps/profiles/urls.py#GET /api/profiles/{username}
  - conduit/apps/profiles/serializers.py
  - conduit/apps/profiles/views.py
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_profile`
States: _none_
Transitions: `cap_follow_profile` -> `following`, `cap_unfollow_profile` -> `not_following`

Review this workflow before promoting it as canonical.
