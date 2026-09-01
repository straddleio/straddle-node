// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';
import type { Uploadable } from '../core/uploads';
import type * as AccountsAPI from './accounts';
import type * as BridgeAPI from './bridge';
import type * as CustomersAPI from './customers/customers';

export class Charges extends APIResource {
  /**
   * Returns a charge by its unique identifier.
   *
   * @param {string} id - Unique identifier for the charge.
   * @param {ChargeRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargeResponse>} OK
   *
   * @example
   * ```ts
   * const charge = await client.charges.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    id: string,
    params: ChargeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargeResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/charges/${id}`, {
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
   * Updates the description, amount, `payment_date`, or metadata. The charge must have a status of `created` or `on_hold`.
   *
   * @param {string} id - Unique identifier for the charge.
   * @param {ChargeUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargeResponse>} OK
   *
   * @example
   * ```ts
   * const charge = await client.charges.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   description: 'Monthly subscription fee',
   *   amount: 10000,
   *   payment_date: '2024-01-01',
   * });
   * ```
   */
  update(id: string, params: ChargeUpdateParams, options?: RequestOptions): APIPromise<ChargeResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.put(__scalarPath`/v1/charges/${id}`, {
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
   * Creates a charge against a customer's paykey. Straddle submits the charge for processing on `payment_date` unless the charge is on hold.
   *
   * @param {ChargeCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargeResponse>} Created
   *
   * @example
   * ```ts
   * const charge = await client.charges.create({
   *   paykey: '',
   *   description: 'Monthly subscription fee',
   *   amount: 10000,
   *   currency: 'USD',
   *   payment_date: '2024-01-01',
   *   consent_type: 'internet',
   *   device: {
   *     ip_address: '192.168.1.1',
   *   },
   *   external_id: '',
   *   config: {
   *     balance_check: 'enabled',
   *   },
   * });
   * ```
   */
  create(params: ChargeCreateParams, options?: RequestOptions): APIPromise<ChargeResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/charges', {
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
   * Places a charge on hold to prevent submission for processing. The charge must have a status of `created` or `scheduled`.
   *
   * @param {string} id - Unique identifier for the charge.
   * @param {ChargeHoldParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargeResponse>} OK
   *
   * @example
   * ```ts
   * const charge = await client.charges.hold('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  hold(
    id: string,
    params: ChargeHoldParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargeResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params ?? {};
    return this._client.put(__scalarPath`/v1/charges/${id}/hold`, {
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
   * Releases a charge from `on_hold` and returns it to `created` for submission on `payment_date`.
   *
   * @param {string} id - Unique identifier for the charge.
   * @param {ChargeReleaseParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargeResponse>} OK
   *
   * @example
   * ```ts
   * const charge = await client.charges.release('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  release(
    id: string,
    params: ChargeReleaseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargeResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params ?? {};
    return this._client.put(__scalarPath`/v1/charges/${id}/release`, {
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
   * Cancels a charge. The charge must have a status of `created`, `scheduled`, or `on_hold`.
   *
   * @param {string} id - Unique identifier for the charge.
   * @param {ChargeCancelParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargeResponse>} OK
   *
   * @example
   * ```ts
   * const charge = await client.charges.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  cancel(
    id: string,
    params: ChargeCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargeResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params ?? {};
    return this._client.put(__scalarPath`/v1/charges/${id}/cancel`, {
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
   * Return a charge with its sensitive fields unmasked.
   *
   * @param {string} id - Unique identifier for the charge.
   * @param {ChargeListUnmaskedParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UnmaskedChargeResponse>} OK
   *
   * @example
   * ```ts
   * const unmaskedCharge = await client.charges.listUnmasked('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  listUnmasked(
    id: string,
    params: ChargeListUnmaskedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnmaskedChargeResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/charges/${id}/unmask`, {
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
   * Creates a new charge from a failed, reversed, or cancelled charge. The request can override `description`, `external_id`, and `payment_date`. Other payment details come from the original charge.
   *
   * @param {string} id - Unique identifier for the charge.
   * @param {ChargeResubmitParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargeResponse>} Created
   *
   * @example
   * ```ts
   * const charge = await client.charges.resubmit('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  resubmit(
    id: string,
    params: ChargeResubmitParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChargeResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params ?? {};
    return this._client.post(__scalarPath`/v1/charges/${id}/resubmit`, {
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
   * Creates a payout to return funds from a paid charge to the customer's bank account. The payout is linked to the charge through `related_payments`. A charge can be refunded once, either fully or partially.
   *
   * @param {string} id - Unique identifier for the charge.
   * @param {ChargeRefundParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PayoutResponse>} Created
   *
   * @example
   * ```ts
   * const payout = await client.charges.refund('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   amount: 5000,
   * });
   * ```
   */
  refund(id: string, params: ChargeRefundParams, options?: RequestOptions): APIPromise<PayoutResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post(__scalarPath`/v1/charges/${id}/refund`, {
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
   * Uploads a proof-of-authorization document for a charge. A later upload adds another document and does not replace an existing one.
   *
   * @param {string} id - Unique identifier for the charge.
   * @param {ChargeUploadAuthorizationProofParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ChargeResponse>} Created
   *
   * @example
   * ```ts
   * const charge = await client.charges.uploadAuthorizationProof('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   File: '',
   * });
   * ```
   */
  uploadAuthorizationProof(
    id: string,
    params: ChargeUploadAuthorizationProofParams,
    options?: RequestOptions,
  ): APIPromise<ChargeResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post(
      __scalarPath`/v1/charges/${id}/authorization`,
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

export interface ChargeResponse {
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
  data: Charge;
}

export interface UnmaskedChargeResponse {
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
  data: UnmaskedCharge;
}

export interface PayoutResponse {
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
  data: Payout;
}

export interface Charge {
  /**
   * Unique identifier for this charge.
   * @format uuid
   */
  id: string;
  /**
   * The masked paykey token used for this charge.
   */
  paykey: string;
  /**
   * A human-readable description of the charge.
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
   * Date when Straddle submits the charge for processing.
   * @format date
   */
  payment_date: string;
  /**
   * How the customer authorized the charge. `internet` covers online and mobile authorization. `signed` covers written or PDF-signed agreements.
   */
  consent_type: ConsentType;
  /**
   * Device used when the customer authorized the charge.
   */
  device: MaskedPaymentDevice;
  /**
   * Your unique identifier for this charge, used to correlate with your internal records.
   */
  external_id: string;
  /**
   * Configuration options for the charge.
   */
  config: ChargeConfiguration;
  /**
   * Timestamp when this charge was created.
   * @format date-time
   */
  created_at: string | null;
  /**
   * Timestamp when this charge was last updated.
   * @format date-time
   */
  updated_at: string | null;
  /**
   * The current status of the charge.
   */
  status: PaymentStatus;
  /**
   * Reason, source, and message for the most recent charge status change.
   */
  status_details: BridgeAPI.PaymentStatusDetails;
  /**
   * Complete ordered history of all status changes for this charge.
   */
  status_history: Array<PaymentStatusHistory>;
  /**
   * IDs of the funding events that included this charge.
   */
  funding_ids: Array<string>;
  /**
   * Trace identifiers from the payment network. Keys depend on the payment rail.
   */
  trace_ids: Record<string, string>;
  /**
   * Whether an associated payout has refunded this charge.
   */
  has_refund: boolean;
  /**
   * Whether this charge resubmits an original charge.
   */
  is_resubmit: boolean;
  /**
   * Whether this charge has been resubmitted.
   */
  has_resubmit: boolean;
  /**
   * Payment rail used to process the charge.
   */
  payment_rail?: PaymentRail;
  /**
   * Information about the paykey used for the charge.
   */
  paykey_details?: PaykeyDetails;
  /**
   * Information about the customer associated with the charge.
   */
  customer_details?: CustomerDetails;
  /**
   * Timestamp when this charge was submitted to the payment network. Null until processed.
   * @format date-time
   */
  processed_at?: string | null;
  /**
   * Timestamp when funds were settled. Null until settlement is confirmed.
   * @format date-time
   */
  effective_at?: string | null;
  /**
   * Key-value metadata stored with this charge.
   */
  metadata?: Record<string, string> | null;
  /**
   * Related payments and their relationship to this charge.
   */
  related_payments?: Array<RelatedPayment> | null;
  /**
   * Authorization documents for this charge, ordered by upload time.
   */
  documents?: Array<PaymentAuthorizationProof> | null;
}

export interface UnmaskedCharge {
  /**
   * Unique identifier for this charge.
   * @format uuid
   */
  id: string;
  /**
   * A human-readable description of the charge.
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
   * Date when Straddle submits the charge for processing.
   * @format date
   */
  payment_date: string;
  /**
   * How the customer authorized the charge. `internet` covers online and mobile authorization. `signed` covers written or PDF-signed agreements.
   */
  consent_type: ConsentType;
  device: PaymentDevice;
  /**
   * Your unique identifier for this charge, used to correlate with your internal records.
   */
  external_id: string;
  config: ChargeConfiguration;
  /**
   * Timestamp when this charge was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp when this charge was last updated.
   * @format date-time
   */
  updated_at: string;
  /**
   * The current status of the `charge` or `payout`.
   */
  status: PaymentStatus;
  status_details: BridgeAPI.PaymentStatusDetails;
  /**
   * Complete ordered history of all status changes for this charge.
   */
  status_history: Array<PaymentStatusHistory>;
  /**
   * IDs of the funding events that included this charge.
   */
  funding_ids: Array<string>;
  /**
   * Unmasked paykey token used for this charge.
   */
  paykey: string;
  /**
   * Trace identifiers from the payment network. Keys depend on the payment rail.
   */
  trace_ids: Record<string, string>;
  /**
   * Whether an associated payout has refunded this charge.
   */
  has_refund: boolean;
  /**
   * Whether this charge resubmits an original charge.
   */
  is_resubmit: boolean;
  /**
   * Whether this charge has been resubmitted.
   */
  has_resubmit: boolean;
  /**
   * The payment rail used for the charge or payout.
   */
  payment_rail?: PaymentRail;
  paykey_details?: PaykeyDetails;
  /**
   * Information about the customer associated with the charge or payout.
   */
  customer_details?: CustomerDetails;
  /**
   * Timestamp when this charge was submitted to the payment network. Null until processed.
   * @format date-time
   */
  processed_at?: string | null;
  /**
   * Timestamp when funds were settled. Null until settlement is confirmed.
   * @format date-time
   */
  effective_at?: string | null;
  /**
   * Key-value metadata stored with this charge.
   */
  metadata?: Record<string, string> | null;
  /**
   * Related payments and their relationship to this charge.
   */
  related_payments?: Array<RelatedPayment> | null;
  /**
   * Authorization documents for this charge, ordered by upload time.
   */
  documents?: Array<PaymentAuthorizationProof> | null;
}

export interface Payout {
  /**
   * Unique identifier for this payout.
   * @format uuid
   */
  id: string;
  /**
   * The masked paykey token used for this payout.
   */
  paykey: string;
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
  /**
   * Device used when the customer authorized the payout.
   */
  device: MaskedPaymentDevice;
  /**
   * Your unique identifier for this payout, used to correlate with your internal records.
   */
  external_id: string;
  /**
   * Configuration for the payout.
   */
  config: PayoutConfiguration;
  /**
   * The current status of the payout.
   */
  status: PaymentStatus;
  /**
   * Reason, source, and message for the most recent payout status change.
   */
  status_details: BridgeAPI.PaymentStatusDetails;
  /**
   * Complete ordered history of all status changes for this payout.
   */
  status_history: Array<PaymentStatusHistory>;
  /**
   * IDs of the funding events that included this payout.
   */
  funding_ids: Array<string>;
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
   * Payment rail used to process the payout.
   */
  payment_rail?: PaymentRail;
  /**
   * Information about the customer associated with the payout.
   */
  customer_details?: CustomerDetails;
  /**
   * Information about the paykey used for the payout.
   */
  paykey_details?: PaykeyDetails;
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
  related_payments?: Array<RelatedPayment> | null;
  /**
   * Authorization documents for this payout, ordered by upload time.
   */
  documents?: Array<PaymentAuthorizationProof> | null;
}

/**
 * The payment rail used for the charge or payout.
 */
export type PaymentRail = 'ach';

export interface PaykeyDetails {
  /**
   * Unique identifier for the paykey.
   * @format uuid
   */
  id: string;
  /**
   * Unique identifier for the customer associated with the paykey.
   * @format uuid
   */
  customer_id: string;
  /**
   * Display label combining the bank name and masked account number.
   */
  label: string;
  /**
   * The most recent available balance in the smallest currency unit, if a balance check was performed.
   * @format int32
   */
  balance?: number | null;
}

/**
 * Information about the customer associated with the charge or payout.
 */
export interface CustomerDetails {
  /**
   * Unique identifier for the customer.
   * @format uuid
   */
  id: string;
  /**
   * Customer's full name or business name.
   */
  name: string;
  /**
   * Whether the customer is an individual or a business.
   */
  customer_type: CustomersAPI.CustomerType;
  /**
   * Customer's email address.
   */
  email: string;
  /**
   * Customer's phone number in E.164 format.
   */
  phone: string;
}

/**
 * How the customer authorized the charge. `internet` covers online and mobile authorization. `signed` covers written or PDF-signed agreements.
 */
export type ConsentType = 'internet' | 'signed';

export interface MaskedPaymentDevice {
  /**
   * Masked IP address of the device used when the customer authorized the charge or payout.
   */
  ip_address: string;
}

export interface ChargeConfiguration {
  /**
   * Balance check mode to use before processing the charge.
   */
  balance_check: BalanceCheckMode;
  /**
   * Payment will simulate processing if not Standard.
   */
  sandbox_outcome?: SimulatedPaymentOutcome;
  /**
   * Whether to place the charge on hold automatically after creation.
   */
  auto_hold?: boolean | null;
  /**
   * Reason for placing the charge on hold automatically.
   */
  auto_hold_message?: string | null;
}

/**
 * The current status of the `charge` or `payout`.
 */
export type PaymentStatus =
  | 'created'
  | 'scheduled'
  | 'failed'
  | 'cancelled'
  | 'on_hold'
  | 'pending'
  | 'paid'
  | 'reversed'
  | 'validating';

export interface PaymentStatusHistory {
  /**
   * Machine-readable reason for the status.
   */
  reason: BridgeAPI.PaymentStatusReason;
  /**
   * Source of the status change.
   */
  source: BridgeAPI.PaymentStatusSource;
  /**
   * Human-readable status description.
   */
  message: string;
  /**
   * Timestamp when the status changed.
   * @format date-time
   */
  changed_at: string;
  /**
   * The current status of the `charge` or `payout`.
   */
  status: PaymentStatus;
  /**
   * Status code, when available.
   */
  code?: string | null;
}

export interface RelatedPayment {
  /**
   * Unique identifier of the related payment.
   * @format uuid
   */
  id: string;
  relationship: PaymentRelationship;
  /**
   * The type of payment.
   */
  payment_type: PaymentType;
}

export interface PaymentAuthorizationProof {
  /**
   * Unique identifier for this document.
   * @format uuid
   */
  document_id: string;
  /**
   * The file name of this document as uploaded.
   */
  document_name: string;
  document_type: PaymentDocumentType;
  /**
   * The size of this document in bytes.
   * @format int64
   */
  document_size: number;
  /**
   * The UTC timestamp when this document was uploaded.
   * @format date-time
   */
  uploaded_at: string;
}

export interface PaymentDevice {
  /**
   * The IP address of the device used when the customer authorized the charge or payout. Use `0.0.0.0` to represent an offline consent interaction.
   * @format ipv4
   */
  ip_address: string;
}

export interface PayoutConfiguration {
  /**
   * Payment will simulate processing if not Standard.
   */
  sandbox_outcome?: SimulatedPaymentOutcome;
  /**
   * Whether to place the payout on hold automatically after creation.
   */
  auto_hold?: boolean | null;
  /**
   * Reason for placing the payout on hold automatically.
   */
  auto_hold_message?: string | null;
}

export type BalanceCheckMode = 'required' | 'enabled' | 'disabled';

/**
 * Payment will simulate processing if not Standard.
 */
export type SimulatedPaymentOutcome =
  | 'standard'
  | 'paid'
  | 'on_hold_daily_limit'
  | 'cancelled_for_fraud_risk'
  | 'cancelled_for_balance_check'
  | 'failed_insufficient_funds'
  | 'reversed_insufficient_funds'
  | 'failed_customer_dispute'
  | 'reversed_customer_dispute'
  | 'failed_closed_bank_account'
  | 'reversed_closed_bank_account'
  | 'failed_not_authorized'
  | 'reversed_not_authorized';

export type PaymentRelationship = 'original' | 'resubmit' | 'refund';

/**
 * The type of payment.
 */
export type PaymentType = 'charge' | 'payout';

export type PaymentDocumentType = 'payment_authorization';

export interface ChargeRetrieveParams {
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

export interface ChargeUpdateParams {
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
   * Body param: Updated description for the charge.
   */
  description: string | null;
  /**
   * Body param: Amount in cents.
   * @format int32
   */
  amount: number;
  /**
   * Body param: New date for Straddle to submit the charge for processing.
   * @format date
   */
  payment_date: string;
  /**
   * Body param: Replacement metadata for the charge. Up to 20 user-defined string key-value pairs.
   */
  metadata?: Record<string, string> | null;
}

export interface ChargeCreateParams {
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
   * Body param: Date when Straddle submits the charge for processing.
   * @format date
   */
  payment_date: string;
  /**
   * Body param: How the customer authorized the charge. `internet` covers online and mobile authorization. `signed` covers written or PDF-signed agreements.
   */
  consent_type: ConsentType;
  /**
   * Body param
   */
  device: PaymentDevice;
  /**
   * Body param: Your unique identifier for the charge. Must be unique across charges.
   */
  external_id: string;
  /**
   * Body param
   */
  config: ChargeConfiguration;
  /**
   * Body param: Up to 20 user-defined string key-value pairs.
   */
  metadata?: Record<string, string> | null;
}

export interface ChargeHoldParams {
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
   * Body param: Message explaining the charge status change.
   */
  reason?: string | null;
}

export interface ChargeReleaseParams {
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
   * Body param: Message explaining the charge status change.
   */
  reason?: string | null;
}

export interface ChargeCancelParams {
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
   * Body param: Message explaining the charge status change.
   */
  reason?: string | null;
}

export interface ChargeListUnmaskedParams {
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

export interface ChargeResubmitParams {
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
   * Body param: Description for the resubmitted charge. Defaults to the original description if omitted.
   */
  description?: string | null;
  /**
   * Body param: Date when Straddle submits the resubmitted charge for processing. Defaults to today if omitted.
   * @format date
   */
  payment_date?: string | null;
  /**
   * Body param: Your unique identifier for the resubmitted charge. Defaults to a new value if omitted.
   */
  external_id?: string | null;
}

export interface ChargeRefundParams {
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
   * Body param: Refund amount in cents. `null` refunds the full original amount. A value must be greater than zero and no more than the original charge amount.
   * @format int32
   */
  amount: number | null;
  /**
   * Body param: Description for the refund payout. Defaults to a description that identifies the original charge.
   */
  description?: string | null;
  /**
   * Body param: Your unique identifier for the refund. Defaults to a new value if omitted.
   */
  external_id?: string | null;
  /**
   * Body param: Date when Straddle submits the refund payout for processing. Defaults to today if omitted.
   * @format date
   */
  payment_date?: string | null;
  /**
   * Body param: User-defined string key-value pairs for the refund payout.
   */
  metadata?: Record<string, string> | null;
}

export interface ChargeUploadAuthorizationProofParams {
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
   * Body param: The document file to upload as proof of authorization for this charge.
   * @format binary
   */
  File: Uploadable;
}
export declare namespace Charges {
  export {
    type ChargeResponse as ChargeResponse,
    type UnmaskedChargeResponse as UnmaskedChargeResponse,
    type PayoutResponse as PayoutResponse,
    type Charge as Charge,
    type UnmaskedCharge as UnmaskedCharge,
    type Payout as Payout,
    type PaymentRail as PaymentRail,
    type PaykeyDetails as PaykeyDetails,
    type CustomerDetails as CustomerDetails,
    type ConsentType as ConsentType,
    type MaskedPaymentDevice as MaskedPaymentDevice,
    type ChargeConfiguration as ChargeConfiguration,
    type PaymentStatus as PaymentStatus,
    type PaymentStatusHistory as PaymentStatusHistory,
    type RelatedPayment as RelatedPayment,
    type PaymentAuthorizationProof as PaymentAuthorizationProof,
    type PaymentDevice as PaymentDevice,
    type PayoutConfiguration as PayoutConfiguration,
    type BalanceCheckMode as BalanceCheckMode,
    type SimulatedPaymentOutcome as SimulatedPaymentOutcome,
    type PaymentRelationship as PaymentRelationship,
    type PaymentType as PaymentType,
    type PaymentDocumentType as PaymentDocumentType,
    type ChargeRetrieveParams as ChargeRetrieveParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeHoldParams as ChargeHoldParams,
    type ChargeReleaseParams as ChargeReleaseParams,
    type ChargeCancelParams as ChargeCancelParams,
    type ChargeListUnmaskedParams as ChargeListUnmaskedParams,
    type ChargeResubmitParams as ChargeResubmitParams,
    type ChargeRefundParams as ChargeRefundParams,
    type ChargeUploadAuthorizationProofParams as ChargeUploadAuthorizationProofParams,
  };
}
