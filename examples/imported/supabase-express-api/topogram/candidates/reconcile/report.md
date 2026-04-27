# Reconcile Report

## Promoted

- None

## Skipped

- `docs/glossary/database.md`
- `docs/glossary/debugging.md`
- `docs/glossary/development.md`
- `docs/import-report.md`
- `docs/workflows/lifecycle-flow.md`
- `docs/workflows/review-workflow.md`

## Adoption

- Plan: `candidates/reconcile/adoption-plan.json`
- Selector: `none`
- Write mode: yes
- Approved items: 0
- Applied items: 56
- Skipped items: 0
- Blocked items: 0
- Canonical files: 0
- Refreshed canonical files: 0
- Approved review groups: 5
- Projection-dependent items: 0
- Projection review groups: 0
- UI review groups: 0
- Workflow review groups: 5

## Next Best Action

- None

## Approved Review Groups

- `workflow_review:account`
- `workflow_review:workspace`
- `workflow_review:workspace-membership`
- `workflow_review:audit-log`
- `workflow_review:profile`

## Projection Review Groups

- None

## UI Review Groups

- None

## Workflow Review Groups

- `workflow_review:account` <- `dec_account`, `workflow_account`
- `workflow_review:audit-log` <- `dec_audit-log`, `workflow_audit-log`
- `workflow_review:profile` <- `dec_profile`, `workflow_profile`
- `workflow_review:workspace` <- `dec_workspace`, `workflow_workspace`
- `workflow_review:workspace-membership` <- `dec_workspace-membership`, `workflow_workspace-membership`

## Bundle Blockers

- `account`: blocked=0, approved=0, applied=15, pending=0, dependencies=_none_
- `audit-log`: blocked=0, approved=0, applied=8, pending=0, dependencies=_none_
- `flow-lifecycle-flow`: blocked=0, approved=0, applied=3, pending=0, dependencies=_none_
- `profile`: blocked=0, approved=0, applied=8, pending=0, dependencies=_none_
- `workspace`: blocked=0, approved=0, applied=12, pending=0, dependencies=_none_
- `workspace-membership`: blocked=0, approved=0, applied=9, pending=0, dependencies=_none_
- `workspace-membership-role`: blocked=0, approved=0, applied=1, pending=0, dependencies=_none_

## Bundle Priorities

- `account`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0, permission-hints=3, auth-closure=high_risk, auth-aging=stale_high_risk, high-risk-runs=21, auth-priority=3
- `workspace`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0, permission-hints=4, auth-hints=1, auth-closure=high_risk, auth-aging=stale_high_risk, high-risk-runs=21, auth-priority=3
- `workspace-membership`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0, permission-hints=4, auth-hints=1, auth-closure=high_risk, auth-aging=stale_high_risk, high-risk-runs=21, auth-priority=3
- `audit-log`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0, permission-hints=1, auth-closure=high_risk, auth-aging=stale_high_risk, high-risk-runs=21, auth-priority=3
- `profile`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0, permission-hints=2, auth-hints=1, auth-closure=high_risk, auth-aging=stale_high_risk, high-risk-runs=21, auth-priority=3
- `flow-lifecycle-flow`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `workspace-membership-role`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0

## Suppressed Noise Bundles

- None

## Projection Dependencies

- None

## Blocked Adoption Items

- None

## Candidate Model Bundles

