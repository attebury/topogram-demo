---
id: workflow_account
kind: workflow
title: Account Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_account
related_capabilities:
  - cap_create_account
  - cap_list_accounts
  - cap_register_account
  - cap_sign_in_account
  - cap_update_account_role
  - cap_update_account_status
provenance:
  - src/docs/openapi.ts#POST /login
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_account`
States: _none_
Transitions: `cap_create_account` -> `created`, `cap_register_account` -> `registered`, `cap_sign_in_account` -> `authenticated`

Review this workflow before promoting it as canonical.
