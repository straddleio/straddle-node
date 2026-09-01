// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as AccountsAPI from './accounts';

export class Organizations extends APIResource {
  /**
   * Creates an organization for your platform and returns it. Organizations group related accounts and users.
   *
   * @param {OrganizationCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationResponse>} Created
   *
   * @example
   * ```ts
   * const organization = await client.organizations.create({
   *   name: '',
   * });
   * ```
   */
  create(params: OrganizationCreateParams, options?: RequestOptions): APIPromise<OrganizationResponse> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/organizations', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a paginated list of organizations for your platform. Filter the list by name or external ID.
   *
   * @param {OrganizationListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationList>} OK
   *
   * @example
   * ```ts
   * const organizationList = await client.organizations.list({
   *   page_number: 1,
   *   page_size: 100,
   *   sort_by: 'id',
   *   sort_order: 'asc',
   * });
   * ```
   */
  list(
    params: OrganizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationList> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID, ...query } = params ?? {};
    return this._client.get('/v1/organizations', {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns the organization with the specified ID.
   *
   * @param {string} organizationID - The ID of the organization.
   * @param {OrganizationRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OrganizationResponse>} OK
   *
   * @example
   * ```ts
   * const organization = await client.organizations.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    organizationID: string,
    params: OrganizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationResponse> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID } = params ?? {};
    return this._client.get(__scalarPath`/v1/organizations/${organizationID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }
}

export interface OrganizationResponse {
  /**
   * Metadata for an API request.
   */
  meta: AccountsAPI.ResponseMetadata;
  /**
   * Indicates how the response content is structured.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of objects.
   * - `error` means `error` contains error details.
   * - `none` means the response has no data.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
  data: Organization;
}

export interface OrganizationList {
  /**
   * Metadata for an API request and a page of results.
   */
  meta: AccountsAPI.PageMetadata;
  /**
   * Indicates how the response content is structured.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of objects.
   * - `error` means `error` contains error details.
   * - `none` means the response has no data.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
  /**
   * Organizations returned for this page.
   */
  data: Array<Organization>;
}

export interface Organization {
  /**
   * Straddle's unique ID for the organization.
   * @format uuid
   */
  id: string;
  /**
   * The name of the organization.
   */
  name: string;
  /**
   * Date and time when Straddle created the organization.
   * @format date-time
   */
  created_at: string;
  /**
   * Date and time of the most recent organization update.
   * @format date-time
   */
  updated_at: string;
  /**
   * Your unique ID for the organization.
   */
  external_id?: string | null;
  /**
   * Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string | null> | null;
}

export interface OrganizationCreateParams {
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
   * Body param: Organization name.
   */
  name: string;
  /**
   * Body param: Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string | null> | null;
  /**
   * Body param: Your unique ID for the organization.
   */
  external_id?: string | null;
}

export interface OrganizationListParams {
  /**
   * Query param: Organization name. Supports partial matches.
   */
  name?: string;
  /**
   * Query param: Your external ID for the organization.
   */
  external_id?: string;
  /**
   * Query param: Page number. Defaults to `1`.
   * @format int32
   */
  page_number?: number;
  /**
   * Query param: Number of results per page. Defaults to `100`. Maximum `1000`.
   * @format int32
   */
  page_size?: number;
  /**
   * Query param: Field used to sort results. Defaults to `id`.
   */
  sort_by?: string;
  /**
   * Query param: Sort direction. Defaults to `asc`.
   */
  sort_order?: 'asc' | 'desc';
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface OrganizationRetrieveParams {
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}
export declare namespace Organizations {
  export {
    type OrganizationResponse as OrganizationResponse,
    type OrganizationList as OrganizationList,
    type Organization as Organization,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationRetrieveParams as OrganizationRetrieveParams,
  };
}
