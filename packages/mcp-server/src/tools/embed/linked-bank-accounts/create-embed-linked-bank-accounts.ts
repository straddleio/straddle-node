// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const tool: Tool = {
  name: 'create_embed_linked_bank_accounts',
  description:
    'Creates a new linked bank account associated with a Straddle account. This endpoint allows you to associate external bank accounts with a Straddle account for various payment operations such as payment deposits, payout withdrawals, and more.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the Straddle account to associate this bank account with.',
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
  const { ...body } = args;
  return client.embed.linkedBankAccounts.create(body);
};

export default { tool, handler };
