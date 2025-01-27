// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { PageNumberSchema, type PageNumberSchemaParams } from '../pagination';

export class Representatives extends APIResource {
  /**
   * Creates a new representative associated with an account. Representatives are
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
   * organization. The representatives are returned sorted by creation date, with the
   * most recently created representatives appearing first. This endpoint supports
   * advanced sorting and filtering options.
   */
  list(
    params?: RepresentativeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RepresentativePagedDataPageNumberSchema, RepresentativePaged.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<RepresentativePagedDataPageNumberSchema, RepresentativePaged.Data>;
  list(
    params: RepresentativeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RepresentativePagedDataPageNumberSchema, RepresentativePaged.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
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
   * Retrieves the details of an existing representative. Supply the unique
   * representative ID, and Straddle will return the corresponding representative
   * information.
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

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: Representative.Meta;

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
       * services agreement.
       *
       * There can be only one primary representative for an account at a time.
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

    export interface StatusDetail {
      /**
       * A machine-readable code for the specific status, useful for programmatic
       * handling.
       */
      code: string;

      /**
       * A human-readable message describing the current status.
       */
      message: string;

      /**
       * A machine-readable identifier for the specific status, useful for programmatic
       * handling.
       */
      reason:
        | 'unverified'
        | 'in_review'
        | 'pending'
        | 'stuck'
        | 'verified'
        | 'failed_verification'
        | 'disabled';

      /**
       * Identifies the origin of the status change (e.g., `watchtower`). This helps in
       * tracking the cause of status updates.
       */
      source: 'watchtower';
    }
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

export interface RepresentativePaged {
  data: Array<RepresentativePaged.Data>;

  /**
   * Metadata about the API request, including an identifier, timestamp, and
   * pagination details.
   */
  meta: RepresentativePaged.Meta;

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
       * services agreement.
       *
       * There can be only one primary representative for an account at a time.
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

    export interface StatusDetail {
      /**
       * A machine-readable code for the specific status, useful for programmatic
       * handling.
       */
      code: string;

      /**
       * A human-readable message describing the current status.
       */
      message: string;

      /**
       * A machine-readable identifier for the specific status, useful for programmatic
       * handling.
       */
      reason:
        | 'unverified'
        | 'in_review'
        | 'pending'
        | 'stuck'
        | 'verified'
        | 'failed_verification'
        | 'disabled';

      /**
       * Identifies the origin of the status change (e.g., `watchtower`). This helps in
       * tracking the cause of status updates.
       */
      source: 'watchtower';
    }
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
     * services agreement.
     *
     * There can be only one primary representative for an account at a time.
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
     * services agreement.
     *
     * There can be only one primary representative for an account at a time.
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
   * Query param: The unique identifier of the account to list representatives for.
   */
  account_id?: string;

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
