// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'customers.review',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{id}/review',
  operationId: 'GetCustomerReview',
};

export const tool: Tool = {
  name: 'get_customers_review',
  description:
    "Retrieves and analyzes the results of a customer's identity validation and fraud score. This endpoint provides a comprehensive breakdown of the validation outcome, including:\n- Risk and correlation scores\n- Reason codes for the decision\n- Results of watchlist screening\n- Any network alerts detected\nUse this endpoint to gain insights into the verification process and make informed decisions about customer onboarding.",
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.customers.review.get(id, body));
  } catch (error) {
    if (error instanceof Straddle.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
