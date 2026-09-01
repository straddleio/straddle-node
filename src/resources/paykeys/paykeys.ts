// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as BridgeAPI from '../bridge';
import type * as AccountsAPI from '../accounts';
import * as ReviewAPI from './review';
import {
  Review,
  type PaykeyReviewResponse,
  type PaykeyReview,
  type PaykeyVerificationDetails,
  type PaykeyVerificationResult,
  type PaykeyVerificationBreakdown,
  type AccountNameMatchDetails,
  type AccountValidationDetails,
  type ReviewSetVerificationDecisionParams,
  type ReviewListParams,
} from './review';

export class Paykeys extends APIResource {
  review: ReviewAPI.Review = new ReviewAPI.Review(this._client);

  /**
   * Returns a paykey by `id`, including the masked paykey value and bank account details.
   *
   * @param {string} id - Unique identifier for the paykey.
   * @param {PaykeyRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BridgeAPI.PaykeyResponse>} OK
   *
   * @example
   * ```ts
   * const paykey = await client.paykeys.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    id: string,
    params: PaykeyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BridgeAPI.PaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/paykeys/${id}`, {
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
   * Returns a paykey by `id`, including the full paykey value and unmasked bank account details. Straddle must enable this endpoint for your account. Use this endpoint only when unmasked data is necessary.
   *
   * @param {string} id - Unique identifier for the paykey.
   * @param {PaykeyListUnmaskedParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UnmaskedPaykeyResponse>} OK
   *
   * @example
   * ```ts
   * const unmaskedPaykey = await client.paykeys.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  listUnmasked(
    id: string,
    params: PaykeyListUnmaskedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnmaskedPaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/paykeys/${id}/unmasked`, {
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
   * Returns a paginated list of paykeys for the account. Optional query parameters filter, search, and sort the results.
   *
   * @param {PaykeyListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PaykeySummaryList>} OK
   *
   * @example
   * ```ts
   * const paykeySummaryList = await client.paykeys.list({
   *   page_number: 1,
   *   page_size: 100,
   *   sort_order: 'asc',
   * });
   * ```
   */
  list(
    params: PaykeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaykeySummaryList> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      ...query
    } = params ?? {};
    return this._client.get('/v1/paykeys', {
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
   * Returns a paykey by `id`, including the full paykey value and masked bank account details.
   *
   * @param {string} id - Unique identifier for the paykey.
   * @param {PaykeyRevealParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BridgeAPI.RevealedPaykeyResponse>} OK
   *
   * @example
   * ```ts
   * const revealedPaykey = await client.paykeys.reveal('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  reveal(
    id: string,
    params: PaykeyRevealParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BridgeAPI.RevealedPaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/paykeys/${id}/reveal`, {
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
   * Cancels a paykey so it cannot be used for new payments.
   *
   * @param {string} id - Unique identifier for the paykey.
   * @param {PaykeyCancelParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BridgeAPI.PaykeyResponse>} OK
   *
   * @example
   * ```ts
   * const paykey = await client.paykeys.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  cancel(
    id: string,
    params: PaykeyCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BridgeAPI.PaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params ?? {};
    return this._client.put(__scalarPath`/v1/paykeys/${id}/cancel`, {
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
   * Starts a new verification review for a paykey. The review runs asynchronously. Webhooks and the paykey review endpoint return updated results.
   *
   * @param {string} id - Unique identifier for the paykey.
   * @param {PaykeyRefreshReviewParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BridgeAPI.PaykeyResponse>} Accepted
   *
   * @example
   * ```ts
   * const paykey = await client.paykeys.refreshReview('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  refreshReview(
    id: string,
    params: PaykeyRefreshReviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BridgeAPI.PaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
    } = params ?? {};
    return this._client.put(__scalarPath`/v1/paykeys/${id}/refresh_review`, {
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
   * Starts an asynchronous balance refresh for a paykey. The response returns the paykey before the refresh finishes.
   *
   * @param {string} id - Unique identifier for the paykey.
   * @param {PaykeyRefreshBalanceParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BridgeAPI.PaykeyResponse>} Accepted
   *
   * @example
   * ```ts
   * const paykey = await client.paykeys.refreshBalance('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  refreshBalance(
    id: string,
    params: PaykeyRefreshBalanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BridgeAPI.PaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
    } = params ?? {};
    return this._client.put(__scalarPath`/v1/paykeys/${id}/refresh_balance`, {
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
   * Unblocks a paykey that was blocked by an `R29` return. The paykey must not have been unblocked before.
   *
   * @param {string} id - Unique identifier for the paykey.
   * @param {PaykeyUnblockParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BridgeAPI.PaykeyResponse>} OK
   *
   * @example
   * ```ts
   * const paykey = await client.paykeys.unblock('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  unblock(
    id: string,
    params: PaykeyUnblockParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BridgeAPI.PaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params ?? {};
    return this._client.patch(__scalarPath`/v1/paykeys/${id}/unblock`, {
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
}

export interface UnmaskedPaykeyResponse {
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
  data: UnmaskedPaykey;
}

export interface PaykeySummaryList {
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
   * The `data` field contains the paykeys on this page.
   */
  data: Array<PaykeySummary>;
}

export interface UnmaskedPaykey {
  /**
   * Unique identifier for the paykey.
   * @format uuid
   */
  id: string;
  /**
   * Human-readable label for the paykey.
   */
  label: string;
  source: BridgeAPI.PaykeySource;
  status: BridgeAPI.PaykeyStatus;
  /**
   * Timestamp of when the paykey was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the most recent update to the paykey.
   * @format date-time
   */
  updated_at: string;
  /**
   * Full paykey value for creating payments. Store this value securely.
   */
  paykey: string;
  config: BridgeAPI.PaykeyConfiguration;
  /**
   * Unique identifier for the customer associated with the paykey.
   * @format uuid
   */
  customer_id?: string | null;
  /**
   * Name of the financial institution.
   */
  institution_name?: string | null;
  status_details?: BridgeAPI.PaymentStatusDetails;
  /**
   * Expiration date and time of the paykey, if applicable.
   * @format date-time
   */
  expires_at?: string | null;
  bank_data?: UnmaskedPaykeyBankDetails;
  /**
   * Up to 20 user-defined key-value pairs associated with the paykey.
   */
  metadata?: Record<string, string> | null;
  balance?: BridgeAPI.PaykeyBalanceDetails;
  /**
   * Unique identifier for the paykey in your system.
   */
  external_id?: string | null;
}

export interface PaykeySummary {
  /**
   * Unique identifier for the paykey.
   * @format uuid
   */
  id: string;
  /**
   * Display label combining the bank name and masked account number.
   */
  label: string;
  source: BridgeAPI.PaykeySource;
  status: BridgeAPI.PaykeyStatus;
  /**
   * Timestamp of when the paykey was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the most recent update to the paykey.
   * @format date-time
   */
  updated_at: string;
  /**
   * Masked paykey value.
   */
  paykey: string;
  config: BridgeAPI.PaykeyConfiguration;
  /**
   * Unique identifier for the customer associated with the paykey.
   * @format uuid
   */
  customer_id?: string | null;
  /**
   * Name of the financial institution.
   */
  institution_name?: string | null;
  status_details?: BridgeAPI.PaymentStatusDetails;
  /**
   * Expiration date and time of the paykey, if applicable.
   * @format date-time
   */
  expires_at?: string | null;
  bank_data?: BridgeAPI.PaykeyBankDetails;
  /**
   * Unique identifier for the paykey in your system.
   */
  external_id?: string | null;
  /**
   * Whether the paykey is eligible for client-initiated unblocking. `true` only when the paykey is blocked by an `R29` return and has not been unblocked before. `false` for other blocked paykeys. `null` when the paykey is not blocked.
   */
  unblock_eligible?: boolean | null;
}

export interface UnmaskedPaykeyBankDetails {
  /**
   * Bank routing number.
   * @minLength 9
   * @maxLength 9
   */
  routing_number: string;
  /**
   * Bank account number.
   */
  account_number: string;
  account_type: BridgeAPI.AccountType;
}

export interface PaykeyRetrieveParams {
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

export interface PaykeyListUnmaskedParams {
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

export interface PaykeyListParams {
  /**
   * Query param: Filter paykeys by related customer ID.
   * @format uuid
   */
  customer_id?: string;
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
   * Query param: Filter paykeys by their current status.
   */
  status?: Array<BridgeAPI.PaykeyStatus>;
  /**
   * Query param: Field used to sort the results.
   */
  sort_by?: 'institution_name' | 'expires_at' | 'created_at';
  /**
   * Query param: Order in which to sort the results.
   * @default asc
   */
  sort_order?: AccountsAPI.SortOrder;
  /**
   * Query param: Filter paykeys by their source.
   */
  source?: Array<BridgeAPI.PaykeySource>;
  /**
   * Query param: Filters paykeys by unblock eligibility. `true` returns blocked paykeys that are eligible because of an `R29` return and have not been unblocked before. `false` returns blocked paykeys that are not eligible.
   */
  unblock_eligible?: boolean;
  /**
   * Query param: General search term to filter paykeys.
   */
  search_text?: string;
  /**
   * Query param: Start date for filtering by creation date.
   * @format date-time
   */
  created_from?: string;
  /**
   * Query param: End date for filtering by creation date.
   * @format date-time
   */
  created_to?: string;
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

export interface PaykeyRevealParams {
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

export interface PaykeyCancelParams {
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
   * Body param: Reason for canceling the paykey.
   */
  reason?: string | null;
}

export interface PaykeyRefreshReviewParams {
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

export interface PaykeyRefreshBalanceParams {
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

export interface PaykeyUnblockParams {
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
   * Body param: Optional message describing the reason for unblocking.
   */
  message?: string | null;
}
Paykeys.Review = Review;

export declare namespace Paykeys {
  export {
    type UnmaskedPaykeyResponse as UnmaskedPaykeyResponse,
    type PaykeySummaryList as PaykeySummaryList,
    type UnmaskedPaykey as UnmaskedPaykey,
    type PaykeySummary as PaykeySummary,
    type UnmaskedPaykeyBankDetails as UnmaskedPaykeyBankDetails,
    type PaykeyRetrieveParams as PaykeyRetrieveParams,
    type PaykeyListUnmaskedParams as PaykeyListUnmaskedParams,
    type PaykeyListParams as PaykeyListParams,
    type PaykeyRevealParams as PaykeyRevealParams,
    type PaykeyCancelParams as PaykeyCancelParams,
    type PaykeyRefreshReviewParams as PaykeyRefreshReviewParams,
    type PaykeyRefreshBalanceParams as PaykeyRefreshBalanceParams,
    type PaykeyUnblockParams as PaykeyUnblockParams,
  };

  export {
    Review as Review,
    type PaykeyReviewResponse as PaykeyReviewResponse,
    type PaykeyReview as PaykeyReview,
    type PaykeyVerificationDetails as PaykeyVerificationDetails,
    type PaykeyVerificationResult as PaykeyVerificationResult,
    type PaykeyVerificationBreakdown as PaykeyVerificationBreakdown,
    type AccountNameMatchDetails as AccountNameMatchDetails,
    type AccountValidationDetails as AccountValidationDetails,
    type ReviewSetVerificationDecisionParams as ReviewSetVerificationDecisionParams,
    type ReviewListParams as ReviewListParams,
  };
}
