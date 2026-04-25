# Comment Candidate Bundle

Concept id: `entity_comment`

Actors: 0
Roles: 0
Entities: 1
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

- Primary concept: `entity_comment`
- Primary entity: `entity_comment`
- Participants: _none_
- Main capabilities: `cap_create_comment`, `cap_delete_comment`, `cap_list_comments`
- Main screens: _none_
- Main routes: _none_
- Main workflows: `workflow_comment`
- Auth permission hints: permission `api.create` (medium), permission `api.delete` (medium)
- Auth claim hints: _none_
- Ownership hints: _none_
- Auth role guidance: _none_
- Auth closure: high risk (adopted=0, deferred=0, unresolved=2)
- Auth escalation: escalated (high-risk runs=17)

## Why This Bundle Exists

This bundle exists because entity evidence, API capability evidence, workflow evidence, doc evidence converges on the same comment concept.

## Auth Permission Hints

- permission `api.create` (medium) <- `cap_create_comment`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.create` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.
- permission `api.delete` (medium) <- `cap_delete_comment`
  - evidence capabilities=1, routes=1, docs=1, provenance=0
  - closure: unresolved
  - closure reason: No reviewed projection patch has been applied for this inferred auth hint yet.
  - why inferred: Secured capability naming and imported route evidence suggest this permission may gate the recovered surface. This inference is based on 1 secured capability match, 1 route/resource match, 1 imported doc or policy match.
  - review next: Confirm whether permission `api.delete` should gate the related auth-sensitive capabilities before promoting this bundle into canonical auth rules or UI visibility.

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_comment`, `cap_delete_comment`, `cap_list_comments`
- Promote shapes: `shape_input_create_comment`, `shape_output_create_comment`, `shape_output_list_comments`

## Suggested Adoption

- `promote_entity` `entity_comment`
- `promote_capability` `cap_create_comment`
- `promote_capability` `cap_delete_comment`
- `promote_capability` `cap_list_comments`
- `promote_shape` `shape_input_create_comment`
- `promote_shape` `shape_output_create_comment`
- `promote_shape` `shape_output_list_comments`
- `promote_doc` `comment_journey`
- `promote_workflow_decision` `dec_comment`
- `promote_workflow_doc` `workflow_comment`

## Journey Drafts

- `comment_journey` (Comment Creation Flow) -> `docs/journeys/comment_journey.md`
- Promote reviewed journey drafts with `reconcile adopt journeys --write`.

## Workflow Impacts

- `workflow_review:comment` requires workflow review for `workflow_comment`

## Entity Evidence

- `entity_comment` from `db/schema.rb`

## API Evidence

- `cap_create_comment` at `POST /api/articles/{slug}/comments`
- `cap_delete_comment` at `DELETE /api/articles/{slug}/comments/{id}`
- `cap_list_comments` at `GET /api/articles/{slug}/comments`

## Workflow Evidence

- `workflow_comment` for `entity_comment`

## Doc Evidence

- `comment_journey` (journey) from `config/routes.rb#GET /api/articles/:slug/comments`, `app/controllers/comments_controller.rb`
