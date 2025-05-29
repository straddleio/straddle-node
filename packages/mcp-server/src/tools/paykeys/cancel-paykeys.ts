// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'paykeys',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/paykeys/{id}/cancel',
};

export const tool: Tool = {
  name: 'cancel_paykeys',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
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
};

export const handler = (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.paykeys.cancel(id, body);
};

export default { metadata, tool, handler };
