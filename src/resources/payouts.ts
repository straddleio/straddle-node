// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';
import type { Uploadable } from '../core/uploads';
import type * as ChargesAPI from './charges';
import type * as AccountsAPI from './accounts';
import type * as BridgeAPI from './bridge';
import type * as CustomersAPI from './customers/customers';

export class Payouts extends APIResource {
  /**
   * Returns a payout by its unique identifier.
   *
   * @param {string} id - Unique identifier for the payout.
   * @param {PayoutRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargesAPI.PayoutResponse>} OK
   *
   * @example
   * ```ts
   * const payout = await client.payouts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    id: string,
    params: PayoutRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargesAPI.PayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/payouts/${id}`, {
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
   * Updates the description, amount, `payment_date`, or metadata. The payout must have a status of `created` or `on_hold`.
   *
   * @param {string} id - Unique identifier for the payout.
   * @param {PayoutUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargesAPI.PayoutResponse>} OK
   *
   * @example
   * ```ts
   * const payout = await client.payouts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   description: '',
   *   amount: 10000,
   *   payment_date: '2024-01-01',
   * });
   * ```
   */
  update(
    id: string,
    params: PayoutUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ChargesAPI.PayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.put(__scalarPath`/v1/payouts/${id}`, {
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
   * Creates a payout to a customer's bank account. Straddle submits the payout for processing on `payment_date` unless the payout is on hold.
   *
   * @param {PayoutCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargesAPI.PayoutResponse>} Created
   *
   * @example
   * ```ts
   * const payout = await client.payouts.create({
   *   paykey: '',
   *   description: 'Vendor invoice payment',
   *   amount: 10000,
   *   currency: 'USD',
   *   payment_date: '2024-01-01',
   *   device: {
   *     ip_address: '192.168.1.1',
   *   },
   *   external_id: '',
   * });
   * ```
   */
  create(params: PayoutCreateParams, options?: RequestOptions): APIPromise<ChargesAPI.PayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/payouts', {
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
   * Places a payout on hold to prevent submission for processing. The payout must have a status of `created` or `scheduled`.
   *
   * @param {string} id - Unique identifier for the payout.
   * @param {PayoutHoldParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargesAPI.PayoutResponse>} OK
   *
   * @example
   * ```ts
   * const payout = await client.payouts.hold('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   reason: '',
   * });
   * ```
   */
  hold(
    id: string,
    params: PayoutHoldParams,
    options?: RequestOptions,
  ): APIPromise<ChargesAPI.PayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.put(__scalarPath`/v1/payouts/${id}/hold`, {
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
   * Releases a payout from `on_hold` and returns it to `created` for submission on `payment_date`.
   *
   * @param {string} id - Unique identifier for the payout.
   * @param {PayoutReleaseParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargesAPI.PayoutResponse>} OK
   *
   * @example
   * ```ts
   * const payout = await client.payouts.release('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   reason: '',
   * });
   * ```
   */
  release(
    id: string,
    params: PayoutReleaseParams,
    options?: RequestOptions,
  ): APIPromise<ChargesAPI.PayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.put(__scalarPath`/v1/payouts/${id}/release`, {
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
   * Cancels a payout. The payout must have a status of `created`, `scheduled`, or `on_hold`.
   *
   * @param {string} id - Unique identifier for the payout.
   * @param {PayoutCancelParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargesAPI.PayoutResponse>} OK
   *
   * @example
   * ```ts
   * const payout = await client.payouts.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   reason: '',
   * });
   * ```
   */
  cancel(
    id: string,
    params: PayoutCancelParams,
    options?: RequestOptions,
  ): APIPromise<ChargesAPI.PayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.put(__scalarPath`/v1/payouts/${id}/cancel`, {
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
   * Return a payout with its sensitive fields unmasked.
   *
   * @param {string} id - Unique identifier for the payout.
   * @param {PayoutListUnmaskedParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UnmaskedPayoutResponse>} OK
   *
   * @example
   * ```ts
   * const unmaskedPayout = await client.payouts.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  listUnmasked(
    id: string,
    params: PayoutListUnmaskedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnmaskedPayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/payouts/${id}/unmask`, {
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
   * Creates a new payout from a failed, reversed, or cancelled payout. The request can override `description`, `external_id`, and `payment_date`. Other payment details come from the original payout.
   *
   * @param {string} id - Unique identifier for the payout.
   * @param {PayoutResubmitParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargesAPI.PayoutResponse>} Created
   *
   * @example
   * ```ts
   * const payout = await client.payouts.resubmit('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  resubmit(
    id: string,
    params: PayoutResubmitParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargesAPI.PayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params ?? {};
    return this._client.post(__scalarPath`/v1/payouts/${id}/resubmit`, {
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
   * Uploads a proof-of-authorization document for a payout. A later upload adds another document and does not replace an existing one.
   *
   * @param {string} id - Unique identifier for the payout.
   * @param {PayoutUploadAuthorizationProofParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargesAPI.PayoutResponse>} Created
   *
   * @example
   * ```ts
   * const payout = await client.payouts.uploadAuthorizationProof('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   File: '',
   * });
   * ```
   */
  uploadAuthorizationProof(
    id: string,
    params: PayoutUploadAuthorizationProofParams,
    options?: RequestOptions,
  ): APIPromise<ChargesAPI.PayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post(
      __scalarPath`/v1/payouts/${id}/authorization`,
      multipartFormRequestOptions(
        {
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
        },
        this._client,
      ),
    );
  }
}

export interface UnmaskedPayoutResponse {
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
  data: UnmaskedPayout;
}

export interface UnmaskedPayout {
  /**
   * Unique identifier for this payout.
   * @format uuid
   */
  id: string;
  /**
   * A human-readable description of the payout.
   */
  description: string | null;
  /**
   * Amount in cents.
   * @format int32
   */
  amount: number;
  /**
   * Currency code. Only `USD` is supported.
   */
  currency: string;
  /**
   * Date when Straddle submits the payout for processing.
   * @format date
   */
  payment_date: string;
  device: ChargesAPI.PaymentDevice;
  /**
   * Your unique identifier for this payout, used to correlate with your internal records.
   */
  external_id: string;
  config: ChargesAPI.PayoutConfiguration;
  /**
   * The current status of the `charge` or `payout`.
   */
  status: ChargesAPI.PaymentStatus;
  status_details: BridgeAPI.PaymentStatusDetails;
  /**
   * Complete ordered history of all status changes for this payout.
   */
  status_history: Array<ChargesAPI.PaymentStatusHistory>;
  /**
   * IDs of the funding events that included this payout.
   */
  funding_ids: Array<string>;
  /**
   * Unmasked paykey token used for this payout.
   */
  paykey: string;
  /**
   * Trace identifiers from the payment network. Keys depend on the payment rail.
   */
  trace_ids: Record<string, string>;
  /**
   * Whether this payout refunds an original charge.
   */
  is_refund: boolean;
  /**
   * Whether this payout resubmits an original payout.
   */
  is_resubmit: boolean;
  /**
   * Whether this payout has been resubmitted.
   */
  has_resubmit: boolean;
  /**
   * The payment rail used for the charge or payout.
   */
  payment_rail?: ChargesAPI.PaymentRail;
  /**
   * Information about the customer associated with the charge or payout.
   */
  customer_details?: ChargesAPI.CustomerDetails;
  paykey_details?: ChargesAPI.PaykeyDetails;
  /**
   * Timestamp when this payout was created.
   * @format date-time
   */
  created_at?: string | null;
  /**
   * Timestamp when this payout was last updated.
   * @format date-time
   */
  updated_at?: string | null;
  /**
   * Timestamp when this payout was submitted to the payment network. Null until processed.
   * @format date-time
   */
  processed_at?: string | null;
  /**
   * Timestamp when funds were settled. Null until settlement is confirmed.
   * @format date-time
   */
  effective_at?: string | null;
  /**
   * Key-value metadata stored with this payout.
   */
  metadata?: Record<string, string> | null;
  /**
   * Related payments and their relationship to this payout.
   */
  related_payments?: Array<ChargesAPI.RelatedPayment> | null;
  /**
   * Authorization documents for this payout, ordered by upload time.
   */
  documents?: Array<ChargesAPI.PaymentAuthorizationProof> | null;
}

export interface PayoutRetrieveParams {
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

export interface PayoutUpdateParams {
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
   * Body param: Updated description for the payout.
   */
  description: string | null;
  /**
   * Body param: Amount in cents.
   * @format int32
   */
  amount: number;
  /**
   * Body param: New date for Straddle to submit the payout for processing.
   * @format date
   */
  payment_date: string;
  /**
   * Body param: Replacement metadata for the payout. Up to 20 user-defined string key-value pairs.
   */
  metadata?: Record<string, string> | null;
}

export interface PayoutCreateParams {
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
   * Body param: The paykey token that identifies the customer's bank account.
   */
  paykey: string;
  /**
   * Body param: Description shown on the customer's bank statement where supported.
   */
  description: string | null;
  /**
   * Body param: Amount in cents.
   * @format int32
   */
  amount: number;
  /**
   * Body param: Currency code. Only `USD` is supported.
   */
  currency: string;
  /**
   * Body param: Date when Straddle submits the payout for processing.
   * @format date
   */
  payment_date: string;
  /**
   * Body param: Device used when the customer authorized the payout.
   */
  device: ChargesAPI.PaymentDevice;
  /**
   * Body param: Your unique identifier for the payout. Must be unique across payouts.
   */
  external_id: string;
  /**
   * Body param
   */
  config?: ChargesAPI.PayoutConfiguration;
  /**
   * Body param: Up to 20 user-defined string key-value pairs.
   */
  metadata?: Record<string, string> | null;
}

export interface PayoutHoldParams {
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
   * Body param: Message explaining the payout status change.
   */
  reason: string;
}

export interface PayoutReleaseParams {
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
   * Body param: Message explaining the payout status change.
   */
  reason: string;
}

export interface PayoutCancelParams {
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
   * Body param: Message explaining the payout status change.
   */
  reason: string;
}

export interface PayoutListUnmaskedParams {
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

export interface PayoutResubmitParams {
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
   * Body param: Description for the resubmitted payout. Defaults to the original description if omitted.
   */
  description?: string | null;
  /**
   * Body param: Date when Straddle submits the resubmitted payout for processing. Defaults to today if omitted.
   * @format date
   */
  payment_date?: string | null;
  /**
   * Body param: Your unique identifier for the resubmitted payout. Defaults to a new value if omitted.
   */
  external_id?: string | null;
}

export interface PayoutUploadAuthorizationProofParams {
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
   * Body param: The document file to upload as proof of authorization for this payout.
   * @format binary
   */
  File: Uploadable;
}
export declare namespace Payouts {
  export {
    type UnmaskedPayoutResponse as UnmaskedPayoutResponse,
    type UnmaskedPayout as UnmaskedPayout,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutHoldParams as PayoutHoldParams,
    type PayoutReleaseParams as PayoutReleaseParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutListUnmaskedParams as PayoutListUnmaskedParams,
    type PayoutResubmitParams as PayoutResubmitParams,
    type PayoutUploadAuthorizationProofParams as PayoutUploadAuthorizationProofParams,
  };
}
