// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

// Instantiate client
const client = new Straddle();

// Create server instance
const server = new Server(
  {
    name: 'straddle_api',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

const tools: Tool[] = [];
const handlers: Record<string, Function> = {};

registerApiMethod({
  name: 'create_embed_accounts',
  description:
    'Creates a new account associated with your Straddle platform integration. This endpoint allows you to set up an account with specified details, including business information and access levels.',
  inputSchema: {
    type: 'object',
    properties: {
      access_level: {
        type: 'string',
        description:
          'The access level granted to the account. This is determined by your platform configuration. Use `standard` unless instructed otherwise by Straddle.',
        enum: ['standard', 'managed'],
      },
      account_type: {
        type: 'string',
        description: 'The type of account to be created. Currently, only `business` is supported.',
        enum: ['business', 'unknown'],
      },
      business_profile: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'The operating or trade name of the business.',
          },
          website: {
            type: 'string',
            description: "URL of the business's primary marketing website.",
          },
          address: {
            type: 'object',
            description: 'The address object is optional. If provided, it must be a valid address.',
            properties: {
              city: {
                type: 'string',
                description: 'City, district, suburb, town, or village.',
              },
              country: {
                type: 'string',
                description: 'The country of the address, in ISO 3166-1 alpha-2 format.',
              },
              line1: {
                type: 'string',
                description: 'Primary address line (e.g., street, PO Box).',
              },
              line2: {
                type: 'string',
                description: 'Secondary address line (e.g., apartment, suite, unit, or building).',
              },
              postal_code: {
                type: 'string',
                description: 'Postal or ZIP code.',
              },
              state: {
                type: 'string',
                description: 'Two-letter state code.',
              },
            },
            required: [],
          },
          description: {
            type: 'string',
            description: 'A brief description of the business and its products or services.',
          },
          industry: {
            type: 'object',
            properties: {
              category: {
                type: 'string',
                description: 'The general category of the industry. Required if not providing MCC.',
              },
              mcc: {
                type: 'string',
                description: 'The Merchant Category Code (MCC) that best describes the business. Optional.',
              },
              sector: {
                type: 'string',
                description:
                  'The specific sector within the industry category. Required if not providing MCC.',
              },
            },
            required: [],
          },
          legal_name: {
            type: 'string',
            description: 'The official registered name of the business.',
          },
          phone: {
            type: 'string',
            description: 'The primary contact phone number for the business.',
          },
          support_channels: {
            type: 'object',
            properties: {
              email: {
                type: 'string',
                description: 'The email address for customer support inquiries.',
              },
              phone: {
                type: 'string',
                description: 'The phone number for customer support.',
              },
              url: {
                type: 'string',
                description: "The URL of the business's customer support page or contact form.",
              },
            },
            required: [],
          },
          tax_id: {
            type: 'string',
            description: "The business's tax identification number (e.g., EIN in the US).",
          },
          use_case: {
            type: 'string',
            description: "A description of how the business intends to use Straddle's services.",
          },
        },
        required: ['name', 'website'],
      },
      organization_id: {
        type: 'string',
        description: 'The unique identifier of the organization related to this account.',
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the account in your database, used for cross-referencing between Straddle and your systems.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the account in a structured format.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.embed.accounts.create(body);
  },
});

registerApiMethod({
  name: 'update_embed_accounts',
  description:
    "Updates an existing account's information. This endpoint allows you to update various account details during onboarding or after the account has been created.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      business_profile: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'The operating or trade name of the business.',
          },
          website: {
            type: 'string',
            description: "URL of the business's primary marketing website.",
          },
          address: {
            type: 'object',
            description: 'The address object is optional. If provided, it must be a valid address.',
            properties: {
              city: {
                type: 'string',
                description: 'City, district, suburb, town, or village.',
              },
              country: {
                type: 'string',
                description: 'The country of the address, in ISO 3166-1 alpha-2 format.',
              },
              line1: {
                type: 'string',
                description: 'Primary address line (e.g., street, PO Box).',
              },
              line2: {
                type: 'string',
                description: 'Secondary address line (e.g., apartment, suite, unit, or building).',
              },
              postal_code: {
                type: 'string',
                description: 'Postal or ZIP code.',
              },
              state: {
                type: 'string',
                description: 'Two-letter state code.',
              },
            },
            required: [],
          },
          description: {
            type: 'string',
            description: 'A brief description of the business and its products or services.',
          },
          industry: {
            type: 'object',
            properties: {
              category: {
                type: 'string',
                description: 'The general category of the industry. Required if not providing MCC.',
              },
              mcc: {
                type: 'string',
                description: 'The Merchant Category Code (MCC) that best describes the business. Optional.',
              },
              sector: {
                type: 'string',
                description:
                  'The specific sector within the industry category. Required if not providing MCC.',
              },
            },
            required: [],
          },
          legal_name: {
            type: 'string',
            description: 'The official registered name of the business.',
          },
          phone: {
            type: 'string',
            description: 'The primary contact phone number for the business.',
          },
          support_channels: {
            type: 'object',
            properties: {
              email: {
                type: 'string',
                description: 'The email address for customer support inquiries.',
              },
              phone: {
                type: 'string',
                description: 'The phone number for customer support.',
              },
              url: {
                type: 'string',
                description: "The URL of the business's customer support page or contact form.",
              },
            },
            required: [],
          },
          tax_id: {
            type: 'string',
            description: "The business's tax identification number (e.g., EIN in the US).",
          },
          use_case: {
            type: 'string',
            description: "A description of how the business intends to use Straddle's services.",
          },
        },
        required: ['name', 'website'],
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the account in your database, used for cross-referencing between Straddle and your systems.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the account in a structured format.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { account_id, ...body } = args;
    return client.embed.accounts.update(account_id, body);
  },
});

