// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.accounts.capability_requests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: Straddle, args: any) => {
  const { account_id, ...body } = args;
  return client.embed.accounts.capabilityRequests.create(account_id, body);
};

export default { metadata, tool, handler };
