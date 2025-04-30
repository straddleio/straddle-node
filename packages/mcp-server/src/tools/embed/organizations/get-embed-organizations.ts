// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.organizations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_embed_organizations',
  description:
    'Retrieves the details of an Organization that has previously been created. Supply the unique organization ID that was returned from your previous request, and Straddle will return the corresponding organization information.',
  inputSchema: {
    type: 'object',
    properties: {
      organization_id: {
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
  const { organization_id, ...body } = args as any;
  return client.embed.organizations.get(organization_id, body);
};

export default { metadata, tool, handler };