registerApiMethod({
  name: 'list_embed_accounts',
  description:
    'Returns a list of accounts associated with your Straddle platform integration. The accounts are returned sorted by creation date, with the most recently created accounts appearing first. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1. Default value: 1',
      },
      page_size: {
        type: 'integer',
        description: 'Page size. Default value: 100. Max value: 1000',
      },
      search_text: {
        type: 'string',
      },
      sort_by: {
        type: 'string',
        description: "Sort By. Default value: 'id'.",
      },
      sort_order: {
        type: 'string',
        description: "Sort Order. Default value: 'asc'.",
        enum: ['asc', 'desc'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.embed.accounts.list(body);
  },
});

registerApiMethod({
  name: 'get_embed_accounts',
  description:
    'Retrieves the details of an account that has previously been created. Supply the unique account ID that was returned from your previous request, and Straddle will return the corresponding account information.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the account to retrieve.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { account_id, ...body } = args;
    return client.embed.accounts.get(account_id, body);
  },
});

registerApiMethod({
  name: 'onboard_embed_accounts',
  description:
    'Initiates the onboarding process for a new account. This endpoint can only be used for accounts where at least one representative and one bank account have already been created.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      terms_of_service: {
        type: 'object',
        properties: {
          accepted_date: {
            type: 'string',
            description: 'The datetime of when the terms of service were accepted, in ISO 8601 format.',
            format: 'date-time',
          },
          agreement_type: {
            type: 'string',
            description:
              'The type or version of the agreement accepted. Use `embedded` unless your platform was specifically enabled for `direct` agreements.',
            enum: ['embedded', 'direct'],
          },
          agreement_url: {
            type: 'string',
            description: 'The URL where the full text of the accepted agreement can be found.',
          },
          accepted_ip: {
            type: 'string',
            description: 'The IP address from which the terms of service were accepted.',
          },
          accepted_user_agent: {
            type: 'string',
            description: 'The user agent string of the browser or application used to accept the terms.',
          },
        },
        required: ['accepted_date', 'agreement_type', 'agreement_url'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { account_id, ...body } = args;
    return client.embed.accounts.onboard(account_id, body);
  },
});

registerApiMethod({
  name: 'simulate_embed_accounts',
  description:
    'Simulate the status transitions for sandbox accounts. This endpoint can only be used for sandbox accounts.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      final_status: {
        type: 'string',
        enum: ['onboarding', 'active'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { account_id, ...body } = args;
    return client.embed.accounts.simulate(account_id, body);
  },
});

registerApiMethod({
  name: 'create_accounts_embed_capability_requests',
  description:
    'Submits a request to enable a specific capability for an account. Use this endpoint to request additional features or services for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      businesses: {
        type: 'object',
        description: 'Allows the account to accept payments from businesses.',
        properties: {
          enable: {
            type: 'boolean',
          },
        },
        required: ['enable'],
      },
      charges: {
        type: 'object',
        description: 'The charges capability settings for the account.',
        properties: {
          daily_amount: {
            type: 'number',
            description: 'The maximum dollar amount of charges in a calendar day.',
          },
          enable: {
            type: 'boolean',
            description: 'Determines whether `charges` are enabled for the account.',
          },
          max_amount: {
            type: 'number',
            description: 'The maximum amount of a single charge.',
          },
          monthly_amount: {
            type: 'number',
            description: 'The maximum dollar amount of charges in a calendar month.',
          },
          monthly_count: {
            type: 'integer',
            description: 'The maximum number of charges in a calendar month.',
          },
        },
        required: ['daily_amount', 'enable', 'max_amount', 'monthly_amount', 'monthly_count'],
      },
      individuals: {
        type: 'object',
        description: 'Allows the account to accept payments from individuals.',
        properties: {
          enable: {
            type: 'boolean',
          },
        },
        required: ['enable'],
      },
      internet: {
        type: 'object',
        description:
          'Allows the account to accept payments authorized via the internet or mobile applications.',
        properties: {
          enable: {
            type: 'boolean',
          },
        },
        required: ['enable'],
      },
      payouts: {
        type: 'object',
        description: 'The payouts capability settings for the account.',
        properties: {
          daily_amount: {
            type: 'number',
            description: 'The maximum dollar amount of payouts in a day.',
          },
          enable: {
            type: 'boolean',
            description: 'Determines whether `payouts` are enabled for the account.',
          },
          max_amount: {
            type: 'number',
            description: 'The maximum amount of a single payout.',
          },
          monthly_amount: {
            type: 'number',
            description: 'The maximum dollar amount of payouts in a month.',
          },
          monthly_count: {
            type: 'integer',
            description: 'The maximum number of payouts in a month.',
          },
        },
        required: ['daily_amount', 'enable', 'max_amount', 'monthly_amount', 'monthly_count'],
      },
      signed_agreement: {
        type: 'object',
        description: 'Allows the account to accept payments authorized by signed agreements or contracts.',
        properties: {
          enable: {
            type: 'boolean',
          },
        },
        required: ['enable'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { account_id, ...body } = args;
    return client.embed.accounts.capabilityRequests.create(account_id, body);
  },
});

