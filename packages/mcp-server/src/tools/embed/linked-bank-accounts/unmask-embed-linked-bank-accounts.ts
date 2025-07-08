// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.linked_bank_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/linked_bank_accounts/{linked_bank_account_id}/unmask',
  operationId: 'GetLinkedBankAccountUnmasked',
};

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

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { linked_bank_account_id, ...body } = args as any;
  return asTextContentResult(await client.embed.linkedBankAccounts.unmask(linked_bank_account_id, body));
};

export default { metadata, tool, handler };
