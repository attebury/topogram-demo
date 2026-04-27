# Profile Candidate Bundle

Concept id: `entity_profile`

Actors: 0
Roles: 0
Entities: 0
Enums: 0
Capabilities: 3
Shapes: 3
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Verifications: 0
Workflow states: 0
Workflow transitions: 2
Docs: 1

## Operator Summary

- Primary concept: `entity_profile`
- Primary entity: `entity_profile`
- Participants: _none_
- Main capabilities: `cap_follow_profile`, `cap_get_profile`, `cap_unfollow_profile`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_profile`
- Auth permission hints: permission `api.follow_profile` (medium), permission `api.unfollow_profile` (medium)
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=2)
- Auth escalation: escalated (high-risk runs=25)

## Why This Bundle Exists

This bundle exists because API capability evidence, workflow evidence, doc evidence converges on the same profile concept.

## Auth Permission Hints

- permission `api.follow_profile` (medium) <- `cap_follow_profile`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.follow_profile` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `api.unfollow_profile` (medium) <- `cap_unfollow_profile`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.unfollow_profile` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_follow_profile`, `cap_get_profile`, `cap_unfollow_profile`
- Promote shapes: `shape_output_follow_profile`, `shape_output_get_profile`, `shape_output_unfollow_profile`

## Suggested Adoption

- `promote_capability` `cap_follow_profile`
- `promote_capability` `cap_get_profile`
- `promote_capability` `cap_unfollow_profile`
- `promote_shape` `shape_output_follow_profile`
- `promote_shape` `shape_output_get_profile`
- `promote_shape` `shape_output_unfollow_profile`
- `promote_doc` `profile_journey`
- `promote_workflow_decision` `dec_profile`
- `promote_workflow_doc` `workflow_profile`

## Journey Drafts

- `profile_journey` (Profile Interaction Flow) -> `docs/journeys/profile_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:profile` requires workflow review for `workflow_profile`

## API Evidence

- `cap_follow_profile` at `POST /api/profiles/{username}/follow`
- `cap_get_profile` at `GET /api/profiles/{username}`
- `cap_unfollow_profile` at `DELETE /api/profiles/{username}/follow`

## Workflow Evidence

- `workflow_profile` for `entity_profile`

## Doc Evidence

- `profile_journey` (journey) from `config/routes.rb#GET /api/profiles/:username`, `app/controllers/profiles_controller.rb`