registerApiMethod({
  name: 'list_accounts_embed_capability_requests',
  description:
    'Retrieves a list of capability requests associated with an account. The requests are returned sorted by creation date, with the most recent requests appearing first. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      category: {
        type: 'string',
        description: 'Filter capability requests by category.',
        enum: ['payment_type', 'customer_type', 'consent_type'],
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Page size.Max value: 1000',
      },
      sort_by: {
        type: 'string',
        description: 'Sort By.',
      },
      sort_order: {
        type: 'string',
        description: 'Sort Order.',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'string',
        description: 'Filter capability requests by their current status.',
        enum: ['active', 'inactive', 'in_review', 'rejected'],
      },
      type: {
        type: 'string',
        description: 'Filter capability requests by the specific type of capability.',
        enum: ['charges', 'payouts', 'individuals', 'businesses', 'signed_agreement', 'internet'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { account_id, ...body } = args;
    return client.embed.accounts.capabilityRequests.list(account_id, body);
  },
});

registerApiMethod({
  name: 'create_embed_linked_bank_accounts',
  description:
    'Creates a new linked bank account associated with a Straddle account. This endpoint allows you to associate external bank accounts with a Straddle account for various payment operations such as payment deposits, payout withdrawals, and more.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the Straddle account to associate this bank account with.',
      },
      bank_account: {
        type: 'object',
        properties: {
          account_holder: {
            type: 'string',
            description:
              'The name of the account holder as it appears on the bank account. Typically, this is the legal name of the business associated with the account.',
          },
          account_number: {
            type: 'string',
            description: 'The bank account number.',
          },
          routing_number: {
            type: 'string',
            description: 'The routing number of the bank account.',
          },
        },
        required: ['account_holder', 'account_number', 'routing_number'],
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the linked bank account in a structured format.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.embed.linkedBankAccounts.create(body);
  },
});

