// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'payouts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/payouts/{id}/cancel',
  operationId: 'CancelPayout',
};

export const tool: Tool = {
  name: 'cancel_payouts',
  description:
    'Cancel a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the payout status was updated.',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Idempotency-Key': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
    required: ['id', 'reason'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.payouts.cancel(id, body));
  } catch (error) {
    if (error instanceof Straddle.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
