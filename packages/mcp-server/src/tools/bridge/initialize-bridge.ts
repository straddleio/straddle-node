// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'bridge',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'initialize_bridge',
  description: 'Use this endpoint to generate a session token for use in the Bridge widget.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description:
          'The Straddle generated unique identifier of the `customer` to create a bridge token for.',
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
  return client.bridge.initialize(body);
};

export default { metadata, tool, handler };
