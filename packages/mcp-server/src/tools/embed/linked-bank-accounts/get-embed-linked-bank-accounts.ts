// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.linked_bank_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/linked_bank_accounts/{linked_bank_account_id}',
  operationId: 'GetLinkedBankAccount',
};

export const tool: Tool = {
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
};

export const handler = (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { linked_bank_account_id, ...body } = args as any;
  return client.embed.linkedBankAccounts.get(linked_bank_account_id, body);
};

export default { metadata, tool, handler };
