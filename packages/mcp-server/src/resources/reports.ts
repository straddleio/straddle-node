// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
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
  handler: (client: Straddle, args: any) => {
    const { ...body } = args;
    return client.reports.createTotalCustomersByStatus(body);
  },
});
