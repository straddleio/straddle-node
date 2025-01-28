// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { PageNumberSchema, type PageNumberSchemaParams } from '../pagination';

export class FundingEvents extends APIResource {
  /**
   * Search funding events.
   */
  list(
    params?: FundingEventListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FundingEventSummaryPagedDataPageNumberSchema, FundingEventSummaryPaged.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<FundingEventSummaryPagedDataPageNumberSchema, FundingEventSummaryPaged.Data>;
  list(
    params: FundingEventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FundingEventSummaryPagedDataPageNumberSchema, FundingEventSummaryPaged.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...query
    } = params;
    return this._client.getAPIList('/v1/funding_events', FundingEventSummaryPagedDataPageNumberSchema, {
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

  /**
   * Get a funding event by id.
   */
  get(
    id: string,
    params?: FundingEventGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FundingEventSummaryItem>;
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<FundingEventSummaryItem>;
  get(
    id: string,
    params: FundingEventGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FundingEventSummaryItem> {
    if (isRequestOptions(params)) {
      return this.get(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/funding_events/${id}`, {
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

export class FundingEventSummaryPagedDataPageNumberSchema extends PageNumberSchema<FundingEventSummaryPaged.Data> {}

export interface FundingEventSummaryItem {
  data: FundingEventSummaryItem.Data;

  meta: FundingEventSummaryItem.Meta;

  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace FundingEventSummaryItem {
  export interface Data {
    /**
     * Id.
     */
    id: string;

    /**
     * Amount.
     */
    amount: number;

    direction: 'deposit' | 'withdrawal';

    event_type: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal';

    /**
     * Payment count.
     */
    payment_count: number;

    /**
     * Trace number.
     */
    trace_numbers: Array<string>;

    /**
     * Transfer date.
     */
    transfer_date: string;
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
  }
}

export interface FundingEventSummaryPaged {
  data: Array<FundingEventSummaryPaged.Data>;

  meta: FundingEventSummaryPaged.Meta;

  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace FundingEventSummaryPaged {
  export interface Data {
    /**
     * Id.
     */
    id: string;

    /**
     * Amount.
     */
    amount: number;

    direction: 'deposit' | 'withdrawal';

    event_type: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal';

    /**
     * Payment count.
     */
    payment_count: number;

    /**
     * Trace number.
     */
    trace_numbers: Array<string>;

    /**
     * Transfer date.
     */
    transfer_date: string;
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

export interface FundingEventListParams extends PageNumberSchemaParams {
  /**
   * Query param: Created from.
   */
  created_from?: string | null;

  /**
   * Query param: Created to.
   */
  created_to?: string | null;

  /**
   * Query param:
   */
  direction?: 'deposit' | 'withdrawal';

  /**
   * Query param:
   */
  event_type?: 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal';

  /**
   * Query param:
   */
  sort_by?: 'transfer_date' | 'id' | 'amount';

  /**
   * Query param:
   */
  sort_order?: 'asc' | 'desc';

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

FundingEvents.FundingEventSummaryPagedDataPageNumberSchema = FundingEventSummaryPagedDataPageNumberSchema;

export declare namespace FundingEvents {
  export {
    type FundingEventSummaryItem as FundingEventSummaryItem,
    type FundingEventSummaryPaged as FundingEventSummaryPaged,
    FundingEventSummaryPagedDataPageNumberSchema as FundingEventSummaryPagedDataPageNumberSchema,
    type FundingEventListParams as FundingEventListParams,
    type FundingEventGetParams as FundingEventGetParams,
  };
}
