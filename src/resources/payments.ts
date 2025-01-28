// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { PageNumberSchema, type PageNumberSchemaParams } from '../pagination';

export class Payments extends APIResource {
  /**
   * Search payments.
   */
  list(
    params?: PaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentSummaryPagedDataPageNumberSchema, PaymentSummaryPaged.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentSummaryPagedDataPageNumberSchema, PaymentSummaryPaged.Data>;
  list(
    params: PaymentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentSummaryPagedDataPageNumberSchema, PaymentSummaryPaged.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...query
    } = params;
    return this._client.getAPIList('/v1/payments', PaymentSummaryPagedDataPageNumberSchema, {
      query,
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }
}

export class PaymentSummaryPagedDataPageNumberSchema extends PageNumberSchema<PaymentSummaryPaged.Data> {}

export interface PaymentSummaryPaged {
  data: Array<PaymentSummaryPaged.Data>;

  meta: PaymentSummaryPaged.Meta;

  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace PaymentSummaryPaged {
  export interface Data {
    /**
     * Id.
     */
    id: string;

    /**
     * Amount.
     */
    amount: number;

    /**
     * Created at.
     */
    created_at: string;

    /**
     * Currency.
     */
    currency: string;

    /**
     * Description.
     */
    description: string;

    /**
     * External id.
     */
    external_id: string;

    /**
     * Paykey.
     */
    paykey: string;

    /**
     * Payment date.
     */
    payment_date: string;

    payment_type: 'charge' | 'payout';

    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';

    status_details: Data.StatusDetails;

    /**
     * Updated at.
     */
    updated_at: string;

    customer_details?: Data.CustomerDetails;

    /**
     * Effective at.
     */
    effective_at?: string | null;

    /**
     * Funding id.
     */
    funding_id?: string | null;

    paykey_details?: Data.PaykeyDetails;
  }

  export namespace Data {
    export interface StatusDetails {
      /**
       * The time the status change occurred.
       */
      changed_at: string;

      /**
       * A human-readable description of the status.
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
        | 'payout_refused';

      source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    export interface CustomerDetails {
      /**
       * Id.
       */
      id: string;

      customer_type: 'unknown' | 'individual' | 'business';

      /**
       * Email.
       */
      email: string;

      /**
       * Name.
       */
      name: string;

      /**
       * Phone.
       */
      phone: string;
    }

    export interface PaykeyDetails {
      /**
       * Id.
       */
      id: string;

      /**
       * Customer id.
       */
      customer_id: string;

      /**
       * Label.
       */
      label: string;

      /**
       * Balance.
       */
      balance?: number | null;
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

    sort_order: 'asc' | 'desc';

    total_items: number;

    /**
     * The number of pages available.
     */
    total_pages: number;
  }
}

export interface PaymentListParams extends PageNumberSchemaParams {
  /**
   * Query param: Customer id.
   */
  customer_id?: string;

  /**
   * Query param:
   */
  default_page_size?: number;

  /**
   * Query param:
   */
  default_sort?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount';

  /**
   * Query param:
   */
  default_sort_order?: 'asc' | 'desc';

  /**
   * Query param: External id.
   */
  external_id?: string;

  /**
   * Query param: Funding id.
   */
  funding_id?: string;

  /**
   * Query param: Maximum amount.
   */
  max_amount?: number;

  /**
   * Query param: Maximum created at.
   */
  max_created_at?: string;

  /**
   * Query param: Maximum effective at.
   */
  max_effective_at?: string;

  /**
   * Query param: Maximum payment date.
   */
  max_payment_date?: string;

  /**
   * Query param: Minimum amount.
   */
  min_amount?: number;

  /**
   * Query param: Minimum created at.
   */
  min_created_at?: string;

  /**
   * Query param: Minimum effective at.
   */
  min_effective_at?: string;

  /**
   * Query param: Minimum payment date.
   */
  min_payment_date?: string;

  /**
   * Query param: Paykey.
   */
  paykey?: string;

  /**
   * Query param: Paykey id.
   */
  paykey_id?: string;

  /**
   * Query param: Payment id.
   */
  payment_id?: string;

  /**
   * Query param: Payment status.
   */
  payment_status?: Array<
    'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed'
  >;

  /**
   * Query param: Payment type.
   */
  payment_type?: Array<'charge' | 'payout'>;

  /**
   * Query param: Search text.
   */
  search_text?: string;

  /**
   * Query param:
   */
  sort_by?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount';

  /**
   * Query param:
   */
  sort_order?: 'asc' | 'desc';

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

Payments.PaymentSummaryPagedDataPageNumberSchema = PaymentSummaryPagedDataPageNumberSchema;

export declare namespace Payments {
  export {
    type PaymentSummaryPaged as PaymentSummaryPaged,
    PaymentSummaryPagedDataPageNumberSchema as PaymentSummaryPagedDataPageNumberSchema,
    type PaymentListParams as PaymentListParams,
  };
}
