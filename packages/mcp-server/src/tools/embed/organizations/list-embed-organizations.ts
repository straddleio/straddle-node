// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@straddleio/straddle-mcp/filtering';
import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.organizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/organizations',
  operationId: 'ListOrganizations',
};

export const tool: Tool = {
  name: 'list_embed_organizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of organizations associated with your Straddle integration. The organizations are returned sorted by creation date, with the most recently created organizations appearing first. This endpoint supports advanced sorting and filtering options to help you find specific organizations.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/organization_paged_v1',\n  $defs: {\n    organization_paged_v1: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Straddle\\'s unique identifier for the organization.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'Timestamp of when the organization was created.',\n                format: 'date-time'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the organization.'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Timestamp of the most recent update to the organization.',\n                format: 'date-time'\n              },\n              external_id: {\n                type: 'string',\n                description: 'Unique identifier for the organization in your database, used for cross-referencing between Straddle and your systems.'\n              },\n              metadata: {\n                type: 'object',\n                description: 'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the organization in a structured format.'\n              }\n            },\n            required: [              'id',\n              'created_at',\n              'name',\n              'updated_at'\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/paged_response_metadata'\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    },\n    paged_response_metadata: {\n      type: 'object',\n      description: 'Metadata about the API request, including an identifier, timestamp, and pagination details.',\n      properties: {\n        api_request_id: {\n          type: 'string',\n          description: 'Unique identifier for this API request, useful for troubleshooting.'\n        },\n        api_request_timestamp: {\n          type: 'string',\n          description: 'Timestamp for this API request, useful for troubleshooting.',\n          format: 'date-time'\n        },\n        max_page_size: {\n          type: 'integer',\n          description: 'Maximum allowed page size for this endpoint.'\n        },\n        page_number: {\n          type: 'integer',\n          description: 'Page number for paginated results.'\n        },\n        page_size: {\n          type: 'integer',\n          description: 'Number of items per page in this response.'\n        },\n        sort_by: {\n          type: 'string',\n          description: 'The field that the results were sorted by.'\n        },\n        sort_order: {\n          type: 'string',\n          enum: [            'asc',\n            'desc'\n          ]\n        },\n        total_items: {\n          type: 'integer',\n          description: 'Total number of items returned in this response.'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'The number of pages available.'\n        }\n      },\n      required: [        'api_request_id',\n        'api_request_timestamp',\n        'max_page_size',\n        'page_number',\n        'page_size',\n        'sort_by',\n        'sort_order',\n        'total_items',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.embed.organizations.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