registerApiMethod({
  name: 'update_embed_linked_bank_accounts',
  description:
    "Updates an existing linked bank account's information. This can be used to update account details during onboarding or to update metadata associated with the linked account. The linked bank account must be in 'created' or 'onboarding' status.",
  inputSchema: {
    type: 'object',
    properties: {
      linked_bank_account_id: {
        type: 'string',
      },
      bank_account: {
        type: 'object',
        properties: {
          account_holder: {
            type: 'string',
            description:
              'The name of the account holder as it appears on the bank account. Typically, this is the legal name of the business associated with the account.',
          },
          account_number: {
            type: 'string',
            description: 'The bank account number.',
          },
          routing_number: {
            type: 'string',
            description: 'The routing number of the bank account.',
          },
        },
        required: ['account_holder', 'account_number', 'routing_number'],
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the linked bank account in a structured format.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { linked_bank_account_id, ...body } = args;
    return client.embed.linkedBankAccounts.update(linked_bank_account_id, body);
  },
});

registerApiMethod({
  name: 'list_embed_linked_bank_accounts',
  description:
    'Returns a list of bank accounts associated with a specific Straddle account. The linked bank accounts are returned sorted by creation date, with the most recently created appearing first. This endpoint supports pagination to handle accounts with multiple linked bank accounts.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the related account.',
      },
      level: {
        type: 'string',
        enum: ['account', 'platform'],
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Page size. Max value: 1000',
      },
      sort_by: {
        type: 'string',
        description: 'Sort By.',
      },
      sort_order: {
        type: 'string',
        description: 'Sort Order.',
        enum: ['asc', 'desc'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.embed.linkedBankAccounts.list(body);
  },
});

registerApiMethod({
  name: 'get_embed_linked_bank_accounts',
  description:
    'Retrieves the details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information. The response includes masked account details for security purposes.',
  inputSchema: {
    type: 'object',
    properties: {
      linked_bank_account_id: {
        type: 'string',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { linked_bank_account_id, ...body } = args;
    return client.embed.linkedBankAccounts.get(linked_bank_account_id, body);
  },
});

registerApiMethod({
  name: 'unmask_embed_linked_bank_accounts',
  description:
    'Retrieves the unmasked details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information, including sensitive details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.',
  inputSchema: {
    type: 'object',
    properties: {
      linked_bank_account_id: {
        type: 'string',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { linked_bank_account_id, ...body } = args;
    return client.embed.linkedBankAccounts.unmask(linked_bank_account_id, body);
  },
});

registerApiMethod({
  name: 'create_embed_organizations',
  description:
    'Creates a new organization related to your Straddle integration. Organizations can be used to group related accounts and manage permissions across multiple users.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the organization.',
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the organization in your database, used for cross-referencing between Straddle and your systems.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the organization in a structured format.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.embed.organizations.create(body);
  },
});

registerApiMethod({
  name: 'list_embed_organizations',
  description:
    'Retrieves a list of organizations associated with your Straddle integration. The organizations are returned sorted by creation date, with the most recently created organizations appearing first. This endpoint supports advanced sorting and filtering options to help you find specific organizations.',
  inputSchema: {
    type: 'object',
    properties: {
      external_id: {
        type: 'string',
        description: 'List organizations by their external ID.',
      },
      name: {
        type: 'string',
        description: 'List organizations by name (partial match supported).',
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Page size. Max value: 1000',
      },
      sort_by: {
        type: 'string',
        description: 'Sort By.',
      },
      sort_order: {
        type: 'string',
        description: 'Sort Order.',
        enum: ['asc', 'desc'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.embed.organizations.list(body);
  },
});

registerApiMethod({
  name: 'get_embed_organizations',
  description:
    'Retrieves the details of an Organization that has previously been created. Supply the unique organization ID that was returned from your previous request, and Straddle will return the corresponding organization information.',
  inputSchema: {
    type: 'object',
    properties: {
      organization_id: {
        type: 'string',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { organization_id, ...body } = args;
    return client.embed.organizations.get(organization_id, body);
  },
});

registerApiMethod({
  name: 'create_embed_representatives',
  description:
    'Creates a new representative associated with an account. Representatives are individuals who have legal authority or significant responsibility within the business.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the account this representative is associated with.',
      },
      dob: {
        type: 'string',
        description: 'Date of birth for the representative in ISO 8601 format (YYYY-MM-DD).',
        format: 'date',
      },
      email: {
        type: 'string',
        description: 'The company email address of the representative.',
      },
      first_name: {
        type: 'string',
        description: 'The first name of the representative.',
      },
      last_name: {
        type: 'string',
        description: 'The last name of the representative.',
      },
      mobile_number: {
        type: 'string',
        description: 'The mobile phone number of the representative.',
      },
      relationship: {
        type: 'object',
        properties: {
          control: {
            type: 'boolean',
            description:
              'Whether the representative has significant responsibility to control, manage, or direct the organization. One representative must be identified under the control prong for each legal entity.',
          },
          owner: {
            type: 'boolean',
            description:
              'Whether the representative owns any percentage of of the equity interests of the legal entity.',
          },
          primary: {
            type: 'boolean',
            description:
              'Whether the person is authorized as the primary representative of the account. This is the person chosen by the business to provide information about themselves, general information about the account, and who consented to the services agreement. \n\n There can be only one primary representative for an account at a time.',
          },
          percent_ownership: {
            type: 'number',
            description: "The percentage of ownership the representative has. Required if 'Owner' is true.",
          },
          title: {
            type: 'string',
            description: 'The job title of the representative.',
          },
        },
        required: ['control', 'owner', 'primary'],
      },
      ssn_last4: {
        type: 'string',
        description: "The last 4 digits of the representative's Social Security Number.",
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the representative in your database, used for cross-referencing between Straddle and your systems.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.embed.representatives.create(body);
  },
});

registerApiMethod({
  name: 'update_embed_representatives',
  description:
    "Updates an existing representative's information. This can be used to update personal details, contact information, or the relationship to the account or organization.",
  inputSchema: {
    type: 'object',
    properties: {
      representative_id: {
        type: 'string',
      },
      dob: {
        type: 'string',
        description: 'The date of birth of the representative, in ISO 8601 format (YYYY-MM-DD).',
        format: 'date',
      },
      email: {
        type: 'string',
        description: 'The email address of the representative.',
      },
      first_name: {
        type: 'string',
        description: 'The first name of the representative.',
      },
      last_name: {
        type: 'string',
        description: 'The last name of the representative.',
      },
      mobile_number: {
        type: 'string',
        description: 'The mobile phone number of the representative.',
      },
      relationship: {
        type: 'object',
        properties: {
          control: {
            type: 'boolean',
            description:
              'Whether the representative has significant responsibility to control, manage, or direct the organization. One representative must be identified under the control prong for each legal entity.',
          },
          owner: {
            type: 'boolean',
            description:
              'Whether the representative owns any percentage of of the equity interests of the legal entity.',
          },
          primary: {
            type: 'boolean',
            description:
              'Whether the person is authorized as the primary representative of the account. This is the person chosen by the business to provide information about themselves, general information about the account, and who consented to the services agreement. \n\n There can be only one primary representative for an account at a time.',
          },
          percent_ownership: {
            type: 'number',
            description: "The percentage of ownership the representative has. Required if 'Owner' is true.",
          },
          title: {
            type: 'string',
            description: 'The job title of the representative.',
          },
        },
        required: ['control', 'owner', 'primary'],
      },
      ssn_last4: {
        type: 'string',
        description: "The last 4 digits of the representative's Social Security Number.",
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the representative in your database, used for cross-referencing between Straddle and your systems.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { representative_id, ...body } = args;
    return client.embed.representatives.update(representative_id, body);
  },
});

registerApiMethod({
  name: 'list_embed_representatives',
  description:
    'Returns a list of representatives associated with a specific account or organization. The representatives are returned sorted by creation date, with the most recently created representatives appearing first. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the account to list representatives for.',
      },
      level: {
        type: 'string',
        enum: ['account', 'platform'],
      },
      organization_id: {
        type: 'string',
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Page size. Max value: 1000',
      },
      platform_id: {
        type: 'string',
      },
      sort_by: {
        type: 'string',
        description: 'Sort By.',
      },
      sort_order: {
        type: 'string',
        description: 'Sort Order.',
        enum: ['asc', 'desc'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.embed.representatives.list(body);
  },
});

registerApiMethod({
  name: 'get_embed_representatives',
  description:
    'Retrieves the details of an existing representative. Supply the unique representative ID, and Straddle will return the corresponding representative information.',
  inputSchema: {
    type: 'object',
    properties: {
      representative_id: {
        type: 'string',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { representative_id, ...body } = args;
    return client.embed.representatives.get(representative_id, body);
  },
});

registerApiMethod({
  name: 'unmask_embed_representatives',
  description:
    'Retrieves the unmasked details of a representative that has previously been created. Supply the unique representative ID, and Straddle will return the corresponding representative information, including sensitive details. This endpoint requires additional authentication and should be used with caution.',
  inputSchema: {
    type: 'object',
    properties: {
      representative_id: {
        type: 'string',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { representative_id, ...body } = args;
    return client.embed.representatives.unmask(representative_id, body);
  },
});

registerApiMethod({
  name: 'initialize_bridge',
  description: 'Use this endpoint to generate a session token for use in the Bridge widget.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description:
          'The Straddle generated unique identifier of the `customer` to create a bridge token for.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.bridge.initialize(body);
  },
});

registerApiMethod({
  name: 'bank_account_bridge_link',
  description:
    'Use Bridge to create a new paykey using a bank routing and account number as the source. This endpoint allows you to create a secure payment token linked to a specific bank account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_number: {
        type: 'string',
        description: 'The bank account number.',
      },
      account_type: {
        type: 'string',
        enum: ['checking', 'savings'],
      },
      customer_id: {
        type: 'string',
        description: 'Unique identifier of the related customer object.',
      },
      routing_number: {
        type: 'string',
        description: 'The routing number of the bank account.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the paykey in a structured format.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.bridge.link.bankAccount(body);
  },
});

registerApiMethod({
  name: 'plaid_bridge_link',
  description:
    'Use Bridge to create a new paykey using a Plaid token as the source. This endpoint allows you to create a secure payment token linked to a bank account authenticated through Plaid.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'Unique identifier of the related customer object.',
      },
      plaid_token: {
        type: 'string',
        description: 'Plaid processor token generated by your application for use with the Straddle API.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the paykey in a structured format.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.bridge.link.plaid(body);
  },
});

registerApiMethod({
  name: 'create_customers',
  description:
    'Creates a new customer record and automatically initiates identity, fraud, and risk assessment scores. This endpoint allows you to create a customer profile and associate it with paykeys and payments.',
  inputSchema: {
    type: 'object',
    properties: {
      device: {
        type: 'object',
        properties: {
          ip_address: {
            type: 'string',
            description:
              "The customer's IP address at the time of profile creation. Use `0.0.0.0` to represent an offline customer registration.",
          },
        },
        required: ['ip_address'],
      },
      email: {
        type: 'string',
        description: "The customer's email address.",
      },
      name: {
        type: 'string',
        description: 'Full name of the individual or business name.',
      },
      phone: {
        type: 'string',
        description: "The customer's phone number in E.164 format. Mobile number is preferred.",
      },
      type: {
        type: 'string',
        enum: ['individual', 'business'],
      },
      address: {
        type: 'object',
        description:
          "An object containing the customer's address. This is optional, but if provided, all required fields must be present.",
        properties: {
          address1: {
            type: 'string',
            description: 'Primary address line (e.g., street, PO Box).',
          },
          city: {
            type: 'string',
            description: 'City, district, suburb, town, or village.',
          },
          state: {
            type: 'string',
            description: 'Two-letter state code.',
          },
          zip: {
            type: 'string',
            description: 'Zip or postal code.',
          },
          address2: {
            type: 'string',
            description: 'Secondary address line (e.g., apartment, suite, unit, or building).',
          },
        },
        required: ['address1', 'city', 'state', 'zip'],
      },
      compliance_profile: {
        anyOf: [
          {
            type: 'object',
            title: 'Individual Compliance Profile',
            description: 'Individual PII data required to trigger Patriot Act compliant KYC verification.',
            properties: {
              dob: {
                type: 'string',
                description:
                  'Date of birth (YYYY-MM-DD). Required for Patriot Act-compliant KYC verification.',
                format: 'date',
              },
              ssn: {
                type: 'string',
                description:
                  'Social Security Number (format XXX-XX-XXXX). Required for Patriot Act-compliant KYC verification.',
              },
            },
            required: ['dob', 'ssn'],
          },
          {
            type: 'object',
            title: 'Business Compliance Profile',
            description:
              'Business registration data required to trigger Patriot Act compliant KYB verification.',
            properties: {
              ein: {
                type: 'string',
                description:
                  'Employer Identification Number (format XX-XXXXXXX). Required for Patriot Act-compliant KYB verification.',
              },
              legal_business_name: {
                type: 'string',
                description:
                  "Official registered business name as listed with the IRS. This value will be matched against the 'legal_business name'.",
              },
              website: {
                type: 'string',
                description: 'Official business website URL. Optional but recommended for enhanced KYB.',
              },
            },
            required: ['ein', 'legal_business_name'],
          },
        ],
        description:
          "An object containing the customer's compliance profile. **This is optional.** If all required fields must be present for the appropriate customer type.",
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the customer in your database, used for cross-referencing between Straddle and your systems.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the customer in a structured format.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.customers.create(body);
  },
});

registerApiMethod({
  name: 'update_customers',
  description:
    "Updates an existing customer's information. This endpoint allows you to modify the customer's contact details, PII, and metadata.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      device: {
        type: 'object',
        properties: {
          ip_address: {
            type: 'string',
            description:
              "The customer's IP address at the time of profile creation. Use `0.0.0.0` to represent an offline customer registration.",
          },
        },
        required: ['ip_address'],
      },
      email: {
        type: 'string',
        description: "The customer's email address.",
      },
      name: {
        type: 'string',
        description: "The customer's full name or business name.",
      },
      phone: {
        type: 'string',
        description: "The customer's phone number in E.164 format.",
      },
      status: {
        type: 'string',
        enum: ['pending', 'review', 'verified', 'inactive', 'rejected'],
      },
      address: {
        type: 'object',
        description:
          "An object containing the customer's address. This is optional, but if provided, all required fields must be present.",
        properties: {
          address1: {
            type: 'string',
            description: 'Primary address line (e.g., street, PO Box).',
          },
          city: {
            type: 'string',
            description: 'City, district, suburb, town, or village.',
          },
          state: {
            type: 'string',
            description: 'Two-letter state code.',
          },
          zip: {
            type: 'string',
            description: 'Zip or postal code.',
          },
          address2: {
            type: 'string',
            description: 'Secondary address line (e.g., apartment, suite, unit, or building).',
          },
        },
        required: ['address1', 'city', 'state', 'zip'],
      },
      compliance_profile: {
        anyOf: [
          {
            type: 'object',
            title: 'Individual Compliance Profile',
            description: 'Individual PII data required to trigger Patriot Act compliant KYC verification.',
            properties: {
              dob: {
                type: 'string',
                description:
                  'Date of birth (YYYY-MM-DD). Required for Patriot Act-compliant KYC verification.',
                format: 'date',
              },
              ssn: {
                type: 'string',
                description:
                  'Social Security Number (format XXX-XX-XXXX). Required for Patriot Act-compliant KYC verification.',
              },
            },
            required: ['dob', 'ssn'],
          },
          {
            type: 'object',
            title: 'Business Compliance Profile',
            description:
              'Business registration data required to trigger Patriot Act compliant KYB verification.',
            properties: {
              ein: {
                type: 'string',
                description:
                  'Employer Identification Number (format XX-XXXXXXX). Required for Patriot Act-compliant KYB verification.',
              },
              legal_business_name: {
                type: 'string',
                description:
                  "Official registered business name as listed with the IRS. This value will be matched against the 'legal_business name'.",
              },
              website: {
                type: 'string',
                description: 'Official business website URL. Optional but recommended for enhanced KYB.',
              },
            },
            required: ['ein', 'legal_business_name'],
          },
        ],
        description: 'Individual PII data required to trigger Patriot Act compliant KYC verification.',
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the customer in your database, used for cross-referencing between Straddle and your systems.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the customer in a structured format.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.customers.update(id, body);
  },
});

registerApiMethod({
  name: 'list_customers',
  description:
    'Lists or searches customers connected to your account. All supported query parameters are optional. If none are provided, the response will include all customers connected to your account. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      created_from: {
        type: 'string',
        description: 'Start date for filtering by `created_at` date.',
        format: 'date-time',
      },
      created_to: {
        type: 'string',
        description: 'End date for filtering by `created_at` date.',
        format: 'date-time',
      },
      email: {
        type: 'string',
        description: 'Filter customers by `email` address.',
      },
      external_id: {
        type: 'string',
        description: "Filter by your system's `external_id`.",
      },
      name: {
        type: 'string',
        description: 'Filter customers by `name` (partial match).',
      },
      page_number: {
        type: 'integer',
        description: 'Page number for paginated results. Starts at 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Number of results per page. Maximum: 1000.',
      },
      search_text: {
        type: 'string',
        description: 'General search term to filter customers.',
      },
      sort_by: {
        type: 'string',
        enum: ['name', 'created_at'],
      },
      sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'array',
        description: 'Filter customers by their current `status`.',
        items: {
          type: 'string',
          enum: ['pending', 'review', 'verified', 'inactive', 'rejected'],
        },
      },
      types: {
        type: 'array',
        description: 'Filter by customer type `individual` or `business`.',
        items: {
          type: 'string',
          enum: ['individual', 'business'],
        },
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.customers.list(body);
  },
});

registerApiMethod({
  name: 'delete_customers',
  description:
    'Permanently removes a customer record from Straddle. This action cannot be undone and should only be used to satisfy regulatory requirements or for privacy compliance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.customers.delete(id, body);
  },
});

registerApiMethod({
  name: 'get_customers',
  description:
    "Retrieves the details of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.customers.get(id, body);
  },
});

registerApiMethod({
  name: 'refresh_review_customers',
  description:
    "Updates the decision of a customer's identity validation. This endpoint allows you to modify the outcome of a customer decision and is useful for correcting or updating the status of a customer's verification.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.customers.refreshReview(id, body);
  },
});

registerApiMethod({
  name: 'unmasked_customers',
  description:
    "Retrieves the unmasked details, including PII, of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information. This endpoint needs to be enabled by Straddle and should only be used when absolutely necessary.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.customers.unmasked(id, body);
  },
});

registerApiMethod({
  name: 'decision_customers_review',
  description:
    "Updates the status of a customer's identity decision. This endpoint allows you to modify the outcome of a customer risk screening and is useful for correcting or updating the status of a customer's verification. Note that this endpoint is only available for customers with a current status of `review`.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description: 'The final status of the customer review.',
        enum: ['verified', 'rejected'],
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.customers.review.decision(id, body);
  },
});

registerApiMethod({
  name: 'get_customers_review',
  description:
    "Retrieves and analyzes the results of a customer's identity validation and fraud score. This endpoint provides a comprehensive breakdown of the validation outcome, including:\n- Risk and correlation scores\n- Reason codes for the decision\n- Results of watchlist screening\n- Any network alerts detected\nUse this endpoint to gain insights into the verification process and make informed decisions about customer onboarding.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.customers.review.get(id, body);
  },
});

registerApiMethod({
  name: 'list_paykeys',
  description:
    'Returns a list of paykeys associated with a Straddle account. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'Filter paykeys by related customer ID.',
      },
      page_number: {
        type: 'integer',
        description: 'Page number for paginated results. Starts at 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Number of results per page. Maximum: 1000.',
      },
      sort_by: {
        type: 'string',
        enum: ['institution_name', 'expires_at', 'created_at'],
      },
      sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'array',
        description: 'Filter paykeys by their current status.',
        items: {
          type: 'string',
          enum: ['pending', 'active', 'inactive', 'rejected'],
        },
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.paykeys.list(body);
  },
});

registerApiMethod({
  name: 'get_paykeys',
  description:
    'Retrieves the details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record , including the `paykey` token value and masked bank account details.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.paykeys.get(id, body);
  },
});

registerApiMethod({
  name: 'reveal_paykeys',
  description:
    'Retrieves the details of a paykey that has previously been created, including unmasked bank account fields. Supply the unique paykey ID that was returned from your previous request, and Straddle will return the corresponding paykey information.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.paykeys.reveal(id, body);
  },
});

registerApiMethod({
  name: 'unmasked_paykeys',
  description:
    'Retrieves the unmasked details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record, including the unmasked bank account details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.paykeys.unmasked(id, body);
  },
});

