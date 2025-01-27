// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ReviewAPI from './review';
import { CustomerReview, Review, ReviewRetrieveParams, ReviewUpdateParams } from './review';
import { PageNumberSchema, type PageNumberSchemaParams } from '../../pagination';

export class Customers extends APIResource {
  review: ReviewAPI.Review = new ReviewAPI.Review(this._client);

  /**
   * Creates a new customer record and automatically initiates identity, fraud, and
   * risk assessment scores. This endpoint allows you to create a customer profile
   * and associate it with paykeys and payments.
   */
  create(params: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<Customer> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.post('/v1/customers', {
      body,
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves the details of an existing customer. Supply the unique customer ID
   * that was returned from your 'create customer' request, and Straddle will return
   * the corresponding customer information.
   */
  retrieve(
    id: string,
    params?: CustomerRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Customer>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Customer>;
  retrieve(
    id: string,
    params: CustomerRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Customer> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/customers/${id}`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Updates an existing customer's information. This endpoint allows you to modify
   * the customer's contact details, PII, and metadata.
   */
  update(id: string, params: CustomerUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Customer> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/customers/${id}`, {
      body,
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Lists or searches customers connected to your account. All supported query
   * parameters are optional. If none are provided, the response will include all
   * customers connected to your account. This endpoint supports advanced sorting and
   * filtering options.
   */
  list(
    params?: CustomerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerSummaryPagedDataPageNumberSchema, CustomerSummaryPaged.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerSummaryPagedDataPageNumberSchema, CustomerSummaryPaged.Data>;
  list(
    params: CustomerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerSummaryPagedDataPageNumberSchema, CustomerSummaryPaged.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...query
    } = params;
    return this._client.getAPIList('/v1/customers', CustomerSummaryPagedDataPageNumberSchema, {
      query,
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Permanently removes a customer record from Straddle. This action cannot be
   * undone and should only be used to satisfy regulatory requirements or for privacy
   * compliance.
   */
  delete(id: string, params?: CustomerDeleteParams, options?: Core.RequestOptions): Core.APIPromise<Customer>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Customer>;
  delete(
    id: string,
    params: CustomerDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Customer> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.delete(`/v1/customers/${id}`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves the unmasked details, including PII, of an existing customer. Supply
   * the unique customer ID that was returned from your 'create customer' request,
   * and Straddle will return the corresponding customer information. This endpoint
   * needs to be enabled by Straddle and should only be used when absolutely
   * necessary.
   */
  unmasked(
    id: string,
    params?: CustomerUnmaskedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerUnmasked>;
  unmasked(id: string, options?: Core.RequestOptions): Core.APIPromise<CustomerUnmasked>;
  unmasked(
    id: string,
    params: CustomerUnmaskedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerUnmasked> {
    if (isRequestOptions(params)) {
      return this.unmasked(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/customers/${id}/unmasked`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }
}

export class CustomerSummaryPagedDataPageNumberSchema extends PageNumberSchema<CustomerSummaryPaged.Data> {}

export interface Customer {
  data: Customer.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: Customer.Meta;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace Customer {
  export interface Data {
    /**
     * Unique identifier for the customer.
     */
    id: string;

    /**
     * Timestamp of when the customer record was created.
     */
    created_at: string;

    /**
     * The customer's email address.
     */
    email: string;

    /**
     * Full name of the individual or business name.
     */
    name: string;

    /**
     * The customer's phone number in E.164 format.
     */
    phone: string;

    status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

    type: 'individual' | 'business';

    /**
     * Timestamp of the most recent update to the customer record.
     */
    updated_at: string;

    address?: Data.Address | null;

    /**
     * Compliance profile for individual customers
     */
    compliance_profile?: Data.IndividualComplianceProfile | Data.BusinessComplianceProfile;

    device?: Data.Device;

    /**
     * Unique identifier for the customer in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the customer in a structured format.
     */
    metadata?: Record<string, string> | null;
  }

  export namespace Data {
    export interface Address {
      /**
       * Primary address line (e.g., street, PO Box).
       */
      address1: string;

      /**
       * City, district, suburb, town, or village.
       */
      city: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Zip or postal code.
       */
      zip: string;

      /**
       * Secondary address line (e.g., apartment, suite, unit, or building).
       */
      address2?: string;
    }

    /**
     * Compliance profile for individual customers
     */
    export interface IndividualComplianceProfile {
      /**
       * Date of birth in YYYY-MM-DD format.
       */
      dob: string;

      /**
       * Social Security Number in the format XXX-XX-XXXX.
       */
      ssn: string;
    }

    /**
     * Compliance profile for business customers
     */
    export interface BusinessComplianceProfile {
      /**
       * Employer Identification Number in the format XX-XXXXXXX.
       */
      ein: string;

      /**
       * The official registered name of the business. This name should be correlated
       * with the `ein` value.
       */
      legal_business_name: string;

      /**
       * Business website URL.
       */
      website?: string;
    }

    export interface Device {
      /**
       * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
       * represent an offline customer registration.
       */
      ip_address: string;
    }
  }

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  export interface Meta {
    /**
     * Unique identifier for this API request, useful for troubleshooting.
     */
    api_request_id: string;

    /**
     * Timestamp for this API request, useful for troubleshooting.
     */
    api_request_timestamp: string;
  }
}

export interface CustomerSummaryPaged {
  data: Array<CustomerSummaryPaged.Data>;

  meta: CustomerSummaryPaged.Meta;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace CustomerSummaryPaged {
  export interface Data {
    /**
     * Unique identifier for the customer.
     */
    id: string;

    /**
     * Timestamp of when the customer record was created.
     */
    created_at: string;

    /**
     * The customer's email address.
     */
    email: string;

    /**
     * Full name of the individual or business name.
     */
    name: string;

    /**
     * The customer's phone number in E.164 format.
     */
    phone: string;

    status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

    type: 'individual' | 'business';

    /**
     * Timestamp of the most recent update to the customer record.
     */
    updated_at: string;

    /**
     * Unique identifier for the customer in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;
  }

  export interface Meta {
    /**
     * Unique identifier for this API request, useful for troubleshooting.
     */
    api_request_id: string;

    /**
     * Timestamp for this API request, useful for troubleshooting.
     */
    api_request_timestamp: string;

    /**
     * Maximum allowed page size for this endpoint.
     */
    max_page_size: number;

    /**
     * Page number for paginated results.
     */
    page_number: number;

    /**
     * Number of items per page in this response.
     */
    page_size: number;

    /**
     * The field that the results were sorted by.
     */
    sort_by: string;

    sort_order: 'asc' | 'desc';

    total_items: number;
  }
}

export interface CustomerUnmasked {
  data: CustomerUnmasked.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: CustomerUnmasked.Meta;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace CustomerUnmasked {
  export interface Data {
    /**
     * Unique identifier for the customer.
     */
    id: string;

    /**
     * Timestamp of when the customer record was created.
     */
    created_at: string;

    /**
     * The customer's email address.
     */
    email: string;

    /**
     * Full name of the individual or business name.
     */
    name: string;

    /**
     * The customer's phone number in E.164 format.
     */
    phone: string;

    status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

    type: 'individual' | 'business';

    /**
     * Timestamp of the most recent update to the customer record.
     */
    updated_at: string;

    address?: Data.Address | null;

    /**
     * Compliance profile for individual customers
     */
    compliance_profile?: Data.IndividualComplianceProfile | Data.BusinessComplianceProfile;

    device?: Data.Device;

    /**
     * Unique identifier for the customer in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the customer in a structured format.
     */
    metadata?: Record<string, string> | null;
  }

  export namespace Data {
    export interface Address {
      /**
       * Primary address line (e.g., street, PO Box).
       */
      address1: string;

      /**
       * City, district, suburb, town, or village.
       */
      city: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Zip or postal code.
       */
      zip: string;

      /**
       * Secondary address line (e.g., apartment, suite, unit, or building).
       */
      address2?: string;
    }

    /**
     * Compliance profile for individual customers
     */
    export interface IndividualComplianceProfile {
      /**
       * Date of birth in YYYY-MM-DD format.
       */
      dob: string;

      /**
       * Social Security Number in the format XXX-XX-XXXX.
       */
      ssn: string;
    }

    /**
     * Compliance profile for business customers
     */
    export interface BusinessComplianceProfile {
      /**
       * Employer Identification Number in the format XX-XXXXXXX.
       */
      ein: string;

      /**
       * The official registered name of the business. This name should be correlated
       * with the `ein` value.
       */
      legal_business_name: string;

      /**
       * Business website URL.
       */
      website?: string;
    }

    export interface Device {
      /**
       * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
       * represent an offline customer registration.
       */
      ip_address: string;
    }
  }

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  export interface Meta {
    /**
     * Unique identifier for this API request, useful for troubleshooting.
     */
    api_request_id: string;

    /**
     * Timestamp for this API request, useful for troubleshooting.
     */
    api_request_timestamp: string;
  }
}

export interface CustomerCreateParams {
  /**
   * Body param:
   */
  device: CustomerCreateParams.Device;

  /**
   * Body param: The customer's email address.
   */
  email: string;

  /**
   * Body param: Full name of the individual or business name.
   */
  name: string;

  /**
   * Body param: The customer's phone number in E.164 format. Mobile number is
   * preferred.
   */
  phone: string;

  /**
   * Body param:
   */
  type: 'individual' | 'business';

  /**
   * Body param: An object containing the customer's address. This is optional, but
   * if provided, all required fields must be present.
   */
  address?: CustomerCreateParams.Address | null;

  /**
   * Body param: An object containing the customer's compliance profile. This is
   * optional, but if provided, all required fields must be present for the
   * appropriate customer type.
   */
  compliance_profile?:
    | CustomerCreateParams.IndividualComplianceProfile
    | CustomerCreateParams.BusinessComplianceProfile;

  /**
   * Body param: Unique identifier for the customer in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the customer in a structured format.
   */
  metadata?: Record<string, string> | null;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Header param: Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * Header param: For use by platforms to specify an account id and set scope of a
   * request.
   */
  'Straddle-Account-Id'?: string;
}

export namespace CustomerCreateParams {
  export interface Device {
    /**
     * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
     * represent an offline customer registration.
     */
    ip_address: string;
  }

  /**
   * An object containing the customer's address. This is optional, but if provided,
   * all required fields must be present.
   */
  export interface Address {
    /**
     * Primary address line (e.g., street, PO Box).
     */
    address1: string;

    /**
     * City, district, suburb, town, or village.
     */
    city: string;

    /**
     * Two-letter state code.
     */
    state: string;

    /**
     * Zip or postal code.
     */
    zip: string;

    /**
     * Secondary address line (e.g., apartment, suite, unit, or building).
     */
    address2?: string;
  }

  /**
   * Compliance profile for individual customers
   */
  export interface IndividualComplianceProfile {
    /**
     * Date of birth in YYYY-MM-DD format.
     */
    dob: string;

    /**
     * Social Security Number in the format XXX-XX-XXXX.
     */
    ssn: string;
  }

  /**
   * Compliance profile for business customers
   */
  export interface BusinessComplianceProfile {
    /**
     * Employer Identification Number in the format XX-XXXXXXX.
     */
    ein: string;

    /**
     * The official registered name of the business. This name should be correlated
     * with the `ein` value.
     */
    legal_business_name: string;

    /**
     * Business website URL.
     */
    website?: string;
  }
}

export interface CustomerRetrieveParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * For use by platforms to specify an account id and set scope of a request.
   */
  'Straddle-Account-Id'?: string;
}

export interface CustomerUpdateParams {
  /**
   * Body param:
   */
  device: CustomerUpdateParams.Device;

  /**
   * Body param: The customer's email address.
   */
  email: string;

  /**
   * Body param: The customer's full name or business name.
   */
  name: string;

  /**
   * Body param: The customer's phone number in E.164 format.
   */
  phone: string;

  /**
   * Body param:
   */
  status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

  /**
   * Body param: An object containing the customer's address. This is optional, but
   * if provided, all required fields must be present.
   */
  address?: CustomerUpdateParams.Address | null;

  /**
   * Body param: Compliance profile for individual customers
   */
  compliance_profile?:
    | CustomerUpdateParams.IndividualComplianceProfile
    | CustomerUpdateParams.BusinessComplianceProfile;

  /**
   * Body param: Unique identifier for the customer in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the customer in a structured format.
   */
  metadata?: Record<string, string> | null;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Header param: Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * Header param: For use by platforms to specify an account id and set scope of a
   * request.
   */
  'Straddle-Account-Id'?: string;
}

export namespace CustomerUpdateParams {
  export interface Device {
    /**
     * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
     * represent an offline customer registration.
     */
    ip_address: string;
  }

  /**
   * An object containing the customer's address. This is optional, but if provided,
   * all required fields must be present.
   */
  export interface Address {
    /**
     * Primary address line (e.g., street, PO Box).
     */
    address1: string;

    /**
     * City, district, suburb, town, or village.
     */
    city: string;

    /**
     * Two-letter state code.
     */
    state: string;

    /**
     * Zip or postal code.
     */
    zip: string;

    /**
     * Secondary address line (e.g., apartment, suite, unit, or building).
     */
    address2?: string;
  }

  /**
   * Compliance profile for individual customers
   */
  export interface IndividualComplianceProfile {
    /**
     * Date of birth in YYYY-MM-DD format.
     */
    dob: string;

    /**
     * Social Security Number in the format XXX-XX-XXXX.
     */
    ssn: string;
  }

  /**
   * Compliance profile for business customers
   */
  export interface BusinessComplianceProfile {
    /**
     * Employer Identification Number in the format XX-XXXXXXX.
     */
    ein: string;

    /**
     * The official registered name of the business. This name should be correlated
     * with the `ein` value.
     */
    legal_business_name: string;

    /**
     * Business website URL.
     */
    website?: string;
  }
}

export interface CustomerListParams extends PageNumberSchemaParams {
  /**
   * Query param: Start date for filtering by `created_at` date.
   */
  created_from?: string;

  /**
   * Query param: End date for filtering by `created_at` date.
   */
  created_to?: string;

  /**
   * Query param: Filter customers by `email` address.
   */
  email?: string;

  /**
   * Query param: Filter by your system's `external_id`.
   */
  external_id?: string;

  /**
   * Query param: Filter customers by `name` (partial match).
   */
  name?: string;

  /**
   * Query param: General search term to filter customers.
   */
  search_text?: string;

  /**
   * Query param:
   */
  sort_by?: 'name' | 'created_at';

  /**
   * Query param:
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Query param: Filter customers by their current `status`.
   */
  status?: Array<'pending' | 'review' | 'verified' | 'inactive' | 'rejected'>;

  /**
   * Query param: Filter by customer type `individual` or `business`.
   */
  types?: Array<'individual' | 'business'>;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Header param: Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * Header param: For use by platforms to specify an `account_id` to set the scope
   * of a request.
   */
  'Straddle-Account-Id'?: string;
}

export interface CustomerDeleteParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * For use by platforms to specify an account id and set scope of a request.
   */
  'Straddle-Account-Id'?: string;
}

export interface CustomerUnmaskedParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * For use by platforms to specify an account id and set scope of a request.
   */
  'Straddle-Account-Id'?: string;
}

Customers.CustomerSummaryPagedDataPageNumberSchema = CustomerSummaryPagedDataPageNumberSchema;
Customers.Review = Review;

export declare namespace Customers {
  export {
    type Customer as Customer,
    type CustomerSummaryPaged as CustomerSummaryPaged,
    type CustomerUnmasked as CustomerUnmasked,
    CustomerSummaryPagedDataPageNumberSchema as CustomerSummaryPagedDataPageNumberSchema,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerDeleteParams as CustomerDeleteParams,
    type CustomerUnmaskedParams as CustomerUnmaskedParams,
  };

  export {
    Review as Review,
    type CustomerReview as CustomerReview,
    type ReviewRetrieveParams as ReviewRetrieveParams,
    type ReviewUpdateParams as ReviewUpdateParams,
  };
}
