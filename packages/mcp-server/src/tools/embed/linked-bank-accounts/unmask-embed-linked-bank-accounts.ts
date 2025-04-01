// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const tool: Tool = {
  name: 'unmask_embed_linked_bank_accounts',
  description:
    'Retrieves the unmasked details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information, including sensitive details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.',
  inputSchema: {
    type: 'object',
    properties: {
      linked_bank_account_id: {
        type: 'string',
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
  const { linked_bank_account_id, ...body } = args;
  return client.embed.linkedBankAccounts.unmask(linked_bank_account_id, body);
};

export default { tool, handler };
