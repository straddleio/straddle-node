# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountPaged</a></code>

Methods:

- <code title="post /v1/accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="put /v1/accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">update</a>(accountId, { ...params }) -> Account</code>
- <code title="get /v1/accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>({ ...params }) -> AccountPagedDataPageNumberSchema</code>
- <code title="get /v1/accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">get</a>(accountId, { ...params }) -> Account</code>
- <code title="post /v1/accounts/{account_id}/onboard">client.accounts.<a href="./src/resources/accounts/accounts.ts">onboard</a>(accountId, { ...params }) -> Account</code>
- <code title="post /v1/accounts/{account_id}/simulate">client.accounts.<a href="./src/resources/accounts/accounts.ts">simulate</a>(accountId, { ...params }) -> Account</code>

## CapabilityRequests

Types:

- <code><a href="./src/resources/accounts/capability-requests.ts">CapabilityRequestPaged</a></code>

Methods:

- <code title="post /v1/accounts/{account_id}/capability_requests">client.accounts.capabilityRequests.<a href="./src/resources/accounts/capability-requests.ts">create</a>(accountId, { ...params }) -> CapabilityRequestPaged</code>
- <code title="get /v1/accounts/{account_id}/capability_requests">client.accounts.capabilityRequests.<a href="./src/resources/accounts/capability-requests.ts">list</a>(accountId, { ...params }) -> CapabilityRequestPagedDataPageNumberSchema</code>

# LinkedBankAccounts

Types:

- <code><a href="./src/resources/linked-bank-accounts.ts">LinkedBankAccount</a></code>
- <code><a href="./src/resources/linked-bank-accounts.ts">LinkedBankAccountPaged</a></code>
- <code><a href="./src/resources/linked-bank-accounts.ts">LinkedBankAccountUnmask</a></code>

Methods:

- <code title="post /v1/linked_bank_accounts">client.linkedBankAccounts.<a href="./src/resources/linked-bank-accounts.ts">create</a>({ ...params }) -> LinkedBankAccount</code>
- <code title="put /v1/linked_bank_accounts/{linked_bank_account_id}">client.linkedBankAccounts.<a href="./src/resources/linked-bank-accounts.ts">update</a>(linkedBankAccountId, { ...params }) -> LinkedBankAccount</code>
- <code title="get /v1/linked_bank_accounts">client.linkedBankAccounts.<a href="./src/resources/linked-bank-accounts.ts">list</a>({ ...params }) -> LinkedBankAccountPagedDataPageNumberSchema</code>
- <code title="get /v1/linked_bank_accounts/{linked_bank_account_id}">client.linkedBankAccounts.<a href="./src/resources/linked-bank-accounts.ts">get</a>(linkedBankAccountId, { ...params }) -> LinkedBankAccount</code>
- <code title="get /v1/linked_bank_accounts/{linked_bank_account_id}/unmask">client.linkedBankAccounts.<a href="./src/resources/linked-bank-accounts.ts">unmask</a>(linkedBankAccountId, { ...params }) -> LinkedBankAccountUnmask</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations.ts">OrganizationPaged</a></code>

Methods:

- <code title="post /v1/organizations">client.organizations.<a href="./src/resources/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="get /v1/organizations">client.organizations.<a href="./src/resources/organizations.ts">list</a>({ ...params }) -> OrganizationPagedDataPageNumberSchema</code>

# Representatives

Types:

- <code><a href="./src/resources/representatives.ts">Representative</a></code>
- <code><a href="./src/resources/representatives.ts">RepresentativePaged</a></code>

Methods:

- <code title="post /v1/representatives">client.representatives.<a href="./src/resources/representatives.ts">create</a>({ ...params }) -> Representative</code>
- <code title="put /v1/representatives/{representative_id}">client.representatives.<a href="./src/resources/representatives.ts">update</a>(representativeId, { ...params }) -> Representative</code>
- <code title="get /v1/representatives">client.representatives.<a href="./src/resources/representatives.ts">list</a>({ ...params }) -> RepresentativePagedDataPageNumberSchema</code>
- <code title="get /v1/representatives/{representative_id}">client.representatives.<a href="./src/resources/representatives.ts">get</a>(representativeId, { ...params }) -> Representative</code>

# Bridge

Types:

- <code><a href="./src/resources/bridge/bridge.ts">BridgeToken</a></code>

Methods:

- <code title="post /v1/bridge/initialize">client.bridge.<a href="./src/resources/bridge/bridge.ts">initialize</a>({ ...params }) -> BridgeToken</code>

## Link

Methods:

- <code title="post /v1/bridge/bank_account">client.bridge.link.<a href="./src/resources/bridge/link.ts">bankAccount</a>({ ...params }) -> Paykey</code>
- <code title="post /v1/bridge/plaid">client.bridge.link.<a href="./src/resources/bridge/link.ts">plaid</a>({ ...params }) -> Paykey</code>

# Customers

Types:

