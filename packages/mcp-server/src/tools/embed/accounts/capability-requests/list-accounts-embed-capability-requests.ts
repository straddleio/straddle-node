// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@straddlecom/straddle-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'embed.accounts.capability_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/accounts/{account_id}/capability_requests',
  operationId: 'ListCapabilityRequests',
};

export const tool: Tool = {
  name: 'list_accounts_embed_capability_requests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of capability requests associated with an account. The requests are returned sorted by creation date, with the most recent requests appearing first. This endpoint supports advanced sorting and filtering options.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/capability_request_paged_v1',\n  $defs: {\n    capability_request_paged_v1: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the capability request.'\n              },\n              account_id: {\n                type: 'string',\n                description: 'The unique identifier of the account associated with this capability request.'\n              },\n              category: {\n                type: 'string',\n                description: 'The category of the requested capability. Use `payment_type` for charges and payouts, `customer_type` to define `individuals` or `businesses`, and `consent_type` for `signed_agreement` or `internet` payment authorization.',\n                enum: [                  'payment_type',\n                  'customer_type',\n                  'consent_type'\n                ]\n              },\n              created_at: {\n                type: 'string',\n                description: 'Timestamp of when the capability request was created.',\n                format: 'date-time'\n              },\n              status: {\n                type: 'string',\n                description: 'The current status of the capability request.',\n                enum: [                  'active',\n                  'inactive',\n                  'in_review',\n                  'rejected',\n                  'approved',\n                  'reviewing'\n                ]\n              },\n              type: {\n                type: 'string',\n                description: 'The specific type of capability being requested within the category.',\n                enum: [                  'charges',\n                  'payouts',\n                  'individuals',\n                  'businesses',\n                  'signed_agreement',\n                  'internet'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Timestamp of the most recent update to the capability request.',\n                format: 'date-time'\n              },\n              settings: {\n                type: 'object',\n                description: 'Any specific settings or configurations related to the requested capability.',\n                additionalProperties: true\n              }\n            },\n            required: [              'id',\n              'account_id',\n              'category',\n              'created_at',\n              'status',\n              'type',\n              'updated_at'\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/paged_response_metadata'\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    },\n    paged_response_metadata: {\n      type: 'object',\n      description: 'Metadata about the API request, including an identifier, timestamp, and pagination details.',\n      properties: {\n        api_request_id: {\n          type: 'string',\n          description: 'Unique identifier for this API request, useful for troubleshooting.'\n        },\n        api_request_timestamp: {\n          type: 'string',\n          description: 'Timestamp for this API request, useful for troubleshooting.',\n          format: 'date-time'\n        },\n        max_page_size: {\n          type: 'integer',\n          description: 'Maximum allowed page size for this endpoint.'\n        },\n        page_number: {\n          type: 'integer',\n          description: 'Page number for paginated results.'\n        },\n        page_size: {\n          type: 'integer',\n          description: 'Number of items per page in this response.'\n        },\n        sort_by: {\n          type: 'string',\n          description: 'The field that the results were sorted by.'\n        },\n        sort_order: {\n          type: 'string',\n          enum: [            'asc',\n            'desc'\n          ]\n        },\n        total_items: {\n          type: 'integer',\n          description: 'Total number of items returned in this response.'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'The number of pages available.'\n        }\n      },\n      required: [        'api_request_id',\n        'api_request_timestamp',\n        'max_page_size',\n        'page_number',\n        'page_size',\n        'sort_by',\n        'sort_order',\n        'total_items',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      category: {
        type: 'string',
        description: 'Filter capability requests by category.',
        enum: ['payment_type', 'customer_type', 'consent_type'],
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Page size.Max value: 1000',
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
      status: {
        type: 'string',
        description: 'Filter capability requests by their current status.',
        enum: ['active', 'inactive', 'in_review', 'rejected'],
      },
      type: {
        type: 'string',
        description: 'Filter capability requests by the specific type of capability.',
        enum: ['charges', 'payouts', 'individuals', 'businesses', 'signed_agreement', 'internet'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { account_id, jq_filter, ...body } = args as any;
  const response = await client.embed.accounts.capabilityRequests.list(account_id, body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Straddle.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
