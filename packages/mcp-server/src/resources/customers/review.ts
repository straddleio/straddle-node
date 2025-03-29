// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
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
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.customers.review.decision(id, body);
  },
});

registerApiMethod({
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
  },
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.customers.review.get(id, body);
  },
});