- <code><a href="./src/resources/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerSummaryPaged</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerUnmasked</a></code>

Methods:

- <code title="post /v1/customers">client.customers.<a href="./src/resources/customers/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="put /v1/customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">update</a>(id, { ...params }) -> Customer</code>
- <code title="get /v1/customers">client.customers.<a href="./src/resources/customers/customers.ts">list</a>({ ...params }) -> CustomerSummaryPagedDataPageNumberSchema</code>
- <code title="delete /v1/customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">delete</a>(id, { ...params }) -> Customer</code>
- <code title="get /v1/customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">get</a>(id, { ...params }) -> Customer</code>
- <code title="get /v1/customers/{id}/unmasked">client.customers.<a href="./src/resources/customers/customers.ts">unmasked</a>(id, { ...params }) -> CustomerUnmasked</code>

## Review

Types:

- <code><a href="./src/resources/customers/review.ts">CustomerReview</a></code>

Methods:

- <code title="patch /v1/customers/{id}/review">client.customers.review.<a href="./src/resources/customers/review.ts">decision</a>(id, { ...params }) -> Customer</code>
- <code title="get /v1/customers/{id}/review">client.customers.review.<a href="./src/resources/customers/review.ts">get</a>(id, { ...params }) -> CustomerReview</code>

# Paykeys

Types:

- <code><a href="./src/resources/paykeys.ts">Paykey</a></code>
- <code><a href="./src/resources/paykeys.ts">PaykeySummaryPaged</a></code>
- <code><a href="./src/resources/paykeys.ts">PaykeyUnmasked</a></code>

Methods:

- <code title="get /v1/paykeys">client.paykeys.<a href="./src/resources/paykeys.ts">list</a>({ ...params }) -> PaykeySummaryPagedDataPageNumberSchema</code>
- <code title="get /v1/paykeys/{id}">client.paykeys.<a href="./src/resources/paykeys.ts">get</a>(id, { ...params }) -> Paykey</code>
- <code title="get /v1/paykeys/{id}/unmasked">client.paykeys.<a href="./src/resources/paykeys.ts">unmasked</a>(id, { ...params }) -> PaykeyUnmasked</code>

# Charges

Types:

- <code><a href="./src/resources/charges.ts">Charge</a></code>

Methods:

- <code title="post /v1/charges">client.charges.<a href="./src/resources/charges.ts">create</a>({ ...params }) -> Charge</code>
- <code title="put /v1/charges/{id}">client.charges.<a href="./src/resources/charges.ts">update</a>(id, { ...params }) -> Charge</code>
- <code title="put /v1/charges/{id}/cancel">client.charges.<a href="./src/resources/charges.ts">cancel</a>(id, { ...params }) -> Charge</code>
- <code title="get /v1/charges/{id}">client.charges.<a href="./src/resources/charges.ts">get</a>(id, { ...params }) -> Charge</code>
- <code title="put /v1/charges/{id}/hold">client.charges.<a href="./src/resources/charges.ts">hold</a>(id, { ...params }) -> Charge</code>
- <code title="put /v1/charges/{id}/release">client.charges.<a href="./src/resources/charges.ts">release</a>(id, { ...params }) -> Charge</code>

# FundingEvents

Types:

- <code><a href="./src/resources/funding-events.ts">FundingEventSummaryItem</a></code>
- <code><a href="./src/resources/funding-events.ts">FundingEventSummaryPaged</a></code>

Methods:

- <code title="get /v1/funding_events">client.fundingEvents.<a href="./src/resources/funding-events.ts">list</a>({ ...params }) -> FundingEventSummaryPagedDataPageNumberSchema</code>
- <code title="get /v1/funding_events/{id}">client.fundingEvents.<a href="./src/resources/funding-events.ts">get</a>(id, { ...params }) -> FundingEventSummaryItem</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentSummaryPaged</a></code>

Methods:

- <code title="get /v1/payments">client.payments.<a href="./src/resources/payments.ts">list</a>({ ...params }) -> PaymentSummaryPagedDataPageNumberSchema</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">Payout</a></code>

Methods:

- <code title="post /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> Payout</code>
- <code title="put /v1/payouts/{id}">client.payouts.<a href="./src/resources/payouts.ts">update</a>(id, { ...params }) -> Payout</code>
- <code title="put /v1/payouts/{id}/cancel">client.payouts.<a href="./src/resources/payouts.ts">cancel</a>(id, { ...params }) -> Payout</code>
- <code title="get /v1/payouts/{id}">client.payouts.<a href="./src/resources/payouts.ts">get</a>(id, { ...params }) -> Payout</code>
- <code title="put /v1/payouts/{id}/hold">client.payouts.<a href="./src/resources/payouts.ts">hold</a>(id, { ...params }) -> Payout</code>
- <code title="put /v1/payouts/{id}/release">client.payouts.<a href="./src/resources/payouts.ts">release</a>(id, { ...params }) -> Payout</code>
