// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
  name: 'create_embed_organizations',
  description:
    'Creates a new organization related to your Straddle integration. Organizations can be used to group related accounts and manage permissions across multiple users.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the organization.',
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the organization in your database, used for cross-referencing between Straddle and your systems.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the organization in a structured format.',
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
    return client.embed.organizations.create(body);
  },
});

registerApiMethod({
  name: 'list_embed_organizations',
  description:
    'Retrieves a list of organizations associated with your Straddle integration. The organizations are returned sorted by creation date, with the most recently created organizations appearing first. This endpoint supports advanced sorting and filtering options to help you find specific organizations.',
  inputSchema: {
    type: 'object',
    properties: {
      external_id: {
        type: 'string',
        description: 'List organizations by their external ID.',
      },
      name: {
        type: 'string',
        description: 'List organizations by name (partial match supported).',
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
    return client.embed.organizations.list(body);
  },
});

registerApiMethod({
  name: 'get_embed_organizations',
  description:
    'Retrieves the details of an Organization that has previously been created. Supply the unique organization ID that was returned from your previous request, and Straddle will return the corresponding organization information.',
  inputSchema: {
    type: 'object',
    properties: {
      organization_id: {
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
    const { organization_id, ...body } = args;
    return client.embed.organizations.get(organization_id, body);
  },
});
