---
id: surface_account_journey
kind: journey
title: Account Core Journey
status: inferred
summary: Candidate account journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
provenance:
  - src/BlazorAdmin/Pages/Logout.razor
  - src/Web/Areas/Identity/Pages/Account/ConfirmEmail.cshtml
  - src/Web/Areas/Identity/Pages/Account/Login.cshtml
  - src/Web/Areas/Identity/Pages/Account/Logout.cshtml
  - src/Web/Areas/Identity/Pages/Account/Register.cshtml
  - src/Web/Views/Account/Lockout.cshtml
  - src/Web/Views/Account/LoginWith2fa.cshtml
  - src/Web/Views/Manage/ChangePassword.cshtml
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on moving through the recovered account flow with confidence based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: _none_
Workflows: _none_
Rules: _none_
Screens: `account_logout`, `account_confirm_email`, `account_login`, `account_logout_page`, `account_register`, `lockout`, `login_with2fa`, `change_password`, `disable2fa`, `enable_authenticator`, `external_login`, `generate_recovery_code`, `my_account`, `reset_authenticator`, `set_password`, `show_recover_code`, `two_factor_authentication`
Routes: `/logout`, `/account/confirm-email`, `/account/login`, `/account/logout`, `/account/register`, `/account/lockout`, `/account/login-with2fa`, `/manage/change-password`, `/manage/disable2fa`, `/manage/enable-authenticator`, `/manage/external-login`, `/manage/generate-recovery-code`, `/manage/my-account`, `/manage/reset-authenticator`, `/manage/set-password`, `/manage/show-recover-code`, `/manage/two-factor-authentication`

## Happy Path

1. The user enters the flow through `/logout` or `/account/confirm-email`.
2. The recovered flow uses the inferred account capabilities to load or establish the current account state.
3. The user continues through the remaining account actions while keeping auth, settings surfaces `account_logout`, `account_confirm_email`, `account_login` coherent.

## Alternate Paths

- If the brownfield app exposes alternate lifecycle branches, capture them explicitly before promoting this journey.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- Recovered routes `/logout`, `/account/confirm-email`, `/account/login` should remain understandable to the user instead of fragmenting the flow.

## Change Review Notes

Review this journey when changing account capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/surface_account_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `surface-account` so future reconcile runs continue to explain the same user-goal flow.
