// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@straddleio/straddle-mcp/filtering';
import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'paykeys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/paykeys/{id}/reveal',
};

export const tool: Tool = {
  name: 'reveal_paykeys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the details of a paykey that has previously been created, including unmasked bank account fields. Supply the unique paykey ID that was returned from your previous request, and Straddle will return the corresponding paykey information.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the paykey.'\n        },\n        config: {\n          type: 'object',\n          properties: {\n            sandbox_outcome: {\n              type: 'string',\n              enum: [                'standard',\n                'active',\n                'rejected'\n              ]\n            }\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the paykey was created.',\n          format: 'date-time'\n        },\n        label: {\n          type: 'string',\n          description: 'Human-readable label that combines the bank name and masked account number to help easility represent this paykey in a UI'\n        },\n        paykey: {\n          type: 'string',\n          description: 'The tokenized paykey value. This token is used to create payments and should be stored securely.'\n        },\n        source: {\n          type: 'string',\n          enum: [            'bank_account',\n            'straddle',\n            'mx',\n            'plaid',\n            'tan',\n            'quiltt'\n          ]\n        },\n        status: {\n          type: 'string',\n          enum: [            'pending',\n            'active',\n            'inactive',\n            'rejected',\n            'review'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Timestamp of the most recent update to the paykey.',\n          format: 'date-time'\n        },\n        balance: {\n          type: 'object',\n          properties: {\n            status: {\n              type: 'string',\n              enum: [                'pending',\n                'completed',\n                'failed'\n              ]\n            },\n            account_balance: {\n              type: 'integer',\n              description: 'Account Balance when last retrieved'\n            },\n            updated_at: {\n              type: 'string',\n              description: 'Last time account balance was updated.',\n              format: 'date-time'\n            }\n          },\n          required: [            'status'\n          ]\n        },\n        bank_data: {\n          type: 'object',\n          properties: {\n            account_number: {\n              type: 'string',\n              description: 'Bank account number. This value is masked by default for security reasons. Use the /unmask endpoint to access the unmasked value.'\n            },\n            account_type: {\n              type: 'string',\n              enum: [                'checking',\n                'savings'\n              ]\n            },\n            routing_number: {\n              type: 'string',\n              description: 'The routing number of the bank account.'\n            }\n          },\n          required: [            'account_number',\n            'account_type',\n            'routing_number'\n          ]\n        },\n        customer_id: {\n          type: 'string',\n          description: 'Unique identifier of the related customer object.'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'Expiration date and time of the paykey, if applicable.',\n          format: 'date-time'\n        },\n        institution_name: {\n          type: 'string',\n          description: 'Name of the financial institution.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the paykey in a structured format.'\n        },\n        status_details: {\n          type: 'object',\n          properties: {\n            changed_at: {\n              type: 'string',\n              description: 'The time the status change occurred.',\n              format: 'date-time'\n            },\n            message: {\n              type: 'string',\n              description: 'A human-readable description of the current status.'\n            },\n            reason: {\n              type: 'string',\n              enum: [                'insufficient_funds',\n                'closed_bank_account',\n                'invalid_bank_account',\n                'invalid_routing',\n                'disputed',\n                'payment_stopped',\n                'owner_deceased',\n                'frozen_bank_account',\n                'risk_review',\n                'fraudulent',\n                'duplicate_entry',\n                'invalid_paykey',\n                'payment_blocked',\n                'amount_too_large',\n                'too_many_attempts',\n                'internal_system_error',\n                'user_request',\n                'ok',\n                'other_network_return',\n                'payout_refused'\n              ]\n            },\n            source: {\n              type: 'string',\n              enum: [                'watchtower',\n                'bank_decline',\n                'customer_dispute',\n                'user_action',\n                'system'\n              ]\n            },\n            code: {\n              type: 'string',\n              description: 'The status code if applicable.'\n            }\n          },\n          required: [            'changed_at',\n            'message',\n            'reason',\n            'source'\n          ]\n        }\n      },\n      required: [        'id',\n        'config',\n        'created_at',\n        'label',\n        'paykey',\n        'source',\n        'status',\n        'updated_at'\n      ]\n    },\n    meta: {\n      $ref: '#/$defs/response_metadata'\n    },\n    response_type: {\n      type: 'string',\n      description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n      enum: [        'object',\n        'array',\n        'error',\n        'none'\n      ]\n    }\n  },\n  required: [    'data',\n    'meta',\n    'response_type'\n  ],\n  $defs: {\n    response_metadata: {\n      type: 'object',\n      description: 'Metadata about the API request, including an identifier and timestamp.',\n      properties: {\n        api_request_id: {\n          type: 'string',\n          description: 'Unique identifier for this API request, useful for troubleshooting.'\n        },\n        api_request_timestamp: {\n          type: 'string',\n          description: 'Timestamp for this API request, useful for troubleshooting.',\n          format: 'date-time'\n        }\n      },\n      required: [        'api_request_id',\n        'api_request_timestamp'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Request-Id': {
        type: 'string',
      },
      'Straddle-Account-Id': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.paykeys.reveal(id, body)));
};

export default { metadata, tool, handler };
