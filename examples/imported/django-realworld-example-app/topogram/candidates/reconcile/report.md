# Reconcile Report

## Promoted

- None

## Skipped

- `docs/glossary/install.md`
- `docs/glossary/installation.md`
- `docs/glossary/productionready.md`
- `docs/glossary/pyenv.md`
- `docs/import-report.md`
- `docs/workflows/lifecycle-flow.md`

## Adoption

- Plan: `candidates/reconcile/adoption-plan.json`
- Selector: `none`
- Write mode: yes
- Approved items: 0
- Applied items: 66
- Skipped items: 0
- Blocked items: 0
- Canonical files: 0
- Refreshed canonical files: 0
- Approved review groups: 6
- Projection-dependent items: 0
- Projection review groups: 0
- UI review groups: 0
- Workflow review groups: 6

## Next Best Action

- None

## Approved Review Groups

- `workflow_review:article`
- `workflow_review:user`
- `workflow_review:comment`
- `workflow_review:profile`
- `workflow_review:tag`
- `workflow_review:account`

## Projection Review Groups

- None

## UI Review Groups

- None

## Workflow Review Groups

- `workflow_review:account` <- `dec_account`, `workflow_account`
- `workflow_review:article` <- `dec_article`, `workflow_article`
- `workflow_review:comment` <- `dec_comment`, `workflow_comment`
- `workflow_review:profile` <- `dec_profile`, `workflow_profile`
- `workflow_review:tag` <- `dec_tag`, `workflow_tag`
- `workflow_review:user` <- `dec_user`, `workflow_user`

## Bundle Blockers

- `account`: blocked=0, approved=0, applied=6, pending=0, dependencies=_none_
- `article`: blocked=0, approved=0, applied=21, pending=0, dependencies=_none_
- `comment`: blocked=0, approved=0, applied=10, pending=0, dependencies=_none_
- `profile`: blocked=0, approved=0, applied=11, pending=0, dependencies=_none_
- `tag`: blocked=0, approved=0, applied=6, pending=0, dependencies=_none_
- `user`: blocked=0, approved=0, applied=12, pending=0, dependencies=_none_

## Bundle Priorities

- `article`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0, permission-hints=5, auth-closure=high_risk, auth-aging=stale_high_risk, high-risk-runs=17, auth-priority=3
- `user`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0, permission-hints=2, auth-closure=high_risk, auth-aging=stale_high_risk, high-risk-runs=17, auth-priority=3
- `profile`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0, permission-hints=2, auth-closure=high_risk, auth-aging=stale_high_risk, high-risk-runs=17, auth-priority=3
- `comment`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0, permission-hints=2, auth-closure=high_risk, auth-aging=stale_high_risk, high-risk-runs=17, auth-priority=3
- `tag`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0
- `account`: action=complete, why=This bundle has no blocked, approved, or pending work left., safe-now=0

## Suppressed Noise Bundles

- None

## Projection Dependencies

- None

## Blocked Adoption Items

- None

## Candidate Model Bundles

