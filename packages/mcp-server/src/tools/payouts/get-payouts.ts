// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'payouts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/payouts/{id}',
  operationId: 'GetPayout',
};

export const tool: Tool = {
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
};

export const handler = (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.payouts.get(id, body);
};

export default { metadata, tool, handler };
