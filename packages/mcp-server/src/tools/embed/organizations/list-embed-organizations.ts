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
  name: 'list_embed_organizations',
  description:
    'Retrieves a list of organizations associated with your Straddle integration. The organizations are returned sorted by creation date, with the most recently created organizations appearing first. This endpoint supports advanced sorting and filtering options to help you find specific organizations.',
  inputSchema: {
    type: 'object',
    properties: {
      external_id: {
        type: 'string',
        description: 'List organizations by their external ID.',
      },
      name: {
        type: 'string',
        description: 'List organizations by name (partial match supported).',
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Page size. Max value: 1000',
      },
      sort_by: {
        type: 'string',
        description: 'Sort By.',
      },
      sort_order: {
        type: 'string',
        description: 'Sort Order.',
        enum: ['asc', 'desc'],
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
  const { ...body } = args;
  return client.embed.organizations.list(body);
};

export default { metadata, tool, handler };
