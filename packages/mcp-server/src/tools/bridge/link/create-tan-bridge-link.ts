// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'bridge.link',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bridge/tan',
};

export const tool: Tool = {
  name: 'create_tan_bridge_link',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
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
        description: 'Bank routing number.',
      },
      tan: {
        type: 'string',
        description: 'Tokenized account number.',
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
  return client.bridge.link.createTan(body);
};

export default { metadata, tool, handler };
