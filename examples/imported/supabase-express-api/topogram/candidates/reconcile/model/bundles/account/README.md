# Account Candidate Bundle

Concept id: `entity_account`

Entities: 1
Enums: 0
Capabilities: 6
Shapes: 5
Screens: 0
UI routes: 0
UI actions: 0
Workflows: 1
Workflow states: 0
Workflow transitions: 3
Docs: 0

## Suggested Merge

- Action: `promote_as_candidate_concept`
- Promote capabilities: `cap_create_account`, `cap_list_accounts`, `cap_register_account`, `cap_sign_in_account`, `cap_update_account_role`, `cap_update_account_status`
- Promote shapes: `shape_input_register_account`, `shape_input_sign_in_account`, `shape_output_list_accounts`, `shape_output_register_account`, `shape_output_sign_in_account`

## Suggested Adoption

- `promote_entity` `entity_account`
- `promote_capability` `cap_create_account`
- `promote_capability` `cap_list_accounts`
- `promote_capability` `cap_register_account`
- `promote_capability` `cap_sign_in_account`
- `promote_capability` `cap_update_account_role`
- `promote_capability` `cap_update_account_status`
- `promote_shape` `shape_input_register_account`
- `promote_shape` `shape_input_sign_in_account`
- `promote_shape` `shape_output_list_accounts`
- `promote_shape` `shape_output_register_account`
- `promote_shape` `shape_output_sign_in_account`
- `promote_workflow_decision` `dec_account`
- `promote_workflow_doc` `workflow_account`

## Workflow Impacts

- `workflow_review:account` requires workflow review for `workflow_account`

## Entity Evidence

- `entity_account` from `src/schema.ts`

## API Evidence

- `cap_create_account` at `POST /admin/accounts`
- `cap_list_accounts` at `GET /admin/accounts`
- `cap_register_account` at `POST /signup`
- `cap_sign_in_account` at `POST /login`
- `cap_update_account_role` at `PUT /admin/accounts/{id}/role`
- `cap_update_account_status` at `PUT /admin/accounts/{id}/status`

## Workflow Evidence

- `workflow_account` for `entity_account`
