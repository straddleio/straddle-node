// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'funding_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/funding_events/{id}',
  operationId: 'GetFundingEvent',
};

export const tool: Tool = {
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
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.fundingEvents.get(id, body));
};

export default { metadata, tool, handler };
