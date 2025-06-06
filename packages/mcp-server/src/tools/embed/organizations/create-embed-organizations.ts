// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.organizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/organizations',
  operationId: 'CreateOrganization',
};

export const tool: Tool = {
  name: 'create_embed_organizations',
  description:
    'Creates a new organization related to your Straddle integration. Organizations can be used to group related accounts and manage permissions across multiple users.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the organization.',
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the organization in your database, used for cross-referencing between Straddle and your systems.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the organization in a structured format.',
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
  const body = args as any;
  return asTextContentResult(await client.embed.organizations.create(body));
};

export default { metadata, tool, handler };
