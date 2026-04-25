# Reconcile Report

## Promoted

- None

## Skipped

- `docs/glossary/application.md`
- `docs/glossary/running.md`
- `docs/glossary/sample.md`
- `docs/glossary/you.md`
- `docs/import-report.md`
- `docs/workflows/lifecycle-flow.md`

## Adoption

- Plan: `candidates/reconcile/adoption-plan.json`
- Selector: `none`
- Write mode: yes
- Approved items: 0
- Applied items: 47
- Skipped items: 0
- Blocked items: 0
- Canonical files: 0
- Refreshed canonical files: 0
- Approved review groups: 1
- Projection-dependent items: 0
- Projection review groups: 0
- UI review groups: 0
- Workflow review groups: 1

## Next Best Action

- None

## Approved Review Groups

- `workflow_review:item`

## Projection Review Groups

- None

## UI Review Groups

- None

## Workflow Review Groups

- `workflow_review:item` <- `dec_item`, `workflow_item`

## Bundle Blockers

- `basket`: blocked=0, approved=0, applied=4, pending=0, dependencies=_none_
- `catalog-item`: blocked=0, approved=0, applied=8, pending=0, dependencies=_none_
- `flow-lifecycle-flow`: blocked=0, approved=0, applied=4, pending=0, dependencies=_none_
- `item`: blocked=0, approved=0, applied=7, pending=0, dependencies=_none_
- `order`: blocked=0, approved=0, applied=3, pending=0, dependencies=_none_
- `surface-account`: blocked=0, approved=0, applied=18, pending=0, dependencies=_none_
- `surface-app`: blocked=0, approved=0, applied=3, pending=0, dependencies=_none_

## Bundle Priorities

- `item`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `surface-account`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `flow-lifecycle-flow`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `catalog-item`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `basket`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `order`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `surface-app`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0

## Suppressed Noise Bundles

- None

## Projection Dependencies

- None

## Blocked Adoption Items

- None

## Candidate Model Bundles

- `basket` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 3 screens, 0 workflows, 1 docs)
  - primary concept `entity_basket`, primary entity `entity_basket`
  - participants _none_
  - main capabilities _none_
  - main routes `/basket/checkout`, `{handler?}`, `/basket/success`
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because UI screen/route evidence, doc evidence converges on the same basket concept.
- `blazor-auth-state` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_blazor-auth-state`, primary entity `entity_blazor-auth-state`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same blazor auth state concept.
- `blazor-authenticated-app-shell` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_blazor-authenticated-app-shell`, primary entity `entity_blazor-authenticated-app-shell`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same blazor authenticated app shell concept.
- `blazor-authenticated-route` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_blazor-authenticated-route`, primary entity `entity_blazor-authenticated-route`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same blazor authenticated route concept.
- `blazor-route-table` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_blazor-route-table`, primary entity `entity_blazor-route-table`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same blazor route table concept.
- `catalog-item` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 7 screens, 0 workflows, 1 docs)
  - primary concept `entity_catalog-item`, primary entity `entity_catalog-item`
  - participants _none_
  - main capabilities _none_
  - main routes `/admin/edit-catalog-item`, `/admin`, `/admin/catalog-items/create`, `/admin/catalog-items/:id/delete`
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because UI screen/route evidence, doc evidence converges on the same catalog item concept.
- `flow-lifecycle-flow` (3 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 1 docs)
  - primary concept `flow_lifecycle-flow`
  - participants `actor_admin`, `actor_manager`, `actor_user`
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because doc evidence, actor/role evidence converges on the same lifecycle flow concept.
  - actor `actor_admin` docs=`lifecycle-flow`
  - actor `actor_manager` docs=`lifecycle-flow`
  - actor `actor_user` docs=`lifecycle-flow`
- `item` (0 actors, 0 roles, 0 entities, 0 enums, 3 capabilities, 0 shapes, 1 screens, 1 workflows, 1 docs)
  - primary concept `entity_item`, primary entity `entity_item`
  - participants _none_
  - main capabilities `cap_create_item`, `cap_get_item`, `cap_list_items`
  - main routes `/`
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because API capability evidence, UI screen/route evidence, workflow evidence, doc evidence converges on the same item concept.
- `order` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 2 screens, 0 workflows, 1 docs)
  - primary concept `entity_order`, primary entity `entity_order`
  - participants _none_
  - main capabilities _none_
  - main routes `/order/detail`, `/order/my-orders`
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because UI screen/route evidence, doc evidence converges on the same order concept.
- `razor-form-post` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_razor-form-post`, primary entity `entity_razor-form-post`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same razor form post concept.
- `razor-server-navigation` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_razor-server-navigation`, primary entity `entity_razor-server-navigation`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same razor server navigation concept.
- `surface-account` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 17 screens, 0 workflows, 1 docs)
  - primary concept `account_confirm_email`
  - participants _none_
  - main capabilities _none_
  - main routes `/account/confirm-email`, `/account/login`, `/account/logout`, `/logout`
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because UI screen/route evidence, doc evidence converges on the same account concept.
- `surface-app` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 2 screens, 0 workflows, 1 docs)
  - primary concept `error`
  - participants _none_
  - main capabilities _none_
  - main routes `/error`, `/privacy`
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because UI screen/route evidence, doc evidence converges on the same app concept.

