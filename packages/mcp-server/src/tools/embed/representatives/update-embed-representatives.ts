// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.representatives',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/representatives/{representative_id}',
  operationId: 'UpdateRepresentative',
};

export const tool: Tool = {
  name: 'update_embed_representatives',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing representative's information. This can be used to update personal details, contact information, or the relationship to the account or organization.",
  inputSchema: {
    type: 'object',
    properties: {
      representative_id: {
        type: 'string',
      },
      dob: {
        type: 'string',
        description: 'The date of birth of the representative, in ISO 8601 format (YYYY-MM-DD).',
        format: 'date',
      },
      email: {
        type: 'string',
        description: 'The email address of the representative.',
      },
      first_name: {
        type: 'string',
        description: 'The first name of the representative.',
      },
      last_name: {
        type: 'string',
        description: 'The last name of the representative.',
      },
      mobile_number: {
        type: 'string',
        description: 'The mobile phone number of the representative.',
      },
      relationship: {
        type: 'object',
        properties: {
          control: {
            type: 'boolean',
            description:
              'Whether the representative has significant responsibility to control, manage, or direct the organization. One representative must be identified under the control prong for each legal entity.',
          },
          owner: {
            type: 'boolean',
            description:
              'Whether the representative owns any percentage of of the equity interests of the legal entity.',
          },
          primary: {
            type: 'boolean',
            description:
              'Whether the person is authorized as the primary representative of the account. This is the person chosen by the business to provide information about themselves, general information about the account, and who consented to the services agreement. \n\n There can be only one primary representative for an account at a time.',
          },
          percent_ownership: {
            type: 'number',
            description: "The percentage of ownership the representative has. Required if 'Owner' is true.",
          },
          title: {
            type: 'string',
            description: 'The job title of the representative.',
          },
        },
        required: ['control', 'owner', 'primary'],
      },
      ssn_last4: {
        type: 'string',
        description: "The last 4 digits of the representative's Social Security Number.",
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the representative in your database, used for cross-referencing between Straddle and your systems.',
      },
      'correlation-id': {
        type: 'string',
      },
      'request-id': {
        type: 'string',
      },
    },
    required: [
      'representative_id',
      'dob',
      'email',
      'first_name',
      'last_name',
      'mobile_number',
      'relationship',
      'ssn_last4',
    ],
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { representative_id, ...body } = args as any;
  return asTextContentResult(await client.embed.representatives.update(representative_id, body));
};

export default { metadata, tool, handler };
