// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
  name: 'list_funding_events',
  description:
    'Retrieves a list of funding events for your account. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      created_from: {
        type: 'string',
        description: 'The start date of the range to filter by using the `YYYY-MM-DD` format.',
        format: 'date',
      },
      created_to: {
        type: 'string',
        description: 'The end date of the range to filter by using the `YYYY-MM-DD` format.',
        format: 'date',
      },
      direction: {
        type: 'string',
        description:
          'Describes the direction of the funding event from the perspective of the `linked_bank_account`.',
        enum: ['deposit', 'withdrawal'],
      },
      event_type: {
        type: 'string',
        description: 'The funding event types describes the direction and reason for the funding event.',
        enum: ['charge_deposit', 'charge_reversal', 'payout_return', 'payout_withdrawal'],
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Results page size. Max value: 1000',
      },
      sort_by: {
        type: 'string',
        description: 'The field to sort the results by.',
        enum: ['transfer_date', 'id', 'amount'],
      },
      sort_order: {
        type: 'string',
        description: 'The order in which to sort the results.',
        enum: ['asc', 'desc'],
      },
      trace_number: {
        type: 'string',
        description: 'Trace number.',
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
    return client.fundingEvents.list(body);
  },
});

registerApiMethod({
  name: 'get_funding_events',
  description:
    'Retrieves the details of an existing funding event. Supply the unique funding event `id`, and Straddle will return the individual transaction items that make up the funding event.',
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
    return client.fundingEvents.get(id, body);
  },
});
