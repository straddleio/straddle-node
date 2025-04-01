// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const tool: Tool = {
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
};

export const handler = (client: Straddle, args: any) => {
  const { ...body } = args;
  return client.payouts.create(body);
};

export default { tool, handler };
