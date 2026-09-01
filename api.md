# Straddle TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Accounts`](#accounts)
  - [Get an account](#get-an-account)
  - [Update an account](#update-an-account)
  - [Create an account](#create-an-account)
  - [List accounts](#list-accounts)
  - [Onboard an account](#onboard-an-account)
  - [Simulate status transitions for a sandbox account](#simulate-status-transitions-for-a-sandbox-account)
- [`CapabilityRequests`](#capabilityrequests)
  - [Create capability requests](#create-capability-requests)
  - [List capability requests](#list-capability-requests)
- [`LinkedBankAccounts`](#linkedbankaccounts)
  - [Create a linked bank account](#create-a-linked-bank-account)
  - [List linked bank accounts](#list-linked-bank-accounts)
  - [Update a linked bank account](#update-a-linked-bank-account)
  - [Get a linked bank account](#get-a-linked-bank-account)
  - [Get an unmasked linked bank account](#get-an-unmasked-linked-bank-account)
  - [Cancel a linked bank account](#cancel-a-linked-bank-account)
- [`Organizations`](#organizations)
  - [Create an organization](#create-an-organization)
  - [List organizations](#list-organizations)
  - [Get an organization](#get-an-organization)
- [`Representatives`](#representatives)
  - [Create a representative](#create-a-representative)
  - [List representatives](#list-representatives)
  - [Update a representative](#update-a-representative)
  - [Get a representative](#get-a-representative)
  - [Get an unmasked representative](#get-an-unmasked-representative)
- [`Bridge`](#bridge)
  - [Create a paykey from bank account details](#create-a-paykey-from-bank-account-details)
  - [Create a paykey from a Plaid token](#create-a-paykey-from-a-plaid-token)
  - [Create a Bridge widget session token](#create-a-bridge-widget-session-token)
  - [Create a paykey from a Quiltt token](#create-a-paykey-from-a-quiltt-token)
- [`Customers`](#customers)
  - [Get a customer](#get-a-customer)
  - [Update a customer](#update-a-customer)
  - [Delete a customer](#delete-a-customer)
  - [List customers](#list-customers)
  - [Create a customer](#create-a-customer)
  - [Get an unmasked customer](#get-an-unmasked-customer)
  - [Refresh a customer review](#refresh-a-customer-review)
  - [`Customers Review`](#customers-review)
    - [Get a customer review](#get-a-customer-review)
    - [Set a customer verification decision](#set-a-customer-verification-decision)
- [`Paykeys`](#paykeys)
  - [Get a paykey](#get-a-paykey)
  - [Get an unmasked paykey](#get-an-unmasked-paykey)
  - [List paykeys](#list-paykeys)
  - [Reveal a paykey token](#reveal-a-paykey-token)
  - [Cancel a paykey](#cancel-a-paykey)
  - [Refresh a paykey review](#refresh-a-paykey-review)
  - [Refresh a paykey balance](#refresh-a-paykey-balance)
  - [Unblock a paykey](#unblock-a-paykey)
  - [`Paykeys Review`](#paykeys-review)
    - [Set a paykey verification decision](#set-a-paykey-verification-decision)
    - [Get a paykey review](#get-a-paykey-review)
- [`Charges`](#charges)
  - [Get a charge](#get-a-charge)
  - [Update a charge](#update-a-charge)
  - [Create a charge](#create-a-charge)
  - [Hold a charge](#hold-a-charge)
  - [Release a charge](#release-a-charge)
  - [Cancel a charge](#cancel-a-charge)
  - [Get an unmasked charge](#get-an-unmasked-charge)
  - [Resubmit a charge](#resubmit-a-charge)
  - [Refund a paid charge](#refund-a-paid-charge)
  - [Upload a proof-of-authorization document for a charge](#upload-a-proof-of-authorization-document-for-a-charge)
- [`FundingEvents`](#fundingevents)
  - [List funding events](#list-funding-events)
  - [Get a funding event](#get-a-funding-event)
  - [Simulate a funding event](#simulate-a-funding-event)
  - [List funding event payments](#list-funding-event-payments)
- [`Payments`](#payments)
  - [List payments](#list-payments)
- [`Payouts`](#payouts)
  - [Get a payout](#get-a-payout)
  - [Update a payout](#update-a-payout)
  - [Create a payout](#create-a-payout)
  - [Hold a payout](#hold-a-payout)
  - [Release a payout](#release-a-payout)
  - [Cancel a payout](#cancel-a-payout)
  - [Get an unmasked payout](#get-an-unmasked-payout)
  - [Resubmit a payout](#resubmit-a-payout)
  - [Upload a proof-of-authorization document for a payout](#upload-a-proof-of-authorization-document-for-a-payout)
- [`AccountSettings`](#accountsettings)
  - [Get account settings](#get-account-settings)

## Setup

```ts
import StraddleAPI from '@straddlecom/straddle';

const client = new StraddleAPI({
  bearer: process.env['BEARER'], // defaults to the BEARER env var
});
```

## `Accounts`

Accounts represent businesses that use Straddle through a platform.

### Get an account

Returns the account with the specified ID.

| Direction | Type |
| --- | --- |
| Request | [`AccountRetrieveParams`](./src/resources/accounts.ts) |
| Response | [`AccountResponse`](./src/resources/accounts.ts) |

```ts
const account = await client.accounts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update an account

Updates an account's business profile, metadata, and external ID, then returns the account.

| Direction | Type |
| --- | --- |
| Request | [`AccountUpdateParams`](./src/resources/accounts.ts) |
| Response | [`AccountResponse`](./src/resources/accounts.ts) |

```ts
const account = await client.accounts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  business_profile: {
    name: '',
    website: 'https://example.com',
  },
});
```

### Create an account

Creates a business account in the specified organization and returns the account.

| Direction | Type |
| --- | --- |
| Request | [`AccountCreateParams`](./src/resources/accounts.ts) |
| Response | [`AccountResponse`](./src/resources/accounts.ts) |

```ts
const account = await client.accounts.create({
  organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  account_type: 'business',
  business_profile: {
    name: '',
    website: 'https://example.com',
  },
  access_level: 'standard',
});
```

### List accounts

Returns a paginated list of accounts for your platform. Filter the list by status, type, external ID, or text search.

| Direction | Type |
| --- | --- |
| Request | [`AccountListParams`](./src/resources/accounts.ts) |
| Response | [`AccountList`](./src/resources/accounts.ts) |

```ts
const accountList = await client.accounts.list({
  page_number: 1,
  page_size: 100,
  sort_by: 'id',
  sort_order: 'asc',
});
```

### Onboard an account

Starts onboarding and records the account's acceptance of Straddle's Terms of Service. The account must have at least one representative and one linked bank account. This operation also moves all associated representatives and linked bank accounts to `onboarding`.

| Direction | Type |
| --- | --- |
| Request | [`AccountOnboardParams`](./src/resources/accounts.ts) |
| Response | [`AccountResponse`](./src/resources/accounts.ts) |

```ts
const account = await client.accounts.onboard('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  terms_of_service: {
    accepted_date: '2024-01-01T00:00:00.000Z',
    agreement_url: '',
    agreement_type: 'embedded',
  },
});
```

### Simulate status transitions for a sandbox account

Simulates an account status transition to `onboarding` or `active` in the sandbox and returns the account.

| Direction | Type |
| --- | --- |
| Request | [`AccountSimulateOnboardingParams`](./src/resources/accounts.ts) |
| Response | [`AccountResponse`](./src/resources/accounts.ts) |

```ts
const account = await client.accounts.simulateOnboarding('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `CapabilityRequests`

Capability requests change the payment, customer, and consent types available to an account.

### Create capability requests

Creates one or more capability requests for an account and returns the resulting requests.

| Direction | Type |
| --- | --- |
| Request | [`CapabilityRequestCreateParams`](./src/resources/capability-requests.ts) |
| Response | [`CapabilityRequestList`](./src/resources/capability-requests.ts) |

```ts
const capabilityRequestList = await client.capabilityRequests.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### List capability requests

Returns a paginated list of capability requests for an account. Filter the list by capability type, category, or status.

| Direction | Type |
| --- | --- |
| Request | [`CapabilityRequestListParams`](./src/resources/capability-requests.ts) |
| Response | [`CapabilityRequestList`](./src/resources/capability-requests.ts) |

```ts
const capabilityRequestList = await client.capabilityRequests.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  page_number: 1,
  page_size: 100,
  sort_by: 'id',
  sort_order: 'asc',
});
```

## `LinkedBankAccounts`

Linked bank accounts connect external bank accounts to an account or platform for charges, payouts, or billing.

### Create a linked bank account

Creates a linked bank account for an account or platform, assigns its payment purposes, and returns the linked bank account.

| Direction | Type |
| --- | --- |
| Request | [`LinkedBankAccountCreateParams`](./src/resources/linked-bank-accounts.ts) |
| Response | [`LinkedBankAccountResponse`](./src/resources/linked-bank-accounts.ts) |

```ts
const linkedBankAccount = await client.linkedBankAccounts.create({
  bank_account: {
    account_holder: '',
    routing_number: 'xxxxxxxxx',
    account_number: '',
  },
});
```

### List linked bank accounts

Returns a paginated list of linked bank accounts. Filter the list by account, scope, purpose, or status.

| Direction | Type |
| --- | --- |
| Request | [`LinkedBankAccountListParams`](./src/resources/linked-bank-accounts.ts) |
| Response | [`LinkedBankAccountList`](./src/resources/linked-bank-accounts.ts) |

```ts
const linkedBankAccountList = await client.linkedBankAccounts.list({
  page_number: 1,
  page_size: 100,
  sort_by: 'id',
  sort_order: 'asc',
});
```

### Update a linked bank account

Updates bank account details and metadata, then returns the linked bank account. The linked bank account must have status `created`, or status `onboarding` with `status_detail.reason` set to `stuck`.

| Direction | Type |
| --- | --- |
| Request | [`LinkedBankAccountUpdateParams`](./src/resources/linked-bank-accounts.ts) |
| Response | [`LinkedBankAccountResponse`](./src/resources/linked-bank-accounts.ts) |

```ts
const linkedBankAccount = await client.linkedBankAccounts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  bank_account: {
    account_holder: '',
    routing_number: 'xxxxxxxxx',
    account_number: '',
  },
});
```

### Get a linked bank account

Returns the linked bank account with the specified ID. The response masks the account number.

| Direction | Type |
| --- | --- |
| Request | [`LinkedBankAccountRetrieveParams`](./src/resources/linked-bank-accounts.ts) |
| Response | [`LinkedBankAccountResponse`](./src/resources/linked-bank-accounts.ts) |

```ts
const linkedBankAccount = await client.linkedBankAccounts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Get an unmasked linked bank account

Returns the linked bank account with the specified ID without masking its account number. This endpoint is available only when Straddle enables data unmasking for the account.

| Direction | Type |
| --- | --- |
| Request | [`LinkedBankAccountListUnmaskedParams`](./src/resources/linked-bank-accounts.ts) |
| Response | [`UnmaskedLinkedBankAccountResponse`](./src/resources/linked-bank-accounts.ts) |

```ts
const unmaskedLinkedBankAccount = await client.linkedBankAccounts.listUnmasked(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
);
```

### Cancel a linked bank account

Cancels a linked bank account and returns it with status `canceled`. The linked bank account must have status `created`.

| Direction | Type |
| --- | --- |
| Request | [`LinkedBankAccountCancelParams`](./src/resources/linked-bank-accounts.ts) |
| Response | [`LinkedBankAccountResponse`](./src/resources/linked-bank-accounts.ts) |

```ts
const linkedBankAccount = await client.linkedBankAccounts.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Organizations`

Organizations group related Straddle accounts.

### Create an organization

Creates an organization for your platform and returns it. Organizations group related accounts and users.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationCreateParams`](./src/resources/organizations.ts) |
| Response | [`OrganizationResponse`](./src/resources/organizations.ts) |

```ts
const organization = await client.organizations.create({
  name: '',
});
```

### List organizations

Returns a paginated list of organizations for your platform. Filter the list by name or external ID.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationListParams`](./src/resources/organizations.ts) |
| Response | [`OrganizationList`](./src/resources/organizations.ts) |

```ts
const organizationList = await client.organizations.list({
  page_number: 1,
  page_size: 100,
  sort_by: 'id',
  sort_order: 'asc',
});
```

### Get an organization

Returns the organization with the specified ID.

| Direction | Type |
| --- | --- |
| Request | [`OrganizationRetrieveParams`](./src/resources/organizations.ts) |
| Response | [`OrganizationResponse`](./src/resources/organizations.ts) |

```ts
const organization = await client.organizations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Representatives`

Representatives are people associated with a business account for ownership, control, or authorization purposes.

### Create a representative

Creates a representative for an account and returns the representative. Relationship fields identify primary representatives, control persons, and owners.

| Direction | Type |
| --- | --- |
| Request | [`RepresentativeCreateParams`](./src/resources/representatives.ts) |
| Response | [`RepresentativeResponse`](./src/resources/representatives.ts) |

```ts
const representative = await client.representatives.create({
  account_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  first_name: '',
  last_name: '',
  dob: '1980-01-01',
  ssn_last4: '1234',
  email: 'ron.swanson@pawnee.com',
  mobile_number: '+12128675309',
  relationship: {
    primary: false,
    control: false,
    owner: false,
  },
});
```

### List representatives

Returns a paginated list of representatives. Filter the list by account, organization, platform, or scope.

| Direction | Type |
| --- | --- |
| Request | [`RepresentativeListParams`](./src/resources/representatives.ts) |
| Response | [`RepresentativeList`](./src/resources/representatives.ts) |

```ts
const representativeList = await client.representatives.list({
  page_number: 1,
  page_size: 100,
  sort_by: 'id',
  sort_order: 'asc',
});
```

### Update a representative

Updates a representative's personal, contact, relationship, external ID, and metadata fields, then returns the representative.

| Direction | Type |
| --- | --- |
| Request | [`RepresentativeUpdateParams`](./src/resources/representatives.ts) |
| Response | [`RepresentativeResponse`](./src/resources/representatives.ts) |

```ts
const representative = await client.representatives.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  first_name: 'Ron',
  last_name: 'Swanson',
  dob: '1980-01-01',
  ssn_last4: '1234',
  email: 'ron.swanson@pawnee.com',
  mobile_number: '+12128675309',
  relationship: {
    primary: false,
    control: false,
    owner: false,
  },
});
```

### Get a representative

Returns the representative with the specified ID.

| Direction | Type |
| --- | --- |
| Request | [`RepresentativeRetrieveParams`](./src/resources/representatives.ts) |
| Response | [`RepresentativeResponse`](./src/resources/representatives.ts) |

```ts
const representative = await client.representatives.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Get an unmasked representative

Returns the representative with the specified ID without masking sensitive fields. This endpoint requires an administrator role.

| Direction | Type |
| --- | --- |
| Request | [`RepresentativeListUnmaskedParams`](./src/resources/representatives.ts) |
| Response | [`UnmaskedRepresentativeResponse`](./src/resources/representatives.ts) |

```ts
const unmaskedRepresentative = await client.representatives.listUnmasked(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
);
```

## `Bridge`

Bridge connects customer bank accounts and creates paykeys from supported provider tokens or bank account details.

### Create a paykey from bank account details

Creates a paykey from a routing number, account number, and account type.

| Direction | Type |
| --- | --- |
| Request | [`BridgeCreateBankAccountPaykeyParams`](./src/resources/bridge.ts) |
| Response | [`PaykeyResponse`](./src/resources/bridge.ts) |

```ts
const paykey = await client.bridge.createBankAccountPaykey({
  customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  routing_number: 'xxxxxxxxx',
  account_number: '',
  account_type: 'checking',
});
```

### Create a paykey from a Plaid token

Creates a paykey from a Plaid processor token.

| Direction | Type |
| --- | --- |
| Request | [`BridgeCreatePlaidPaykeyParams`](./src/resources/bridge.ts) |
| Response | [`PaykeyResponse`](./src/resources/bridge.ts) |

```ts
const paykey = await client.bridge.createPlaidPaykey({
  customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  plaid_token: '',
});
```

### Create a Bridge widget session token

Creates a session token for the Bridge widget.

| Direction | Type |
| --- | --- |
| Request | [`BridgeCreateTokenParams`](./src/resources/bridge.ts) |
| Response | [`BridgeTokenResponse`](./src/resources/bridge.ts) |

```ts
const bridgeToken = await client.bridge.createToken({
  customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
});
```

### Create a paykey from a Quiltt token

Creates a paykey from a Quiltt processor token.

| Direction | Type |
| --- | --- |
| Request | [`BridgeCreateQuilttPaykeyParams`](./src/resources/bridge.ts) |
| Response | [`RevealedPaykeyResponse`](./src/resources/bridge.ts) |

```ts
const revealedPaykey = await client.bridge.createQuilttPaykey({
  customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  quiltt_token: '',
});
```

## `Customers`

Customers are individuals or businesses that send or receive payments through your integration.

### Get a customer

Returns a customer by `id`.

| Direction | Type |
| --- | --- |
| Request | [`CustomerRetrieveParams`](./src/resources/customers/customers.ts) |
| Response | [`CustomerResponse`](./src/resources/customers/customers.ts) |

```ts
const customer = await client.customers.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update a customer

Updates an existing customer's profile, status, and metadata.

| Direction | Type |
| --- | --- |
| Request | [`CustomerUpdateParams`](./src/resources/customers/customers.ts) |
| Response | [`CustomerResponse`](./src/resources/customers/customers.ts) |

```ts
const customer = await client.customers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  name: '',
  email: 'user@example.com',
  phone: '',
  device: {
    ip_address: '192.168.1.1',
  },
  status: 'verified',
});
```

### Delete a customer

Permanently deletes a customer record. The deletion cannot be undone. Use this endpoint only to meet regulatory or privacy requirements.

| Direction | Type |
| --- | --- |
| Request | [`CustomerDeleteParams`](./src/resources/customers/customers.ts) |
| Response | [`CustomerResponse`](./src/resources/customers/customers.ts) |

```ts
const customer = await client.customers.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### List customers

Returns a paginated list of customers for the account. Optional query parameters filter, search, and sort the results.

| Direction | Type |
| --- | --- |
| Request | [`CustomerListParams`](./src/resources/customers/customers.ts) |
| Response | [`CustomerSummaryList`](./src/resources/customers/customers.ts) |

```ts
const customerSummaryList = await client.customers.list({
  page_number: 1,
  page_size: 100,
  sort_order: 'asc',
});
```

### Create a customer

Creates a customer and starts identity, fraud, and risk assessments.

| Direction | Type |
| --- | --- |
| Request | [`CustomerCreateParams`](./src/resources/customers/customers.ts) |
| Response | [`CustomerResponse`](./src/resources/customers/customers.ts) |

```ts
const customer = await client.customers.create({
  name: 'Ron Swanson',
  type: 'individual',
  email: 'ron.swanson@pawnee.com',
  address: { address1: '123 Main St', city: 'Anytown', state: 'CA', zip: '94105' },
  phone: '+12128675309',
  external_id: 'customer_123',
  device: { ip_address: '192.168.1.1' },
  metadata: {},
});
```

### Get an unmasked customer

Returns unmasked details for a customer, including personally identifiable information. Straddle must enable this endpoint for your account. Use this endpoint only when unmasked data is necessary.

| Direction | Type |
| --- | --- |
| Request | [`CustomerListUnmaskedParams`](./src/resources/customers/customers.ts) |
| Response | [`UnmaskedCustomerResponse`](./src/resources/customers/customers.ts) |

```ts
const unmaskedCustomer = await client.customers.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Refresh a customer review

Starts a new identity review for a customer. The review runs asynchronously. Webhooks and the customer review endpoint return updated results.

| Direction | Type |
| --- | --- |
| Request | [`CustomerRefreshReviewParams`](./src/resources/customers/customers.ts) |
| Response | [`CustomerResponse`](./src/resources/customers/customers.ts) |

```ts
const customer = await client.customers.refreshReview('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### `Customers Review`

Customers are individuals or businesses that send or receive payments through your integration.

#### Get a customer review

Returns the results of a customer's identity and fraud review. The response includes decisions, risk and correlation scores, reason codes, watchlist matches, and network alerts.

| Direction | Type |
| --- | --- |
| Request | [`ReviewListParams`](./src/resources/customers/review.ts) |
| Response | [`CustomerReviewResponse`](./src/resources/customers/review.ts) |

```ts
const customerReview = await client.customers.review.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

#### Set a customer verification decision

Updates the verification decision for a customer. The customer's current `status` must be `review`.

| Direction | Type |
| --- | --- |
| Request | [`ReviewSetVerificationDecisionParams`](./src/resources/customers/review.ts) |

```ts
const customer = await client.customers.review.setVerificationDecision(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    status: 'verified',
  },
);
```

## `Paykeys`

A paykey links a verified customer to a bank account without exposing bank account details. Use a paykey to create charges and payouts.

### Get a paykey

Returns a paykey by `id`, including the masked paykey value and bank account details.

| Direction | Type |
| --- | --- |
| Request | [`PaykeyRetrieveParams`](./src/resources/paykeys/paykeys.ts) |

```ts
const paykey = await client.paykeys.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Get an unmasked paykey

Returns a paykey by `id`, including the full paykey value and unmasked bank account details. Straddle must enable this endpoint for your account. Use this endpoint only when unmasked data is necessary.

| Direction | Type |
| --- | --- |
| Request | [`PaykeyListUnmaskedParams`](./src/resources/paykeys/paykeys.ts) |
| Response | [`UnmaskedPaykeyResponse`](./src/resources/paykeys/paykeys.ts) |

```ts
const unmaskedPaykey = await client.paykeys.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### List paykeys

Returns a paginated list of paykeys for the account. Optional query parameters filter, search, and sort the results.

| Direction | Type |
| --- | --- |
| Request | [`PaykeyListParams`](./src/resources/paykeys/paykeys.ts) |
| Response | [`PaykeySummaryList`](./src/resources/paykeys/paykeys.ts) |

```ts
const paykeySummaryList = await client.paykeys.list({
  page_number: 1,
  page_size: 100,
  sort_order: 'asc',
});
```

### Reveal a paykey token

Returns a paykey by `id`, including the full paykey value and masked bank account details.

| Direction | Type |
| --- | --- |
| Request | [`PaykeyRevealParams`](./src/resources/paykeys/paykeys.ts) |

```ts
const revealedPaykey = await client.paykeys.reveal('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Cancel a paykey

Cancels a paykey so it cannot be used for new payments.

| Direction | Type |
| --- | --- |
| Request | [`PaykeyCancelParams`](./src/resources/paykeys/paykeys.ts) |

```ts
const paykey = await client.paykeys.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Refresh a paykey review

Starts a new verification review for a paykey. The review runs asynchronously. Webhooks and the paykey review endpoint return updated results.

| Direction | Type |
| --- | --- |
| Request | [`PaykeyRefreshReviewParams`](./src/resources/paykeys/paykeys.ts) |

```ts
const paykey = await client.paykeys.refreshReview('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Refresh a paykey balance

Starts an asynchronous balance refresh for a paykey. The response returns the paykey before the refresh finishes.

| Direction | Type |
| --- | --- |
| Request | [`PaykeyRefreshBalanceParams`](./src/resources/paykeys/paykeys.ts) |

```ts
const paykey = await client.paykeys.refreshBalance('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Unblock a paykey

Unblocks a paykey that was blocked by an `R29` return. The paykey must not have been unblocked before.

| Direction | Type |
| --- | --- |
| Request | [`PaykeyUnblockParams`](./src/resources/paykeys/paykeys.ts) |

```ts
const paykey = await client.paykeys.unblock('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### `Paykeys Review`

A paykey links a verified customer to a bank account without exposing bank account details. Use a paykey to create charges and payouts.

#### Set a paykey verification decision

Updates the verification decision for a paykey. The paykey's current `status` must be `review`.

| Direction | Type |
| --- | --- |
| Request | [`ReviewSetVerificationDecisionParams`](./src/resources/paykeys/review.ts) |

```ts
const paykey = await client.paykeys.review.setVerificationDecision('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  status: 'active',
});
```

#### Get a paykey review

Returns a paykey verification review, including the decision, score breakdowns, and result codes.

| Direction | Type |
| --- | --- |
| Request | [`ReviewListParams`](./src/resources/paykeys/review.ts) |
| Response | [`PaykeyReviewResponse`](./src/resources/paykeys/review.ts) |

```ts
const paykeyReview = await client.paykeys.review.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

## `Charges`

Charges debit a customer's bank account through a paykey.

### Get a charge

Returns a charge by its unique identifier.

| Direction | Type |
| --- | --- |
| Request | [`ChargeRetrieveParams`](./src/resources/charges.ts) |
| Response | [`ChargeResponse`](./src/resources/charges.ts) |

```ts
const charge = await client.charges.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update a charge

Updates the description, amount, `payment_date`, or metadata. The charge must have a status of `created` or `on_hold`.

| Direction | Type |
| --- | --- |
| Request | [`ChargeUpdateParams`](./src/resources/charges.ts) |
| Response | [`ChargeResponse`](./src/resources/charges.ts) |

```ts
const charge = await client.charges.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  description: 'Monthly subscription fee',
  amount: 10000,
  payment_date: '2024-01-01',
});
```

### Create a charge

Creates a charge against a customer's paykey. Straddle submits the charge for processing on `payment_date` unless the charge is on hold.

| Direction | Type |
| --- | --- |
| Request | [`ChargeCreateParams`](./src/resources/charges.ts) |
| Response | [`ChargeResponse`](./src/resources/charges.ts) |

```ts
const charge = await client.charges.create({
  paykey: '',
  description: 'Monthly subscription fee',
  amount: 10000,
  currency: 'USD',
  payment_date: '2024-01-01',
  consent_type: 'internet',
  device: {
    ip_address: '192.168.1.1',
  },
  external_id: '',
  config: {
    balance_check: 'enabled',
  },
});
```

### Hold a charge

Places a charge on hold to prevent submission for processing. The charge must have a status of `created` or `scheduled`.

| Direction | Type |
| --- | --- |
| Request | [`ChargeHoldParams`](./src/resources/charges.ts) |
| Response | [`ChargeResponse`](./src/resources/charges.ts) |

```ts
const charge = await client.charges.hold('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Release a charge

Releases a charge from `on_hold` and returns it to `created` for submission on `payment_date`.

| Direction | Type |
| --- | --- |
| Request | [`ChargeReleaseParams`](./src/resources/charges.ts) |
| Response | [`ChargeResponse`](./src/resources/charges.ts) |

```ts
const charge = await client.charges.release('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Cancel a charge

Cancels a charge. The charge must have a status of `created`, `scheduled`, or `on_hold`.

| Direction | Type |
| --- | --- |
| Request | [`ChargeCancelParams`](./src/resources/charges.ts) |
| Response | [`ChargeResponse`](./src/resources/charges.ts) |

```ts
const charge = await client.charges.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Get an unmasked charge

Return a charge with its sensitive fields unmasked.

| Direction | Type |
| --- | --- |
| Request | [`ChargeListUnmaskedParams`](./src/resources/charges.ts) |
| Response | [`UnmaskedChargeResponse`](./src/resources/charges.ts) |

```ts
const unmaskedCharge = await client.charges.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Resubmit a charge

Creates a new charge from a failed, reversed, or cancelled charge. The request can override `description`, `external_id`, and `payment_date`. Other payment details come from the original charge.

| Direction | Type |
| --- | --- |
| Request | [`ChargeResubmitParams`](./src/resources/charges.ts) |
| Response | [`ChargeResponse`](./src/resources/charges.ts) |

```ts
const charge = await client.charges.resubmit('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Refund a paid charge

Creates a payout to return funds from a paid charge to the customer's bank account. The payout is linked to the charge through `related_payments`. A charge can be refunded once, either fully or partially.

| Direction | Type |
| --- | --- |
| Request | [`ChargeRefundParams`](./src/resources/charges.ts) |
| Response | [`PayoutResponse`](./src/resources/charges.ts) |

```ts
const payout = await client.charges.refund('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  amount: 5000,
});
```

### Upload a proof-of-authorization document for a charge

Uploads a proof-of-authorization document for a charge. A later upload adds another document and does not replace an existing one.

| Direction | Type |
| --- | --- |
| Request | [`ChargeUploadAuthorizationProofParams`](./src/resources/charges.ts) |
| Response | [`ChargeResponse`](./src/resources/charges.ts) |

```ts
const charge = await client.charges.uploadAuthorizationProof('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  File: '',
});
```

## `FundingEvents`

Funding events group charge and payout activity into transfers between Straddle and your linked bank account.

### List funding events

Returns a paginated list of funding events that match the specified filters.

| Direction | Type |
| --- | --- |
| Request | [`FundingEventListParams`](./src/resources/funding-events.ts) |
| Response | [`FundingEventSummaryList`](./src/resources/funding-events.ts) |

```ts
const fundingEventSummaryList = await client.fundingEvents.list({
  page_number: 1,
  page_size: 100,
  sort_order: 'asc',
});
```

### Get a funding event

Returns a funding event by its unique identifier, including its current status, status history, and linked bank account details when available.

| Direction | Type |
| --- | --- |
| Request | [`FundingEventRetrieveParams`](./src/resources/funding-events.ts) |
| Response | [`FundingEventResponse`](./src/resources/funding-events.ts) |

```ts
const fundingEvent = await client.fundingEvents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Simulate a funding event

Creates a funding event for unfunded charge or payout activity in the sandbox and returns its ID. This endpoint is unavailable in production.

| Direction | Type |
| --- | --- |
| Request | [`FundingEventSimulateParams`](./src/resources/funding-events.ts) |
| Response | [`FundingEventSimulation`](./src/resources/funding-events.ts) |

```ts
const fundingEventSimulation = await client.fundingEvents.simulate({
  funding_event_job_type: 'charges',
});
```

### List funding event payments

Returns a paginated list of payments included in the funding event.

| Direction | Type |
| --- | --- |
| Request | [`FundingEventListPaymentsParams`](./src/resources/funding-events.ts) |
| Response | [`FundingEventPaymentList`](./src/resources/funding-events.ts) |

```ts
const fundingEventPaymentList = await client.fundingEvents.listPayments(
  '7c9e6679-7425-40de-944b-e07fc1f90ae7',
  {
    default_sort_order: 'asc',
    sort_order: 'asc',
  },
);
```

## `Payments`

Payments provide a combined view of charges and payouts.

### List payments

Returns a paged list of charges and payouts that match the filters.

| Direction | Type |
| --- | --- |
| Request | [`PaymentListParams`](./src/resources/payments.ts) |
| Response | [`PaymentSummaryList`](./src/resources/payments.ts) |

```ts
const paymentSummaryList = await client.payments.list({
  page_number: 1,
  page_size: 100,
  sort_by: 'id',
  sort_order: 'asc',
  default_sort: 'id',
  default_sort_order: 'asc',
});
```

## `Payouts`

Payouts send money to a customer's bank account through a paykey.

### Get a payout

Returns a payout by its unique identifier.

| Direction | Type |
| --- | --- |
| Request | [`PayoutRetrieveParams`](./src/resources/payouts.ts) |

```ts
const payout = await client.payouts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Update a payout

Updates the description, amount, `payment_date`, or metadata. The payout must have a status of `created` or `on_hold`.

| Direction | Type |
| --- | --- |
| Request | [`PayoutUpdateParams`](./src/resources/payouts.ts) |

```ts
const payout = await client.payouts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  description: '',
  amount: 10000,
  payment_date: '2024-01-01',
});
```

### Create a payout

Creates a payout to a customer's bank account. Straddle submits the payout for processing on `payment_date` unless the payout is on hold.

| Direction | Type |
| --- | --- |
| Request | [`PayoutCreateParams`](./src/resources/payouts.ts) |

```ts
const payout = await client.payouts.create({
  paykey: '',
  description: 'Vendor invoice payment',
  amount: 10000,
  currency: 'USD',
  payment_date: '2024-01-01',
  device: {
    ip_address: '192.168.1.1',
  },
  external_id: '',
});
```

### Hold a payout

Places a payout on hold to prevent submission for processing. The payout must have a status of `created` or `scheduled`.

| Direction | Type |
| --- | --- |
| Request | [`PayoutHoldParams`](./src/resources/payouts.ts) |

```ts
const payout = await client.payouts.hold('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  reason: '',
});
```

### Release a payout

Releases a payout from `on_hold` and returns it to `created` for submission on `payment_date`.

| Direction | Type |
| --- | --- |
| Request | [`PayoutReleaseParams`](./src/resources/payouts.ts) |

```ts
const payout = await client.payouts.release('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  reason: '',
});
```

### Cancel a payout

Cancels a payout. The payout must have a status of `created`, `scheduled`, or `on_hold`.

| Direction | Type |
| --- | --- |
| Request | [`PayoutCancelParams`](./src/resources/payouts.ts) |

```ts
const payout = await client.payouts.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  reason: '',
});
```

### Get an unmasked payout

Return a payout with its sensitive fields unmasked.

| Direction | Type |
| --- | --- |
| Request | [`PayoutListUnmaskedParams`](./src/resources/payouts.ts) |
| Response | [`UnmaskedPayoutResponse`](./src/resources/payouts.ts) |

```ts
const unmaskedPayout = await client.payouts.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Resubmit a payout

Creates a new payout from a failed, reversed, or cancelled payout. The request can override `description`, `external_id`, and `payment_date`. Other payment details come from the original payout.

| Direction | Type |
| --- | --- |
| Request | [`PayoutResubmitParams`](./src/resources/payouts.ts) |

```ts
const payout = await client.payouts.resubmit('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```

### Upload a proof-of-authorization document for a payout

Uploads a proof-of-authorization document for a payout. A later upload adds another document and does not replace an existing one.

| Direction | Type |
| --- | --- |
| Request | [`PayoutUploadAuthorizationProofParams`](./src/resources/payouts.ts) |

```ts
const payout = await client.payouts.uploadAuthorizationProof('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
  File: '',
});
```

## `AccountSettings`

Account settings define payment limits, capabilities, statement details, and policy controls for an account.

### Get account settings

Returns all effective settings for the account, including values inherited from its organization, platform, and system defaults.

| Direction | Type |
| --- | --- |
| Request | [`AccountSettingRetrieveParams`](./src/resources/account-settings.ts) |
| Response | [`AccountSettingsResponse`](./src/resources/account-settings.ts) |

```ts
const accountSettings = await client.accountSettings.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
```
