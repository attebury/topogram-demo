---
id: comment_journey
kind: journey
title: Comment Creation Flow
status: inferred
summary: Candidate comment journey inferred during reconcile from imported app evidence.
source_of_truth: imported
confidence: medium
review_required: true
related_entities:
  - entity_comment
related_capabilities:
  - cap_create_comment
  - cap_delete_comment
  - cap_list_comments
related_workflows:
  - workflow_comment
provenance:
  - conduit/apps/articles/urls.py#GET /api/articles/{article_slug}/comments
  - conduit/apps/articles/serializers.py
  - conduit/apps/articles/views.py
  - conduit/apps/articles/urls.py#POST /api/articles/{article_slug}/comments
  - conduit/apps/articles/urls.py#DELETE /api/articles/{article_slug}/comments/{comment_pk}
  - conduit/apps/articles/models.py
tags:
  - import
  - journey
---

Candidate journey inferred during reconcile from imported capabilities, UI surfaces, and workflow evidence.

Review and rewrite this draft before promoting it as canonical.

The user intent centers on creating comment work safely based on the brownfield capabilities, route evidence, and workflow signals recovered for this bundle.

## Recovered Signals

Capabilities: `cap_create_comment`, `cap_delete_comment`, `cap_list_comments`
Workflows: `workflow_comment`
Rules: _none_
Screens: _none_
Routes: _none_

## Happy Path

1. The user enters the flow through the comment API surface.
2. The recovered flow uses `cap_list_comments` to load or establish the current comment state.
3. The user continues through `cap_delete_comment` while keeping the recovered comment lifecycle coherent.

## Alternate Paths

- Workflow evidence such as `workflow_comment` should stay aligned with the journey instead of drifting into an undocumented lifecycle.
- If the brownfield app enforces important constraints outside the imported model, capture them explicitly before promotion.
- If only API evidence exists today, add UI or docs context before promoting this journey as canonical.

## Change Review Notes

Review this journey when changing comment capabilities, screen surfaces, route structure, or workflow transitions.

## Promotion Notes

- Canonical destination: `docs/journeys/comment_journey.md`.
- Promote this draft with `reconcile adopt journeys --write` after reviewing participants, recovered signals, and change-review notes.
- Keep the promoted journey aligned with bundle `comment` so future reconcile runs continue to explain the same user-goal flow.
