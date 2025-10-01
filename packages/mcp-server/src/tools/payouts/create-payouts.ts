// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'payouts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/payouts',
  operationId: 'CreatePayout',
};

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
        $ref: '#/$defs/device_info_v1',
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
        properties: {
          sandbox_outcome: {
            type: 'string',
            description: 'Payment will simulate processing if not Standard.',
            enum: [
              'standard',
              'paid',
              'on_hold_daily_limit',
              'cancelled_for_fraud_risk',
              'cancelled_for_balance_check',
              'failed_insufficient_funds',
              'reversed_insufficient_funds',
              'failed_customer_dispute',
              'reversed_customer_dispute',
              'failed_closed_bank_account',
              'reversed_closed_bank_account',
            ],
          },
        },
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the payout in a structured format.',
        additionalProperties: true,
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Idempotency-Key': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
    required: ['amount', 'currency', 'description', 'device', 'external_id', 'paykey', 'payment_date'],
    $defs: {
      device_info_v1: {
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
    },
  },
  annotations: {},
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.payouts.create(body));
};

export default { metadata, tool, handler };
