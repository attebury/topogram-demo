# Reconcile Report

## Promoted

- None

## Skipped

- `docs/glossary/database.md`
- `docs/glossary/debugging.md`
- `docs/glossary/development.md`
- `docs/workflows/lifecycle-flow.md`
- `docs/workflows/review-workflow.md`

## Adoption

- Plan: `.import/reconcile/adoption-plan.json`
- Selector: `none`
- Approved items: 0
- Applied items: 0
- Skipped items: 0
- Blocked items: 0
- Canonical files: 0
- Approved review groups: 0
- Projection-dependent items: 0
- Projection review groups: 0
- UI review groups: 0
- Workflow review groups: 5

## Approved Review Groups

- None

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

- `account`: blocked=2, approved=0, applied=0, pending=12, dependencies=`workflow_review:account`
- `audit-log`: blocked=2, approved=0, applied=0, pending=5, dependencies=`workflow_review:audit-log`
- `profile`: blocked=2, approved=0, applied=0, pending=5, dependencies=`workflow_review:profile`
- `workspace`: blocked=2, approved=0, applied=0, pending=9, dependencies=`workflow_review:workspace`
- `workspace-membership`: blocked=2, approved=0, applied=0, pending=6, dependencies=`workflow_review:workspace-membership`
- `workspace-membership-role`: blocked=0, approved=0, applied=0, pending=1, dependencies=_none_

## Bundle Priorities

- `account`: next=`workflow_review:account`, bundle-review=`bundle-review:account`, from-plan=no
- `workspace`: next=`workflow_review:workspace`, bundle-review=`bundle-review:workspace`, from-plan=no
- `workspace-membership`: next=`workflow_review:workspace-membership`, bundle-review=`bundle-review:workspace-membership`, from-plan=no
- `audit-log`: next=`workflow_review:audit-log`, bundle-review=`bundle-review:audit-log`, from-plan=no
- `profile`: next=`workflow_review:profile`, bundle-review=`bundle-review:profile`, from-plan=no
- `workspace-membership-role`: next=_none_, bundle-review=_none_, from-plan=yes

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

- `.import/reconcile/model/bundles/account/README.md`
- `.import/reconcile/model/bundles/account/capabilities/cap_create_account.tg`
- `.import/reconcile/model/bundles/account/capabilities/cap_list_accounts.tg`
- `.import/reconcile/model/bundles/account/capabilities/cap_register_account.tg`
- `.import/reconcile/model/bundles/account/capabilities/cap_sign_in_account.tg`
- `.import/reconcile/model/bundles/account/capabilities/cap_update_account_role.tg`
- `.import/reconcile/model/bundles/account/capabilities/cap_update_account_status.tg`
- `.import/reconcile/model/bundles/account/decisions/dec_account.tg`
- `.import/reconcile/model/bundles/account/docs/workflows/workflow_account.md`
- `.import/reconcile/model/bundles/account/entities/entity_account.tg`
- `.import/reconcile/model/bundles/account/shapes/shape_input_register_account.tg`
- `.import/reconcile/model/bundles/account/shapes/shape_input_sign_in_account.tg`
- `.import/reconcile/model/bundles/account/shapes/shape_output_list_accounts.tg`
- `.import/reconcile/model/bundles/account/shapes/shape_output_register_account.tg`
- `.import/reconcile/model/bundles/account/shapes/shape_output_sign_in_account.tg`
- `.import/reconcile/model/bundles/audit-log/README.md`
- `.import/reconcile/model/bundles/audit-log/capabilities/cap_get_audit_log_stats.tg`
- `.import/reconcile/model/bundles/audit-log/capabilities/cap_list_audit_logs.tg`
- `.import/reconcile/model/bundles/audit-log/decisions/dec_audit-log.tg`
- `.import/reconcile/model/bundles/audit-log/docs/workflows/workflow_audit-log.md`
- `.import/reconcile/model/bundles/audit-log/entities/entity_audit-log.tg`
- `.import/reconcile/model/bundles/audit-log/shapes/shape_output_get_audit_log_stats.tg`
- `.import/reconcile/model/bundles/audit-log/shapes/shape_output_list_audit_logs.tg`
- `.import/reconcile/model/bundles/profile/README.md`
- `.import/reconcile/model/bundles/profile/capabilities/cap_get_profile.tg`
- `.import/reconcile/model/bundles/profile/capabilities/cap_update_profile.tg`
- `.import/reconcile/model/bundles/profile/decisions/dec_profile.tg`
- `.import/reconcile/model/bundles/profile/docs/workflows/workflow_profile.md`
- `.import/reconcile/model/bundles/profile/entities/entity_profile.tg`
- `.import/reconcile/model/bundles/profile/shapes/shape_input_update_profile.tg`
- `.import/reconcile/model/bundles/profile/shapes/shape_output_get_profile.tg`
- `.import/reconcile/model/bundles/workspace-membership-role/README.md`
- `.import/reconcile/model/bundles/workspace-membership-role/enums/workspace-membership_role.tg`
- `.import/reconcile/model/bundles/workspace-membership/README.md`
- `.import/reconcile/model/bundles/workspace-membership/capabilities/cap_create_workspace_membership.tg`
- `.import/reconcile/model/bundles/workspace-membership/capabilities/cap_delete_workspace_membership.tg`
- `.import/reconcile/model/bundles/workspace-membership/capabilities/cap_list_workspace_memberships.tg`
- `.import/reconcile/model/bundles/workspace-membership/capabilities/cap_update_workspace_membership_role.tg`
- `.import/reconcile/model/bundles/workspace-membership/decisions/dec_workspace-membership.tg`
- `.import/reconcile/model/bundles/workspace-membership/docs/workflows/workflow_workspace-membership.md`
- `.import/reconcile/model/bundles/workspace-membership/entities/entity_workspace-membership.tg`
- `.import/reconcile/model/bundles/workspace-membership/shapes/shape_input_create_workspace_membership.tg`
- `.import/reconcile/model/bundles/workspace/README.md`
- `.import/reconcile/model/bundles/workspace/capabilities/cap_create_workspace.tg`
- `.import/reconcile/model/bundles/workspace/capabilities/cap_delete_workspace.tg`
- `.import/reconcile/model/bundles/workspace/capabilities/cap_get_workspace.tg`
- `.import/reconcile/model/bundles/workspace/capabilities/cap_list_workspaces.tg`
- `.import/reconcile/model/bundles/workspace/capabilities/cap_update_workspace.tg`
- `.import/reconcile/model/bundles/workspace/decisions/dec_workspace.tg`
- `.import/reconcile/model/bundles/workspace/docs/workflows/workflow_workspace.md`
- `.import/reconcile/model/bundles/workspace/entities/entity_workspace.tg`
- `.import/reconcile/model/bundles/workspace/shapes/shape_output_create_workspace.tg`
- `.import/reconcile/model/bundles/workspace/shapes/shape_output_get_workspace.tg`
- `.import/reconcile/model/bundles/workspace/shapes/shape_output_list_workspaces.tg`

## Canonical Outputs

- None
