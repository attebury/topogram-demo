---
id: workflow_workspace
kind: workflow
title: Workspace Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_workspace
related_capabilities:
  - cap_create_workspace
  - cap_delete_workspace
  - cap_get_workspace
  - cap_list_workspaces
  - cap_update_workspace
provenance:
  - src/docs/openapi.ts#GET /workspaces
  - src/docs/openapi.ts#GET /admin/workspaces
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_workspace`
States: _none_
Transitions: `cap_create_workspace` -> `created`, `cap_delete_workspace` -> `deleted`

Review this workflow before promoting it as canonical.
