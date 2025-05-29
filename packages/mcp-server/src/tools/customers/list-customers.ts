// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers',
  operationId: 'ListCustomers',
};

export const tool: Tool = {
  name: 'list_customers',
  description:
    'Lists or searches customers connected to your account. All supported query parameters are optional. If none are provided, the response will include all customers connected to your account. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      created_from: {
        type: 'string',
        description: 'Start date for filtering by `created_at` date.',
        format: 'date-time',
      },
      created_to: {
        type: 'string',
        description: 'End date for filtering by `created_at` date.',
        format: 'date-time',
      },
      email: {
        type: 'string',
        description: 'Filter customers by `email` address.',
      },
      external_id: {
        type: 'string',
        description: "Filter by your system's `external_id`.",
      },
      name: {
        type: 'string',
        description: 'Filter customers by `name` (partial match).',
      },
      page_number: {
        type: 'integer',
        description: 'Page number for paginated results. Starts at 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Number of results per page. Maximum: 1000.',
      },
      search_text: {
        type: 'string',
        description: 'General search term to filter customers.',
      },
      sort_by: {
        type: 'string',
        enum: ['name', 'created_at'],
      },
      sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'array',
        description: 'Filter customers by their current `status`.',
        items: {
          type: 'string',
          enum: ['pending', 'review', 'verified', 'inactive', 'rejected'],
        },
      },
      types: {
        type: 'array',
        description: 'Filter by customer type `individual` or `business`.',
        items: {
          type: 'string',
          enum: ['individual', 'business'],
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

export const handler = (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.customers.list(body);
};

export default { metadata, tool, handler };
