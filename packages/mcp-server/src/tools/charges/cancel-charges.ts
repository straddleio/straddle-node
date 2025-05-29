// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

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
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.charges.cancel(id, body);
};

export default { metadata, tool, handler };
