// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const tool: Tool = {
  name: 'get_embed_accounts',
  description:
    'Retrieves the details of an account that has previously been created. Supply the unique account ID that was returned from your previous request, and Straddle will return the corresponding account information.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the account to retrieve.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Straddle, args: any) => {
  const { account_id, ...body } = args;
  return client.embed.accounts.get(account_id, body);
};

export default { tool, handler };
