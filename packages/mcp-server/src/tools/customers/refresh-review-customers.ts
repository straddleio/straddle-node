// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@straddleio/straddle-mcp/filtering';
import { Metadata, asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Straddle from '@straddlecom/straddle';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/customers/{id}/refresh_review',
};

export const tool: Tool = {
  name: 'refresh_review_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the decision of a customer's identity validation. This endpoint allows you to modify the outcome of a customer decision and is useful for correcting or updating the status of a customer's verification.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_v1',\n  $defs: {\n    customer_v1: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for the customer.'\n            },\n            created_at: {\n              type: 'string',\n              description: 'Timestamp of when the customer record was created.',\n              format: 'date-time'\n            },\n            email: {\n              type: 'string',\n              description: 'The customer\\'s email address.'\n            },\n            name: {\n              type: 'string',\n              description: 'Full name of the individual or business name.'\n            },\n            phone: {\n              type: 'string',\n              description: 'The customer\\'s phone number in E.164 format.'\n            },\n            status: {\n              type: 'string',\n              enum: [                'pending',\n                'review',\n                'verified',\n                'inactive',\n                'rejected'\n              ]\n            },\n            type: {\n              type: 'string',\n              enum: [                'individual',\n                'business'\n              ]\n            },\n            updated_at: {\n              type: 'string',\n              description: 'Timestamp of the most recent update to the customer record.',\n              format: 'date-time'\n            },\n            address: {\n              $ref: '#/$defs/customer_address_v1'\n            },\n            compliance_profile: {\n              anyOf: [                {\n                  type: 'object',\n                  title: 'Individual Compliance Profile',\n                  description: 'PII required to trigger Patriot Act compliant KYC verification.',\n                  properties: {\n                    dob: {\n                      type: 'string',\n                      description: 'Masked date of birth in ****-**-** format.',\n                      format: 'date'\n                    },\n                    ssn: {\n                      type: 'string',\n                      description: 'Masked Social Security Number in the format ***-**-****.'\n                    }\n                  },\n                  required: [                    'dob',\n                    'ssn'\n                  ]\n                },\n                {\n                  type: 'object',\n                  title: 'Business Compliance Profile',\n                  description: 'Business registration data required to trigger Patriot Act compliant KYB verification.',\n                  properties: {\n                    ein: {\n                      type: 'string',\n                      description: 'Masked Employer Identification Number in the format **-*******'\n                    },\n                    legal_business_name: {\n                      type: 'string',\n                      description: 'The official registered name of the business. This name should be correlated with the `ein` value.'\n                    },\n                    representatives: {\n                      type: 'array',\n                      description: 'A list of people related to the company. Only valid where customer type is \\'business\\'.',\n                      items: {\n                        type: 'object',\n                        properties: {\n                          name: {\n                            type: 'string'\n                          },\n                          email: {\n                            type: 'string'\n                          },\n                          phone: {\n                            type: 'string'\n                          }\n                        },\n                        required: [                          'name'\n                        ]\n                      }\n                    },\n                    website: {\n                      type: 'string',\n                      description: 'Official business website URL. Optional but recommended for enhanced KYB.'\n                    }\n                  },\n                  required: [                    'ein',\n                    'legal_business_name'\n                  ]\n                }\n              ],\n              description: 'PII required to trigger Patriot Act compliant KYC verification.'\n            },\n            config: {\n              type: 'object',\n              properties: {\n                processing_method: {\n                  type: 'string',\n                  enum: [                    'inline',\n                    'background',\n                    'skip'\n                  ]\n                },\n                sandbox_outcome: {\n                  type: 'string',\n                  enum: [                    'standard',\n                    'verified',\n                    'rejected',\n                    'review'\n                  ]\n                }\n              }\n            },\n            device: {\n              type: 'object',\n              properties: {\n                ip_address: {\n                  type: 'string',\n                  description: 'The customer\\'s IP address at the time of profile creation. Use `0.0.0.0` to represent an offline customer registration.'\n                }\n              },\n              required: [                'ip_address'\n              ]\n            },\n            external_id: {\n              type: 'string',\n              description: 'Unique identifier for the customer in your database, used for cross-referencing between Straddle and your systems.'\n            },\n            metadata: {\n              type: 'object',\n              description: 'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the customer in a structured format.',\n              additionalProperties: true\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'email',\n            'name',\n            'phone',\n            'status',\n            'type',\n            'updated_at'\n          ]\n        },\n        meta: {\n          $ref: '#/$defs/response_metadata'\n        },\n        response_type: {\n          type: 'string',\n          description: 'Indicates the structure of the returned content.\\n- \"object\" means the `data` field contains a single JSON object.\\n- \"array\" means the `data` field contains an array of objects.\\n- \"error\" means the `data` field contains an error object with details of the issue.\\n- \"none\" means no data is returned.',\n          enum: [            'object',\n            'array',\n            'error',\n            'none'\n          ]\n        }\n      },\n      required: [        'data',\n        'meta',\n        'response_type'\n      ]\n    },\n    customer_address_v1: {\n      type: 'object',\n      description: 'An object containing the customer\\'s address. This is optional, but if provided, all required fields must be present.',\n      properties: {\n        address1: {\n          type: 'string',\n          description: 'Primary address line (e.g., street, PO Box).'\n        },\n        city: {\n          type: 'string',\n          description: 'City, district, suburb, town, or village.'\n        },\n        state: {\n          type: 'string',\n          description: 'Two-letter state code.'\n        },\n        zip: {\n          type: 'string',\n          description: 'Zip or postal code.'\n        },\n        address2: {\n          type: 'string',\n          description: 'Secondary address line (e.g., apartment, suite, unit, or building).'\n        }\n      },\n      required: [        'address1',\n        'city',\n        'state',\n        'zip'\n      ]\n    },\n    response_metadata: {\n      type: 'object',\n      description: 'Metadata about the API request, including an identifier and timestamp.',\n      properties: {\n        api_request_id: {\n          type: 'string',\n          description: 'Unique identifier for this API request, useful for troubleshooting.'\n        },\n        api_request_timestamp: {\n          type: 'string',\n          description: 'Timestamp for this API request, useful for troubleshooting.',\n          format: 'date-time'\n        }\n      },\n      required: [        'api_request_id',\n        'api_request_timestamp'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'Correlation-Id': {
        type: 'string',
      },
      'Idempotency-Key': {
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
    idempotentHint: true,
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.customers.refreshReview(id, body)));
};

export default { metadata, tool, handler };
