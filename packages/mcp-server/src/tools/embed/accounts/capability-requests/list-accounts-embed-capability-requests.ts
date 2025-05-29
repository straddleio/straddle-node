// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Straddle from '@straddleio/straddle';

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
    'Retrieves a list of capability requests associated with an account. The requests are returned sorted by creation date, with the most recent requests appearing first. This endpoint supports advanced sorting and filtering options.',
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
    },
  },
};

export const handler = (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  return client.embed.accounts.capabilityRequests.list(account_id, body);
};

export default { metadata, tool, handler };
