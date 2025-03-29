// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
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
  handler: (client: Straddle, args: any) => {
    const { ...body } = args;
    return client.embed.representatives.create(body);
  },
});

registerApiMethod({
  name: 'update_embed_representatives',
  description:
    "Updates an existing representative's information. This can be used to update personal details, contact information, or the relationship to the account or organization.",
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
  },
  handler: (client: Straddle, args: any) => {
    const { representative_id, ...body } = args;
    return client.embed.representatives.update(representative_id, body);
  },
});

registerApiMethod({
  name: 'list_embed_representatives',
  description:
    'Returns a list of representatives associated with a specific account or organization. The representatives are returned sorted by creation date, with the most recently created representatives appearing first. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The unique identifier of the account to list representatives for.',
      },
      level: {
        type: 'string',
        enum: ['account', 'platform'],
      },
      organization_id: {
        type: 'string',
      },
      page_number: {
        type: 'integer',
        description: 'Results page number. Starts at page 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Page size. Max value: 1000',
      },
      platform_id: {
        type: 'string',
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
    return client.embed.representatives.list(body);
  },
});

registerApiMethod({
  name: 'get_embed_representatives',
  description:
    'Retrieves the details of an existing representative. Supply the unique representative ID, and Straddle will return the corresponding representative information.',
  inputSchema: {
    type: 'object',
    properties: {
      representative_id: {
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
    const { representative_id, ...body } = args;
    return client.embed.representatives.get(representative_id, body);
  },
});

registerApiMethod({
  name: 'unmask_embed_representatives',
  description:
    'Retrieves the unmasked details of a representative that has previously been created. Supply the unique representative ID, and Straddle will return the corresponding representative information, including sensitive details. This endpoint requires additional authentication and should be used with caution.',
  inputSchema: {
    type: 'object',
    properties: {
      representative_id: {
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
    const { representative_id, ...body } = args;
    return client.embed.representatives.unmask(representative_id, body);
  },
});