registerApiMethod({
  name: 'create_charges',
  description: 'Use charges to collect money from a customer for the sale of goods or services.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        description: 'The amount of the charge in cents.',
      },
      config: {
        type: 'object',
        properties: {
          balance_check: {
            type: 'string',
            description: "Defines whether to check the customer's balance before processing the charge.",
            enum: ['required', 'enabled', 'disabled'],
          },
        },
        required: ['balance_check'],
      },
      consent_type: {
        type: 'string',
        description:
          'The channel or mechanism through which the payment was authorized. Use `internet` for payments made online or through a mobile app and `signed` for signed agreements where there is a consent form or contract. Use `signed` for PDF signatures.',
        enum: ['internet', 'signed'],
      },
      currency: {
        type: 'string',
        description: 'The currency of the charge. Only USD is supported.',
      },
      description: {
        type: 'string',
        description: 'An arbitrary description for the charge.',
      },
      device: {
        type: 'object',
        properties: {
          ip_address: {
            type: 'string',
            description:
              'The IP address of the device used when the customer authorized the charge or payout. Use `0.0.0.0` to represent an offline consent interaction.',
          },
        },
        required: ['ip_address'],
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the charge in your database. This value must be unique across all charges.',
      },
      paykey: {
        type: 'string',
        description: 'Value of the `paykey` used for the charge.',
      },
      payment_date: {
        type: 'string',
        description:
          'The desired date on which the payment should be occur. For charges, this means the date you want the customer to be debited on.',
        format: 'date',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the charge in a structured format.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.charges.create(body);
  },
});

