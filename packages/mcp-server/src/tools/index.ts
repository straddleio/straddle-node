// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_embed_accounts from './embed/accounts/create-embed-accounts';
import update_embed_accounts from './embed/accounts/update-embed-accounts';
import list_embed_accounts from './embed/accounts/list-embed-accounts';
import get_embed_accounts from './embed/accounts/get-embed-accounts';
import onboard_embed_accounts from './embed/accounts/onboard-embed-accounts';
import simulate_embed_accounts from './embed/accounts/simulate-embed-accounts';
import create_accounts_embed_capability_requests from './embed/accounts/capability-requests/create-accounts-embed-capability-requests';
import list_accounts_embed_capability_requests from './embed/accounts/capability-requests/list-accounts-embed-capability-requests';
import create_embed_linked_bank_accounts from './embed/linked-bank-accounts/create-embed-linked-bank-accounts';
import update_embed_linked_bank_accounts from './embed/linked-bank-accounts/update-embed-linked-bank-accounts';
import list_embed_linked_bank_accounts from './embed/linked-bank-accounts/list-embed-linked-bank-accounts';
import get_embed_linked_bank_accounts from './embed/linked-bank-accounts/get-embed-linked-bank-accounts';
import unmask_embed_linked_bank_accounts from './embed/linked-bank-accounts/unmask-embed-linked-bank-accounts';
import create_embed_organizations from './embed/organizations/create-embed-organizations';
import list_embed_organizations from './embed/organizations/list-embed-organizations';
import get_embed_organizations from './embed/organizations/get-embed-organizations';
import create_embed_representatives from './embed/representatives/create-embed-representatives';
import update_embed_representatives from './embed/representatives/update-embed-representatives';
import list_embed_representatives from './embed/representatives/list-embed-representatives';
import get_embed_representatives from './embed/representatives/get-embed-representatives';
import unmask_embed_representatives from './embed/representatives/unmask-embed-representatives';
import initialize_bridge from './bridge/initialize-bridge';
import bank_account_bridge_link from './bridge/link/bank-account-bridge-link';
import create_tan_bridge_link from './bridge/link/create-tan-bridge-link';
import plaid_bridge_link from './bridge/link/plaid-bridge-link';
import create_customers from './customers/create-customers';
import update_customers from './customers/update-customers';
import list_customers from './customers/list-customers';
import delete_customers from './customers/delete-customers';
import get_customers from './customers/get-customers';
import refresh_review_customers from './customers/refresh-review-customers';
import unmasked_customers from './customers/unmasked-customers';
import decision_customers_review from './customers/review/decision-customers-review';
import get_customers_review from './customers/review/get-customers-review';
import list_paykeys from './paykeys/list-paykeys';
import cancel_paykeys from './paykeys/cancel-paykeys';
import get_paykeys from './paykeys/get-paykeys';
import reveal_paykeys from './paykeys/reveal-paykeys';
import unmasked_paykeys from './paykeys/unmasked-paykeys';
import create_charges from './charges/create-charges';
import update_charges from './charges/update-charges';
import cancel_charges from './charges/cancel-charges';
import get_charges from './charges/get-charges';
import hold_charges from './charges/hold-charges';
import release_charges from './charges/release-charges';
import unmask_charges from './charges/unmask-charges';
import list_funding_events from './funding-events/list-funding-events';
import get_funding_events from './funding-events/get-funding-events';
import list_payments from './payments/list-payments';
import create_payouts from './payouts/create-payouts';
import update_payouts from './payouts/update-payouts';
import cancel_payouts from './payouts/cancel-payouts';
import get_payouts from './payouts/get-payouts';
import hold_payouts from './payouts/hold-payouts';
import release_payouts from './payouts/release-payouts';
import unmask_payouts from './payouts/unmask-payouts';
import create_total_customers_by_status_reports from './reports/create-total-customers-by-status-reports';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_embed_accounts);
addEndpoint(update_embed_accounts);
addEndpoint(list_embed_accounts);
addEndpoint(get_embed_accounts);
addEndpoint(onboard_embed_accounts);
addEndpoint(simulate_embed_accounts);
addEndpoint(create_accounts_embed_capability_requests);
addEndpoint(list_accounts_embed_capability_requests);
addEndpoint(create_embed_linked_bank_accounts);
addEndpoint(update_embed_linked_bank_accounts);
addEndpoint(list_embed_linked_bank_accounts);
addEndpoint(get_embed_linked_bank_accounts);
addEndpoint(unmask_embed_linked_bank_accounts);
addEndpoint(create_embed_organizations);
addEndpoint(list_embed_organizations);
addEndpoint(get_embed_organizations);
addEndpoint(create_embed_representatives);
addEndpoint(update_embed_representatives);
addEndpoint(list_embed_representatives);
addEndpoint(get_embed_representatives);
addEndpoint(unmask_embed_representatives);
addEndpoint(initialize_bridge);
addEndpoint(bank_account_bridge_link);
addEndpoint(create_tan_bridge_link);
addEndpoint(plaid_bridge_link);
addEndpoint(create_customers);
addEndpoint(update_customers);
addEndpoint(list_customers);
addEndpoint(delete_customers);
addEndpoint(get_customers);
addEndpoint(refresh_review_customers);
addEndpoint(unmasked_customers);
addEndpoint(decision_customers_review);
addEndpoint(get_customers_review);
addEndpoint(list_paykeys);
addEndpoint(cancel_paykeys);
addEndpoint(get_paykeys);
addEndpoint(reveal_paykeys);
addEndpoint(unmasked_paykeys);
addEndpoint(create_charges);
addEndpoint(update_charges);
addEndpoint(cancel_charges);
addEndpoint(get_charges);
addEndpoint(hold_charges);
addEndpoint(release_charges);
addEndpoint(unmask_charges);
addEndpoint(list_funding_events);
addEndpoint(get_funding_events);
addEndpoint(list_payments);
addEndpoint(create_payouts);
addEndpoint(update_payouts);
addEndpoint(cancel_payouts);
addEndpoint(get_payouts);
addEndpoint(hold_payouts);
addEndpoint(release_payouts);
addEndpoint(unmask_payouts);
addEndpoint(create_total_customers_by_status_reports);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
