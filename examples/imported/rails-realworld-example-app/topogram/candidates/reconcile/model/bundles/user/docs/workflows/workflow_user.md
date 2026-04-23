---
id: workflow_user
kind: workflow
title: User Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_user
related_capabilities:
  - cap_create_user
  - cap_get_user
  - cap_update_user
provenance:
  - config/routes.rb#GET /api/users/:id
  - config/routes.rb#GET /api/user
  - app/controllers/users_controller.rb
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_user`
States: _none_
Transitions: `cap_create_user` -> `registered`

Review this workflow before promoting it as canonical.
