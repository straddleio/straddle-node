// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { PageNumberSchema, type PageNumberSchemaParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
  /**
   * Creates a new organization related to your Straddle integration. Organizations
   * can be used to group related accounts and manage permissions across multiple
   * users.
   *
   * @example
   * ```ts
   * const organizationV1 =
   *   await client.embed.organizations.create({ name: 'name' });
   * ```
   */
  create(params: OrganizationCreateParams, options?: RequestOptions): APIPromise<OrganizationV1> {
    const {
      'correlation-id': correlationID,
      'idempotency-key': idempotencyKey,
      'request-id': requestID,
      ...body
    } = params;
    return this._client.post('/v1/organizations', {
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
   * Retrieves a list of organizations associated with your Straddle integration. The
   * organizations are returned sorted by creation date, with the most recently
   * created organizations appearing first. This endpoint supports advanced sorting
   * and filtering options to help you find specific organizations.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const organization of client.embed.organizations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: OrganizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrganizationPagedV1DataPageNumberSchema, OrganizationPagedV1.Data> {
    const { 'correlation-id': correlationID, 'request-id': requestID, ...query } = params ?? {};
    return this._client.getAPIList('/v1/organizations', PageNumberSchema<OrganizationPagedV1.Data>, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
          ...(requestID != null ? { 'request-id': requestID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the details of an Organization that has previously been created.
   * Supply the unique organization ID that was returned from your previous request,
   * and Straddle will return the corresponding organization information.
   *
   * @example
   * ```ts
   * const organizationV1 = await client.embed.organizations.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  get(
    organizationID: string,
    params: OrganizationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationV1> {
    const { 'correlation-id': correlationID, 'request-id': requestID } = params ?? {};
    return this._client.get(path`/v1/organizations/${organizationID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
          ...(requestID != null ? { 'request-id': requestID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type OrganizationPagedV1DataPageNumberSchema = PageNumberSchema<OrganizationPagedV1.Data>;

export interface OrganizationPagedV1 {
  data: Array<OrganizationPagedV1.Data>;

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

export namespace OrganizationPagedV1 {
  export interface Data {
    /**
     * Straddle's unique identifier for the organization.
     */
    id: string;

    /**
     * Timestamp of when the organization was created.
     */
    created_at: string;

    /**
     * The name of the organization.
     */
    name: string;

    /**
     * Timestamp of the most recent update to the organization.
     */
    updated_at: string;

    /**
     * Unique identifier for the organization in your database, used for
     * cross-referencing between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the organization in a structured format.
     */
    metadata?: { [key: string]: string | null } | null;
  }
}

export interface OrganizationV1 {
  data: OrganizationV1.Data;

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
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace OrganizationV1 {
  export interface Data {
    /**
     * Straddle's unique identifier for the organization.
     */
    id: string;

    /**
     * Timestamp of when the organization was created.
     */
    created_at: string;

    /**
     * The name of the organization.
     */
    name: string;

    /**
     * Timestamp of the most recent update to the organization.
     */
    updated_at: string;

    /**
     * Unique identifier for the organization in your database, used for
     * cross-referencing between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the organization in a structured format.
     */
    metadata?: { [key: string]: string | null } | null;
  }
}

export interface OrganizationCreateParams {
  /**
   * Body param: The name of the organization.
   */
  name: string;

  /**
   * Body param: Unique identifier for the organization in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the organization in a structured format.
   */
  metadata?: { [key: string]: string | null } | null;

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

export interface OrganizationListParams extends PageNumberSchemaParams {
  /**
   * Query param: List organizations by their external ID.
   */
  external_id?: string;

  /**
   * Query param: List organizations by name (partial match supported).
   */
  name?: string;

  /**
   * Query param: Sort By.
   */
  sort_by?: string;

  /**
   * Query param: Sort Order.
   */
  sort_order?: 'asc' | 'desc';

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

export interface OrganizationGetParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'correlation-id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export declare namespace Organizations {
  export {
    type OrganizationPagedV1 as OrganizationPagedV1,
    type OrganizationV1 as OrganizationV1,
    type OrganizationPagedV1DataPageNumberSchema as OrganizationPagedV1DataPageNumberSchema,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationGetParams as OrganizationGetParams,
  };
}
