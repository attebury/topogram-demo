# Audit Log Candidate Bundle

Concept id: `entity_audit-log`

Entities: 1
Enums: 0
Capabilities: 2
Shapes: 2
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 0
Docs: 0

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_get_audit_log_stats`, `cap_list_audit_logs`
- Promote shapes: `shape_output_get_audit_log_stats`, `shape_output_list_audit_logs`

## Suggested Adoption

- `promote_entity` `entity_audit-log`
- `promote_capability` `cap_get_audit_log_stats`
- `promote_capability` `cap_list_audit_logs`
- `promote_shape` `shape_output_get_audit_log_stats`
- `promote_shape` `shape_output_list_audit_logs`
- `promote_workflow_decision` `dec_audit-log`
- `promote_workflow_doc` `workflow_audit-log`

## Workflow Impacts

- `workflow_review:audit-log` requires workflow review for `workflow_audit-log`

## Entity Evidence

- `entity_audit-log` from `src/schema.ts`

## API Evidence

- `cap_get_audit_log_stats` at `GET /admin/audit-logs/stats`
- `cap_list_audit_logs` at `GET /admin/audit-logs`

## Workflow Evidence

- `workflow_audit-log` for `entity_audit-log`
