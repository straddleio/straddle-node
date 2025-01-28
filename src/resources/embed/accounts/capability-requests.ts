// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { PageNumberSchema, type PageNumberSchemaParams } from '../../../pagination';

export class CapabilityRequests extends APIResource {
  /**
   * Submits a new request to enable a specific capability for an account. Use this
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
   * first. This endpoint supports filtering options to help you track the status of
   * various capability requests.
   */
  list(
    accountId: string,
    params: CapabilityRequestListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CapabilityRequestPagedDataPageNumberSchema, CapabilityRequestPaged.Data> {
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

  meta: CapabilityRequestPaged.Meta;

  /**
   * Indicates the type of data returned.
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
     * The category of the requested capability. Possible values: 'payment_type',
     * 'customer_type', 'consent_type'.
     */
    category: 'payment_type' | 'customer_type' | 'consent_type';

    /**
     * Timestamp of when the capability request was created.
     */
    created_at: string;

    /**
     * The current status of the capability request. Possible values: 'active',
     * 'inactive', 'in_review', 'rejected'.
     */
    status: 'approved' | 'rejected' | 'reviewing';

    /**
     * The specific type of capability being requested within the category. Possible
     * values: 'charges', 'payouts', 'individuals', 'businesses', 'signed_agreement',
     * 'internet'.
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

    total_items: number;

    /**
     * The number of pages available.
     */
    total_pages: number;
  }
}

export interface CapabilityRequestCreateParams {
  /**
   * Body param:
   */
  businesses?: CapabilityRequestCreateParams.Businesses;

  /**
   * Body param:
   */
  charges?: CapabilityRequestCreateParams.Charges;

  /**
   * Body param:
   */
  individuals?: CapabilityRequestCreateParams.Individuals;

  /**
   * Body param:
   */
  internet?: CapabilityRequestCreateParams.Internet;

  /**
   * Body param:
   */
  payouts?: CapabilityRequestCreateParams.Payouts;

  /**
   * Body param:
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
  export interface Businesses {
    enable: boolean;
  }

  export interface Charges {
    daily_amount: number;

    enable: boolean;

    max_amount: number;

    monthly_amount: number;

    monthly_count: number;
  }

  export interface Individuals {
    enable: boolean;
  }

  export interface Internet {
    enable: boolean;
  }

  export interface Payouts {
    daily_amount: number;

    enable: boolean;

    max_amount: number;

    monthly_amount: number;

    monthly_count: number;
  }

  export interface SignedAgreement {
    enable: boolean;
  }
}

export interface CapabilityRequestListParams extends PageNumberSchemaParams {
  /**
   * Query param: Sort By. Default value: 'id'.
   */
  sort_by: string;

  /**
   * Query param: Sort Order. Default value: 'asc'.
   */
  sort_order: 'asc' | 'desc';

  /**
   * Query param: Filter capability requests by category. Possible values:
   * 'payment_type', 'customer_type', 'consent_type'.
   */
  category?: 'payment_type' | 'customer_type' | 'consent_type';

  /**
   * Query param: Filter capability requests by their current status. Possible
   * values: 'active', 'inactive', 'in_review', 'rejected'.
   */
  status?: 'approved' | 'rejected' | 'reviewing';

  /**
   * Query param: Filter capability requests by the specific type of capability.
   * Possible values: 'charges', 'payouts', 'individuals', 'businesses',
   * 'signed_agreement', 'internet'.
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