## Candidate Model Files

- `candidates/reconcile/model/bundles/basket/README.md`
- `candidates/reconcile/model/bundles/basket/docs/journeys/basket_journey.md`
- `candidates/reconcile/model/bundles/basket/docs/reports/ui-basket.md`
- `candidates/reconcile/model/bundles/basket/docs/reports/ui-basket_checkout.md`
- `candidates/reconcile/model/bundles/basket/docs/reports/ui-basket_success.md`
- `candidates/reconcile/model/bundles/blazor-auth-state/README.md`
- `candidates/reconcile/model/bundles/blazor-authenticated-app-shell/README.md`
- `candidates/reconcile/model/bundles/blazor-authenticated-route/README.md`
- `candidates/reconcile/model/bundles/blazor-route-table/README.md`
- `candidates/reconcile/model/bundles/catalog-item/README.md`
- `candidates/reconcile/model/bundles/catalog-item/docs/journeys/catalog_item_journey.md`
- `candidates/reconcile/model/bundles/catalog-item/docs/reports/ui-catalog_item_admin.md`
- `candidates/reconcile/model/bundles/catalog-item/docs/reports/ui-catalog_item_admin_edit.md`
- `candidates/reconcile/model/bundles/catalog-item/docs/reports/ui-catalog_item_create.md`
- `candidates/reconcile/model/bundles/catalog-item/docs/reports/ui-catalog_item_delete.md`
- `candidates/reconcile/model/bundles/catalog-item/docs/reports/ui-catalog_item_detail.md`
- `candidates/reconcile/model/bundles/catalog-item/docs/reports/ui-catalog_item_edit.md`
- `candidates/reconcile/model/bundles/catalog-item/docs/reports/ui-catalog_item_list.md`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/README.md`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/actors/actor_admin.tg`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/actors/actor_manager.tg`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/actors/actor_user.tg`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/docs/workflows/lifecycle-flow.md`
- `candidates/reconcile/model/bundles/item/README.md`
- `candidates/reconcile/model/bundles/item/capabilities/cap_create_item.tg`
- `candidates/reconcile/model/bundles/item/capabilities/cap_get_item.tg`
- `candidates/reconcile/model/bundles/item/capabilities/cap_list_items.tg`
- `candidates/reconcile/model/bundles/item/decisions/dec_item.tg`
- `candidates/reconcile/model/bundles/item/docs/journeys/item_journey.md`
- `candidates/reconcile/model/bundles/item/docs/reports/ui-catalog_home.md`
- `candidates/reconcile/model/bundles/item/docs/workflows/workflow_item.md`
- `candidates/reconcile/model/bundles/order/README.md`
- `candidates/reconcile/model/bundles/order/docs/journeys/order_journey.md`
- `candidates/reconcile/model/bundles/order/docs/reports/ui-order_detail.md`
- `candidates/reconcile/model/bundles/order/docs/reports/ui-order_list.md`
- `candidates/reconcile/model/bundles/razor-form-post/README.md`
- `candidates/reconcile/model/bundles/razor-server-navigation/README.md`
- `candidates/reconcile/model/bundles/surface-account/README.md`
- `candidates/reconcile/model/bundles/surface-account/docs/journeys/surface_account_journey.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-account_confirm_email.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-account_login.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-account_logout.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-account_logout_page.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-account_register.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-change_password.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-disable2fa.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-enable_authenticator.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-external_login.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-generate_recovery_code.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-lockout.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-login_with2fa.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-my_account.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-reset_authenticator.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-set_password.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-show_recover_code.md`
- `candidates/reconcile/model/bundles/surface-account/docs/reports/ui-two_factor_authentication.md`
- `candidates/reconcile/model/bundles/surface-app/README.md`
- `candidates/reconcile/model/bundles/surface-app/docs/journeys/surface_app_journey.md`
- `candidates/reconcile/model/bundles/surface-app/docs/reports/ui-error.md`
- `candidates/reconcile/model/bundles/surface-app/docs/reports/ui-privacy.md`

## Canonical Outputs

- None
