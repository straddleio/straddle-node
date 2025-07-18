// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/payments',
  operationId: 'ListPayments',
};

export const tool: Tool = {
  name: 'list_payments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch for payments, including `charges` and `payouts`, using a variety of criteria. This endpoint supports advanced sorting and filtering options.",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'Search using the `customer_id` of a `charge` or `payout`.',
      },
      default_page_size: {
        type: 'integer',
      },
      default_sort: {
        type: 'string',
        description: 'The field to sort the results by.',
        enum: ['created_at', 'payment_date', 'effective_at', 'id', 'amount'],
      },
      default_sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      external_id: {
        type: 'string',
        description: 'Search using the `external_id` of a `charge` or `payout`.',
      },
      funding_id: {
        type: 'string',
        description: 'Search using the `funding_id` of a `charge` or `payout`.',
      },
      max_amount: {
        type: 'integer',
        description: 'Search using a maximum `amount` of a `charge` or `payout`.',
      },
      max_created_at: {
        type: 'string',
        description: 'Search using the latest `created_at` date of a `charge` or `payout`.',
        format: 'date-time',
      },
      max_effective_at: {
        type: 'string',
        description: 'Search using the latest `effective_date` of a `charge` or `payout`.',
        format: 'date-time',
      },
      max_payment_date: {
        type: 'string',
        description: 'Search using the latest `payment_date` of a `charge` or `payout`.',
        format: 'date',
      },
      min_amount: {
        type: 'integer',
        description: 'Search using the minimum `amount of a `charge` or `payout`.',
      },
      min_created_at: {
        type: 'string',
        description: 'Search using the earliest `created_at` date of a `charge` or `payout`.',
        format: 'date-time',
      },
      min_effective_at: {
        type: 'string',
        description: 'Search using the earliest `effective_date` of a `charge` or `payout`.',
        format: 'date-time',
      },
      min_payment_date: {
        type: 'string',
        description: 'Search using the earliest ` `of a `charge` or `payout`.',
        format: 'date',
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Results page size. Max value: 1000',
      },
      paykey: {
        type: 'string',
        description: 'Search using the `paykey` of a `charge` or `payout`.',
      },
      paykey_id: {
        type: 'string',
        description: 'Search using the `paykey_id` of a `charge` or `payout`.',
      },
      payment_id: {
        type: 'string',
        description: 'Search using the `id` of a `charge` or `payout`.',
      },
      payment_status: {
        type: 'array',
        description: 'Search by the status of a `charge` or `payout`.',
        items: {
          type: 'string',
          description: 'The current status of the `charge` or `payout`.',
          enum: ['created', 'scheduled', 'failed', 'cancelled', 'on_hold', 'pending', 'paid', 'reversed'],
        },
      },
      payment_type: {
        type: 'array',
        description: 'Search by the type of a `charge` or `payout`.',
        items: {
          type: 'string',
          description: 'The type of payment.',
          enum: ['charge', 'payout'],
        },
      },
      search_text: {
        type: 'string',
        description: 'Search using a text string associated with a `charge` or `payout`.',
      },
      sort_by: {
        type: 'string',
        description: 'The field to sort the results by.',
        enum: ['created_at', 'payment_date', 'effective_at', 'id', 'amount'],
      },
      sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      status_reason: {
        type: 'array',
        description: 'Reason for latest payment status change.',
        items: {
          type: 'string',
          enum: [
            'insufficient_funds',
            'closed_bank_account',
            'invalid_bank_account',
            'invalid_routing',
            'disputed',
            'payment_stopped',
            'owner_deceased',
            'frozen_bank_account',
            'risk_review',
            'fraudulent',
            'duplicate_entry',
            'invalid_paykey',
            'payment_blocked',
            'amount_too_large',
            'too_many_attempts',
            'internal_system_error',
            'user_request',
            'ok',
            'other_network_return',
            'payout_refused',
          ],
        },
      },
      status_source: {
        type: 'array',
        description: 'Source of latest payment status change.',
        items: {
          type: 'string',
          enum: ['watchtower', 'bank_decline', 'customer_dispute', 'user_action', 'system'],
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
    required: [],
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.payments.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
