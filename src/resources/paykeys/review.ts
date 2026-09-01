// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as BridgeAPI from '../bridge';
import type * as AccountsAPI from '../accounts';

export class Review extends APIResource {
  /**
   * Updates the verification decision for a paykey. The paykey's current `status` must be `review`.
   *
   * @param {string} id - Unique identifier for the paykey.
   * @param {ReviewSetVerificationDecisionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BridgeAPI.PaykeyResponse>} OK
   *
   * @example
   * ```ts
   * const paykey = await client.paykeys.review.setVerificationDecision('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   status: 'active',
   * });
   * ```
   */
  setVerificationDecision(
    id: string,
    params: ReviewSetVerificationDecisionParams,
    options?: RequestOptions,
  ): APIPromise<BridgeAPI.PaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.patch(__scalarPath`/v1/paykeys/${id}/review`, {
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
   * Returns a paykey verification review, including the decision, score breakdowns, and result codes.
   *
   * @param {string} id - Unique identifier for the paykey.
   * @param {ReviewListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PaykeyReviewResponse>} OK
   *
   * @example
   * ```ts
   * const paykeyReview = await client.paykeys.review.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  list(
    id: string,
    params: ReviewListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaykeyReviewResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/paykeys/${id}/review`, {
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
}

export interface PaykeyReviewResponse {
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
  data: PaykeyReview;
}

export interface PaykeyReview {
  paykey_details: BridgeAPI.Paykey;
  verification_details?: PaykeyVerificationDetails;
}

export interface PaykeyVerificationDetails {
  /**
   * Unique identifier for the verification details.
   * @format uuid
   */
  id: string;
  decision: PaykeyVerificationResult;
  /**
   * Messages returned by the paykey verification process.
   */
  messages: Record<string, string>;
  breakdown: PaykeyVerificationBreakdown;
  /**
   * Timestamp of when the verification was initiated.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the most recent update to the verification details.
   * @format date-time
   */
  updated_at: string;
}

export type PaykeyVerificationResult = 'accept' | 'reject' | 'review';

export interface PaykeyVerificationBreakdown {
  name_match?: AccountNameMatchDetails;
  account_validation?: AccountValidationDetails;
}

export interface AccountNameMatchDetails {
  decision: PaykeyVerificationResult;
  /**
   * Result codes returned by the name-match check.
   */
  codes: Array<string>;
  /**
   * Account-holder names returned by the financial institution.
   */
  names_on_account?: Array<string> | null;
  /**
   * Account-holder name that matched the customer record.
   */
  matched_name?: string | null;
  /**
   * Customer name evaluated during account verification.
   */
  customer_name?: string | null;
  /**
   * Strength of the match between the customer name and account-holder names.
   * @format double
   */
  correlation_score?: number | null;
  /**
   * Reason for the name-match decision.
   */
  reason?: string | null;
}

export interface AccountValidationDetails {
  decision: PaykeyVerificationResult;
  /**
   * Result codes returned by the account-validation check.
   */
  codes: Array<string>;
  /**
   * Reason for the account-validation decision.
   */
  reason?: string | null;
}

export interface ReviewSetVerificationDecisionParams {
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
   * Body param
   */
  status: 'active' | 'rejected';
}

export interface ReviewListParams {
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
export declare namespace Review {
  export {
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
