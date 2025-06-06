// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.organizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/organizations/{organization_id}',
  operationId: 'GetOrganizationById',
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

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { organization_id, ...body } = args as any;
  return asTextContentResult(await client.embed.organizations.get(organization_id, body));
};

export default { metadata, tool, handler };
