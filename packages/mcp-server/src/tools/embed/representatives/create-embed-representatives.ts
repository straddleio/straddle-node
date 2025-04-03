// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.representatives',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_embed_representatives',
  description:
    'Creates a new representative associated with an account. Representatives are individuals who have legal authority or significant responsibility within the business.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the account this representative is associated with.',
      },
      dob: {
        type: 'string',
        description: 'Date of birth for the representative in ISO 8601 format (YYYY-MM-DD).',
        format: 'date',
      },
      email: {
        type: 'string',
        description: 'The company email address of the representative.',
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
  },
};

export const handler = (client: Straddle, args: any) => {
  const { ...body } = args;
  return client.embed.representatives.create(body);
};

export default { metadata, tool, handler };
