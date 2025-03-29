// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../../tools';
import Straddle from '@straddleio/straddle';

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
  handler: (client: Straddle, args: any) => {
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
  handler: (client: Straddle, args: any) => {
    const { account_id, ...body } = args;
    return client.embed.accounts.capabilityRequests.list(account_id, body);
  },
});
