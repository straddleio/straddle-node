// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@straddlecom/straddle-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'embed.linked_bank_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/linked_bank_accounts',
};

export const tool: Tool = {
  name: 'list_embed_linked_bank_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of bank accounts associated with a specific Straddle account. The linked bank accounts are returned sorted by creation date, with the most recently created appearing first. This endpoint supports pagination to handle accounts with multiple linked bank accounts.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/linked_bank_account_paged_v1',\n  $defs: {\n    linked_bank_account_paged_v1: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the linked bank account.'\n              },\n              account_id: {\n                type: 'string',\n                description: 'The unique identifier of the Straddle account related to this bank account.'\n              },\n              bank_account: {\n                type: 'object',\n                properties: {\n                  account_holder: {\n                    type: 'string'\n                  },\n                  account_mask: {\n                    type: 'string'\n                  },\n                  institution_name: {\n                    type: 'string'\n                  },\n                  routing_number: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'account_holder',\n                  'account_mask',\n                  'institution_name',\n                  'routing_number'\n                ]\n              },\n              created_at: {\n                type: 'string',\n                description: 'Timestamp of when the bank account object was created.',\n                format: 'date-time'\n              },\n              purposes: {\n                type: 'array',\n                description: 'The purposes for the linked bank account.',\n                items: {\n                  type: 'string',\n                  enum: [                    'charges',\n                    'payouts',\n                    'billing'\n                  ]\n                }\n              },\n              status: {\n                type: 'string',\n                description: 'The current status of the linked bank account.',\n                enum: [                  'created',\n                  'onboarding',\n                  'active',\n                  'rejected',\n                  'inactive',\n                  'canceled'\n                ]\n              },\n              status_detail: {\n                type: 'object',\n                properties: {\n                  code: {\n                    type: 'string',\n                    description: 'A machine-readable code for the specific status, useful for programmatic handling.'\n                  },\n                  message: {\n                    type: 'string',\n                    description: 'A human-readable message describing the current status.'\n                  },\n                  reason: {\n                    type: 'string',\n                    description: 'A machine-readable identifier for the specific status, useful for programmatic handling.',\n                    enum: [                      'unverified',\n                      'in_review',\n                      'pending',\n                      'stuck',\n                      'verified',\n                      'failed_verification',\n                      'disabled',\n                      'new'\n                    ]\n                  },\n                  source: {\n                    type: 'string',\n                    description: 'Identifies the origin of the status change (e.g., `watchtower`). This helps in tracking the cause of status updates.',\n                    enum: [                      'watchtower'\n                    ]\n                  }\n                },\n                required: [                  'code',\n                  'message',\n                  'reason',\n                  'source'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Timestamp of the most recent update to the linked bank account.',\n                format: 'date-time'\n              },\n              description: {\n                type: 'string',\n                description: 'Optional description for the bank account.'\n              },\n              metadata: {\n                type: 'object',\n                description: 'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the linked bank account in a structured format.',\n                additionalProperties: true\n              },\n              platform_id: {\n                type: 'string',\n                description: 'The unique identifier of the Straddle Platform relatd to this bank account.'\n              }\n            },\n            required: [              'id',\n              'account_id',\n              'bank_account',\n              'created_at',\n              'purposes',\n              'status',\n              'status_detail',\n              'updated_at'\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/paged_response_metadata'\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    },\n    paged_response_metadata: {\n      type: 'object',\n      description: 'Metadata about the API request, including an identifier, timestamp, and pagination details.',\n      properties: {\n        api_request_id: {\n          type: 'string',\n          description: 'Unique identifier for this API request, useful for troubleshooting.'\n        },\n        api_request_timestamp: {\n          type: 'string',\n          description: 'Timestamp for this API request, useful for troubleshooting.',\n          format: 'date-time'\n        },\n        max_page_size: {\n          type: 'integer',\n          description: 'Maximum allowed page size for this endpoint.'\n        },\n        page_number: {\n          type: 'integer',\n          description: 'Page number for paginated results.'\n        },\n        page_size: {\n          type: 'integer',\n          description: 'Number of items per page in this response.'\n        },\n        sort_by: {\n          type: 'string',\n          description: 'The field that the results were sorted by.'\n        },\n        sort_order: {\n          type: 'string',\n          enum: [            'asc',\n            'desc'\n          ]\n        },\n        total_items: {\n          type: 'integer',\n          description: 'Total number of items returned in this response.'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'The number of pages available.'\n        }\n      },\n      required: [        'api_request_id',\n        'api_request_timestamp',\n        'max_page_size',\n        'page_number',\n        'page_size',\n        'sort_by',\n        'sort_order',\n        'total_items',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the related account.',
      },
      level: {
        type: 'string',
        enum: ['account', 'platform'],
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Page size. Max value: 1000',
      },
      purpose: {
        type: 'string',
        description:
          "The purpose of the linked bank accounts to return. Possible values: 'charges', 'payouts', 'billing'.",
        enum: ['charges', 'payouts', 'billing'],
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
        description:
          "The status of the linked bank accounts to return. Possible values: 'created', 'onboarding', 'active', 'inactive', 'rejected'.",
        enum: ['created', 'onboarding', 'active', 'rejected', 'inactive', 'canceled'],
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.embed.linkedBankAccounts.list(body).asResponse();
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
