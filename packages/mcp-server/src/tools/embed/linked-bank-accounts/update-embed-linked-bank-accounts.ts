// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const tool: Tool = {
  name: 'update_embed_linked_bank_accounts',
  description:
    "Updates an existing linked bank account's information. This can be used to update account details during onboarding or to update metadata associated with the linked account. The linked bank account must be in 'created' or 'onboarding' status.",
  inputSchema: {
    type: 'object',
    properties: {
      linked_bank_account_id: {
        type: 'string',
      },
      bank_account: {
        type: 'object',
        properties: {
          account_holder: {
            type: 'string',
            description:
              'The name of the account holder as it appears on the bank account. Typically, this is the legal name of the business associated with the account.',
          },
          account_number: {
            type: 'string',
            description: 'The bank account number.',
          },
          routing_number: {
            type: 'string',
            description: 'The routing number of the bank account.',
          },
        },
        required: ['account_holder', 'account_number', 'routing_number'],
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the linked bank account in a structured format.',
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
  return client.embed.linkedBankAccounts.update(linked_bank_account_id, body);
};

export default { tool, handler };
