// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@straddleio/straddle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Straddle from '@straddleio/straddle';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers',
  operationId: 'CreateCustomer',
};

export const tool: Tool = {
  name: 'create_customers',
  description:
    'Creates a new customer record and automatically initiates identity, fraud, and risk assessment scores. This endpoint allows you to create a customer profile and associate it with paykeys and payments.',
  inputSchema: {
    type: 'object',
    properties: {
      device: {
        $ref: '#/$defs/device_unmasked_v1',
      },
      email: {
        type: 'string',
        description: "The customer's email address.",
      },
      name: {
        type: 'string',
        description: 'Full name of the individual or business name.',
      },
      phone: {
        type: 'string',
        description: "The customer's phone number in E.164 format. Mobile number is preferred.",
      },
      type: {
        type: 'string',
        enum: ['individual', 'business', 'unknown'],
      },
      address: {
        $ref: '#/$defs/customer_address_v1',
      },
      compliance_profile: {
        anyOf: [
          {
            type: 'object',
            title: 'Individual Compliance Profile',
            description: 'Individual PII data required to trigger Patriot Act compliant KYC verification.',
            properties: {
              dob: {
                type: 'string',
                description:
                  'Date of birth (YYYY-MM-DD). Required for Patriot Act-compliant KYC verification.',
                format: 'date',
              },
              ssn: {
                type: 'string',
                description:
                  'Social Security Number (format XXX-XX-XXXX). Required for Patriot Act-compliant KYC verification.',
              },
            },
            required: ['dob', 'ssn'],
          },
          {
            type: 'object',
            title: 'Business Compliance Profile',
            description:
              'Business registration data required to trigger Patriot Act compliant KYB verification.',
            properties: {
              ein: {
                type: 'string',
                description:
                  'Employer Identification Number (format XX-XXXXXXX). Required for Patriot Act-compliant KYB verification.',
              },
              legal_business_name: {
                type: 'string',
                description:
                  "Official registered business name as listed with the IRS. This value will be matched against the 'legal_business name'.",
              },
              representatives: {
                type: 'array',
                description:
                  "A list of people related to the company. Only valid where customer type is 'business'.",
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                    },
                    email: {
                      type: 'string',
                    },
                    phone: {
                      type: 'string',
                    },
                  },
                  required: ['name'],
                },
              },
              website: {
                type: 'string',
                description: 'Official business website URL. Optional but recommended for enhanced KYB.',
              },
            },
            required: ['ein', 'legal_business_name'],
          },
        ],
        description:
          "An object containing the customer's compliance profile. **This is optional.** If all required fields must be present for the appropriate customer type.",
      },
      config: {
        type: 'object',
        properties: {
          sandbox_outcome: {
            type: 'string',
            enum: ['standard', 'verified', 'rejected', 'review'],
          },
        },
        required: [],
      },
      external_id: {
        type: 'string',
        description:
          'Unique identifier for the customer in your database, used for cross-referencing between Straddle and your systems.',
      },
      metadata: {
        type: 'object',
        description:
          'Up to 20 additional user-defined key-value pairs. Useful for storing additional information about the customer in a structured format.',
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
    },
    $defs: {
      device_unmasked_v1: {
        type: 'object',
        properties: {
          ip_address: {
            type: 'string',
            description:
              "The customer's IP address at the time of profile creation. Use `0.0.0.0` to represent an offline customer registration.",
          },
        },
        required: ['ip_address'],
      },
      customer_address_v1: {
        type: 'object',
        description:
          "An object containing the customer's address. This is optional, but if provided, all required fields must be present.",
        properties: {
          address1: {
            type: 'string',
            description: 'Primary address line (e.g., street, PO Box).',
          },
          city: {
            type: 'string',
            description: 'City, district, suburb, town, or village.',
          },
          state: {
            type: 'string',
            description: 'Two-letter state code.',
          },
          zip: {
            type: 'string',
            description: 'Zip or postal code.',
          },
          address2: {
            type: 'string',
            description: 'Secondary address line (e.g., apartment, suite, unit, or building).',
          },
        },
        required: ['address1', 'city', 'state', 'zip'],
      },
    },
  },
};

export const handler = async (client: Straddle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.customers.create(body));
};

export default { metadata, tool, handler };
