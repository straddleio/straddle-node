// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSimulate the status transitions for sandbox accounts. This endpoint can only be used for sandbox accounts.",
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

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  return asTextContentResult(await client.embed.accounts.simulate(account_id, body));
};

export default { metadata, tool, handler };
