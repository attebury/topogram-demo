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
- Approved items: 0
- Applied items: 48
- Skipped items: 0
- Blocked items: 0
- Canonical files: 0
- Refreshed canonical files: 0
- Approved review groups: 5
- Projection-dependent items: 0
- Projection review groups: 0
- UI review groups: 0
- Workflow review groups: 5

## Approved Review Groups

- `workflow_review:workspace`
- `workflow_review:account`
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

- `account`: blocked=0, approved=0, applied=14, pending=0, dependencies=_none_
- `audit-log`: blocked=0, approved=0, applied=7, pending=0, dependencies=_none_
- `profile`: blocked=0, approved=0, applied=7, pending=0, dependencies=_none_
- `workspace`: blocked=0, approved=0, applied=11, pending=0, dependencies=_none_
- `workspace-membership`: blocked=0, approved=0, applied=8, pending=0, dependencies=_none_
- `workspace-membership-role`: blocked=0, approved=0, applied=1, pending=0, dependencies=_none_

## Bundle Priorities

- `account`: next=_none_, bundle-review=_none_, from-plan=no
- `workspace`: next=_none_, bundle-review=_none_, from-plan=no
- `workspace-membership`: next=_none_, bundle-review=_none_, from-plan=no
- `audit-log`: next=_none_, bundle-review=_none_, from-plan=no
- `profile`: next=_none_, bundle-review=_none_, from-plan=no
- `workspace-membership-role`: next=_none_, bundle-review=_none_, from-plan=no

## Suppressed Noise Bundles

- None

## Projection Dependencies

- None

## Blocked Adoption Items

- None

## Candidate Model Bundles

- `account` (1 entities, 0 enums, 6 capabilities, 5 shapes, 0 screens, 1 workflows, 0 docs)
- `audit-log` (1 entities, 0 enums, 2 capabilities, 2 shapes, 0 screens, 1 workflows, 0 docs)
- `profile` (1 entities, 0 enums, 2 capabilities, 2 shapes, 0 screens, 1 workflows, 0 docs)
- `workspace` (1 entities, 0 enums, 5 capabilities, 3 shapes, 0 screens, 1 workflows, 0 docs)
- `workspace-membership` (1 entities, 0 enums, 4 capabilities, 1 shapes, 0 screens, 1 workflows, 0 docs)
- `workspace-membership-role` (0 entities, 1 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)

## Candidate Model Files

- `candidates/reconcile/model/bundles/account/README.md`
- `candidates/reconcile/model/bundles/account/capabilities/cap_create_account.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_list_accounts.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_register_account.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_sign_in_account.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_update_account_role.tg`
- `candidates/reconcile/model/bundles/account/capabilities/cap_update_account_status.tg`
- `candidates/reconcile/model/bundles/account/decisions/dec_account.tg`
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
- `candidates/reconcile/model/bundles/audit-log/docs/workflows/workflow_audit-log.md`
- `candidates/reconcile/model/bundles/audit-log/entities/entity_audit-log.tg`
- `candidates/reconcile/model/bundles/audit-log/shapes/shape_output_get_audit_log_stats.tg`
- `candidates/reconcile/model/bundles/audit-log/shapes/shape_output_list_audit_logs.tg`
- `candidates/reconcile/model/bundles/profile/README.md`
- `candidates/reconcile/model/bundles/profile/capabilities/cap_get_profile.tg`
- `candidates/reconcile/model/bundles/profile/capabilities/cap_update_profile.tg`
- `candidates/reconcile/model/bundles/profile/decisions/dec_profile.tg`
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
- `candidates/reconcile/model/bundles/workspace/docs/workflows/workflow_workspace.md`
- `candidates/reconcile/model/bundles/workspace/entities/entity_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/shapes/shape_output_create_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/shapes/shape_output_get_workspace.tg`
- `candidates/reconcile/model/bundles/workspace/shapes/shape_output_list_workspaces.tg`

## Canonical Outputs

- None
