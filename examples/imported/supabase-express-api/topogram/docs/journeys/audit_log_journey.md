---
id: audit_log_journey
kind: journey
title: Audit Log Discovery and Detail Flow
status: inferred
summary: Candidate audit log journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_audit-log
related_capabilities:
  - cap_get_audit_log_stats
  - cap_list_audit_logs
related_workflows:
  - workflow_audit-log
provenance:
  - src/docs/openapi.ts#GET /admin/audit-logs
  - src/docs/openapi.ts#GET /admin/audit-logs/stats
  - src/schema.ts
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on finding and understanding audit log state based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: `cap_get_audit_log_stats`, `cap_list_audit_logs`
Workflows: `workflow_audit-log`
Rules: _none_
Screens: _none_
Routes: _none_

## Happy Path

1. The user enters the flow through the audit log API surface.
2. The recovered flow uses `cap_get_audit_log_stats`, `cap_list_audit_logs` to load or establish the current audit log state.
3. The user continues through `cap_get_audit_log_stats`, `cap_list_audit_logs` while keeping the recovered audit log lifecycle coherent.

## Alternate Paths

- Workflow evidence such as `workflow_audit-log` should stay aligned with the journey instead of drifting into an undocumented lifecycle.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- If only API evidence exists today, add UI or docs context before promoting this journey as canonical.

## Change Review Notes

Review this journey when changing audit log capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/audit_log_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `audit-log` so future reconcile runs continue to explain the same user-goal flow.
