// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create',
    endpoint: '/v1/accounts',
    httpMethod: 'post',
    summary: 'Create an account',
    description:
      'Creates a new account associated with your Straddle platform integration. This endpoint allows you to set up an account with specified details, including business information and access levels.',
    stainlessPath: '(resource) embed.accounts > (method) create',
    qualified: 'client.embed.accounts.create',
    params: [
      "access_level: 'standard' | 'managed';",
      "account_type: 'business';",
      'business_profile: { name: string; website: string; address?: { city: string; line1: string; postal_code: string; state: string; country?: string; line2?: string; }; description?: string; industry?: { category?: string; mcc?: string; sector?: string; }; legal_name?: string; phone?: string; support_channels?: { email?: string; phone?: string; url?: string; }; tax_id?: string; use_case?: string; };',
      'organization_id: string;',
      'external_id?: string;',
      'metadata?: object;',
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create\n\n`client.embed.accounts.create(access_level: 'standard' | 'managed', account_type: 'business', business_profile: { name: string; website: string; address?: address_v1; description?: string; industry?: industry_v1; legal_name?: string; phone?: string; support_channels?: support_channels_v1; tax_id?: string; use_case?: string; }, organization_id: string, external_id?: string, metadata?: object, correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/accounts`\n\nCreates a new account associated with your Straddle platform integration. This endpoint allows you to set up an account with specified details, including business information and access levels.\n\n### Parameters\n\n- `access_level: 'standard' | 'managed'`\n  The access level granted to the account. This is determined by your platform configuration. Use `standard` unless instructed otherwise by Straddle.\n\n- `account_type: 'business'`\n  The type of account to be created. Currently, only `business` is supported.\n\n- `business_profile: { name: string; website: string; address?: { city: string; line1: string; postal_code: string; state: string; country?: string; line2?: string; }; description?: string; industry?: { category?: string; mcc?: string; sector?: string; }; legal_name?: string; phone?: string; support_channels?: { email?: string; phone?: string; url?: string; }; tax_id?: string; use_case?: string; }`\n  - `name: string`\n    The operating or trade name of the business.\n  - `website: string`\n    URL of the business's primary marketing website.\n  - `address?: { city: string; line1: string; postal_code: string; state: string; country?: string; line2?: string; }`\n    The address object is optional. If provided, it must be a valid address.\n  - `description?: string`\n    A brief description of the business and its products or services.\n  - `industry?: { category?: string; mcc?: string; sector?: string; }`\n  - `legal_name?: string`\n    The official registered name of the business.\n  - `phone?: string`\n    The primary contact phone number for the business.\n  - `support_channels?: { email?: string; phone?: string; url?: string; }`\n  - `tax_id?: string`\n    The business's tax identification number (e.g., EIN in the US).\n  - `use_case?: string`\n    A description of how the business intends to use Straddle's services.\n\n- `organization_id: string`\n  The unique identifier of the organization related to this account.\n\n- `external_id?: string`\n  Unique identifier for the account in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the account in a structured format.\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: { name: string; website: string; address?: object; description?: string; industry?: object; legal_name?: string; phone?: string; support_channels?: object; tax_id?: string; use_case?: string; }; capabilities?: { consent_types: { internet: object; signed_agreement: object; }; customer_types: { businesses: object; individuals: object; }; payment_types: { charges: object; payouts: object; }; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; payouts: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; }; terms_of_service?: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; }; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst accountV1 = await client.embed.accounts.create({\n  access_level: 'standard',\n  account_type: 'business',\n  business_profile: { name: 'name', website: 'https://example.com' },\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(accountV1);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/accounts/{account_id}',
    httpMethod: 'put',
    summary: 'Update an account',
    description:
      "Updates an existing account's information. This endpoint allows you to update various account details during onboarding or after the account has been created.",
    stainlessPath: '(resource) embed.accounts > (method) update',
    qualified: 'client.embed.accounts.update',
    params: [
      'account_id: string;',
      'business_profile: { name: string; website: string; address?: { city: string; line1: string; postal_code: string; state: string; country?: string; line2?: string; }; description?: string; industry?: { category?: string; mcc?: string; sector?: string; }; legal_name?: string; phone?: string; support_channels?: { email?: string; phone?: string; url?: string; }; tax_id?: string; use_case?: string; };',
      'external_id?: string;',
      'metadata?: object;',
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## update\n\n`client.embed.accounts.update(account_id: string, business_profile: { name: string; website: string; address?: address_v1; description?: string; industry?: industry_v1; legal_name?: string; phone?: string; support_channels?: support_channels_v1; tax_id?: string; use_case?: string; }, external_id?: string, metadata?: object, correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/accounts/{account_id}`\n\nUpdates an existing account's information. This endpoint allows you to update various account details during onboarding or after the account has been created.\n\n### Parameters\n\n- `account_id: string`\n\n- `business_profile: { name: string; website: string; address?: { city: string; line1: string; postal_code: string; state: string; country?: string; line2?: string; }; description?: string; industry?: { category?: string; mcc?: string; sector?: string; }; legal_name?: string; phone?: string; support_channels?: { email?: string; phone?: string; url?: string; }; tax_id?: string; use_case?: string; }`\n  - `name: string`\n    The operating or trade name of the business.\n  - `website: string`\n    URL of the business's primary marketing website.\n  - `address?: { city: string; line1: string; postal_code: string; state: string; country?: string; line2?: string; }`\n    The address object is optional. If provided, it must be a valid address.\n  - `description?: string`\n    A brief description of the business and its products or services.\n  - `industry?: { category?: string; mcc?: string; sector?: string; }`\n  - `legal_name?: string`\n    The official registered name of the business.\n  - `phone?: string`\n    The primary contact phone number for the business.\n  - `support_channels?: { email?: string; phone?: string; url?: string; }`\n  - `tax_id?: string`\n    The business's tax identification number (e.g., EIN in the US).\n  - `use_case?: string`\n    A description of how the business intends to use Straddle's services.\n\n- `external_id?: string`\n  Unique identifier for the account in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the account in a structured format.\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: { name: string; website: string; address?: object; description?: string; industry?: object; legal_name?: string; phone?: string; support_channels?: object; tax_id?: string; use_case?: string; }; capabilities?: { consent_types: { internet: object; signed_agreement: object; }; customer_types: { businesses: object; individuals: object; }; payment_types: { charges: object; payouts: object; }; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; payouts: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; }; terms_of_service?: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; }; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst accountV1 = await client.embed.accounts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { business_profile: { name: 'name', website: 'https://example.com' } });\n\nconsole.log(accountV1);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/accounts',
    httpMethod: 'get',
    summary: 'List accounts',
    description:
      'Returns a list of accounts associated with your Straddle platform integration. The accounts are returned sorted by creation date, with the most recently created accounts appearing first. This endpoint supports advanced sorting and filtering options.',
    stainlessPath: '(resource) embed.accounts > (method) list',
    qualified: 'client.embed.accounts.list',
    params: [
      'page_number?: number;',
      'page_size?: number;',
      'search_text?: string;',
      'sort_by?: string;',
      "sort_order?: 'asc' | 'desc';",
      "status?: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';",
      "type?: 'business';",
      'correlation-id?: string;',
      'request-id?: string;',
    ],
    response:
      "{ id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }",
    markdown:
      "## list\n\n`client.embed.accounts.list(page_number?: number, page_size?: number, search_text?: string, sort_by?: string, sort_order?: 'asc' | 'desc', status?: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive', type?: 'business', correlation-id?: string, request-id?: string): { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }`\n\n**get** `/v1/accounts`\n\nReturns a list of accounts associated with your Straddle platform integration. The accounts are returned sorted by creation date, with the most recently created accounts appearing first. This endpoint supports advanced sorting and filtering options.\n\n### Parameters\n\n- `page_number?: number`\n  Results page number. Starts at page 1. Default value: 1\n\n- `page_size?: number`\n  Page size. Default value: 100. Max value: 1000\n\n- `search_text?: string`\n\n- `sort_by?: string`\n  Sort By. Default value: 'id'.\n\n- `sort_order?: 'asc' | 'desc'`\n  Sort Order. Default value: 'asc'.\n\n- `status?: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'`\n\n- `type?: 'business'`\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: { name: string; website: string; address?: object; description?: string; industry?: object; legal_name?: string; phone?: string; support_channels?: object; tax_id?: string; use_case?: string; }; capabilities?: { consent_types: { internet: object; signed_agreement: object; }; customer_types: { businesses: object; individuals: object; }; payment_types: { charges: object; payouts: object; }; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; payouts: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; }; terms_of_service?: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; }; updated_at?: string; }`\n\n  - `id: string`\n  - `access_level: 'standard' | 'managed'`\n  - `organization_id: string`\n  - `status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'`\n  - `status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }`\n  - `type: 'business'`\n  - `business_profile?: { name: string; website: string; address?: { city: string; line1: string; postal_code: string; state: string; country?: string; line2?: string; }; description?: string; industry?: { category?: string; mcc?: string; sector?: string; }; legal_name?: string; phone?: string; support_channels?: { email?: string; phone?: string; url?: string; }; tax_id?: string; use_case?: string; }`\n  - `capabilities?: { consent_types: { internet: { capability_status: 'active' | 'inactive'; }; signed_agreement: { capability_status: 'active' | 'inactive'; }; }; customer_types: { businesses: { capability_status: 'active' | 'inactive'; }; individuals: { capability_status: 'active' | 'inactive'; }; }; payment_types: { charges: { capability_status: 'active' | 'inactive'; }; payouts: { capability_status: 'active' | 'inactive'; }; }; }`\n  - `created_at?: string`\n  - `external_id?: string`\n  - `metadata?: object`\n  - `settings?: { charges: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; payouts: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; }`\n  - `terms_of_service?: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; }`\n  - `updated_at?: string`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\n// Automatically fetches more pages as needed.\nfor await (const account of client.embed.accounts.list()) {\n  console.log(account);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/accounts/{account_id}',
    httpMethod: 'get',
    summary: 'Lookup an account',
    description:
      'Retrieves the details of an account that has previously been created. Supply the unique account ID that was returned from your previous request, and Straddle will return the corresponding account information.',
    stainlessPath: '(resource) embed.accounts > (method) get',
    qualified: 'client.embed.accounts.get',
    params: ['account_id: string;', 'correlation-id?: string;', 'request-id?: string;'],
    response:
      "{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.embed.accounts.get(account_id: string, correlation-id?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/accounts/{account_id}`\n\nRetrieves the details of an account that has previously been created. Supply the unique account ID that was returned from your previous request, and Straddle will return the corresponding account information.\n\n### Parameters\n\n- `account_id: string`\n  The unique identifier of the account to retrieve.\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: { name: string; website: string; address?: object; description?: string; industry?: object; legal_name?: string; phone?: string; support_channels?: object; tax_id?: string; use_case?: string; }; capabilities?: { consent_types: { internet: object; signed_agreement: object; }; customer_types: { businesses: object; individuals: object; }; payment_types: { charges: object; payouts: object; }; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; payouts: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; }; terms_of_service?: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; }; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst accountV1 = await client.embed.accounts.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(accountV1);\n```",
  },
  {
    name: 'onboard',
    endpoint: '/v1/accounts/{account_id}/onboard',
    httpMethod: 'post',
    summary: 'Onboard an account',
    description:
      'Initiates the onboarding process for a new account. This endpoint can only be used for accounts where at least one representative and one bank account have already been created.',
    stainlessPath: '(resource) embed.accounts > (method) onboard',
    qualified: 'client.embed.accounts.onboard',
    params: [
      'account_id: string;',
      "terms_of_service: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; };",
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## onboard\n\n`client.embed.accounts.onboard(account_id: string, terms_of_service: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; }, correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/accounts/{account_id}/onboard`\n\nInitiates the onboarding process for a new account. This endpoint can only be used for accounts where at least one representative and one bank account have already been created.\n\n### Parameters\n\n- `account_id: string`\n\n- `terms_of_service: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; }`\n  - `accepted_date: string`\n    The datetime of when the terms of service were accepted, in ISO 8601 format.\n  - `agreement_type: 'embedded' | 'direct'`\n    The type or version of the agreement accepted. Use `embedded` unless your platform was specifically enabled for `direct` agreements.\n  - `agreement_url: string`\n    The URL where the full text of the accepted agreement can be found.\n  - `accepted_ip?: string`\n    The IP address from which the terms of service were accepted.\n  - `accepted_user_agent?: string`\n    The user agent string of the browser or application used to accept the terms.\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: { name: string; website: string; address?: object; description?: string; industry?: object; legal_name?: string; phone?: string; support_channels?: object; tax_id?: string; use_case?: string; }; capabilities?: { consent_types: { internet: object; signed_agreement: object; }; customer_types: { businesses: object; individuals: object; }; payment_types: { charges: object; payouts: object; }; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; payouts: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; }; terms_of_service?: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; }; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst accountV1 = await client.embed.accounts.onboard('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { terms_of_service: {\n  accepted_date: '2019-12-27T18:11:19.117Z',\n  agreement_type: 'embedded',\n  agreement_url: 'agreement_url',\n} });\n\nconsole.log(accountV1);\n```",
  },
  {
    name: 'simulate',
    endpoint: '/v1/accounts/{account_id}/simulate',
    httpMethod: 'post',
    summary: 'Simulate status transitions for a sandbox account',
    description:
      'Simulate the status transitions for sandbox accounts. This endpoint can only be used for sandbox accounts.',
    stainlessPath: '(resource) embed.accounts > (method) simulate',
    qualified: 'client.embed.accounts.simulate',
    params: [
      'account_id: string;',
      "final_status?: 'onboarding' | 'active';",
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## simulate\n\n`client.embed.accounts.simulate(account_id: string, final_status?: 'onboarding' | 'active', correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/accounts/{account_id}/simulate`\n\nSimulate the status transitions for sandbox accounts. This endpoint can only be used for sandbox accounts.\n\n### Parameters\n\n- `account_id: string`\n\n- `final_status?: 'onboarding' | 'active'`\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: object; capabilities?: { consent_types: object; customer_types: object; payment_types: object; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: object; payouts: object; }; terms_of_service?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; access_level: 'standard' | 'managed'; organization_id: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; type: 'business'; business_profile?: { name: string; website: string; address?: object; description?: string; industry?: object; legal_name?: string; phone?: string; support_channels?: object; tax_id?: string; use_case?: string; }; capabilities?: { consent_types: { internet: object; signed_agreement: object; }; customer_types: { businesses: object; individuals: object; }; payment_types: { charges: object; payouts: object; }; }; created_at?: string; external_id?: string; metadata?: object; settings?: { charges: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; payouts: { daily_amount: number; funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day'; linked_bank_account_id: string; max_amount: number; monthly_amount: number; monthly_count: number; }; }; terms_of_service?: { accepted_date: string; agreement_type: 'embedded' | 'direct'; agreement_url: string; accepted_ip?: string; accepted_user_agent?: string; }; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst accountV1 = await client.embed.accounts.simulate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(accountV1);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/accounts/{account_id}/capability_requests',
    httpMethod: 'post',
    summary: 'Request a capability',
    description:
      'Submits a request to enable a specific capability for an account. Use this endpoint to request additional features or services for an account.',
    stainlessPath: '(resource) embed.accounts.capability_requests > (method) create',
    qualified: 'client.embed.accounts.capabilityRequests.create',
    params: [
      'account_id: string;',
      'businesses?: { enable: boolean; };',
      'charges?: { daily_amount: number; enable: boolean; max_amount: number; monthly_amount: number; monthly_count: number; };',
      'individuals?: { enable: boolean; };',
      'internet?: { enable: boolean; };',
      'payouts?: { daily_amount: number; enable: boolean; max_amount: number; monthly_amount: number; monthly_count: number; };',
      'signed_agreement?: { enable: boolean; };',
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; account_id: string; category: 'payment_type' | 'customer_type' | 'consent_type'; created_at: string; enable: boolean; status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing'; type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet'; updated_at: string; settings?: object; }[]; meta: { api_request_id: string; api_request_timestamp: string; max_page_size: number; page_number: number; page_size: number; sort_by: string; sort_order: 'asc' | 'desc'; total_items: number; total_pages: number; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create\n\n`client.embed.accounts.capabilityRequests.create(account_id: string, businesses?: { enable: boolean; }, charges?: { daily_amount: number; enable: boolean; max_amount: number; monthly_amount: number; monthly_count: number; }, individuals?: { enable: boolean; }, internet?: { enable: boolean; }, payouts?: { daily_amount: number; enable: boolean; max_amount: number; monthly_amount: number; monthly_count: number; }, signed_agreement?: { enable: boolean; }, correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object[]; meta: paged_response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/accounts/{account_id}/capability_requests`\n\nSubmits a request to enable a specific capability for an account. Use this endpoint to request additional features or services for an account.\n\n### Parameters\n\n- `account_id: string`\n\n- `businesses?: { enable: boolean; }`\n  Allows the account to accept payments from businesses.\n  - `enable: boolean`\n\n- `charges?: { daily_amount: number; enable: boolean; max_amount: number; monthly_amount: number; monthly_count: number; }`\n  The charges capability settings for the account.\n  - `daily_amount: number`\n    The maximum dollar amount of charges in a calendar day.\n  - `enable: boolean`\n    Determines whether `charges` are enabled for the account.\n  - `max_amount: number`\n    The maximum amount of a single charge.\n  - `monthly_amount: number`\n    The maximum dollar amount of charges in a calendar month.\n  - `monthly_count: number`\n    The maximum number of charges in a calendar month.\n\n- `individuals?: { enable: boolean; }`\n  Allows the account to accept payments from individuals.\n  - `enable: boolean`\n\n- `internet?: { enable: boolean; }`\n  Allows the account to accept payments authorized via the internet or mobile applications.\n  - `enable: boolean`\n\n- `payouts?: { daily_amount: number; enable: boolean; max_amount: number; monthly_amount: number; monthly_count: number; }`\n  The payouts capability settings for the account.\n  - `daily_amount: number`\n    The maximum dollar amount of payouts in a day.\n  - `enable: boolean`\n    Determines whether `payouts` are enabled for the account.\n  - `max_amount: number`\n    The maximum amount of a single payout.\n  - `monthly_amount: number`\n    The maximum dollar amount of payouts in a month.\n  - `monthly_count: number`\n    The maximum number of payouts in a month.\n\n- `signed_agreement?: { enable: boolean; }`\n  Allows the account to accept payments authorized by signed agreements or contracts.\n  - `enable: boolean`\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; category: 'payment_type' | 'customer_type' | 'consent_type'; created_at: string; enable: boolean; status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing'; type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet'; updated_at: string; settings?: object; }[]; meta: { api_request_id: string; api_request_timestamp: string; max_page_size: number; page_number: number; page_size: number; sort_by: string; sort_order: 'asc' | 'desc'; total_items: number; total_pages: number; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; category: 'payment_type' | 'customer_type' | 'consent_type'; created_at: string; enable: boolean; status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing'; type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet'; updated_at: string; settings?: object; }[]`\n  - `meta: { api_request_id: string; api_request_timestamp: string; max_page_size: number; page_number: number; page_size: number; sort_by: string; sort_order: 'asc' | 'desc'; total_items: number; total_pages: number; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst capabilityRequestPagedV1 = await client.embed.accounts.capabilityRequests.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(capabilityRequestPagedV1);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/accounts/{account_id}/capability_requests',
    httpMethod: 'get',
    summary: 'List capability requests',
    description:
      'Retrieves a list of capability requests associated with an account. The requests are returned sorted by creation date, with the most recent requests appearing first. This endpoint supports advanced sorting and filtering options.',
    stainlessPath: '(resource) embed.accounts.capability_requests > (method) list',
    qualified: 'client.embed.accounts.capabilityRequests.list',
    params: [
      'account_id: string;',
      "category?: 'payment_type' | 'customer_type' | 'consent_type';",
      'page_number?: number;',
      'page_size?: number;',
      'sort_by?: string;',
      "sort_order?: 'asc' | 'desc';",
      "status?: 'active' | 'inactive' | 'in_review' | 'rejected';",
      "type?: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet';",
      'correlation-id?: string;',
      'request-id?: string;',
    ],
    response:
      "{ id: string; account_id: string; category: 'payment_type' | 'customer_type' | 'consent_type'; created_at: string; enable: boolean; status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing'; type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet'; updated_at: string; settings?: object; }",
    markdown:
      "## list\n\n`client.embed.accounts.capabilityRequests.list(account_id: string, category?: 'payment_type' | 'customer_type' | 'consent_type', page_number?: number, page_size?: number, sort_by?: string, sort_order?: 'asc' | 'desc', status?: 'active' | 'inactive' | 'in_review' | 'rejected', type?: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet', correlation-id?: string, request-id?: string): { id: string; account_id: string; category: 'payment_type' | 'customer_type' | 'consent_type'; created_at: string; enable: boolean; status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing'; type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet'; updated_at: string; settings?: object; }`\n\n**get** `/v1/accounts/{account_id}/capability_requests`\n\nRetrieves a list of capability requests associated with an account. The requests are returned sorted by creation date, with the most recent requests appearing first. This endpoint supports advanced sorting and filtering options.\n\n### Parameters\n\n- `account_id: string`\n\n- `category?: 'payment_type' | 'customer_type' | 'consent_type'`\n  Filter capability requests by category.\n\n- `page_number?: number`\n  Results page number. Starts at page 1.\n\n- `page_size?: number`\n  Page size.Max value: 1000\n\n- `sort_by?: string`\n  Sort By.\n\n- `sort_order?: 'asc' | 'desc'`\n  Sort Order.\n\n- `status?: 'active' | 'inactive' | 'in_review' | 'rejected'`\n  Filter capability requests by their current status.\n\n- `type?: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet'`\n  Filter capability requests by the specific type of capability.\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ id: string; account_id: string; category: 'payment_type' | 'customer_type' | 'consent_type'; created_at: string; enable: boolean; status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing'; type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet'; updated_at: string; settings?: object; }`\n\n  - `id: string`\n  - `account_id: string`\n  - `category: 'payment_type' | 'customer_type' | 'consent_type'`\n  - `created_at: string`\n  - `enable: boolean`\n  - `status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing'`\n  - `type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet'`\n  - `updated_at: string`\n  - `settings?: object`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\n// Automatically fetches more pages as needed.\nfor await (const capabilityRequest of client.embed.accounts.capabilityRequests.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')) {\n  console.log(capabilityRequest);\n}\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/linked_bank_accounts',
    httpMethod: 'post',
    summary: 'Create a linked bank account',
    description:
      'Creates a new linked bank account associated with a Straddle account. This endpoint allows you to associate external bank accounts with a Straddle account for various payment operations such as payment deposits, payout withdrawals, and more.',
    stainlessPath: '(resource) embed.linked_bank_accounts > (method) create',
    qualified: 'client.embed.linkedBankAccounts.create',
    params: [
      'account_id: string;',
      'bank_account: { account_holder: string; account_number: string; routing_number: string; };',
      'description?: string;',
      'metadata?: object;',
      'platform_id?: string;',
      "purposes?: 'charges' | 'payouts' | 'billing'[];",
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create\n\n`client.embed.linkedBankAccounts.create(account_id: string, bank_account: { account_holder: string; account_number: string; routing_number: string; }, description?: string, metadata?: object, platform_id?: string, purposes?: 'charges' | 'payouts' | 'billing'[], correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/linked_bank_accounts`\n\nCreates a new linked bank account associated with a Straddle account. This endpoint allows you to associate external bank accounts with a Straddle account for various payment operations such as payment deposits, payout withdrawals, and more.\n\n### Parameters\n\n- `account_id: string`\n  The unique identifier of the Straddle account to associate this bank account with.\n\n- `bank_account: { account_holder: string; account_number: string; routing_number: string; }`\n  - `account_holder: string`\n    The name of the account holder as it appears on the bank account. Typically, this is the legal name of the business associated with the account.\n  - `account_number: string`\n    The bank account number.\n  - `routing_number: string`\n    The routing number of the bank account.\n\n- `description?: string`\n  Optional description for the bank account.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the linked bank account in a structured format.\n\n- `platform_id?: string`\n  The unique identifier of the Straddle Platform to associate this bank account with.\n\n- `purposes?: 'charges' | 'payouts' | 'billing'[]`\n  The purposes for the linked bank account.\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst linkedBankAccountV1 = await client.embed.linkedBankAccounts.create({\n  account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  bank_account: {\n  account_holder: 'account_holder',\n  account_number: 'account_number',\n  routing_number: 'xxxxxxxxx',\n},\n});\n\nconsole.log(linkedBankAccountV1);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/linked_bank_accounts/{linked_bank_account_id}',
    httpMethod: 'put',
    summary: 'Update a linked bank account',
    description:
      "Updates an existing linked bank account's information. This can be used to update account details during onboarding or to update metadata associated with the linked account. The linked bank account must be in 'created' or 'onboarding' status.",
    stainlessPath: '(resource) embed.linked_bank_accounts > (method) update',
    qualified: 'client.embed.linkedBankAccounts.update',
    params: [
      'linked_bank_account_id: string;',
      'bank_account: { account_holder: string; account_number: string; routing_number: string; };',
      'metadata?: object;',
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## update\n\n`client.embed.linkedBankAccounts.update(linked_bank_account_id: string, bank_account: { account_holder: string; account_number: string; routing_number: string; }, metadata?: object, correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/linked_bank_accounts/{linked_bank_account_id}`\n\nUpdates an existing linked bank account's information. This can be used to update account details during onboarding or to update metadata associated with the linked account. The linked bank account must be in 'created' or 'onboarding' status.\n\n### Parameters\n\n- `linked_bank_account_id: string`\n\n- `bank_account: { account_holder: string; account_number: string; routing_number: string; }`\n  - `account_holder: string`\n    The name of the account holder as it appears on the bank account. Typically, this is the legal name of the business associated with the account.\n  - `account_number: string`\n    The bank account number.\n  - `routing_number: string`\n    The routing number of the bank account.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the linked bank account in a structured format.\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst linkedBankAccountV1 = await client.embed.linkedBankAccounts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { bank_account: {\n  account_holder: 'account_holder',\n  account_number: 'account_number',\n  routing_number: 'xxxxxxxxx',\n} });\n\nconsole.log(linkedBankAccountV1);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/linked_bank_accounts',
    httpMethod: 'get',
    summary: 'List linked bank accounts',
    description:
      'Returns a list of bank accounts associated with a specific Straddle account. The linked bank accounts are returned sorted by creation date, with the most recently created appearing first. This endpoint supports pagination to handle accounts with multiple linked bank accounts.',
    stainlessPath: '(resource) embed.linked_bank_accounts > (method) list',
    qualified: 'client.embed.linkedBankAccounts.list',
    params: [
      'account_id?: string;',
      "level?: 'account' | 'platform';",
      'page_number?: number;',
      'page_size?: number;',
      "purpose?: 'charges' | 'payouts' | 'billing';",
      'sort_by?: string;',
      "sort_order?: 'asc' | 'desc';",
      "status?: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled';",
      'correlation-id?: string;',
      'request-id?: string;',
    ],
    response:
      "{ id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }",
    markdown:
      "## list\n\n`client.embed.linkedBankAccounts.list(account_id?: string, level?: 'account' | 'platform', page_number?: number, page_size?: number, purpose?: 'charges' | 'payouts' | 'billing', sort_by?: string, sort_order?: 'asc' | 'desc', status?: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled', correlation-id?: string, request-id?: string): { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }`\n\n**get** `/v1/linked_bank_accounts`\n\nReturns a list of bank accounts associated with a specific Straddle account. The linked bank accounts are returned sorted by creation date, with the most recently created appearing first. This endpoint supports pagination to handle accounts with multiple linked bank accounts.\n\n### Parameters\n\n- `account_id?: string`\n  The unique identifier of the related account.\n\n- `level?: 'account' | 'platform'`\n\n- `page_number?: number`\n  Results page number. Starts at page 1.\n\n- `page_size?: number`\n  Page size. Max value: 1000\n\n- `purpose?: 'charges' | 'payouts' | 'billing'`\n  The purpose of the linked bank accounts to return. Possible values: 'charges', 'payouts', 'billing'.\n\n- `sort_by?: string`\n  Sort By.\n\n- `sort_order?: 'asc' | 'desc'`\n  Sort Order.\n\n- `status?: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'`\n  The status of the linked bank accounts to return. Possible values: 'created', 'onboarding', 'active', 'inactive', 'rejected'.\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }`\n\n  - `id: string`\n  - `account_id: string`\n  - `bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }`\n  - `created_at: string`\n  - `purposes: 'charges' | 'payouts' | 'billing'[]`\n  - `status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'`\n  - `status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }`\n  - `updated_at: string`\n  - `description?: string`\n  - `metadata?: object`\n  - `platform_id?: string`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\n// Automatically fetches more pages as needed.\nfor await (const linkedBankAccount of client.embed.linkedBankAccounts.list()) {\n  console.log(linkedBankAccount);\n}\n```",
  },
  {
    name: 'cancel',
    endpoint: '/v1/linked_bank_accounts/{linked_bank_account_id}/cancel',
    httpMethod: 'patch',
    summary: 'Cancel a linked bank account',
    description:
      "Cancels an existing linked bank account. This can be used to cancel a linked bank account before it has been reviewed. The linked bank account must be in 'created' status.",
    stainlessPath: '(resource) embed.linked_bank_accounts > (method) cancel',
    qualified: 'client.embed.linkedBankAccounts.cancel',
    params: [
      'linked_bank_account_id: string;',
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## cancel\n\n`client.embed.linkedBankAccounts.cancel(linked_bank_account_id: string, correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**patch** `/v1/linked_bank_accounts/{linked_bank_account_id}/cancel`\n\nCancels an existing linked bank account. This can be used to cancel a linked bank account before it has been reviewed. The linked bank account must be in 'created' status.\n\n### Parameters\n\n- `linked_bank_account_id: string`\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst linkedBankAccountV1 = await client.embed.linkedBankAccounts.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(linkedBankAccountV1);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/linked_bank_accounts/{linked_bank_account_id}',
    httpMethod: 'get',
    summary: 'Lookup a linked bank account',
    description:
      'Retrieves the details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information. The response includes masked account details for security purposes.',
    stainlessPath: '(resource) embed.linked_bank_accounts > (method) get',
    qualified: 'client.embed.linkedBankAccounts.get',
    params: ['linked_bank_account_id: string;', 'correlation-id?: string;', 'request-id?: string;'],
    response:
      "{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.embed.linkedBankAccounts.get(linked_bank_account_id: string, correlation-id?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/linked_bank_accounts/{linked_bank_account_id}`\n\nRetrieves the details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information. The response includes masked account details for security purposes.\n\n### Parameters\n\n- `linked_bank_account_id: string`\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; bank_account: { account_holder: string; account_mask: string; institution_name: string; routing_number: string; }; created_at: string; purposes: 'charges' | 'payouts' | 'billing'[]; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; description?: string; metadata?: object; platform_id?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst linkedBankAccountV1 = await client.embed.linkedBankAccounts.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(linkedBankAccountV1);\n```",
  },
  {
    name: 'unmask',
    endpoint: '/v1/linked_bank_accounts/{linked_bank_account_id}/unmask',
    httpMethod: 'get',
    summary: 'Unmask a linked bank account',
    description:
      'Retrieves the unmasked details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information, including sensitive details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.',
    stainlessPath: '(resource) embed.linked_bank_accounts > (method) unmask',
    qualified: 'client.embed.linkedBankAccounts.unmask',
    params: ['linked_bank_account_id: string;', 'correlation-id?: string;', 'request-id?: string;'],
    response:
      "{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_number: string; institution_name: string; routing_number: string; }; created_at: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## unmask\n\n`client.embed.linkedBankAccounts.unmask(linked_bank_account_id: string, correlation-id?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/linked_bank_accounts/{linked_bank_account_id}/unmask`\n\nRetrieves the unmasked details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information, including sensitive details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.\n\n### Parameters\n\n- `linked_bank_account_id: string`\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; bank_account: { account_holder: string; account_number: string; institution_name: string; routing_number: string; }; created_at: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; bank_account: { account_holder: string; account_number: string; institution_name: string; routing_number: string; }; created_at: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst linkedBankAccountUnmaskV1 = await client.embed.linkedBankAccounts.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(linkedBankAccountUnmaskV1);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/organizations',
    httpMethod: 'post',
    summary: 'Create an organization',
    description:
      'Creates a new organization related to your Straddle integration. Organizations can be used to group related accounts and manage permissions across multiple users.',
    stainlessPath: '(resource) embed.organizations > (method) create',
    qualified: 'client.embed.organizations.create',
    params: [
      'name: string;',
      'external_id?: string;',
      'metadata?: object;',
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; created_at: string; name: string; updated_at: string; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create\n\n`client.embed.organizations.create(name: string, external_id?: string, metadata?: object, correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/organizations`\n\nCreates a new organization related to your Straddle integration. Organizations can be used to group related accounts and manage permissions across multiple users.\n\n### Parameters\n\n- `name: string`\n  The name of the organization.\n\n- `external_id?: string`\n  Unique identifier for the organization in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the organization in a structured format.\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; name: string; updated_at: string; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; created_at: string; name: string; updated_at: string; external_id?: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst organizationV1 = await client.embed.organizations.create({ name: 'name' });\n\nconsole.log(organizationV1);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/organizations',
    httpMethod: 'get',
    summary: 'List organizations',
    description:
      'Retrieves a list of organizations associated with your Straddle integration. The organizations are returned sorted by creation date, with the most recently created organizations appearing first. This endpoint supports advanced sorting and filtering options to help you find specific organizations.',
    stainlessPath: '(resource) embed.organizations > (method) list',
    qualified: 'client.embed.organizations.list',
    params: [
      'external_id?: string;',
      'name?: string;',
      'page_number?: number;',
      'page_size?: number;',
      'sort_by?: string;',
      "sort_order?: 'asc' | 'desc';",
      'correlation-id?: string;',
      'request-id?: string;',
    ],
    response:
      '{ id: string; created_at: string; name: string; updated_at: string; external_id?: string; metadata?: object; }',
    markdown:
      "## list\n\n`client.embed.organizations.list(external_id?: string, name?: string, page_number?: number, page_size?: number, sort_by?: string, sort_order?: 'asc' | 'desc', correlation-id?: string, request-id?: string): { id: string; created_at: string; name: string; updated_at: string; external_id?: string; metadata?: object; }`\n\n**get** `/v1/organizations`\n\nRetrieves a list of organizations associated with your Straddle integration. The organizations are returned sorted by creation date, with the most recently created organizations appearing first. This endpoint supports advanced sorting and filtering options to help you find specific organizations.\n\n### Parameters\n\n- `external_id?: string`\n  List organizations by their external ID.\n\n- `name?: string`\n  List organizations by name (partial match supported).\n\n- `page_number?: number`\n  Results page number. Starts at page 1.\n\n- `page_size?: number`\n  Page size. Max value: 1000\n\n- `sort_by?: string`\n  Sort By.\n\n- `sort_order?: 'asc' | 'desc'`\n  Sort Order.\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ id: string; created_at: string; name: string; updated_at: string; external_id?: string; metadata?: object; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `name: string`\n  - `updated_at: string`\n  - `external_id?: string`\n  - `metadata?: object`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\n// Automatically fetches more pages as needed.\nfor await (const organization of client.embed.organizations.list()) {\n  console.log(organization);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/organizations/{organization_id}',
    httpMethod: 'get',
    summary: 'Retrieve organization details',
    description:
      'Retrieves the details of an Organization that has previously been created. Supply the unique organization ID that was returned from your previous request, and Straddle will return the corresponding organization information.',
    stainlessPath: '(resource) embed.organizations > (method) get',
    qualified: 'client.embed.organizations.get',
    params: ['organization_id: string;', 'correlation-id?: string;', 'request-id?: string;'],
    response:
      "{ data: { id: string; created_at: string; name: string; updated_at: string; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.embed.organizations.get(organization_id: string, correlation-id?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/organizations/{organization_id}`\n\nRetrieves the details of an Organization that has previously been created. Supply the unique organization ID that was returned from your previous request, and Straddle will return the corresponding organization information.\n\n### Parameters\n\n- `organization_id: string`\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; name: string; updated_at: string; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; created_at: string; name: string; updated_at: string; external_id?: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst organizationV1 = await client.embed.organizations.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(organizationV1);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/representatives',
    httpMethod: 'post',
    summary: 'Create a representative',
    description:
      'Creates a new representative associated with an account. Representatives are individuals who have legal authority or significant responsibility within the business.',
    stainlessPath: '(resource) embed.representatives > (method) create',
    qualified: 'client.embed.representatives.create',
    params: [
      'account_id: string;',
      'dob: string;',
      'email: string;',
      'first_name: string;',
      'last_name: string;',
      'mobile_number: string;',
      'relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; };',
      'ssn_last4: string;',
      'external_id?: string;',
      'metadata?: object;',
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create\n\n`client.embed.representatives.create(account_id: string, dob: string, email: string, first_name: string, last_name: string, mobile_number: string, relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }, ssn_last4: string, external_id?: string, metadata?: object, correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/representatives`\n\nCreates a new representative associated with an account. Representatives are individuals who have legal authority or significant responsibility within the business.\n\n### Parameters\n\n- `account_id: string`\n  The unique identifier of the account this representative is associated with.\n\n- `dob: string`\n  Date of birth for the representative in ISO 8601 format (YYYY-MM-DD).\n\n- `email: string`\n  The company email address of the representative.\n\n- `first_name: string`\n  The first name of the representative.\n\n- `last_name: string`\n  The last name of the representative.\n\n- `mobile_number: string`\n  The mobile phone number of the representative.\n\n- `relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }`\n  - `control: boolean`\n    Whether the representative has significant responsibility to control, manage, or direct the organization. One representative must be identified under the control prong for each legal entity.\n  - `owner: boolean`\n    Whether the representative owns any percentage of of the equity interests of the legal entity.\n  - `primary: boolean`\n    Whether the person is authorized as the primary representative of the account. This is the person chosen by the business to provide information about themselves, general information about the account, and who consented to the services agreement. \n\n There can be only one primary representative for an account at a time.\n  - `percent_ownership?: number`\n    The percentage of ownership the representative has. Required if 'Owner' is true.\n  - `title?: string`\n    The job title of the representative.\n\n- `ssn_last4: string`\n  The last 4 digits of the representative's Social Security Number.\n\n- `external_id?: string`\n  Unique identifier for the representative in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the represetative in a structured format.\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst representative = await client.embed.representatives.create({\n  account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  dob: '1980-01-01',\n  email: 'ron.swanson@pawnee.com',\n  first_name: 'first_name',\n  last_name: 'last_name',\n  mobile_number: '+12128675309',\n  relationship: {\n  control: true,\n  owner: true,\n  primary: true,\n},\n  ssn_last4: '1234',\n});\n\nconsole.log(representative);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/representatives/{representative_id}',
    httpMethod: 'put',
    summary: 'Update a representative',
    description:
      "Updates an existing representative's information. This can be used to update personal details, contact information, or the relationship to the account or organization.",
    stainlessPath: '(resource) embed.representatives > (method) update',
    qualified: 'client.embed.representatives.update',
    params: [
      'representative_id: string;',
      'dob: string;',
      'email: string;',
      'first_name: string;',
      'last_name: string;',
      'mobile_number: string;',
      'relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; };',
      'ssn_last4: string;',
      'external_id?: string;',
      'metadata?: object;',
      'correlation-id?: string;',
      'idempotency-key?: string;',
      'request-id?: string;',
    ],
    response:
      "{ data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## update\n\n`client.embed.representatives.update(representative_id: string, dob: string, email: string, first_name: string, last_name: string, mobile_number: string, relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }, ssn_last4: string, external_id?: string, metadata?: object, correlation-id?: string, idempotency-key?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/representatives/{representative_id}`\n\nUpdates an existing representative's information. This can be used to update personal details, contact information, or the relationship to the account or organization.\n\n### Parameters\n\n- `representative_id: string`\n\n- `dob: string`\n  The date of birth of the representative, in ISO 8601 format (YYYY-MM-DD).\n\n- `email: string`\n  The email address of the representative.\n\n- `first_name: string`\n  The first name of the representative.\n\n- `last_name: string`\n  The last name of the representative.\n\n- `mobile_number: string`\n  The mobile phone number of the representative.\n\n- `relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }`\n  - `control: boolean`\n    Whether the representative has significant responsibility to control, manage, or direct the organization. One representative must be identified under the control prong for each legal entity.\n  - `owner: boolean`\n    Whether the representative owns any percentage of of the equity interests of the legal entity.\n  - `primary: boolean`\n    Whether the person is authorized as the primary representative of the account. This is the person chosen by the business to provide information about themselves, general information about the account, and who consented to the services agreement. \n\n There can be only one primary representative for an account at a time.\n  - `percent_ownership?: number`\n    The percentage of ownership the representative has. Required if 'Owner' is true.\n  - `title?: string`\n    The job title of the representative.\n\n- `ssn_last4: string`\n  The last 4 digits of the representative's Social Security Number.\n\n- `external_id?: string`\n  Unique identifier for the representative in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the represetative in a structured format.\n\n- `correlation-id?: string`\n\n- `idempotency-key?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst representative = await client.embed.representatives.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  dob: '1980-01-01',\n  email: 'ron.swanson@pawnee.com',\n  first_name: 'Ron',\n  last_name: 'Swanson',\n  mobile_number: '+12128675309',\n  relationship: {\n  control: true,\n  owner: true,\n  primary: true,\n},\n  ssn_last4: '1234',\n});\n\nconsole.log(representative);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/representatives',
    httpMethod: 'get',
    summary: 'List representatives',
    description:
      'Returns a list of representatives associated with a specific account or organization. The representatives are returned sorted by creation date, with the most recently created representatives appearing first. This endpoint supports advanced sorting and filtering options.',
    stainlessPath: '(resource) embed.representatives > (method) list',
    qualified: 'client.embed.representatives.list',
    params: [
      'account_id?: string;',
      "level?: 'account' | 'platform';",
      'organization_id?: string;',
      'page_number?: number;',
      'page_size?: number;',
      'platform_id?: string;',
      'sort_by?: string;',
      "sort_order?: 'asc' | 'desc';",
      'correlation-id?: string;',
      'request-id?: string;',
    ],
    response:
      "{ id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }",
    markdown:
      "## list\n\n`client.embed.representatives.list(account_id?: string, level?: 'account' | 'platform', organization_id?: string, page_number?: number, page_size?: number, platform_id?: string, sort_by?: string, sort_order?: 'asc' | 'desc', correlation-id?: string, request-id?: string): { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }`\n\n**get** `/v1/representatives`\n\nReturns a list of representatives associated with a specific account or organization. The representatives are returned sorted by creation date, with the most recently created representatives appearing first. This endpoint supports advanced sorting and filtering options.\n\n### Parameters\n\n- `account_id?: string`\n  The unique identifier of the account to list representatives for.\n\n- `level?: 'account' | 'platform'`\n\n- `organization_id?: string`\n\n- `page_number?: number`\n  Results page number. Starts at page 1.\n\n- `page_size?: number`\n  Page size. Max value: 1000\n\n- `platform_id?: string`\n\n- `sort_by?: string`\n  Sort By.\n\n- `sort_order?: 'asc' | 'desc'`\n  Sort Order.\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }`\n\n  - `id: string`\n  - `account_id: string`\n  - `created_at: string`\n  - `dob: string`\n  - `email: string`\n  - `first_name: string`\n  - `last_name: string`\n  - `mobile_number: string`\n  - `name: string`\n  - `relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }`\n  - `ssn_last4: string`\n  - `status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'`\n  - `status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }`\n  - `updated_at: string`\n  - `external_id?: string`\n  - `metadata?: object`\n  - `phone?: string`\n  - `user_id?: string`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\n// Automatically fetches more pages as needed.\nfor await (const representative of client.embed.representatives.list()) {\n  console.log(representative);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/representatives/{representative_id}',
    httpMethod: 'get',
    summary: 'Lookup a representative',
    description:
      'Retrieves the details of an existing representative. Supply the unique representative ID, and Straddle will return the corresponding representative information.',
    stainlessPath: '(resource) embed.representatives > (method) get',
    qualified: 'client.embed.representatives.get',
    params: ['representative_id: string;', 'correlation-id?: string;', 'request-id?: string;'],
    response:
      "{ data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.embed.representatives.get(representative_id: string, correlation-id?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/representatives/{representative_id}`\n\nRetrieves the details of an existing representative. Supply the unique representative ID, and Straddle will return the corresponding representative information.\n\n### Parameters\n\n- `representative_id: string`\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst representative = await client.embed.representatives.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(representative);\n```",
  },
  {
    name: 'unmask',
    endpoint: '/v1/representatives/{representative_id}/unmask',
    httpMethod: 'get',
    summary: 'Retrieve unmasked representative details',
    description:
      'Retrieves the unmasked details of a representative that has previously been created. Supply the unique representative ID, and Straddle will return the corresponding representative information, including sensitive details. This endpoint requires additional authentication and should be used with caution.',
    stainlessPath: '(resource) embed.representatives > (method) unmask',
    qualified: 'client.embed.representatives.unmask',
    params: ['representative_id: string;', 'correlation-id?: string;', 'request-id?: string;'],
    response:
      "{ data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## unmask\n\n`client.embed.representatives.unmask(representative_id: string, correlation-id?: string, request-id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/representatives/{representative_id}/unmask`\n\nRetrieves the unmasked details of a representative that has previously been created. Supply the unique representative ID, and Straddle will return the corresponding representative information, including sensitive details. This endpoint requires additional authentication and should be used with caution.\n\n### Parameters\n\n- `representative_id: string`\n\n- `correlation-id?: string`\n\n- `request-id?: string`\n\n### Returns\n\n- `{ data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; account_id: string; created_at: string; dob: string; email: string; first_name: string; last_name: string; mobile_number: string; name: string; relationship: { control: boolean; owner: boolean; primary: boolean; percent_ownership?: number; title?: string; }; ssn_last4: string; status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive'; status_detail: { code: string; message: string; reason: string; source: 'watchtower'; }; updated_at: string; external_id?: string; metadata?: object; phone?: string; user_id?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst representative = await client.embed.representatives.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(representative);\n```",
  },
  {
    name: 'initialize',
    endpoint: '/v1/bridge/initialize',
    httpMethod: 'post',
    summary: 'Create a Widget session token',
    description: 'Use this endpoint to generate a session token for use in the Bridge widget.',
    stainlessPath: '(resource) bridge > (method) initialize',
    qualified: 'client.bridge.initialize',
    params: [
      'customer_id: string;',
      "config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; };",
      'external_id?: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { bridge_token: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## initialize\n\n`client.bridge.initialize(customer_id: string, config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }, external_id?: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/bridge/initialize`\n\nUse this endpoint to generate a session token for use in the Bridge widget.\n\n### Parameters\n\n- `customer_id: string`\n  The Straddle generated unique identifier of the `customer` to create a bridge token for.\n\n- `config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }`\n  - `processing_method?: 'inline' | 'background' | 'skip'`\n  - `sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'`\n\n- `external_id?: string`\n  Unique identifier for the paykey in your database, used for cross-referencing between Straddle and your systems.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { bridge_token: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { bridge_token: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst bridgeTokenV1 = await client.bridge.initialize({ customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(bridgeTokenV1);\n```",
  },
  {
    name: 'bank_account',
    endpoint: '/v1/bridge/bank_account',
    httpMethod: 'post',
    summary: 'Bridge a bank account',
    description:
      'Use Bridge to create a new paykey using a bank routing and account number as the source. This endpoint allows you to create a secure payment token linked to a specific bank account.',
    stainlessPath: '(resource) bridge.link > (method) bank_account',
    qualified: 'client.bridge.link.bankAccount',
    params: [
      'account_number: string;',
      "account_type: 'checking' | 'savings';",
      'customer_id: string;',
      'routing_number: string;',
      "config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; };",
      'external_id?: string;',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## bank_account\n\n`client.bridge.link.bankAccount(account_number: string, account_type: 'checking' | 'savings', customer_id: string, routing_number: string, config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }, external_id?: string, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/bridge/bank_account`\n\nUse Bridge to create a new paykey using a bank routing and account number as the source. This endpoint allows you to create a secure payment token linked to a specific bank account.\n\n### Parameters\n\n- `account_number: string`\n  The bank account number.\n\n- `account_type: 'checking' | 'savings'`\n\n- `customer_id: string`\n  Unique identifier of the related customer object.\n\n- `routing_number: string`\n  The routing number of the bank account.\n\n- `config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }`\n  - `processing_method?: 'inline' | 'background' | 'skip'`\n  - `sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'`\n\n- `external_id?: string`\n  Unique identifier for the paykey in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the paykey in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst paykeyV1 = await client.bridge.link.bankAccount({\n  account_number: 'account_number',\n  account_type: 'checking',\n  customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  routing_number: 'xxxxxxxxx',\n});\n\nconsole.log(paykeyV1);\n```",
  },
  {
    name: 'create_paykey',
    endpoint: '/v1/bridge/quiltt',
    httpMethod: 'post',
    summary: 'Create a paykey from a Quiltt token',
    description:
      'Creates a new paykey using a Quiltt token as the source. This endpoint allows you to create a secure payment token linked to a bank account authenticated through Quiltt.',
    stainlessPath: '(resource) bridge.link > (method) create_paykey',
    qualified: 'client.bridge.link.createPaykey',
    params: [
      'customer_id: string;',
      'quiltt_token: string;',
      "config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; };",
      'external_id?: string;',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create_paykey\n\n`client.bridge.link.createPaykey(customer_id: string, quiltt_token: string, config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }, external_id?: string, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/bridge/quiltt`\n\nCreates a new paykey using a Quiltt token as the source. This endpoint allows you to create a secure payment token linked to a bank account authenticated through Quiltt.\n\n### Parameters\n\n- `customer_id: string`\n  Unique identifier of the related customer object.\n\n- `quiltt_token: string`\n  Quiltt processor token generated by your application for use with the Straddle API.\n\n- `config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }`\n  - `processing_method?: 'inline' | 'background' | 'skip'`\n  - `sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'`\n\n- `external_id?: string`\n  Unique identifier for the paykey in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the paykey in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst response = await client.bridge.link.createPaykey({ customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', quiltt_token: 'quiltt_token' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_tan',
    endpoint: '/v1/bridge/tan',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) bridge.link > (method) create_tan',
    qualified: 'client.bridge.link.createTan',
    params: [
      "account_type: 'checking' | 'savings';",
      'customer_id: string;',
      'routing_number: string;',
      'tan: string;',
      "config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; };",
      'external_id?: string;',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create_tan\n\n`client.bridge.link.createTan(account_type: 'checking' | 'savings', customer_id: string, routing_number: string, tan: string, config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }, external_id?: string, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/bridge/tan`\n\n### Parameters\n\n- `account_type: 'checking' | 'savings'`\n\n- `customer_id: string`\n  Unique identifier of the related customer object.\n\n- `routing_number: string`\n  Bank routing number.\n\n- `tan: string`\n  Tokenized account number.\n\n- `config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }`\n  - `processing_method?: 'inline' | 'background' | 'skip'`\n  - `sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'`\n\n- `external_id?: string`\n  Unique identifier for the paykey in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the paykey in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst response = await client.bridge.link.createTan({\n  account_type: 'checking',\n  customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  routing_number: 'routing_number',\n  tan: 'tan',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'plaid',
    endpoint: '/v1/bridge/plaid',
    httpMethod: 'post',
    summary: 'Bridge a Plaid token',
    description:
      'Use Bridge to create a new paykey using a Plaid token as the source. This endpoint allows you to create a secure payment token linked to a bank account authenticated through Plaid.',
    stainlessPath: '(resource) bridge.link > (method) plaid',
    qualified: 'client.bridge.link.plaid',
    params: [
      'customer_id: string;',
      'plaid_token: string;',
      "config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; };",
      'external_id?: string;',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## plaid\n\n`client.bridge.link.plaid(customer_id: string, plaid_token: string, config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }, external_id?: string, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/bridge/plaid`\n\nUse Bridge to create a new paykey using a Plaid token as the source. This endpoint allows you to create a secure payment token linked to a bank account authenticated through Plaid.\n\n### Parameters\n\n- `customer_id: string`\n  Unique identifier of the related customer object.\n\n- `plaid_token: string`\n  Plaid processor token generated by your application for use with the Straddle API.\n\n- `config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }`\n  - `processing_method?: 'inline' | 'background' | 'skip'`\n  - `sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'`\n\n- `external_id?: string`\n  Unique identifier for the paykey in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the paykey in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst paykeyV1 = await client.bridge.link.plaid({ customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', plaid_token: 'plaid_token' });\n\nconsole.log(paykeyV1);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/customers',
    httpMethod: 'post',
    summary: 'Create a customer',
    description:
      'Creates a new customer record and automatically initiates identity, fraud, and risk assessment scores. This endpoint allows you to create a customer profile and associate it with paykeys and payments.',
    stainlessPath: '(resource) customers > (method) create',
    qualified: 'client.customers.create',
    params: [
      'device: { ip_address: string; };',
      'email: string;',
      'name: string;',
      'phone: string;',
      "type: 'individual' | 'business';",
      'address?: { address1: string; city: string; state: string; zip: string; address2?: string; };',
      'compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; };',
      "config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; };",
      'external_id?: string;',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create\n\n`client.customers.create(device: { ip_address: string; }, email: string, name: string, phone: string, type: 'individual' | 'business', address?: { address1: string; city: string; state: string; zip: string; address2?: string; }, compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }, config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }, external_id?: string, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/customers`\n\nCreates a new customer record and automatically initiates identity, fraud, and risk assessment scores. This endpoint allows you to create a customer profile and associate it with paykeys and payments.\n\n### Parameters\n\n- `device: { ip_address: string; }`\n  - `ip_address: string`\n    The customer's IP address at the time of profile creation. Use `0.0.0.0` to represent an offline customer registration.\n\n- `email: string`\n  The customer's email address.\n\n- `name: string`\n  Full name of the individual or business name.\n\n- `phone: string`\n  The customer's phone number in E.164 format. Mobile number is preferred.\n\n- `type: 'individual' | 'business'`\n\n- `address?: { address1: string; city: string; state: string; zip: string; address2?: string; }`\n  An object containing the customer's address. **This is optional.** If used, all required fields must be present.\n  - `address1: string`\n    Primary address line (e.g., street, PO Box).\n  - `city: string`\n    City, district, suburb, town, or village.\n  - `state: string`\n    Two-letter state code.\n  - `zip: string`\n    Zip or postal code.\n  - `address2?: string`\n    Secondary address line (e.g., apartment, suite, unit, or building).\n\n- `compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }`\n  An object containing the customer's compliance profile. **This is optional.** If all required fields must be present for the appropriate customer type.\n\n- `config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }`\n  - `processing_method?: 'inline' | 'background' | 'skip'`\n  - `sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'`\n\n- `external_id?: string`\n  Unique identifier for the customer in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the customer in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: { address1: string; city: string; state: string; zip: string; address2?: string; }; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst customerV1 = await client.customers.create({\n  device: { ip_address: '192.168.1.1' },\n  email: 'ron.swanson@pawnee.com',\n  name: 'Ron Swanson',\n  phone: '+12128675309',\n  type: 'individual',\n});\n\nconsole.log(customerV1);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/customers/{id}',
    httpMethod: 'put',
    summary: 'Update a customer',
    description:
      "Updates an existing customer's information. This endpoint allows you to modify the customer's contact details, PII, and metadata.",
    stainlessPath: '(resource) customers > (method) update',
    qualified: 'client.customers.update',
    params: [
      'id: string;',
      'device: { ip_address: string; };',
      'email: string;',
      'name: string;',
      'phone: string;',
      "status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';",
      'address?: { address1: string; city: string; state: string; zip: string; address2?: string; };',
      'compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; };',
      'external_id?: string;',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## update\n\n`client.customers.update(id: string, device: { ip_address: string; }, email: string, name: string, phone: string, status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected', address?: { address1: string; city: string; state: string; zip: string; address2?: string; }, compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }, external_id?: string, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/customers/{id}`\n\nUpdates an existing customer's information. This endpoint allows you to modify the customer's contact details, PII, and metadata.\n\n### Parameters\n\n- `id: string`\n\n- `device: { ip_address: string; }`\n  - `ip_address: string`\n    The customer's IP address at the time of profile creation. Use `0.0.0.0` to represent an offline customer registration.\n\n- `email: string`\n  The customer's email address.\n\n- `name: string`\n  The customer's full name or business name.\n\n- `phone: string`\n  The customer's phone number in E.164 format.\n\n- `status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'`\n\n- `address?: { address1: string; city: string; state: string; zip: string; address2?: string; }`\n  An object containing the customer's address. This is optional, but if provided, all required fields must be present.\n  - `address1: string`\n    Primary address line (e.g., street, PO Box).\n  - `city: string`\n    City, district, suburb, town, or village.\n  - `state: string`\n    Two-letter state code.\n  - `zip: string`\n    Zip or postal code.\n  - `address2?: string`\n    Secondary address line (e.g., apartment, suite, unit, or building).\n\n- `compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }`\n  Individual PII data required to trigger Patriot Act compliant KYC verification.\n\n- `external_id?: string`\n  Unique identifier for the customer in your database, used for cross-referencing between Straddle and your systems.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the customer in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: { address1: string; city: string; state: string; zip: string; address2?: string; }; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst customerV1 = await client.customers.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  device: { ip_address: '192.168.1.1' },\n  email: 'dev@stainless.com',\n  name: 'name',\n  phone: '+46991022',\n  status: 'pending',\n});\n\nconsole.log(customerV1);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/customers',
    httpMethod: 'get',
    summary: 'List customers',
    description:
      'Lists or searches customers connected to your account. All supported query parameters are optional. If none are provided, the response will include all customers connected to your account. This endpoint supports advanced sorting and filtering options.',
    stainlessPath: '(resource) customers > (method) list',
    qualified: 'client.customers.list',
    params: [
      'created_from?: string;',
      'created_to?: string;',
      'email?: string;',
      'external_id?: string;',
      'name?: string;',
      'page_number?: number;',
      'page_size?: number;',
      'search_text?: string;',
      "sort_by?: 'name' | 'created_at';",
      "sort_order?: 'asc' | 'desc';",
      "status?: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'[];",
      "types?: 'individual' | 'business'[];",
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; external_id?: string; }",
    markdown:
      "## list\n\n`client.customers.list(created_from?: string, created_to?: string, email?: string, external_id?: string, name?: string, page_number?: number, page_size?: number, search_text?: string, sort_by?: 'name' | 'created_at', sort_order?: 'asc' | 'desc', status?: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'[], types?: 'individual' | 'business'[], Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; external_id?: string; }`\n\n**get** `/v1/customers`\n\nLists or searches customers connected to your account. All supported query parameters are optional. If none are provided, the response will include all customers connected to your account. This endpoint supports advanced sorting and filtering options.\n\n### Parameters\n\n- `created_from?: string`\n  Start date for filtering by `created_at` date.\n\n- `created_to?: string`\n  End date for filtering by `created_at` date.\n\n- `email?: string`\n  Filter customers by `email` address.\n\n- `external_id?: string`\n  Filter by your system's `external_id`.\n\n- `name?: string`\n  Filter customers by `name` (partial match).\n\n- `page_number?: number`\n  Page number for paginated results. Starts at 1.\n\n- `page_size?: number`\n  Number of results per page. Maximum: 1000.\n\n- `search_text?: string`\n  General search term to filter customers.\n\n- `sort_by?: 'name' | 'created_at'`\n\n- `sort_order?: 'asc' | 'desc'`\n\n- `status?: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'[]`\n  Filter customers by their current `status`.\n\n- `types?: 'individual' | 'business'[]`\n  Filter by customer type `individual` or `business`.\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; external_id?: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `email: string`\n  - `name: string`\n  - `phone: string`\n  - `status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'`\n  - `type: 'individual' | 'business'`\n  - `updated_at: string`\n  - `external_id?: string`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\n// Automatically fetches more pages as needed.\nfor await (const customer of client.customers.list()) {\n  console.log(customer);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/customers/{id}',
    httpMethod: 'delete',
    summary: 'Delete a customer',
    description:
      'Permanently removes a customer record from Straddle. This action cannot be undone and should only be used to satisfy regulatory requirements or for privacy compliance.',
    stainlessPath: '(resource) customers > (method) delete',
    qualified: 'client.customers.delete',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## delete\n\n`client.customers.delete(id: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**delete** `/v1/customers/{id}`\n\nPermanently removes a customer record from Straddle. This action cannot be undone and should only be used to satisfy regulatory requirements or for privacy compliance.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: { address1: string; city: string; state: string; zip: string; address2?: string; }; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst customerV1 = await client.customers.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(customerV1);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/customers/{id}',
    httpMethod: 'get',
    summary: 'Lookup a customer',
    description:
      "Retrieves the details of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information.",
    stainlessPath: '(resource) customers > (method) get',
    qualified: 'client.customers.get',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.customers.get(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/customers/{id}`\n\nRetrieves the details of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: { address1: string; city: string; state: string; zip: string; address2?: string; }; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst customerV1 = await client.customers.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(customerV1);\n```",
  },
  {
    name: 'unmasked',
    endpoint: '/v1/customers/{id}/unmasked',
    httpMethod: 'get',
    summary: 'Unmask customer data',
    description:
      "Retrieves the unmasked details, including PII, of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information. This endpoint needs to be enabled by Straddle and should only be used when absolutely necessary.",
    stainlessPath: '(resource) customers > (method) unmasked',
    qualified: 'client.customers.unmasked',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: object; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## unmasked\n\n`client.customers.unmasked(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/customers/{id}/unmasked`\n\nRetrieves the unmasked details, including PII, of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information. This endpoint needs to be enabled by Straddle and should only be used when absolutely necessary.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: object; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: { address1: string; city: string; state: string; zip: string; address2?: string; }; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst customerUnmaskedV1 = await client.customers.unmasked('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(customerUnmaskedV1);\n```",
  },
  {
    name: 'decision',
    endpoint: '/v1/customers/{id}/review',
    httpMethod: 'patch',
    summary: "Update a customer's verification status",
    description:
      "Updates the status of a customer's identity decision. This endpoint allows you to modify the outcome of a customer risk screening and is useful for correcting or updating the status of a customer's verification. Note that this endpoint is only available for customers with a current status of `review`.",
    stainlessPath: '(resource) customers.review > (method) decision',
    qualified: 'client.customers.review.decision',
    params: [
      'id: string;',
      "status: 'verified' | 'rejected';",
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## decision\n\n`client.customers.review.decision(id: string, status: 'verified' | 'rejected', Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**patch** `/v1/customers/{id}/review`\n\nUpdates the status of a customer's identity decision. This endpoint allows you to modify the outcome of a customer risk screening and is useful for correcting or updating the status of a customer's verification. Note that this endpoint is only available for customers with a current status of `review`.\n\n### Parameters\n\n- `id: string`\n\n- `status: 'verified' | 'rejected'`\n  The final status of the customer review.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: { address1: string; city: string; state: string; zip: string; address2?: string; }; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst customerV1 = await client.customers.review.decision('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { status: 'verified' });\n\nconsole.log(customerV1);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/customers/{id}/review',
    httpMethod: 'get',
    summary: "Review a customer's identity results",
    description:
      "Retrieves and analyzes the results of a customer's identity validation and fraud score. This endpoint provides a comprehensive breakdown of the validation outcome, including:\n- Risk and correlation scores\n- Reason codes for the decision\n- Results of watchlist screening\n- Any network alerts detected\nUse this endpoint to gain insights into the verification process and make informed decisions about customer onboarding.",
    stainlessPath: '(resource) customers.review > (method) get',
    qualified: 'client.customers.review.get',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { customer_details: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: customer_address_v1; compliance_profile?: object | object; config?: object; device?: object; external_id?: string; metadata?: object; }; identity_details?: { breakdown: object; created_at: string; decision: 'accept' | 'reject' | 'review'; review_id: string; updated_at: string; kyc?: object; messages?: object; network_alerts?: object; reputation?: object; watch_list?: object; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.customers.review.get(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/customers/{id}/review`\n\nRetrieves and analyzes the results of a customer's identity validation and fraud score. This endpoint provides a comprehensive breakdown of the validation outcome, including:\n- Risk and correlation scores\n- Reason codes for the decision\n- Results of watchlist screening\n- Any network alerts detected\nUse this endpoint to gain insights into the verification process and make informed decisions about customer onboarding.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { customer_details: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: customer_address_v1; compliance_profile?: object | object; config?: object; device?: object; external_id?: string; metadata?: object; }; identity_details?: { breakdown: object; created_at: string; decision: 'accept' | 'reject' | 'review'; review_id: string; updated_at: string; kyc?: object; messages?: object; network_alerts?: object; reputation?: object; watch_list?: object; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { customer_details: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: { address1: string; city: string; state: string; zip: string; address2?: string; }; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; identity_details?: { breakdown: { address?: object; business_evaluation?: object; business_identification?: object; business_validation?: object; email?: object; fraud?: object; phone?: object; synthetic?: object; }; created_at: string; decision: 'accept' | 'reject' | 'review'; review_id: string; updated_at: string; kyc?: { validations: { address?: boolean; city?: boolean; dob?: boolean; email?: boolean; first_name?: boolean; last_name?: boolean; phone?: boolean; ssn?: boolean; state?: boolean; zip?: boolean; }; codes?: string[]; decision?: 'accept' | 'reject' | 'review'; }; messages?: object; network_alerts?: { alerts?: string[]; codes?: string[]; decision?: 'accept' | 'reject' | 'review'; }; reputation?: { codes?: string[]; decision?: 'accept' | 'reject' | 'review'; insights?: { accounts_active_count?: number; accounts_closed_count?: number; accounts_closed_dates?: string[]; accounts_count?: number; accounts_fraud_count?: number; accounts_fraud_labeled_dates?: string[]; accounts_fraud_loss_total_amount?: number; ach_fraud_transactions_count?: number; ach_fraud_transactions_dates?: string[]; ach_fraud_transactions_total_amount?: number; ach_returned_transactions_count?: number; ach_returned_transactions_dates?: string[]; ach_returned_transactions_total_amount?: number; applications_approved_count?: number; applications_count?: number; applications_dates?: string[]; applications_declined_count?: number; applications_fraud_count?: number; card_disputed_transactions_count?: number; card_disputed_transactions_dates?: string[]; card_disputed_transactions_total_amount?: number; card_fraud_transactions_count?: number; card_fraud_transactions_dates?: string[]; card_fraud_transactions_total_amount?: number; card_stopped_transactions_count?: number; card_stopped_transactions_dates?: string[]; user_active_profile_count?: number; user_address_count?: number; user_closed_profile_count?: number; user_dob_count?: number; user_email_count?: number; user_institution_count?: number; user_mobile_count?: number; }; risk_score?: number; }; watch_list?: { codes?: string[]; decision?: 'accept' | 'reject' | 'review'; matched?: string[]; matches?: { correlation: 'low_confidence' | 'potential_match' | 'likely_match' | 'high_confidence'; list_name: string; match_fields: string[]; urls: string[]; }[]; }; }; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst customerReviewV1 = await client.customers.review.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(customerReviewV1);\n```",
  },
  {
    name: 'refresh_review',
    endpoint: '/v1/customers/{id}/refresh_review',
    httpMethod: 'put',
    summary: "Update a customer's identity decision",
    description:
      "Updates the decision of a customer's identity validation. This endpoint allows you to modify the outcome of a customer decision and is useful for correcting or updating the status of a customer's verification.",
    stainlessPath: '(resource) customers.review > (method) refresh_review',
    qualified: 'client.customers.review.refreshReview',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## refresh_review\n\n`client.customers.review.refreshReview(id: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/customers/{id}/refresh_review`\n\nUpdates the decision of a customer's identity validation. This endpoint allows you to modify the outcome of a customer decision and is useful for correcting or updating the status of a customer's verification.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: object; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: object[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; created_at: string; email: string; name: string; phone: string; status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected'; type: 'individual' | 'business'; updated_at: string; address?: { address1: string; city: string; state: string; zip: string; address2?: string; }; compliance_profile?: { dob: string; ssn: string; } | { ein: string; legal_business_name: string; representatives?: { name: string; email?: string; phone?: string; }[]; website?: string; }; config?: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review'; }; device?: { ip_address: string; }; external_id?: string; metadata?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst customerV1 = await client.customers.review.refreshReview('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(customerV1);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/paykeys',
    httpMethod: 'get',
    summary: 'List paykeys',
    description:
      'Returns a list of paykeys associated with a Straddle account. This endpoint supports advanced sorting and filtering options.',
    stainlessPath: '(resource) paykeys > (method) list',
    qualified: 'client.paykeys.list',
    params: [
      'customer_id?: string;',
      'page_number?: number;',
      'page_size?: number;',
      'search_text?: string;',
      "sort_by?: 'institution_name' | 'expires_at' | 'created_at';",
      "sort_order?: 'asc' | 'desc';",
      "source?: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'[];",
      "status?: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'[];",
      'unblock_eligible?: boolean;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }",
    markdown:
      "## list\n\n`client.paykeys.list(customer_id?: string, page_number?: number, page_size?: number, search_text?: string, sort_by?: 'institution_name' | 'expires_at' | 'created_at', sort_order?: 'asc' | 'desc', source?: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'[], status?: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'[], unblock_eligible?: boolean, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }`\n\n**get** `/v1/paykeys`\n\nReturns a list of paykeys associated with a Straddle account. This endpoint supports advanced sorting and filtering options.\n\n### Parameters\n\n- `customer_id?: string`\n  Filter paykeys by related customer ID.\n\n- `page_number?: number`\n  Page number for paginated results. Starts at 1.\n\n- `page_size?: number`\n  Number of results per page. Maximum: 1000.\n\n- `search_text?: string`\n  General search term to filter paykeys.\n\n- `sort_by?: 'institution_name' | 'expires_at' | 'created_at'`\n\n- `sort_order?: 'asc' | 'desc'`\n\n- `source?: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'[]`\n  Filter paykeys by their source.\n\n- `status?: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'[]`\n  Filter paykeys by their current status.\n\n- `unblock_eligible?: boolean`\n  Filter paykeys by unblock eligibility. When true, returns only blocked paykeys eligible for client-initiated unblocking (blocked due to R29 returns and not previously unblocked). When false, returns only blocked paykeys that are not eligible for unblocking.\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }`\n\n  - `id: string`\n  - `config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }`\n  - `created_at: string`\n  - `label: string`\n  - `paykey: string`\n  - `source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'`\n  - `status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'`\n  - `updated_at: string`\n  - `bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }`\n  - `customer_id?: string`\n  - `expires_at?: string`\n  - `external_id?: string`\n  - `institution_name?: string`\n  - `status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }`\n  - `unblock_eligible?: boolean`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\n// Automatically fetches more pages as needed.\nfor await (const paykey of client.paykeys.list()) {\n  console.log(paykey);\n}\n```",
  },
  {
    name: 'cancel',
    endpoint: '/v1/paykeys/{id}/cancel',
    httpMethod: 'put',
    summary: '',
    description: '',
    stainlessPath: '(resource) paykeys > (method) cancel',
    qualified: 'client.paykeys.cancel',
    params: [
      'id: string;',
      'reason?: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## cancel\n\n`client.paykeys.cancel(id: string, reason?: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/paykeys/{id}/cancel`\n\n### Parameters\n\n- `id: string`\n\n- `reason?: string`\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst paykeyV1 = await client.paykeys.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyV1);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/paykeys/{id}',
    httpMethod: 'get',
    summary: 'Lookup a paykey',
    description:
      'Retrieves the details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record , including the `paykey` token value and masked bank account details.',
    stainlessPath: '(resource) paykeys > (method) get',
    qualified: 'client.paykeys.get',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.paykeys.get(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/paykeys/{id}`\n\nRetrieves the details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record , including the `paykey` token value and masked bank account details.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst paykeyV1 = await client.paykeys.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyV1);\n```",
  },
  {
    name: 'reveal',
    endpoint: '/v1/paykeys/{id}/reveal',
    httpMethod: 'get',
    summary: 'Retrieve an unmasked paykey token',
    description:
      'Retrieves the details of a paykey that has previously been created. Supply the unique paykey ID that was returned from your previous request, and Straddle will return the corresponding paykey information including the unmasked token.',
    stainlessPath: '(resource) paykeys > (method) reveal',
    qualified: 'client.paykeys.reveal',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## reveal\n\n`client.paykeys.reveal(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/paykeys/{id}/reveal`\n\nRetrieves the details of a paykey that has previously been created. Supply the unique paykey ID that was returned from your previous request, and Straddle will return the corresponding paykey information including the unmasked token.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst response = await client.paykeys.reveal('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'unmasked',
    endpoint: '/v1/paykeys/{id}/unmasked',
    httpMethod: 'get',
    summary: 'Unmask a paykey',
    description:
      'Retrieves the unmasked details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record, including the unmasked bank account details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.',
    stainlessPath: '(resource) paykeys > (method) unmasked',
    qualified: 'client.paykeys.unmasked',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## unmasked\n\n`client.paykeys.unmasked(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/paykeys/{id}/unmasked`\n\nRetrieves the unmasked details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record, including the unmasked bank account details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst paykeyUnmaskedV1 = await client.paykeys.unmasked('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyUnmaskedV1);\n```",
  },
  {
    name: 'update_balance',
    endpoint: '/v1/paykeys/{id}/refresh_balance',
    httpMethod: 'put',
    summary: "Update a paykey's balance",
    description:
      'Updates the balance of a paykey. This endpoint allows you to refresh the balance of a paykey.',
    stainlessPath: '(resource) paykeys > (method) update_balance',
    qualified: 'client.paykeys.updateBalance',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## update_balance\n\n`client.paykeys.updateBalance(id: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/paykeys/{id}/refresh_balance`\n\nUpdates the balance of a paykey. This endpoint allows you to refresh the balance of a paykey.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst paykeyV1 = await client.paykeys.updateBalance('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyV1);\n```",
  },
  {
    name: 'decision',
    endpoint: '/v1/paykeys/{id}/review',
    httpMethod: 'patch',
    summary: "Update a paykey's status ",
    description: 'Update the status of a paykey when in review status',
    stainlessPath: '(resource) paykeys.review > (method) decision',
    qualified: 'client.paykeys.review.decision',
    params: [
      'id: string;',
      "status: 'active' | 'rejected';",
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## decision\n\n`client.paykeys.review.decision(id: string, status: 'active' | 'rejected', Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**patch** `/v1/paykeys/{id}/review`\n\nUpdate the status of a paykey when in review status\n\n### Parameters\n\n- `id: string`\n\n- `status: 'active' | 'rejected'`\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst paykeyV1 = await client.paykeys.review.decision('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { status: 'active' });\n\nconsole.log(paykeyV1);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/paykeys/{id}/review',
    httpMethod: 'get',
    summary: 'Get paykey review details',
    description: 'Get additional details about a paykey.',
    stainlessPath: '(resource) paykeys.review > (method) get',
    qualified: 'client.paykeys.review.get',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { paykey_details: { id: string; config: object; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: object; bank_data?: object; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: object; unblock_eligible?: boolean; }; verification_details?: { id: string; breakdown: object; created_at: string; decision: 'accept' | 'reject' | 'review'; messages: object; updated_at: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.paykeys.review.get(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/paykeys/{id}/review`\n\nGet additional details about a paykey.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { paykey_details: { id: string; config: object; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: object; bank_data?: object; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: object; unblock_eligible?: boolean; }; verification_details?: { id: string; breakdown: object; created_at: string; decision: 'accept' | 'reject' | 'review'; messages: object; updated_at: string; }; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { paykey_details: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; verification_details?: { id: string; breakdown: { account_validation?: { codes: string[]; decision: 'accept' | 'reject' | 'review'; reason?: string; }; name_match?: { codes: string[]; decision: 'accept' | 'reject' | 'review'; correlation_score?: number; customer_name?: string; matched_name?: string; names_on_account?: string[]; reason?: string; }; }; created_at: string; decision: 'accept' | 'reject' | 'review'; messages: object; updated_at: string; }; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst review = await client.paykeys.review.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(review);\n```",
  },
  {
    name: 'refresh_review',
    endpoint: '/v1/paykeys/{id}/refresh_review',
    httpMethod: 'put',
    summary: "Update a paykey's identity review decision",
    description:
      "Updates the decision of a paykey's review validation. This endpoint allows you to refresh the outcome of a paykey's decision and is useful for correcting or updating the status of a paykey's verification.",
    stainlessPath: '(resource) paykeys.review > (method) refresh_review',
    qualified: 'client.paykeys.review.refreshReview',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## refresh_review\n\n`client.paykeys.review.refreshReview(id: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/paykeys/{id}/refresh_review`\n\nUpdates the decision of a paykey's review validation. This endpoint allows you to refresh the outcome of a paykey's decision and is useful for correcting or updating the status of a paykey's verification.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; config: { processing_method?: 'inline' | 'background' | 'skip'; sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review'; }; created_at: string; label: string; paykey: string; source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'; status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'; updated_at: string; balance?: { status: 'pending' | 'completed' | 'failed'; account_balance?: number; updated_at?: string; }; bank_data?: { account_number: string; account_type: 'checking' | 'savings'; routing_number: string; }; customer_id?: string; expires_at?: string; external_id?: string; institution_name?: string; metadata?: object; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; unblock_eligible?: boolean; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst paykeyV1 = await client.paykeys.review.refreshReview('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyV1);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/charges',
    httpMethod: 'post',
    summary: 'Create a charge',
    description: 'Use charges to collect money from a customer for the sale of goods or services.',
    stainlessPath: '(resource) charges > (method) create',
    qualified: 'client.charges.create',
    params: [
      'amount: number;',
      "config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; };",
      "consent_type: 'internet' | 'signed';",
      'currency: string;',
      'description: string;',
      'device: { ip_address: string; };',
      'external_id: string;',
      'paykey: string;',
      'payment_date: string;',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create\n\n`client.charges.create(amount: number, config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }, consent_type: 'internet' | 'signed', currency: string, description: string, device: { ip_address: string; }, external_id: string, paykey: string, payment_date: string, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/charges`\n\nUse charges to collect money from a customer for the sale of goods or services.\n\n### Parameters\n\n- `amount: number`\n  The amount of the charge in cents.\n\n- `config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }`\n  - `balance_check: 'required' | 'enabled' | 'disabled'`\n    Defines whether to check the customer's balance before processing the charge.\n  - `auto_hold?: boolean`\n    Defines whether to automatically place this charge on hold after being created.\n  - `auto_hold_message?: string`\n    The reason the charge is being automatically held on creation.\n  - `sandbox_outcome?: string`\n    Payment will simulate processing if not Standard.\n\n- `consent_type: 'internet' | 'signed'`\n  The channel or mechanism through which the payment was authorized. Use `internet` for payments made online or through a mobile app and `signed` for signed agreements where there is a consent form or contract. Use `signed` for PDF signatures.\n\n- `currency: string`\n  The currency of the charge. Only USD is supported.\n\n- `description: string`\n  An arbitrary description for the charge.\n\n- `device: { ip_address: string; }`\n  - `ip_address: string`\n    The IP address of the device used when the customer authorized the charge or payout. Use `0.0.0.0` to represent an offline consent interaction.\n\n- `external_id: string`\n  Unique identifier for the charge in your database. This value must be unique across all charges.\n\n- `paykey: string`\n  Value of the `paykey` used for the charge.\n\n- `payment_date: string`\n  The desired date on which the payment should be occur. For charges, this means the date you want the customer to be debited on.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the charge in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst chargeV1 = await client.charges.create({\n  amount: 10000,\n  config: { balance_check: 'required' },\n  consent_type: 'internet',\n  currency: 'currency',\n  description: 'Monthly subscription fee',\n  device: { ip_address: '192.168.1.1' },\n  external_id: 'external_id',\n  paykey: 'paykey',\n  payment_date: '2019-12-27',\n});\n\nconsole.log(chargeV1);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/charges/{id}',
    httpMethod: 'put',
    summary: 'Update a charge',
    description:
      'Change the values of parameters associated with a charge prior to processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.',
    stainlessPath: '(resource) charges > (method) update',
    qualified: 'client.charges.update',
    params: [
      'id: string;',
      'amount: number;',
      'description: string;',
      'payment_date: string;',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## update\n\n`client.charges.update(id: string, amount: number, description: string, payment_date: string, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/charges/{id}`\n\nChange the values of parameters associated with a charge prior to processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.\n\n### Parameters\n\n- `id: string`\n\n- `amount: number`\n  The amount of the charge in cents.\n\n- `description: string`\n  An arbitrary description for the charge.\n\n- `payment_date: string`\n  The desired date on which the payment should be occur. For charges, this means the date you want the customer to be debited on.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the charge in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst chargeV1 = await client.charges.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  amount: 10000,\n  description: 'Monthly subscription fee',\n  payment_date: '2019-12-27',\n});\n\nconsole.log(chargeV1);\n```",
  },
  {
    name: 'cancel',
    endpoint: '/v1/charges/{id}/cancel',
    httpMethod: 'put',
    summary: 'Cancel a charge',
    description:
      'Cancel a charge to prevent it from being originated for processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.',
    stainlessPath: '(resource) charges > (method) cancel',
    qualified: 'client.charges.cancel',
    params: [
      'id: string;',
      'reason?: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## cancel\n\n`client.charges.cancel(id: string, reason?: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/charges/{id}/cancel`\n\nCancel a charge to prevent it from being originated for processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.\n\n### Parameters\n\n- `id: string`\n\n- `reason?: string`\n  Details about why the charge status was updated.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst chargeV1 = await client.charges.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(chargeV1);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/charges/{id}',
    httpMethod: 'get',
    summary: 'Lookup a charge',
    description:
      'Retrieves the details of an existing charge. Supply the unique charge `id`, and Straddle will return the corresponding charge information.',
    stainlessPath: '(resource) charges > (method) get',
    qualified: 'client.charges.get',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.charges.get(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/charges/{id}`\n\nRetrieves the details of an existing charge. Supply the unique charge `id`, and Straddle will return the corresponding charge information.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst chargeV1 = await client.charges.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(chargeV1);\n```",
  },
  {
    name: 'hold',
    endpoint: '/v1/charges/{id}/hold',
    httpMethod: 'put',
    summary: 'Hold a charge',
    description:
      'Place a charge on hold to prevent it from being originated for processing. The status of the charge must be `created` or `scheduled`.',
    stainlessPath: '(resource) charges > (method) hold',
    qualified: 'client.charges.hold',
    params: [
      'id: string;',
      'reason?: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## hold\n\n`client.charges.hold(id: string, reason?: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/charges/{id}/hold`\n\nPlace a charge on hold to prevent it from being originated for processing. The status of the charge must be `created` or `scheduled`.\n\n### Parameters\n\n- `id: string`\n\n- `reason?: string`\n  Details about why the charge status was updated.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst chargeV1 = await client.charges.hold('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(chargeV1);\n```",
  },
  {
    name: 'release',
    endpoint: '/v1/charges/{id}/release',
    httpMethod: 'put',
    summary: 'Release a charge',
    description: 'Release a charge from an `on_hold` status to allow it to be rescheduled for processing.',
    stainlessPath: '(resource) charges > (method) release',
    qualified: 'client.charges.release',
    params: [
      'id: string;',
      'reason?: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## release\n\n`client.charges.release(id: string, reason?: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/charges/{id}/release`\n\nRelease a charge from an `on_hold` status to allow it to be rescheduled for processing.\n\n### Parameters\n\n- `id: string`\n\n- `reason?: string`\n  Details about why the charge status was updated.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst chargeV1 = await client.charges.release('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(chargeV1);\n```",
  },
  {
    name: 'unmask',
    endpoint: '/v1/charges/{id}/unmask',
    httpMethod: 'get',
    summary: 'Get a charge by id.',
    description: 'Get a charge by id.',
    stainlessPath: '(resource) charges > (method) unmask',
    qualified: 'client.charges.unmask',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## unmask\n\n`client.charges.unmask(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/charges/{id}/unmask`\n\nGet a charge by id.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { balance_check: 'required' | 'enabled' | 'disabled'; auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; consent_type: 'internet' | 'signed'; created_at: string; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; updated_at: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst response = await client.charges.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/funding_events',
    httpMethod: 'get',
    summary: 'List funding events',
    description:
      'Retrieves a list of funding events for your account. This endpoint supports advanced sorting and filtering options.',
    stainlessPath: '(resource) funding_events > (method) list',
    qualified: 'client.fundingEvents.list',
    params: [
      'created_from?: string;',
      'created_to?: string;',
      "direction?: 'deposit' | 'withdrawal';",
      "event_type?: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal';",
      'page_number?: number;',
      'page_size?: number;',
      'search_text?: string;',
      "sort_by?: 'transfer_date' | 'id' | 'amount';",
      "sort_order?: 'asc' | 'desc';",
      'status?: string[];',
      'status_reason?: string[];',
      "status_source?: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'[];",
      'trace_id?: string;',
      'trace_number?: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ id: string; amount: number; created_at: string; direction: 'deposit' | 'withdrawal'; event_type: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal'; payment_count: number; trace_ids: object; trace_numbers: string[]; transfer_date: string; updated_at: string; status?: string; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; trace_number?: string; }",
    markdown:
      "## list\n\n`client.fundingEvents.list(created_from?: string, created_to?: string, direction?: 'deposit' | 'withdrawal', event_type?: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal', page_number?: number, page_size?: number, search_text?: string, sort_by?: 'transfer_date' | 'id' | 'amount', sort_order?: 'asc' | 'desc', status?: string[], status_reason?: string[], status_source?: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'[], trace_id?: string, trace_number?: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { id: string; amount: number; created_at: string; direction: 'deposit' | 'withdrawal'; event_type: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal'; payment_count: number; trace_ids: object; trace_numbers: string[]; transfer_date: string; updated_at: string; status?: string; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; trace_number?: string; }`\n\n**get** `/v1/funding_events`\n\nRetrieves a list of funding events for your account. This endpoint supports advanced sorting and filtering options.\n\n### Parameters\n\n- `created_from?: string`\n  The start date of the range to filter by using the `YYYY-MM-DD` format.\n\n- `created_to?: string`\n  The end date of the range to filter by using the `YYYY-MM-DD` format.\n\n- `direction?: 'deposit' | 'withdrawal'`\n  Describes the direction of the funding event from the perspective of the `linked_bank_account`.\n\n- `event_type?: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal'`\n  The funding event types describes the direction and reason for the funding event.\n\n- `page_number?: number`\n  Results page number. Starts at page 1.\n\n- `page_size?: number`\n  Results page size. Max value: 1000\n\n- `search_text?: string`\n  Search text.\n\n- `sort_by?: 'transfer_date' | 'id' | 'amount'`\n  The field to sort the results by.\n\n- `sort_order?: 'asc' | 'desc'`\n  The order in which to sort the results.\n\n- `status?: string[]`\n  Funding Event status.\n\n- `status_reason?: string[]`\n  Reason for latest payment status change.\n\n- `status_source?: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'[]`\n  Source of latest payment status change.\n\n- `trace_id?: string`\n  Trace Id.\n\n- `trace_number?: string`\n  Trace number.\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; direction: 'deposit' | 'withdrawal'; event_type: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal'; payment_count: number; trace_ids: object; trace_numbers: string[]; transfer_date: string; updated_at: string; status?: string; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; trace_number?: string; }`\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `direction: 'deposit' | 'withdrawal'`\n  - `event_type: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal'`\n  - `payment_count: number`\n  - `trace_ids: object`\n  - `trace_numbers: string[]`\n  - `transfer_date: string`\n  - `updated_at: string`\n  - `status?: string`\n  - `status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }`\n  - `trace_number?: string`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\n// Automatically fetches more pages as needed.\nfor await (const fundingEvent of client.fundingEvents.list()) {\n  console.log(fundingEvent);\n}\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/funding_events/{id}',
    httpMethod: 'get',
    summary: 'Lookup a funding event',
    description:
      'Retrieves the details of an existing funding event. Supply the unique funding event `id`, and Straddle will return the individual transaction items that make up the funding event.',
    stainlessPath: '(resource) funding_events > (method) get',
    qualified: 'client.fundingEvents.get',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; created_at: string; direction: 'deposit' | 'withdrawal'; event_type: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal'; payment_count: number; trace_ids: object; trace_numbers: string[]; transfer_date: string; updated_at: string; status?: string; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; trace_number?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.fundingEvents.get(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/funding_events/{id}`\n\nRetrieves the details of an existing funding event. Supply the unique funding event `id`, and Straddle will return the individual transaction items that make up the funding event.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; created_at: string; direction: 'deposit' | 'withdrawal'; event_type: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal'; payment_count: number; trace_ids: object; trace_numbers: string[]; transfer_date: string; updated_at: string; status?: string; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; trace_number?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; created_at: string; direction: 'deposit' | 'withdrawal'; event_type: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal'; payment_count: number; trace_ids: object; trace_numbers: string[]; transfer_date: string; updated_at: string; status?: string; status_details?: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; trace_number?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst fundingEventSummaryItemV1 = await client.fundingEvents.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(fundingEventSummaryItemV1);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/payments',
    httpMethod: 'get',
    summary: 'Search payments',
    description:
      'Search for payments, including `charges` and `payouts`, using a variety of criteria. This endpoint supports advanced sorting and filtering options.',
    stainlessPath: '(resource) payments > (method) list',
    qualified: 'client.payments.list',
    params: [
      'customer_id?: string;',
      'default_page_size?: number;',
      "default_sort?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount';",
      "default_sort_order?: 'asc' | 'desc';",
      'external_id?: string;',
      'funding_id?: string;',
      'include_metadata?: boolean;',
      'max_amount?: number;',
      'max_created_at?: string;',
      'max_effective_at?: string;',
      'max_payment_date?: string;',
      'min_amount?: number;',
      'min_created_at?: string;',
      'min_effective_at?: string;',
      'min_payment_date?: string;',
      'page_number?: number;',
      'page_size?: number;',
      'paykey?: string;',
      'paykey_id?: string;',
      'payment_id?: string;',
      'payment_status?: string[];',
      "payment_type?: 'charge' | 'payout'[];",
      'search_text?: string;',
      "sort_by?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount';",
      "sort_order?: 'asc' | 'desc';",
      'status_reason?: string[];',
      "status_source?: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'[];",
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ id: string; amount: number; created_at: string; currency: string; description: string; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; payment_type: 'charge' | 'payout'; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; trace_ids: object; updated_at: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; funding_id?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; }",
    markdown:
      "## list\n\n`client.payments.list(customer_id?: string, default_page_size?: number, default_sort?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount', default_sort_order?: 'asc' | 'desc', external_id?: string, funding_id?: string, include_metadata?: boolean, max_amount?: number, max_created_at?: string, max_effective_at?: string, max_payment_date?: string, min_amount?: number, min_created_at?: string, min_effective_at?: string, min_payment_date?: string, page_number?: number, page_size?: number, paykey?: string, paykey_id?: string, payment_id?: string, payment_status?: string[], payment_type?: 'charge' | 'payout'[], search_text?: string, sort_by?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount', sort_order?: 'asc' | 'desc', status_reason?: string[], status_source?: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'[], Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { id: string; amount: number; created_at: string; currency: string; description: string; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; payment_type: 'charge' | 'payout'; status: string; status_details: object; trace_ids: object; updated_at: string; customer_details?: object; effective_at?: string; funding_id?: string; metadata?: object; paykey_details?: object; }`\n\n**get** `/v1/payments`\n\nSearch for payments, including `charges` and `payouts`, using a variety of criteria. This endpoint supports advanced sorting and filtering options.\n\n### Parameters\n\n- `customer_id?: string`\n  Search using the `customer_id` of a `charge` or `payout`.\n\n- `default_page_size?: number`\n\n- `default_sort?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount'`\n  The field to sort the results by.\n\n- `default_sort_order?: 'asc' | 'desc'`\n\n- `external_id?: string`\n  Search using the `external_id` of a `charge` or `payout`.\n\n- `funding_id?: string`\n  Search using the `funding_id` of a `charge` or `payout`.\n\n- `include_metadata?: boolean`\n  Include the metadata for payments in the returned data.\n\n- `max_amount?: number`\n  Search using a maximum `amount` of a `charge` or `payout`.\n\n- `max_created_at?: string`\n  Search using the latest `created_at` date of a `charge` or `payout`.\n\n- `max_effective_at?: string`\n  Search using the latest `effective_date` of a `charge` or `payout`.\n\n- `max_payment_date?: string`\n  Search using the latest `payment_date` of a `charge` or `payout`.\n\n- `min_amount?: number`\n  Search using the minimum `amount of a `charge` or `payout`.\n\n- `min_created_at?: string`\n  Search using the earliest `created_at` date of a `charge` or `payout`.\n\n- `min_effective_at?: string`\n  Search using the earliest `effective_date` of a `charge` or `payout`.\n\n- `min_payment_date?: string`\n  Search using the earliest ` `of a `charge` or `payout`.\n\n- `page_number?: number`\n  Results page number. Starts at page 1.\n\n- `page_size?: number`\n  Results page size. Max value: 1000\n\n- `paykey?: string`\n  Search using the `paykey` of a `charge` or `payout`.\n\n- `paykey_id?: string`\n  Search using the `paykey_id` of a `charge` or `payout`.\n\n- `payment_id?: string`\n  Search using the `id` of a `charge` or `payout`.\n\n- `payment_status?: string[]`\n  Search by the status of a `charge` or `payout`.\n\n- `payment_type?: 'charge' | 'payout'[]`\n  Search by the type of a `charge` or `payout`.\n\n- `search_text?: string`\n  Search using a text string associated with a `charge` or `payout`.\n\n- `sort_by?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount'`\n  The field to sort the results by.\n\n- `sort_order?: 'asc' | 'desc'`\n\n- `status_reason?: string[]`\n  Reason for latest payment status change.\n\n- `status_source?: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'[]`\n  Source of latest payment status change.\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ id: string; amount: number; created_at: string; currency: string; description: string; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; payment_type: 'charge' | 'payout'; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; trace_ids: object; updated_at: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; funding_id?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; }`\n\n  - `id: string`\n  - `amount: number`\n  - `created_at: string`\n  - `currency: string`\n  - `description: string`\n  - `external_id: string`\n  - `funding_ids: string[]`\n  - `paykey: string`\n  - `payment_date: string`\n  - `payment_type: 'charge' | 'payout'`\n  - `status: string`\n  - `status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }`\n  - `trace_ids: object`\n  - `updated_at: string`\n  - `customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }`\n  - `effective_at?: string`\n  - `funding_id?: string`\n  - `metadata?: object`\n  - `paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\n// Automatically fetches more pages as needed.\nfor await (const payment of client.payments.list()) {\n  console.log(payment);\n}\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/payouts',
    httpMethod: 'post',
    summary: 'Create a payout',
    description: 'Use payouts to send money to your customers.',
    stainlessPath: '(resource) payouts > (method) create',
    qualified: 'client.payouts.create',
    params: [
      'amount: number;',
      'currency: string;',
      'description: string;',
      'device: { ip_address: string; };',
      'external_id: string;',
      'paykey: string;',
      'payment_date: string;',
      'config?: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; };',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create\n\n`client.payouts.create(amount: number, currency: string, description: string, device: { ip_address: string; }, external_id: string, paykey: string, payment_date: string, config?: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/payouts`\n\nUse payouts to send money to your customers.\n\n### Parameters\n\n- `amount: number`\n  The amount of the payout in cents.\n\n- `currency: string`\n  The currency of the payout. Only USD is supported.\n\n- `description: string`\n  An arbitrary description for the payout.\n\n- `device: { ip_address: string; }`\n  Information about the device used when the customer authorized the payout.\n  - `ip_address: string`\n    The IP address of the device used when the customer authorized the charge or payout. Use `0.0.0.0` to represent an offline consent interaction.\n\n- `external_id: string`\n  Unique identifier for the payout in your database. This value must be unique across all payouts.\n\n- `paykey: string`\n  Value of the `paykey` used for the payout.\n\n- `payment_date: string`\n  The desired date on which the payout should be occur. For payouts, this means the date you want the funds to be sent from your bank account.\n\n- `config?: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }`\n  - `auto_hold?: boolean`\n    Defines whether to automatically place this charge on hold after being created.\n  - `auto_hold_message?: string`\n    The reason the payout is being automatically held on creation.\n  - `sandbox_outcome?: string`\n    Payment will simulate processing if not Standard.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the payout in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst payoutV1 = await client.payouts.create({\n  amount: 10000,\n  currency: 'currency',\n  description: 'Vendor invoice payment',\n  device: { ip_address: '192.168.1.1' },\n  external_id: 'external_id',\n  paykey: 'paykey',\n  payment_date: '2019-12-27',\n});\n\nconsole.log(payoutV1);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/payouts/{id}',
    httpMethod: 'put',
    summary: 'Update a payout',
    description:
      'Update the details of a payout prior to processing. The status of the payout must be `created`, `scheduled`, or `on_hold`.',
    stainlessPath: '(resource) payouts > (method) update',
    qualified: 'client.payouts.update',
    params: [
      'id: string;',
      'amount: number;',
      'description: string;',
      'payment_date: string;',
      'metadata?: object;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## update\n\n`client.payouts.update(id: string, amount: number, description: string, payment_date: string, metadata?: object, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/payouts/{id}`\n\nUpdate the details of a payout prior to processing. The status of the payout must be `created`, `scheduled`, or `on_hold`.\n\n### Parameters\n\n- `id: string`\n\n- `amount: number`\n  The amount of the payout in cents.\n\n- `description: string`\n  An arbitrary description for the payout.\n\n- `payment_date: string`\n  The desired date on which the payment should be occur. For payouts, this means the date you want the funds to be sent from your bank account.\n\n- `metadata?: object`\n  Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the payout in a structured format.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst payoutV1 = await client.payouts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  amount: 10000,\n  description: 'description',\n  payment_date: '2019-12-27',\n});\n\nconsole.log(payoutV1);\n```",
  },
  {
    name: 'cancel',
    endpoint: '/v1/payouts/{id}/cancel',
    httpMethod: 'put',
    summary: 'Cancel a payout',
    description:
      'Cancel a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.',
    stainlessPath: '(resource) payouts > (method) cancel',
    qualified: 'client.payouts.cancel',
    params: [
      'id: string;',
      'reason: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## cancel\n\n`client.payouts.cancel(id: string, reason: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/payouts/{id}/cancel`\n\nCancel a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.\n\n### Parameters\n\n- `id: string`\n\n- `reason: string`\n  Details about why the payout status was updated.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst payoutV1 = await client.payouts.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { reason: 'reason' });\n\nconsole.log(payoutV1);\n```",
  },
  {
    name: 'get',
    endpoint: '/v1/payouts/{id}',
    httpMethod: 'get',
    summary: 'Lookup a payout',
    description:
      'Retrieves the details of an existing payout. Supply the unique payout `id` to retrieve the corresponding payout information.',
    stainlessPath: '(resource) payouts > (method) get',
    qualified: 'client.payouts.get',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## get\n\n`client.payouts.get(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/payouts/{id}`\n\nRetrieves the details of an existing payout. Supply the unique payout `id` to retrieve the corresponding payout information.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst payoutV1 = await client.payouts.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(payoutV1);\n```",
  },
  {
    name: 'hold',
    endpoint: '/v1/payouts/{id}/hold',
    httpMethod: 'put',
    summary: 'Hold a payout',
    description:
      'Hold a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.',
    stainlessPath: '(resource) payouts > (method) hold',
    qualified: 'client.payouts.hold',
    params: [
      'id: string;',
      'reason: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## hold\n\n`client.payouts.hold(id: string, reason: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/payouts/{id}/hold`\n\nHold a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.\n\n### Parameters\n\n- `id: string`\n\n- `reason: string`\n  Details about why the payout status was updated.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst payoutV1 = await client.payouts.hold('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { reason: 'reason' });\n\nconsole.log(payoutV1);\n```",
  },
  {
    name: 'release',
    endpoint: '/v1/payouts/{id}/release',
    httpMethod: 'put',
    summary: 'Release a payout',
    description: 'Release a payout from a `hold` status to allow it to be rescheduled for processing.',
    stainlessPath: '(resource) payouts > (method) release',
    qualified: 'client.payouts.release',
    params: [
      'id: string;',
      'reason: string;',
      'Correlation-Id?: string;',
      'Idempotency-Key?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## release\n\n`client.payouts.release(id: string, reason: string, Correlation-Id?: string, Idempotency-Key?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**put** `/v1/payouts/{id}/release`\n\nRelease a payout from a `hold` status to allow it to be rescheduled for processing.\n\n### Parameters\n\n- `id: string`\n\n- `reason: string`\n  Details about why the payout status was updated.\n\n- `Correlation-Id?: string`\n\n- `Idempotency-Key?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: object; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst payoutV1 = await client.payouts.release('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { reason: 'reason' });\n\nconsole.log(payoutV1);\n```",
  },
  {
    name: 'unmask',
    endpoint: '/v1/payouts/{id}/unmask',
    httpMethod: 'get',
    summary: 'Get a payout by id.',
    description: 'Get a payout by id.',
    stainlessPath: '(resource) payouts > (method) unmask',
    qualified: 'client.payouts.unmask',
    params: [
      'id: string;',
      'Correlation-Id?: string;',
      'Request-Id?: string;',
      'Straddle-Account-Id?: string;',
    ],
    response:
      "{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## unmask\n\n`client.payouts.unmask(id: string, Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**get** `/v1/payouts/{id}/unmask`\n\nGet a payout by id.\n\n### Parameters\n\n- `id: string`\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: object; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: object; effective_at?: string; metadata?: object; paykey_details?: object; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { id: string; amount: number; config: { auto_hold?: boolean; auto_hold_message?: string; sandbox_outcome?: string; }; currency: string; description: string; device: { ip_address: string; }; external_id: string; funding_ids: string[]; paykey: string; payment_date: string; status: string; status_details: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; code?: string; }; status_history: { changed_at: string; message: string; reason: string; source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system'; status: string; code?: string; }[]; trace_ids: object; created_at?: string; customer_details?: { id: string; customer_type: 'individual' | 'business'; email: string; name: string; phone: string; }; effective_at?: string; metadata?: object; paykey_details?: { id: string; customer_id: string; label: string; balance?: number; }; payment_rail?: 'ach'; processed_at?: string; related_payments?: object; updated_at?: string; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst response = await client.payouts.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_total_customers_by_status',
    endpoint: '/v1/reports/total_customers_by_status',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) reports > (method) create_total_customers_by_status',
    qualified: 'client.reports.createTotalCustomersByStatus',
    params: ['Correlation-Id?: string;', 'Request-Id?: string;', 'Straddle-Account-Id?: string;'],
    response:
      "{ data: { inactive: number; pending: number; rejected: number; review: number; verified: number; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }",
    markdown:
      "## create_total_customers_by_status\n\n`client.reports.createTotalCustomersByStatus(Correlation-Id?: string, Request-Id?: string, Straddle-Account-Id?: string): { data: object; meta: response_metadata; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n**post** `/v1/reports/total_customers_by_status`\n\n### Parameters\n\n- `Correlation-Id?: string`\n\n- `Request-Id?: string`\n\n- `Straddle-Account-Id?: string`\n\n### Returns\n\n- `{ data: { inactive: number; pending: number; rejected: number; review: number; verified: number; }; meta: { api_request_id: string; api_request_timestamp: string; }; response_type: 'object' | 'array' | 'error' | 'none'; }`\n\n  - `data: { inactive: number; pending: number; rejected: number; review: number; verified: number; }`\n  - `meta: { api_request_id: string; api_request_timestamp: string; }`\n  - `response_type: 'object' | 'array' | 'error' | 'none'`\n\n### Example\n\n```typescript\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle();\n\nconst response = await client.reports.createTotalCustomersByStatus();\n\nconsole.log(response);\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
