// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'paykeys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/paykeys/{id}/reveal',
};

export const tool: Tool = {
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
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.paykeys.reveal(id, body));
};

export default { metadata, tool, handler };
