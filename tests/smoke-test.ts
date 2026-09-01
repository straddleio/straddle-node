// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs';

// The package exports the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import StraddleAPI from '@straddlecom/straddle';

// One shared client runs every case.
const client = new StraddleAPI();

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the arguments the method
// requires, the second also fills every optional parameter and body property. `label` says which
// is which, and is absent when the operation has no optional argument and so has only one case.
// `run` performs the real SDK call; the other fields are metadata used for filtering and
// reporting. This list is generated, so it stays in sync with the SDK surface.
const cases: {
  operation: string;
  method: string;
  path: string;
  label?: string;
  run: () => Promise<unknown>;
}[] = [
  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/accounts/{account_id}',
    label: 'required params',
    run: async () => {
      const account = await client.accounts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/accounts/{account_id}',
    label: 'all params',
    run: async () => {
      const account = await client.accounts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/accounts/{account_id}',
    label: 'required params',
    run: async () => {
      const account = await client.accounts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        business_profile: {
          name: '',
          website: 'https://example.com',
        },
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/accounts/{account_id}',
    label: 'all params',
    run: async () => {
      const account = await client.accounts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        business_profile: {
          name: '',
          website: 'https://example.com',
          legal_name: '',
          description: '',
          use_case: '',
          tax_id: '',
          phone: '',
          address: {
            line1: '',
            city: '',
            state: '',
            postal_code: '',
          },
          industry: {},
          support_channels: {},
        },
        metadata: {},
        external_id: '',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/accounts',
    label: 'required params',
    run: async () => {
      const account = await client.accounts.create({
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        account_type: 'business',
        business_profile: {
          name: '',
          website: 'https://example.com',
        },
        access_level: 'standard',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/accounts',
    label: 'all params',
    run: async () => {
      const account = await client.accounts.create({
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        account_type: 'business',
        business_profile: {
          name: '',
          website: 'https://example.com',
          legal_name: '',
          description: '',
          use_case: '',
          tax_id: '',
          phone: '',
          address: {
            line1: '',
            city: '',
            state: '',
            postal_code: '',
          },
          industry: {},
          support_channels: {},
        },
        access_level: 'standard',
        metadata: {},
        external_id: '',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/accounts',
    label: 'required params',
    run: async () => {
      const accountList = await client.accounts.list({
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/accounts',
    label: 'all params',
    run: async () => {
      const accountList = await client.accounts.list({
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
        search_text: 'searchText',
        status: 'created',
        type: 'business',
        external_id: 'externalId',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'onboard',
    method: 'POST',
    path: '/v1/accounts/{account_id}/onboard',
    label: 'required params',
    run: async () => {
      const account = await client.accounts.onboard('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        terms_of_service: {
          accepted_date: '2024-01-01T00:00:00.000Z',
          agreement_url: '',
          agreement_type: 'embedded',
        },
      });
    },
  },

  {
    operation: 'onboard',
    method: 'POST',
    path: '/v1/accounts/{account_id}/onboard',
    label: 'all params',
    run: async () => {
      const account = await client.accounts.onboard('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        terms_of_service: {
          accepted_date: '2024-01-01T00:00:00.000Z',
          accepted_ip: '',
          accepted_user_agent: '',
          agreement_url: '',
          agreement_type: 'embedded',
        },
      });
    },
  },

  {
    operation: 'simulateOnboarding',
    method: 'POST',
    path: '/v1/accounts/{account_id}/simulate',
    label: 'required params',
    run: async () => {
      const account = await client.accounts.simulateOnboarding('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'simulateOnboarding',
    method: 'POST',
    path: '/v1/accounts/{account_id}/simulate',
    label: 'all params',
    run: async () => {
      const account = await client.accounts.simulateOnboarding('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        final_status: 'onboarding',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/accounts/{account_id}/capability_requests',
    label: 'required params',
    run: async () => {
      const capabilityRequestList = await client.capabilityRequests.create(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/accounts/{account_id}/capability_requests',
    label: 'all params',
    run: async () => {
      const capabilityRequestList = await client.capabilityRequests.create(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
          'Idempotency-Key': 'idempotencyKey',
          charges: {
            enable: false,
            max_amount: 0,
            daily_amount: 0,
            monthly_count: 0,
            monthly_amount: 0,
          },
          payouts: {
            enable: false,
            max_amount: 0,
            daily_amount: 0,
            monthly_count: 0,
            monthly_amount: 0,
          },
          internet: {
            enable: false,
          },
          individuals: {
            enable: false,
          },
          businesses: {
            enable: false,
          },
          signed_agreement: {
            enable: false,
          },
        },
      );
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/accounts/{account_id}/capability_requests',
    label: 'required params',
    run: async () => {
      const capabilityRequestList = await client.capabilityRequests.list(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          page_number: 1,
          page_size: 100,
          sort_by: 'id',
          sort_order: 'asc',
        },
      );
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/accounts/{account_id}/capability_requests',
    label: 'all params',
    run: async () => {
      const capabilityRequestList = await client.capabilityRequests.list(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          type: 'charges',
          category: 'payment_type',
          status: 'active',
          page_number: 1,
          page_size: 100,
          sort_by: 'id',
          sort_order: 'asc',
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
        },
      );
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/linked_bank_accounts',
    label: 'required params',
    run: async () => {
      const linkedBankAccount = await client.linkedBankAccounts.create({
        bank_account: {
          account_holder: '',
          routing_number: 'xxxxxxxxx',
          account_number: '',
        },
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/linked_bank_accounts',
    label: 'all params',
    run: async () => {
      const linkedBankAccount = await client.linkedBankAccounts.create({
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        account_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        bank_account: {
          account_holder: '',
          routing_number: 'xxxxxxxxx',
          account_number: '',
        },
        metadata: {},
        platform_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        purposes: [],
        description: '',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/linked_bank_accounts',
    label: 'required params',
    run: async () => {
      const linkedBankAccountList = await client.linkedBankAccounts.list({
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/linked_bank_accounts',
    label: 'all params',
    run: async () => {
      const linkedBankAccountList = await client.linkedBankAccounts.list({
        account_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
        level: 'account',
        purpose: 'charges',
        status: 'created',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/linked_bank_accounts/{linked_bank_account_id}',
    label: 'required params',
    run: async () => {
      const linkedBankAccount = await client.linkedBankAccounts.update(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          bank_account: {
            account_holder: '',
            routing_number: 'xxxxxxxxx',
            account_number: '',
          },
        },
      );
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/linked_bank_accounts/{linked_bank_account_id}',
    label: 'all params',
    run: async () => {
      const linkedBankAccount = await client.linkedBankAccounts.update(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
          'Idempotency-Key': 'idempotencyKey',
          bank_account: {
            account_holder: '',
            routing_number: 'xxxxxxxxx',
            account_number: '',
          },
          metadata: {},
        },
      );
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/linked_bank_accounts/{linked_bank_account_id}',
    label: 'required params',
    run: async () => {
      const linkedBankAccount = await client.linkedBankAccounts.retrieve(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/linked_bank_accounts/{linked_bank_account_id}',
    label: 'all params',
    run: async () => {
      const linkedBankAccount = await client.linkedBankAccounts.retrieve(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
        },
      );
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/linked_bank_accounts/{linked_bank_account_id}/unmask',
    label: 'required params',
    run: async () => {
      const unmaskedLinkedBankAccount = await client.linkedBankAccounts.listUnmasked(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/linked_bank_accounts/{linked_bank_account_id}/unmask',
    label: 'all params',
    run: async () => {
      const unmaskedLinkedBankAccount = await client.linkedBankAccounts.listUnmasked(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
        },
      );
    },
  },

  {
    operation: 'cancel',
    method: 'PATCH',
    path: '/v1/linked_bank_accounts/{linked_bank_account_id}/cancel',
    label: 'required params',
    run: async () => {
      const linkedBankAccount = await client.linkedBankAccounts.cancel(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'cancel',
    method: 'PATCH',
    path: '/v1/linked_bank_accounts/{linked_bank_account_id}/cancel',
    label: 'all params',
    run: async () => {
      const linkedBankAccount = await client.linkedBankAccounts.cancel(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
          'Idempotency-Key': 'idempotencyKey',
        },
      );
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/organizations',
    label: 'required params',
    run: async () => {
      const organization = await client.organizations.create({
        name: '',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/organizations',
    label: 'all params',
    run: async () => {
      const organization = await client.organizations.create({
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        name: '',
        metadata: {},
        external_id: '',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/organizations',
    label: 'required params',
    run: async () => {
      const organizationList = await client.organizations.list({
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/organizations',
    label: 'all params',
    run: async () => {
      const organizationList = await client.organizations.list({
        name: 'name',
        external_id: 'externalId',
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/organizations/{organization_id}',
    label: 'required params',
    run: async () => {
      const organization = await client.organizations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/organizations/{organization_id}',
    label: 'all params',
    run: async () => {
      const organization = await client.organizations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/representatives',
    label: 'required params',
    run: async () => {
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
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/representatives',
    label: 'all params',
    run: async () => {
      const representative = await client.representatives.create({
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
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
          percent_ownership: 0,
          title: '',
        },
        external_id: '',
        metadata: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/representatives',
    label: 'required params',
    run: async () => {
      const representativeList = await client.representatives.list({
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/representatives',
    label: 'all params',
    run: async () => {
      const representativeList = await client.representatives.list({
        account_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
        platform_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        level: 'account',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/representatives/{representative_id}',
    label: 'required params',
    run: async () => {
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
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/representatives/{representative_id}',
    label: 'all params',
    run: async () => {
      const representative = await client.representatives.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
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
          percent_ownership: 0,
          title: '',
        },
        external_id: '',
        metadata: {},
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/representatives/{representative_id}',
    label: 'required params',
    run: async () => {
      const representative = await client.representatives.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/representatives/{representative_id}',
    label: 'all params',
    run: async () => {
      const representative = await client.representatives.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/representatives/{representative_id}/unmask',
    label: 'required params',
    run: async () => {
      const unmaskedRepresentative = await client.representatives.listUnmasked(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      );
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/representatives/{representative_id}/unmask',
    label: 'all params',
    run: async () => {
      const unmaskedRepresentative = await client.representatives.listUnmasked(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
        },
      );
    },
  },

  {
    operation: 'createBankAccountPaykey',
    method: 'POST',
    path: '/v1/bridge/bank_account',
    label: 'required params',
    run: async () => {
      const paykey = await client.bridge.createBankAccountPaykey({
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        routing_number: 'xxxxxxxxx',
        account_number: '',
        account_type: 'checking',
      });
    },
  },

  {
    operation: 'createBankAccountPaykey',
    method: 'POST',
    path: '/v1/bridge/bank_account',
    label: 'all params',
    run: async () => {
      const paykey = await client.bridge.createBankAccountPaykey({
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        routing_number: 'xxxxxxxxx',
        account_number: '',
        account_type: 'checking',
        metadata: {},
        config: {
          sandbox_outcome: 'standard',
          processing_method: 'inline',
        },
        external_id: '',
      });
    },
  },

  {
    operation: 'createPlaidPaykey',
    method: 'POST',
    path: '/v1/bridge/plaid',
    label: 'required params',
    run: async () => {
      const paykey = await client.bridge.createPlaidPaykey({
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        plaid_token: '',
      });
    },
  },

  {
    operation: 'createPlaidPaykey',
    method: 'POST',
    path: '/v1/bridge/plaid',
    label: 'all params',
    run: async () => {
      const paykey = await client.bridge.createPlaidPaykey({
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        plaid_token: '',
        metadata: {},
        config: {
          sandbox_outcome: 'standard',
          processing_method: 'inline',
        },
        external_id: '',
      });
    },
  },

  {
    operation: 'createToken',
    method: 'POST',
    path: '/v1/bridge/initialize',
    label: 'required params',
    run: async () => {
      const bridgeToken = await client.bridge.createToken({
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
      });
    },
  },

  {
    operation: 'createToken',
    method: 'POST',
    path: '/v1/bridge/initialize',
    label: 'all params',
    run: async () => {
      const bridgeToken = await client.bridge.createToken({
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        config: {
          sandbox_outcome: 'standard',
          processing_method: 'inline',
        },
        external_id: '',
      });
    },
  },

  {
    operation: 'createQuilttPaykey',
    method: 'POST',
    path: '/v1/bridge/quiltt',
    label: 'required params',
    run: async () => {
      const revealedPaykey = await client.bridge.createQuilttPaykey({
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        quiltt_token: '',
      });
    },
  },

  {
    operation: 'createQuilttPaykey',
    method: 'POST',
    path: '/v1/bridge/quiltt',
    label: 'all params',
    run: async () => {
      const revealedPaykey = await client.bridge.createQuilttPaykey({
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        quiltt_token: '',
        metadata: {},
        config: {
          sandbox_outcome: 'standard',
          processing_method: 'inline',
        },
        external_id: '',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/customers/{id}',
    label: 'required params',
    run: async () => {
      const customer = await client.customers.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/customers/{id}',
    label: 'all params',
    run: async () => {
      const customer = await client.customers.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/customers/{id}',
    label: 'required params',
    run: async () => {
      const customer = await client.customers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        name: '',
        email: 'user@example.com',
        phone: '',
        device: {
          ip_address: '192.168.1.1',
        },
        status: 'verified',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/customers/{id}',
    label: 'all params',
    run: async () => {
      const customer = await client.customers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        name: '',
        email: 'user@example.com',
        address: {
          address1: '123 Main St',
          address2: 'Apt 1',
          city: 'Anytown',
          state: 'CA',
          zip: '12345',
        },
        phone: '',
        compliance_profile: {
          ssn: '123-45-6789',
          dob: '1969-04-20',
        },
        external_id: '',
        device: {
          ip_address: '192.168.1.1',
        },
        status: 'verified',
        metadata: {},
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/customers/{id}',
    label: 'required params',
    run: async () => {
      const customer = await client.customers.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/customers/{id}',
    label: 'all params',
    run: async () => {
      const customer = await client.customers.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/customers',
    label: 'required params',
    run: async () => {
      const customerSummaryList = await client.customers.list({
        page_number: 1,
        page_size: 100,
        sort_order: 'asc',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/customers',
    label: 'all params',
    run: async () => {
      const customerSummaryList = await client.customers.list({
        page_number: 1,
        page_size: 100,
        sort_by: 'name',
        sort_order: 'asc',
        created_from: '2024-01-01T00:00:00.000Z',
        created_to: '2024-01-01T00:00:00.000Z',
        name: 'name',
        external_id: 'externalId',
        email: 'email',
        status: ['pending'],
        search_text: 'searchText',
        types: ['individual'],
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/customers',
    label: 'required params',
    run: async () => {
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
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/customers',
    label: 'all params',
    run: async () => {
      const customer = await client.customers.create({
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        name: 'Ron Swanson',
        type: 'individual',
        email: 'ron.swanson@pawnee.com',
        address: { address1: '123 Main St', city: 'Anytown', state: 'CA', zip: '94105' },
        phone: '+12128675309',
        compliance_profile: {
          ssn: '123-45-6789',
          dob: '1969-04-20',
        },
        external_id: 'customer_123',
        device: { ip_address: '192.168.1.1' },
        metadata: {},
        config: {
          sandbox_outcome: 'standard',
          processing_method: 'inline',
        },
      });
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/customers/{id}/unmasked',
    label: 'required params',
    run: async () => {
      const unmaskedCustomer = await client.customers.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/customers/{id}/unmasked',
    label: 'all params',
    run: async () => {
      const unmaskedCustomer = await client.customers.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'refreshReview',
    method: 'PUT',
    path: '/v1/customers/{id}/refresh_review',
    label: 'required params',
    run: async () => {
      const customer = await client.customers.refreshReview('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'refreshReview',
    method: 'PUT',
    path: '/v1/customers/{id}/refresh_review',
    label: 'all params',
    run: async () => {
      const customer = await client.customers.refreshReview('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/customers/{id}/review',
    label: 'required params',
    run: async () => {
      const customerReview = await client.customers.review.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/customers/{id}/review',
    label: 'all params',
    run: async () => {
      const customerReview = await client.customers.review.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'setVerificationDecision',
    method: 'PATCH',
    path: '/v1/customers/{id}/review',
    label: 'required params',
    run: async () => {
      const customer = await client.customers.review.setVerificationDecision(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          status: 'verified',
        },
      );
    },
  },

  {
    operation: 'setVerificationDecision',
    method: 'PATCH',
    path: '/v1/customers/{id}/review',
    label: 'all params',
    run: async () => {
      const customer = await client.customers.review.setVerificationDecision(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
          'Idempotency-Key': 'idempotencyKey',
          status: 'verified',
        },
      );
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/paykeys/{id}',
    label: 'required params',
    run: async () => {
      const paykey = await client.paykeys.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/paykeys/{id}',
    label: 'all params',
    run: async () => {
      const paykey = await client.paykeys.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/paykeys/{id}/unmasked',
    label: 'required params',
    run: async () => {
      const unmaskedPaykey = await client.paykeys.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/paykeys/{id}/unmasked',
    label: 'all params',
    run: async () => {
      const unmaskedPaykey = await client.paykeys.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/paykeys',
    label: 'required params',
    run: async () => {
      const paykeySummaryList = await client.paykeys.list({
        page_number: 1,
        page_size: 100,
        sort_order: 'asc',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/paykeys',
    label: 'all params',
    run: async () => {
      const paykeySummaryList = await client.paykeys.list({
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        page_number: 1,
        page_size: 100,
        status: ['pending'],
        sort_by: 'institution_name',
        sort_order: 'asc',
        source: ['bank_account'],
        unblock_eligible: true,
        search_text: 'searchText',
        created_from: '2024-01-01T00:00:00.000Z',
        created_to: '2024-01-01T00:00:00.000Z',
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'reveal',
    method: 'GET',
    path: '/v1/paykeys/{id}/reveal',
    label: 'required params',
    run: async () => {
      const revealedPaykey = await client.paykeys.reveal('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'reveal',
    method: 'GET',
    path: '/v1/paykeys/{id}/reveal',
    label: 'all params',
    run: async () => {
      const revealedPaykey = await client.paykeys.reveal('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'cancel',
    method: 'PUT',
    path: '/v1/paykeys/{id}/cancel',
    label: 'required params',
    run: async () => {
      const paykey = await client.paykeys.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'cancel',
    method: 'PUT',
    path: '/v1/paykeys/{id}/cancel',
    label: 'all params',
    run: async () => {
      const paykey = await client.paykeys.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        reason: '',
      });
    },
  },

  {
    operation: 'refreshReview',
    method: 'PUT',
    path: '/v1/paykeys/{id}/refresh_review',
    label: 'required params',
    run: async () => {
      const paykey = await client.paykeys.refreshReview('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'refreshReview',
    method: 'PUT',
    path: '/v1/paykeys/{id}/refresh_review',
    label: 'all params',
    run: async () => {
      const paykey = await client.paykeys.refreshReview('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
      });
    },
  },

  {
    operation: 'refreshBalance',
    method: 'PUT',
    path: '/v1/paykeys/{id}/refresh_balance',
    label: 'required params',
    run: async () => {
      const paykey = await client.paykeys.refreshBalance('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'refreshBalance',
    method: 'PUT',
    path: '/v1/paykeys/{id}/refresh_balance',
    label: 'all params',
    run: async () => {
      const paykey = await client.paykeys.refreshBalance('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
      });
    },
  },

  {
    operation: 'unblock',
    method: 'PATCH',
    path: '/v1/paykeys/{id}/unblock',
    label: 'required params',
    run: async () => {
      const paykey = await client.paykeys.unblock('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'unblock',
    method: 'PATCH',
    path: '/v1/paykeys/{id}/unblock',
    label: 'all params',
    run: async () => {
      const paykey = await client.paykeys.unblock('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        message: '',
      });
    },
  },

  {
    operation: 'setVerificationDecision',
    method: 'PATCH',
    path: '/v1/paykeys/{id}/review',
    label: 'required params',
    run: async () => {
      const paykey = await client.paykeys.review.setVerificationDecision(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          status: 'active',
        },
      );
    },
  },

  {
    operation: 'setVerificationDecision',
    method: 'PATCH',
    path: '/v1/paykeys/{id}/review',
    label: 'all params',
    run: async () => {
      const paykey = await client.paykeys.review.setVerificationDecision(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
          'Idempotency-Key': 'idempotencyKey',
          status: 'active',
        },
      );
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/paykeys/{id}/review',
    label: 'required params',
    run: async () => {
      const paykeyReview = await client.paykeys.review.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/paykeys/{id}/review',
    label: 'all params',
    run: async () => {
      const paykeyReview = await client.paykeys.review.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/charges/{id}',
    label: 'required params',
    run: async () => {
      const charge = await client.charges.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/charges/{id}',
    label: 'all params',
    run: async () => {
      const charge = await client.charges.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/charges/{id}',
    label: 'required params',
    run: async () => {
      const charge = await client.charges.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        description: 'Monthly subscription fee',
        amount: 10000,
        payment_date: '2024-01-01',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/charges/{id}',
    label: 'all params',
    run: async () => {
      const charge = await client.charges.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        description: 'Monthly subscription fee',
        amount: 10000,
        payment_date: '2024-01-01',
        metadata: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/charges',
    label: 'required params',
    run: async () => {
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
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/charges',
    label: 'all params',
    run: async () => {
      const charge = await client.charges.create({
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
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
          sandbox_outcome: 'standard',
          auto_hold: false,
          auto_hold_message: '',
        },
        metadata: {},
      });
    },
  },

  {
    operation: 'hold',
    method: 'PUT',
    path: '/v1/charges/{id}/hold',
    label: 'required params',
    run: async () => {
      const charge = await client.charges.hold('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'hold',
    method: 'PUT',
    path: '/v1/charges/{id}/hold',
    label: 'all params',
    run: async () => {
      const charge = await client.charges.hold('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        reason: '',
      });
    },
  },

  {
    operation: 'release',
    method: 'PUT',
    path: '/v1/charges/{id}/release',
    label: 'required params',
    run: async () => {
      const charge = await client.charges.release('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'release',
    method: 'PUT',
    path: '/v1/charges/{id}/release',
    label: 'all params',
    run: async () => {
      const charge = await client.charges.release('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        reason: '',
      });
    },
  },

  {
    operation: 'cancel',
    method: 'PUT',
    path: '/v1/charges/{id}/cancel',
    label: 'required params',
    run: async () => {
      const charge = await client.charges.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'cancel',
    method: 'PUT',
    path: '/v1/charges/{id}/cancel',
    label: 'all params',
    run: async () => {
      const charge = await client.charges.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        reason: '',
      });
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/charges/{id}/unmask',
    label: 'required params',
    run: async () => {
      const unmaskedCharge = await client.charges.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/charges/{id}/unmask',
    label: 'all params',
    run: async () => {
      const unmaskedCharge = await client.charges.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'resubmit',
    method: 'POST',
    path: '/v1/charges/{id}/resubmit',
    label: 'required params',
    run: async () => {
      const charge = await client.charges.resubmit('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'resubmit',
    method: 'POST',
    path: '/v1/charges/{id}/resubmit',
    label: 'all params',
    run: async () => {
      const charge = await client.charges.resubmit('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        description: '',
        payment_date: '2024-01-01',
        external_id: '',
      });
    },
  },

  {
    operation: 'refund',
    method: 'POST',
    path: '/v1/charges/{id}/refund',
    label: 'required params',
    run: async () => {
      const payout = await client.charges.refund('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        amount: 5000,
      });
    },
  },

  {
    operation: 'refund',
    method: 'POST',
    path: '/v1/charges/{id}/refund',
    label: 'all params',
    run: async () => {
      const payout = await client.charges.refund('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        amount: 5000,
        description: '',
        external_id: '',
        payment_date: '2024-01-01',
        metadata: {},
      });
    },
  },

  {
    operation: 'uploadAuthorizationProof',
    method: 'POST',
    path: '/v1/charges/{id}/authorization',
    label: 'required params',
    run: async () => {
      const charge = await client.charges.uploadAuthorizationProof('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        File: '',
      });
    },
  },

  {
    operation: 'uploadAuthorizationProof',
    method: 'POST',
    path: '/v1/charges/{id}/authorization',
    label: 'all params',
    run: async () => {
      const charge = await client.charges.uploadAuthorizationProof('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        File: '',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/funding_events',
    label: 'required params',
    run: async () => {
      const fundingEventSummaryList = await client.fundingEvents.list({
        page_number: 1,
        page_size: 100,
        sort_order: 'asc',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/funding_events',
    label: 'all params',
    run: async () => {
      const fundingEventSummaryList = await client.fundingEvents.list({
        page_number: 1,
        page_size: 100,
        sort_by: 'transfer_date',
        sort_order: 'asc',
        created_from: '2024-01-01',
        created_to: '2024-01-01',
        direction: 'deposit',
        event_type: 'charge_deposit',
        trace_number: 'traceNumber',
        search_text: 'searchText',
        status: ['created'],
        trace_id: 'traceId',
        status_reason: ['insufficient_funds'],
        status_source: ['watchtower'],
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/funding_events/{id}',
    label: 'required params',
    run: async () => {
      const fundingEvent = await client.fundingEvents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/funding_events/{id}',
    label: 'all params',
    run: async () => {
      const fundingEvent = await client.fundingEvents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'simulate',
    method: 'POST',
    path: '/v1/funding_events/simulate',
    label: 'required params',
    run: async () => {
      const fundingEventSimulation = await client.fundingEvents.simulate({
        funding_event_job_type: 'charges',
      });
    },
  },

  {
    operation: 'simulate',
    method: 'POST',
    path: '/v1/funding_events/simulate',
    label: 'all params',
    run: async () => {
      const fundingEventSimulation = await client.fundingEvents.simulate({
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        funding_event_job_type: 'charges',
        sandbox_outcome: 'standard',
      });
    },
  },

  {
    operation: 'listPayments',
    method: 'GET',
    path: '/v1/funding_event_payments/{id}',
    label: 'required params',
    run: async () => {
      const fundingEventPaymentList = await client.fundingEvents.listPayments(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          default_sort_order: 'asc',
          sort_order: 'asc',
        },
      );
    },
  },

  {
    operation: 'listPayments',
    method: 'GET',
    path: '/v1/funding_event_payments/{id}',
    label: 'all params',
    run: async () => {
      const fundingEventPaymentList = await client.fundingEvents.listPayments(
        '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        {
          page_number: 1,
          page_size: 1,
          include_metadata: true,
          default_page_size: 1,
          default_sort: 'created_at',
          default_sort_order: 'asc',
          sort_by: 'created_at',
          sort_order: 'asc',
          'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          'Request-Id': 'requestId',
          'Correlation-Id': 'correlationId',
        },
      );
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/payments',
    label: 'required params',
    run: async () => {
      const paymentSummaryList = await client.payments.list({
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
        default_sort: 'id',
        default_sort_order: 'asc',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/payments',
    label: 'all params',
    run: async () => {
      const paymentSummaryList = await client.payments.list({
        page_number: 1,
        page_size: 100,
        sort_by: 'id',
        sort_order: 'asc',
        payment_type: ['charge'],
        payment_status: ['created'],
        payment_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        external_id: 'externalId',
        customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        paykey_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        paykey: 'paykey',
        min_amount: 1,
        max_amount: 1,
        min_payment_date: '2024-01-01',
        max_payment_date: '2024-01-01',
        min_created_at: '2024-01-01T00:00:00.000Z',
        max_created_at: '2024-01-01T00:00:00.000Z',
        min_effective_at: '2024-01-01T00:00:00.000Z',
        max_effective_at: '2024-01-01T00:00:00.000Z',
        funding_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        search_text: 'searchText',
        default_page_size: 1,
        default_sort: 'id',
        default_sort_order: 'asc',
        status_reason: ['insufficient_funds'],
        status_source: ['watchtower'],
        include_metadata: true,
        is_refund: true,
        has_refund: true,
        is_resubmit: true,
        has_resubmit: true,
        min_updated_at: '2024-01-01T00:00:00.000Z',
        max_updated_at: '2024-01-01T00:00:00.000Z',
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/payouts/{id}',
    label: 'required params',
    run: async () => {
      const payout = await client.payouts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/payouts/{id}',
    label: 'all params',
    run: async () => {
      const payout = await client.payouts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/payouts/{id}',
    label: 'required params',
    run: async () => {
      const payout = await client.payouts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        description: '',
        amount: 10000,
        payment_date: '2024-01-01',
      });
    },
  },

  {
    operation: 'update',
    method: 'PUT',
    path: '/v1/payouts/{id}',
    label: 'all params',
    run: async () => {
      const payout = await client.payouts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        description: '',
        amount: 10000,
        payment_date: '2024-01-01',
        metadata: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/payouts',
    label: 'required params',
    run: async () => {
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
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/payouts',
    label: 'all params',
    run: async () => {
      const payout = await client.payouts.create({
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        paykey: '',
        description: 'Vendor invoice payment',
        amount: 10000,
        currency: 'USD',
        payment_date: '2024-01-01',
        device: {
          ip_address: '192.168.1.1',
        },
        external_id: '',
        config: {
          sandbox_outcome: 'standard',
          auto_hold: false,
          auto_hold_message: '',
        },
        metadata: {},
      });
    },
  },

  {
    operation: 'hold',
    method: 'PUT',
    path: '/v1/payouts/{id}/hold',
    label: 'required params',
    run: async () => {
      const payout = await client.payouts.hold('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        reason: '',
      });
    },
  },

  {
    operation: 'hold',
    method: 'PUT',
    path: '/v1/payouts/{id}/hold',
    label: 'all params',
    run: async () => {
      const payout = await client.payouts.hold('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        reason: '',
      });
    },
  },

  {
    operation: 'release',
    method: 'PUT',
    path: '/v1/payouts/{id}/release',
    label: 'required params',
    run: async () => {
      const payout = await client.payouts.release('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        reason: '',
      });
    },
  },

  {
    operation: 'release',
    method: 'PUT',
    path: '/v1/payouts/{id}/release',
    label: 'all params',
    run: async () => {
      const payout = await client.payouts.release('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        reason: '',
      });
    },
  },

  {
    operation: 'cancel',
    method: 'PUT',
    path: '/v1/payouts/{id}/cancel',
    label: 'required params',
    run: async () => {
      const payout = await client.payouts.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        reason: '',
      });
    },
  },

  {
    operation: 'cancel',
    method: 'PUT',
    path: '/v1/payouts/{id}/cancel',
    label: 'all params',
    run: async () => {
      const payout = await client.payouts.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        reason: '',
      });
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/payouts/{id}/unmask',
    label: 'required params',
    run: async () => {
      const unmaskedPayout = await client.payouts.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'listUnmasked',
    method: 'GET',
    path: '/v1/payouts/{id}/unmask',
    label: 'all params',
    run: async () => {
      const unmaskedPayout = await client.payouts.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },

  {
    operation: 'resubmit',
    method: 'POST',
    path: '/v1/payouts/{id}/resubmit',
    label: 'required params',
    run: async () => {
      const payout = await client.payouts.resubmit('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'resubmit',
    method: 'POST',
    path: '/v1/payouts/{id}/resubmit',
    label: 'all params',
    run: async () => {
      const payout = await client.payouts.resubmit('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        description: '',
        payment_date: '2024-01-01',
        external_id: '',
      });
    },
  },

  {
    operation: 'uploadAuthorizationProof',
    method: 'POST',
    path: '/v1/payouts/{id}/authorization',
    label: 'required params',
    run: async () => {
      const payout = await client.payouts.uploadAuthorizationProof('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        File: '',
      });
    },
  },

  {
    operation: 'uploadAuthorizationProof',
    method: 'POST',
    path: '/v1/payouts/{id}/authorization',
    label: 'all params',
    run: async () => {
      const payout = await client.payouts.uploadAuthorizationProof('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Straddle-Account-Id': '7c9e6679-7425-40de-944b-e07fc1f90ae7',
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
        'Idempotency-Key': 'idempotencyKey',
        File: '',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/account_settings/{account_id}',
    label: 'required params',
    run: async () => {
      const accountSettings = await client.accountSettings.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/account_settings/{account_id}',
    label: 'all params',
    run: async () => {
      const accountSettings = await client.accountSettings.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
        'Request-Id': 'requestId',
        'Correlation-Id': 'correlationId',
      });
    },
  },
];

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now();
      // `label` distinguishes the required-params run from the all-params run of the same
      // operation; it is omitted entirely when the operation contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        await testCase.run();
        return { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        return { ...identity, status: 'failed', durationMs: Date.now() - startedAt, error: message };
      }
    }),
  );

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) =>
    result.status === 'fulfilled'
      ? result.value
      : {
          operation: 'unknown',
          method: '',
          path: '',
          status: 'failed',
          durationMs: 0,
          error: String(result.reason),
        },
  );
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();
