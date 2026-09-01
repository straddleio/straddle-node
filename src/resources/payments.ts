// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import type * as AccountsAPI from './accounts';
import type * as BridgeAPI from './bridge';
import type * as ChargesAPI from './charges';
import type * as CustomersAPI from './customers/customers';

export class Payments extends APIResource {
  /**
   * Returns a paged list of charges and payouts that match the filters.
   *
   * @param {PaymentListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PaymentSummaryList>} OK
   *
   * @example
   * ```ts
   * const paymentSummaryList = await client.payments.list({
   *   page_number: 1,
   *   page_size: 100,
   *   sort_by: 'id',
   *   sort_order: 'asc',
   *   default_sort: 'id',
   *   default_sort_order: 'asc',
   * });
   * ```
   */
  list(
    params: PaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentSummaryList> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      ...query
    } = params ?? {};
    return this._client.get('/v1/payments', {
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
}

export interface PaymentSummaryList {
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
   * Payments returned for this page.
   */
  data: Array<PaymentSummary>;
}

export interface PaymentSummary {
  /**
   * Unique identifier for this charge or payout.
   * @format uuid
   */
  id: string;
  /**
   * Whether this payment is a charge or payout.
   */
  payment_type: ChargesAPI.PaymentType;
  /**
   * Date when Straddle submits the payment for processing.
   * @format date
   */
  payment_date: string;
  /**
   * Human-readable description of the payment.
   */
  description: string | null;
  /**
   * Your unique identifier for the charge or payout.
   */
  external_id: string;
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
   * Masked paykey token used for the charge or payout.
   */
  paykey: string;
  /**
   * Current status of the charge or payout.
   */
  status: ChargesAPI.PaymentStatus;
  /**
   * Reason, source, and message for the most recent status change.
   */
  status_details: BridgeAPI.PaymentStatusDetails;
  /**
   * Timestamp when the charge or payout was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp when the charge or payout was last updated.
   * @format date-time
   */
  updated_at: string;
  /**
   * IDs of the funding events that included this payment.
   */
  funding_ids: Array<string>;
  /**
   * Network-level trace identifiers assigned during processing. Keys vary by payment rail.
   */
  trace_ids: Record<string, string>;
  /**
   * Whether this payment is a payout that refunds an original charge.
   */
  is_refund: boolean;
  /**
   * Whether this payment is a charge refunded by an associated payout.
   */
  has_refund: boolean;
  /**
   * Whether this payment resubmits an original payment.
   */
  is_resubmit: boolean;
  /**
   * Whether this payment has been resubmitted.
   */
  has_resubmit: boolean;
  /**
   * Timestamp when funds settled. Null until settlement is confirmed.
   * @format date-time
   */
  effective_at?: string | null;
  /**
   * Information about the customer associated with the charge or payout.
   */
  customer_details?: ChargesAPI.CustomerDetails;
  /**
   * Details of the paykey used for the charge or payout.
   */
  paykey_details?: ChargesAPI.PaykeyDetails;
  /**
   * Unique identifier for the funding event associated with the `charge` or `payout`.
   * @format uuid
   */
  funding_id?: string | null;
  /**
   * Key-value metadata for the payment. Included only when `include_metadata` is true.
   */
  metadata?: Record<string, string> | null;
  /**
   * Related payments and their relationship to this charge or payout.
   */
  related_payments?: Array<ChargesAPI.RelatedPayment> | null;
}

export interface PaymentListParams {
  /**
   * Query param: Page number to return.
   * @default 1
   * @format int32
   */
  page_number?: number;
  /**
   * Query param: Number of results to return per page.
   * @default 100
   * @format int32
   */
  page_size?: number;
  /**
   * Query param: Field used to sort the results.
   * @default id
   */
  sort_by?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount' | 'updated_at';
  /**
   * Query param: Order in which to sort the results.
   * @default asc
   */
  sort_order?: AccountsAPI.SortOrder;
  /**
   * Query param: Filter by payment type.
   */
  payment_type?: Array<ChargesAPI.PaymentType>;
  /**
   * Query param: Filter by payment status.
   */
  payment_status?: Array<ChargesAPI.PaymentStatus>;
  /**
   * Query param: Filter by the payment's unique identifier.
   * @format uuid
   */
  payment_id?: string;
  /**
   * Query param: Filter by your external identifier for the payment.
   */
  external_id?: string;
  /**
   * Query param: Filter by the unique identifier of the customer.
   * @format uuid
   */
  customer_id?: string;
  /**
   * Query param: Filter by the unique identifier of the paykey.
   * @format uuid
   */
  paykey_id?: string;
  /**
   * Query param: Filter by the paykey token.
   */
  paykey?: string;
  /**
   * Query param: Filter to payments with an amount in cents greater than or equal to this value.
   * @format int32
   */
  min_amount?: number;
  /**
   * Query param: Filter to payments with an amount in cents less than or equal to this value.
   * @format int32
   */
  max_amount?: number;
  /**
   * Query param: Filter to payments with a payment date on or after this date.
   * @format date
   */
  min_payment_date?: string;
  /**
   * Query param: Filter to payments with a payment date on or before this date.
   * @format date
   */
  max_payment_date?: string;
  /**
   * Query param: Filter to payments created at or after this timestamp.
   * @format date-time
   */
  min_created_at?: string;
  /**
   * Query param: Filter to payments created at or before this timestamp.
   * @format date-time
   */
  max_created_at?: string;
  /**
   * Query param: Filter to payments effective at or after this timestamp.
   * @format date-time
   */
  min_effective_at?: string;
  /**
   * Query param: Filter to payments effective at or before this timestamp.
   * @format date-time
   */
  max_effective_at?: string;
  /**
   * Query param: Filter by the unique identifier of a funding event.
   * @format uuid
   */
  funding_id?: string;
  /**
   * Query param: Free-text search across payment fields.
   */
  search_text?: string;
  /**
   * Query param: Default number of results returned per page.
   * @format int32
   */
  default_page_size?: number;
  /**
   * Query param: Default field used to sort the results.
   * @default id
   */
  default_sort?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount' | 'updated_at';
  /**
   * Query param: Default order in which to sort the results.
   * @default asc
   */
  default_sort_order?: AccountsAPI.SortOrder;
  /**
   * Query param: Filter by the reason for the most recent payment status change.
   */
  status_reason?: Array<BridgeAPI.PaymentStatusReason>;
  /**
   * Query param: Filter by the source of the most recent payment status change.
   */
  status_source?: Array<BridgeAPI.PaymentStatusSource>;
  /**
   * Query param: Whether to include metadata in each returned payment. Defaults to false.
   */
  include_metadata?: boolean;
  /**
   * Query param: Filter payouts by whether they refund an original charge.
   */
  is_refund?: boolean;
  /**
   * Query param: Filter charges by whether an associated payout has refunded them.
   */
  has_refund?: boolean;
  /**
   * Query param: Filter payments by whether they resubmit an original payment.
   */
  is_resubmit?: boolean;
  /**
   * Query param: Filter payments by whether they have been resubmitted.
   */
  has_resubmit?: boolean;
  /**
   * Query param: Filter to payments last updated on or after this timestamp.
   * @format date-time
   */
  min_updated_at?: string;
  /**
   * Query param: Filter to payments last updated on or before this timestamp.
   * @format date-time
   */
  max_updated_at?: string;
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
export declare namespace Payments {
  export {
    type PaymentSummaryList as PaymentSummaryList,
    type PaymentSummary as PaymentSummary,
    type PaymentListParams as PaymentListParams,
  };
}
