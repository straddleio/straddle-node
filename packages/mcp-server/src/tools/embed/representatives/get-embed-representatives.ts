// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.representatives',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/representatives/{representative_id}',
  operationId: 'GetRepresentative',
};

export const tool: Tool = {
  name: 'get_embed_representatives',
  description:
    'Retrieves the details of an existing representative. Supply the unique representative ID, and Straddle will return the corresponding representative information.',
  inputSchema: {
    type: 'object',
    properties: {
      representative_id: {
        type: 'string',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { representative_id, ...body } = args as any;
  return client.embed.representatives.get(representative_id, body);
};

export default { metadata, tool, handler };
