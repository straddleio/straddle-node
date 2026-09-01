// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Returns the account with the specified ID.
   *
   * @param {string} accountID - The ID of the account.
   * @param {AccountRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountResponse>} OK
   *
   * @example
   * ```ts
   * const account = await client.accounts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    accountID: string,
    params: AccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountResponse> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID } = params ?? {};
    return this._client.get(__scalarPath`/v1/accounts/${accountID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates an account's business profile, metadata, and external ID, then returns the account.
   *
   * @param {string} accountID - The ID of the account.
   * @param {AccountUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountResponse>} OK
   *
   * @example
   * ```ts
   * const account = await client.accounts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   business_profile: {
   *     name: '',
   *     website: 'https://example.com',
   *   },
   * });
   * ```
   */
  update(
    accountID: string,
    params: AccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountResponse> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.put(__scalarPath`/v1/accounts/${accountID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates a business account in the specified organization and returns the account.
   *
   * @param {AccountCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountResponse>} Created
   *
   * @example
   * ```ts
   * const account = await client.accounts.create({
   *   organization_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   account_type: 'business',
   *   business_profile: {
   *     name: '',
   *     website: 'https://example.com',
   *   },
   *   access_level: 'standard',
   * });
   * ```
   */
  create(params: AccountCreateParams, options?: RequestOptions): APIPromise<AccountResponse> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/accounts', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a paginated list of accounts for your platform. Filter the list by status, type, external ID, or text search.
   *
   * @param {AccountListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountList>} OK
   *
   * @example
   * ```ts
   * const accountList = await client.accounts.list({
   *   page_number: 1,
   *   page_size: 100,
   *   sort_by: 'id',
   *   sort_order: 'asc',
   * });
   * ```
   */
  list(params: AccountListParams | null | undefined = {}, options?: RequestOptions): APIPromise<AccountList> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID, ...query } = params ?? {};
    return this._client.get('/v1/accounts', {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Starts onboarding and records the account's acceptance of Straddle's Terms of Service. The account must have at least one representative and one linked bank account. This operation also moves all associated representatives and linked bank accounts to `onboarding`.
   *
   * @param {string} accountID - The ID of the account.
   * @param {AccountOnboardParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountResponse>} Created
   *
   * @example
   * ```ts
   * const account = await client.accounts.onboard('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   terms_of_service: {
   *     accepted_date: '2024-01-01T00:00:00.000Z',
   *     agreement_url: '',
   *     agreement_type: 'embedded',
   *   },
   * });
   * ```
   */
  onboard(
    accountID: string,
    params: AccountOnboardParams,
    options?: RequestOptions,
  ): APIPromise<AccountResponse> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post(__scalarPath`/v1/accounts/${accountID}/onboard`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Simulates an account status transition to `onboarding` or `active` in the sandbox and returns the account.
   *
   * @param {string} accountID - The ID of the account.
   * @param {AccountSimulateOnboardingParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountResponse>} Created
   *
   * @example
   * ```ts
   * const account = await client.accounts.simulateOnboarding('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  simulateOnboarding(
    accountID: string,
    params: AccountSimulateOnboardingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountResponse> {
    const {
      final_status,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
    } = params ?? {};
    return this._client.post(__scalarPath`/v1/accounts/${accountID}/simulate`, {
      query: { final_status },
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }
}

export interface AccountResponse {
  /**
   * Metadata for an API request.
   */
  meta: ResponseMetadata;
  /**
   * Indicates how the response content is structured.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of objects.
   * - `error` means `error` contains error details.
   * - `none` means the response has no data.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
  data: Account;
}

export interface AccountList {
  /**
   * Metadata for an API request and a page of results.
   */
  meta: PageMetadata;
  /**
   * Indicates how the response content is structured.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of objects.
   * - `error` means `error` contains error details.
   * - `none` means the response has no data.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
  /**
   * Accounts returned for this page.
   */
  data: Array<Account>;
}

/**
 * Metadata for an API request.
 */
export interface ResponseMetadata {
  /**
   * Unique identifier for the API request.
   * @format uuid
   */
  api_request_id: string;
  /**
   * UTC timestamp for the API request.
   * @format date-time
   */
  api_request_timestamp: string;
}

export interface Account {
  /**
   * Straddle's unique ID for the account.
   * @format uuid
   */
  id: string;
  /**
   * ID of the organization that owns the account.
   * @format uuid
   */
  organization_id: string;
  /**
   * The account type. Only `business` is supported.
   */
  type: 'business';
  /**
   * The current lifecycle status of the account.
   */
  status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';
  status_detail: AccountStatusDetail;
  /**
   * The account access level. `standard` provides normal account access, including access to the Straddle dashboard. `managed` means the platform manages the account and account users cannot access the Straddle dashboard.
   */
  access_level: 'standard' | 'managed';
  business_profile?: AccountBusinessProfile;
  capabilities?: AccountCapabilities;
  settings?: AccountPaymentSettings;
  terms_of_service?: TermsOfService;
  /**
   * Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string | null> | null;
  /**
   * Your unique ID for the account.
   */
  external_id?: string | null;
  /**
   * Date and time when Straddle created the account.
   * @format date-time
   */
  created_at?: string | null;
  /**
   * Date and time of the most recent account update.
   * @format date-time
   */
  updated_at?: string | null;
}

/**
 * Metadata for an API request and a page of results.
 */
export interface PageMetadata {
  /**
   * Unique identifier for the API request.
   * @format uuid
   */
  api_request_id: string;
  /**
   * UTC timestamp for the API request.
   * @format date-time
   */
  api_request_timestamp: string;
  /**
   * Total number of items available across all pages.
   * @format int32
   */
  total_items: number;
  /**
   * Current page number.
   * @format int32
   */
  page_number: number;
  /**
   * Number of items per page.
   * @format int32
   */
  page_size: number;
  /**
   * Maximum page size allowed for this endpoint.
   * @format int32
   */
  max_page_size: number;
  /**
   * Field used to sort the results.
   */
  sort_by: string;
  /**
   * Sort direction for the results.
   */
  sort_order: SortOrder;
  /**
   * Total number of pages available.
   * @format int32
   */
  total_pages: number;
}

export interface AccountStatusDetail {
  /**
   * Machine-readable reason for the account's status.
   */
  reason:
    | 'unverified'
    | 'in_review'
    | 'pending'
    | 'stuck'
    | 'verified'
    | 'failed_verification'
    | 'disabled'
    | 'terminated'
    | 'new';
  /**
   * System that produced the account status detail.
   */
  source: 'watchtower';
  /**
   * Machine-readable status code from the source.
   */
  code: string;
  /**
   * Human-readable description of the account's status.
   */
  message: string;
}

export interface AccountBusinessProfile {
  /**
   * The operating or trade name of the business.
   */
  name: string;
  /**
   * URL of the business's primary website.
   * @format uri
   */
  website: string;
  /**
   * The official registered name of the business.
   */
  legal_name?: string | null;
  /**
   * Description of the business and its products or services.
   */
  description?: string | null;
  /**
   * How the business plans to use Straddle.
   */
  use_case?: string | null;
  /**
   * Business tax identification number, such as a US Employer Identification Number (EIN).
   * @pattern ^[0-9]{9}$
   */
  tax_id?: string | null;
  /**
   * Primary business phone number in E.164 format.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  phone?: string | null;
  /**
   * Optional business address. If provided, `line1`, `city`, `state`, and `postal_code` are required.
   */
  address?: AccountAddress | null;
  industry?: AccountIndustry;
  support_channels?: AccountSupportChannels;
}

export interface AccountCapabilities {
  payment_types: AccountPaymentCapabilities;
  customer_types: AccountCustomerCapabilities;
  consent_types: AccountConsentCapabilities;
}

export interface AccountPaymentSettings {
  charges: AccountChargeSettings;
  payouts: AccountPayoutSettings;
}

export interface TermsOfService {
  /**
   * Date and time when the account accepted the Terms of Service.
   * @format date-time
   */
  accepted_date: string;
  /**
   * URL of the accepted agreement.
   */
  agreement_url: string | null;
  /**
   * Agreement type. Use `embedded` unless Straddle has enabled the platform for `direct` agreements.
   */
  agreement_type: 'embedded' | 'direct';
  /**
   * IP address used to accept the Terms of Service.
   */
  accepted_ip?: string | null;
  /**
   * User agent of the browser or application that accepted the Terms of Service.
   */
  accepted_user_agent?: string | null;
}

/**
 * Sort direction for the results.
 */
export type SortOrder = 'asc' | 'desc';

/**
 * Optional business address. If provided, `line1`, `city`, `state`, and `postal_code` are required.
 */
export interface AccountAddress {
  /**
   * Primary address line, such as a street address or PO Box.
   */
  line1: string | null;
  /**
   * City, district, suburb, town, or village.
   */
  city: string | null;
  /**
   * Two-letter state code.
   * @pattern ^[A-Z]{2}$
   */
  state: string | null;
  /**
   * Postal or ZIP code.
   * @pattern ^[0-9]{5}(-[0-9]{4})?$
   */
  postal_code: string | null;
  /**
   * Secondary address line, such as an apartment, suite, unit, or building.
   */
  line2?: string | null;
  /**
   * Two-letter ISO 3166-1 country code. If omitted, Straddle applies US address validation.
   */
  country?: string | null;
}

export interface AccountIndustry {
  /**
   * Merchant category code (MCC) that best describes the business. If omitted, provide both `sector` and `category`.
   */
  mcc?: string | null;
  /**
   * Business sector. Required when `mcc` is omitted.
   */
  sector?: string | null;
  /**
   * Industry category. Required when `mcc` is omitted.
   */
  category?: string | null;
}

export interface AccountSupportChannels {
  /**
   * Email address for customer support.
   * @format email
   */
  email?: string | null;
  /**
   * Customer support phone number in E.164 format.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  phone?: string | null;
  /**
   * URL of the business's customer support page or contact form.
   * @format uri
   */
  url?: string | null;
}

export interface AccountPaymentCapabilities {
  charges: AccountCapability;
  payouts: AccountCapability;
}

export interface AccountCustomerCapabilities {
  individuals: AccountCapability;
  businesses: AccountCapability;
}

export interface AccountConsentCapabilities {
  /**
   * Signed-agreement payment authorization capability for the account.
   */
  signed_agreement: AccountCapability;
  /**
   * Internet payment authorization capability for the account.
   */
  internet: AccountCapability;
}

export interface AccountChargeSettings {
  /**
   * Maximum amount in cents for one charge.
   * @format int32
   */
  max_amount: number;
  /**
   * Monthly charge amount limit in cents.
   * @format int32
   */
  monthly_amount: number;
  /**
   * Daily charge amount limit in cents.
   * @format int32
   */
  daily_amount: number;
  /**
   * Maximum number of charges per calendar month.
   * @format int32
   */
  monthly_count: number;
  /**
   * Funding schedule for charges. Straddle sets this value.
   */
  funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day';
  /**
   * ID of the linked bank account used for charge settlement. Straddle sets this value.
   * @format uuid
   */
  linked_bank_account_id: string;
}

export interface AccountPayoutSettings {
  /**
   * Maximum amount in cents for one payout.
   * @format int32
   */
  max_amount: number;
  /**
   * Monthly payout amount limit in cents.
   * @format int32
   */
  monthly_amount: number;
  /**
   * Daily payout amount limit in cents.
   * @format int32
   */
  daily_amount: number;
  /**
   * Maximum number of payouts per calendar month.
   * @format int32
   */
  monthly_count: number;
  /**
   * Funding schedule for payouts. Straddle sets this value.
   */
  funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day' | 'four_day' | 'five_day';
  /**
   * ID of the linked bank account used for payout settlement.
   * @format uuid
   */
  linked_bank_account_id: string;
}

export interface AccountCapability {
  /**
   * Status of the capability for the account.
   */
  capability_status: 'active' | 'inactive';
}

export interface AccountRetrieveParams {
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface AccountUpdateParams {
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
   * Body param
   */
  business_profile: AccountBusinessProfile;
  /**
   * Body param: Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string | null> | null;
  /**
   * Body param: Your unique ID for the account.
   */
  external_id?: string | null;
}

export interface AccountCreateParams {
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
   * Body param: ID of the organization that will own the account.
   * @format uuid
   */
  organization_id: string;
  /**
   * Body param: Account type. The only accepted value is `business`.
   */
  account_type: 'business';
  /**
   * Body param
   */
  business_profile: AccountBusinessProfile;
  /**
   * Body param: The account access level. `standard` provides normal account access, including access to the Straddle dashboard. `managed` means the platform manages the account and account users cannot access the Straddle dashboard.
   */
  access_level: 'standard' | 'managed';
  /**
   * Body param: Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string | null> | null;
  /**
   * Body param: Your unique ID for the account.
   */
  external_id?: string | null;
}

export interface AccountListParams {
  /**
   * Query param: Page number. Defaults to `1`.
   * @format int32
   */
  page_number?: number;
  /**
   * Query param: Number of results per page. Defaults to `100`. Maximum `1000`.
   * @format int32
   */
  page_size?: number;
  /**
   * Query param: Field used to sort results. Defaults to `id`.
   */
  sort_by?: string;
  /**
   * Query param: Sort direction. Defaults to `asc`.
   */
  sort_order?: 'asc' | 'desc';
  /**
   * Query param: Text to search for across account fields.
   */
  search_text?: string;
  /**
   * Query param: Account status to return.
   */
  status?: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';
  /**
   * Query param: Account type to return.
   */
  type?: 'business';
  /**
   * Query param: Your external ID for the account.
   */
  external_id?: string;
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface AccountOnboardParams {
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
   * Body param
   */
  terms_of_service: TermsOfService;
}

export interface AccountSimulateOnboardingParams {
  /**
   * Query param: Final account status to produce in the sandbox simulation.
   */
  final_status?: 'onboarding' | 'active';
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
}
export declare namespace Accounts {
  export {
    type AccountResponse as AccountResponse,
    type AccountList as AccountList,
    type ResponseMetadata as ResponseMetadata,
    type Account as Account,
    type PageMetadata as PageMetadata,
    type AccountStatusDetail as AccountStatusDetail,
    type AccountBusinessProfile as AccountBusinessProfile,
    type AccountCapabilities as AccountCapabilities,
    type AccountPaymentSettings as AccountPaymentSettings,
    type TermsOfService as TermsOfService,
    type SortOrder as SortOrder,
    type AccountAddress as AccountAddress,
    type AccountIndustry as AccountIndustry,
    type AccountSupportChannels as AccountSupportChannels,
    type AccountPaymentCapabilities as AccountPaymentCapabilities,
    type AccountCustomerCapabilities as AccountCustomerCapabilities,
    type AccountConsentCapabilities as AccountConsentCapabilities,
    type AccountChargeSettings as AccountChargeSettings,
    type AccountPayoutSettings as AccountPayoutSettings,
    type AccountCapability as AccountCapability,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountCreateParams as AccountCreateParams,
    type AccountListParams as AccountListParams,
    type AccountOnboardParams as AccountOnboardParams,
    type AccountSimulateOnboardingParams as AccountSimulateOnboardingParams,
  };
}
