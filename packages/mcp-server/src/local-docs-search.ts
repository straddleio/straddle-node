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
    perLanguage: {
      cli: {
        method: 'accounts get',
        example:
          "straddle embed:accounts get \\\n  --api-key 'My API Key' \\\n  --account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.Accounts.Get',
        example:
          'AccountGetParams parameters = new()\n{\n    AccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar accountV1 = await client.Embed.Accounts.Get(parameters);\n\nConsole.WriteLine(accountV1);',
      },
      go: {
        method: 'client.Embed.Accounts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountV1, err := client.Embed.Accounts.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedAccountGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/accounts/$ACCOUNT_ID \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.accounts.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\naccount_v1 = client.embed.accounts.get(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(account_v1.data)',
      },
      ruby: {
        method: 'embed.accounts.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\naccount_v1 = straddle.embed.accounts.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(account_v1)',
      },
      typescript: {
        method: 'client.embed.accounts.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountV1 = await client.embed.accounts.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(accountV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'accounts update',
        example:
          "straddle embed:accounts update \\\n  --api-key 'My API Key' \\\n  --account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --business-profile '{name: name, website: https://example.com}'",
      },
      csharp: {
        method: 'Embed.Accounts.Update',
        example:
          'AccountUpdateParams parameters = new()\n{\n    AccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    BusinessProfile = new()\n    {\n        Name = "name",\n        Website = "https://example.com",\n        Address = new()\n        {\n            City = "city",\n            Line1 = "line1",\n            PostalCode = "21029-1360",\n            State = "SE",\n            Country = "country",\n            Line2 = "line2",\n        },\n        Description = "description",\n        Industry = new()\n        {\n            Category = "category",\n            Mcc = "mcc",\n            Sector = "sector",\n        },\n        LegalName = "legal_name",\n        Phone = "+46991022",\n        SupportChannels = new()\n        {\n            Email = "dev@stainless.com",\n            Phone = "+46991022",\n            Url = "https://example.com",\n        },\n        TaxID = "210297980",\n        UseCase = "use_case",\n    },\n};\n\nvar accountV1 = await client.Embed.Accounts.Update(parameters);\n\nConsole.WriteLine(accountV1);',
      },
      go: {
        method: 'client.Embed.Accounts.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountV1, err := client.Embed.Accounts.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedAccountUpdateParams{\n\t\t\tBusinessProfile: straddle.BusinessProfileV1Param{\n\t\t\t\tName:    "name",\n\t\t\t\tWebsite: "https://example.com",\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/accounts/$ACCOUNT_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "business_profile": {\n            "name": "name",\n            "website": "https://example.com"\n          }\n        }\'',
      },
      python: {
        method: 'embed.accounts.update',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\naccount_v1 = client.embed.accounts.update(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    business_profile={\n        "name": "name",\n        "website": "https://example.com",\n    },\n)\nprint(account_v1.data)',
      },
      ruby: {
        method: 'embed.accounts.update',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\naccount_v1 = straddle.embed.accounts.update(\n  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  business_profile: {name: "name", website: "https://example.com"}\n)\n\nputs(account_v1)',
      },
      typescript: {
        method: 'client.embed.accounts.update',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountV1 = await client.embed.accounts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  business_profile: { name: 'name', website: 'https://example.com' },\n});\n\nconsole.log(accountV1.data);",
      },
    },
  },
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
    perLanguage: {
      cli: {
        method: 'accounts create',
        example:
          "straddle embed:accounts create \\\n  --api-key 'My API Key' \\\n  --access-level standard \\\n  --account-type business \\\n  --business-profile '{name: name, website: https://example.com}' \\\n  --organization-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.Accounts.Create',
        example:
          'AccountCreateParams parameters = new()\n{\n    AccessLevel = AccessLevel.Standard,\n    AccountType = AccountType.Business,\n    BusinessProfile = new()\n    {\n        Name = "name",\n        Website = "https://example.com",\n        Address = new()\n        {\n            City = "city",\n            Line1 = "line1",\n            PostalCode = "21029-1360",\n            State = "SE",\n            Country = "country",\n            Line2 = "line2",\n        },\n        Description = "description",\n        Industry = new()\n        {\n            Category = "category",\n            Mcc = "mcc",\n            Sector = "sector",\n        },\n        LegalName = "legal_name",\n        Phone = "+46991022",\n        SupportChannels = new()\n        {\n            Email = "dev@stainless.com",\n            Phone = "+46991022",\n            Url = "https://example.com",\n        },\n        TaxID = "210297980",\n        UseCase = "use_case",\n    },\n    OrganizationID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n};\n\nvar accountV1 = await client.Embed.Accounts.Create(parameters);\n\nConsole.WriteLine(accountV1);',
      },
      go: {
        method: 'client.Embed.Accounts.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountV1, err := client.Embed.Accounts.New(context.TODO(), straddle.EmbedAccountNewParams{\n\t\tAccessLevel: straddle.EmbedAccountNewParamsAccessLevelStandard,\n\t\tAccountType: straddle.EmbedAccountNewParamsAccountTypeBusiness,\n\t\tBusinessProfile: straddle.BusinessProfileV1Param{\n\t\t\tName:    "name",\n\t\t\tWebsite: "https://example.com",\n\t\t},\n\t\tOrganizationID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/accounts \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "access_level": "standard",\n          "account_type": "business",\n          "business_profile": {\n            "name": "name",\n            "website": "https://example.com"\n          },\n          "organization_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
      python: {
        method: 'embed.accounts.create',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\naccount_v1 = client.embed.accounts.create(\n    access_level="standard",\n    account_type="business",\n    business_profile={\n        "name": "name",\n        "website": "https://example.com",\n    },\n    organization_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(account_v1.data)',
      },
      ruby: {
        method: 'embed.accounts.create',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\naccount_v1 = straddle.embed.accounts.create(\n  access_level: :standard,\n  account_type: :business,\n  business_profile: {name: "name", website: "https://example.com"},\n  organization_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n)\n\nputs(account_v1)',
      },
      typescript: {
        method: 'client.embed.accounts.create',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountV1 = await client.embed.accounts.create({\n  access_level: 'standard',\n  account_type: 'business',\n  business_profile: { name: 'name', website: 'https://example.com' },\n  organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(accountV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'accounts list',
        example: "straddle embed:accounts list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Embed.Accounts.List',
        example:
          'AccountListParams parameters = new();\n\nvar page = await client.Embed.Accounts.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Embed.Accounts.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Embed.Accounts.List(context.TODO(), straddle.EmbedAccountListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/accounts \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.accounts.list',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.embed.accounts.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'embed.accounts.list',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npage = straddle.embed.accounts.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.embed.accounts.list',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const account of client.embed.accounts.list()) {\n  console.log(account.id);\n}",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'accounts onboard',
        example:
          "straddle embed:accounts onboard \\\n  --api-key 'My API Key' \\\n  --account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --terms-of-service \"{accepted_date: '2019-12-27T18:11:19.117Z', agreement_type: embedded, agreement_url: agreement_url}\"",
      },
      csharp: {
        method: 'Embed.Accounts.Onboard',
        example:
          'AccountOnboardParams parameters = new()\n{\n    AccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    TermsOfService = new()\n    {\n        AcceptedDate = DateTimeOffset.Parse("2019-12-27T18:11:19.117Z"),\n        AgreementType = AgreementType.Embedded,\n        AgreementUrl = "agreement_url",\n        AcceptedIP = "accepted_ip",\n        AcceptedUserAgent = "accepted_user_agent",\n    },\n};\n\nvar accountV1 = await client.Embed.Accounts.Onboard(parameters);\n\nConsole.WriteLine(accountV1);',
      },
      go: {
        method: 'client.Embed.Accounts.Onboard',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountV1, err := client.Embed.Accounts.Onboard(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedAccountOnboardParams{\n\t\t\tTermsOfService: straddle.TermsOfServiceV1Param{\n\t\t\t\tAcceptedDate:  time.Now(),\n\t\t\t\tAgreementType: straddle.TermsOfServiceV1AgreementTypeEmbedded,\n\t\t\t\tAgreementURL:  straddle.String("agreement_url"),\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/accounts/$ACCOUNT_ID/onboard \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "terms_of_service": {\n            "accepted_date": "2019-12-27T18:11:19.117Z",\n            "agreement_type": "embedded",\n            "agreement_url": "agreement_url"\n          }\n        }\'',
      },
      python: {
        method: 'embed.accounts.onboard',
        example:
          'import os\nfrom datetime import datetime\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\naccount_v1 = client.embed.accounts.onboard(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    terms_of_service={\n        "accepted_date": datetime.fromisoformat("2019-12-27T18:11:19.117"),\n        "agreement_type": "embedded",\n        "agreement_url": "agreement_url",\n    },\n)\nprint(account_v1.data)',
      },
      ruby: {
        method: 'embed.accounts.onboard',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\naccount_v1 = straddle.embed.accounts.onboard(\n  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  terms_of_service: {accepted_date: "2019-12-27T18:11:19.117Z", agreement_type: :embedded, agreement_url: "agreement_url"}\n)\n\nputs(account_v1)',
      },
      typescript: {
        method: 'client.embed.accounts.onboard',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountV1 = await client.embed.accounts.onboard('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  terms_of_service: {\n    accepted_date: '2019-12-27T18:11:19.117Z',\n    agreement_type: 'embedded',\n    agreement_url: 'agreement_url',\n  },\n});\n\nconsole.log(accountV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'accounts simulate',
        example:
          "straddle embed:accounts simulate \\\n  --api-key 'My API Key' \\\n  --account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.Accounts.Simulate',
        example:
          'AccountSimulateParams parameters = new()\n{\n    AccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar accountV1 = await client.Embed.Accounts.Simulate(parameters);\n\nConsole.WriteLine(accountV1);',
      },
      go: {
        method: 'client.Embed.Accounts.Simulate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\taccountV1, err := client.Embed.Accounts.Simulate(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedAccountSimulateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", accountV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/accounts/$ACCOUNT_ID/simulate \\\n    -X POST \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.accounts.simulate',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\naccount_v1 = client.embed.accounts.simulate(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(account_v1.data)',
      },
      ruby: {
        method: 'embed.accounts.simulate',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\naccount_v1 = straddle.embed.accounts.simulate("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(account_v1)',
      },
      typescript: {
        method: 'client.embed.accounts.simulate',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst accountV1 = await client.embed.accounts.simulate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(accountV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'capability_requests create',
        example:
          "straddle embed:accounts:capability-requests create \\\n  --api-key 'My API Key' \\\n  --account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.Accounts.CapabilityRequests.Create',
        example:
          'CapabilityRequestCreateParams parameters = new()\n{\n    AccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar capabilityRequestPagedV1 = await client.Embed.Accounts.CapabilityRequests.Create(parameters);\n\nConsole.WriteLine(capabilityRequestPagedV1);',
      },
      go: {
        method: 'client.Embed.Accounts.CapabilityRequests.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcapabilityRequestPagedV1, err := client.Embed.Accounts.CapabilityRequests.New(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedAccountCapabilityRequestNewParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", capabilityRequestPagedV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/accounts/$ACCOUNT_ID/capability_requests \\\n    -X POST \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.accounts.capability_requests.create',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncapability_request_paged_v1 = client.embed.accounts.capability_requests.create(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(capability_request_paged_v1.data)',
      },
      ruby: {
        method: 'embed.accounts.capability_requests.create',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncapability_request_paged_v1 = straddle.embed.accounts.capability_requests.create("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(capability_request_paged_v1)',
      },
      typescript: {
        method: 'client.embed.accounts.capabilityRequests.create',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst capabilityRequestPagedV1 = await client.embed.accounts.capabilityRequests.create(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(capabilityRequestPagedV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'capability_requests list',
        example:
          "straddle embed:accounts:capability-requests list \\\n  --api-key 'My API Key' \\\n  --account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.Accounts.CapabilityRequests.List',
        example:
          'CapabilityRequestListParams parameters = new()\n{\n    AccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar page = await client.Embed.Accounts.CapabilityRequests.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Embed.Accounts.CapabilityRequests.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Embed.Accounts.CapabilityRequests.List(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedAccountCapabilityRequestListParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/accounts/$ACCOUNT_ID/capability_requests \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.accounts.capability_requests.list',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.embed.accounts.capability_requests.list(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'embed.accounts.capability_requests.list',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npage = straddle.embed.accounts.capability_requests.list("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(page)',
      },
      typescript: {
        method: 'client.embed.accounts.capabilityRequests.list',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const capabilityRequest of client.embed.accounts.capabilityRequests.list(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n)) {\n  console.log(capabilityRequest.id);\n}",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'linked_bank_accounts create',
        example:
          "straddle embed:linked-bank-accounts create \\\n  --api-key 'My API Key' \\\n  --account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --bank-account '{account_holder: account_holder, account_number: account_number, routing_number: xxxxxxxxx}'",
      },
      csharp: {
        method: 'Embed.LinkedBankAccounts.Create',
        example:
          'LinkedBankAccountCreateParams parameters = new()\n{\n    AccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    BankAccount = new()\n    {\n        AccountHolder = "account_holder",\n        AccountNumber = "account_number",\n        RoutingNumber = "xxxxxxxxx",\n    },\n};\n\nvar linkedBankAccountV1 = await client.Embed.LinkedBankAccounts.Create(parameters);\n\nConsole.WriteLine(linkedBankAccountV1);',
      },
      go: {
        method: 'client.Embed.LinkedBankAccounts.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlinkedBankAccountV1, err := client.Embed.LinkedBankAccounts.New(context.TODO(), straddle.EmbedLinkedBankAccountNewParams{\n\t\tAccountID: straddle.String("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"),\n\t\tBankAccount: straddle.EmbedLinkedBankAccountNewParamsBankAccount{\n\t\t\tAccountHolder: "account_holder",\n\t\t\tAccountNumber: "account_number",\n\t\t\tRoutingNumber: "xxxxxxxxx",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", linkedBankAccountV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/linked_bank_accounts \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "account_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "bank_account": {\n            "account_holder": "account_holder",\n            "account_number": "account_number",\n            "routing_number": "xxxxxxxxx"\n          }\n        }\'',
      },
      python: {
        method: 'embed.linked_bank_accounts.create',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nlinked_bank_account_v1 = client.embed.linked_bank_accounts.create(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    bank_account={\n        "account_holder": "account_holder",\n        "account_number": "account_number",\n        "routing_number": "xxxxxxxxx",\n    },\n)\nprint(linked_bank_account_v1.data)',
      },
      ruby: {
        method: 'embed.linked_bank_accounts.create',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nlinked_bank_account_v1 = straddle.embed.linked_bank_accounts.create(\n  account_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  bank_account: {account_holder: "account_holder", account_number: "account_number", routing_number: "xxxxxxxxx"}\n)\n\nputs(linked_bank_account_v1)',
      },
      typescript: {
        method: 'client.embed.linkedBankAccounts.create',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst linkedBankAccountV1 = await client.embed.linkedBankAccounts.create({\n  account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  bank_account: {\n    account_holder: 'account_holder',\n    account_number: 'account_number',\n    routing_number: 'xxxxxxxxx',\n  },\n});\n\nconsole.log(linkedBankAccountV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'linked_bank_accounts list',
        example: "straddle embed:linked-bank-accounts list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Embed.LinkedBankAccounts.List',
        example:
          'LinkedBankAccountListParams parameters = new();\n\nvar page = await client.Embed.LinkedBankAccounts.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Embed.LinkedBankAccounts.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Embed.LinkedBankAccounts.List(context.TODO(), straddle.EmbedLinkedBankAccountListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/linked_bank_accounts \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.linked_bank_accounts.list',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.embed.linked_bank_accounts.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'embed.linked_bank_accounts.list',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npage = straddle.embed.linked_bank_accounts.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.embed.linkedBankAccounts.list',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const linkedBankAccount of client.embed.linkedBankAccounts.list()) {\n  console.log(linkedBankAccount.id);\n}",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'linked_bank_accounts update',
        example:
          "straddle embed:linked-bank-accounts update \\\n  --api-key 'My API Key' \\\n  --linked-bank-account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --bank-account '{account_holder: account_holder, account_number: account_number, routing_number: xxxxxxxxx}'",
      },
      csharp: {
        method: 'Embed.LinkedBankAccounts.Update',
        example:
          'LinkedBankAccountUpdateParams parameters = new()\n{\n    LinkedBankAccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    BankAccount = new()\n    {\n        AccountHolder = "account_holder",\n        AccountNumber = "account_number",\n        RoutingNumber = "xxxxxxxxx",\n    },\n};\n\nvar linkedBankAccountV1 = await client.Embed.LinkedBankAccounts.Update(parameters);\n\nConsole.WriteLine(linkedBankAccountV1);',
      },
      go: {
        method: 'client.Embed.LinkedBankAccounts.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlinkedBankAccountV1, err := client.Embed.LinkedBankAccounts.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedLinkedBankAccountUpdateParams{\n\t\t\tBankAccount: straddle.EmbedLinkedBankAccountUpdateParamsBankAccount{\n\t\t\t\tAccountHolder: "account_holder",\n\t\t\t\tAccountNumber: "account_number",\n\t\t\t\tRoutingNumber: "xxxxxxxxx",\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", linkedBankAccountV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/linked_bank_accounts/$LINKED_BANK_ACCOUNT_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "bank_account": {\n            "account_holder": "account_holder",\n            "account_number": "account_number",\n            "routing_number": "xxxxxxxxx"\n          }\n        }\'',
      },
      python: {
        method: 'embed.linked_bank_accounts.update',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nlinked_bank_account_v1 = client.embed.linked_bank_accounts.update(\n    linked_bank_account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    bank_account={\n        "account_holder": "account_holder",\n        "account_number": "account_number",\n        "routing_number": "xxxxxxxxx",\n    },\n)\nprint(linked_bank_account_v1.data)',
      },
      ruby: {
        method: 'embed.linked_bank_accounts.update',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nlinked_bank_account_v1 = straddle.embed.linked_bank_accounts.update(\n  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  bank_account: {account_holder: "account_holder", account_number: "account_number", routing_number: "xxxxxxxxx"}\n)\n\nputs(linked_bank_account_v1)',
      },
      typescript: {
        method: 'client.embed.linkedBankAccounts.update',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst linkedBankAccountV1 = await client.embed.linkedBankAccounts.update(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    bank_account: {\n      account_holder: 'account_holder',\n      account_number: 'account_number',\n      routing_number: 'xxxxxxxxx',\n    },\n  },\n);\n\nconsole.log(linkedBankAccountV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'linked_bank_accounts get',
        example:
          "straddle embed:linked-bank-accounts get \\\n  --api-key 'My API Key' \\\n  --linked-bank-account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.LinkedBankAccounts.Get',
        example:
          'LinkedBankAccountGetParams parameters = new()\n{\n    LinkedBankAccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar linkedBankAccountV1 = await client.Embed.LinkedBankAccounts.Get(parameters);\n\nConsole.WriteLine(linkedBankAccountV1);',
      },
      go: {
        method: 'client.Embed.LinkedBankAccounts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlinkedBankAccountV1, err := client.Embed.LinkedBankAccounts.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedLinkedBankAccountGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", linkedBankAccountV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/linked_bank_accounts/$LINKED_BANK_ACCOUNT_ID \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.linked_bank_accounts.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nlinked_bank_account_v1 = client.embed.linked_bank_accounts.get(\n    linked_bank_account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(linked_bank_account_v1.data)',
      },
      ruby: {
        method: 'embed.linked_bank_accounts.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nlinked_bank_account_v1 = straddle.embed.linked_bank_accounts.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(linked_bank_account_v1)',
      },
      typescript: {
        method: 'client.embed.linkedBankAccounts.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst linkedBankAccountV1 = await client.embed.linkedBankAccounts.get(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(linkedBankAccountV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'linked_bank_accounts unmask',
        example:
          "straddle embed:linked-bank-accounts unmask \\\n  --api-key 'My API Key' \\\n  --linked-bank-account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.LinkedBankAccounts.Unmask',
        example:
          'LinkedBankAccountUnmaskParams parameters = new()\n{\n    LinkedBankAccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar linkedBankAccountUnmaskV1 = await client.Embed.LinkedBankAccounts.Unmask(parameters);\n\nConsole.WriteLine(linkedBankAccountUnmaskV1);',
      },
      go: {
        method: 'client.Embed.LinkedBankAccounts.Unmask',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlinkedBankAccountUnmaskV1, err := client.Embed.LinkedBankAccounts.Unmask(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedLinkedBankAccountUnmaskParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", linkedBankAccountUnmaskV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/linked_bank_accounts/$LINKED_BANK_ACCOUNT_ID/unmask \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.linked_bank_accounts.unmask',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nlinked_bank_account_unmask_v1 = client.embed.linked_bank_accounts.unmask(\n    linked_bank_account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(linked_bank_account_unmask_v1.data)',
      },
      ruby: {
        method: 'embed.linked_bank_accounts.unmask',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nlinked_bank_account_unmask_v1 = straddle.embed.linked_bank_accounts.unmask("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(linked_bank_account_unmask_v1)',
      },
      typescript: {
        method: 'client.embed.linkedBankAccounts.unmask',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst linkedBankAccountUnmaskV1 = await client.embed.linkedBankAccounts.unmask(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(linkedBankAccountUnmaskV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'linked_bank_accounts cancel',
        example:
          "straddle embed:linked-bank-accounts cancel \\\n  --api-key 'My API Key' \\\n  --linked-bank-account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.LinkedBankAccounts.Cancel',
        example:
          'LinkedBankAccountCancelParams parameters = new()\n{\n    LinkedBankAccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar linkedBankAccountV1 = await client.Embed.LinkedBankAccounts.Cancel(parameters);\n\nConsole.WriteLine(linkedBankAccountV1);',
      },
      go: {
        method: 'client.Embed.LinkedBankAccounts.Cancel',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tlinkedBankAccountV1, err := client.Embed.LinkedBankAccounts.Cancel(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedLinkedBankAccountCancelParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", linkedBankAccountV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/linked_bank_accounts/$LINKED_BANK_ACCOUNT_ID/cancel \\\n    -X PATCH \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.linked_bank_accounts.cancel',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nlinked_bank_account_v1 = client.embed.linked_bank_accounts.cancel(\n    linked_bank_account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(linked_bank_account_v1.data)',
      },
      ruby: {
        method: 'embed.linked_bank_accounts.cancel',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nlinked_bank_account_v1 = straddle.embed.linked_bank_accounts.cancel("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(linked_bank_account_v1)',
      },
      typescript: {
        method: 'client.embed.linkedBankAccounts.cancel',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst linkedBankAccountV1 = await client.embed.linkedBankAccounts.cancel(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(linkedBankAccountV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'organizations create',
        example: "straddle embed:organizations create \\\n  --api-key 'My API Key' \\\n  --name name",
      },
      csharp: {
        method: 'Embed.Organizations.Create',
        example:
          'OrganizationCreateParams parameters = new() { Name = "name" };\n\nvar organizationV1 = await client.Embed.Organizations.Create(parameters);\n\nConsole.WriteLine(organizationV1);',
      },
      go: {
        method: 'client.Embed.Organizations.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torganizationV1, err := client.Embed.Organizations.New(context.TODO(), straddle.EmbedOrganizationNewParams{\n\t\tName: "name",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", organizationV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/organizations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
      python: {
        method: 'embed.organizations.create',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\norganization_v1 = client.embed.organizations.create(\n    name="name",\n)\nprint(organization_v1.data)',
      },
      ruby: {
        method: 'embed.organizations.create',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\norganization_v1 = straddle.embed.organizations.create(name: "name")\n\nputs(organization_v1)',
      },
      typescript: {
        method: 'client.embed.organizations.create',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst organizationV1 = await client.embed.organizations.create({ name: 'name' });\n\nconsole.log(organizationV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'organizations list',
        example: "straddle embed:organizations list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Embed.Organizations.List',
        example:
          'OrganizationListParams parameters = new();\n\nvar page = await client.Embed.Organizations.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Embed.Organizations.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Embed.Organizations.List(context.TODO(), straddle.EmbedOrganizationListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/organizations \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.organizations.list',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.embed.organizations.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'embed.organizations.list',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npage = straddle.embed.organizations.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.embed.organizations.list',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const organization of client.embed.organizations.list()) {\n  console.log(organization.id);\n}",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'organizations get',
        example:
          "straddle embed:organizations get \\\n  --api-key 'My API Key' \\\n  --organization-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.Organizations.Get',
        example:
          'OrganizationGetParams parameters = new()\n{\n    OrganizationID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar organizationV1 = await client.Embed.Organizations.Get(parameters);\n\nConsole.WriteLine(organizationV1);',
      },
      go: {
        method: 'client.Embed.Organizations.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torganizationV1, err := client.Embed.Organizations.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedOrganizationGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", organizationV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/organizations/$ORGANIZATION_ID \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.organizations.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\norganization_v1 = client.embed.organizations.get(\n    organization_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(organization_v1.data)',
      },
      ruby: {
        method: 'embed.organizations.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\norganization_v1 = straddle.embed.organizations.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(organization_v1)',
      },
      typescript: {
        method: 'client.embed.organizations.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst organizationV1 = await client.embed.organizations.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(organizationV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'representatives create',
        example:
          "straddle embed:representatives create \\\n  --api-key 'My API Key' \\\n  --account-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --dob \"'1980-01-01'\" \\\n  --email ron.swanson@pawnee.com \\\n  --first-name first_name \\\n  --last-name last_name \\\n  --mobile-number +12128675309 \\\n  --relationship '{control: true, owner: true, primary: true}' \\\n  --ssn-last4 1234",
      },
      csharp: {
        method: 'Embed.Representatives.Create',
        example:
          'RepresentativeCreateParams parameters = new()\n{\n    AccountID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Dob = "1980-01-01",\n    Email = "ron.swanson@pawnee.com",\n    FirstName = "first_name",\n    LastName = "last_name",\n    MobileNumber = "+12128675309",\n    Relationship = new()\n    {\n        Control = true,\n        Owner = true,\n        Primary = true,\n        PercentOwnership = 0,\n        Title = "title",\n    },\n    SsnLast4 = "1234",\n};\n\nvar representative = await client.Embed.Representatives.Create(parameters);\n\nConsole.WriteLine(representative);',
      },
      go: {
        method: 'client.Embed.Representatives.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\trepresentative, err := client.Embed.Representatives.New(context.TODO(), straddle.EmbedRepresentativeNewParams{\n\t\tAccountID:    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tDob:          time.Now(),\n\t\tEmail:        "ron.swanson@pawnee.com",\n\t\tFirstName:    "first_name",\n\t\tLastName:     "last_name",\n\t\tMobileNumber: "+12128675309",\n\t\tRelationship: straddle.EmbedRepresentativeNewParamsRelationship{\n\t\t\tControl: true,\n\t\t\tOwner:   true,\n\t\t\tPrimary: true,\n\t\t},\n\t\tSsnLast4: "1234",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", representative.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/representatives \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "account_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "dob": "1980-01-01",\n          "email": "ron.swanson@pawnee.com",\n          "first_name": "first_name",\n          "last_name": "last_name",\n          "mobile_number": "+12128675309",\n          "relationship": {\n            "control": true,\n            "owner": true,\n            "primary": true\n          },\n          "ssn_last4": "1234"\n        }\'',
      },
      python: {
        method: 'embed.representatives.create',
        example:
          'import os\nfrom datetime import date\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nrepresentative = client.embed.representatives.create(\n    account_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    dob=date.fromisoformat("1980-01-01"),\n    email="ron.swanson@pawnee.com",\n    first_name="first_name",\n    last_name="last_name",\n    mobile_number="+12128675309",\n    relationship={\n        "control": True,\n        "owner": True,\n        "primary": True,\n    },\n    ssn_last4="1234",\n)\nprint(representative.data)',
      },
      ruby: {
        method: 'embed.representatives.create',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nrepresentative = straddle.embed.representatives.create(\n  account_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  dob: "1980-01-01",\n  email: "ron.swanson@pawnee.com",\n  first_name: "first_name",\n  last_name: "last_name",\n  mobile_number: "+12128675309",\n  relationship: {control: true, owner: true, primary: true},\n  ssn_last4: "1234"\n)\n\nputs(representative)',
      },
      typescript: {
        method: 'client.embed.representatives.create',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst representative = await client.embed.representatives.create({\n  account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  dob: '1980-01-01',\n  email: 'ron.swanson@pawnee.com',\n  first_name: 'first_name',\n  last_name: 'last_name',\n  mobile_number: '+12128675309',\n  relationship: {\n    control: true,\n    owner: true,\n    primary: true,\n  },\n  ssn_last4: '1234',\n});\n\nconsole.log(representative.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'representatives list',
        example: "straddle embed:representatives list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Embed.Representatives.List',
        example:
          'RepresentativeListParams parameters = new();\n\nvar page = await client.Embed.Representatives.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Embed.Representatives.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Embed.Representatives.List(context.TODO(), straddle.EmbedRepresentativeListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/representatives \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.representatives.list',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.embed.representatives.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'embed.representatives.list',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npage = straddle.embed.representatives.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.embed.representatives.list',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const representative of client.embed.representatives.list()) {\n  console.log(representative.id);\n}",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'representatives update',
        example:
          "straddle embed:representatives update \\\n  --api-key 'My API Key' \\\n  --representative-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --dob \"'1980-01-01'\" \\\n  --email ron.swanson@pawnee.com \\\n  --first-name Ron \\\n  --last-name Swanson \\\n  --mobile-number +12128675309 \\\n  --relationship '{control: true, owner: true, primary: true}' \\\n  --ssn-last4 1234",
      },
      csharp: {
        method: 'Embed.Representatives.Update',
        example:
          'RepresentativeUpdateParams parameters = new()\n{\n    RepresentativeID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Dob = "1980-01-01",\n    Email = "ron.swanson@pawnee.com",\n    FirstName = "Ron",\n    LastName = "Swanson",\n    MobileNumber = "+12128675309",\n    Relationship = new()\n    {\n        Control = true,\n        Owner = true,\n        Primary = true,\n        PercentOwnership = 0,\n        Title = "title",\n    },\n    SsnLast4 = "1234",\n};\n\nvar representative = await client.Embed.Representatives.Update(parameters);\n\nConsole.WriteLine(representative);',
      },
      go: {
        method: 'client.Embed.Representatives.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\trepresentative, err := client.Embed.Representatives.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedRepresentativeUpdateParams{\n\t\t\tDob:          time.Now(),\n\t\t\tEmail:        "ron.swanson@pawnee.com",\n\t\t\tFirstName:    "Ron",\n\t\t\tLastName:     "Swanson",\n\t\t\tMobileNumber: "+12128675309",\n\t\t\tRelationship: straddle.EmbedRepresentativeUpdateParamsRelationship{\n\t\t\t\tControl: true,\n\t\t\t\tOwner:   true,\n\t\t\t\tPrimary: true,\n\t\t\t},\n\t\t\tSsnLast4: "1234",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", representative.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/representatives/$REPRESENTATIVE_ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "dob": "1980-01-01",\n          "email": "ron.swanson@pawnee.com",\n          "first_name": "Ron",\n          "last_name": "Swanson",\n          "mobile_number": "+12128675309",\n          "relationship": {\n            "control": true,\n            "owner": true,\n            "primary": true\n          },\n          "ssn_last4": "1234"\n        }\'',
      },
      python: {
        method: 'embed.representatives.update',
        example:
          'import os\nfrom datetime import date\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nrepresentative = client.embed.representatives.update(\n    representative_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    dob=date.fromisoformat("1980-01-01"),\n    email="ron.swanson@pawnee.com",\n    first_name="Ron",\n    last_name="Swanson",\n    mobile_number="+12128675309",\n    relationship={\n        "control": True,\n        "owner": True,\n        "primary": True,\n    },\n    ssn_last4="1234",\n)\nprint(representative.data)',
      },
      ruby: {
        method: 'embed.representatives.update',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nrepresentative = straddle.embed.representatives.update(\n  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  dob: "1980-01-01",\n  email: "ron.swanson@pawnee.com",\n  first_name: "Ron",\n  last_name: "Swanson",\n  mobile_number: "+12128675309",\n  relationship: {control: true, owner: true, primary: true},\n  ssn_last4: "1234"\n)\n\nputs(representative)',
      },
      typescript: {
        method: 'client.embed.representatives.update',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst representative = await client.embed.representatives.update(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  {\n    dob: '1980-01-01',\n    email: 'ron.swanson@pawnee.com',\n    first_name: 'Ron',\n    last_name: 'Swanson',\n    mobile_number: '+12128675309',\n    relationship: {\n      control: true,\n      owner: true,\n      primary: true,\n    },\n    ssn_last4: '1234',\n  },\n);\n\nconsole.log(representative.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'representatives get',
        example:
          "straddle embed:representatives get \\\n  --api-key 'My API Key' \\\n  --representative-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.Representatives.Get',
        example:
          'RepresentativeGetParams parameters = new()\n{\n    RepresentativeID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar representative = await client.Embed.Representatives.Get(parameters);\n\nConsole.WriteLine(representative);',
      },
      go: {
        method: 'client.Embed.Representatives.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\trepresentative, err := client.Embed.Representatives.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedRepresentativeGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", representative.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/representatives/$REPRESENTATIVE_ID \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.representatives.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nrepresentative = client.embed.representatives.get(\n    representative_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(representative.data)',
      },
      ruby: {
        method: 'embed.representatives.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nrepresentative = straddle.embed.representatives.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(representative)',
      },
      typescript: {
        method: 'client.embed.representatives.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst representative = await client.embed.representatives.get(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(representative.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'representatives unmask',
        example:
          "straddle embed:representatives unmask \\\n  --api-key 'My API Key' \\\n  --representative-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Embed.Representatives.Unmask',
        example:
          'RepresentativeUnmaskParams parameters = new()\n{\n    RepresentativeID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar representative = await client.Embed.Representatives.Unmask(parameters);\n\nConsole.WriteLine(representative);',
      },
      go: {
        method: 'client.Embed.Representatives.Unmask',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\trepresentative, err := client.Embed.Representatives.Unmask(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.EmbedRepresentativeUnmaskParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", representative.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/representatives/$REPRESENTATIVE_ID/unmask \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'embed.representatives.unmask',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nrepresentative = client.embed.representatives.unmask(\n    representative_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(representative.data)',
      },
      ruby: {
        method: 'embed.representatives.unmask',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nrepresentative = straddle.embed.representatives.unmask("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(representative)',
      },
      typescript: {
        method: 'client.embed.representatives.unmask',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst representative = await client.embed.representatives.unmask(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(representative.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'bridge initialize',
        example:
          "straddle bridge initialize \\\n  --api-key 'My API Key' \\\n  --customer-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Bridge.Initialize',
        example:
          'BridgeInitializeParams parameters = new()\n{\n    CustomerID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar bridgeTokenV1 = await client.Bridge.Initialize(parameters);\n\nConsole.WriteLine(bridgeTokenV1);',
      },
      go: {
        method: 'client.Bridge.Initialize',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tbridgeTokenV1, err := client.Bridge.Initialize(context.TODO(), straddle.BridgeInitializeParams{\n\t\tCustomerID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", bridgeTokenV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/bridge/initialize \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "customer_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
      python: {
        method: 'bridge.initialize',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nbridge_token_v1 = client.bridge.initialize(\n    customer_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(bridge_token_v1.data)',
      },
      ruby: {
        method: 'bridge.initialize_',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nbridge_token_v1 = straddle.bridge.initialize_(customer_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(bridge_token_v1)',
      },
      typescript: {
        method: 'client.bridge.initialize',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst bridgeTokenV1 = await client.bridge.initialize({\n  customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(bridgeTokenV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'link bank_account',
        example:
          "straddle bridge:link bank-account \\\n  --api-key 'My API Key' \\\n  --account-number account_number \\\n  --account-type checking \\\n  --customer-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --routing-number xxxxxxxxx",
      },
      csharp: {
        method: 'Bridge.Link.BankAccount',
        example:
          'LinkBankAccountParams parameters = new()\n{\n    AccountNumber = "account_number",\n    AccountType = AccountType.Checking,\n    CustomerID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    RoutingNumber = "xxxxxxxxx",\n};\n\nvar paykeyV1 = await client.Bridge.Link.BankAccount(parameters);\n\nConsole.WriteLine(paykeyV1);',
      },
      go: {
        method: 'client.Bridge.Link.BankAccount',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaykeyV1, err := client.Bridge.Link.BankAccount(context.TODO(), straddle.BridgeLinkBankAccountParams{\n\t\tAccountNumber: "account_number",\n\t\tAccountType:   straddle.BridgeLinkBankAccountParamsAccountTypeChecking,\n\t\tCustomerID:    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tRoutingNumber: "xxxxxxxxx",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paykeyV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/bridge/bank_account \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "account_number": "account_number",\n          "account_type": "checking",\n          "customer_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "routing_number": "xxxxxxxxx"\n        }\'',
      },
      python: {
        method: 'bridge.link.bank_account',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npaykey_v1 = client.bridge.link.bank_account(\n    account_number="account_number",\n    account_type="checking",\n    customer_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    routing_number="xxxxxxxxx",\n)\nprint(paykey_v1.data)',
      },
      ruby: {
        method: 'bridge.link.bank_account',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npaykey_v1 = straddle.bridge.link.bank_account(\n  account_number: "account_number",\n  account_type: :checking,\n  customer_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  routing_number: "xxxxxxxxx"\n)\n\nputs(paykey_v1)',
      },
      typescript: {
        method: 'client.bridge.link.bankAccount',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst paykeyV1 = await client.bridge.link.bankAccount({\n  account_number: 'account_number',\n  account_type: 'checking',\n  customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  routing_number: 'xxxxxxxxx',\n});\n\nconsole.log(paykeyV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'link plaid',
        example:
          "straddle bridge:link plaid \\\n  --api-key 'My API Key' \\\n  --customer-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --plaid-token plaid_token",
      },
      csharp: {
        method: 'Bridge.Link.Plaid',
        example:
          'LinkPlaidParams parameters = new()\n{\n    CustomerID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    PlaidToken = "plaid_token",\n};\n\nvar paykeyV1 = await client.Bridge.Link.Plaid(parameters);\n\nConsole.WriteLine(paykeyV1);',
      },
      go: {
        method: 'client.Bridge.Link.Plaid',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaykeyV1, err := client.Bridge.Link.Plaid(context.TODO(), straddle.BridgeLinkPlaidParams{\n\t\tCustomerID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tPlaidToken: "plaid_token",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paykeyV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/bridge/plaid \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "customer_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "plaid_token": "plaid_token"\n        }\'',
      },
      python: {
        method: 'bridge.link.plaid',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npaykey_v1 = client.bridge.link.plaid(\n    customer_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    plaid_token="plaid_token",\n)\nprint(paykey_v1.data)',
      },
      ruby: {
        method: 'bridge.link.plaid',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npaykey_v1 = straddle.bridge.link.plaid(\n  customer_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  plaid_token: "plaid_token"\n)\n\nputs(paykey_v1)',
      },
      typescript: {
        method: 'client.bridge.link.plaid',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst paykeyV1 = await client.bridge.link.plaid({\n  customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  plaid_token: 'plaid_token',\n});\n\nconsole.log(paykeyV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'link create_tan',
        example:
          "straddle bridge:link create-tan \\\n  --api-key 'My API Key' \\\n  --account-type checking \\\n  --customer-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --routing-number routing_number \\\n  --tan tan",
      },
      csharp: {
        method: 'Bridge.Link.CreateTan',
        example:
          'LinkCreateTanParams parameters = new()\n{\n    AccountType = AccountType.Checking,\n    CustomerID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    RoutingNumber = "routing_number",\n    Tan = "tan",\n};\n\nvar response = await client.Bridge.Link.CreateTan(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Bridge.Link.NewTan',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Bridge.Link.NewTan(context.TODO(), straddle.BridgeLinkNewTanParams{\n\t\tAccountType:   straddle.BridgeLinkNewTanParamsAccountTypeChecking,\n\t\tCustomerID:    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tRoutingNumber: "routing_number",\n\t\tTan:           "tan",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/bridge/tan \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "account_type": "checking",\n          "customer_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "routing_number": "routing_number",\n          "tan": "tan"\n        }\'',
      },
      python: {
        method: 'bridge.link.create_tan',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.bridge.link.create_tan(\n    account_type="checking",\n    customer_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    routing_number="routing_number",\n    tan="tan",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'bridge.link.create_tan',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nresponse = straddle.bridge.link.create_tan(\n  account_type: :checking,\n  customer_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  routing_number: "routing_number",\n  tan: "tan"\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.bridge.link.createTan',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.bridge.link.createTan({\n  account_type: 'checking',\n  customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  routing_number: 'routing_number',\n  tan: 'tan',\n});\n\nconsole.log(response.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'link create_paykey',
        example:
          "straddle bridge:link create-paykey \\\n  --api-key 'My API Key' \\\n  --customer-id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --quiltt-token quiltt_token",
      },
      csharp: {
        method: 'Bridge.Link.CreatePaykey',
        example:
          'LinkCreatePaykeyParams parameters = new()\n{\n    CustomerID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    QuilttToken = "quiltt_token",\n};\n\nvar response = await client.Bridge.Link.CreatePaykey(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Bridge.Link.NewPaykey',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Bridge.Link.NewPaykey(context.TODO(), straddle.BridgeLinkNewPaykeyParams{\n\t\tCustomerID:  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tQuilttToken: "quiltt_token",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/bridge/quiltt \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "customer_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "quiltt_token": "quiltt_token"\n        }\'',
      },
      python: {
        method: 'bridge.link.create_paykey',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.bridge.link.create_paykey(\n    customer_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    quiltt_token="quiltt_token",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'bridge.link.create_paykey',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nresponse = straddle.bridge.link.create_paykey(\n  customer_id: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  quiltt_token: "quiltt_token"\n)\n\nputs(response)',
      },
      typescript: {
        method: 'client.bridge.link.createPaykey',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.bridge.link.createPaykey({\n  customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  quiltt_token: 'quiltt_token',\n});\n\nconsole.log(response.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'customers get',
        example:
          "straddle customers get \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Customers.Get',
        example:
          'CustomerGetParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar customerV1 = await client.Customers.Get(parameters);\n\nConsole.WriteLine(customerV1);',
      },
      go: {
        method: 'client.Customers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerV1, err := client.Customers.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.CustomerGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/customers/$ID \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'customers.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_v1 = client.customers.get(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(customer_v1.data)',
      },
      ruby: {
        method: 'customers.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncustomer_v1 = straddle.customers.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(customer_v1)',
      },
      typescript: {
        method: 'client.customers.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerV1 = await client.customers.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(customerV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'customers update',
        example:
          "straddle customers update \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --device '{ip_address: 192.168.1.1}' \\\n  --email dev@stainless.com \\\n  --name name \\\n  --phone +46991022 \\\n  --status pending",
      },
      csharp: {
        method: 'Customers.Update',
        example:
          'CustomerUpdateParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Device = new("192.168.1.1"),\n    Email = "dev@stainless.com",\n    Name = "name",\n    Phone = "+46991022",\n    Status = Status.Pending,\n};\n\nvar customerV1 = await client.Customers.Update(parameters);\n\nConsole.WriteLine(customerV1);',
      },
      go: {
        method: 'client.Customers.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerV1, err := client.Customers.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.CustomerUpdateParams{\n\t\t\tDevice: straddle.DeviceUnmaskedV1Param{\n\t\t\t\tIPAddress: "192.168.1.1",\n\t\t\t},\n\t\t\tEmail:  "dev@stainless.com",\n\t\t\tName:   "name",\n\t\t\tPhone:  "+46991022",\n\t\t\tStatus: straddle.CustomerUpdateParamsStatusPending,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/customers/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "device": {\n            "ip_address": "192.168.1.1"\n          },\n          "email": "dev@stainless.com",\n          "name": "name",\n          "phone": "+46991022",\n          "status": "pending"\n        }\'',
      },
      python: {
        method: 'customers.update',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_v1 = client.customers.update(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    email="dev@stainless.com",\n    name="name",\n    phone="+46991022",\n    status="pending",\n)\nprint(customer_v1.data)',
      },
      ruby: {
        method: 'customers.update',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncustomer_v1 = straddle.customers.update(\n  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  device: {ip_address: "192.168.1.1"},\n  email: "dev@stainless.com",\n  name: "name",\n  phone: "+46991022",\n  status: :pending\n)\n\nputs(customer_v1)',
      },
      typescript: {
        method: 'client.customers.update',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerV1 = await client.customers.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  device: { ip_address: '192.168.1.1' },\n  email: 'dev@stainless.com',\n  name: 'name',\n  phone: '+46991022',\n  status: 'pending',\n});\n\nconsole.log(customerV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'customers delete',
        example:
          "straddle customers delete \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Customers.Delete',
        example:
          'CustomerDeleteParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar customerV1 = await client.Customers.Delete(parameters);\n\nConsole.WriteLine(customerV1);',
      },
      go: {
        method: 'client.Customers.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerV1, err := client.Customers.Delete(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.CustomerDeleteParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/customers/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'customers.delete',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_v1 = client.customers.delete(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(customer_v1.data)',
      },
      ruby: {
        method: 'customers.delete',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncustomer_v1 = straddle.customers.delete("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(customer_v1)',
      },
      typescript: {
        method: 'client.customers.delete',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerV1 = await client.customers.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(customerV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'customers list',
        example: "straddle customers list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Customers.List',
        example:
          'CustomerListParams parameters = new();\n\nvar page = await client.Customers.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Customers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Customers.List(context.TODO(), straddle.CustomerListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/customers \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'customers.list',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.customers.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'customers.list',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npage = straddle.customers.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.customers.list',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const customer of client.customers.list()) {\n  console.log(customer.id);\n}",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'customers create',
        example:
          "straddle customers create \\\n  --api-key 'My API Key' \\\n  --device '{ip_address: 192.168.1.1}' \\\n  --email ron.swanson@pawnee.com \\\n  --name 'Ron Swanson' \\\n  --phone +12128675309 \\\n  --type individual",
      },
      csharp: {
        method: 'Customers.Create',
        example:
          'CustomerCreateParams parameters = new()\n{\n    Device = new("192.168.1.1"),\n    Email = "ron.swanson@pawnee.com",\n    Name = "Ron Swanson",\n    Phone = "+12128675309",\n    Type = Type.Individual,\n};\n\nvar customerV1 = await client.Customers.Create(parameters);\n\nConsole.WriteLine(customerV1);',
      },
      go: {
        method: 'client.Customers.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerV1, err := client.Customers.New(context.TODO(), straddle.CustomerNewParams{\n\t\tDevice: straddle.DeviceUnmaskedV1Param{\n\t\t\tIPAddress: "192.168.1.1",\n\t\t},\n\t\tEmail: "ron.swanson@pawnee.com",\n\t\tName:  "Ron Swanson",\n\t\tPhone: "+12128675309",\n\t\tType:  straddle.CustomerNewParamsTypeIndividual,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/customers \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "device": {\n            "ip_address": "192.168.1.1"\n          },\n          "email": "ron.swanson@pawnee.com",\n          "name": "Ron Swanson",\n          "phone": "+12128675309",\n          "type": "individual",\n          "external_id": "customer_123"\n        }\'',
      },
      python: {
        method: 'customers.create',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_v1 = client.customers.create(\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    email="ron.swanson@pawnee.com",\n    name="Ron Swanson",\n    phone="+12128675309",\n    type="individual",\n)\nprint(customer_v1.data)',
      },
      ruby: {
        method: 'customers.create',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncustomer_v1 = straddle.customers.create(\n  device: {ip_address: "192.168.1.1"},\n  email: "ron.swanson@pawnee.com",\n  name: "Ron Swanson",\n  phone: "+12128675309",\n  type: :individual\n)\n\nputs(customer_v1)',
      },
      typescript: {
        method: 'client.customers.create',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerV1 = await client.customers.create({\n  device: { ip_address: '192.168.1.1' },\n  email: 'ron.swanson@pawnee.com',\n  name: 'Ron Swanson',\n  phone: '+12128675309',\n  type: 'individual',\n});\n\nconsole.log(customerV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'customers unmasked',
        example:
          "straddle customers unmasked \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Customers.Unmasked',
        example:
          'CustomerUnmaskedParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar customerUnmaskedV1 = await client.Customers.Unmasked(parameters);\n\nConsole.WriteLine(customerUnmaskedV1);',
      },
      go: {
        method: 'client.Customers.Unmasked',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerUnmaskedV1, err := client.Customers.Unmasked(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.CustomerUnmaskedParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerUnmaskedV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/customers/$ID/unmasked \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'customers.unmasked',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_unmasked_v1 = client.customers.unmasked(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(customer_unmasked_v1.data)',
      },
      ruby: {
        method: 'customers.unmasked',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncustomer_unmasked_v1 = straddle.customers.unmasked("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(customer_unmasked_v1)',
      },
      typescript: {
        method: 'client.customers.unmasked',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerUnmaskedV1 = await client.customers.unmasked('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(customerUnmaskedV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'review get',
        example:
          "straddle customers:review get \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Customers.Review.Get',
        example:
          'ReviewGetParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar customerReviewV1 = await client.Customers.Review.Get(parameters);\n\nConsole.WriteLine(customerReviewV1);',
      },
      go: {
        method: 'client.Customers.Review.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerReviewV1, err := client.Customers.Review.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.CustomerReviewGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerReviewV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/customers/$ID/review \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'customers.review.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_review_v1 = client.customers.review.get(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(customer_review_v1.data)',
      },
      ruby: {
        method: 'customers.review.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncustomer_review_v1 = straddle.customers.review.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(customer_review_v1)',
      },
      typescript: {
        method: 'client.customers.review.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerReviewV1 = await client.customers.review.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(customerReviewV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'review decision',
        example:
          "straddle customers:review decision \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --status verified",
      },
      csharp: {
        method: 'Customers.Review.Decision',
        example:
          'ReviewDecisionParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Status = Status.Verified,\n};\n\nvar customerV1 = await client.Customers.Review.Decision(parameters);\n\nConsole.WriteLine(customerV1);',
      },
      go: {
        method: 'client.Customers.Review.Decision',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerV1, err := client.Customers.Review.Decision(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.CustomerReviewDecisionParams{\n\t\t\tStatus: straddle.CustomerReviewDecisionParamsStatusVerified,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/customers/$ID/review \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "status": "verified"\n        }\'',
      },
      python: {
        method: 'customers.review.decision',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_v1 = client.customers.review.decision(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    status="verified",\n)\nprint(customer_v1.data)',
      },
      ruby: {
        method: 'customers.review.decision',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncustomer_v1 = straddle.customers.review.decision("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e", status: :verified)\n\nputs(customer_v1)',
      },
      typescript: {
        method: 'client.customers.review.decision',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerV1 = await client.customers.review.decision('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  status: 'verified',\n});\n\nconsole.log(customerV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'review refresh_review',
        example:
          "straddle customers:review refresh-review \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Customers.Review.RefreshReview',
        example:
          'ReviewRefreshReviewParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar customerV1 = await client.Customers.Review.RefreshReview(parameters);\n\nConsole.WriteLine(customerV1);',
      },
      go: {
        method: 'client.Customers.Review.RefreshReview',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tcustomerV1, err := client.Customers.Review.RefreshReview(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.CustomerReviewRefreshReviewParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", customerV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/customers/$ID/refresh_review \\\n    -X PUT \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'customers.review.refresh_review',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncustomer_v1 = client.customers.review.refresh_review(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(customer_v1.data)',
      },
      ruby: {
        method: 'customers.review.refresh_review',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncustomer_v1 = straddle.customers.review.refresh_review("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(customer_v1)',
      },
      typescript: {
        method: 'client.customers.review.refreshReview',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst customerV1 = await client.customers.review.refreshReview(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(customerV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'paykeys get',
        example:
          "straddle paykeys get \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Paykeys.Get',
        example:
          'PaykeyGetParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar paykeyV1 = await client.Paykeys.Get(parameters);\n\nConsole.WriteLine(paykeyV1);',
      },
      go: {
        method: 'client.Paykeys.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaykeyV1, err := client.Paykeys.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PaykeyGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paykeyV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/paykeys/$ID \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'paykeys.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npaykey_v1 = client.paykeys.get(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(paykey_v1.data)',
      },
      ruby: {
        method: 'paykeys.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npaykey_v1 = straddle.paykeys.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(paykey_v1)',
      },
      typescript: {
        method: 'client.paykeys.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst paykeyV1 = await client.paykeys.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'paykeys unmasked',
        example:
          "straddle paykeys unmasked \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Paykeys.Unmasked',
        example:
          'PaykeyUnmaskedParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar paykeyUnmaskedV1 = await client.Paykeys.Unmasked(parameters);\n\nConsole.WriteLine(paykeyUnmaskedV1);',
      },
      go: {
        method: 'client.Paykeys.Unmasked',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaykeyUnmaskedV1, err := client.Paykeys.Unmasked(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PaykeyUnmaskedParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paykeyUnmaskedV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/paykeys/$ID/unmasked \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'paykeys.unmasked',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npaykey_unmasked_v1 = client.paykeys.unmasked(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(paykey_unmasked_v1.data)',
      },
      ruby: {
        method: 'paykeys.unmasked',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npaykey_unmasked_v1 = straddle.paykeys.unmasked("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(paykey_unmasked_v1)',
      },
      typescript: {
        method: 'client.paykeys.unmasked',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst paykeyUnmaskedV1 = await client.paykeys.unmasked('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyUnmaskedV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'paykeys list',
        example: "straddle paykeys list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Paykeys.List',
        example:
          'PaykeyListParams parameters = new();\n\nvar page = await client.Paykeys.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Paykeys.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Paykeys.List(context.TODO(), straddle.PaykeyListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/paykeys \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'paykeys.list',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.paykeys.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'paykeys.list',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npage = straddle.paykeys.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.paykeys.list',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const paykey of client.paykeys.list()) {\n  console.log(paykey.id);\n}",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'paykeys reveal',
        example:
          "straddle paykeys reveal \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Paykeys.Reveal',
        example:
          'PaykeyRevealParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar response = await client.Paykeys.Reveal(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Paykeys.Reveal',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Paykeys.Reveal(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PaykeyRevealParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/paykeys/$ID/reveal \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'paykeys.reveal',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.paykeys.reveal(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'paykeys.reveal',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nresponse = straddle.paykeys.reveal("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(response)',
      },
      typescript: {
        method: 'client.paykeys.reveal',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.paykeys.reveal('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'paykeys cancel',
        example:
          "straddle paykeys cancel \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Paykeys.Cancel',
        example:
          'PaykeyCancelParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar paykeyV1 = await client.Paykeys.Cancel(parameters);\n\nConsole.WriteLine(paykeyV1);',
      },
      go: {
        method: 'client.Paykeys.Cancel',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaykeyV1, err := client.Paykeys.Cancel(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PaykeyCancelParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paykeyV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/paykeys/$ID/cancel \\\n    -X PUT \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'paykeys.cancel',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npaykey_v1 = client.paykeys.cancel(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(paykey_v1.data)',
      },
      ruby: {
        method: 'paykeys.cancel',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npaykey_v1 = straddle.paykeys.cancel("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(paykey_v1)',
      },
      typescript: {
        method: 'client.paykeys.cancel',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst paykeyV1 = await client.paykeys.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'paykeys update_balance',
        example:
          "straddle paykeys update-balance \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Paykeys.UpdateBalance',
        example:
          'PaykeyUpdateBalanceParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar paykeyV1 = await client.Paykeys.UpdateBalance(parameters);\n\nConsole.WriteLine(paykeyV1);',
      },
      go: {
        method: 'client.Paykeys.UpdateBalance',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaykeyV1, err := client.Paykeys.UpdateBalance(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PaykeyUpdateBalanceParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paykeyV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/paykeys/$ID/refresh_balance \\\n    -X PUT \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'paykeys.update_balance',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npaykey_v1 = client.paykeys.update_balance(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(paykey_v1.data)',
      },
      ruby: {
        method: 'paykeys.update_balance',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npaykey_v1 = straddle.paykeys.update_balance("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(paykey_v1)',
      },
      typescript: {
        method: 'client.paykeys.updateBalance',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst paykeyV1 = await client.paykeys.updateBalance('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'review decision',
        example:
          "straddle paykeys:review decision \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --status active",
      },
      csharp: {
        method: 'Paykeys.Review.Decision',
        example:
          'ReviewDecisionParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Status = Status.Active,\n};\n\nvar paykeyV1 = await client.Paykeys.Review.Decision(parameters);\n\nConsole.WriteLine(paykeyV1);',
      },
      go: {
        method: 'client.Paykeys.Review.Decision',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaykeyV1, err := client.Paykeys.Review.Decision(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PaykeyReviewDecisionParams{\n\t\t\tStatus: straddle.PaykeyReviewDecisionParamsStatusActive,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paykeyV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/paykeys/$ID/review \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "status": "active"\n        }\'',
      },
      python: {
        method: 'paykeys.review.decision',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npaykey_v1 = client.paykeys.review.decision(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    status="active",\n)\nprint(paykey_v1.data)',
      },
      ruby: {
        method: 'paykeys.review.decision',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npaykey_v1 = straddle.paykeys.review.decision("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e", status: :active)\n\nputs(paykey_v1)',
      },
      typescript: {
        method: 'client.paykeys.review.decision',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst paykeyV1 = await client.paykeys.review.decision('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  status: 'active',\n});\n\nconsole.log(paykeyV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'review get',
        example:
          "straddle paykeys:review get \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Paykeys.Review.Get',
        example:
          'ReviewGetParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar review = await client.Paykeys.Review.Get(parameters);\n\nConsole.WriteLine(review);',
      },
      go: {
        method: 'client.Paykeys.Review.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\treview, err := client.Paykeys.Review.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PaykeyReviewGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", review.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/paykeys/$ID/review \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'paykeys.review.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nreview = client.paykeys.review.get(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(review.data)',
      },
      ruby: {
        method: 'paykeys.review.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nreview = straddle.paykeys.review.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(review)',
      },
      typescript: {
        method: 'client.paykeys.review.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst review = await client.paykeys.review.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(review.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'review refresh_review',
        example:
          "straddle paykeys:review refresh-review \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Paykeys.Review.RefreshReview',
        example:
          'ReviewRefreshReviewParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar paykeyV1 = await client.Paykeys.Review.RefreshReview(parameters);\n\nConsole.WriteLine(paykeyV1);',
      },
      go: {
        method: 'client.Paykeys.Review.RefreshReview',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpaykeyV1, err := client.Paykeys.Review.RefreshReview(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PaykeyReviewRefreshReviewParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", paykeyV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/paykeys/$ID/refresh_review \\\n    -X PUT \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'paykeys.review.refresh_review',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npaykey_v1 = client.paykeys.review.refresh_review(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(paykey_v1.data)',
      },
      ruby: {
        method: 'paykeys.review.refresh_review',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npaykey_v1 = straddle.paykeys.review.refresh_review("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(paykey_v1)',
      },
      typescript: {
        method: 'client.paykeys.review.refreshReview',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst paykeyV1 = await client.paykeys.review.refreshReview('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(paykeyV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'charges get',
        example:
          "straddle charges get \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Charges.Get',
        example:
          'ChargeGetParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar chargeV1 = await client.Charges.Get(parameters);\n\nConsole.WriteLine(chargeV1);',
      },
      go: {
        method: 'client.Charges.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tchargeV1, err := client.Charges.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.ChargeGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", chargeV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/charges/$ID \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'charges.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncharge_v1 = client.charges.get(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(charge_v1.data)',
      },
      ruby: {
        method: 'charges.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncharge_v1 = straddle.charges.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(charge_v1)',
      },
      typescript: {
        method: 'client.charges.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst chargeV1 = await client.charges.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(chargeV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'charges update',
        example:
          "straddle charges update \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --amount 10000 \\\n  --description 'Monthly subscription fee' \\\n  --payment-date \"'2019-12-27'\"",
      },
      csharp: {
        method: 'Charges.Update',
        example:
          'ChargeUpdateParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Amount = 10000,\n    Description = "Monthly subscription fee",\n    PaymentDate = "2019-12-27",\n};\n\nvar chargeV1 = await client.Charges.Update(parameters);\n\nConsole.WriteLine(chargeV1);',
      },
      go: {
        method: 'client.Charges.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tchargeV1, err := client.Charges.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.ChargeUpdateParams{\n\t\t\tAmount:      10000,\n\t\t\tDescription: straddle.String("Monthly subscription fee"),\n\t\t\tPaymentDate: time.Now(),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", chargeV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/charges/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "amount": 10000,\n          "description": "Monthly subscription fee",\n          "payment_date": "2019-12-27"\n        }\'',
      },
      python: {
        method: 'charges.update',
        example:
          'import os\nfrom datetime import date\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncharge_v1 = client.charges.update(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    amount=10000,\n    description="Monthly subscription fee",\n    payment_date=date.fromisoformat("2019-12-27"),\n)\nprint(charge_v1.data)',
      },
      ruby: {
        method: 'charges.update',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncharge_v1 = straddle.charges.update(\n  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  amount: 10000,\n  description: "Monthly subscription fee",\n  payment_date: "2019-12-27"\n)\n\nputs(charge_v1)',
      },
      typescript: {
        method: 'client.charges.update',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst chargeV1 = await client.charges.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  amount: 10000,\n  description: 'Monthly subscription fee',\n  payment_date: '2019-12-27',\n});\n\nconsole.log(chargeV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'charges create',
        example:
          "straddle charges create \\\n  --api-key 'My API Key' \\\n  --amount 10000 \\\n  --config '{balance_check: required}' \\\n  --consent-type internet \\\n  --currency currency \\\n  --description 'Monthly subscription fee' \\\n  --device '{ip_address: 192.168.1.1}' \\\n  --external-id external_id \\\n  --paykey paykey \\\n  --payment-date \"'2019-12-27'\"",
      },
      csharp: {
        method: 'Charges.Create',
        example:
          'ChargeCreateParams parameters = new()\n{\n    Amount = 10000,\n    Config = new()\n    {\n        BalanceCheck = BalanceCheck.Required,\n        AutoHold = true,\n        AutoHoldMessage = "auto_hold_message",\n        SandboxOutcome = SandboxOutcome.Standard,\n    },\n    ConsentType = ConsentType.Internet,\n    Currency = "currency",\n    Description = "Monthly subscription fee",\n    Device = new("192.168.1.1"),\n    ExternalID = "external_id",\n    Paykey = "paykey",\n    PaymentDate = "2019-12-27",\n};\n\nvar chargeV1 = await client.Charges.Create(parameters);\n\nConsole.WriteLine(chargeV1);',
      },
      go: {
        method: 'client.Charges.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n\t"github.com/straddleio/straddle-go/shared"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tchargeV1, err := client.Charges.New(context.TODO(), straddle.ChargeNewParams{\n\t\tAmount: 10000,\n\t\tConfig: straddle.ChargeNewParamsConfig{\n\t\t\tBalanceCheck: "required",\n\t\t},\n\t\tConsentType: straddle.ChargeNewParamsConsentTypeInternet,\n\t\tCurrency:    "currency",\n\t\tDescription: straddle.String("Monthly subscription fee"),\n\t\tDevice: shared.DeviceInfoV1Param{\n\t\t\tIPAddress: "192.168.1.1",\n\t\t},\n\t\tExternalID:  "external_id",\n\t\tPaykey:      "paykey",\n\t\tPaymentDate: time.Now(),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", chargeV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/charges \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "amount": 10000,\n          "config": {\n            "balance_check": "required"\n          },\n          "consent_type": "internet",\n          "currency": "currency",\n          "description": "Monthly subscription fee",\n          "device": {\n            "ip_address": "192.168.1.1"\n          },\n          "external_id": "external_id",\n          "paykey": "paykey",\n          "payment_date": "2019-12-27"\n        }\'',
      },
      python: {
        method: 'charges.create',
        example:
          'import os\nfrom datetime import date\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncharge_v1 = client.charges.create(\n    amount=10000,\n    config={\n        "balance_check": "required"\n    },\n    consent_type="internet",\n    currency="currency",\n    description="Monthly subscription fee",\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    external_id="external_id",\n    paykey="paykey",\n    payment_date=date.fromisoformat("2019-12-27"),\n)\nprint(charge_v1.data)',
      },
      ruby: {
        method: 'charges.create',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncharge_v1 = straddle.charges.create(\n  amount: 10000,\n  config: {balance_check: :required},\n  consent_type: :internet,\n  currency: "currency",\n  description: "Monthly subscription fee",\n  device: {ip_address: "192.168.1.1"},\n  external_id: "external_id",\n  paykey: "paykey",\n  payment_date: "2019-12-27"\n)\n\nputs(charge_v1)',
      },
      typescript: {
        method: 'client.charges.create',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst chargeV1 = await client.charges.create({\n  amount: 10000,\n  config: { balance_check: 'required' },\n  consent_type: 'internet',\n  currency: 'currency',\n  description: 'Monthly subscription fee',\n  device: { ip_address: '192.168.1.1' },\n  external_id: 'external_id',\n  paykey: 'paykey',\n  payment_date: '2019-12-27',\n});\n\nconsole.log(chargeV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'charges hold',
        example:
          "straddle charges hold \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Charges.Hold',
        example:
          'ChargeHoldParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar chargeV1 = await client.Charges.Hold(parameters);\n\nConsole.WriteLine(chargeV1);',
      },
      go: {
        method: 'client.Charges.Hold',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tchargeV1, err := client.Charges.Hold(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.ChargeHoldParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", chargeV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/charges/$ID/hold \\\n    -X PUT \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'charges.hold',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncharge_v1 = client.charges.hold(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(charge_v1.data)',
      },
      ruby: {
        method: 'charges.hold',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncharge_v1 = straddle.charges.hold("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(charge_v1)',
      },
      typescript: {
        method: 'client.charges.hold',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst chargeV1 = await client.charges.hold('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(chargeV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'charges release',
        example:
          "straddle charges release \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Charges.Release',
        example:
          'ChargeReleaseParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar chargeV1 = await client.Charges.Release(parameters);\n\nConsole.WriteLine(chargeV1);',
      },
      go: {
        method: 'client.Charges.Release',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tchargeV1, err := client.Charges.Release(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.ChargeReleaseParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", chargeV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/charges/$ID/release \\\n    -X PUT \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'charges.release',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncharge_v1 = client.charges.release(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(charge_v1.data)',
      },
      ruby: {
        method: 'charges.release',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncharge_v1 = straddle.charges.release("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(charge_v1)',
      },
      typescript: {
        method: 'client.charges.release',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst chargeV1 = await client.charges.release('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(chargeV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'charges cancel',
        example:
          "straddle charges cancel \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Charges.Cancel',
        example:
          'ChargeCancelParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar chargeV1 = await client.Charges.Cancel(parameters);\n\nConsole.WriteLine(chargeV1);',
      },
      go: {
        method: 'client.Charges.Cancel',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tchargeV1, err := client.Charges.Cancel(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.ChargeCancelParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", chargeV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/charges/$ID/cancel \\\n    -X PUT \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'charges.cancel',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\ncharge_v1 = client.charges.cancel(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(charge_v1.data)',
      },
      ruby: {
        method: 'charges.cancel',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\ncharge_v1 = straddle.charges.cancel("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(charge_v1)',
      },
      typescript: {
        method: 'client.charges.cancel',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst chargeV1 = await client.charges.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(chargeV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'charges unmask',
        example:
          "straddle charges unmask \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Charges.Unmask',
        example:
          'ChargeUnmaskParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar response = await client.Charges.Unmask(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Charges.Unmask',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Charges.Unmask(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.ChargeUnmaskParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/charges/$ID/unmask \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'charges.unmask',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.charges.unmask(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'charges.unmask',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nresponse = straddle.charges.unmask("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(response)',
      },
      typescript: {
        method: 'client.charges.unmask',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.charges.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'funding_events list',
        example: "straddle funding-events list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'FundingEvents.List',
        example:
          'FundingEventListParams parameters = new();\n\nvar page = await client.FundingEvents.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.FundingEvents.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.FundingEvents.List(context.TODO(), straddle.FundingEventListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/funding_events \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'funding_events.list',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.funding_events.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'funding_events.list',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npage = straddle.funding_events.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.fundingEvents.list',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const fundingEvent of client.fundingEvents.list()) {\n  console.log(fundingEvent.id);\n}",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'funding_events get',
        example:
          "straddle funding-events get \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'FundingEvents.Get',
        example:
          'FundingEventGetParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar fundingEventSummaryItemV1 = await client.FundingEvents.Get(parameters);\n\nConsole.WriteLine(fundingEventSummaryItemV1);',
      },
      go: {
        method: 'client.FundingEvents.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfundingEventSummaryItemV1, err := client.FundingEvents.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.FundingEventGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", fundingEventSummaryItemV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/funding_events/$ID \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'funding_events.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nfunding_event_summary_item_v1 = client.funding_events.get(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(funding_event_summary_item_v1.data)',
      },
      ruby: {
        method: 'funding_events.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nfunding_event_summary_item_v1 = straddle.funding_events.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(funding_event_summary_item_v1)',
      },
      typescript: {
        method: 'client.fundingEvents.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst fundingEventSummaryItemV1 = await client.fundingEvents.get(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(fundingEventSummaryItemV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'payments list',
        example: "straddle payments list \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Payments.List',
        example:
          'PaymentListParams parameters = new();\n\nvar page = await client.Payments.List(parameters);\nawait foreach (var item in page.Paginate())\n{\n    Console.WriteLine(item);\n}',
      },
      go: {
        method: 'client.Payments.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Payments.List(context.TODO(), straddle.PaymentListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/payments \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'payments.list',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npage = client.payments.list()\npage = page.data[0]\nprint(page.id)',
      },
      ruby: {
        method: 'payments.list',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npage = straddle.payments.list\n\nputs(page)',
      },
      typescript: {
        method: 'client.payments.list',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const payment of client.payments.list()) {\n  console.log(payment.id);\n}",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'payouts get',
        example:
          "straddle payouts get \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Payouts.Get',
        example:
          'PayoutGetParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar payoutV1 = await client.Payouts.Get(parameters);\n\nConsole.WriteLine(payoutV1);',
      },
      go: {
        method: 'client.Payouts.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpayoutV1, err := client.Payouts.Get(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PayoutGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", payoutV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/payouts/$ID \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'payouts.get',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npayout_v1 = client.payouts.get(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(payout_v1.data)',
      },
      ruby: {
        method: 'payouts.get',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npayout_v1 = straddle.payouts.get("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(payout_v1)',
      },
      typescript: {
        method: 'client.payouts.get',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst payoutV1 = await client.payouts.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(payoutV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'payouts update',
        example:
          "straddle payouts update \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --amount 10000 \\\n  --description description \\\n  --payment-date \"'2019-12-27'\"",
      },
      csharp: {
        method: 'Payouts.Update',
        example:
          'PayoutUpdateParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Amount = 10000,\n    Description = "description",\n    PaymentDate = "2019-12-27",\n};\n\nvar payoutV1 = await client.Payouts.Update(parameters);\n\nConsole.WriteLine(payoutV1);',
      },
      go: {
        method: 'client.Payouts.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpayoutV1, err := client.Payouts.Update(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PayoutUpdateParams{\n\t\t\tAmount:      10000,\n\t\t\tDescription: straddle.String("description"),\n\t\t\tPaymentDate: time.Now(),\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", payoutV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/payouts/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "amount": 10000,\n          "description": "description",\n          "payment_date": "2019-12-27"\n        }\'',
      },
      python: {
        method: 'payouts.update',
        example:
          'import os\nfrom datetime import date\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npayout_v1 = client.payouts.update(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    amount=10000,\n    description="description",\n    payment_date=date.fromisoformat("2019-12-27"),\n)\nprint(payout_v1.data)',
      },
      ruby: {
        method: 'payouts.update',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npayout_v1 = straddle.payouts.update(\n  "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n  amount: 10000,\n  description: "description",\n  payment_date: "2019-12-27"\n)\n\nputs(payout_v1)',
      },
      typescript: {
        method: 'client.payouts.update',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst payoutV1 = await client.payouts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  amount: 10000,\n  description: 'description',\n  payment_date: '2019-12-27',\n});\n\nconsole.log(payoutV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'payouts create',
        example:
          "straddle payouts create \\\n  --api-key 'My API Key' \\\n  --amount 10000 \\\n  --currency currency \\\n  --description 'Vendor invoice payment' \\\n  --device '{ip_address: 192.168.1.1}' \\\n  --external-id external_id \\\n  --paykey paykey \\\n  --payment-date \"'2019-12-27'\"",
      },
      csharp: {
        method: 'Payouts.Create',
        example:
          'PayoutCreateParams parameters = new()\n{\n    Amount = 10000,\n    Currency = "currency",\n    Description = "Vendor invoice payment",\n    Device = new("192.168.1.1"),\n    ExternalID = "external_id",\n    Paykey = "paykey",\n    PaymentDate = "2019-12-27",\n};\n\nvar payoutV1 = await client.Payouts.Create(parameters);\n\nConsole.WriteLine(payoutV1);',
      },
      go: {
        method: 'client.Payouts.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n\t"github.com/straddleio/straddle-go/shared"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpayoutV1, err := client.Payouts.New(context.TODO(), straddle.PayoutNewParams{\n\t\tAmount:      10000,\n\t\tCurrency:    "currency",\n\t\tDescription: straddle.String("Vendor invoice payment"),\n\t\tDevice: shared.DeviceInfoV1Param{\n\t\t\tIPAddress: "192.168.1.1",\n\t\t},\n\t\tExternalID:  "external_id",\n\t\tPaykey:      "paykey",\n\t\tPaymentDate: time.Now(),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", payoutV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/payouts \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "amount": 10000,\n          "currency": "currency",\n          "description": "Vendor invoice payment",\n          "device": {\n            "ip_address": "192.168.1.1"\n          },\n          "external_id": "external_id",\n          "paykey": "paykey",\n          "payment_date": "2019-12-27"\n        }\'',
      },
      python: {
        method: 'payouts.create',
        example:
          'import os\nfrom datetime import date\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npayout_v1 = client.payouts.create(\n    amount=10000,\n    currency="currency",\n    description="Vendor invoice payment",\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    external_id="external_id",\n    paykey="paykey",\n    payment_date=date.fromisoformat("2019-12-27"),\n)\nprint(payout_v1.data)',
      },
      ruby: {
        method: 'payouts.create',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npayout_v1 = straddle.payouts.create(\n  amount: 10000,\n  currency: "currency",\n  description: "Vendor invoice payment",\n  device: {ip_address: "192.168.1.1"},\n  external_id: "external_id",\n  paykey: "paykey",\n  payment_date: "2019-12-27"\n)\n\nputs(payout_v1)',
      },
      typescript: {
        method: 'client.payouts.create',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst payoutV1 = await client.payouts.create({\n  amount: 10000,\n  currency: 'currency',\n  description: 'Vendor invoice payment',\n  device: { ip_address: '192.168.1.1' },\n  external_id: 'external_id',\n  paykey: 'paykey',\n  payment_date: '2019-12-27',\n});\n\nconsole.log(payoutV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'payouts hold',
        example:
          "straddle payouts hold \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --reason reason",
      },
      csharp: {
        method: 'Payouts.Hold',
        example:
          'PayoutHoldParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Reason = "reason",\n};\n\nvar payoutV1 = await client.Payouts.Hold(parameters);\n\nConsole.WriteLine(payoutV1);',
      },
      go: {
        method: 'client.Payouts.Hold',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpayoutV1, err := client.Payouts.Hold(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PayoutHoldParams{\n\t\t\tReason: "reason",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", payoutV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/payouts/$ID/hold \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      python: {
        method: 'payouts.hold',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npayout_v1 = client.payouts.hold(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    reason="reason",\n)\nprint(payout_v1.data)',
      },
      ruby: {
        method: 'payouts.hold',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npayout_v1 = straddle.payouts.hold("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e", reason: "reason")\n\nputs(payout_v1)',
      },
      typescript: {
        method: 'client.payouts.hold',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst payoutV1 = await client.payouts.hold('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  reason: 'reason',\n});\n\nconsole.log(payoutV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'payouts release',
        example:
          "straddle payouts release \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --reason reason",
      },
      csharp: {
        method: 'Payouts.Release',
        example:
          'PayoutReleaseParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Reason = "reason",\n};\n\nvar payoutV1 = await client.Payouts.Release(parameters);\n\nConsole.WriteLine(payoutV1);',
      },
      go: {
        method: 'client.Payouts.Release',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpayoutV1, err := client.Payouts.Release(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PayoutReleaseParams{\n\t\t\tReason: "reason",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", payoutV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/payouts/$ID/release \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      python: {
        method: 'payouts.release',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npayout_v1 = client.payouts.release(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    reason="reason",\n)\nprint(payout_v1.data)',
      },
      ruby: {
        method: 'payouts.release',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npayout_v1 = straddle.payouts.release("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e", reason: "reason")\n\nputs(payout_v1)',
      },
      typescript: {
        method: 'client.payouts.release',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst payoutV1 = await client.payouts.release('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  reason: 'reason',\n});\n\nconsole.log(payoutV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'payouts cancel',
        example:
          "straddle payouts cancel \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e \\\n  --reason reason",
      },
      csharp: {
        method: 'Payouts.Cancel',
        example:
          'PayoutCancelParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    Reason = "reason",\n};\n\nvar payoutV1 = await client.Payouts.Cancel(parameters);\n\nConsole.WriteLine(payoutV1);',
      },
      go: {
        method: 'client.Payouts.Cancel',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpayoutV1, err := client.Payouts.Cancel(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PayoutCancelParams{\n\t\t\tReason: "reason",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", payoutV1.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/payouts/$ID/cancel \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY" \\\n    -d \'{\n          "reason": "reason"\n        }\'',
      },
      python: {
        method: 'payouts.cancel',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\npayout_v1 = client.payouts.cancel(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    reason="reason",\n)\nprint(payout_v1.data)',
      },
      ruby: {
        method: 'payouts.cancel',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\npayout_v1 = straddle.payouts.cancel("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e", reason: "reason")\n\nputs(payout_v1)',
      },
      typescript: {
        method: 'client.payouts.cancel',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst payoutV1 = await client.payouts.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  reason: 'reason',\n});\n\nconsole.log(payoutV1.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'payouts unmask',
        example:
          "straddle payouts unmask \\\n  --api-key 'My API Key' \\\n  --id 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
      },
      csharp: {
        method: 'Payouts.Unmask',
        example:
          'PayoutUnmaskParams parameters = new()\n{\n    ID = "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n};\n\nvar response = await client.Payouts.Unmask(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Payouts.Unmask',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Payouts.Unmask(\n\t\tcontext.TODO(),\n\t\t"182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\tstraddle.PayoutUnmaskParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/payouts/$ID/unmask \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'payouts.unmask',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.payouts.unmask(\n    id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.data)',
      },
      ruby: {
        method: 'payouts.unmask',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nresponse = straddle.payouts.unmask("182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e")\n\nputs(response)',
      },
      typescript: {
        method: 'client.payouts.unmask',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.payouts.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response.data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'reports create_total_customers_by_status',
        example: "straddle reports create-total-customers-by-status \\\n  --api-key 'My API Key'",
      },
      csharp: {
        method: 'Reports.CreateTotalCustomersByStatus',
        example:
          'ReportCreateTotalCustomersByStatusParams parameters = new();\n\nvar response = await client.Reports.CreateTotalCustomersByStatus(parameters);\n\nConsole.WriteLine(response);',
      },
      go: {
        method: 'client.Reports.NewTotalCustomersByStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Reports.NewTotalCustomersByStatus(context.TODO(), straddle.ReportNewTotalCustomersByStatusParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example:
          'curl https://sandbox.straddle.com/v1/reports/total_customers_by_status \\\n    -X POST \\\n    -H "Authorization: Bearer $STRADDLE_API_KEY"',
      },
      python: {
        method: 'reports.create_total_customers_by_status',
        example:
          'import os\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.reports.create_total_customers_by_status()\nprint(response.data)',
      },
      ruby: {
        method: 'reports.create_total_customers_by_status',
        example:
          'require "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: "My API Key",\n  environment: "production" # defaults to "sandbox"\n)\n\nresponse = straddle.reports.create_total_customers_by_status\n\nputs(response)',
      },
      typescript: {
        method: 'client.reports.createTotalCustomersByStatus',
        example:
          "import Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reports.createTotalCustomersByStatus();\n\nconsole.log(response.data);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Straddle Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/straddle.svg?label=pypi%20(stable))](https://pypi.org/project/straddle/)\n\nThe Straddle Python library provides convenient access to the Straddle REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Straddle MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40straddlecom%2Fstraddle-mcp&config=eyJuYW1lIjoiQHN0cmFkZGxlY29tL3N0cmFkZGxlLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0cmFkZGxlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RyYWRkbGUtYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40straddlecom%2Fstraddle-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstraddle.stlmcp.com%22%2C%22headers%22%3A%7B%22x-straddle-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.straddle.com](https://docs.straddle.com). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install straddle\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom datetime import date\nfrom straddle import Straddle\n\nclient = Straddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n    # defaults to "sandbox".\n    environment="production",\n)\n\ncharge_v1 = client.charges.create(\n    amount=10000,\n    config={\n        "balance_check": "required"\n    },\n    consent_type="internet",\n    currency="currency",\n    description="Monthly subscription fee",\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    external_id="external_id",\n    paykey="paykey",\n    payment_date=date.fromisoformat("2019-12-27"),\n)\nprint(charge_v1.data)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `STRADDLE_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncStraddle` instead of `Straddle` and use `await` with each API call:\n\n```python\nimport os\nfrom datetime import date\nimport asyncio\nfrom straddle import AsyncStraddle\n\nclient = AsyncStraddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n    # defaults to "sandbox".\n    environment="production",\n)\n\nasync def main() -> None:\n  charge_v1 = await client.charges.create(\n      amount=10000,\n      config={\n          "balance_check": "required"\n      },\n      consent_type="internet",\n      currency="currency",\n      description="Monthly subscription fee",\n      device={\n          "ip_address": "192.168.1.1"\n      },\n      external_id="external_id",\n      paykey="paykey",\n      payment_date=date.fromisoformat("2019-12-27"),\n  )\n  print(charge_v1.data)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install straddle[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom straddle import DefaultAioHttpClient\nfrom datetime import date\nfrom straddle import AsyncStraddle\n\nasync def main() -> None:\n  async with AsyncStraddle(\n    api_key=os.environ.get("STRADDLE_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    charge_v1 = await client.charges.create(\n        amount=10000,\n        config={\n            "balance_check": "required"\n        },\n        consent_type="internet",\n        currency="currency",\n        description="Monthly subscription fee",\n        device={\n            "ip_address": "192.168.1.1"\n        },\n        external_id="external_id",\n        paykey="paykey",\n        payment_date=date.fromisoformat("2019-12-27"),\n    )\n    print(charge_v1.data)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Straddle API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom straddle import Straddle\n\nclient = Straddle()\n\nall_payments = []\n# Automatically fetches more pages as needed.\nfor payment in client.payments.list():\n    # Do something with payment here\n    all_payments.append(payment)\nprint(all_payments)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom straddle import AsyncStraddle\n\nclient = AsyncStraddle()\n\nasync def main() -> None:\n    all_payments = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for payment in client.payments.list():\n        all_payments.append(payment)\n    print(all_payments)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.payments.list()\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.data)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.payments.list()\nfor payment in first_page.data:\n    print(payment.id)\n\n# Remove `await` for non-async usage.\n```\n\nfrom datetime import date\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom straddle import Straddle\n\nclient = Straddle()\n\ncharge_v1 = client.charges.create(\n    amount=10000,\n    config={\n        "balance_check": "required"\n    },\n    consent_type="internet",\n    currency="currency",\n    description="Monthly subscription fee",\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    external_id="external_id",\n    paykey="paykey",\n    payment_date=date.fromisoformat("2019-12-27"),\n)\nprint(charge_v1.config)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `straddle.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `straddle.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `straddle.APIError`.\n\n```python\nfrom datetime import date\n\nimport straddle\nfrom straddle import Straddle\n\nclient = Straddle()\n\ntry:\n    client.charges.create(\n        amount=10000,\n        config={\n            "balance_check": "required"\n        },\n        consent_type="internet",\n        currency="currency",\n        description="Monthly subscription fee",\n        device={\n            "ip_address": "192.168.1.1"\n        },\n        external_id="external_id",\n        paykey="paykey",\n        payment_date=date.fromisoformat("2019-12-27"),\n    )\nexcept straddle.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept straddle.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept straddle.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom datetime import date\n\nfrom straddle import Straddle\n\n# Configure the default for all requests:\nclient = Straddle(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).charges.create(\n    amount=10000,\n    config={\n        "balance_check": "required"\n    },\n    consent_type="internet",\n    currency="currency",\n    description="Monthly subscription fee",\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    external_id="external_id",\n    paykey="paykey",\n    payment_date=date.fromisoformat("2019-12-27"),\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom datetime import date\n\nfrom straddle import Straddle\n\n# Configure the default for all requests:\nclient = Straddle(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Straddle(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).charges.create(\n    amount=10000,\n    config={\n        "balance_check": "required"\n    },\n    consent_type="internet",\n    currency="currency",\n    description="Monthly subscription fee",\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    external_id="external_id",\n    paykey="paykey",\n    payment_date=date.fromisoformat("2019-12-27"),\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `STRADDLE_LOG` to `info`.\n\n```shell\n$ export STRADDLE_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom datetime import date\n\nfrom straddle import Straddle\n\nclient = Straddle()\nresponse = client.charges.with_raw_response.create(\n    amount=10000,\n    config={\n        "balance_check": "required"\n    },\n    consent_type="internet",\n    currency="currency",\n    description="Monthly subscription fee",\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    external_id="external_id",\n    paykey="paykey",\n    payment_date=date.fromisoformat("2019-12-27"),\n)\nprint(response.headers.get(\'X-My-Header\'))\n\ncharge = response.parse()  # get the object that `charges.create()` would have returned\nprint(charge.data)\n```\n\nfrom datetime import date\n\nThese methods return an [`APIResponse`](https://github.com/straddleio/straddle-python/tree/main/src/straddle/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/straddleio/straddle-python/tree/main/src/straddle/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.charges.with_streaming_response.create(\n    amount=10000,\n    config={\n        "balance_check": "required"\n    },\n    consent_type="internet",\n    currency="currency",\n    description="Monthly subscription fee",\n    device={\n        "ip_address": "192.168.1.1"\n    },\n    external_id="external_id",\n    paykey="paykey",\n    payment_date=date.fromisoformat("2019-12-27"),\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom straddle import Straddle, DefaultHttpxClient\n\nclient = Straddle(\n    # Or use the `STRADDLE_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom straddle import Straddle\n\nwith Straddle() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/straddleio/straddle-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport straddle\nprint(straddle.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'go',
    content:
      '# Straddle Go API Library\n\n<a href="https://pkg.go.dev/github.com/straddleio/straddle-go"><img src="https://pkg.go.dev/badge/github.com/straddleio/straddle-go.svg" alt="Go Reference"></a>\n\nThe Straddle Go library provides convenient access to the [Straddle REST API](https://docs.straddle.com)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Straddle MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40straddlecom%2Fstraddle-mcp&config=eyJuYW1lIjoiQHN0cmFkZGxlY29tL3N0cmFkZGxlLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0cmFkZGxlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RyYWRkbGUtYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40straddlecom%2Fstraddle-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstraddle.stlmcp.com%22%2C%22headers%22%3A%7B%22x-straddle-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/straddleio/straddle-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/straddleio/straddle-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/straddleio/straddle-go"\n\t"github.com/straddleio/straddle-go/option"\n\t"github.com/straddleio/straddle-go/shared"\n)\n\nfunc main() {\n\tclient := straddle.NewClient(\n\t\toption.WithAPIKey("My API Key"),    // defaults to os.LookupEnv("STRADDLE_API_KEY")\n\t\toption.WithEnvironmentProduction(), // defaults to option.WithEnvironmentSandbox()\n\t)\n\tchargeV1, err := client.Charges.New(context.TODO(), straddle.ChargeNewParams{\n\t\tAmount: 10000,\n\t\tConfig: straddle.ChargeNewParamsConfig{\n\t\t\tBalanceCheck: "required",\n\t\t},\n\t\tConsentType: straddle.ChargeNewParamsConsentTypeInternet,\n\t\tCurrency:    "currency",\n\t\tDescription: straddle.String("Monthly subscription fee"),\n\t\tDevice: shared.DeviceInfoV1Param{\n\t\t\tIPAddress: "192.168.1.1",\n\t\t},\n\t\tExternalID:  "external_id",\n\t\tPaykey:      "paykey",\n\t\tPaymentDate: time.Now(),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", chargeV1.Data)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Charges.New(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/straddleio/straddle-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.Payments.ListAutoPaging(context.TODO(), straddle.PaymentListParams{})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\tpayment := iter.Current()\n\tfmt.Printf("%+v\\n", payment)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.Payments.List(context.TODO(), straddle.PaymentListParams{})\nfor page != nil {\n\tfor _, payment := range page.Data {\n\t\tfmt.Printf("%+v\\n", payment)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Charges.New(context.TODO(), straddle.ChargeNewParams{\n\tAmount: 10000,\n\tConfig: straddle.ChargeNewParamsConfig{\n\t\tBalanceCheck: "required",\n\t},\n\tConsentType: straddle.ChargeNewParamsConsentTypeInternet,\n\tCurrency:    "currency",\n\tDescription: straddle.String("Monthly subscription fee"),\n\tDevice: shared.DeviceInfoV1Param{\n\t\tIPAddress: "192.168.1.1",\n\t},\n\tExternalID:  "external_id",\n\tPaykey:      "paykey",\n\tPaymentDate: time.Now(),\n})\nif err != nil {\n\tvar apierr *straddle.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/v1/charges": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Charges.New(\n\tctx,\n\tstraddle.ChargeNewParams{\n\t\tAmount: 10000,\n\t\tConfig: straddle.ChargeNewParamsConfig{\n\t\t\tBalanceCheck: "required",\n\t\t},\n\t\tConsentType: straddle.ChargeNewParamsConsentTypeInternet,\n\t\tCurrency:    "currency",\n\t\tDescription: straddle.String("Monthly subscription fee"),\n\t\tDevice: shared.DeviceInfoV1Param{\n\t\t\tIPAddress: "192.168.1.1",\n\t\t},\n\t\tExternalID:  "external_id",\n\t\tPaykey:      "paykey",\n\t\tPaymentDate: time.Now(),\n\t},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := straddle.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Charges.New(\n\tcontext.TODO(),\n\tstraddle.ChargeNewParams{\n\t\tAmount: 10000,\n\t\tConfig: straddle.ChargeNewParamsConfig{\n\t\t\tBalanceCheck: "required",\n\t\t},\n\t\tConsentType: straddle.ChargeNewParamsConsentTypeInternet,\n\t\tCurrency:    "currency",\n\t\tDescription: straddle.String("Monthly subscription fee"),\n\t\tDevice: shared.DeviceInfoV1Param{\n\t\t\tIPAddress: "192.168.1.1",\n\t\t},\n\t\tExternalID:  "external_id",\n\t\tPaykey:      "paykey",\n\t\tPaymentDate: time.Now(),\n\t},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nchargeV1, err := client.Charges.New(\n\tcontext.TODO(),\n\tstraddle.ChargeNewParams{\n\t\tAmount: 10000,\n\t\tConfig: straddle.ChargeNewParamsConfig{\n\t\t\tBalanceCheck: "required",\n\t\t},\n\t\tConsentType: straddle.ChargeNewParamsConsentTypeInternet,\n\t\tCurrency:    "currency",\n\t\tDescription: straddle.String("Monthly subscription fee"),\n\t\tDevice: shared.DeviceInfoV1Param{\n\t\t\tIPAddress: "192.168.1.1",\n\t\t},\n\t\tExternalID:  "external_id",\n\t\tPaykey:      "paykey",\n\t\tPaymentDate: time.Now(),\n\t},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", chargeV1)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/straddleio/straddle-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Straddle TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@straddlecom/straddle.svg?label=npm%20(stable))](https://npmjs.org/package/@straddlecom/straddle) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@straddlecom/straddle)\n\nThis library provides convenient access to the Straddle REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.straddle.com](https://docs.straddle.com). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Straddle MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40straddlecom%2Fstraddle-mcp&config=eyJuYW1lIjoiQHN0cmFkZGxlY29tL3N0cmFkZGxlLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0cmFkZGxlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RyYWRkbGUtYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40straddlecom%2Fstraddle-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstraddle.stlmcp.com%22%2C%22headers%22%3A%7B%22x-straddle-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @straddlecom/straddle\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n  environment: 'production', // defaults to 'sandbox'\n});\n\nconst chargeV1 = await client.charges.create({\n  amount: 10000,\n  config: { balance_check: 'required' },\n  consent_type: 'internet',\n  currency: 'currency',\n  description: 'Monthly subscription fee',\n  device: { ip_address: '192.168.1.1' },\n  external_id: 'external_id',\n  paykey: 'paykey',\n  payment_date: '2019-12-27',\n});\n\nconsole.log(chargeV1.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  apiKey: process.env['STRADDLE_API_KEY'], // This is the default and can be omitted\n  environment: 'production', // defaults to 'sandbox'\n});\n\nconst params: Straddle.ChargeCreateParams = {\n  amount: 10000,\n  config: { balance_check: 'required' },\n  consent_type: 'internet',\n  currency: 'currency',\n  description: 'Monthly subscription fee',\n  device: { ip_address: '192.168.1.1' },\n  external_id: 'external_id',\n  paykey: 'paykey',\n  payment_date: '2019-12-27',\n};\nconst chargeV1: Straddle.ChargeV1 = await client.charges.create(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst chargeV1 = await client.charges\n  .create({\n    amount: 10000,\n    config: { balance_check: 'required' },\n    consent_type: 'internet',\n    currency: 'currency',\n    description: 'Monthly subscription fee',\n    device: { ip_address: '192.168.1.1' },\n    external_id: 'external_id',\n    paykey: 'paykey',\n    payment_date: '2019-12-27',\n  })\n  .catch(async (err) => {\n    if (err instanceof Straddle.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Straddle({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.charges.create({\n  amount: 10000,\n  config: { balance_check: 'required' },\n  consent_type: 'internet',\n  currency: 'currency',\n  description: 'Monthly subscription fee',\n  device: { ip_address: '192.168.1.1' },\n  external_id: 'external_id',\n  paykey: 'paykey',\n  payment_date: '2019-12-27',\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Straddle({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.charges.create({\n  amount: 10000,\n  config: { balance_check: 'required' },\n  consent_type: 'internet',\n  currency: 'currency',\n  description: 'Monthly subscription fee',\n  device: { ip_address: '192.168.1.1' },\n  external_id: 'external_id',\n  paykey: 'paykey',\n  payment_date: '2019-12-27',\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the Straddle API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllPayments(params) {\n  const allPayments = [];\n  // Automatically fetches more pages as needed.\n  for await (const payment of client.payments.list()) {\n    allPayments.push(payment);\n  }\n  return allPayments;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.payments.list();\nfor (const payment of page.data) {\n  console.log(payment);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Straddle();\n\nconst response = await client.charges\n  .create({\n    amount: 10000,\n    config: { balance_check: 'required' },\n    consent_type: 'internet',\n    currency: 'currency',\n    description: 'Monthly subscription fee',\n    device: { ip_address: '192.168.1.1' },\n    external_id: 'external_id',\n    paykey: 'paykey',\n    payment_date: '2019-12-27',\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: chargeV1, response: raw } = await client.charges\n  .create({\n    amount: 10000,\n    config: { balance_check: 'required' },\n    consent_type: 'internet',\n    currency: 'currency',\n    description: 'Monthly subscription fee',\n    device: { ip_address: '192.168.1.1' },\n    external_id: 'external_id',\n    paykey: 'paykey',\n    payment_date: '2019-12-27',\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(chargeV1.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `STRADDLE_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Straddle from '@straddlecom/straddle';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Straddle({\n  logger: logger.child({ name: 'Straddle' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.charges.create({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Straddle from '@straddlecom/straddle';\nimport fetch from 'my-fetch';\n\nconst client = new Straddle({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Straddle from '@straddlecom/straddle';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Straddle({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Straddle from '@straddlecom/straddle';\n\nconst client = new Straddle({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Straddle from 'npm:@straddlecom/straddle';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Straddle({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/straddleio/straddle-node/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'ruby',
    content:
      '# Straddle Ruby API library\n\nThe Straddle Ruby library provides convenient access to the Straddle REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/straddleio/straddle-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Straddle MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40straddlecom%2Fstraddle-mcp&config=eyJuYW1lIjoiQHN0cmFkZGxlY29tL3N0cmFkZGxlLW1jcCIsInRyYW5zcG9ydCI6Imh0dHAiLCJ1cmwiOiJodHRwczovL3N0cmFkZGxlLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7Ingtc3RyYWRkbGUtYXBpLWtleSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40straddlecom%2Fstraddle-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstraddle.stlmcp.com%22%2C%22headers%22%3A%7B%22x-straddle-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/straddle).\n\nThe REST API documentation can be found on [docs.straddle.com](https://docs.straddle.com).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "straddle", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "straddle"\n\nstraddle = Straddle::Client.new(\n  api_key: ENV["STRADDLE_API_KEY"], # This is the default and can be omitted\n  environment: "production" # defaults to "sandbox"\n)\n\ncharge_v1 = straddle.charges.create(\n  amount: 10000,\n  config: {balance_check: "required"},\n  consent_type: "internet",\n  currency: "currency",\n  description: "Monthly subscription fee",\n  device: {ip_address: "192.168.1.1"},\n  external_id: "external_id",\n  paykey: "paykey",\n  payment_date: "2019-12-27"\n)\n\nputs(charge_v1.data)\n```\n\n\n\n### Pagination\n\nList methods in the Straddle API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```ruby\npage = straddle.payments.list\n\n# Fetch single item from page.\npayment = page.data[0]\nputs(payment.id)\n\n# Automatically fetches more pages as needed.\npage.auto_paging_each do |payment|\n  puts(payment.id)\nend\n```\n\nAlternatively, you can use the `#next_page?` and `#next_page` methods for more granular control working with pages.\n\n```ruby\nif page.next_page?\n  new_page = page.next_page\n  puts(new_page.data[0].id)\nend\n```\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `Straddle::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  charge = straddle.charges.create(\n    amount: 10000,\n    config: {balance_check: "required"},\n    consent_type: "internet",\n    currency: "currency",\n    description: "Monthly subscription fee",\n    device: {ip_address: "192.168.1.1"},\n    external_id: "external_id",\n    paykey: "paykey",\n    payment_date: "2019-12-27"\n  )\nrescue Straddle::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue Straddle::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue Straddle::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nstraddle = Straddle::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nstraddle.charges.create(\n  amount: 10000,\n  config: {balance_check: "required"},\n  consent_type: "internet",\n  currency: "currency",\n  description: "Monthly subscription fee",\n  device: {ip_address: "192.168.1.1"},\n  external_id: "external_id",\n  paykey: "paykey",\n  payment_date: "2019-12-27",\n  request_options: {max_retries: 5}\n)\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nstraddle = Straddle::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nstraddle.charges.create(\n  amount: 10000,\n  config: {balance_check: "required"},\n  consent_type: "internet",\n  currency: "currency",\n  description: "Monthly subscription fee",\n  device: {ip_address: "192.168.1.1"},\n  external_id: "external_id",\n  paykey: "paykey",\n  payment_date: "2019-12-27",\n  request_options: {timeout: 5}\n)\n```\n\nOn timeout, `Straddle::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `Straddle::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\ncharge_v1 =\n  straddle.charges.create(\n    amount: 10000,\n    config: {balance_check: "required"},\n    consent_type: "internet",\n    currency: "currency",\n    description: "Monthly subscription fee",\n    device: {ip_address: "192.168.1.1"},\n    external_id: "external_id",\n    paykey: "paykey",\n    payment_date: "2019-12-27",\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(charge_v1[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `Straddle::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `Straddle::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nstraddle.charges.create(\n  amount: 10000,\n  config: Straddle::ChargeCreateParams::Config.new(balance_check: "required"),\n  consent_type: "internet",\n  currency: "currency",\n  description: "Monthly subscription fee",\n  device: Straddle::DeviceInfoV1.new(ip_address: "192.168.1.1"),\n  external_id: "external_id",\n  paykey: "paykey",\n  payment_date: "2019-12-27"\n)\n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nstraddle.charges.create(\n  amount: 10000,\n  config: {balance_check: "required"},\n  consent_type: "internet",\n  currency: "currency",\n  description: "Monthly subscription fee",\n  device: {ip_address: "192.168.1.1"},\n  external_id: "external_id",\n  paykey: "paykey",\n  payment_date: "2019-12-27"\n)\n\n# You can also splat a full Params class:\nparams = Straddle::ChargeCreateParams.new(\n  amount: 10000,\n  config: Straddle::ChargeCreateParams::Config.new(balance_check: "required"),\n  consent_type: "internet",\n  currency: "currency",\n  description: "Monthly subscription fee",\n  device: Straddle::DeviceInfoV1.new(ip_address: "192.168.1.1"),\n  external_id: "external_id",\n  paykey: "paykey",\n  payment_date: "2019-12-27"\n)\nstraddle.charges.create(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :standard\nputs(Straddle::Embed::AccountCreateParams::AccessLevel::STANDARD)\n\n# Revealed type: `T.all(Straddle::Embed::AccountCreateParams::AccessLevel, Symbol)`\nT.reveal_type(Straddle::Embed::AccountCreateParams::AccessLevel::STANDARD)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nstraddle.embed.accounts.create(\n  access_level: Straddle::Embed::AccountCreateParams::AccessLevel::STANDARD,\n  # …\n)\n\n# Literal values are also permissible:\nstraddle.embed.accounts.create(\n  access_level: :standard,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/straddleio/straddle-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'csharp',
    content:
      '# Straddle C# API Library\n\nThe Straddle C# SDK provides convenient access to the [Straddle REST API](https://docs.straddle.com) from applications written in   C#.\n\n## Installation\n\nInstall the package from [NuGet](https://www.nuget.org/packages/Straddle):\n\n```bash\ndotnet add package Straddle\n```\n\n## Requirements\n\nThis library requires .NET Standard 2.0 or later.\n\n## Usage\n\nSee the [`examples`](examples) directory for complete and runnable examples.\n\n```csharp\nStraddleClient client = new();\n\nChargeCreateParams parameters = new()\n{\n    Amount = 10000,\n    Config = new(BalanceCheck.Required),\n    ConsentType = ConsentType.Internet,\n    Currency = "currency",\n    Description = "Monthly subscription fee",\n    Device = new("192.168.1.1"),\n    ExternalID = "external_id",\n    Paykey = "paykey",\n    PaymentDate = "2019-12-27",\n};\n\nvar chargeV1 = await client.Charges.Create(parameters);\n\nConsole.WriteLine(chargeV1);\n```',
  },
  {
    language: 'cli',
    content:
      "# Straddle CLI\n\nThe official CLI for the [Straddle REST API](https://docs.straddle.com).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n<!-- x-release-please-start-version -->\n\n## Installation\n\n### Installing with Homebrew\n\n~~~sh\nbrew install straddleio/tools/straddle\n~~~\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/straddleio/straddle-cli/cmd/straddle@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n<!-- x-release-please-end -->\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nstraddle [resource] <command> [flags...]\n~~~\n\n~~~sh\nstraddle charges create \\\n  --api-key 'My API Key' \\\n  --amount 10000 \\\n  --config '{balance_check: required}' \\\n  --consent-type internet \\\n  --currency currency \\\n  --description 'Monthly subscription fee' \\\n  --device '{ip_address: 192.168.1.1}' \\\n  --external-id external_id \\\n  --paykey paykey \\\n  --payment-date \"'2019-12-27'\"\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Description                                                                                        | Required |\n| -------------------- | -------------------------------------------------------------------------------------------------- | -------- |\n| `STRADDLE_API_KEY`   | Use your Straddle API Key in the Authorization header as Bearer <token> to authorize API requests. | yes      |\n\n### Global flags\n\n- `--api-key` - Use your Straddle API Key in the Authorization header as Bearer <token> to authorize API requests. (can also be set with `STRADDLE_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nstraddle <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nstraddle <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nstraddle <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nstraddle <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nstraddle <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Straddle Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/straddle-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../straddle-go`.\n",
  },
];

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
