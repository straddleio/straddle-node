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
  httpPath: '/v1/paykeys',
  operationId: 'ListPaykeys',
};

export const tool: Tool = {
  name: 'list_paykeys',
  description:
    'Returns a list of paykeys associated with a Straddle account. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'Filter paykeys by related customer ID.',
      },
      page_number: {
        type: 'integer',
        description: 'Page number for paginated results. Starts at 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Number of results per page. Maximum: 1000.',
      },
      sort_by: {
        type: 'string',
        enum: ['institution_name', 'expires_at', 'created_at'],
      },
      sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'array',
        description: 'Filter paykeys by their current status.',
        items: {
          type: 'string',
          enum: ['pending', 'active', 'inactive', 'rejected'],
        },
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
  const body = args as any;
  return asTextContentResult(await client.paykeys.list(body));
};

export default { metadata, tool, handler };
