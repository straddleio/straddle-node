// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'charges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/charges/{id}',
  operationId: 'GetCharge',
};

export const tool: Tool = {
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
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.charges.get(id, body));
};

export default { metadata, tool, handler };
