// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../../tools';
import Straddle from '@straddleio/straddle';

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
        enum: ['business'],
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
  handler: (client: Straddle, args: any) => {
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
  handler: (client: Straddle, args: any) => {
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
  handler: (client: Straddle, args: any) => {
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
  handler: (client: Straddle, args: any) => {
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
  handler: (client: Straddle, args: any) => {
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
  handler: (client: Straddle, args: any) => {
    const { account_id, ...body } = args;
    return client.embed.accounts.simulate(account_id, body);
  },
});
