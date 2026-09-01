// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as AccountsAPI from './accounts';

export class CapabilityRequests extends APIResource {
  /**
   * Creates one or more capability requests for an account and returns the resulting requests.
   *
   * @param {string} accountID - The ID of the account.
   * @param {CapabilityRequestCreateParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CapabilityRequestList>} Created
   *
   * @example
   * ```ts
   * const capabilityRequestList = await client.capabilityRequests.create('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  create(
    accountID: string,
    params: CapabilityRequestCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CapabilityRequestList> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params ?? {};
    return this._client.post(__scalarPath`/v1/accounts/${accountID}/capability_requests`, {
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
   * Returns a paginated list of capability requests for an account. Filter the list by capability type, category, or status.
   *
   * @param {string} accountID - The ID of the account.
   * @param {CapabilityRequestListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CapabilityRequestList>} OK
   *
   * @example
   * ```ts
   * const capabilityRequestList = await client.capabilityRequests.list('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   page_number: 1,
   *   page_size: 100,
   *   sort_by: 'id',
   *   sort_order: 'asc',
   * });
   * ```
   */
  list(
    accountID: string,
    params: CapabilityRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CapabilityRequestList> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID, ...query } = params ?? {};
    return this._client.get(__scalarPath`/v1/accounts/${accountID}/capability_requests`, {
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
}

export interface CapabilityRequestList {
  /**
   * Metadata for an API request and a page of results.
   */
  meta: AccountsAPI.PageMetadata;
  /**
   * Indicates how the response content is structured.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of objects.
   * - `error` means `error` contains error details.
   * - `none` means the response has no data.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
  /**
   * Capability requests returned for this page.
   */
  data: Array<CapabilityRequest>;
}

export interface CapabilityRequest {
  /**
   * Straddle's unique ID for the capability request.
   * @format uuid
   */
  id: string;
  /**
   * ID of the account associated with the capability request.
   * @format uuid
   */
  account_id: string;
  /**
   * Capability type requested within the category.
   */
  type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet';
  /**
   * Groups the requested capability. `payment_type` covers `charges` and `payouts`. `customer_type` covers `individuals` and `businesses`. `consent_type` covers `signed_agreement` and `internet` authorization.
   */
  category: 'payment_type' | 'customer_type' | 'consent_type';
  /**
   * Status of the capability request.
   */
  status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing';
  /**
   * Date and time when Straddle created the capability request.
   * @format date-time
   */
  created_at: string;
  /**
   * Date and time of the most recent capability request update.
   * @format date-time
   */
  updated_at: string;
  /**
   * Whether the request enables or disables the capability.
   */
  enable: boolean;
  /**
   * Limits and other settings requested for the capability.
   */
  settings?: Record<string, unknown> | null;
}

export interface CapabilityRequestCreateParams {
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
   * Body param: Requested charge capability and limits.
   */
  charges?: CapabilityRequestCreateParams.Charges;
  /**
   * Body param: Requested payout capability and limits.
   */
  payouts?: CapabilityRequestCreateParams.Payouts;
  /**
   * Body param: Request to enable or disable internet and mobile payment authorization.
   */
  internet?: CapabilityRequestCreateParams.Internet;
  /**
   * Body param: Request to enable or disable payments from individuals.
   */
  individuals?: CapabilityRequestCreateParams.Individuals;
  /**
   * Body param: Request to enable or disable payments from businesses.
   */
  businesses?: CapabilityRequestCreateParams.Businesses;
  /**
   * Body param: Request to enable or disable signed-agreement payment authorization.
   */
  signed_agreement?: CapabilityRequestCreateParams.SignedAgreement;
}

export namespace CapabilityRequestCreateParams {
  export interface Charges {
    /**
     * Whether to enable or disable charges for the account.
     */
    enable: boolean;
    /**
     * Maximum amount in cents for one charge.
     * @format double
     */
    max_amount: number;
    /**
     * Daily charge amount limit in cents.
     * @format double
     */
    daily_amount: number;
    /**
     * Maximum number of charges per calendar month.
     * @format int32
     */
    monthly_count: number;
    /**
     * Monthly charge amount limit in cents.
     * @format double
     */
    monthly_amount: number;
  }

  export interface Payouts {
    /**
     * Whether to enable or disable payouts for the account.
     */
    enable: boolean;
    /**
     * Maximum amount in cents for one payout.
     * @format double
     */
    max_amount: number;
    /**
     * Daily payout amount limit in cents.
     * @format double
     */
    daily_amount: number;
    /**
     * Maximum number of payouts per calendar month.
     * @format int32
     */
    monthly_count: number;
    /**
     * Monthly payout amount limit in cents.
     * @format double
     */
    monthly_amount: number;
  }

  export interface Internet {
    /**
     * Whether the request enables or disables the capability.
     */
    enable: boolean;
  }

  export interface Individuals {
    /**
     * Whether the request enables or disables the capability.
     */
    enable: boolean;
  }

  export interface Businesses {
    /**
     * Whether the request enables or disables the capability.
     */
    enable: boolean;
  }

  export interface SignedAgreement {
    /**
     * Whether the request enables or disables the capability.
     */
    enable: boolean;
  }
}

export interface CapabilityRequestListParams {
  /**
   * Query param: Capability type to return.
   */
  type?: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet';
  /**
   * Query param: Capability category to return.
   */
  category?: 'payment_type' | 'customer_type' | 'consent_type';
  /**
   * Query param: Capability request status to return.
   */
  status?: 'active' | 'inactive' | 'in_review' | 'rejected';
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
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}
export declare namespace CapabilityRequests {
  export {
    type CapabilityRequestList as CapabilityRequestList,
    type CapabilityRequest as CapabilityRequest,
    type CapabilityRequestCreateParams as CapabilityRequestCreateParams,
    type CapabilityRequestListParams as CapabilityRequestListParams,
  };
}
