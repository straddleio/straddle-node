// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const tool: Tool = {
  name: 'decision_customers_review',
  description:
    "Updates the status of a customer's identity decision. This endpoint allows you to modify the outcome of a customer risk screening and is useful for correcting or updating the status of a customer's verification. Note that this endpoint is only available for customers with a current status of `review`.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description: 'The final status of the customer review.',
        enum: ['verified', 'rejected'],
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

export const handler = (client: Straddle, args: any) => {
  const { id, ...body } = args;
  return client.customers.review.decision(id, body);
};

export default { tool, handler };
