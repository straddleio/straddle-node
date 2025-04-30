// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.accounts',
  operation: 'write',
  tags: [],
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
      'request-id': {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  return client.embed.accounts.simulate(account_id, body);
};

export default { metadata, tool, handler };
