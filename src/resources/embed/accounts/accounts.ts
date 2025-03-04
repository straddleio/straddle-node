// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import { AccountV1sPageNumberSchema } from '../../shared';
import * as CapabilityRequestsAPI from './capability-requests';
import {
  CapabilityRequestCreateParams,
  CapabilityRequestListParams,
  CapabilityRequestPagedV1,
  CapabilityRequests,
} from './capability-requests';
import { type PageNumberSchemaParams } from '../../../pagination';

export class Accounts extends APIResource {
  capabilityRequests: CapabilityRequestsAPI.CapabilityRequests = new CapabilityRequestsAPI.CapabilityRequests(
    this._client,
  );

  /**
   * Creates a new account associated with your Straddle platform integration. This
   * endpoint allows you to set up an account with specified details, including
   * business information and access levels.
   */
  create(
    params: AccountCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfAccountV1> {
    const { 'correlation-id': correlationId, 'request-id': requestId, ...body } = params;
    return this._client.post('/v1/accounts', {
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
   * Updates an existing account's information. This endpoint allows you to update
   * various account details during onboarding or after the account has been created.
   */
  update(
    accountId: string,
    params: AccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfAccountV1> {
    const { 'correlation-id': correlationId, 'request-id': requestId, ...body } = params;
    return this._client.put(`/v1/accounts/${accountId}`, {
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
   * Returns a list of accounts associated with your Straddle platform integration.
   * The accounts are returned sorted by creation date, with the most recently
   * created accounts appearing first. This endpoint supports advanced sorting and
   * filtering options.
   */
  list(
    params?: AccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountV1sPageNumberSchema, Shared.AccountV1>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountV1sPageNumberSchema, Shared.AccountV1>;
  list(
    params: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountV1sPageNumberSchema, Shared.AccountV1> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId, ...query } = params;
    return this._client.getAPIList('/v1/accounts', AccountV1sPageNumberSchema, {
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
   * Retrieves the details of an account that has previously been created. Supply the
   * unique account ID that was returned from your previous request, and Straddle
   * will return the corresponding account information.
   */
  get(
    accountId: string,
    params?: AccountGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfAccountV1>;
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ItemResponseOfAccountV1>;
  get(
    accountId: string,
    params: AccountGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfAccountV1> {
    if (isRequestOptions(params)) {
      return this.get(accountId, {}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId } = params;
    return this._client.get(`/v1/accounts/${accountId}`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Initiates the onboarding process for a new account. This endpoint can only be
   * used for accounts where at least one representative and one bank account have
   * already been created.
   */
  onboard(
    accountId: string,
    params: AccountOnboardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfAccountV1> {
    const { 'correlation-id': correlationId, 'request-id': requestId, ...body } = params;
    return this._client.post(`/v1/accounts/${accountId}/onboard`, {
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
   * Simulte the status transitions for sandbox accounts. This endpoint can only be
   * used for sandbox accounts.
   */
  simulate(
    accountId: string,
    params?: AccountSimulateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfAccountV1>;
  simulate(accountId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ItemResponseOfAccountV1>;
  simulate(
    accountId: string,
    params: AccountSimulateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ItemResponseOfAccountV1> {
    if (isRequestOptions(params)) {
      return this.simulate(accountId, {}, params);
    }
    const { final_status, 'correlation-id': correlationId, 'request-id': requestId } = params;
    return this._client.post(`/v1/accounts/${accountId}/simulate`, {
      query: { final_status },
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface AccountPagedV1 {
  data: Array<Shared.AccountV1>;

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

export interface AccountV1 {
  data: Shared.AccountV1;

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

/**
 * The address object is optional. If provided, it must be a valid address.
 */
export interface AddressV1 {
  /**
   * City, district, suburb, town, or village.
   */
  city?: string | null;

  /**
   * The country of the address, in ISO 3166-1 alpha-2 format.
   */
  country?: string | null;

  /**
   * Primary address line (e.g., street, PO Box).
   */
  line1?: string | null;

  /**
   * Secondary address line (e.g., apartment, suite, unit, or building).
   */
  line2?: string | null;

  /**
   * Postal or ZIP code.
   */
  postal_code?: string | null;

  /**
   * Two-letter state code.
   */
  state?: string | null;
}

export interface BusinessProfileV1 {
  /**
   * The operating or trade name of the business.
   */
  name: string;

  /**
   * URL of the business's primary marketing website.
   */
  website: string;

  /**
   * The address object is optional. If provided, it must be a valid address.
   */
  address?: AddressV1 | null;

  /**
   * A brief description of the business and its products or services.
   */
  description?: string | null;

  industry?: IndustryV1;

  /**
   * The official registered name of the business.
   */
  legal_name?: string | null;

  /**
   * The primary contact phone number for the business.
   */
  phone?: string | null;

  support_channels?: SupportChannelsV1;

  /**
   * The business's tax identification number (e.g., EIN in the US).
   */
  tax_id?: string | null;

  /**
   * A description of how the business intends to use Straddle's services.
   */
  use_case?: string | null;
}

export interface CapabilityV1 {
  capability_status: 'active' | 'inactive';
}

export interface IndustryV1 {
  /**
   * The general category of the industry. Required if not providing MCC.
   */
  category?: string | null;

  /**
   * The Merchant Category Code (MCC) that best describes the business. Optional.
   */
  mcc?: string | null;

  /**
   * The specific sector within the industry category. Required if not providing MCC.
   */
  sector?: string | null;
}

export interface SupportChannelsV1 {
  /**
   * The email address for customer support inquiries.
   */
  email?: string | null;

  /**
   * The phone number for customer support.
   */
  phone?: string | null;

  /**
   * The URL of the business's customer support page or contact form.
   */
  url?: string | null;
}

export interface TermsOfServiceV1 {
  /**
   * The datetime of when the terms of service were accepted, in ISO 8601 format.
   */
  accepted_date: string;

  /**
   * The type or version of the agreement accepted. Use `embedded` unless your
   * platform was specifically enabled for `direct` agreements.
   */
  agreement_type: 'embedded' | 'direct';

  /**
   * The IP address from which the terms of service were accepted.
   */
  accepted_ip?: string | null;

  /**
   * The user agent string of the browser or application used to accept the terms.
   */
  accepted_user_agent?: string | null;

  /**
   * The URL where the full text of the accepted agreement can be found.
   */
  agreement_url?: string | null;
}

export interface AccountCreateParams {
  /**
   * Body param: The access level granted to the account. This is determined by your
   * platform configuration. Use `standard` unless instructed otherwise by Straddle.
   */
  access_level: 'standard' | 'managed';

  /**
   * Body param: The type of account to be created. Currently, only `business` is
   * supported.
   */
  account_type: 'business';

  /**
   * Body param:
   */
  business_profile: Shared.BusinessProfileV1;

  /**
   * Body param: The unique identifier of the organization related to this account.
   */
  organization_id: string;

  /**
   * Body param: Unique identifier for the account in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the account in a structured format.
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

export interface AccountUpdateParams {
  /**
   * Body param:
   */
  business_profile: Shared.BusinessProfileV1;

  /**
   * Body param: Unique identifier for the account in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the account in a structured format.
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

export interface AccountListParams extends PageNumberSchemaParams {
  /**
   * Query param:
   */
  search_text?: string;

  /**
   * Query param: Sort By. Default value: 'id'.
   */
  sort_by?: string;

  /**
   * Query param: Sort Order. Default value: 'asc'.
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

export interface AccountGetParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'correlation-id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export interface AccountOnboardParams {
  /**
   * Body param:
   */
  terms_of_service: Shared.TermsOfServiceV1;

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

export interface AccountSimulateParams {
  /**
   * Query param:
   */
  final_status?: 'onboarding' | 'active';

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

Accounts.CapabilityRequests = CapabilityRequests;

export declare namespace Accounts {
  export {
    type AccountPagedV1 as AccountPagedV1,
    type AccountV1 as AccountV1,
    type AddressV1 as AddressV1,
    type BusinessProfileV1 as BusinessProfileV1,
    type CapabilityV1 as CapabilityV1,
    type IndustryV1 as IndustryV1,
    type SupportChannelsV1 as SupportChannelsV1,
    type TermsOfServiceV1 as TermsOfServiceV1,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountGetParams as AccountGetParams,
    type AccountOnboardParams as AccountOnboardParams,
    type AccountSimulateParams as AccountSimulateParams,
  };

  export {
    CapabilityRequests as CapabilityRequests,
    type CapabilityRequestPagedV1 as CapabilityRequestPagedV1,
    type CapabilityRequestCreateParams as CapabilityRequestCreateParams,
    type CapabilityRequestListParams as CapabilityRequestListParams,
  };
}

export { AccountV1sPageNumberSchema };
