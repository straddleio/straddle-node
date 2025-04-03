// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: Straddle, args: any) => {
  const { ...body } = args;
  return client.embed.accounts.create(body);
};

export default { metadata, tool, handler };
