// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const tool: Tool = {
  name: 'get_paykeys',
  description:
    'Retrieves the details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record , including the `paykey` token value and masked bank account details.',
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

export const handler = (client: Straddle, args: any) => {
  const { id, ...body } = args;
  return client.paykeys.get(id, body);
};

export default { tool, handler };
