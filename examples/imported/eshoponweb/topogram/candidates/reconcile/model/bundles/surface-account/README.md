# Account Candidate Bundle

Concept id: `surface_account`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 0
Shapes: 0
Screens: 17
UI routes: 17
UI actions: 5
Workflows: 0
Verifications: 0
Workflow states: 0
Workflow transitions: 0
Docs: 1

## Operator Summary

- Primary concept: `account_confirm_email`
- Primary entity: _none_
- Participants: _none_
- Main capabilities: _none_
- Main screens: `account_confirm_email`, `account_login`, `account_logout`, `account_logout_page`
- Main routes: `/account/confirm-email`, `/account/login`, `/account/logout`, `/logout`
- Main workflows: _none_
- Auth permission hints: _none_
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: no auth hints (adopted=0, deferred=0, unresolved=0)

## Why This Bundle Exists

This bundle exists because UI screen/route evidence, doc evidence converges on the same account concept.

## Suggested Merge

- Action: `promote_as_candidate_concept`

## Suggested Adoption

- `promote_doc` `surface_account_journey`
- `promote_ui_report` `ui_account_confirm_email`
- `promote_ui_report` `ui_account_login`
- `promote_ui_report` `ui_account_logout`
- `promote_ui_report` `ui_account_logout_page`
- `promote_ui_report` `ui_account_register`
- `promote_ui_report` `ui_change_password`
- `promote_ui_report` `ui_disable2fa`
- `promote_ui_report` `ui_enable_authenticator`
- `promote_ui_report` `ui_external_login`
- `promote_ui_report` `ui_generate_recovery_code`
- `promote_ui_report` `ui_lockout`
- `promote_ui_report` `ui_login_with2fa`
- `promote_ui_report` `ui_my_account`
- `promote_ui_report` `ui_reset_authenticator`
- `promote_ui_report` `ui_set_password`
- `promote_ui_report` `ui_show_recover_code`
- `promote_ui_report` `ui_two_factor_authentication`

## Journey Drafts

- `surface_account_journey` (Account Core Journey) -> `docs/journeys/surface_account_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## UI Evidence

- `account_confirm_email` auth at `/account/confirm-email`
- `account_login` auth at `/account/login`
- `account_logout` auth at `/logout`
- `account_logout_page` auth at `/account/logout`
- `account_register` auth at `/account/register`
- `change_password` settings at `/manage/change-password`
- `disable2fa` settings at `/manage/disable2fa`
- `enable_authenticator` settings at `/manage/enable-authenticator`
- `external_login` settings at `/manage/external-login`
- `generate_recovery_code` settings at `/manage/generate-recovery-code`
- `lockout` auth at `/account/lockout`
- `login_with2fa` auth at `/account/login-with2fa`
- `my_account` settings at `/manage/my-account`
- `reset_authenticator` settings at `/manage/reset-authenticator`
- `set_password` settings at `/manage/set-password`
- `show_recover_code` settings at `/manage/show-recover-code`
- `two_factor_authentication` settings at `/manage/two-factor-authentication`

## Doc Evidence

- `surface_account_journey` (journey) from `src/BlazorAdmin/Pages/Logout.razor`, `src/Web/Areas/Identity/Pages/Account/ConfirmEmail.cshtml`
