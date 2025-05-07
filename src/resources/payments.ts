// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { PageNumberSchema, type PageNumberSchemaParams } from '../pagination';

export class Payments extends APIResource {
  /**
   * Search for payments, including `charges` and `payouts`, using a variety of
   * criteria. This endpoint supports advanced sorting and filtering options.
   */
  list(
    params?: PaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentSummaryPagedV1DataPageNumberSchema, PaymentSummaryPagedV1.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentSummaryPagedV1DataPageNumberSchema, PaymentSummaryPagedV1.Data>;
  list(
    params: PaymentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentSummaryPagedV1DataPageNumberSchema, PaymentSummaryPagedV1.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...query
    } = params;
    return this._client.getAPIList('/v1/payments', PaymentSummaryPagedV1DataPageNumberSchema, {
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

export class PaymentSummaryPagedV1DataPageNumberSchema extends PageNumberSchema<PaymentSummaryPagedV1.Data> {}

export interface PaymentSummaryPagedV1 {
  data: Array<PaymentSummaryPagedV1.Data>;

  meta: PaymentSummaryPagedV1.Meta;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace PaymentSummaryPagedV1 {
  export interface Data {
    /**
     * Unique identifier for the `charge` or `payout`.
     */
    id: string;

    /**
     * The amount of the `charge` or `payout` in cents.
     */
    amount: number;

    /**
     * The time the `charge` or `payout` was created.
     */
    created_at: string;

    /**
     * The currency of the `charge` or `payout`. Only USD is supported.
     */
    currency: string;

    /**
     * An arbitrary description for the `charge` or `payout`.
     */
    description: string;

    /**
     * Unique identifier for the `charge` or `payout` in your database. This value must
     * be unique across all charges or payouts.
     */
    external_id: string;

    /**
     * Funding ids.
     */
    funding_ids: Array<string>;

    /**
     * Value of the `paykey` used for the `charge` or `payout`.
     */
    paykey: string;

    /**
     * The desired date on which the payment should be occur. For charges, this means
     * the date you want the customer to be debited on. For payouts, this means the
     * date you want the funds to be sent from your bank account.
     */
    payment_date: string;

    /**
     * The type of payment. Valid values are `charge` or `payout`.
     */
    payment_type: 'charge' | 'payout';

    /**
     * The current status of the `charge` or `payout`.
     */
    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';

    /**
     * Details about the current status of the `charge` or `payout`.
     */
    status_details: Shared.StatusDetailsV1;

    /**
     * The time the `charge` or `payout` was last updated.
     */
    updated_at: string;

    /**
     * Information about the customer associated with the charge or payout.
     */
    customer_details?: Shared.CustomerDetailsV1;

    /**
     * The actual date on which the payment occurred. For charges, this is the date the
     * customer was debited. For payouts, this is the date the funds were sent from
     * your bank account.
     */
    effective_at?: string | null;

    /**
     * Unique identifier for the funding event associated with the `charge` or
     * `payout`.
     */
    funding_id?: string | null;

    /**
     * Information about the paykey used for the `charge` or `payout`.
     */
    paykey_details?: Shared.PaykeyDetailsV1;
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
   * Query param: Search using the `customer_id` of a `charge` or `payout`.
   */
  customer_id?: string;

  /**
   * Query param:
   */
  default_page_size?: number;

  /**
   * Query param: The field to sort the results by.
   */
  default_sort?: 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount';

  /**
   * Query param:
   */
  default_sort_order?: 'asc' | 'desc';

  /**
   * Query param: Search using the `external_id` of a `charge` or `payout`.
   */
  external_id?: string;

  /**
   * Query param: Search using the `funding_id` of a `charge` or `payout`.
   */
  funding_id?: string;

  /**
   * Query param: Search using a maximum `amount` of a `charge` or `payout`.
   */
  max_amount?: number;

  /**
   * Query param: Search using the latest `created_at` date of a `charge` or
   * `payout`.
   */
  max_created_at?: string;

  /**
   * Query param: Search using the latest `effective_date` of a `charge` or `payout`.
   */
  max_effective_at?: string;

  /**
   * Query param: Search using the latest `payment_date` of a `charge` or `payout`.
   */
  max_payment_date?: string;

  /**
   * Query param: Search using the minimum `amount of a `charge`or`payout`.
   */
  min_amount?: number;

  /**
   * Query param: Search using the earliest `created_at` date of a `charge` or
   * `payout`.
   */
  min_created_at?: string;

  /**
   * Query param: Search using the earliest `effective_date` of a `charge` or
   * `payout`.
   */
  min_effective_at?: string;

  /**
   * Query param: Search using the earliest ` `of a `charge` or `payout`.
   */
  min_payment_date?: string;

  /**
   * Query param: Search using the `paykey` of a `charge` or `payout`.
   */
  paykey?: string;

  /**
   * Query param: Search using the `paykey_id` of a `charge` or `payout`.
   */
  paykey_id?: string;

  /**
   * Query param: Search using the `id` of a `charge` or `payout`.
   */
  payment_id?: string;

  /**
   * Query param: Search by the status of a `charge` or `payout`.
   */
  payment_status?: Array<
    'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed'
  >;

  /**
   * Query param: Search by the type of a `charge` or `payout`.
   */
  payment_type?: Array<'charge' | 'payout'>;

  /**
   * Query param: Search using a text string associated with a `charge` or `payout`.
   */
  search_text?: string;

  /**
   * Query param: The field to sort the results by.
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

Payments.PaymentSummaryPagedV1DataPageNumberSchema = PaymentSummaryPagedV1DataPageNumberSchema;

export declare namespace Payments {
  export {
    type PaymentSummaryPagedV1 as PaymentSummaryPagedV1,
    PaymentSummaryPagedV1DataPageNumberSchema as PaymentSummaryPagedV1DataPageNumberSchema,
    type PaymentListParams as PaymentListParams,
  };
}
