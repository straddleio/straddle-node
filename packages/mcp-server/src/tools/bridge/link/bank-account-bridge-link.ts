// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'bridge.link',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bridge/bank_account',
  operationId: 'CreateBankAccountPaykey',
};

export const tool: Tool = {
  name: 'bank_account_bridge_link',
  description:
    'Use Bridge to create a new paykey using a bank routing and account number as the source. This endpoint allows you to create a secure payment token linked to a specific bank account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_number: {
        type: 'string',
        description: 'The bank account number.',
      },
      account_type: {
        type: 'string',
        enum: ['checking', 'savings'],
      },
      customer_id: {
        type: 'string',
        description: 'Unique identifier of the related customer object.',
      },
      routing_number: {
        type: 'string',
        description: 'The routing number of the bank account.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the paykey in a structured format.',
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

export const handler = (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.bridge.link.bankAccount(body);
};

export default { metadata, tool, handler };
