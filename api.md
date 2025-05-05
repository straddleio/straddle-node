# Shared

Types:

- <code><a href="./src/resources/shared.ts">CustomerDetailsV1</a></code>
- <code><a href="./src/resources/shared.ts">DeviceInfoV1</a></code>
- <code><a href="./src/resources/shared.ts">PagedResponseMetadata</a></code>
- <code><a href="./src/resources/shared.ts">PaykeyDetailsV1</a></code>
- <code><a href="./src/resources/shared.ts">ResponseMetadata</a></code>
- <code><a href="./src/resources/shared.ts">StatusDetailsV1</a></code>

# Embed

## Accounts

Types:

- <code><a href="./src/resources/embed/accounts/accounts.ts">AccountPagedV1</a></code>
- <code><a href="./src/resources/embed/accounts/accounts.ts">AccountV1</a></code>
- <code><a href="./src/resources/embed/accounts/accounts.ts">AddressV1</a></code>
- <code><a href="./src/resources/embed/accounts/accounts.ts">BusinessProfileV1</a></code>
- <code><a href="./src/resources/embed/accounts/accounts.ts">CapabilityV1</a></code>
- <code><a href="./src/resources/embed/accounts/accounts.ts">IndustryV1</a></code>
- <code><a href="./src/resources/embed/accounts/accounts.ts">SupportChannelsV1</a></code>
- <code><a href="./src/resources/embed/accounts/accounts.ts">TermsOfServiceV1</a></code>

Methods:

- <code title="post /v1/accounts">client.embed.accounts.<a href="./src/resources/embed/accounts/accounts.ts">create</a>({ ...params }) -> AccountV1</code>
- <code title="put /v1/accounts/{account_id}">client.embed.accounts.<a href="./src/resources/embed/accounts/accounts.ts">update</a>(accountId, { ...params }) -> AccountV1</code>
- <code title="get /v1/accounts">client.embed.accounts.<a href="./src/resources/embed/accounts/accounts.ts">list</a>({ ...params }) -> AccountPagedV1DataPageNumberSchema</code>
- <code title="get /v1/accounts/{account_id}">client.embed.accounts.<a href="./src/resources/embed/accounts/accounts.ts">get</a>(accountId, { ...params }) -> AccountV1</code>
- <code title="post /v1/accounts/{account_id}/onboard">client.embed.accounts.<a href="./src/resources/embed/accounts/accounts.ts">onboard</a>(accountId, { ...params }) -> AccountV1</code>
- <code title="post /v1/accounts/{account_id}/simulate">client.embed.accounts.<a href="./src/resources/embed/accounts/accounts.ts">simulate</a>(accountId, { ...params }) -> AccountV1</code>

### CapabilityRequests

Types:

- <code><a href="./src/resources/embed/accounts/capability-requests.ts">CapabilityRequestPagedV1</a></code>

Methods:

- <code title="post /v1/accounts/{account_id}/capability_requests">client.embed.accounts.capabilityRequests.<a href="./src/resources/embed/accounts/capability-requests.ts">create</a>(accountId, { ...params }) -> CapabilityRequestPagedV1</code>
- <code title="get /v1/accounts/{account_id}/capability_requests">client.embed.accounts.capabilityRequests.<a href="./src/resources/embed/accounts/capability-requests.ts">list</a>(accountId, { ...params }) -> CapabilityRequestPagedV1DataPageNumberSchema</code>

## LinkedBankAccounts

Types:

- <code><a href="./src/resources/embed/linked-bank-accounts.ts">LinkedBankAccountPagedV1</a></code>
- <code><a href="./src/resources/embed/linked-bank-accounts.ts">LinkedBankAccountUnmaskV1</a></code>
- <code><a href="./src/resources/embed/linked-bank-accounts.ts">LinkedBankAccountV1</a></code>

Methods:

- <code title="post /v1/linked_bank_accounts">client.embed.linkedBankAccounts.<a href="./src/resources/embed/linked-bank-accounts.ts">create</a>({ ...params }) -> LinkedBankAccountV1</code>
- <code title="put /v1/linked_bank_accounts/{linked_bank_account_id}">client.embed.linkedBankAccounts.<a href="./src/resources/embed/linked-bank-accounts.ts">update</a>(linkedBankAccountId, { ...params }) -> LinkedBankAccountV1</code>
- <code title="get /v1/linked_bank_accounts">client.embed.linkedBankAccounts.<a href="./src/resources/embed/linked-bank-accounts.ts">list</a>({ ...params }) -> LinkedBankAccountPagedV1DataPageNumberSchema</code>
- <code title="get /v1/linked_bank_accounts/{linked_bank_account_id}">client.embed.linkedBankAccounts.<a href="./src/resources/embed/linked-bank-accounts.ts">get</a>(linkedBankAccountId, { ...params }) -> LinkedBankAccountV1</code>
- <code title="get /v1/linked_bank_accounts/{linked_bank_account_id}/unmask">client.embed.linkedBankAccounts.<a href="./src/resources/embed/linked-bank-accounts.ts">unmask</a>(linkedBankAccountId, { ...params }) -> LinkedBankAccountUnmaskV1</code>

