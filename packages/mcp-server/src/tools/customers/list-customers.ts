// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@straddleio/straddle-mcp/filtering';
import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists or searches customers connected to your account. All supported query parameters are optional. If none are provided, the response will include all customers connected to your account. This endpoint supports advanced sorting and filtering options.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_summary_paged_v1',\n  $defs: {\n    customer_summary_paged_v1: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the customer.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'Timestamp of when the customer record was created.',\n                format: 'date-time'\n              },\n              email: {\n                type: 'string',\n                description: 'The customer\\'s email address.'\n              },\n              name: {\n                type: 'string',\n                description: 'Full name of the individual or business name.'\n              },\n              phone: {\n                type: 'string',\n                description: 'The customer\\'s phone number in E.164 format.'\n              },\n              status: {\n                type: 'string',\n                enum: [                  'pending',\n                  'review',\n                  'verified',\n                  'inactive',\n                  'rejected'\n                ]\n              },\n              type: {\n                type: 'string',\n                enum: [                  'individual',\n                  'business'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Timestamp of the most recent update to the customer record.',\n                format: 'date-time'\n              },\n              external_id: {\n                type: 'string',\n                description: 'Unique identifier for the customer in your database, used for cross-referencing between Straddle and your systems.'\n              }\n            },\n            required: [              'id',\n              'created_at',\n              'email',\n              'name',\n              'phone',\n              'status',\n              'type',\n              'updated_at'\n            ]\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            api_request_id: {\n              type: 'string',\n              description: 'Unique identifier for this API request, useful for troubleshooting.'\n            },\n            api_request_timestamp: {\n              type: 'string',\n              description: 'Timestamp for this API request, useful for troubleshooting.',\n              format: 'date-time'\n            },\n            max_page_size: {\n              type: 'integer',\n              description: 'Maximum allowed page size for this endpoint.'\n            },\n            page_number: {\n              type: 'integer',\n              description: 'Page number for paginated results.'\n            },\n            page_size: {\n              type: 'integer',\n              description: 'Number of items per page in this response.'\n            },\n            sort_by: {\n              type: 'string',\n              description: 'The field that the results were sorted by.'\n            },\n            sort_order: {\n              type: 'string',\n              enum: [                'asc',\n                'desc'\n              ]\n            },\n            total_items: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer',\n              description: 'The number of pages available.'\n            }\n          },\n          required: [            'api_request_id',\n            'api_request_timestamp',\n            'max_page_size',\n            'page_number',\n            'page_size',\n            'sort_by',\n            'sort_order',\n            'total_items',\n            'total_pages'\n          ]\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.customers.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
