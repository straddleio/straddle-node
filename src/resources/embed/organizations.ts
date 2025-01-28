// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { PageNumberSchema, type PageNumberSchemaParams } from '../../pagination';

export class Organizations extends APIResource {
  /**
   * Creates a new organization related to your Straddle integration. Organizations
   * can be used to group related accounts and manage permissions across multiple
   * users.
   */
  create(params: OrganizationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Organization> {
    const { 'correlation-id': correlationId, 'request-id': requestId, ...body } = params;
    return this._client.post('/v1/organizations', {
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
   * Retrieves a list of organizations associated with your Straddle integration. The
   * organizations are returned sorted by creation date, with the most recently
   * created organizations appearing first. This endpoint supports advanced sorting
   * and filtering options to help you find specific organizations.
   */
  list(
    params?: OrganizationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationPagedDataPageNumberSchema, OrganizationPaged.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationPagedDataPageNumberSchema, OrganizationPaged.Data>;
  list(
    params: OrganizationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationPagedDataPageNumberSchema, OrganizationPaged.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId, ...query } = params;
    return this._client.getAPIList('/v1/organizations', OrganizationPagedDataPageNumberSchema, {
      query,
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }
}

export class OrganizationPagedDataPageNumberSchema extends PageNumberSchema<OrganizationPaged.Data> {}

export interface Organization {
  data: Organization.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: Organization.Meta;

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

export namespace Organization {
  export interface Data {
    /**
     * Straddle's unique identifier for the organization.
     */
    id: string;

    /**
     * The name of the organization.
     */
    name: string;

    /**
     * Timestamp of when the organization was created.
     */
    created_at?: string;

    /**
     * Unique identifier for the organization in your database, used for
     * cross-referencing between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the organization in a structured format.
     */
    metadata?: Record<string, string | null> | null;

    /**
     * Timestamp of the most recent update to the organization.
     */
    updated_at?: string;
  }

  /**
   * Metadata about the API request, including an identifier and timestamp.
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
  }
}

export interface OrganizationPaged {
  data: Array<OrganizationPaged.Data>;

  /**
   * Metadata about the API request, including an identifier, timestamp, and
   * pagination details.
   */
  meta: OrganizationPaged.Meta;

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

export namespace OrganizationPaged {
  export interface Data {
    /**
     * Straddle's unique identifier for the organization.
     */
    id: string;

    /**
     * The name of the organization.
     */
    name: string;

    /**
     * Timestamp of when the organization was created.
     */
    created_at?: string;

    /**
     * Unique identifier for the organization in your database, used for
     * cross-referencing between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the organization in a structured format.
     */
    metadata?: Record<string, string | null> | null;

    /**
     * Timestamp of the most recent update to the organization.
     */
    updated_at?: string;
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
  metadata?: Record<string, string | null> | null;

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

Organizations.OrganizationPagedDataPageNumberSchema = OrganizationPagedDataPageNumberSchema;

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationPaged as OrganizationPaged,
    OrganizationPagedDataPageNumberSchema as OrganizationPagedDataPageNumberSchema,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationListParams as OrganizationListParams,
  };
}
