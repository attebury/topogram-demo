# Reconcile Report

## Promoted

- None

## Skipped

- `docs/glossary/architecture.md`
- `docs/glossary/business.md`
- `docs/glossary/data.md`
- `docs/glossary/layer.md`
- `docs/import-report.md`
- `docs/workflows/lifecycle-flow.md`
- `docs/workflows/review-workflow.md`

## Adoption

- Plan: `candidates/reconcile/adoption-plan.json`
- Selector: `none`
- Write mode: yes
- Approved items: 0
- Applied items: 18
- Skipped items: 0
- Blocked items: 0
- Canonical files: 0
- Refreshed canonical files: 0
- Approved review groups: 2
- Projection-dependent items: 0
- Projection review groups: 0
- UI review groups: 0
- Workflow review groups: 2

## Next Best Action

- None

## Approved Review Groups

- `workflow_review:country`
- `workflow_review:country-details`

## Projection Review Groups

- None

## UI Review Groups

- None

## Workflow Review Groups

- `workflow_review:country` <- `dec_country`, `workflow_country`
- `workflow_review:country-details` <- `dec_country_details`, `workflow_country_details`

## Bundle Blockers

- `country`: blocked=0, approved=0, applied=9, pending=0, dependencies=_none_
- `country-detail`: blocked=0, approved=0, applied=1, pending=0, dependencies=_none_
- `country-details`: blocked=0, approved=0, applied=5, pending=0, dependencies=_none_
- `currency`: blocked=0, approved=0, applied=1, pending=0, dependencies=_none_
- `flow-lifecycle-flow`: blocked=0, approved=0, applied=2, pending=0, dependencies=_none_

## Bundle Priorities

- `country`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `country-details`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `country-detail`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `currency`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `flow-lifecycle-flow`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0

## Suppressed Noise Bundles

- None

## Projection Dependencies

- None

## Blocked Adoption Items

- None

## Candidate Model Bundles

- `country` (0 actors, 0 roles, 1 entities, 0 enums, 1 capabilities, 1 shapes, 3 screens, 1 workflows, 1 docs)
  - primary concept `entity_country`, primary entity `entity_country`
  - participants _none_
  - main capabilities `cap_list_countries`
  - main routes `/countries/:alpha3Code`, `/countries/:alpha3Code/flag`, `/countries`
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because entity evidence, API capability evidence, UI screen/route evidence, workflow evidence, doc evidence converges on the same country concept.
- `country-detail` (0 actors, 0 roles, 1 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_country_detail`, primary entity `entity_country_detail`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because entity evidence converges on the same country detail concept.
- `country-details` (0 actors, 0 roles, 0 entities, 0 enums, 1 capabilities, 1 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_country_details`, primary entity `entity_country_details`
  - participants _none_
  - main capabilities `cap_get_country_details`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because API capability evidence, workflow evidence, doc evidence converges on the same country details concept.
- `currency` (0 actors, 0 roles, 1 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_currency`, primary entity `entity_currency`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because entity evidence converges on the same currency concept.
- `flow-lifecycle-flow` (1 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 1 docs)
  - primary concept `flow_lifecycle-flow`
  - participants `actor_user`
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because doc evidence, actor/role evidence converges on the same lifecycle flow concept.
  - actor `actor_user` docs=`lifecycle-flow`, `review-workflow`
- `swiftui-pull-to-refresh` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_swiftui-pull-to-refresh`, primary entity `entity_swiftui-pull-to-refresh`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same swiftui pull to refresh concept.
- `swiftui-search` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_swiftui-search`, primary entity `entity_swiftui-search`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same swiftui search concept.
- `swiftui-sheet` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_swiftui-sheet`, primary entity `entity_swiftui-sheet`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same swiftui sheet concept.
- `swiftui-stack-navigation` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_swiftui-stack-navigation`, primary entity `entity_swiftui-stack-navigation`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same swiftui stack navigation concept.
- `topbar-shell` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 0 screens, 0 workflows, 0 docs)
  - primary concept `entity_topbar-shell`, primary entity `entity_topbar-shell`
  - participants _none_
  - main capabilities _none_
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because multiple imported signals point at the same topbar shell concept.

## Candidate Model Files

- `candidates/reconcile/model/bundles/country-detail/README.md`
- `candidates/reconcile/model/bundles/country-detail/entities/entity_country_detail.tg`
- `candidates/reconcile/model/bundles/country-details/README.md`
- `candidates/reconcile/model/bundles/country-details/capabilities/cap_get_country_details.tg`
- `candidates/reconcile/model/bundles/country-details/decisions/dec_country_details.tg`
- `candidates/reconcile/model/bundles/country-details/docs/journeys/country_details_journey.md`
- `candidates/reconcile/model/bundles/country-details/docs/workflows/workflow_country_details.md`
- `candidates/reconcile/model/bundles/country-details/shapes/shape_output_get_country_details.tg`
- `candidates/reconcile/model/bundles/country/README.md`
- `candidates/reconcile/model/bundles/country/capabilities/cap_list_countries.tg`
- `candidates/reconcile/model/bundles/country/decisions/dec_country.tg`
- `candidates/reconcile/model/bundles/country/docs/journeys/country_journey.md`
- `candidates/reconcile/model/bundles/country/docs/reports/ui-country_detail.md`
- `candidates/reconcile/model/bundles/country/docs/reports/ui-country_flag_modal.md`
- `candidates/reconcile/model/bundles/country/docs/reports/ui-country_list.md`
- `candidates/reconcile/model/bundles/country/docs/workflows/workflow_country.md`
- `candidates/reconcile/model/bundles/country/entities/entity_country.tg`
- `candidates/reconcile/model/bundles/country/shapes/shape_output_list_countries.tg`
- `candidates/reconcile/model/bundles/currency/README.md`
- `candidates/reconcile/model/bundles/currency/entities/entity_currency.tg`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/README.md`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/actors/actor_user.tg`
- `candidates/reconcile/model/bundles/flow-lifecycle-flow/docs/workflows/lifecycle-flow.md`
- `candidates/reconcile/model/bundles/swiftui-pull-to-refresh/README.md`
- `candidates/reconcile/model/bundles/swiftui-search/README.md`
- `candidates/reconcile/model/bundles/swiftui-sheet/README.md`
- `candidates/reconcile/model/bundles/swiftui-stack-navigation/README.md`
- `candidates/reconcile/model/bundles/topbar-shell/README.md`

## Canonical Outputs

- None
