// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { PageNumberSchema, type PageNumberSchemaParams } from '../../pagination';

export class Representatives extends APIResource {
  /**
   * Creates a new representative for an account or organization. Representatives are
   * individuals who have legal authority or significant responsibility within the
   * business.
   */
  create(params: RepresentativeCreateParams, options?: Core.RequestOptions): Core.APIPromise<Representative> {
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
  ): Core.APIPromise<Representative> {
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
   * organization. <br /> <br /> The representatives are returned sorted by creation
   * date, with the most recently created representatives appearing first. This
   * endpoint supports pagination to handle accounts with multiple representatives.
   */
  list(
    params: RepresentativeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RepresentativePagedDataPageNumberSchema, RepresentativePaged.Data> {
    const { 'correlation-id': correlationId, 'request-id': requestId, ...query } = params;
    return this._client.getAPIList('/v1/representatives', RepresentativePagedDataPageNumberSchema, {
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
   * Retrieves the details of a representative that has previously been created.
   * Supply the unique representative ID, and Straddle will return the corresponding
   * representative information. The response includes masked representative details
   * for security purposes.
   */
  get(
    representativeId: string,
    params?: RepresentativeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Representative>;
  get(representativeId: string, options?: Core.RequestOptions): Core.APIPromise<Representative>;
  get(
    representativeId: string,
    params: RepresentativeGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Representative> {
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
}

export class RepresentativePagedDataPageNumberSchema extends PageNumberSchema<RepresentativePaged.Data> {}

export interface Representative {
  data: Representative.Data;

  meta: Representative.Meta;

  /**
   * Indicates the type of data returned.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace Representative {
  export interface Data {
    /**
     * Unique identifier for the representative.
     */
    id: string;

    /**
     * The unique identifier of the account this representative is associated with.
     */
    account_id: string;

    /**
     * Timestamp of when the representative was created.
     */
    created_at: string;

    /**
     * The date of birth of the representative, in ISO 8601 format (YYYY-MM-DD).
     */
    dob: string;

    /**
     * The email address of the representative.
     */
    email: string;

    /**
     * The first name of the representative.
     */
    first_name: string;

    /**
     * The last name of the representative.
     */
    last_name: string;

    /**
     * The mobile phone number of the representative.
     */
    mobile_number: string;

    relationship: Data.Relationship;

    /**
     * The last 4 digits of the representative's Social Security Number.
     */
    ssn_last4: string;

    /**
     * The current status of the representative.
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

    status_detail: Data.StatusDetail;

    /**
     * Timestamp of the most recent update to the representative.
     */
    updated_at: string;

    /**
     * Unique identifier for the representative in your database, used for
     * cross-referencing between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * The unique identifier of the user account associated with this representative,
     * if applicable.
     */
    user_id?: string | null;
  }

  export namespace Data {
    export interface Relationship {
      control: boolean;

      owner: boolean;

      primary: boolean;

      percent_ownership?: number | null;

      title?: string | null;
    }

    export interface StatusDetail {
      code: string;

      message: string;

      reason:
        | 'unverified'
        | 'new'
        | 'in_review'
        | 'pending'
        | 'stuck'
        | 'verified'
        | 'failed_verification'
        | 'disabled';

      source: 'watchtower';
    }
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
  }
}

export interface RepresentativePaged {
  data: Array<RepresentativePaged.Data>;

  meta: RepresentativePaged.Meta;

  /**
   * Indicates the type of data returned.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace RepresentativePaged {
  export interface Data {
    /**
     * Unique identifier for the representative.
     */
    id: string;

    /**
     * The unique identifier of the account this representative is associated with.
     */
    account_id: string;

    /**
     * Timestamp of when the representative was created.
     */
    created_at: string;

    /**
     * The date of birth of the representative, in ISO 8601 format (YYYY-MM-DD).
     */
    dob: string;

    /**
     * The email address of the representative.
     */
    email: string;

    /**
     * The first name of the representative.
     */
    first_name: string;

    /**
     * The last name of the representative.
     */
    last_name: string;

    /**
     * The mobile phone number of the representative.
     */
    mobile_number: string;

    relationship: Data.Relationship;

    /**
     * The last 4 digits of the representative's Social Security Number.
     */
    ssn_last4: string;

    /**
     * The current status of the representative.
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

    status_detail: Data.StatusDetail;

    /**
     * Timestamp of the most recent update to the representative.
     */
    updated_at: string;

    /**
     * Unique identifier for the representative in your database, used for
     * cross-referencing between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * The unique identifier of the user account associated with this representative,
     * if applicable.
     */
    user_id?: string | null;
  }

  export namespace Data {
    export interface Relationship {
      control: boolean;

      owner: boolean;

      primary: boolean;

      percent_ownership?: number | null;

      title?: string | null;
    }

    export interface StatusDetail {
      code: string;

      message: string;

      reason:
        | 'unverified'
        | 'new'
        | 'in_review'
        | 'pending'
        | 'stuck'
        | 'verified'
        | 'failed_verification'
        | 'disabled';

      source: 'watchtower';
    }
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
  relationship: RepresentativeCreateParams.Relationship;

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

export namespace RepresentativeCreateParams {
  export interface Relationship {
    /**
     * Whether the representative has significant responsibility to control, manage, or
     * direct the organization. One representative must be identified under the control
     * prong for each legal entity.
     */
    control: boolean;

    /**
     * Whether the representative owns any percentage of of the equity interests of the
     * legal entity.
     */
    owner: boolean;

    /**
     * Whether the person is authorized as the primary representative of the account.
     * This is the person chosen by the business to provide information about
     * themselves, general information about the account, and who consented to the
     * services agreement. <br /> There can be only one primary representative for an
     * account at a time.
     */
    primary: boolean;

    /**
     * The percentage of ownership the representative has. Required if 'Owner' is true.
     */
    percent_ownership?: number | null;

    /**
     * The job title of the representative.
     */
    title?: string | null;
  }
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
  relationship: RepresentativeUpdateParams.Relationship;

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

export namespace RepresentativeUpdateParams {
  export interface Relationship {
    /**
     * Whether the representative has significant responsibility to control, manage, or
     * direct the organization. One representative must be identified under the control
     * prong for each legal entity.
     */
    control: boolean;

    /**
     * Whether the representative owns any percentage of of the equity interests of the
     * legal entity.
     */
    owner: boolean;

    /**
     * Whether the person is authorized as the primary representative of the account.
     * This is the person chosen by the business to provide information about
     * themselves, general information about the account, and who consented to the
     * services agreement. <br /> There can be only one primary representative for an
     * account at a time.
     */
    primary: boolean;

    /**
     * The percentage of ownership the representative has. Required if 'Owner' is true.
     */
    percent_ownership?: number | null;

    /**
     * The job title of the representative.
     */
    title?: string | null;
  }
}

export interface RepresentativeListParams extends PageNumberSchemaParams {
  /**
   * Query param: Sort By. Default value: 'id'.
   */
  sort_by: string;

  /**
   * Query param: Sort Order. Default value: 'asc'.
   */
  sort_order: 'asc' | 'desc';

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

Representatives.RepresentativePagedDataPageNumberSchema = RepresentativePagedDataPageNumberSchema;

export declare namespace Representatives {
  export {
    type Representative as Representative,
    type RepresentativePaged as RepresentativePaged,
    RepresentativePagedDataPageNumberSchema as RepresentativePagedDataPageNumberSchema,
    type RepresentativeCreateParams as RepresentativeCreateParams,
    type RepresentativeUpdateParams as RepresentativeUpdateParams,
    type RepresentativeListParams as RepresentativeListParams,
    type RepresentativeGetParams as RepresentativeGetParams,
  };
}
