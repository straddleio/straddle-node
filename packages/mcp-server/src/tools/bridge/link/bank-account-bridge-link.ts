// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

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
      config: {
        type: 'object',
        properties: {
          processing_method: {
            type: 'string',
            enum: ['inline', 'background', 'skip'],
          },
          sandbox_outcome: {
            type: 'string',
            enum: ['standard', 'active', 'rejected', 'review'],
          },
        },
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the paykey in your database, used for cross-referencing between Straddle and your systems.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the paykey in a structured format.',
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
    required: ['account_number', 'account_type', 'customer_id', 'routing_number'],
  },
  annotations: {},
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bridge.link.bankAccount(body));
};

export default { metadata, tool, handler };