registerApiMethod({
  name: 'update_charges',
  description:
    'Change the values of parameters associated with a charge prior to processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      amount: {
        type: 'integer',
        description: 'The amount of the charge in cents.',
      },
      description: {
        type: 'string',
        description: 'An arbitrary description for the charge.',
      },
      payment_date: {
        type: 'string',
        description:
          'The desired date on which the payment should be occur. For charges, this means the date you want the customer to be debited on.',
        format: 'date',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the charge in a structured format.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.charges.update(id, body);
  },
});

registerApiMethod({
  name: 'cancel_charges',
  description:
    'Cancel a charge to prevent it from being originated for processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the charge status was updated.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.charges.cancel(id, body);
  },
});

registerApiMethod({
  name: 'get_charges',
  description:
    'Retrieves the details of an existing charge. Supply the unique charge `id`, and Straddle will return the corresponding charge information.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.charges.get(id, body);
  },
});

registerApiMethod({
  name: 'hold_charges',
  description:
    'Place a charge on hold to prevent it from being originated for processing. The status of the charge must be `created` or `scheduled`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the charge status was updated.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.charges.hold(id, body);
  },
});

registerApiMethod({
  name: 'release_charges',
  description: 'Release a charge from an `on_hold` status to allow it to be rescheduled for processing.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the charge status was updated.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.charges.release(id, body);
  },
});

