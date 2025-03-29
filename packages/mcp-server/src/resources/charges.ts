// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
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
  handler: (client: Straddle, args: any) => {
    const { ...body } = args;
    return client.charges.create(body);
  },
});

registerApiMethod({
  name: 'update_charges',
  description:
    'Change the values of parameters associated with a charge prior to processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      amount: {
        type: 'integer',
        description: 'The amount of the charge in cents.',
      },
      description: {
        type: 'string',
        description: 'An arbitrary description for the charge.',
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
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.charges.update(id, body);
  },
});

registerApiMethod({
  name: 'cancel_charges',
  description:
    'Cancel a charge to prevent it from being originated for processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the charge status was updated.',
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
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.charges.cancel(id, body);
  },
});

registerApiMethod({
  name: 'get_charges',
  description:
    'Retrieves the details of an existing charge. Supply the unique charge `id`, and Straddle will return the corresponding charge information.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.charges.get(id, body);
  },
});

registerApiMethod({
  name: 'hold_charges',
  description:
    'Place a charge on hold to prevent it from being originated for processing. The status of the charge must be `created` or `scheduled`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the charge status was updated.',
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
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.charges.hold(id, body);
  },
});

registerApiMethod({
  name: 'release_charges',
  description: 'Release a charge from an `on_hold` status to allow it to be rescheduled for processing.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the charge status was updated.',
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
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.charges.release(id, body);
  },
});
