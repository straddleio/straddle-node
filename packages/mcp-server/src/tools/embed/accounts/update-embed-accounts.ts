// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'embed.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/accounts/{account_id}',
  operationId: 'UpdateAccount',
};

export const tool: Tool = {
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
        $ref: '#/$defs/business_profile_v1',
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
        additionalProperties: true,
      },
      'correlation-id': {
        type: 'string',
      },
      'idempotency-key': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
    required: ['account_id', 'business_profile'],
    $defs: {
      business_profile_v1: {
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
            $ref: '#/$defs/address_v1',
          },
          description: {
            type: 'string',
            description: 'A brief description of the business and its products or services.',
          },
          industry: {
            $ref: '#/$defs/industry_v1',
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
            $ref: '#/$defs/support_channels_v1',
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
      address_v1: {
        type: 'object',
        description: 'The address object is optional. If provided, it must be a valid address.',
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
        },
        required: ['address1', 'city', 'state', 'zip'],
      },
      industry_v1: {
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
            description: 'The specific sector within the industry category. Required if not providing MCC.',
          },
        },
      },
      support_channels_v1: {
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
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.embed.accounts.update(account_id, body));
  } catch (error) {
    if (error instanceof Straddle.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
