// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as AccountsAPI from './accounts';
import type * as BridgeAPI from './bridge';
import type * as ChargesAPI from './charges';
import type * as LinkedBankAccountsAPI from './linked-bank-accounts';
import type * as CustomersAPI from './customers/customers';

export class FundingEvents extends APIResource {
  /**
   * Returns a paginated list of funding events that match the specified filters.
   *
   * @param {FundingEventListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FundingEventSummaryList>} OK
   *
   * @example
   * ```ts
   * const fundingEventSummaryList = await client.fundingEvents.list({
   *   page_number: 1,
   *   page_size: 100,
   *   sort_order: 'asc',
   * });
   * ```
   */
  list(
    params: FundingEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FundingEventSummaryList> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      ...query
    } = params ?? {};
    return this._client.get('/v1/funding_events', {
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
   * Returns a funding event by its unique identifier, including its current status, status history, and linked bank account details when available.
   *
   * @param {string} id - Unique identifier for the funding event.
   * @param {FundingEventRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FundingEventResponse>} OK
   *
   * @example
   * ```ts
   * const fundingEvent = await client.fundingEvents.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    id: string,
    params: FundingEventRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FundingEventResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/funding_events/${id}`, {
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
   * Creates a funding event for unfunded charge or payout activity in the sandbox and returns its ID. This endpoint is unavailable in production.
   *
   * @param {FundingEventSimulateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FundingEventSimulation>} Created
   *
   * @example
   * ```ts
   * const fundingEventSimulation = await client.fundingEvents.simulate({
   *   funding_event_job_type: 'charges',
   * });
   * ```
   */
  simulate(params: FundingEventSimulateParams, options?: RequestOptions): APIPromise<FundingEventSimulation> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/funding_events/simulate', {
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
   * Returns a paginated list of payments included in the funding event.
   *
   * @param {string} id - Unique identifier for the funding event.
   * @param {FundingEventListPaymentsParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<FundingEventPaymentList>} OK
   *
   * @example
   * ```ts
   * const fundingEventPaymentList = await client.fundingEvents.listPayments(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     default_sort_order: 'asc',
   *     sort_order: 'asc',
   *   },
   * );
   * ```
   */
  listPayments(
    id: string,
    params: FundingEventListPaymentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FundingEventPaymentList> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      ...query
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/funding_event_payments/${id}`, {
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

export interface FundingEventSummaryList {
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
   * Funding events returned for this page.
   */
  data: Array<FundingEventSummary>;
}

export interface FundingEventResponse {
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
  data: FundingEvent;
}

export interface FundingEventSimulation {
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
  data: FundingEventSimulationResult;
}

export interface FundingEventPaymentList {
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
   * Funding-event payments returned for this page.
   */
  data: Array<FundingEventPayment>;
}

export interface FundingEventSummary {
  /**
   * Unique identifier for this funding event.
   * @format uuid
   */
  id: string;
  /**
   * Total funding event amount in the smallest currency unit. For example, `1000` is $10.00 USD.
   * @format int32
   */
  amount: number;
  /**
   * Transfer direction relative to the linked bank account. `deposit` moves funds into the account, and `withdrawal` moves funds out.
   */
  direction: TransferDirection;
  /**
   * Reason for the funding event. `charge_deposit` settles collected charges to the linked bank account. `charge_reversal` withdraws funds for reversed charges. `payout_withdrawal` withdraws funds for payouts. `payout_return` deposits returned payout funds.
   */
  event_type: FundingEventType;
  /**
   * Number of payments included in this funding event.
   * @format int32
   */
  payment_count: number;
  /**
   * The date the funds transfer was initiated.
   * @format date
   */
  transfer_date: string;
  /**
   * Network trace numbers associated with payments in this funding event.
   */
  trace_numbers: Array<string>;
  /**
   * Timestamp when this funding event was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp when this funding event was last updated.
   * @format date-time
   */
  updated_at: string;
  /**
   * Network-level trace identifiers assigned during processing. Keys vary by payment rail.
   */
  trace_ids: Record<string, string>;
  /**
   * The trace number of the funding event.
   */
  trace_number?: string | null;
  /**
   * Current status of this funding event.
   * @default created
   */
  status?: ChargesAPI.PaymentStatus;
  /**
   * Reason, source, and message for the most recent status change.
   */
  status_details?: BridgeAPI.PaymentStatusDetails;
}

export interface FundingEvent {
  /**
   * Unique identifier for this funding event.
   * @format uuid
   */
  id: string;
  /**
   * Total funding event amount in the smallest currency unit. For example, `1000` is $10.00 USD.
   * @format int32
   */
  amount: number;
  /**
   * Transfer direction relative to the linked bank account. `deposit` moves funds into the account, and `withdrawal` moves funds out.
   */
  direction: FundingEventTransferDirection;
  /**
   * Reason for the funding event. `charge_deposit` settles collected charges to the linked bank account. `charge_reversal` withdraws funds for reversed charges. `payout_withdrawal` withdraws funds for payouts. `payout_return` deposits returned payout funds.
   */
  event_type: FundingEventType;
  /**
   * Network trace numbers associated with payments in this funding event.
   */
  trace_numbers: Array<string>;
  /**
   * Number of payments included in this funding event.
   * @format int32
   */
  payment_count: number;
  /**
   * The date the funds transfer was initiated.
   * @format date
   */
  transfer_date: string;
  /**
   * Timestamp when this funding event was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp when this funding event was last updated.
   * @format date-time
   */
  updated_at: string;
  /**
   * Network-level trace identifiers assigned during processing. Keys vary by payment rail.
   */
  trace_ids: Record<string, string>;
  /**
   * Complete ordered history of all status changes for this funding event.
   */
  status_history: Array<ChargesAPI.PaymentStatusHistory>;
  /**
   * Current status of this funding event.
   * @default created
   */
  status?: ChargesAPI.PaymentStatus;
  /**
   * Reason, source, and message for the most recent status change.
   */
  status_details?: BridgeAPI.PaymentStatusDetails;
  /**
   * Configuration used to process this funding event.
   */
  config?: FundingEventConfiguration;
  /**
   * Details of the linked bank account used for this funding event.
   */
  linked_bank_account_details?: LinkedBankAccountsAPI.UnmaskedLinkedBankAccountDetails;
}

export interface FundingEventSimulationResult {
  /**
   * Unique identifier for the created funding event.
   * @format uuid
   */
  id: string;
}

export interface FundingEventPayment {
  /**
   * Unique identifier for this payment.
   * @format uuid
   */
  id: string;
  /**
   * Whether this payment is a charge or payout.
   */
  payment_type: ChargesAPI.PaymentType;
  /**
   * The date on which this payment was submitted for processing.
   * @format date
   */
  payment_date: string;
  /**
   * Three-letter ISO 4217 currency code.
   */
  currency: string;
  /**
   * Portion of the payment amount included in this funding event, in the smallest currency unit.
   * @format int32
   */
  funding_amount: number;
  /**
   * Reason this payment was included in the funding event.
   */
  reason: FundingEventPaymentReason;
  /**
   * Total payment amount in the smallest currency unit (e.g. 1000 = $10.00 USD).
   * @format int32
   */
  payment_amount: number;
  /**
   * Current status of this payment.
   */
  status: ChargesAPI.PaymentStatus;
  /**
   * Your unique identifier for this payment, used to correlate with your internal records.
   */
  external_id: string;
  /**
   * Network-level trace identifiers assigned during processing. Keys vary by payment rail.
   */
  trace_ids: Record<string, string>;
  /**
   * Details of the customer associated with this payment.
   */
  customer_details?: ChargesAPI.CustomerDetails;
  /**
   * Details of the paykey used for this payment.
   */
  paykey_details?: ChargesAPI.PaykeyDetails;
  /**
   * Key-value metadata for this payment. Included only when `include_metadata` is `true`.
   */
  metadata?: Record<string, string> | null;
}

/**
 * Transfer direction relative to the linked bank account. `deposit` moves funds into the account, and `withdrawal` moves funds out.
 */
export type TransferDirection = 'deposit' | 'withdrawal';

/**
 * Reason for the funding event. `charge_deposit` settles collected charges to the linked bank account. `charge_reversal` withdraws funds for reversed charges. `payout_withdrawal` withdraws funds for payouts. `payout_return` deposits returned payout funds.
 */
export type FundingEventType = 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal';

/**
 * Transfer direction relative to the linked bank account. `deposit` moves funds into the account, and `withdrawal` moves funds out.
 */
export type FundingEventTransferDirection = 'deposit' | 'withdrawal';

export interface FundingEventConfiguration {
  /**
   * Processing outcome configured for this simulated funding event.
   */
  sandbox_outcome?: ChargesAPI.SimulatedPaymentOutcome;
}

/**
 * Reason the payment was included in the funding event.
 */
export type FundingEventPaymentReason = 'credit' | 'debit' | 'reversal' | 'failed';

export interface FundingEventListParams {
  /**
   * Query param: Results page number. Starts at page 1.
   * @default 1
   * @format int32
   */
  page_number?: number;
  /**
   * Query param: Results page size. Max value: 1000.
   * @default 100
   * @format int32
   */
  page_size?: number;
  /**
   * Query param: Field used to sort the results.
   */
  sort_by?: 'transfer_date' | 'id' | 'amount';
  /**
   * Query param: Order in which to sort the results.
   * @default asc
   */
  sort_order?: AccountsAPI.SortOrder;
  /**
   * Query param: Filter to funding events created on or after this date.
   * @format date
   */
  created_from?: string | null;
  /**
   * Query param: Filter to funding events created on or before this date.
   * @format date
   */
  created_to?: string | null;
  /**
   * Query param: Filter by transfer direction relative to the linked bank account.
   */
  direction?: TransferDirection;
  /**
   * Query param: Filter by funding event type.
   */
  event_type?: FundingEventType;
  /**
   * Query param: Filter by a network trace number assigned during processing.
   */
  trace_number?: string | null;
  /**
   * Query param: Free-text search across funding event fields.
   */
  search_text?: string | null;
  /**
   * Query param: Filter by funding event status.
   */
  status?: Array<ChargesAPI.PaymentStatus> | null;
  /**
   * Query param: Filter by a network-level trace identifier assigned during processing.
   */
  trace_id?: string | null;
  /**
   * Query param: Filter by the reason for the most recent status change.
   */
  status_reason?: Array<BridgeAPI.PaymentStatusReason> | null;
  /**
   * Query param: Filter by the source of the most recent status change.
   */
  status_source?: Array<BridgeAPI.PaymentStatusSource> | null;
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

export interface FundingEventRetrieveParams {
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

export interface FundingEventSimulateParams {
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
   * Body param: Required. Selects charge or payout activity for the simulated funding event.
   */
  funding_event_job_type: 'charges' | 'payouts';
  /**
   * Body param: Optional. Sets the processing outcome for the simulated funding event. Defaults to `standard`.
   */
  sandbox_outcome?: ChargesAPI.SimulatedPaymentOutcome;
}

export interface FundingEventListPaymentsParams {
  /**
   * Query param: Results page number. Starts at 1. Defaults to 1.
   * @format int32
   */
  page_number?: number;
  /**
   * Query param: Number of results per page. Maximum 1,000. Defaults to 100.
   * @format int32
   */
  page_size?: number;
  /**
   * Query param: When `true`, includes each payment's metadata. Defaults to `false`.
   */
  include_metadata?: boolean;
  /**
   * Query param: Default number of results returned per page.
   * @format int32
   */
  default_page_size?: number;
  /**
   * Query param: Default field used to sort the results.
   */
  default_sort?: 'created_at' | 'payment_date' | 'effective_at' | 'id';
  /**
   * Query param: Default order in which to sort the results.
   * @default asc
   */
  default_sort_order?: AccountsAPI.SortOrder;
  /**
   * Query param: Field used to sort the results.
   */
  sort_by?: 'created_at' | 'payment_date' | 'effective_at' | 'id';
  /**
   * Query param: Order in which to sort the results.
   * @default asc
   */
  sort_order?: AccountsAPI.SortOrder;
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
export declare namespace FundingEvents {
  export {
    type FundingEventSummaryList as FundingEventSummaryList,
    type FundingEventResponse as FundingEventResponse,
    type FundingEventSimulation as FundingEventSimulation,
    type FundingEventPaymentList as FundingEventPaymentList,
    type FundingEventSummary as FundingEventSummary,
    type FundingEvent as FundingEvent,
    type FundingEventSimulationResult as FundingEventSimulationResult,
    type FundingEventPayment as FundingEventPayment,
    type TransferDirection as TransferDirection,
    type FundingEventType as FundingEventType,
    type FundingEventTransferDirection as FundingEventTransferDirection,
    type FundingEventConfiguration as FundingEventConfiguration,
    type FundingEventPaymentReason as FundingEventPaymentReason,
    type FundingEventListParams as FundingEventListParams,
    type FundingEventRetrieveParams as FundingEventRetrieveParams,
    type FundingEventSimulateParams as FundingEventSimulateParams,
    type FundingEventListPaymentsParams as FundingEventListPaymentsParams,
  };
}
