---
id: workflow_audit-log
kind: workflow
title: Audit Log Workflow
status: inferred
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_audit-log
related_capabilities:
  - cap_get_audit_log_stats
  - cap_list_audit_logs
provenance:
  - src/docs/openapi.ts#GET /admin/audit-logs
tags:
  - import
  - workflow
---

Candidate workflow imported from brownfield evidence.

Entity: `entity_audit-log`
States: _none_
Transitions: _none_

Review this workflow before promoting it as canonical.
