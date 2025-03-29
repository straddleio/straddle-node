// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
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
  handler: (client: Straddle, args: any) => {
    const { ...body } = args;
    return client.embed.linkedBankAccounts.create(body);
  },
});

registerApiMethod({
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
  handler: (client: Straddle, args: any) => {
    const { linked_bank_account_id, ...body } = args;
    return client.embed.linkedBankAccounts.update(linked_bank_account_id, body);
  },
});

registerApiMethod({
  name: 'list_embed_linked_bank_accounts',
  description:
    'Returns a list of bank accounts associated with a specific Straddle account. The linked bank accounts are returned sorted by creation date, with the most recently created appearing first. This endpoint supports pagination to handle accounts with multiple linked bank accounts.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the related account.',
      },
      level: {
        type: 'string',
        enum: ['account', 'platform'],
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Page size. Max value: 1000',
      },
      sort_by: {
        type: 'string',
        description: 'Sort By.',
      },
      sort_order: {
        type: 'string',
        description: 'Sort Order.',
        enum: ['asc', 'desc'],
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
  },
  handler: (client: Straddle, args: any) => {
    const { ...body } = args;
    return client.embed.linkedBankAccounts.list(body);
  },
});

registerApiMethod({
  name: 'get_embed_linked_bank_accounts',
  description:
    'Retrieves the details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information. The response includes masked account details for security purposes.',
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
  handler: (client: Straddle, args: any) => {
    const { linked_bank_account_id, ...body } = args;
    return client.embed.linkedBankAccounts.get(linked_bank_account_id, body);
  },
});

registerApiMethod({
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
  handler: (client: Straddle, args: any) => {
    const { linked_bank_account_id, ...body } = args;
    return client.embed.linkedBankAccounts.unmask(linked_bank_account_id, body);
  },
});