- `account` (0 actors, 0 roles, 1 entities, 0 enums, 6 capabilities, 5 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_account`, primary entity `entity_account`
  - participants _none_
  - main capabilities `cap_create_account`, `cap_list_accounts`, `cap_register_account`, `cap_sign_in_account`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints permission `admin.create` (medium), permission `admin.read` (medium), permission `admin.update` (medium)
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure high risk (adopted=0, deferred=0, unresolved=3)
  - auth escalation escalated (high-risk runs=21)
  - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same account concept.
  - permission permission `admin.create` (medium) <- `cap_create_account`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `admin.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `admin.read` (medium) <- `cap_list_accounts`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `admin.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `admin.update` (medium) <- `cap_update_account_role`, `cap_update_account_status`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 2 secured capability matches, 2 route/resource matches, 2 imported doc or policy matches.
    - review next Confirm whether permission `admin.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- `audit-log` (0 actors, 0 roles, 1 entities, 0 enums, 2 capabilities, 2 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_audit-log`, primary entity `entity_audit-log`
  - participants _none_
  - main capabilities `cap_get_audit_log_stats`, `cap_list_audit_logs`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints permission `admin.read` (medium)
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure high risk (adopted=0, deferred=0, unresolved=1)
  - auth escalation escalated (high-risk runs=21)
  - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same audit log concept.
  - permission permission `admin.read` (medium) <- `cap_get_audit_log_stats`, `cap_list_audit_logs`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 2 secured capability matches, 2 route/resource matches, 2 imported doc or policy matches.
    - review next Confirm whether permission `admin.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- `flow-lifecycle-flow` (2 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 1 docs)
  - primary concept `flow_lifecycle-flow`
  - participants `actor_admin`, `actor_user`
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because doc evidence, actor/role evidence converges on the same lifecycle flow concept.
  - actor `actor_admin` docs=`lifecycle-flow`, `review-workflow`
  - actor `actor_user` docs=`lifecycle-flow`, `review-workflow`
- `profile` (0 actors, 0 roles, 1 entities, 0 enums, 2 capabilities, 2 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_profile`, primary entity `entity_profile`
  - participants _none_
  - main capabilities `cap_get_profile`, `cap_update_profile`
  - main routes _none_
  - candidate maintained seam mappings profile:capability:cap_update_profile: `seam_workspace_profile_route_update_handling` (review_required, contract_bound, confidence=0.62)
  - permission hints permission `me.read` (medium), permission `workspaces.update` (medium)
  - auth claims claim `tenant` = _dynamic_ (low)
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure high risk (adopted=0, deferred=0, unresolved=3)
  - auth escalation escalated (high-risk runs=21)
  - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same profile concept.
  - permission permission `me.read` (medium) <- `cap_get_profile`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `me.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `workspaces.update` (medium) <- `cap_update_profile`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `workspaces.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - auth claim `tenant` = _dynamic_ (low) <- `cap_update_profile`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Tenant or workspace naming suggests a request-scoped claim may be part of access control here. This inference is based on 1 secured capability match, 1 route match.
    - review next Confirm whether claim `tenant` = _dynamic_ should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- `workspace` (0 actors, 0 roles, 1 entities, 0 enums, 5 capabilities, 3 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_workspace`, primary entity `entity_workspace`
  - participants _none_
  - main capabilities `cap_create_workspace`, `cap_delete_workspace`, `cap_get_workspace`, `cap_list_workspaces`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints permission `workspaces.create` (medium), permission `workspaces.delete` (medium), permission `workspaces.read` (medium), permission `workspaces.update` (medium)
  - auth claims claim `tenant` = _dynamic_ (low)
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure high risk (adopted=0, deferred=0, unresolved=5)
  - auth escalation escalated (high-risk runs=21)
  - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same workspace concept.
  - permission permission `workspaces.create` (medium) <- `cap_create_workspace`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `workspaces.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `workspaces.delete` (medium) <- `cap_delete_workspace`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `workspaces.delete` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `workspaces.read` (medium) <- `cap_get_workspace`, `cap_list_workspaces`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 2 secured capability matches, 2 route/resource matches, 2 imported doc or policy matches.
    - review next Confirm whether permission `workspaces.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `workspaces.update` (medium) <- `cap_update_workspace`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `workspaces.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - auth claim `tenant` = _dynamic_ (low) <- `cap_create_workspace`, `cap_delete_workspace`, `cap_get_workspace`, `cap_update_workspace`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Tenant or workspace naming suggests a request-scoped claim may be part of access control here. This inference is based on 4 secured capability matches, 4 route matches, 1 imported doc match.
    - review next Confirm whether claim `tenant` = _dynamic_ should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- `workspace-membership` (0 actors, 0 roles, 1 entities, 0 enums, 4 capabilities, 1 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_workspace-membership`, primary entity `entity_workspace-membership`
  - participants _none_
  - main capabilities `cap_create_workspace_membership`, `cap_delete_workspace_membership`, `cap_list_workspace_memberships`, `cap_update_workspace_membership_role`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints permission `workspaces.create` (medium), permission `workspaces.delete` (medium), permission `workspaces.read` (medium), permission `workspaces.update` (medium)
  - auth claims claim `tenant` = _dynamic_ (low)
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure high risk (adopted=0, deferred=0, unresolved=5)
  - auth escalation escalated (high-risk runs=21)
  - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same workspace membership concept.
  - permission permission `workspaces.create` (medium) <- `cap_create_workspace_membership`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `workspaces.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `workspaces.delete` (medium) <- `cap_delete_workspace_membership`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `workspaces.delete` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `workspaces.read` (medium) <- `cap_list_workspace_memberships`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `workspaces.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `workspaces.update` (medium) <- `cap_update_workspace_membership_role`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `workspaces.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - auth claim `tenant` = _dynamic_ (low) <- `cap_create_workspace_membership`, `cap_delete_workspace_membership`, `cap_list_workspace_memberships`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Tenant or workspace naming suggests a request-scoped claim may be part of access control here. This inference is based on 3 secured capability matches, 3 route matches, 1 imported doc match.
    - review next Confirm whether claim `tenant` = _dynamic_ should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- `workspace-membership-role` (0 actors, 0 roles, 0 entities, 1 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `workspace-membership_role`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same workspace membership role concept.

## Candidate Model Files

- `candidates/reconcile/model/bundles/account/README.md`
- `candidates/reconcile/model/bundles/account/capabilities/cap_create_account.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_list_accounts.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_register_account.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_sign_in_account.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_update_account_role.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_update_account_status.tg`
- `candidates/reconcile/model/bundles/account/decisions/dec_account.tg`
- `candidates/reconcile/model/bundles/account/docs/journeys/account_journey.md`
- `candidates/reconcile/model/bundles/account/docs/workflows/workflow_account.md`
- `candidates/reconcile/model/bundles/account/entities/entity_account.tg`
- `candidates/reconcile/model/bundles/account/shapes/shape_input_register_account.tg`
- `candidates/reconcile/model/bundles/account/shapes/shape_input_sign_in_account.tg`
- `candidates/reconcile/model/bundles/account/shapes/shape_output_list_accounts.tg`
- `candidates/reconcile/model/bundles/account/shapes/shape_output_register_account.tg`
- `candidates/reconcile/model/bundles/account/shapes/shape_output_sign_in_account.tg`
- `candidates/reconcile/model/bundles/audit-log/README.md`
- `candidates/reconcile/model/bundles/audit-log/capabilities/cap_get_audit_log_stats.tg`
- `candidates/reconcile/model/bundles/audit-log/capabilities/cap_list_audit_logs.tg`
- `candidates/reconcile/model/bundles/audit-log/decisions/dec_audit-log.tg`
- `candidates/reconcile/model/bundles/audit-log/docs/journeys/audit_log_journey.md`
- `candidates/reconcile/model/bundles/audit-log/docs/workflows/workflow_audit-log.md`
- `candidates/reconcile/model/bundles/audit-log/entities/entity_audit-log.tg`
- `candidates/reconcile/model/bundles/audit-log/shapes/shape_output_get_audit_log_stats.tg`
- `candidates/reconcile/model/bundles/audit-log/shapes/shape_output_list_audit_logs.tg`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/README.md`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/actors/actor_admin.tg`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/actors/actor_user.tg`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/docs/workflows/lifecycle-flow.md`
- `candidates/reconcile/model/bundles/profile/README.md`
- `candidates/reconcile/model/bundles/profile/capabilities/cap_get_profile.tg`
- `candidates/reconcile/model/bundles/profile/capabilities/cap_update_profile.tg`
- `candidates/reconcile/model/bundles/profile/decisions/dec_profile.tg`
- `candidates/reconcile/model/bundles/profile/docs/journeys/profile_journey.md`
- `candidates/reconcile/model/bundles/profile/docs/workflows/workflow_profile.md`
- `candidates/reconcile/model/bundles/profile/entities/entity_profile.tg`
- `candidates/reconcile/model/bundles/profile/shapes/shape_input_update_profile.tg`
- `candidates/reconcile/model/bundles/profile/shapes/shape_output_get_profile.tg`
- `candidates/reconcile/model/bundles/workspace-membership-role/README.md`
- `candidates/reconcile/model/bundles/workspace-membership-role/enums/workspace-membership_role.tg`
- `candidates/reconcile/model/bundles/workspace-membership/README.md`
- `candidates/reconcile/model/bundles/workspace-membership/capabilities/cap_create_workspace_membership.tg`
- `candidates/reconcile/model/bundles/workspace-membership/capabilities/cap_delete_workspace_membership.tg`
- `candidates/reconcile/model/bundles/workspace-membership/capabilities/cap_list_workspace_memberships.tg`
- `candidates/reconcile/model/bundles/workspace-membership/capabilities/cap_update_workspace_membership_role.tg`
- `candidates/reconcile/model/bundles/workspace-membership/decisions/dec_workspace-membership.tg`
- `candidates/reconcile/model/bundles/workspace-membership/docs/journeys/workspace_membership_journey.md`
- `candidates/reconcile/model/bundles/workspace-membership/docs/workflows/workflow_workspace-membership.md`
- `candidates/reconcile/model/bundles/workspace-membership/entities/entity_workspace-membership.tg`
- `candidates/reconcile/model/bundles/workspace-membership/shapes/shape_input_create_workspace_membership.tg`
- `candidates/reconcile/model/bundles/workspace/README.md`
- `candidates/reconcile/model/bundles/workspace/capabilities/cap_create_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/capabilities/cap_delete_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/capabilities/cap_get_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/capabilities/cap_list_workspaces.tg`
- `candidates/reconcile/model/bundles/workspace/capabilities/cap_update_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/decisions/dec_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/docs/journeys/workspace_journey.md`
- `candidates/reconcile/model/bundles/workspace/docs/workflows/workflow_workspace.md`
- `candidates/reconcile/model/bundles/workspace/entities/entity_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/shapes/shape_output_create_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/shapes/shape_output_get_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/shapes/shape_output_list_workspaces.tg`

## Canonical Outputs

- None
