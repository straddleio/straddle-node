// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
  name: 'list_paykeys',
  description:
    'Returns a list of paykeys associated with a Straddle account. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'Filter paykeys by related customer ID.',
      },
      page_number: {
        type: 'integer',
        description: 'Page number for paginated results. Starts at 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Number of results per page. Maximum: 1000.',
      },
      sort_by: {
        type: 'string',
        enum: ['institution_name', 'expires_at', 'created_at'],
      },
      sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'array',
        description: 'Filter paykeys by their current status.',
        items: {
          type: 'string',
          enum: ['pending', 'active', 'inactive', 'rejected'],
        },
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
    return client.paykeys.list(body);
  },
});

registerApiMethod({
  name: 'get_paykeys',
  description:
    'Retrieves the details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record , including the `paykey` token value and masked bank account details.',
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
    return client.paykeys.get(id, body);
  },
});

registerApiMethod({
  name: 'reveal_paykeys',
  description:
    'Retrieves the details of a paykey that has previously been created, including unmasked bank account fields. Supply the unique paykey ID that was returned from your previous request, and Straddle will return the corresponding paykey information.',
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
    return client.paykeys.reveal(id, body);
  },
});

registerApiMethod({
  name: 'unmasked_paykeys',
  description:
    'Retrieves the unmasked details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record, including the unmasked bank account details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.',
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
    return client.paykeys.unmasked(id, body);
  },
});
