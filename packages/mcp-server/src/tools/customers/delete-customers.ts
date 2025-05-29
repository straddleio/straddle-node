// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/customers/{id}',
  operationId: 'DeleteCustomer',
};

export const tool: Tool = {
  name: 'delete_customers',
  description:
    'Permanently removes a customer record from Straddle. This action cannot be undone and should only be used to satisfy regulatory requirements or for privacy compliance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  return client.customers.delete(id, body);
};

export default { metadata, tool, handler };
