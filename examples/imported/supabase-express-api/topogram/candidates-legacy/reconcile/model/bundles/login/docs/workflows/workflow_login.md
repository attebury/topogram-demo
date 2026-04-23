---
id: workflow_login
kind: workflow
title: Login Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_login
related_capabilities:
  - cap_create_login
provenance:
  - src/docs/openapi.ts#POST /login
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_login`
States: _none_
Transitions: `cap_create_login` -> `authenticated`

Review this workflow before promoting it as canonical.
