// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'reports',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_total_customers_by_status_reports',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
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

export const handler = (client: Straddle, args: any) => {
  const { ...body } = args;
  return client.reports.createTotalCustomersByStatus(body);
};

export default { metadata, tool, handler };
