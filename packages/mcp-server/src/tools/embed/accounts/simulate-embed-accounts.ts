// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'embed.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/accounts/{account_id}/simulate',
};

export const tool: Tool = {
  name: 'simulate_embed_accounts',
  description:
    'Simulate the status transitions for sandbox accounts. This endpoint can only be used for sandbox accounts.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      final_status: {
        type: 'string',
        enum: ['onboarding', 'active'],
      },
      'correlation-id': {
        type: 'string',
      },
      'idempotency-key': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
    required: ['account_id'],
  },
  annotations: {},
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  return asTextContentResult(await client.embed.accounts.simulate(account_id, body));
};

export default { metadata, tool, handler };
