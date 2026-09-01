// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as AccountsAPI from './accounts';

export class Representatives extends APIResource {
  /**
   * Creates a representative for an account and returns the representative. Relationship fields identify primary representatives, control persons, and owners.
   *
   * @param {RepresentativeCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepresentativeResponse>} Created
   *
   * @example
   * ```ts
   * const representative = await client.representatives.create({
   *   account_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   first_name: '',
   *   last_name: '',
   *   dob: '1980-01-01',
   *   ssn_last4: '1234',
   *   email: 'ron.swanson@pawnee.com',
   *   mobile_number: '+12128675309',
   *   relationship: {
   *     primary: false,
   *     control: false,
   *     owner: false,
   *   },
   * });
   * ```
   */
  create(params: RepresentativeCreateParams, options?: RequestOptions): APIPromise<RepresentativeResponse> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/representatives', {
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
   * Returns a paginated list of representatives. Filter the list by account, organization, platform, or scope.
   *
   * @param {RepresentativeListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepresentativeList>} OK
   *
   * @example
   * ```ts
   * const representativeList = await client.representatives.list({
   *   page_number: 1,
   *   page_size: 100,
   *   sort_by: 'id',
   *   sort_order: 'asc',
   * });
   * ```
   */
  list(
    params: RepresentativeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RepresentativeList> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID, ...query } = params ?? {};
    return this._client.get('/v1/representatives', {
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
   * Updates a representative's personal, contact, relationship, external ID, and metadata fields, then returns the representative.
   *
   * @param {string} representativeID - The ID of the representative.
   * @param {RepresentativeUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepresentativeResponse>} OK
   *
   * @example
   * ```ts
   * const representative = await client.representatives.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   first_name: 'Ron',
   *   last_name: 'Swanson',
   *   dob: '1980-01-01',
   *   ssn_last4: '1234',
   *   email: 'ron.swanson@pawnee.com',
   *   mobile_number: '+12128675309',
   *   relationship: {
   *     primary: false,
   *     control: false,
   *     owner: false,
   *   },
   * });
   * ```
   */
  update(
    representativeID: string,
    params: RepresentativeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RepresentativeResponse> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.put(__scalarPath`/v1/representatives/${representativeID}`, {
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
   * Returns the representative with the specified ID.
   *
   * @param {string} representativeID - The ID of the representative.
   * @param {RepresentativeRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RepresentativeResponse>} OK
   *
   * @example
   * ```ts
   * const representative = await client.representatives.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    representativeID: string,
    params: RepresentativeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RepresentativeResponse> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID } = params ?? {};
    return this._client.get(__scalarPath`/v1/representatives/${representativeID}`, {
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
   * Returns the representative with the specified ID without masking sensitive fields. This endpoint requires an administrator role.
   *
   * @param {string} representativeID - The ID of the representative.
   * @param {RepresentativeListUnmaskedParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UnmaskedRepresentativeResponse>} OK
   *
   * @example
   * ```ts
   * const unmaskedRepresentative = await client.representatives.listUnmasked(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * );
   * ```
   */
  listUnmasked(
    representativeID: string,
    params: RepresentativeListUnmaskedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnmaskedRepresentativeResponse> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID } = params ?? {};
    return this._client.get(__scalarPath`/v1/representatives/${representativeID}/unmask`, {
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

export interface RepresentativeResponse {
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
  data: Representative;
}

export interface RepresentativeList {
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
   * Representatives returned for this page.
   */
  data: Array<Representative>;
}

export interface UnmaskedRepresentativeResponse {
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
  data: UnmaskedRepresentative;
}

export interface Representative {
  /**
   * Straddle's unique ID for the representative.
   * @format uuid
   */
  id: string;
  /**
   * ID of the account associated with the representative.
   * @format uuid
   */
  account_id: string;
  /**
   * Status of the representative.
   */
  status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';
  status_detail: RepresentativeStatusDetail;
  /**
   * Representative's first name.
   */
  first_name: string;
  /**
   * Representative's last name.
   */
  last_name: string;
  /**
   * Representative's date of birth in `YYYY-MM-DD` format.
   * @format date
   */
  dob: string;
  /**
   * Last four digits of the representative's Social Security number.
   */
  ssn_last4: string;
  /**
   * Representative's email address.
   * @format email
   */
  email: string | null;
  /**
   * Representative's mobile phone number in E.164 format.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  mobile_number: string;
  relationship: RepresentativeRelationship;
  /**
   * Date and time when Straddle created the representative.
   * @format date-time
   */
  created_at: string;
  /**
   * Date and time of the most recent representative update.
   * @format date-time
   */
  updated_at: string;
  /**
   * Representative's display name.
   */
  name: string;
  /**
   * ID of the Straddle user linked to the representative, if any.
   * @format uuid
   */
  user_id?: string | null;
  /**
   * Your unique ID for the representative.
   */
  external_id?: string | null;
  /**
   * Representative's phone number.
   */
  phone?: string | null;
  /**
   * Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string> | null;
}

export interface UnmaskedRepresentative {
  /**
   * Straddle's unique ID for the representative.
   * @format uuid
   */
  id: string;
  /**
   * ID of the account associated with the representative.
   * @format uuid
   */
  account_id: string;
  /**
   * Status of the representative.
   */
  status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';
  status_detail: RepresentativeStatusDetail;
  /**
   * Representative's first name.
   */
  first_name: string;
  /**
   * Representative's last name.
   */
  last_name: string;
  /**
   * Representative's date of birth in `YYYY-MM-DD` format.
   * @format date
   */
  dob: string;
  /**
   * Representative's email address.
   */
  email: string;
  /**
   * Representative's mobile phone number.
   */
  mobile_number: string;
  relationship: RepresentativeRelationship;
  /**
   * Date and time when Straddle created the representative.
   * @format date-time
   */
  created_at: string;
  /**
   * Date and time of the most recent representative update.
   * @format date-time
   */
  updated_at: string;
  /**
   * Last four digits of the representative's Social Security number.
   */
  ssn_last4: string;
  /**
   * ID of the Straddle user linked to the representative, if any.
   * @format uuid
   */
  user_id?: string | null;
  /**
   * Your unique ID for the representative.
   */
  external_id?: string | null;
  /**
   * Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string> | null;
}

export interface RepresentativeStatusDetail {
  /**
   * Machine-readable reason for the representative's status.
   */
  reason:
    | 'unverified'
    | 'in_review'
    | 'pending'
    | 'stuck'
    | 'verified'
    | 'failed_verification'
    | 'disabled'
    | 'new';
  /**
   * System that produced the representative status detail.
   */
  source: 'watchtower';
  /**
   * Machine-readable status code from the source.
   */
  code: string;
  /**
   * Human-readable description of the representative's status.
   */
  message: string;
}

export interface RepresentativeRelationship {
  /**
   * Whether this person is the account's primary representative. The primary representative provides personal and business information and accepts the services agreement. An account can have only one primary representative.
   */
  primary: boolean;
  /**
   * Whether the representative controls, manages, or directs the business. Each legal entity must have one representative with `control` set to `true`.
   */
  control: boolean;
  /**
   * Whether the representative owns any equity in the business.
   */
  owner: boolean;
  /**
   * The representative's ownership percentage. Required when `owner` is `true`.
   * @format double
   */
  percent_ownership?: number | null;
  /**
   * The representative's job title.
   */
  title?: string | null;
}

export interface RepresentativeCreateParams {
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
   * Body param: ID of the account associated with the representative.
   * @format uuid
   */
  account_id: string;
  /**
   * Body param: Representative's first name.
   */
  first_name: string;
  /**
   * Body param: Representative's last name.
   */
  last_name: string;
  /**
   * Body param: Representative's date of birth in `YYYY-MM-DD` format.
   * @format date
   */
  dob: string;
  /**
   * Body param: Last four digits of the representative's Social Security number.
   * @pattern ^[0-9]{4}$
   */
  ssn_last4: string;
  /**
   * Body param: Representative's company email address.
   * @format email
   */
  email: string;
  /**
   * Body param: Representative's mobile phone number in E.164 format.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  mobile_number: string;
  /**
   * Body param
   */
  relationship: RepresentativeRelationship;
  /**
   * Body param: Your unique ID for the representative.
   */
  external_id?: string | null;
  /**
   * Body param: Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string> | null;
}

export interface RepresentativeListParams {
  /**
   * Query param: Account ID used to filter the results.
   * @format uuid
   */
  account_id?: string;
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
   * Query param: Platform ID used to filter the results.
   * @format uuid
   */
  platform_id?: string;
  /**
   * Query param: Organization ID used to filter the results.
   * @format uuid
   */
  organization_id?: string;
  /**
   * Query param: Scope of representatives to return.
   */
  level?: 'account' | 'platform';
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface RepresentativeUpdateParams {
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
   * Body param: Representative's first name.
   */
  first_name: string;
  /**
   * Body param: Representative's last name.
   */
  last_name: string;
  /**
   * Body param: Representative's date of birth in `YYYY-MM-DD` format.
   * @format date
   */
  dob: string;
  /**
   * Body param: Last four digits of the representative's Social Security number.
   * @pattern ^[0-9]{4}$
   */
  ssn_last4: string;
  /**
   * Body param: Representative's email address.
   * @format email
   */
  email: string;
  /**
   * Body param: Representative's mobile phone number in E.164 format.
   * @pattern ^\+[1-9]\d{1,14}$
   */
  mobile_number: string;
  /**
   * Body param
   */
  relationship: RepresentativeRelationship;
  /**
   * Body param: Your unique ID for the representative.
   */
  external_id?: string | null;
  /**
   * Body param: Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string> | null;
}

export interface RepresentativeRetrieveParams {
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface RepresentativeListUnmaskedParams {
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}
export declare namespace Representatives {
  export {
    type RepresentativeResponse as RepresentativeResponse,
    type RepresentativeList as RepresentativeList,
    type UnmaskedRepresentativeResponse as UnmaskedRepresentativeResponse,
    type Representative as Representative,
    type UnmaskedRepresentative as UnmaskedRepresentative,
    type RepresentativeStatusDetail as RepresentativeStatusDetail,
    type RepresentativeRelationship as RepresentativeRelationship,
    type RepresentativeCreateParams as RepresentativeCreateParams,
    type RepresentativeListParams as RepresentativeListParams,
    type RepresentativeUpdateParams as RepresentativeUpdateParams,
    type RepresentativeRetrieveParams as RepresentativeRetrieveParams,
    type RepresentativeListUnmaskedParams as RepresentativeListUnmaskedParams,
  };
}