- `account` (0 actors, 0 roles, 0 entities, 0 enums, 1 capabilities, 2 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_account`, primary entity `entity_account`
  - participants _none_
  - main capabilities `cap_sign_in_account`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because API capability evidence, workflow evidence, doc evidence converges on the same account concept.
- `article` (0 actors, 0 roles, 1 entities, 0 enums, 7 capabilities, 10 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_article`, primary entity `entity_article`
  - participants _none_
  - main capabilities `cap_create_article`, `cap_favorite_article`, `cap_feed_article`, `cap_get_article`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints permission `api.create` (medium), permission `api.favorite_article` (medium), permission `api.feed_article` (medium), permission `api.unfavorite_article` (medium), permission `api.update` (medium)
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure high risk (adopted=0, deferred=0, unresolved=5)
  - auth escalation escalated (high-risk runs=17)
  - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same article concept.
  - permission permission `api.create` (medium) <- `cap_create_article`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `api.favorite_article` (medium) <- `cap_favorite_article`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.favorite_article` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `api.feed_article` (medium) <- `cap_feed_article`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.feed_article` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `api.unfavorite_article` (medium) <- `cap_unfavorite_article`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.unfavorite_article` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `api.update` (medium) <- `cap_update_article`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- `comment` (0 actors, 0 roles, 1 entities, 0 enums, 3 capabilities, 3 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_comment`, primary entity `entity_comment`
  - participants _none_
  - main capabilities `cap_create_comment`, `cap_delete_comment`, `cap_list_comments`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints permission `api.create` (medium), permission `api.delete` (medium)
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure high risk (adopted=0, deferred=0, unresolved=2)
  - auth escalation escalated (high-risk runs=17)
  - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same comment concept.
  - permission permission `api.create` (medium) <- `cap_create_comment`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `api.delete` (medium) <- `cap_delete_comment`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.delete` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- `profile` (0 actors, 0 roles, 1 entities, 0 enums, 3 capabilities, 4 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_profile`, primary entity `entity_profile`
  - participants _none_
  - main capabilities `cap_follow_profile`, `cap_get_profile`, `cap_unfollow_profile`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints permission `api.follow_profile` (medium), permission `api.unfollow_profile` (medium)
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure high risk (adopted=0, deferred=0, unresolved=2)
  - auth escalation escalated (high-risk runs=17)
  - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same profile concept.
  - permission permission `api.follow_profile` (medium) <- `cap_follow_profile`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.follow_profile` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `api.unfollow_profile` (medium) <- `cap_unfollow_profile`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.unfollow_profile` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- `tag` (0 actors, 0 roles, 1 entities, 0 enums, 1 capabilities, 1 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_tag`, primary entity `entity_tag`
  - participants _none_
  - main capabilities `cap_list_tags`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same tag concept.
- `user` (0 actors, 0 roles, 1 entities, 0 enums, 3 capabilities, 5 shapes, 0 screens, 1 workflows, 1 docs)
  - primary concept `entity_user`, primary entity `entity_user`
  - participants _none_
  - main capabilities `cap_create_user`, `cap_get_user`, `cap_update_user`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints permission `api.read` (medium), permission `api.update` (medium)
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure high risk (adopted=0, deferred=0, unresolved=2)
  - auth escalation escalated (high-risk runs=17)
  - why This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same user concept.
  - permission permission `api.read` (medium) <- `cap_get_user`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.read` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
  - permission permission `api.update` (medium) <- `cap_update_user`
    - closure unresolved
    - closure reason No reviewed projection patch has been applied for this inferred auth hint yet.
    - why inferred Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
    - review next Confirm whether permission `api.update` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Candidate Model Files

- `candidates/reconcile/model/bundles/account/README.md`
- `candidates/reconcile/model/bundles/account/capabilities/cap_sign_in_account.tg`
- `candidates/reconcile/model/bundles/account/decisions/dec_account.tg`
- `candidates/reconcile/model/bundles/account/docs/journeys/account_journey.md`
- `candidates/reconcile/model/bundles/account/docs/workflows/workflow_account.md`
- `candidates/reconcile/model/bundles/account/shapes/shape_input_sign_in_account.tg`
- `candidates/reconcile/model/bundles/account/shapes/shape_output_sign_in_account.tg`
- `candidates/reconcile/model/bundles/article/README.md`
- `candidates/reconcile/model/bundles/article/capabilities/cap_create_article.tg`
- `candidates/reconcile/model/bundles/article/capabilities/cap_favorite_article.tg`
- `candidates/reconcile/model/bundles/article/capabilities/cap_feed_article.tg`
- `candidates/reconcile/model/bundles/article/capabilities/cap_get_article.tg`
- `candidates/reconcile/model/bundles/article/capabilities/cap_list_articles.tg`
- `candidates/reconcile/model/bundles/article/capabilities/cap_unfavorite_article.tg`
- `candidates/reconcile/model/bundles/article/capabilities/cap_update_article.tg`
- `candidates/reconcile/model/bundles/article/decisions/dec_article.tg`
- `candidates/reconcile/model/bundles/article/docs/journeys/article_journey.md`
- `candidates/reconcile/model/bundles/article/docs/workflows/workflow_article.md`
- `candidates/reconcile/model/bundles/article/entities/entity_article.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_input_create_article.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_input_favorite_article.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_input_update_article.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_output_create_article.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_output_favorite_article.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_output_feed_article.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_output_get_article.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_output_list_articles.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_output_unfavorite_article.tg`
- `candidates/reconcile/model/bundles/article/shapes/shape_output_update_article.tg`
- `candidates/reconcile/model/bundles/comment/README.md`
- `candidates/reconcile/model/bundles/comment/capabilities/cap_create_comment.tg`
- `candidates/reconcile/model/bundles/comment/capabilities/cap_delete_comment.tg`
- `candidates/reconcile/model/bundles/comment/capabilities/cap_list_comments.tg`
- `candidates/reconcile/model/bundles/comment/decisions/dec_comment.tg`
- `candidates/reconcile/model/bundles/comment/docs/journeys/comment_journey.md`
- `candidates/reconcile/model/bundles/comment/docs/workflows/workflow_comment.md`
- `candidates/reconcile/model/bundles/comment/entities/entity_comment.tg`
- `candidates/reconcile/model/bundles/comment/shapes/shape_input_create_comment.tg`
- `candidates/reconcile/model/bundles/comment/shapes/shape_output_create_comment.tg`
- `candidates/reconcile/model/bundles/comment/shapes/shape_output_list_comments.tg`
- `candidates/reconcile/model/bundles/profile/README.md`
- `candidates/reconcile/model/bundles/profile/capabilities/cap_follow_profile.tg`
- `candidates/reconcile/model/bundles/profile/capabilities/cap_get_profile.tg`
- `candidates/reconcile/model/bundles/profile/capabilities/cap_unfollow_profile.tg`
- `candidates/reconcile/model/bundles/profile/decisions/dec_profile.tg`
- `candidates/reconcile/model/bundles/profile/docs/journeys/profile_journey.md`
- `candidates/reconcile/model/bundles/profile/docs/workflows/workflow_profile.md`
- `candidates/reconcile/model/bundles/profile/entities/entity_profile.tg`
- `candidates/reconcile/model/bundles/profile/shapes/shape_input_follow_profile.tg`
- `candidates/reconcile/model/bundles/profile/shapes/shape_output_follow_profile.tg`
- `candidates/reconcile/model/bundles/profile/shapes/shape_output_get_profile.tg`
- `candidates/reconcile/model/bundles/profile/shapes/shape_output_unfollow_profile.tg`
- `candidates/reconcile/model/bundles/tag/README.md`
- `candidates/reconcile/model/bundles/tag/capabilities/cap_list_tags.tg`
- `candidates/reconcile/model/bundles/tag/decisions/dec_tag.tg`
- `candidates/reconcile/model/bundles/tag/docs/journeys/tag_journey.md`
- `candidates/reconcile/model/bundles/tag/docs/workflows/workflow_tag.md`
- `candidates/reconcile/model/bundles/tag/entities/entity_tag.tg`
- `candidates/reconcile/model/bundles/tag/shapes/shape_output_list_tags.tg`
- `candidates/reconcile/model/bundles/user/README.md`
- `candidates/reconcile/model/bundles/user/capabilities/cap_create_user.tg`
- `candidates/reconcile/model/bundles/user/capabilities/cap_get_user.tg`
- `candidates/reconcile/model/bundles/user/capabilities/cap_update_user.tg`
- `candidates/reconcile/model/bundles/user/decisions/dec_user.tg`
- `candidates/reconcile/model/bundles/user/docs/journeys/user_journey.md`
- `candidates/reconcile/model/bundles/user/docs/workflows/workflow_user.md`
- `candidates/reconcile/model/bundles/user/entities/entity_user.tg`
- `candidates/reconcile/model/bundles/user/shapes/shape_input_create_user.tg`
- `candidates/reconcile/model/bundles/user/shapes/shape_input_update_user.tg`
- `candidates/reconcile/model/bundles/user/shapes/shape_output_create_user.tg`
- `candidates/reconcile/model/bundles/user/shapes/shape_output_get_user.tg`
- `candidates/reconcile/model/bundles/user/shapes/shape_output_update_user.tg`

## Canonical Outputs

- None
