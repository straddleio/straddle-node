// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { registerApiMethod } from '../../tools';
import Straddle from '@straddleio/straddle';

registerApiMethod({
  name: 'create_customers',
  description:
    'Creates a new customer record and automatically initiates identity, fraud, and risk assessment scores. This endpoint allows you to create a customer profile and associate it with paykeys and payments.',
  inputSchema: {
    type: 'object',
    properties: {
      device: {
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
        enum: ['individual', 'business'],
      },
      address: {
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
  },
  handler: (client: Straddle, args: any) => {
    const { ...body } = args;
    return client.customers.create(body);
  },
});

registerApiMethod({
  name: 'update_customers',
  description:
    "Updates an existing customer's information. This endpoint allows you to modify the customer's contact details, PII, and metadata.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      device: {
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
      email: {
        type: 'string',
        description: "The customer's email address.",
      },
      name: {
        type: 'string',
        description: "The customer's full name or business name.",
      },
      phone: {
        type: 'string',
        description: "The customer's phone number in E.164 format.",
      },
      status: {
        type: 'string',
        enum: ['pending', 'review', 'verified', 'inactive', 'rejected'],
      },
      address: {
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
        description: 'Individual PII data required to trigger Patriot Act compliant KYC verification.',
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
  },
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.customers.update(id, body);
  },
});

registerApiMethod({
  name: 'list_customers',
  description:
    'Lists or searches customers connected to your account. All supported query parameters are optional. If none are provided, the response will include all customers connected to your account. This endpoint supports advanced sorting and filtering options.',
  inputSchema: {
    type: 'object',
    properties: {
      created_from: {
        type: 'string',
        description: 'Start date for filtering by `created_at` date.',
        format: 'date-time',
      },
      created_to: {
        type: 'string',
        description: 'End date for filtering by `created_at` date.',
        format: 'date-time',
      },
      email: {
        type: 'string',
        description: 'Filter customers by `email` address.',
      },
      external_id: {
        type: 'string',
        description: "Filter by your system's `external_id`.",
      },
      name: {
        type: 'string',
        description: 'Filter customers by `name` (partial match).',
      },
      page_number: {
        type: 'integer',
        description: 'Page number for paginated results. Starts at 1.',
      },
      page_size: {
        type: 'integer',
        description: 'Number of results per page. Maximum: 1000.',
      },
      search_text: {
        type: 'string',
        description: 'General search term to filter customers.',
      },
      sort_by: {
        type: 'string',
        enum: ['name', 'created_at'],
      },
      sort_order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      status: {
        type: 'array',
        description: 'Filter customers by their current `status`.',
        items: {
          type: 'string',
          enum: ['pending', 'review', 'verified', 'inactive', 'rejected'],
        },
      },
      types: {
        type: 'array',
        description: 'Filter by customer type `individual` or `business`.',
        items: {
          type: 'string',
          enum: ['individual', 'business'],
        },
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
  },
  handler: (client: Straddle, args: any) => {
    const { ...body } = args;
    return client.customers.list(body);
  },
});

registerApiMethod({
  name: 'delete_customers',
  description:
    'Permanently removes a customer record from Straddle. This action cannot be undone and should only be used to satisfy regulatory requirements or for privacy compliance.',
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
    },
  },
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.customers.delete(id, body);
  },
});

registerApiMethod({
  name: 'get_customers',
  description:
    "Retrieves the details of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information.",
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
    },
  },
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.customers.get(id, body);
  },
});

registerApiMethod({
  name: 'refresh_review_customers',
  description:
    "Updates the decision of a customer's identity validation. This endpoint allows you to modify the outcome of a customer decision and is useful for correcting or updating the status of a customer's verification.",
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
    },
  },
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.customers.refreshReview(id, body);
  },
});

registerApiMethod({
  name: 'unmasked_customers',
  description:
    "Retrieves the unmasked details, including PII, of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information. This endpoint needs to be enabled by Straddle and should only be used when absolutely necessary.",
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
    },
  },
  handler: (client: Straddle, args: any) => {
    const { id, ...body } = args;
    return client.customers.unmasked(id, body);
  },
});
