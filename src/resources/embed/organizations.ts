// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { OrganizationV1sPageNumberSchema } from '../shared';
import { type PageNumberSchemaParams } from '../../pagination';

export class Organizations extends APIResource {
  /**
   * Creates a new organization related to your Straddle integration. Organizations
   * can be used to group related accounts and manage permissions across multiple
   * users.
   */
  create(
    params: OrganizationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfOrganizationV1> {
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
  ): Core.PagePromise<OrganizationV1sPageNumberSchema, Shared.OrganizationV1>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationV1sPageNumberSchema, Shared.OrganizationV1>;
  list(
    params: OrganizationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationV1sPageNumberSchema, Shared.OrganizationV1> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId, ...query } = params;
    return this._client.getAPIList('/v1/organizations', OrganizationV1sPageNumberSchema, {
      query,
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves the details of an Organization that has previously been created.
   * Supply the unique organization ID that was returned from your previous request,
   * and Straddle will return the corresponding organization information.
   */
  get(
    organizationId: string,
    params?: OrganizationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfOrganizationV1>;
  get(
    organizationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfOrganizationV1>;
  get(
    organizationId: string,
    params: OrganizationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfOrganizationV1> {
    if (isRequestOptions(params)) {
      return this.get(organizationId, {}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId } = params;
    return this._client.get(`/v1/organizations/${organizationId}`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface OrganizationPagedV1 {
  data: Array<Shared.OrganizationV1>;

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

export interface OrganizationV1 {
  data: Shared.OrganizationV1;

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
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationGetParams as OrganizationGetParams,
  };
}

export { OrganizationV1sPageNumberSchema };
