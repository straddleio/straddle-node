// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from './customers';
import * as Shared from '../shared';
import * as ReviewAPI from './review';
import {
  CustomerReviewV1,
  IdentityVerificationBreakdownV1,
  Review,
  ReviewDecisionParams,
  ReviewGetParams,
  ReviewRefreshReviewParams,
} from './review';
import { APIPromise } from '../../core/api-promise';
import { PageNumberSchema, type PageNumberSchemaParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Customers extends APIResource {
  review: ReviewAPI.Review = new ReviewAPI.Review(this._client);

  /**
   * Creates a new customer record and automatically initiates identity, fraud, and
   * risk assessment scores. This endpoint allows you to create a customer profile
   * and associate it with paykeys and payments.
   *
   * @example
   * ```ts
   * const customerV1 = await client.customers.create({
   *   device: { ip_address: '192.168.1.1' },
   *   email: 'ron.swanson@pawnee.com',
   *   name: 'Ron Swanson',
   *   phone: '+12128675309',
   *   type: 'individual',
   * });
   * ```
   */
  create(params: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...body
    } = params;
    return this._client.post('/v1/customers', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates an existing customer's information. This endpoint allows you to modify
   * the customer's contact details, PII, and metadata.
   *
   * @example
   * ```ts
   * const customerV1 = await client.customers.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     device: { ip_address: '192.168.1.1' },
   *     email: 'dev@stainless.com',
   *     name: 'name',
   *     phone: '+46991022',
   *     status: 'pending',
   *   },
   * );
   * ```
   */
  update(id: string, params: CustomerUpdateParams, options?: RequestOptions): APIPromise<CustomerV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...body
    } = params;
    return this._client.put(path`/v1/customers/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists or searches customers connected to your account. All supported query
   * parameters are optional. If none are provided, the response will include all
   * customers connected to your account. This endpoint supports advanced sorting and
   * filtering options.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customer of client.customers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomerSummaryPagedV1DataPageNumberSchema, CustomerSummaryPagedV1.Data> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...query
    } = params ?? {};
    return this._client.getAPIList('/v1/customers', PageNumberSchema<CustomerSummaryPagedV1.Data>, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Permanently removes a customer record from Straddle. This action cannot be
   * undone and should only be used to satisfy regulatory requirements or for privacy
   * compliance.
   *
   * @example
   * ```ts
   * const customerV1 = await client.customers.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(
    id: string,
    params: CustomerDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.delete(path`/v1/customers/${id}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the details of an existing customer. Supply the unique customer ID
   * that was returned from your 'create customer' request, and Straddle will return
   * the corresponding customer information.
   *
   * @example
   * ```ts
   * const customerV1 = await client.customers.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  get(
    id: string,
    params: CustomerGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerV1> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.get(path`/v1/customers/${id}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the unmasked details, including PII, of an existing customer. Supply
   * the unique customer ID that was returned from your 'create customer' request,
   * and Straddle will return the corresponding customer information. This endpoint
   * needs to be enabled by Straddle and should only be used when absolutely
   * necessary.
   *
   * @example
   * ```ts
   * const customerUnmaskedV1 = await client.customers.unmasked(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  unmasked(
    id: string,
    params: CustomerUnmaskedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerUnmaskedV1> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.get(path`/v1/customers/${id}/unmasked`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type CustomerSummaryPagedV1DataPageNumberSchema = PageNumberSchema<CustomerSummaryPagedV1.Data>;

/**
 * An object containing the customer's address. This is optional, but if provided,
 * all required fields must be present.
 */
export interface CustomerAddressV1 {
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
  address2?: string | null;
}

export interface CustomerSummaryPagedV1 {
  data: Array<CustomerSummaryPagedV1.Data>;

  meta: CustomerSummaryPagedV1.Meta;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: 'object' | 'array' | 'error' | 'none' | 'Object' | 'Array' | 'Error' | 'None';
}

export namespace CustomerSummaryPagedV1 {
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

    type: 'individual' | 'business' | 'Individual' | 'Business';

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

    sort_order: 'asc' | 'desc' | 'Asc' | 'Desc';

    total_items: number;

    /**
     * The number of pages available.
     */
    total_pages: number;
  }
}

export interface CustomerUnmaskedV1 {
  data: CustomerUnmaskedV1.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: Shared.ResponseMetadata;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: 'object' | 'array' | 'error' | 'none' | 'Object' | 'Array' | 'Error' | 'None';
}

export namespace CustomerUnmaskedV1 {
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

    type: 'individual' | 'business' | 'Individual' | 'Business';

    /**
     * Timestamp of the most recent update to the customer record.
     */
    updated_at: string;

    /**
     * An object containing the customer's address. This is optional, but if provided,
     * all required fields must be present.
     */
    address?: CustomersAPI.CustomerAddressV1 | null;

    /**
     * Individual PII data required to trigger Patriot Act compliant KYC verification.
     */
    compliance_profile?: Data.IndividualComplianceProfile | Data.BusinessComplianceProfile | null;

    config?: Data.Config;

    device?: CustomersAPI.DeviceUnmaskedV1;

    /**
     * Unique identifier for the customer in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the customer in a structured format.
     */
    metadata?: { [key: string]: string } | null;
  }

  export namespace Data {
    /**
     * Individual PII data required to trigger Patriot Act compliant KYC verification.
     */
    export interface IndividualComplianceProfile {
      /**
       * Date of birth (YYYY-MM-DD). Required for Patriot Act-compliant KYC verification.
       */
      dob: string | null;

      /**
       * Social Security Number (format XXX-XX-XXXX). Required for Patriot Act-compliant
       * KYC verification.
       */
      ssn: string | null;
    }

    /**
     * Business registration data required to trigger Patriot Act compliant KYB
     * verification.
     */
    export interface BusinessComplianceProfile {
      /**
       * Employer Identification Number (format XX-XXXXXXX). Required for Patriot
       * Act-compliant KYB verification.
       */
      ein: string | null;

      /**
       * Official registered business name as listed with the IRS. This value will be
       * matched against the 'legal_business name'.
       */
      legal_business_name: string | null;

      /**
       * A list of people related to the company. Only valid where customer type is
       * 'business'.
       */
      representatives?: Array<BusinessComplianceProfile.Representative> | null;

      /**
       * Official business website URL. Optional but recommended for enhanced KYB.
       */
      website?: string | null;
    }

    export namespace BusinessComplianceProfile {
      export interface Representative {
        name: string;

        email?: string | null;

        phone?: string | null;
      }
    }

    export interface Config {
      processing_method?: 'inline' | 'background' | 'skip';

      sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review';
    }
  }
}

export interface CustomerV1 {
  data: CustomerV1.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: Shared.ResponseMetadata;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: 'object' | 'array' | 'error' | 'none' | 'Object' | 'Array' | 'Error' | 'None';
}

export namespace CustomerV1 {
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

    type: 'individual' | 'business' | 'Individual' | 'Business';

    /**
     * Timestamp of the most recent update to the customer record.
     */
    updated_at: string;

    /**
     * An object containing the customer's address. This is optional, but if provided,
     * all required fields must be present.
     */
    address?: CustomersAPI.CustomerAddressV1 | null;

    /**
     * PII required to trigger Patriot Act compliant KYC verification.
     */
    compliance_profile?: Data.IndividualComplianceProfile | Data.BusinessComplianceProfile | null;

    config?: Data.Config;

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
    metadata?: { [key: string]: string } | null;
  }

  export namespace Data {
    /**
     * PII required to trigger Patriot Act compliant KYC verification.
     */
    export interface IndividualComplianceProfile {
      /**
       * Masked date of birth in \***\*-**-\*\* format.
       */
      dob: string | null;

      /**
       * Masked Social Security Number in the format **\*-**-\*\*\*\*.
       */
      ssn: string | null;
    }

    /**
     * Business registration data required to trigger Patriot Act compliant KYB
     * verification.
     */
    export interface BusinessComplianceProfile {
      /**
       * Masked Employer Identification Number in the format **-**\*****
       */
      ein: string | null;

      /**
       * The official registered name of the business. This name should be correlated
       * with the `ein` value.
       */
      legal_business_name: string | null;

      /**
       * A list of people related to the company. Only valid where customer type is
       * 'business'.
       */
      representatives?: Array<BusinessComplianceProfile.Representative> | null;

      /**
       * Official business website URL. Optional but recommended for enhanced KYB.
       */
      website?: string | null;
    }

    export namespace BusinessComplianceProfile {
      export interface Representative {
        name: string;

        email?: string | null;

        phone?: string | null;
      }
    }

    export interface Config {
      processing_method?: 'inline' | 'background' | 'skip';

      sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review';
    }

    export interface Device {
      /**
       * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
       * represent an offline customer registration.
       */
      ip_address: string;
    }
  }
}

export interface DeviceUnmaskedV1 {
  /**
   * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
   * represent an offline customer registration.
   */
  ip_address: string;
}

export interface CustomerCreateParams {
  /**
   * Body param
   */
  device: DeviceUnmaskedV1;

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
   * Body param
   */
  type: 'individual' | 'business' | 'Individual' | 'Business';

  /**
   * Body param: An object containing the customer's address. **This is optional.**
   * If used, all required fields must be present.
   */
  address?: CustomerAddressV1 | null;

  /**
   * Body param: An object containing the customer's compliance profile. **This is
   * optional.** If all required fields must be present for the appropriate customer
   * type.
   */
  compliance_profile?:
    | CustomerCreateParams.IndividualComplianceProfile
    | CustomerCreateParams.BusinessComplianceProfile
    | null;

  /**
   * Body param
   */
  config?: CustomerCreateParams.Config;

  /**
   * Body param: Unique identifier for the customer in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the customer in a structured format.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Header param: Optional client generated value to use for idempotent requests.
   */
  'Idempotency-Key'?: string;

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
  /**
   * Individual PII data required to trigger Patriot Act compliant KYC verification.
   */
  export interface IndividualComplianceProfile {
    /**
     * Date of birth (YYYY-MM-DD). Required for Patriot Act-compliant KYC verification.
     */
    dob: string | null;

    /**
     * Social Security Number (format XXX-XX-XXXX). Required for Patriot Act-compliant
     * KYC verification.
     */
    ssn: string | null;
  }

  /**
   * Business registration data required to trigger Patriot Act compliant KYB
   * verification.
   */
  export interface BusinessComplianceProfile {
    /**
     * Employer Identification Number (format XX-XXXXXXX). Required for Patriot
     * Act-compliant KYB verification.
     */
    ein: string | null;

    /**
     * Official registered business name as listed with the IRS. This value will be
     * matched against the 'legal_business name'.
     */
    legal_business_name: string | null;

    /**
     * A list of people related to the company. Only valid where customer type is
     * 'business'.
     */
    representatives?: Array<BusinessComplianceProfile.Representative> | null;

    /**
     * Official business website URL. Optional but recommended for enhanced KYB.
     */
    website?: string | null;
  }

  export namespace BusinessComplianceProfile {
    export interface Representative {
      name: string;

      email?: string | null;

      phone?: string | null;
    }
  }

  export interface Config {
    processing_method?: 'inline' | 'background' | 'skip';

    sandbox_outcome?: 'standard' | 'verified' | 'rejected' | 'review';
  }
}

export interface CustomerUpdateParams {
  /**
   * Body param
   */
  device: DeviceUnmaskedV1;

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
   * Body param
   */
  status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

  /**
   * Body param: An object containing the customer's address. This is optional, but
   * if provided, all required fields must be present.
   */
  address?: CustomerAddressV1 | null;

  /**
   * Body param: Individual PII data required to trigger Patriot Act compliant KYC
   * verification.
   */
  compliance_profile?:
    | CustomerUpdateParams.IndividualComplianceProfile
    | CustomerUpdateParams.BusinessComplianceProfile
    | null;

  /**
   * Body param: Unique identifier for the customer in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the customer in a structured format.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Header param: Optional client generated value to use for idempotent requests.
   */
  'Idempotency-Key'?: string;

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
  /**
   * Individual PII data required to trigger Patriot Act compliant KYC verification.
   */
  export interface IndividualComplianceProfile {
    /**
     * Date of birth (YYYY-MM-DD). Required for Patriot Act-compliant KYC verification.
     */
    dob: string | null;

    /**
     * Social Security Number (format XXX-XX-XXXX). Required for Patriot Act-compliant
     * KYC verification.
     */
    ssn: string | null;
  }

  /**
   * Business registration data required to trigger Patriot Act compliant KYB
   * verification.
   */
  export interface BusinessComplianceProfile {
    /**
     * Employer Identification Number (format XX-XXXXXXX). Required for Patriot
     * Act-compliant KYB verification.
     */
    ein: string | null;

    /**
     * Official registered business name as listed with the IRS. This value will be
     * matched against the 'legal_business name'.
     */
    legal_business_name: string | null;

    /**
     * A list of people related to the company. Only valid where customer type is
     * 'business'.
     */
    representatives?: Array<BusinessComplianceProfile.Representative> | null;

    /**
     * Official business website URL. Optional but recommended for enhanced KYB.
     */
    website?: string | null;
  }

  export namespace BusinessComplianceProfile {
    export interface Representative {
      name: string;

      email?: string | null;

      phone?: string | null;
    }
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
   * Query param
   */
  sort_by?: 'name' | 'created_at';

  /**
   * Query param
   */
  sort_order?: 'asc' | 'desc' | 'Asc' | 'Desc';

  /**
   * Query param: Filter customers by their current `status`.
   */
  status?: Array<'pending' | 'review' | 'verified' | 'inactive' | 'rejected'>;

  /**
   * Query param: Filter by customer type `individual` or `business`.
   */
  types?: Array<'individual' | 'business' | 'Individual' | 'Business'>;

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
   * Optional client generated value to use for idempotent requests.
   */
  'Idempotency-Key'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * For use by platforms to specify an account id and set scope of a request.
   */
  'Straddle-Account-Id'?: string;
}

export interface CustomerGetParams {
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

Customers.Review = Review;

export declare namespace Customers {
  export {
    type CustomerAddressV1 as CustomerAddressV1,
    type CustomerSummaryPagedV1 as CustomerSummaryPagedV1,
    type CustomerUnmaskedV1 as CustomerUnmaskedV1,
    type CustomerV1 as CustomerV1,
    type DeviceUnmaskedV1 as DeviceUnmaskedV1,
    type CustomerSummaryPagedV1DataPageNumberSchema as CustomerSummaryPagedV1DataPageNumberSchema,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerDeleteParams as CustomerDeleteParams,
    type CustomerGetParams as CustomerGetParams,
    type CustomerUnmaskedParams as CustomerUnmaskedParams,
  };

  export {
    Review as Review,
    type CustomerReviewV1 as CustomerReviewV1,
    type IdentityVerificationBreakdownV1 as IdentityVerificationBreakdownV1,
    type ReviewDecisionParams as ReviewDecisionParams,
    type ReviewGetParams as ReviewGetParams,
    type ReviewRefreshReviewParams as ReviewRefreshReviewParams,
  };
}
