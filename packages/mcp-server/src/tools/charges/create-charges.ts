// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

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
};

export const handler = (client: Straddle, args: any) => {
  const { ...body } = args;
  return client.charges.create(body);
};

export default { tool, handler };
