# Audit Log Candidate Bundle

Concept id: `entity_audit-log`

Actors: 0
Roles: 0
Entities: 1
Enums: 0
Capabilities: 2
Shapes: 2
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `entity_audit-log`
- Primary entity: `entity_audit-log`
- Participants: _none_
- Main capabilities: `cap_get_audit_log_stats`, `cap_list_audit_logs`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_audit-log`
- Auth permission hints: permission `admin.read` (medium)
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=1)
- Auth escalation: escalated (high-risk runs=21)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same audit log concept.

## Auth Permission Hints

- permission `admin.read` (medium) <- `cap_get_audit_log_stats`, `cap_list_audit_logs`
  - evidence capabilities=2, routes=2, docs=2, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 2 secured capability matches, 2 route/resource matches, 2 imported doc or policy matches.
  - review next: Confirm whether permission `admin.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

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
- `promote_doc` `audit_log_journey`
- `promote_workflow_decision` `dec_audit-log`
- `promote_workflow_doc` `workflow_audit-log`

## Journey Drafts

- `audit_log_journey` (Audit Log Discovery and Detail Flow) -> `docs/journeys/audit_log_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:audit-log` requires workflow review for `workflow_audit-log`

## Entity Evidence

- `entity_audit-log` from `src/schema.ts`

## API Evidence

- `cap_get_audit_log_stats` at `GET /admin/audit-logs/stats`
- `cap_list_audit_logs` at `GET /admin/audit-logs`

## Workflow Evidence

- `workflow_audit-log` for `entity_audit-log`

## Doc Evidence

- `audit_log_journey` (journey) from `src/docs/openapi.ts#GET /admin/audit-logs`, `src/docs/openapi.ts#GET /admin/audit-logs/stats`
