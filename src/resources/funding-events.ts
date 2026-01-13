// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { PageNumberSchema, type PageNumberSchemaParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FundingEvents extends APIResource {
  /**
   * Retrieves a list of funding events for your account. This endpoint supports
   * advanced sorting and filtering options.
   */
  list(
    params: FundingEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FundingEventSummaryPagedV1DataPageNumberSchema, FundingEventSummaryPagedV1.Data> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...query
    } = params ?? {};
    return this._client.getAPIList('/v1/funding_events', PageNumberSchema<FundingEventSummaryPagedV1.Data>, {
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
   * Retrieves the details of an existing funding event. Supply the unique funding
   * event `id`, and Straddle will return the individual transaction items that make
   * up the funding event.
   */
  get(
    id: string,
    params: FundingEventGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FundingEventSummaryItemV1> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.get(path`/v1/funding_events/${id}`, {
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

export type FundingEventSummaryPagedV1DataPageNumberSchema =
  PageNumberSchema<FundingEventSummaryPagedV1.Data>;

export interface FundingEventSummaryItemV1 {
  data: FundingEventSummaryItemV1.Data;

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

export namespace FundingEventSummaryItemV1 {
  export interface Data {
    /**
     * Unique identifier for the funding event.
     */
    id: string;

    /**
     * The amount of the funding event in cents.
     */
    amount: number;

    /**
     * Created at.
     */
    created_at: string;

    /**
     * Describes the direction of the funding event from the perspective of the
     * `linked_bank_account`.
     */
    direction: 'deposit' | 'withdrawal';

    /**
     * The funding event types describes the direction and reason for the funding
     * event.
     */
    event_type:
      | 'charge_deposit'
      | 'charge_reversal'
      | 'payout_return'
      | 'payout_withdrawal'
      | 'ChargeDeposit'
      | 'ChargeReversal'
      | 'PayoutReturn'
      | 'PayoutWithdrawal';

    /**
     * The number of payments associated with the funding event.
     */
    payment_count: number;

    /**
     * Trace Ids.
     */
    trace_ids: { [key: string]: string };

    /**
     * Trace number.
     */
    trace_numbers: Array<string>;

    /**
     * The date on which the funding event occurred. For `deposits` and `returns`, this
     * is the date the funds were credited to your bank account. For `withdrawals` and
     * `reversals`, this is the date the funds were debited from your bank account.
     */
    transfer_date: string;

    /**
     * Updated at.
     */
    updated_at: string;

    /**
     * The current status of the `charge` or `payout`.
     */
    status?:
      | 'created'
      | 'scheduled'
      | 'failed'
      | 'cancelled'
      | 'on_hold'
      | 'pending'
      | 'paid'
      | 'reversed'
      | 'Created'
      | 'Scheduled'
      | 'Failed'
      | 'Cancelled'
      | 'OnHold'
      | 'Pending'
      | 'Paid'
      | 'Reversed';

    status_details?: Data.StatusDetails;

    /**
     * The trace number of the funding event.
     */
    trace_number?: string | null;
  }

  export namespace Data {
    export interface StatusDetails {
      /**
       * The time the status change occurred.
       */
      changed_at: string;

      /**
       * A human-readable description of the current status.
       */
      message: string;

      reason:
        | 'insufficient_funds'
        | 'closed_bank_account'
        | 'invalid_bank_account'
        | 'invalid_routing'
        | 'disputed'
        | 'payment_stopped'
        | 'owner_deceased'
        | 'frozen_bank_account'
        | 'risk_review'
        | 'fraudulent'
        | 'duplicate_entry'
        | 'invalid_paykey'
        | 'payment_blocked'
        | 'amount_too_large'
        | 'too_many_attempts'
        | 'internal_system_error'
        | 'user_request'
        | 'ok'
        | 'other_network_return'
        | 'payout_refused'
        | 'cancel_request'
        | 'failed_verification'
        | 'require_review'
        | 'blocked_by_system'
        | 'watchtower_review'
        | 'InsufficientFunds'
        | 'ClosedBankAccount'
        | 'InvalidBankAccount'
        | 'InvalidRouting'
        | 'Disputed'
        | 'PaymentStopped'
        | 'OwnerDeceased'
        | 'FrozenBankAccount'
        | 'RiskReview'
        | 'Fraudulent'
        | 'DuplicateEntry'
        | 'InvalidPaykey'
        | 'PaymentBlocked'
        | 'AmountTooLarge'
        | 'TooManyAttempts'
        | 'InternalSystemError'
        | 'UserRequest'
        | 'Ok'
        | 'OtherNetworkReturn'
        | 'PayoutRefused';

      source:
        | 'watchtower'
        | 'bank_decline'
        | 'customer_dispute'
        | 'user_action'
        | 'system'
        | 'Watchtower'
        | 'BankDecline'
        | 'CustomerDispute'
        | 'UserAction'
        | 'System';

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }
  }
}

export interface FundingEventSummaryPagedV1 {
  data: Array<FundingEventSummaryPagedV1.Data>;

  meta: FundingEventSummaryPagedV1.Meta;

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

export namespace FundingEventSummaryPagedV1 {
  export interface Data {
    /**
     * Unique identifier for the funding event.
     */
    id: string;

    /**
     * The amount of the funding event in cents.
     */
    amount: number;

    /**
     * Created at.
     */
    created_at: string;

    /**
     * Describes the direction of the funding event from the perspective of the
     * `linked_bank_account`.
     */
    direction: 'deposit' | 'withdrawal';

    /**
     * The funding event types describes the direction and reason for the funding
     * event.
     */
    event_type:
      | 'charge_deposit'
      | 'charge_reversal'
      | 'payout_return'
      | 'payout_withdrawal'
      | 'ChargeDeposit'
      | 'ChargeReversal'
      | 'PayoutReturn'
      | 'PayoutWithdrawal';

    /**
     * The number of payments associated with the funding event.
     */
    payment_count: number;

    /**
     * Trace Ids.
     */
    trace_ids: { [key: string]: string };

    /**
     * Trace number.
     */
    trace_numbers: Array<string>;

    /**
     * The date on which the funding event occurred. For `deposits` and `returns`, this
     * is the date the funds were credited to your bank account. For `withdrawals` and
     * `reversals`, this is the date the funds were debited from your bank account.
     */
    transfer_date: string;

    /**
     * Updated at.
     */
    updated_at: string;

    /**
     * The current status of the `charge` or `payout`.
     */
    status?:
      | 'created'
      | 'scheduled'
      | 'failed'
      | 'cancelled'
      | 'on_hold'
      | 'pending'
      | 'paid'
      | 'reversed'
      | 'Created'
      | 'Scheduled'
      | 'Failed'
      | 'Cancelled'
      | 'OnHold'
      | 'Pending'
      | 'Paid'
      | 'Reversed';

    status_details?: Data.StatusDetails;

    /**
     * The trace number of the funding event.
     */
    trace_number?: string | null;
  }

  export namespace Data {
    export interface StatusDetails {
      /**
       * The time the status change occurred.
       */
      changed_at: string;

      /**
       * A human-readable description of the current status.
       */
      message: string;

      reason:
        | 'insufficient_funds'
        | 'closed_bank_account'
        | 'invalid_bank_account'
        | 'invalid_routing'
        | 'disputed'
        | 'payment_stopped'
        | 'owner_deceased'
        | 'frozen_bank_account'
        | 'risk_review'
        | 'fraudulent'
        | 'duplicate_entry'
        | 'invalid_paykey'
        | 'payment_blocked'
        | 'amount_too_large'
        | 'too_many_attempts'
        | 'internal_system_error'
        | 'user_request'
        | 'ok'
        | 'other_network_return'
        | 'payout_refused'
        | 'cancel_request'
        | 'failed_verification'
        | 'require_review'
        | 'blocked_by_system'
        | 'watchtower_review'
        | 'InsufficientFunds'
        | 'ClosedBankAccount'
        | 'InvalidBankAccount'
        | 'InvalidRouting'
        | 'Disputed'
        | 'PaymentStopped'
        | 'OwnerDeceased'
        | 'FrozenBankAccount'
        | 'RiskReview'
        | 'Fraudulent'
        | 'DuplicateEntry'
        | 'InvalidPaykey'
        | 'PaymentBlocked'
        | 'AmountTooLarge'
        | 'TooManyAttempts'
        | 'InternalSystemError'
        | 'UserRequest'
        | 'Ok'
        | 'OtherNetworkReturn'
        | 'PayoutRefused';

      source:
        | 'watchtower'
        | 'bank_decline'
        | 'customer_dispute'
        | 'user_action'
        | 'system'
        | 'Watchtower'
        | 'BankDecline'
        | 'CustomerDispute'
        | 'UserAction'
        | 'System';

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }
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

export interface FundingEventListParams extends PageNumberSchemaParams {
  /**
   * Query param: The start date of the range to filter by using the `YYYY-MM-DD`
   * format.
   */
  created_from?: string | null;

  /**
   * Query param: The end date of the range to filter by using the `YYYY-MM-DD`
   * format.
   */
  created_to?: string | null;

  /**
   * Query param: Describes the direction of the funding event from the perspective
   * of the `linked_bank_account`.
   */
  direction?: 'deposit' | 'withdrawal';

  /**
   * Query param: The funding event types describes the direction and reason for the
   * funding event.
   */
  event_type?:
    | 'charge_deposit'
    | 'charge_reversal'
    | 'payout_return'
    | 'payout_withdrawal'
    | 'ChargeDeposit'
    | 'ChargeReversal'
    | 'PayoutReturn'
    | 'PayoutWithdrawal';

  /**
   * Query param: Payment status.
   */
  payment_status?: Array<
    | 'created'
    | 'scheduled'
    | 'failed'
    | 'cancelled'
    | 'on_hold'
    | 'pending'
    | 'paid'
    | 'reversed'
    | 'Created'
    | 'Scheduled'
    | 'Failed'
    | 'Cancelled'
    | 'OnHold'
    | 'Pending'
    | 'Paid'
    | 'Reversed'
  > | null;

  /**
   * Query param: Search text.
   */
  search_text?: string | null;

  /**
   * Query param: The field to sort the results by.
   */
  sort_by?: 'transfer_date' | 'id' | 'amount' | 'TransferDate' | 'Id' | 'Amount';

  /**
   * Query param: The order in which to sort the results.
   */
  sort_order?: 'asc' | 'desc' | 'Asc' | 'Desc';

  /**
   * Query param: Funding Event status.
   */
  status?: Array<
    | 'created'
    | 'scheduled'
    | 'failed'
    | 'cancelled'
    | 'on_hold'
    | 'pending'
    | 'paid'
    | 'reversed'
    | 'Created'
    | 'Scheduled'
    | 'Failed'
    | 'Cancelled'
    | 'OnHold'
    | 'Pending'
    | 'Paid'
    | 'Reversed'
  > | null;

  /**
   * Query param: Reason for latest payment status change.
   */
  status_reason?: Array<
    | 'insufficient_funds'
    | 'closed_bank_account'
    | 'invalid_bank_account'
    | 'invalid_routing'
    | 'disputed'
    | 'payment_stopped'
    | 'owner_deceased'
    | 'frozen_bank_account'
    | 'risk_review'
    | 'fraudulent'
    | 'duplicate_entry'
    | 'invalid_paykey'
    | 'payment_blocked'
    | 'amount_too_large'
    | 'too_many_attempts'
    | 'internal_system_error'
    | 'user_request'
    | 'ok'
    | 'other_network_return'
    | 'payout_refused'
    | 'cancel_request'
    | 'failed_verification'
    | 'require_review'
    | 'blocked_by_system'
    | 'watchtower_review'
    | 'InsufficientFunds'
    | 'ClosedBankAccount'
    | 'InvalidBankAccount'
    | 'InvalidRouting'
    | 'Disputed'
    | 'PaymentStopped'
    | 'OwnerDeceased'
    | 'FrozenBankAccount'
    | 'RiskReview'
    | 'Fraudulent'
    | 'DuplicateEntry'
    | 'InvalidPaykey'
    | 'PaymentBlocked'
    | 'AmountTooLarge'
    | 'TooManyAttempts'
    | 'InternalSystemError'
    | 'UserRequest'
    | 'Ok'
    | 'OtherNetworkReturn'
    | 'PayoutRefused'
  > | null;

  /**
   * Query param: Source of latest payment status change.
   */
  status_source?: Array<
    | 'watchtower'
    | 'bank_decline'
    | 'customer_dispute'
    | 'user_action'
    | 'system'
    | 'Watchtower'
    | 'BankDecline'
    | 'CustomerDispute'
    | 'UserAction'
    | 'System'
  > | null;

  /**
   * Query param: Trace Id.
   */
  trace_id?: string | null;

  /**
   * Query param: Trace number.
   */
  trace_number?: string | null;

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
   * Header param: For use by platforms to specify an account id and set scope of a
   * request.
   */
  'Straddle-Account-Id'?: string;
}

export interface FundingEventGetParams {
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

export declare namespace FundingEvents {
  export {
    type FundingEventSummaryItemV1 as FundingEventSummaryItemV1,
    type FundingEventSummaryPagedV1 as FundingEventSummaryPagedV1,
    type FundingEventSummaryPagedV1DataPageNumberSchema as FundingEventSummaryPagedV1DataPageNumberSchema,
    type FundingEventListParams as FundingEventListParams,
    type FundingEventGetParams as FundingEventGetParams,
  };
}
