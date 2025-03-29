// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
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
  handler: (client: Straddle, args: any) => {
    const { ...body } = args;
    return client.payouts.create(body);
  },
});

registerApiMethod({
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
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.payouts.update(id, body);
  },
});

registerApiMethod({
  name: 'cancel_payouts',
  description:
    'Cancel a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the payout status was updated.',
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
    return client.payouts.cancel(id, body);
  },
});

registerApiMethod({
  name: 'get_payouts',
  description:
    'Retrieves the details of an existing payout. Supply the unique payout `id` to retrieve the corresponding payout information.',
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
    return client.payouts.get(id, body);
  },
});

registerApiMethod({
  name: 'hold_payouts',
  description:
    'Hold a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the payout status was updated.',
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
    return client.payouts.hold(id, body);
  },
});

registerApiMethod({
  name: 'release_payouts',
  description: 'Release a payout from a `hold` status to allow it to be rescheduled for processing.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the payout status was updated.',
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
    return client.payouts.release(id, body);
  },
});
