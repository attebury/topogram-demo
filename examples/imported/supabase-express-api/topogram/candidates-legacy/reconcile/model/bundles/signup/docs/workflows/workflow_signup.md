---
id: workflow_signup
kind: workflow
title: Signup Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_signup
related_capabilities:
  - cap_create_signup
provenance:
  - src/docs/openapi.ts#POST /signup
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_signup`
States: _none_
Transitions: `cap_create_signup` -> `created`

Review this workflow before promoting it as canonical.
