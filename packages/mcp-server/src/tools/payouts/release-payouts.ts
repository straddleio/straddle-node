// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'payouts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/payouts/{id}/release',
  operationId: 'ReleasePayout',
};

export const tool: Tool = {
  name: 'release_payouts',
  description: 'Release a payout from a `hold` status to allow it to be rescheduled for processing.',
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
  return asTextContentResult(await client.payouts.release(id, body));
};

export default { metadata, tool, handler };
