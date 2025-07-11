// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@straddleio/straddle-mcp/filtering';
import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'funding_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/funding_events',
  operationId: 'ListFundingEvents',
};

export const tool: Tool = {
  name: 'list_funding_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of funding events for your account. This endpoint supports advanced sorting and filtering options.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/funding_event_summary_paged_v1',\n  $defs: {\n    funding_event_summary_paged_v1: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the funding event.'\n              },\n              amount: {\n                type: 'integer',\n                description: 'The amount of the funding event in cents.'\n              },\n              direction: {\n                type: 'string',\n                description: 'Describes the direction of the funding event from the perspective of the `linked_bank_account`.',\n                enum: [                  'deposit',\n                  'withdrawal'\n                ]\n              },\n              event_type: {\n                type: 'string',\n                description: 'The funding event types describes the direction and reason for the funding event.',\n                enum: [                  'charge_deposit',\n                  'charge_reversal',\n                  'payout_return',\n                  'payout_withdrawal'\n                ]\n              },\n              payment_count: {\n                type: 'integer',\n                description: 'The number of payments associated with the funding event.'\n              },\n              trace_numbers: {\n                type: 'array',\n                description: 'Trace number.',\n                items: {\n                  type: 'string'\n                }\n              },\n              transfer_date: {\n                type: 'string',\n                description: 'The date on which the funding event occurred. For `deposits` and `returns`, this is the date the funds were credited to your bank account. For `withdrawals` and `reversals`, this is the date the funds were debited from your bank account.',\n                format: 'date'\n              },\n              trace_number: {\n                type: 'string',\n                description: 'The trace number of the funding event.'\n              }\n            },\n            required: [              'id',\n              'amount',\n              'direction',\n              'event_type',\n              'payment_count',\n              'trace_numbers',\n              'transfer_date'\n            ]\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            api_request_id: {\n              type: 'string',\n              description: 'Unique identifier for this API request, useful for troubleshooting.'\n            },\n            api_request_timestamp: {\n              type: 'string',\n              description: 'Timestamp for this API request, useful for troubleshooting.',\n              format: 'date-time'\n            },\n            max_page_size: {\n              type: 'integer',\n              description: 'Maximum allowed page size for this endpoint.'\n            },\n            page_number: {\n              type: 'integer',\n              description: 'Page number for paginated results.'\n            },\n            page_size: {\n              type: 'integer',\n              description: 'Number of items per page in this response.'\n            },\n            sort_by: {\n              type: 'string',\n              description: 'The field that the results were sorted by.'\n            },\n            sort_order: {\n              type: 'string',\n              enum: [                'asc',\n                'desc'\n              ]\n            },\n            total_items: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer',\n              description: 'The number of pages available.'\n            }\n          },\n          required: [            'api_request_id',\n            'api_request_timestamp',\n            'max_page_size',\n            'page_number',\n            'page_size',\n            'sort_by',\n            'sort_order',\n            'total_items',\n            'total_pages'\n          ]\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      created_from: {
        type: 'string',
        description: 'The start date of the range to filter by using the `YYYY-MM-DD` format.',
        format: 'date',
      },
      created_to: {
        type: 'string',
        description: 'The end date of the range to filter by using the `YYYY-MM-DD` format.',
        format: 'date',
      },
      direction: {
        type: 'string',
        description:
          'Describes the direction of the funding event from the perspective of the `linked_bank_account`.',
        enum: ['deposit', 'withdrawal'],
      },
      event_type: {
        type: 'string',
        description: 'The funding event types describes the direction and reason for the funding event.',
        enum: ['charge_deposit', 'charge_reversal', 'payout_return', 'payout_withdrawal'],
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Results page size. Max value: 1000',
      },
      sort_by: {
        type: 'string',
        description: 'The field to sort the results by.',
        enum: ['transfer_date', 'id', 'amount'],
      },
      sort_order: {
        type: 'string',
        description: 'The order in which to sort the results.',
        enum: ['asc', 'desc'],
      },
      trace_number: {
        type: 'string',
        description: 'Trace number.',
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
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.fundingEvents.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
