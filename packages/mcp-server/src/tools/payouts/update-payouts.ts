// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'payouts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
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
};

export const handler = (client: Straddle, args: any) => {
  const { id, ...body } = args;
  return client.payouts.update(id, body);
};

export default { metadata, tool, handler };