registerApiMethod({
  name: 'list_funding_events',
  description:
    'Retrieves a list of funding events for your account. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      created_from: {
        type: 'string',
        description: 'The start date of the range to filter by using the `YYYY-MM-DD` format.',
        format: 'date',
      },
      created_to: {
        type: 'string',
        description: 'The end date of the range to filter by using the `YYYY-MM-DD` format.',
        format: 'date',
      },
      direction: {
        type: 'string',
        description:
          'Describes the direction of the funding event from the perspective of the `linked_bank_account`.',
        enum: ['deposit', 'withdrawal'],
      },
      event_type: {
        type: 'string',
        description: 'The funding event types describes the direction and reason for the funding event.',
        enum: ['charge_deposit', 'charge_reversal', 'payout_return', 'payout_withdrawal'],
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Results page size. Max value: 1000',
      },
      sort_by: {
        type: 'string',
        description: 'The field to sort the results by.',
        enum: ['transfer_date', 'id', 'amount'],
      },
      sort_order: {
        type: 'string',
        description: 'The order in which to sort the results.',
        enum: ['asc', 'desc'],
      },
      trace_number: {
        type: 'string',
        description: 'Trace number.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.fundingEvents.list(body);
  },
});

registerApiMethod({
  name: 'get_funding_events',
  description:
    'Retrieves the details of an existing funding event. Supply the unique funding event `id`, and Straddle will return the individual transaction items that make up the funding event.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.fundingEvents.get(id, body);
  },
});

