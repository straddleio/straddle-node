// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'charges',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/charges/{id}/cancel',
  operationId: 'CancelCharge',
};

export const tool: Tool = {
  name: 'cancel_charges',
  description:
    'Cancel a charge to prevent it from being originated for processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      reason: {
        type: 'string',
        description: 'Details about why the charge status was updated.',
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
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.charges.cancel(id, body));
  } catch (error) {
    if (error instanceof Straddle.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
