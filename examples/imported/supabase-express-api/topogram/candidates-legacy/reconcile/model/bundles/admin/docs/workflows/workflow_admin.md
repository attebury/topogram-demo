---
id: workflow_admin
kind: workflow
title: Admin Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_admin
related_capabilities:
  - cap_create_admin
  - cap_get_admin
  - cap_update_admin
provenance:
  - src/docs/openapi.ts#GET /admin/accounts
  - src/docs/openapi.ts#GET /admin/workspaces
  - src/docs/openapi.ts#GET /admin/memberships
  - src/docs/openapi.ts#GET /admin/audit-logs
  - src/docs/openapi.ts#GET /admin/audit-logs/stats
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_admin`
States: _none_
Transitions: `cap_create_admin` -> `created`

Review this workflow before promoting it as canonical.
