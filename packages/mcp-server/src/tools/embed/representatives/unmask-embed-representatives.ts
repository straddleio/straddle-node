// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@straddlecom/straddle-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'embed.representatives',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/representatives/{representative_id}/unmask',
};

export const tool: Tool = {
  name: 'unmask_embed_representatives',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the unmasked details of a representative that has previously been created. Supply the unique representative ID, and Straddle will return the corresponding representative information, including sensitive details. This endpoint requires additional authentication and should be used with caution.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/representative',\n  $defs: {\n    representative: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for the representative.'\n            },\n            account_id: {\n              type: 'string',\n              description: 'The unique identifier of the account this representative is associated with.'\n            },\n            created_at: {\n              type: 'string',\n              description: 'Timestamp of when the representative was created.',\n              format: 'date-time'\n            },\n            dob: {\n              type: 'string',\n              description: 'The date of birth of the representative, in ISO 8601 format (YYYY-MM-DD).',\n              format: 'date'\n            },\n            email: {\n              type: 'string',\n              description: 'The email address of the representative.'\n            },\n            first_name: {\n              type: 'string',\n              description: 'The first name of the representative.'\n            },\n            last_name: {\n              type: 'string',\n              description: 'The last name of the representative.'\n            },\n            mobile_number: {\n              type: 'string',\n              description: 'The mobile phone number of the representative.'\n            },\n            name: {\n              type: 'string'\n            },\n            relationship: {\n              type: 'object',\n              properties: {\n                control: {\n                  type: 'boolean',\n                  description: 'Whether the representative has significant responsibility to control, manage, or direct the organization. One representative must be identified under the control prong for each legal entity.'\n                },\n                owner: {\n                  type: 'boolean',\n                  description: 'Whether the representative owns any percentage of of the equity interests of the legal entity.'\n                },\n                primary: {\n                  type: 'boolean',\n                  description: 'Whether the person is authorized as the primary representative of the account. This is the person chosen by the business to provide information about themselves, general information about the account, and who consented to the services agreement.\\n\\n There can be only one primary representative for an account at a time.'\n                },\n                percent_ownership: {\n                  type: 'number',\n                  description: 'The percentage of ownership the representative has. Required if \\'Owner\\' is true.'\n                },\n                title: {\n                  type: 'string',\n                  description: 'The job title of the representative.'\n                }\n              },\n              required: [                'control',\n                'owner',\n                'primary'\n              ]\n            },\n            ssn_last4: {\n              type: 'string',\n              description: 'The last 4 digits of the representative\\'s Social Security Number.'\n            },\n            status: {\n              type: 'string',\n              description: 'The current status of the representative.',\n              enum: [                'created',\n                'onboarding',\n                'active',\n                'rejected',\n                'inactive'\n              ]\n            },\n            status_detail: {\n              type: 'object',\n              properties: {\n                code: {\n                  type: 'string',\n                  description: 'A machine-readable code for the specific status, useful for programmatic handling.'\n                },\n                message: {\n                  type: 'string',\n                  description: 'A human-readable message describing the current status.'\n                },\n                reason: {\n                  type: 'string',\n                  description: 'A machine-readable identifier for the specific status, useful for programmatic handling.',\n                  enum: [                    'unverified',\n                    'in_review',\n                    'pending',\n                    'stuck',\n                    'verified',\n                    'failed_verification',\n                    'disabled',\n                    'new'\n                  ]\n                },\n                source: {\n                  type: 'string',\n                  description: 'Identifies the origin of the status change (e.g., `watchtower`). This helps in tracking the cause of status updates.',\n                  enum: [                    'watchtower'\n                  ]\n                }\n              },\n              required: [                'code',\n                'message',\n                'reason',\n                'source'\n              ]\n            },\n            updated_at: {\n              type: 'string',\n              description: 'Timestamp of the most recent update to the representative.',\n              format: 'date-time'\n            },\n            external_id: {\n              type: 'string',\n              description: 'Unique identifier for the representative in your database, used for cross-referencing between Straddle and your systems.'\n            },\n            metadata: {\n              type: 'object',\n              description: 'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the represetative in a structured format.',\n              additionalProperties: true\n            },\n            phone: {\n              type: 'string'\n            },\n            user_id: {\n              type: 'string',\n              description: 'The unique identifier of the user account associated with this representative, if applicable.'\n            }\n          },\n          required: [            'id',\n            'account_id',\n            'created_at',\n            'dob',\n            'email',\n            'first_name',\n            'last_name',\n            'mobile_number',\n            'name',\n            'relationship',\n            'ssn_last4',\n            'status',\n            'status_detail',\n            'updated_at'\n          ]\n        },\n        meta: {\n          $ref: '#/$defs/response_metadata'\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    },\n    response_metadata: {\n      type: 'object',\n      description: 'Metadata about the API request, including an identifier and timestamp.',\n      properties: {\n        api_request_id: {\n          type: 'string',\n          description: 'Unique identifier for this API request, useful for troubleshooting.'\n        },\n        api_request_timestamp: {\n          type: 'string',\n          description: 'Timestamp for this API request, useful for troubleshooting.',\n          format: 'date-time'\n        }\n      },\n      required: [        'api_request_id',\n        'api_request_timestamp'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['representative_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { representative_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.embed.representatives.unmask(representative_id, body)),
    );
  } catch (error) {
    if (error instanceof Straddle.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
