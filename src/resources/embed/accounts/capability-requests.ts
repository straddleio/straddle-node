// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { PageNumberSchema, type PageNumberSchemaParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CapabilityRequests extends APIResource {
  /**
   * Submits a request to enable a specific capability for an account. Use this
   * endpoint to request additional features or services for an account.
   *
   * @example
   * ```ts
   * const capabilityRequestPagedV1 =
   *   await client.embed.accounts.capabilityRequests.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  create(
    accountID: string,
    params: CapabilityRequestCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CapabilityRequestPagedV1> {
    const {
      'correlation-id': correlationID,
      'idempotency-key': idempotencyKey,
      'request-id': requestID,
      ...body
    } = params ?? {};
    return this._client.post(path`/v1/accounts/${accountID}/capability_requests`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
          ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined),
          ...(requestID != null ? { 'request-id': requestID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a list of capability requests associated with an account. The requests
   * are returned sorted by creation date, with the most recent requests appearing
   * first. This endpoint supports advanced sorting and filtering options.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const capabilityRequest of client.embed.accounts.capabilityRequests.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    accountID: string,
    params: CapabilityRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CapabilityRequestPagedV1DataPageNumberSchema, CapabilityRequestPagedV1.Data> {
    const { 'correlation-id': correlationID, 'request-id': requestID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/v1/accounts/${accountID}/capability_requests`,
      PageNumberSchema<CapabilityRequestPagedV1.Data>,
      {
        query,
        ...options,
        headers: buildHeaders([
          {
            ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
            ...(requestID != null ? { 'request-id': requestID } : undefined),
          },
          options?.headers,
        ]),
      },
    );
  }
}

export type CapabilityRequestPagedV1DataPageNumberSchema = PageNumberSchema<CapabilityRequestPagedV1.Data>;

export interface CapabilityRequestPagedV1 {
  data: Array<CapabilityRequestPagedV1.Data>;

  /**
   * Metadata about the API request, including an identifier, timestamp, and
   * pagination details.
   */
  meta: Shared.PagedResponseMetadata;

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

export namespace CapabilityRequestPagedV1 {
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
    settings?: { [key: string]: unknown } | null;
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
   * Header param: Optional client generated value to use for idempotent requests.
   */
  'idempotency-key'?: string;

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

export declare namespace CapabilityRequests {
  export {
    type CapabilityRequestPagedV1 as CapabilityRequestPagedV1,
    type CapabilityRequestPagedV1DataPageNumberSchema as CapabilityRequestPagedV1DataPageNumberSchema,
    type CapabilityRequestCreateParams as CapabilityRequestCreateParams,
    type CapabilityRequestListParams as CapabilityRequestListParams,
  };
}
