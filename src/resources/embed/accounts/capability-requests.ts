// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { PageNumberSchema, type PageNumberSchemaParams } from '../../../pagination';

export class CapabilityRequests extends APIResource {
  /**
   * Submits a request to enable a specific capability for an account. Use this
   * endpoint to request additional features or services for an account.
   */
  create(
    accountId: string,
    params?: CapabilityRequestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CapabilityRequestPaged>;
  create(accountId: string, options?: Core.RequestOptions): Core.APIPromise<CapabilityRequestPaged>;
  create(
    accountId: string,
    params: CapabilityRequestCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CapabilityRequestPaged> {
    if (isRequestOptions(params)) {
      return this.create(accountId, {}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId, ...body } = params;
    return this._client.post(`/v1/accounts/${accountId}/capability_requests`, {
      body,
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves a list of capability requests associated with an account. The requests
   * are returned sorted by creation date, with the most recent requests appearing
   * first. This endpoint supports advanced sorting and filtering options.
   */
  list(
    accountId: string,
    params?: CapabilityRequestListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CapabilityRequestPagedDataPageNumberSchema, CapabilityRequestPaged.Data>;
  list(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CapabilityRequestPagedDataPageNumberSchema, CapabilityRequestPaged.Data>;
  list(
    accountId: string,
    params: CapabilityRequestListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CapabilityRequestPagedDataPageNumberSchema, CapabilityRequestPaged.Data> {
    if (isRequestOptions(params)) {
      return this.list(accountId, {}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId, ...query } = params;
    return this._client.getAPIList(
      `/v1/accounts/${accountId}/capability_requests`,
      CapabilityRequestPagedDataPageNumberSchema,
      {
        query,
        ...options,
        headers: {
          ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
          ...(requestId != null ? { 'request-id': requestId } : undefined),
          ...options?.headers,
        },
      },
    );
  }
}

export class CapabilityRequestPagedDataPageNumberSchema extends PageNumberSchema<CapabilityRequestPaged.Data> {}

export interface CapabilityRequestPaged {
  data: Array<CapabilityRequestPaged.Data>;

  /**
   * Metadata about the API request, including an identifier, timestamp, and
   * pagination details.
   */
  meta: CapabilityRequestPaged.Meta;

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

export namespace CapabilityRequestPaged {
  export interface Data {
    /**
     * Unique identifier for the capability request.
     */
    id: string;

    /**
     * The unique identifier of the account associated with this capability request.
     */
    account_id: string;

    /**
     * The category of the requested capability. Use `payment_type` for charges and
     * payouts, `customer_type` to define `individuals` or `businesses`, and
     * `consent_type` for `signed_agreement` or `internet` payment authorization.
     */
    category: 'payment_type' | 'customer_type' | 'consent_type';

    /**
     * Timestamp of when the capability request was created.
     */
    created_at: string;

    /**
     * The current status of the capability request.
     */
    status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing';

    /**
     * The specific type of capability being requested within the category.
     */
    type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet';

    /**
     * Timestamp of the most recent update to the capability request.
     */
    updated_at: string;

    /**
     * Any specific settings or configurations related to the requested capability.
     */
    settings?: Record<string, unknown> | null;
  }

  /**
   * Metadata about the API request, including an identifier, timestamp, and
   * pagination details.
   */
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

    /**
     * The order that the results were sorted by.
     */
    sort_order: 'asc' | 'desc';

    /**
     * Total number of items returned in this response.
     */
    total_items: number;

    /**
     * The number of pages available.
     */
    total_pages: number;
  }
}

export interface CapabilityRequestCreateParams {
  /**
   * Body param: Allows the account to accept payments from businesses.
   */
  businesses?: CapabilityRequestCreateParams.Businesses;

  /**
   * Body param: The charges capability settings for the account.
   */
  charges?: CapabilityRequestCreateParams.Charges;

  /**
   * Body param: Allows the account to accept payments from individuals.
   */
  individuals?: CapabilityRequestCreateParams.Individuals;

  /**
   * Body param: Allows the account to accept payments authorized via the internet or
   * mobile applications.
   */
  internet?: CapabilityRequestCreateParams.Internet;

  /**
   * Body param: The payouts capability settings for the account.
   */
  payouts?: CapabilityRequestCreateParams.Payouts;

  /**
   * Body param: Allows the account to accept payments authorized by signed
   * agreements or contracts.
   */
  signed_agreement?: CapabilityRequestCreateParams.SignedAgreement;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'correlation-id'?: string;

  /**
   * Header param: Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export namespace CapabilityRequestCreateParams {
  /**
   * Allows the account to accept payments from businesses.
   */
  export interface Businesses {
    enable: boolean;
  }

  /**
   * The charges capability settings for the account.
   */
  export interface Charges {
    /**
     * The maximum dollar amount of charges in a calendar day.
     */
    daily_amount: number;

    /**
     * Determines whether `charges` are enabled for the account.
     */
    enable: boolean;

    /**
     * The maximum amount of a single charge.
     */
    max_amount: number;

    /**
     * The maximum dollar amount of charges in a calendar month.
     */
    monthly_amount: number;

    /**
     * The maximum number of charges in a calendar month.
     */
    monthly_count: number;
  }

  /**
   * Allows the account to accept payments from individuals.
   */
  export interface Individuals {
    enable: boolean;
  }

  /**
   * Allows the account to accept payments authorized via the internet or mobile
   * applications.
   */
  export interface Internet {
    enable: boolean;
  }

  /**
   * The payouts capability settings for the account.
   */
  export interface Payouts {
    /**
     * The maximum dollar amount of payouts in a day.
     */
    daily_amount: number;

    /**
     * Determines whether `payouts` are enabled for the account.
     */
    enable: boolean;

    /**
     * The maximum amount of a single payout.
     */
    max_amount: number;

    /**
     * The maximum dollar amount of payouts in a month.
     */
    monthly_amount: number;

    /**
     * The maximum number of payouts in a month.
     */
    monthly_count: number;
  }

  /**
   * Allows the account to accept payments authorized by signed agreements or
   * contracts.
   */
  export interface SignedAgreement {
    enable: boolean;
  }
}

export interface CapabilityRequestListParams extends PageNumberSchemaParams {
  /**
   * Query param: Filter capability requests by category.
   */
  category?: 'payment_type' | 'customer_type' | 'consent_type';

  /**
   * Query param: Sort By.
   */
  sort_by?: string;

  /**
   * Query param: Sort Order.
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Query param: Filter capability requests by their current status.
   */
  status?: 'active' | 'inactive' | 'in_review' | 'rejected';

  /**
   * Query param: Filter capability requests by the specific type of capability.
   */
  type?: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet';

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'correlation-id'?: string;

  /**
   * Header param: Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

CapabilityRequests.CapabilityRequestPagedDataPageNumberSchema = CapabilityRequestPagedDataPageNumberSchema;

export declare namespace CapabilityRequests {
  export {
    type CapabilityRequestPaged as CapabilityRequestPaged,
    CapabilityRequestPagedDataPageNumberSchema as CapabilityRequestPagedDataPageNumberSchema,
    type CapabilityRequestCreateParams as CapabilityRequestCreateParams,
    type CapabilityRequestListParams as CapabilityRequestListParams,
  };
}
