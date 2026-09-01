// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as AccountsAPI from '../accounts';
import type * as BridgeAPI from '../bridge';
import * as ReviewAPI from './review';
import {
  Review,
  type CustomerReviewResponse,
  type CustomerReview,
  type CustomerIdentityVerification,
  type VerificationDecision,
  type IdentityVerificationBreakdown,
  type IdentityVerificationAlerts,
  type IdentityVerificationWatchlist,
  type CustomerKYCVerification,
  type ReputationCheck,
  type CorrelationBucket,
  type IdentityVerificationWatchlistMatch,
  type ReputationInsights,
  type ReviewListParams,
  type ReviewSetVerificationDecisionParams,
} from './review';

export class Customers extends APIResource {
  review: ReviewAPI.Review = new ReviewAPI.Review(this._client);

  /**
   * Returns a customer by `id`.
   *
   * @param {string} id - Unique identifier for the customer.
   * @param {CustomerRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerResponse>} OK
   *
   * @example
   * ```ts
   * const customer = await client.customers.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    id: string,
    params: CustomerRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/customers/${id}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates an existing customer's profile, status, and metadata.
   *
   * @param {string} id - Unique identifier for the customer.
   * @param {CustomerUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerResponse>} OK
   *
   * @example
   * ```ts
   * const customer = await client.customers.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   name: '',
   *   email: 'user@example.com',
   *   phone: '',
   *   device: {
   *     ip_address: '192.168.1.1',
   *   },
   *   status: 'verified',
   * });
   * ```
   */
  update(id: string, params: CustomerUpdateParams, options?: RequestOptions): APIPromise<CustomerResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.put(__scalarPath`/v1/customers/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Permanently deletes a customer record. The deletion cannot be undone. Use this endpoint only to meet regulatory or privacy requirements.
   *
   * @param {string} id - Unique identifier for the customer.
   * @param {CustomerDeleteParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerResponse>} OK
   *
   * @example
   * ```ts
   * const customer = await client.customers.delete('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  delete(
    id: string,
    params: CustomerDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
    } = params ?? {};
    return this._client.delete(__scalarPath`/v1/customers/${id}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a paginated list of customers for the account. Optional query parameters filter, search, and sort the results.
   *
   * @param {CustomerListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerSummaryList>} OK
   *
   * @example
   * ```ts
   * const customerSummaryList = await client.customers.list({
   *   page_number: 1,
   *   page_size: 100,
   *   sort_order: 'asc',
   * });
   * ```
   */
  list(
    params: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerSummaryList> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      ...query
    } = params ?? {};
    return this._client.get('/v1/customers', {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates a customer and starts identity, fraud, and risk assessments.
   *
   * @param {CustomerCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerResponse>} Created
   *
   * @example
   * ```ts
   * const customer = await client.customers.create({
   *   name: 'Ron Swanson',
   *   type: 'individual',
   *   email: 'ron.swanson@pawnee.com',
   *   address: { address1: '123 Main St', city: 'Anytown', state: 'CA', zip: '94105' },
   *   phone: '+12128675309',
   *   external_id: 'customer_123',
   *   device: { ip_address: '192.168.1.1' },
   *   metadata: {},
   * });
   * ```
   */
  create(params: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/customers', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns unmasked details for a customer, including personally identifiable information. Straddle must enable this endpoint for your account. Use this endpoint only when unmasked data is necessary.
   *
   * @param {string} id - Unique identifier for the customer.
   * @param {CustomerListUnmaskedParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UnmaskedCustomerResponse>} OK
   *
   * @example
   * ```ts
   * const unmaskedCustomer = await client.customers.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  listUnmasked(
    id: string,
    params: CustomerListUnmaskedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnmaskedCustomerResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/customers/${id}/unmasked`, {
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Starts a new identity review for a customer. The review runs asynchronously. Webhooks and the customer review endpoint return updated results.
   *
   * @param {string} id - Unique identifier for the customer.
   * @param {CustomerRefreshReviewParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerResponse>} Accepted
   *
   * @example
   * ```ts
   * const customer = await client.customers.refreshReview('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  refreshReview(
    id: string,
    params: CustomerRefreshReviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
    } = params ?? {};
    return this._client.put(__scalarPath`/v1/customers/${id}/refresh_review`, {
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }
}

export interface CustomerResponse {
  /**
   * Metadata for an API request.
   */
  meta: AccountsAPI.ResponseMetadata;
  /**
   * Shape of the response envelope.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of JSON objects.
   * - `error` means `error` contains the error details.
   * - `none` means the response contains no data.
   */
  response_type: BridgeAPI.ResponseType;
  data: Customer;
}

export interface CustomerSummaryList {
  /**
   * Metadata for an API request and a page of results.
   */
  meta: AccountsAPI.PageMetadata;
  /**
   * Shape of the response envelope.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of JSON objects.
   * - `error` means `error` contains the error details.
   * - `none` means the response contains no data.
   */
  response_type: BridgeAPI.ResponseType;
  /**
   * Customers returned for this page.
   */
  data: Array<CustomerSummary>;
}

export interface UnmaskedCustomerResponse {
  /**
   * Metadata for an API request.
   */
  meta: AccountsAPI.ResponseMetadata;
  /**
   * Shape of the response envelope.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of JSON objects.
   * - `error` means `error` contains the error details.
   * - `none` means the response contains no data.
   */
  response_type: BridgeAPI.ResponseType;
  data: UnmaskedCustomer;
}

export interface Customer {
  /**
   * Unique identifier for the customer.
   * @format uuid
   */
  id: string;
  /**
   * Full name for an individual customer or business name for a business customer.
   */
  name: string;
  type: CustomerType;
  /**
   * The customer's email address.
   * @format email
   */
  email: string;
  /**
   * The customer's phone number in E.164 format.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  phone: string;
  status: CustomerStatus;
  /**
   * Timestamp of when the customer record was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the most recent update to the customer record.
   * @format date-time
   */
  updated_at: string;
  /**
   * Unique identifier for the customer in your system.
   */
  external_id?: string | null;
  /**
   * Customer postal address. When provided, the object must include all required fields.
   */
  address?: CustomerAddress | null;
  compliance_profile?: ComplianceProfile | null;
  device?: MaskedCustomerDevice;
  /**
   * Up to 20 user-defined key-value pairs associated with the customer.
   */
  metadata?: Record<string, string> | null;
  config?: CustomerConfiguration;
}

export interface CustomerSummary {
  /**
   * Unique identifier for the customer.
   * @format uuid
   */
  id: string;
  /**
   * Full name for an individual customer or business name for a business customer.
   */
  name: string;
  type: CustomerType;
  /**
   * The customer's email address.
   * @format email
   */
  email: string;
  /**
   * The customer's phone number in E.164 format.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  phone: string;
  status: CustomerStatus;
  /**
   * Timestamp of when the customer record was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the most recent update to the customer record.
   * @format date-time
   */
  updated_at: string;
  /**
   * Unique identifier for the customer in your system.
   */
  external_id?: string | null;
}

export interface UnmaskedCustomer {
  /**
   * Unique identifier for the customer.
   * @format uuid
   */
  id: string;
  /**
   * Full name for an individual customer or business name for a business customer.
   */
  name: string;
  type: CustomerType;
  /**
   * The customer's email address.
   * @format email
   */
  email: string;
  /**
   * The customer's phone number in E.164 format.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  phone: string;
  status: CustomerStatus;
  /**
   * Timestamp of when the customer record was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the most recent update to the customer record.
   * @format date-time
   */
  updated_at: string;
  /**
   * Unique identifier for the customer in your system.
   */
  external_id?: string | null;
  /**
   * Customer postal address. When provided, the object must include all required fields.
   */
  address?: CustomerAddress | null;
  compliance_profile?: UnmaskedComplianceProfile | null;
  device?: CustomerDevice;
  /**
   * Up to 20 user-defined key-value pairs associated with the customer.
   */
  metadata?: Record<string, string> | null;
  config?: CustomerConfiguration;
}

export type CustomerType = 'individual' | 'business';

export type CustomerStatus = 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

/**
 * Customer postal address. When provided, the object must include all required fields.
 */
export interface CustomerAddress {
  /**
   * Primary address line, such as a street address or PO Box.
   * @maxLength 100
   */
  address1: string;
  /**
   * City, district, suburb, town, or village.
   * @maxLength 100
   */
  city: string;
  /**
   * Two-letter state code.
   * @pattern ^[A-Z]{2}$
   */
  state: string;
  /**
   * ZIP or postal code.
   * @pattern ^[0-9]{5}(-[0-9]{4})?$
   */
  zip: string;
  /**
   * Secondary address line, such as an apartment, suite, unit, or building.
   * @maxLength 100
   */
  address2?: string | null;
}

export type ComplianceProfile =
  | ComplianceProfile.IndividualComplianceProfile
  | ComplianceProfile.BusinessComplianceProfile;

export namespace ComplianceProfile {
  export interface IndividualComplianceProfile {
    /**
     * Masked date of birth in `****-**-**` format.
     */
    dob: string | null;
    /**
     * Masked Social Security number in `***-**-****` format.
     */
    ssn: string | null;
  }

  export interface BusinessComplianceProfile {
    /**
     * Masked Employer Identification Number in `**-*******` format.
     */
    ein: string | null;
    /**
     * Official registered business name associated with `ein`.
     */
    legal_business_name: string | null;
    /**
     * Official business website URL.
     * @format uri
     */
    website?: string | null;
    /**
     * Representatives associated with the business. Valid only for `business` customers.
     */
    representatives?: Array<BusinessCustomerRepresentative> | null;
  }
}

export interface MaskedCustomerDevice {
  /**
   * Masked IP address of the customer's device at the time of profile creation.
   * @minLength 1
   */
  ip_address: string;
}

export interface CustomerConfiguration {
  sandbox_outcome?: SimulatedCustomerOutcome;
  processing_method?: BridgeAPI.PaykeyProcessingMode;
}

export type UnmaskedComplianceProfile =
  | UnmaskedComplianceProfile.IndividualComplianceProfile
  | UnmaskedComplianceProfile.BusinessComplianceProfile;

export namespace UnmaskedComplianceProfile {
  export interface IndividualComplianceProfile {
    /**
     * Social Security number in `XXX-XX-XXXX` format. Required for Patriot Act-compliant KYC verification.
     * @pattern ^[0-9]{3}-[0-9]{2}-[0-9]{4}$
     */
    ssn: string | null;
    /**
     * Date of birth in `YYYY-MM-DD` format. Required for Patriot Act-compliant KYC verification.
     * @format date
     */
    dob: string | null;
  }

  export interface BusinessComplianceProfile {
    /**
     * Employer Identification Number in `XX-XXXXXXX` format. Required for Patriot Act-compliant KYB verification.
     * @pattern ^[0-9]{2}-[0-9]{7}$
     */
    ein: string | null;
    /**
     * Official business name registered with the IRS.
     */
    legal_business_name: string | null;
    /**
     * Official business website URL.
     * @format uri
     */
    website?: string | null;
    /**
     * Representatives associated with the business. Valid only for `business` customers.
     */
    representatives?: Array<BusinessCustomerRepresentative> | null;
  }
}

export interface CustomerDevice {
  /**
   * Customer IP address at profile creation. `0.0.0.0` represents an offline registration.
   * @format ipv4
   * @minLength 1
   */
  ip_address: string;
}

export interface BusinessCustomerRepresentative {
  /**
   * Full name of the representative.
   */
  name: string;
  /**
   * Email address of the representative.
   */
  email?: string | null;
  /**
   * Phone number of the representative.
   */
  phone?: string | null;
}

export type SimulatedCustomerOutcome = 'standard' | 'verified' | 'rejected' | 'review';

export interface CustomerRetrieveParams {
  /**
   * For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface CustomerUpdateParams {
  /**
   * Header param: For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Header param: Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
  /**
   * Body param: Full name for an individual customer or business name for a business customer.
   */
  name: string;
  /**
   * Body param: Customer email address.
   * @format email
   */
  email: string;
  /**
   * Body param: Customer postal address. When provided, the object must include all required fields.
   */
  address?: CustomerAddress | null;
  /**
   * Body param: Customer phone number in E.164 format.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  phone: string;
  /**
   * Body param
   */
  compliance_profile?: UnmaskedComplianceProfile | null;
  /**
   * Body param: Unique identifier for the customer in your system.
   */
  external_id?: string | null;
  /**
   * Body param
   */
  device: CustomerDevice;
  /**
   * Body param
   */
  status: CustomerStatus;
  /**
   * Body param: Up to 20 user-defined key-value pairs associated with the customer.
   */
  metadata?: Record<string, string> | null;
}

export interface CustomerDeleteParams {
  /**
   * For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
}

export interface CustomerListParams {
  /**
   * Query param: Page number for paginated results. Starts at 1.
   * @default 1
   * @format int32
   */
  page_number?: number;
  /**
   * Query param: Number of results per page. Maximum: 1000.
   * @default 100
   * @format int32
   */
  page_size?: number;
  /**
   * Query param: Field used to sort the results.
   */
  sort_by?: 'name' | 'created_at';
  /**
   * Query param: Order in which to sort the results.
   * @default asc
   */
  sort_order?: AccountsAPI.SortOrder;
  /**
   * Query param: Start date for filtering by `created_at` date.
   * @format date-time
   */
  created_from?: string;
  /**
   * Query param: End date for filtering by `created_at` date.
   * @format date-time
   */
  created_to?: string;
  /**
   * Query param: Filter customers by `name` (partial match).
   */
  name?: string;
  /**
   * Query param: Filter by your system's `external_id`.
   */
  external_id?: string;
  /**
   * Query param: Filter customers by `email` address.
   */
  email?: string;
  /**
   * Query param: Filter customers by their current `status`.
   */
  status?: Array<CustomerStatus>;
  /**
   * Query param: General search term to filter customers.
   */
  search_text?: string;
  /**
   * Query param: Filter by customer type `individual` or `business`.
   */
  types?: Array<CustomerType>;
  /**
   * Header param: For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface CustomerCreateParams {
  /**
   * Header param: For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Header param: Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
  /**
   * Body param: Full name for an individual customer or business name for a business customer.
   */
  name: string;
  /**
   * Body param
   */
  type: CustomerType;
  /**
   * Body param: Customer email address.
   * @format email
   */
  email: string;
  /**
   * Body param: Customer postal address. When provided, the object must include all required fields.
   */
  address?: CustomerAddress | null;
  /**
   * Body param: Customer phone number in E.164 format. A mobile number is preferred.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  phone: string;
  /**
   * Body param: Customer compliance profile. When provided, the object must include all fields required for the customer type.
   */
  compliance_profile?: UnmaskedComplianceProfile | null;
  /**
   * Body param: Unique identifier for the customer in your system.
   */
  external_id?: string | null;
  /**
   * Body param
   */
  device: CustomerDevice;
  /**
   * Body param: Up to 20 user-defined key-value pairs associated with the customer.
   */
  metadata?: Record<string, string> | null;
  /**
   * Body param
   */
  config?: CustomerConfiguration;
}

export interface CustomerListUnmaskedParams {
  /**
   * For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface CustomerRefreshReviewParams {
  /**
   * For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
}
Customers.Review = Review;

export declare namespace Customers {
  export {
    type CustomerResponse as CustomerResponse,
    type CustomerSummaryList as CustomerSummaryList,
    type UnmaskedCustomerResponse as UnmaskedCustomerResponse,
    type Customer as Customer,
    type CustomerSummary as CustomerSummary,
    type UnmaskedCustomer as UnmaskedCustomer,
    type CustomerType as CustomerType,
    type CustomerStatus as CustomerStatus,
    type CustomerAddress as CustomerAddress,
    type ComplianceProfile as ComplianceProfile,
    type MaskedCustomerDevice as MaskedCustomerDevice,
    type CustomerConfiguration as CustomerConfiguration,
    type UnmaskedComplianceProfile as UnmaskedComplianceProfile,
    type CustomerDevice as CustomerDevice,
    type BusinessCustomerRepresentative as BusinessCustomerRepresentative,
    type SimulatedCustomerOutcome as SimulatedCustomerOutcome,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerDeleteParams as CustomerDeleteParams,
    type CustomerListParams as CustomerListParams,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerListUnmaskedParams as CustomerListUnmaskedParams,
    type CustomerRefreshReviewParams as CustomerRefreshReviewParams,
  };

  export {
    Review as Review,
    type CustomerReviewResponse as CustomerReviewResponse,
    type CustomerReview as CustomerReview,
    type CustomerIdentityVerification as CustomerIdentityVerification,
    type VerificationDecision as VerificationDecision,
    type IdentityVerificationBreakdown as IdentityVerificationBreakdown,
    type IdentityVerificationAlerts as IdentityVerificationAlerts,
    type IdentityVerificationWatchlist as IdentityVerificationWatchlist,
    type CustomerKYCVerification as CustomerKYCVerification,
    type ReputationCheck as ReputationCheck,
    type CorrelationBucket as CorrelationBucket,
    type IdentityVerificationWatchlistMatch as IdentityVerificationWatchlistMatch,
    type ReputationInsights as ReputationInsights,
    type ReviewListParams as ReviewListParams,
    type ReviewSetVerificationDecisionParams as ReviewSetVerificationDecisionParams,
  };
}
