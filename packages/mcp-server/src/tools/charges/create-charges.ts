// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'charges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/charges',
  operationId: 'CreateCharge',
};

export const tool: Tool = {
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
        $ref: '#/$defs/device_info_v1',
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
    required: [
      'amount',
      'config',
      'consent_type',
      'currency',
      'description',
      'device',
      'external_id',
      'paykey',
      'payment_date',
    ],
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
  return asTextContentResult(await client.charges.create(body));
};

export default { metadata, tool, handler };
