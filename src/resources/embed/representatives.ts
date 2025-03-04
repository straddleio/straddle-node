// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { RepresentativeV1sPageNumberSchema } from '../shared';
import { type PageNumberSchemaParams } from '../../pagination';

export class Representatives extends APIResource {
  /**
   * Creates a new representative associated with an account. Representatives are
   * individuals who have legal authority or significant responsibility within the
   * business.
   */
  create(
    params: RepresentativeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfRepresentativeV1> {
    const { 'correlation-id': correlationId, 'request-id': requestId, ...body } = params;
    return this._client.post('/v1/representatives', {
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
   * Updates an existing representative's information. This can be used to update
   * personal details, contact information, or the relationship to the account or
   * organization.
   */
  update(
    representativeId: string,
    params: RepresentativeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfRepresentativeV1> {
    const { 'correlation-id': correlationId, 'request-id': requestId, ...body } = params;
    return this._client.put(`/v1/representatives/${representativeId}`, {
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
   * Returns a list of representatives associated with a specific account or
   * organization. The representatives are returned sorted by creation date, with the
   * most recently created representatives appearing first. This endpoint supports
   * advanced sorting and filtering options.
   */
  list(
    params?: RepresentativeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RepresentativeV1sPageNumberSchema, Shared.RepresentativeV1>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<RepresentativeV1sPageNumberSchema, Shared.RepresentativeV1>;
  list(
    params: RepresentativeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RepresentativeV1sPageNumberSchema, Shared.RepresentativeV1> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId, ...query } = params;
    return this._client.getAPIList('/v1/representatives', RepresentativeV1sPageNumberSchema, {
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
   * Retrieves the details of an existing representative. Supply the unique
   * representative ID, and Straddle will return the corresponding representative
   * information.
   */
  get(
    representativeId: string,
    params?: RepresentativeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfRepresentativeV1>;
  get(
    representativeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfRepresentativeV1>;
  get(
    representativeId: string,
    params: RepresentativeGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfRepresentativeV1> {
    if (isRequestOptions(params)) {
      return this.get(representativeId, {}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId } = params;
    return this._client.get(`/v1/representatives/${representativeId}`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves the unmasked details of a representative that has previously been
   * created. Supply the unique representative ID, and Straddle will return the
   * corresponding representative information, including sensitive details. This
   * endpoint requires additional authentication and should be used with caution.
   */
  unmask(
    representativeId: string,
    params?: RepresentativeUnmaskParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfRepresentativeV1>;
  unmask(
    representativeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfRepresentativeV1>;
  unmask(
    representativeId: string,
    params: RepresentativeUnmaskParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfRepresentativeV1> {
    if (isRequestOptions(params)) {
      return this.unmask(representativeId, {}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId } = params;
    return this._client.get(`/v1/representatives/${representativeId}/unmask`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface Representative {
  data: Shared.RepresentativeV1;

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

export interface RepresentativePaged {
  data: Array<Shared.RepresentativeV1>;

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

export interface RepresentativeCreateParams {
  /**
   * Body param: The unique identifier of the account this representative is
   * associated with.
   */
  account_id: string;

  /**
   * Body param: Date of birth for the representative in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dob: string;

  /**
   * Body param: The company email address of the representative.
   */
  email: string;

  /**
   * Body param: The first name of the representative.
   */
  first_name: string;

  /**
   * Body param: The last name of the representative.
   */
  last_name: string;

  /**
   * Body param: The mobile phone number of the representative.
   */
  mobile_number: string;

  /**
   * Body param:
   */
  relationship: Shared.RelationshipV1;

  /**
   * Body param: The last 4 digits of the representative's Social Security Number.
   */
  ssn_last4: string;

  /**
   * Body param: Unique identifier for the representative in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

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

export interface RepresentativeUpdateParams {
  /**
   * Body param: The date of birth of the representative, in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dob: string;

  /**
   * Body param: The email address of the representative.
   */
  email: string;

  /**
   * Body param: The first name of the representative.
   */
  first_name: string;

  /**
   * Body param: The last name of the representative.
   */
  last_name: string;

  /**
   * Body param: The mobile phone number of the representative.
   */
  mobile_number: string;

  /**
   * Body param:
   */
  relationship: Shared.RelationshipV1;

  /**
   * Body param: The last 4 digits of the representative's Social Security Number.
   */
  ssn_last4: string;

  /**
   * Body param: Unique identifier for the representative in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

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

export interface RepresentativeListParams extends PageNumberSchemaParams {
  /**
   * Query param: The unique identifier of the account to list representatives for.
   */
  account_id?: string;

  /**
   * Query param:
   */
  organization_id?: string;

  /**
   * Query param:
   */
  platform_id?: string;

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

export interface RepresentativeGetParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'correlation-id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export interface RepresentativeUnmaskParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'correlation-id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export declare namespace Representatives {
  export {
    type Representative as Representative,
    type RepresentativePaged as RepresentativePaged,
    type RepresentativeCreateParams as RepresentativeCreateParams,
    type RepresentativeUpdateParams as RepresentativeUpdateParams,
    type RepresentativeListParams as RepresentativeListParams,
    type RepresentativeGetParams as RepresentativeGetParams,
    type RepresentativeUnmaskParams as RepresentativeUnmaskParams,
  };
}

export { RepresentativeV1sPageNumberSchema };
