// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@straddleio/straddle-mcp/filtering';
import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'reports',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/reports/total_customers_by_status',
};

export const tool: Tool = {
  name: 'create_total_customers_by_status_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        inactive: {\n          type: 'integer'\n        },\n        pending: {\n          type: 'integer'\n        },\n        rejected: {\n          type: 'integer'\n        },\n        review: {\n          type: 'integer'\n        },\n        verified: {\n          type: 'integer'\n        }\n      },\n      required: [        'inactive',\n        'pending',\n        'rejected',\n        'review',\n        'verified'\n      ]\n    },\n    meta: {\n      $ref: '#/$defs/response_metadata'\n    },\n    response_type: {\n      type: 'string',\n      description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n      enum: [        'object',\n        'array',\n        'error',\n        'none'\n      ]\n    }\n  },\n  required: [    'data',\n    'meta',\n    'response_type'\n  ],\n  $defs: {\n    response_metadata: {\n      type: 'object',\n      description: 'Metadata about the API request, including an identifier and timestamp.',\n      properties: {\n        api_request_id: {\n          type: 'string',\n          description: 'Unique identifier for this API request, useful for troubleshooting.'\n        },\n        api_request_timestamp: {\n          type: 'string',\n          description: 'Timestamp for this API request, useful for troubleshooting.',\n          format: 'date-time'\n        }\n      },\n      required: [        'api_request_id',\n        'api_request_timestamp'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: [],
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.reports.createTotalCustomersByStatus(body)),
  );
};

export default { metadata, tool, handler };