## Organizations

Types:

- <code><a href="./src/resources/embed/organizations.ts">OrganizationPagedV1</a></code>
- <code><a href="./src/resources/embed/organizations.ts">OrganizationV1</a></code>

Methods:

- <code title="post /v1/organizations">client.embed.organizations.<a href="./src/resources/embed/organizations.ts">create</a>({ ...params }) -> OrganizationV1</code>
- <code title="get /v1/organizations">client.embed.organizations.<a href="./src/resources/embed/organizations.ts">list</a>({ ...params }) -> OrganizationPagedV1DataPageNumberSchema</code>
- <code title="get /v1/organizations/{organization_id}">client.embed.organizations.<a href="./src/resources/embed/organizations.ts">get</a>(organizationId, { ...params }) -> OrganizationV1</code>

## Representatives

Types:

- <code><a href="./src/resources/embed/representatives.ts">Representative</a></code>
- <code><a href="./src/resources/embed/representatives.ts">RepresentativePaged</a></code>

Methods:

- <code title="post /v1/representatives">client.embed.representatives.<a href="./src/resources/embed/representatives.ts">create</a>({ ...params }) -> Representative</code>
- <code title="put /v1/representatives/{representative_id}">client.embed.representatives.<a href="./src/resources/embed/representatives.ts">update</a>(representativeId, { ...params }) -> Representative</code>
- <code title="get /v1/representatives">client.embed.representatives.<a href="./src/resources/embed/representatives.ts">list</a>({ ...params }) -> RepresentativePagedDataPageNumberSchema</code>
- <code title="get /v1/representatives/{representative_id}">client.embed.representatives.<a href="./src/resources/embed/representatives.ts">get</a>(representativeId, { ...params }) -> Representative</code>
- <code title="get /v1/representatives/{representative_id}/unmask">client.embed.representatives.<a href="./src/resources/embed/representatives.ts">unmask</a>(representativeId, { ...params }) -> Representative</code>

# Bridge

Types:

- <code><a href="./src/resources/bridge/bridge.ts">BridgeTokenV1</a></code>

Methods:

- <code title="post /v1/bridge/initialize">client.bridge.<a href="./src/resources/bridge/bridge.ts">initialize</a>({ ...params }) -> BridgeTokenV1</code>

## Link

Types:

- <code><a href="./src/resources/bridge/link.ts">LinkCreateTanResponse</a></code>

Methods:

- <code title="post /v1/bridge/bank_account">client.bridge.link.<a href="./src/resources/bridge/link.ts">bankAccount</a>({ ...params }) -> PaykeyV1</code>
- <code title="post /v1/bridge/tan">client.bridge.link.<a href="./src/resources/bridge/link.ts">createTan</a>({ ...params }) -> LinkCreateTanResponse</code>
- <code title="post /v1/bridge/plaid">client.bridge.link.<a href="./src/resources/bridge/link.ts">plaid</a>({ ...params }) -> PaykeyV1</code>

# Customers

Types:

- <code><a href="./src/resources/customers/customers.ts">CustomerAddressV1</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerSummaryPagedV1</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerUnmaskedV1</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerV1</a></code>
- <code><a href="./src/resources/customers/customers.ts">DeviceUnmaskedV1</a></code>

Methods:

- <code title="post /v1/customers">client.customers.<a href="./src/resources/customers/customers.ts">create</a>({ ...params }) -> CustomerV1</code>
- <code title="put /v1/customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">update</a>(id, { ...params }) -> CustomerV1</code>
- <code title="get /v1/customers">client.customers.<a href="./src/resources/customers/customers.ts">list</a>({ ...params }) -> CustomerSummaryPagedV1DataPageNumberSchema</code>
- <code title="delete /v1/customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">delete</a>(id, { ...params }) -> CustomerV1</code>
- <code title="get /v1/customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">get</a>(id, { ...params }) -> CustomerV1</code>
- <code title="put /v1/customers/{id}/refresh_review">client.customers.<a href="./src/resources/customers/customers.ts">refreshReview</a>(id, { ...params }) -> CustomerV1</code>
- <code title="get /v1/customers/{id}/unmasked">client.customers.<a href="./src/resources/customers/customers.ts">unmasked</a>(id, { ...params }) -> CustomerUnmaskedV1</code>

## Review

Types:

- <code><a href="./src/resources/customers/review.ts">CustomerReviewV1</a></code>
- <code><a href="./src/resources/customers/review.ts">IdentityVerificationBreakdownV1</a></code>

Methods:

- <code title="patch /v1/customers/{id}/review">client.customers.review.<a href="./src/resources/customers/review.ts">decision</a>(id, { ...params }) -> CustomerV1</code>
- <code title="get /v1/customers/{id}/review">client.customers.review.<a href="./src/resources/customers/review.ts">get</a>(id, { ...params }) -> CustomerReviewV1</code>

# Paykeys

Types:

