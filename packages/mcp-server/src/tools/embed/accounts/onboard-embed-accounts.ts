// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/accounts/{account_id}/onboard',
  operationId: 'OnboardAccount',
};

export const tool: Tool = {
  name: 'onboard_embed_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitiates the onboarding process for a new account. This endpoint can only be used for accounts where at least one representative and one bank account have already been created.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      terms_of_service: {
        $ref: '#/$defs/terms_of_service_v1',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
    required: ['account_id', 'terms_of_service'],
    $defs: {
      terms_of_service_v1: {
        type: 'object',
        properties: {
          accepted_date: {
            type: 'string',
            description: 'The datetime of when the terms of service were accepted, in ISO 8601 format.',
            format: 'date-time',
          },
          agreement_type: {
            type: 'string',
            description:
              'The type or version of the agreement accepted. Use `embedded` unless your platform was specifically enabled for `direct` agreements.',
            enum: ['embedded', 'direct'],
          },
          agreement_url: {
            type: 'string',
            description: 'The URL where the full text of the accepted agreement can be found.',
          },
          accepted_ip: {
            type: 'string',
            description: 'The IP address from which the terms of service were accepted.',
          },
          accepted_user_agent: {
            type: 'string',
            description: 'The user agent string of the browser or application used to accept the terms.',
          },
        },
        required: ['accepted_date', 'agreement_type', 'agreement_url'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { account_id, ...body } = args as any;
  return asTextContentResult(await client.embed.accounts.onboard(account_id, body));
};

export default { metadata, tool, handler };
