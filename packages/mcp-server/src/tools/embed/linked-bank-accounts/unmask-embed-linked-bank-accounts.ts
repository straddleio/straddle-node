// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@straddlecom/straddle-mcp/filtering';
import { Metadata, asTextContentResult } from '@straddlecom/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'embed.linked_bank_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/linked_bank_accounts/{linked_bank_account_id}/unmask',
  operationId: 'GetLinkedBankAccountUnmasked',
};

export const tool: Tool = {
  name: 'unmask_embed_linked_bank_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the unmasked details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information, including sensitive details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/linked_bank_account_unmask_v1',\n  $defs: {\n    linked_bank_account_unmask_v1: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for the linked bank account.'\n            },\n            account_id: {\n              type: 'string',\n              description: 'Unique identifier for the Straddle account related to this bank account.'\n            },\n            bank_account: {\n              type: 'object',\n              description: 'The bank account details associated with the linked bank account.',\n              properties: {\n                account_holder: {\n                  type: 'string'\n                },\n                account_number: {\n                  type: 'string'\n                },\n                institution_name: {\n                  type: 'string'\n                },\n                routing_number: {\n                  type: 'string'\n                }\n              },\n              required: [                'account_holder',\n                'account_number',\n                'institution_name',\n                'routing_number'\n              ]\n            },\n            created_at: {\n              type: 'string',\n              description: 'Timestamp of when the linked bank account was created.',\n              format: 'date-time'\n            },\n            status: {\n              type: 'string',\n              description: 'The current status of the linked bank account.',\n              enum: [                'created',\n                'onboarding',\n                'active',\n                'rejected',\n                'inactive',\n                'canceled'\n              ]\n            },\n            status_detail: {\n              type: 'object',\n              description: 'Additional details about the current status of the linked bank account.',\n              properties: {\n                code: {\n                  type: 'string',\n                  description: 'A machine-readable code for the specific status, useful for programmatic handling.'\n                },\n                message: {\n                  type: 'string',\n                  description: 'A human-readable message describing the current status.'\n                },\n                reason: {\n                  type: 'string',\n                  description: 'A machine-readable identifier for the specific status, useful for programmatic handling.',\n                  enum: [                    'unverified',\n                    'in_review',\n                    'pending',\n                    'stuck',\n                    'verified',\n                    'failed_verification',\n                    'disabled',\n                    'new'\n                  ]\n                },\n                source: {\n                  type: 'string',\n                  description: 'Identifies the origin of the status change (e.g., `watchtower`). This helps in tracking the cause of status updates.',\n                  enum: [                    'watchtower'\n                  ]\n                }\n              },\n              required: [                'code',\n                'message',\n                'reason',\n                'source'\n              ]\n            },\n            updated_at: {\n              type: 'string',\n              description: 'Timestamp of when the linked bank account was last updated.',\n              format: 'date-time'\n            },\n            metadata: {\n              type: 'object',\n              additionalProperties: true\n            }\n          },\n          required: [            'id',\n            'account_id',\n            'bank_account',\n            'created_at',\n            'status',\n            'status_detail',\n            'updated_at'\n          ]\n        },\n        meta: {\n          $ref: '#/$defs/response_metadata'\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    },\n    response_metadata: {\n      type: 'object',\n      description: 'Metadata about the API request, including an identifier and timestamp.',\n      properties: {\n        api_request_id: {\n          type: 'string',\n          description: 'Unique identifier for this API request, useful for troubleshooting.'\n        },\n        api_request_timestamp: {\n          type: 'string',\n          description: 'Timestamp for this API request, useful for troubleshooting.',\n          format: 'date-time'\n        }\n      },\n      required: [        'api_request_id',\n        'api_request_timestamp'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      linked_bank_account_id: {
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
    required: ['linked_bank_account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { linked_bank_account_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.embed.linkedBankAccounts.unmask(linked_bank_account_id, body)),
  );
};

export default { metadata, tool, handler };
