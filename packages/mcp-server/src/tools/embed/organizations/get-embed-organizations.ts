// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

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

export const handler = (client: Straddle, args: any) => {
  const { organization_id, ...body } = args;
  return client.embed.organizations.get(organization_id, body);
};

export default { tool, handler };
