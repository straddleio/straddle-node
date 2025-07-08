// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/accounts',
  operationId: 'ListAccounts',
};

export const tool: Tool = {
  name: 'list_embed_accounts',
  description:
    'Returns a list of accounts associated with your Straddle platform integration. The accounts are returned sorted by creation date, with the most recently created accounts appearing first. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1. Default value: 1',
      },
      page_size: {
        type: 'integer',
        description: 'Page size. Default value: 100. Max value: 1000',
      },
      search_text: {
        type: 'string',
      },
      sort_by: {
        type: 'string',
        description: "Sort By. Default value: 'id'.",
      },
      sort_order: {
        type: 'string',
        description: "Sort Order. Default value: 'asc'.",
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'string',
        enum: ['created', 'onboarding', 'active', 'rejected', 'inactive'],
      },
      type: {
        type: 'string',
        enum: ['business'],
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
  return asTextContentResult(await client.embed.accounts.list(body));
};

export default { metadata, tool, handler };