registerApiMethod({
  name: 'list_payments',
  description:
    'Search for payments, including `charges` and `payouts`, using a variety of criteria. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'Search using the `customer_id` of a `charge` or `payout`.',
      },
      default_page_size: {
        type: 'integer',
      },
      default_sort: {
        type: 'string',
        description: 'The field to sort the results by.',
        enum: ['created_at', 'payment_date', 'effective_at', 'id', 'amount'],
      },
      default_sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      external_id: {
        type: 'string',
        description: 'Search using the `external_id` of a `charge` or `payout`.',
      },
      funding_id: {
        type: 'string',
        description: 'Search using the `funding_id` of a `charge` or `payout`.',
      },
      max_amount: {
        type: 'integer',
        description: 'Search using a maximum `amount` of a `charge` or `payout`.',
      },
      max_created_at: {
        type: 'string',
        description: 'Search using the latest `created_at` date of a `charge` or `payout`.',
        format: 'date-time',
      },
      max_effective_at: {
        type: 'string',
        description: 'Search using the latest `effective_date` of a `charge` or `payout`.',
        format: 'date-time',
      },
      max_payment_date: {
        type: 'string',
        description: 'Search using the latest `payment_date` of a `charge` or `payout`.',
        format: 'date',
      },
      min_amount: {
        type: 'integer',
        description: 'Search using the minimum `amount of a `charge` or `payout`.',
      },
      min_created_at: {
        type: 'string',
        description: 'Search using the earliest `created_at` date of a `charge` or `payout`.',
        format: 'date-time',
      },
      min_effective_at: {
        type: 'string',
        description: 'Search using the earliest `effective_date` of a `charge` or `payout`.',
        format: 'date-time',
      },
      min_payment_date: {
        type: 'string',
        description: 'Search using the earliest ` `of a `charge` or `payout`.',
        format: 'date',
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Results page size. Max value: 1000',
      },
      paykey: {
        type: 'string',
        description: 'Search using the `paykey` of a `charge` or `payout`.',
      },
      paykey_id: {
        type: 'string',
        description: 'Search using the `paykey_id` of a `charge` or `payout`.',
      },
      payment_id: {
        type: 'string',
        description: 'Search using the `id` of a `charge` or `payout`.',
      },
      payment_status: {
        type: 'array',
        description: 'Search by the status of a `charge` or `payout`.',
        items: {
          type: 'string',
          description: 'The current status of the `charge` or `payout`.',
          enum: ['created', 'scheduled', 'failed', 'cancelled', 'on_hold', 'pending', 'paid', 'reversed'],
        },
      },
      payment_type: {
        type: 'array',
        description: 'Search by the type of a `charge` or `payout`.',
        items: {
          type: 'string',
          description: 'The type of payment.',
          enum: ['charge', 'payout'],
        },
      },
      search_text: {
        type: 'string',
        description: 'Search using a text string associated with a `charge` or `payout`.',
      },
      sort_by: {
        type: 'string',
        description: 'The field to sort the results by.',
        enum: ['created_at', 'payment_date', 'effective_at', 'id', 'amount'],
      },
      sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.payments.list(body);
  },
});

registerApiMethod({
  name: 'create_payouts',
  description: 'Use payouts to send money to your customers.',
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
        description: 'The amount of the payout in cents.',
      },
      currency: {
        type: 'string',
        description: 'The currency of the payout. Only USD is supported.',
      },
      description: {
        type: 'string',
        description: 'An arbitrary description for the payout.',
      },
      device: {
        type: 'object',
        properties: {
          ip_address: {
            type: 'string',
            description:
              'The IP address of the device used when the customer authorized the charge or payout. Use `0.0.0.0` to represent an offline consent interaction.',
          },
        },
        required: ['ip_address'],
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the payout in your database. This value must be unique across all payouts.',
      },
      paykey: {
        type: 'string',
        description: 'Value of the `paykey` used for the payout.',
      },
      payment_date: {
        type: 'string',
        description:
          'The desired date on which the payout should be occur. For payouts, this means the date you want the funds to be sent from your bank account.',
        format: 'date',
      },
      config: {
        type: 'object',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the payout in a structured format.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.payouts.create(body);
  },
});

registerApiMethod({
  name: 'update_payouts',
  description:
    'Update the details of a payout prior to processing. The status of the payout must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      amount: {
        type: 'integer',
        description: 'The amount of the payout in cents.',
      },
      description: {
        type: 'string',
        description: 'An arbitrary description for the payout.',
      },
      payment_date: {
        type: 'string',
        description:
          'The desired date on which the payment should be occur. For payouts, this means the date you want the funds to be sent from your bank account.',
        format: 'date',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the payout in a structured format.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.payouts.update(id, body);
  },
});

registerApiMethod({
  name: 'cancel_payouts',
  description:
    'Cancel a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the payout status was updated.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.payouts.cancel(id, body);
  },
});

registerApiMethod({
  name: 'get_payouts',
  description:
    'Retrieves the details of an existing payout. Supply the unique payout `id` to retrieve the corresponding payout information.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.payouts.get(id, body);
  },
});

registerApiMethod({
  name: 'hold_payouts',
  description:
    'Hold a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the payout status was updated.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.payouts.hold(id, body);
  },
});

registerApiMethod({
  name: 'release_payouts',
  description: 'Release a payout from a `hold` status to allow it to be rescheduled for processing.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the payout status was updated.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { id, ...body } = args;
    return client.payouts.release(id, body);
  },
});

registerApiMethod({
  name: 'create_total_customers_by_status_reports',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
  handler: (args: any) => {
    const { ...body } = args;
    return client.reports.createTotalCustomersByStatus(body);
  },
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools,
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  const handler = handlers[name];
  if (!handler) {
    throw new Error(`Unknown tool: ${name}`);
  }

  const result = await handler(args);
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
});

function registerApiMethod({
  name,
  description,
  inputSchema,
  handler,
}: {
  name: string;
  description: string;
  inputSchema: Tool['inputSchema'];
  handler: Function;
}) {
  tools.push({ name, description, inputSchema });
  handlers[name] = handler;
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
}

console.error('running main');
main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
