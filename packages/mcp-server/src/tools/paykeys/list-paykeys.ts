// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@straddleio/straddle-mcp/filtering';
import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of paykeys associated with a Straddle account. This endpoint supports advanced sorting and filtering options.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/paykey_summary_paged_v1',\n  $defs: {\n    paykey_summary_paged_v1: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the paykey.'\n              },\n              config: {\n                type: 'object',\n                properties: {\n                  sandbox_outcome: {\n                    type: 'string',\n                    enum: [                      'standard',\n                      'active',\n                      'rejected'\n                    ]\n                  }\n                }\n              },\n              created_at: {\n                type: 'string',\n                description: 'Timestamp of when the paykey was created.',\n                format: 'date-time'\n              },\n              label: {\n                type: 'string',\n                description: 'Human-readable label that combines the bank name and masked account number to help easility represent this paykey in a UI'\n              },\n              paykey: {\n                type: 'string',\n                description: 'The tokenized paykey value. This value is used to create payments and should be stored securely.'\n              },\n              source: {\n                type: 'string',\n                enum: [                  'bank_account',\n                  'straddle',\n                  'mx',\n                  'plaid',\n                  'tan',\n                  'quiltt'\n                ]\n              },\n              status: {\n                type: 'string',\n                enum: [                  'pending',\n                  'active',\n                  'inactive',\n                  'rejected',\n                  'review'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Timestamp of the most recent update to the paykey.',\n                format: 'date-time'\n              },\n              bank_data: {\n                type: 'object',\n                properties: {\n                  account_number: {\n                    type: 'string',\n                    description: 'Bank account number. This value is masked by default for security reasons. Use the /unmask endpoint to access the unmasked value.'\n                  },\n                  account_type: {\n                    type: 'string',\n                    enum: [                      'checking',\n                      'savings'\n                    ]\n                  },\n                  routing_number: {\n                    type: 'string',\n                    description: 'The routing number of the bank account.'\n                  }\n                },\n                required: [                  'account_number',\n                  'account_type',\n                  'routing_number'\n                ]\n              },\n              customer_id: {\n                type: 'string',\n                description: 'Unique identifier of the related customer object.'\n              },\n              expires_at: {\n                type: 'string',\n                description: 'Expiration date and time of the paykey, if applicable.',\n                format: 'date-time'\n              },\n              institution_name: {\n                type: 'string',\n                description: 'Name of the financial institution.'\n              },\n              status_details: {\n                type: 'object',\n                properties: {\n                  changed_at: {\n                    type: 'string',\n                    description: 'The time the status change occurred.',\n                    format: 'date-time'\n                  },\n                  message: {\n                    type: 'string',\n                    description: 'A human-readable description of the current status.'\n                  },\n                  reason: {\n                    type: 'string',\n                    enum: [                      'insufficient_funds',\n                      'closed_bank_account',\n                      'invalid_bank_account',\n                      'invalid_routing',\n                      'disputed',\n                      'payment_stopped',\n                      'owner_deceased',\n                      'frozen_bank_account',\n                      'risk_review',\n                      'fraudulent',\n                      'duplicate_entry',\n                      'invalid_paykey',\n                      'payment_blocked',\n                      'amount_too_large',\n                      'too_many_attempts',\n                      'internal_system_error',\n                      'user_request',\n                      'ok',\n                      'other_network_return',\n                      'payout_refused'\n                    ]\n                  },\n                  source: {\n                    type: 'string',\n                    enum: [                      'watchtower',\n                      'bank_decline',\n                      'customer_dispute',\n                      'user_action',\n                      'system'\n                    ]\n                  },\n                  code: {\n                    type: 'string',\n                    description: 'The status code if applicable.'\n                  }\n                },\n                required: [                  'changed_at',\n                  'message',\n                  'reason',\n                  'source'\n                ]\n              }\n            },\n            required: [              'id',\n              'config',\n              'created_at',\n              'label',\n              'paykey',\n              'source',\n              'status',\n              'updated_at'\n            ]\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            api_request_id: {\n              type: 'string',\n              description: 'Unique identifier for this API request, useful for troubleshooting.'\n            },\n            api_request_timestamp: {\n              type: 'string',\n              description: 'Timestamp for this API request, useful for troubleshooting.',\n              format: 'date-time'\n            },\n            max_page_size: {\n              type: 'integer',\n              description: 'Maximum allowed page size for this endpoint.'\n            },\n            page_number: {\n              type: 'integer',\n              description: 'Page number for paginated results.'\n            },\n            page_size: {\n              type: 'integer',\n              description: 'Number of items per page in this response.'\n            },\n            sort_by: {\n              type: 'string',\n              description: 'The field that the results were sorted by.'\n            },\n            sort_order: {\n              type: 'string',\n              enum: [                'asc',\n                'desc'\n              ]\n            },\n            total_items: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer',\n              description: 'The number of pages available.'\n            }\n          },\n          required: [            'api_request_id',\n            'api_request_timestamp',\n            'max_page_size',\n            'page_number',\n            'page_size',\n            'sort_by',\n            'sort_order',\n            'total_items',\n            'total_pages'\n          ]\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    }\n  }\n}\n```",
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
      source: {
        type: 'array',
        description: 'Filter paykeys by their source.',
        items: {
          type: 'string',
          enum: ['bank_account', 'straddle', 'mx', 'plaid', 'tan', 'quiltt'],
        },
      },
      status: {
        type: 'array',
        description: 'Filter paykeys by their current status.',
        items: {
          type: 'string',
          enum: ['pending', 'active', 'inactive', 'rejected', 'review'],
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.paykeys.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
