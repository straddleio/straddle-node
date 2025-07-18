// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@straddleio/straddle-mcp/filtering';
import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'embed.representatives',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/representatives',
  operationId: 'ListRepresentatives',
};

export const tool: Tool = {
  name: 'list_embed_representatives',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of representatives associated with a specific account or organization. The representatives are returned sorted by creation date, with the most recently created representatives appearing first. This endpoint supports advanced sorting and filtering options.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/representative_paged',\n  $defs: {\n    representative_paged: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the representative.'\n              },\n              account_id: {\n                type: 'string',\n                description: 'The unique identifier of the account this representative is associated with.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'Timestamp of when the representative was created.',\n                format: 'date-time'\n              },\n              dob: {\n                type: 'string',\n                description: 'The date of birth of the representative, in ISO 8601 format (YYYY-MM-DD).',\n                format: 'date'\n              },\n              email: {\n                type: 'string',\n                description: 'The email address of the representative.'\n              },\n              first_name: {\n                type: 'string',\n                description: 'The first name of the representative.'\n              },\n              last_name: {\n                type: 'string',\n                description: 'The last name of the representative.'\n              },\n              mobile_number: {\n                type: 'string',\n                description: 'The mobile phone number of the representative.'\n              },\n              name: {\n                type: 'string'\n              },\n              relationship: {\n                type: 'object',\n                properties: {\n                  control: {\n                    type: 'boolean',\n                    description: 'Whether the representative has significant responsibility to control, manage, or direct the organization. One representative must be identified under the control prong for each legal entity.'\n                  },\n                  owner: {\n                    type: 'boolean',\n                    description: 'Whether the representative owns any percentage of of the equity interests of the legal entity.'\n                  },\n                  primary: {\n                    type: 'boolean',\n                    description: 'Whether the person is authorized as the primary representative of the account. This is the person chosen by the business to provide information about themselves, general information about the account, and who consented to the services agreement.\\n\\n There can be only one primary representative for an account at a time.'\n                  },\n                  percent_ownership: {\n                    type: 'number',\n                    description: 'The percentage of ownership the representative has. Required if \\'Owner\\' is true.'\n                  },\n                  title: {\n                    type: 'string',\n                    description: 'The job title of the representative.'\n                  }\n                },\n                required: [                  'control',\n                  'owner',\n                  'primary'\n                ]\n              },\n              ssn_last4: {\n                type: 'string',\n                description: 'The last 4 digits of the representative\\'s Social Security Number.'\n              },\n              status: {\n                type: 'string',\n                description: 'The current status of the representative.',\n                enum: [                  'created',\n                  'onboarding',\n                  'active',\n                  'rejected',\n                  'inactive'\n                ]\n              },\n              status_detail: {\n                type: 'object',\n                properties: {\n                  code: {\n                    type: 'string',\n                    description: 'A machine-readable code for the specific status, useful for programmatic handling.'\n                  },\n                  message: {\n                    type: 'string',\n                    description: 'A human-readable message describing the current status.'\n                  },\n                  reason: {\n                    type: 'string',\n                    description: 'A machine-readable identifier for the specific status, useful for programmatic handling.',\n                    enum: [                      'unverified',\n                      'in_review',\n                      'pending',\n                      'stuck',\n                      'verified',\n                      'failed_verification',\n                      'disabled',\n                      'new'\n                    ]\n                  },\n                  source: {\n                    type: 'string',\n                    description: 'Identifies the origin of the status change (e.g., `watchtower`). This helps in tracking the cause of status updates.',\n                    enum: [                      'watchtower'\n                    ]\n                  }\n                },\n                required: [                  'code',\n                  'message',\n                  'reason',\n                  'source'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Timestamp of the most recent update to the representative.',\n                format: 'date-time'\n              },\n              external_id: {\n                type: 'string',\n                description: 'Unique identifier for the representative in your database, used for cross-referencing between Straddle and your systems.'\n              },\n              phone: {\n                type: 'string'\n              },\n              user_id: {\n                type: 'string',\n                description: 'The unique identifier of the user account associated with this representative, if applicable.'\n              }\n            },\n            required: [              'id',\n              'account_id',\n              'created_at',\n              'dob',\n              'email',\n              'first_name',\n              'last_name',\n              'mobile_number',\n              'name',\n              'relationship',\n              'ssn_last4',\n              'status',\n              'status_detail',\n              'updated_at'\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/paged_response_metadata'\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    },\n    paged_response_metadata: {\n      type: 'object',\n      description: 'Metadata about the API request, including an identifier, timestamp, and pagination details.',\n      properties: {\n        api_request_id: {\n          type: 'string',\n          description: 'Unique identifier for this API request, useful for troubleshooting.'\n        },\n        api_request_timestamp: {\n          type: 'string',\n          description: 'Timestamp for this API request, useful for troubleshooting.',\n          format: 'date-time'\n        },\n        max_page_size: {\n          type: 'integer',\n          description: 'Maximum allowed page size for this endpoint.'\n        },\n        page_number: {\n          type: 'integer',\n          description: 'Page number for paginated results.'\n        },\n        page_size: {\n          type: 'integer',\n          description: 'Number of items per page in this response.'\n        },\n        sort_by: {\n          type: 'string',\n          description: 'The field that the results were sorted by.'\n        },\n        sort_order: {\n          type: 'string',\n          enum: [            'asc',\n            'desc'\n          ]\n        },\n        total_items: {\n          type: 'integer',\n          description: 'Total number of items returned in this response.'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'The number of pages available.'\n        }\n      },\n      required: [        'api_request_id',\n        'api_request_timestamp',\n        'max_page_size',\n        'page_number',\n        'page_size',\n        'sort_by',\n        'sort_order',\n        'total_items',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.embed.representatives.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
