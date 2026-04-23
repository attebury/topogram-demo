---
id: workflow_workspace-membership
kind: workflow
title: Workspace Membership Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_workspace-membership
related_capabilities:
  - cap_create_workspace_membership
  - cap_delete_workspace_membership
  - cap_list_workspace_memberships
  - cap_update_workspace_membership_role
provenance:
  - src/docs/openapi.ts#PUT /workspaces/{id}/members/{memberId}/role
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_workspace-membership`
States: _none_
Transitions: `cap_create_workspace_membership` -> `created`, `cap_delete_workspace_membership` -> `deleted`

Review this workflow before promoting it as canonical.