- <code><a href="./src/resources/paykeys.ts">PaykeySummaryPagedV1</a></code>
- <code><a href="./src/resources/paykeys.ts">PaykeyUnmaskedV1</a></code>
- <code><a href="./src/resources/paykeys.ts">PaykeyV1</a></code>
- <code><a href="./src/resources/paykeys.ts">PaykeyRevealResponse</a></code>

Methods:

- <code title="get /v1/paykeys">client.paykeys.<a href="./src/resources/paykeys.ts">list</a>({ ...params }) -> PaykeySummaryPagedV1DataPageNumberSchema</code>
- <code title="put /v1/paykeys/{id}/cancel">client.paykeys.<a href="./src/resources/paykeys.ts">cancel</a>(id, { ...params }) -> PaykeyV1</code>
- <code title="get /v1/paykeys/{id}">client.paykeys.<a href="./src/resources/paykeys.ts">get</a>(id, { ...params }) -> PaykeyV1</code>
- <code title="get /v1/paykeys/{id}/reveal">client.paykeys.<a href="./src/resources/paykeys.ts">reveal</a>(id, { ...params }) -> PaykeyRevealResponse</code>
- <code title="get /v1/paykeys/{id}/unmasked">client.paykeys.<a href="./src/resources/paykeys.ts">unmasked</a>(id, { ...params }) -> PaykeyUnmaskedV1</code>

# Charges

Types:

- <code><a href="./src/resources/charges.ts">ChargeV1</a></code>
- <code><a href="./src/resources/charges.ts">ChargeUnmaskResponse</a></code>

Methods:

- <code title="post /v1/charges">client.charges.<a href="./src/resources/charges.ts">create</a>({ ...params }) -> ChargeV1</code>
- <code title="put /v1/charges/{id}">client.charges.<a href="./src/resources/charges.ts">update</a>(id, { ...params }) -> ChargeV1</code>
- <code title="put /v1/charges/{id}/cancel">client.charges.<a href="./src/resources/charges.ts">cancel</a>(id, { ...params }) -> ChargeV1</code>
- <code title="get /v1/charges/{id}">client.charges.<a href="./src/resources/charges.ts">get</a>(id, { ...params }) -> ChargeV1</code>
- <code title="put /v1/charges/{id}/hold">client.charges.<a href="./src/resources/charges.ts">hold</a>(id, { ...params }) -> ChargeV1</code>
- <code title="put /v1/charges/{id}/release">client.charges.<a href="./src/resources/charges.ts">release</a>(id, { ...params }) -> ChargeV1</code>
- <code title="get /v1/charges/{id}/unmask">client.charges.<a href="./src/resources/charges.ts">unmask</a>(id, { ...params }) -> ChargeUnmaskResponse</code>

# FundingEvents

Types:

- <code><a href="./src/resources/funding-events.ts">FundingEventSummaryItemV1</a></code>
- <code><a href="./src/resources/funding-events.ts">FundingEventSummaryPagedV1</a></code>

Methods:

- <code title="get /v1/funding_events">client.fundingEvents.<a href="./src/resources/funding-events.ts">list</a>({ ...params }) -> FundingEventSummaryPagedV1DataPageNumberSchema</code>
- <code title="get /v1/funding_events/{id}">client.fundingEvents.<a href="./src/resources/funding-events.ts">get</a>(id, { ...params }) -> FundingEventSummaryItemV1</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentSummaryPagedV1</a></code>

Methods:

- <code title="get /v1/payments">client.payments.<a href="./src/resources/payments.ts">list</a>({ ...params }) -> PaymentSummaryPagedV1DataPageNumberSchema</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">PayoutV1</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutUnmaskResponse</a></code>

Methods:

- <code title="post /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> PayoutV1</code>
- <code title="put /v1/payouts/{id}">client.payouts.<a href="./src/resources/payouts.ts">update</a>(id, { ...params }) -> PayoutV1</code>
- <code title="put /v1/payouts/{id}/cancel">client.payouts.<a href="./src/resources/payouts.ts">cancel</a>(id, { ...params }) -> PayoutV1</code>
- <code title="get /v1/payouts/{id}">client.payouts.<a href="./src/resources/payouts.ts">get</a>(id, { ...params }) -> PayoutV1</code>
- <code title="put /v1/payouts/{id}/hold">client.payouts.<a href="./src/resources/payouts.ts">hold</a>(id, { ...params }) -> PayoutV1</code>
- <code title="put /v1/payouts/{id}/release">client.payouts.<a href="./src/resources/payouts.ts">release</a>(id, { ...params }) -> PayoutV1</code>
- <code title="get /v1/payouts/{id}/unmask">client.payouts.<a href="./src/resources/payouts.ts">unmask</a>(id, { ...params }) -> PayoutUnmaskResponse</code>

# Reports

Types:

- <code><a href="./src/resources/reports.ts">ReportCreateTotalCustomersByStatusResponse</a></code>

Methods:

- <code title="post /v1/reports/total_customers_by_status">client.reports.<a href="./src/resources/reports.ts">createTotalCustomersByStatus</a>({ ...params }) -> ReportCreateTotalCustomersByStatusResponse</code>
