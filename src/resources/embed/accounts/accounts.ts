// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as CapabilityRequestsAPI from './capability-requests';
import {
  CapabilityRequestCreateParams,
  CapabilityRequestListParams,
  CapabilityRequestPaged,
  CapabilityRequestPagedDataPageNumberSchema,
  CapabilityRequests,
} from './capability-requests';
import { PageNumberSchema, type PageNumberSchemaParams } from '../../../pagination';

export class Accounts extends APIResource {
  capabilityRequests: CapabilityRequestsAPI.CapabilityRequests = new CapabilityRequestsAPI.CapabilityRequests(
    this._client,
  );

  /**
   * Creates a new account associated with your Straddle platform integration. This
   * endpoint allows you to set up an account with specified details, including
   * business information and access levels.
   */
  create(params: AccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
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
  ): Core.APIPromise<Account> {
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
  ): Core.PagePromise<AccountPagedDataPageNumberSchema, AccountPaged.Data>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountPagedDataPageNumberSchema, AccountPaged.Data>;
  list(
    params: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountPagedDataPageNumberSchema, AccountPaged.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId, ...query } = params;
    return this._client.getAPIList('/v1/accounts', AccountPagedDataPageNumberSchema, {
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
  ): Core.APIPromise<AccountGetResponse>;
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<AccountGetResponse>;
  get(
    accountId: string,
    params: AccountGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(accountId, {}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId } = params;
    return (
      this._client.get(`/v1/accounts/${accountId}`, {
        ...options,
        headers: {
          ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
          ...(requestId != null ? { 'request-id': requestId } : undefined),
          ...options?.headers,
        },
      }) as Core.APIPromise<{ data: AccountGetResponse }>
    )._thenUnwrap((obj) => obj.data);
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
  ): Core.APIPromise<Account> {
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
  ): Core.APIPromise<Account>;
  simulate(accountId: string, options?: Core.RequestOptions): Core.APIPromise<Account>;
  simulate(
    accountId: string,
    params: AccountSimulateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Account> {
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

export class AccountPagedDataPageNumberSchema extends PageNumberSchema<AccountPaged.Data> {}

export interface Account {
  data: Account.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: Account.Meta;

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

export namespace Account {
  export interface Data {
    /**
     * Unique identifier for the account.
     */
    id: string;

    /**
     * The access level granted to the account. This is determined by your platform
     * configuration. Use `standard` unless instructed otherwise by Straddle.
     */
    access_level: 'standard' | 'managed';

    /**
     * The unique identifier of the organization this account belongs to.
     */
    organization_id: string;

    /**
     * The current status of the account (e.g., 'active', 'inactive', 'pending').
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

    status_detail: Data.StatusDetail;

    /**
     * The type of account (e.g., 'individual', 'business').
     */
    type: 'business';

    business_profile?: Data.BusinessProfile;

    capabilities?: Data.Capabilities;

    /**
     * Timestamp of when the account was created.
     */
    created_at?: string | null;

    /**
     * Unique identifier for the account in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the account in a structured format.
     */
    metadata?: Record<string, string | null> | null;

    settings?: Data.Settings;

    terms_of_service?: Data.TermsOfService;

    /**
     * Timestamp of the most recent update to the account.
     */
    updated_at?: string | null;
  }

  export namespace Data {
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
        | 'disabled'
        | 'terminated';

      /**
       * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
       * This helps in tracking the cause of status updates.
       */
      source: 'watchtower';
    }

    export interface BusinessProfile {
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
      address?: BusinessProfile.Address | null;

      /**
       * A brief description of the business and its products or services.
       */
      description?: string | null;

      industry?: BusinessProfile.Industry;

      /**
       * The official registered name of the business.
       */
      legal_name?: string | null;

      /**
       * The primary contact phone number for the business.
       */
      phone?: string | null;

      support_channels?: BusinessProfile.SupportChannels;

      /**
       * The business's tax identification number (e.g., EIN in the US).
       */
      tax_id?: string | null;

      /**
       * A description of how the business intends to use Straddle's services.
       */
      use_case?: string | null;
    }

    export namespace BusinessProfile {
      /**
       * The address object is optional. If provided, it must be a valid address.
       */
      export interface Address {
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

      export interface Industry {
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

      export interface SupportChannels {
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
    }

    export interface Capabilities {
      consent_types: Capabilities.ConsentTypes;

      customer_types: Capabilities.CustomerTypes;

      payment_types: Capabilities.PaymentTypes;
    }

    export namespace Capabilities {
      export interface ConsentTypes {
        /**
         * Whether the internet payment authorization capability is enabled for the
         * account.
         */
        internet: ConsentTypes.Internet;

        /**
         * Whether the signed agreement payment authorization capability is enabled for the
         * account.
         */
        signed_agreement: ConsentTypes.SignedAgreement;
      }

      export namespace ConsentTypes {
        /**
         * Whether the internet payment authorization capability is enabled for the
         * account.
         */
        export interface Internet {
          capability_status: 'active' | 'inactive';
        }

        /**
         * Whether the signed agreement payment authorization capability is enabled for the
         * account.
         */
        export interface SignedAgreement {
          capability_status: 'active' | 'inactive';
        }
      }

      export interface CustomerTypes {
        businesses: CustomerTypes.Businesses;

        individuals: CustomerTypes.Individuals;
      }

      export namespace CustomerTypes {
        export interface Businesses {
          capability_status: 'active' | 'inactive';
        }

        export interface Individuals {
          capability_status: 'active' | 'inactive';
        }
      }

      export interface PaymentTypes {
        charges: PaymentTypes.Charges;

        payouts: PaymentTypes.Payouts;
      }

      export namespace PaymentTypes {
        export interface Charges {
          capability_status: 'active' | 'inactive';
        }

        export interface Payouts {
          capability_status: 'active' | 'inactive';
        }
      }
    }

    export interface Settings {
      charges: Settings.Charges;

      payouts: Settings.Payouts;
    }

    export namespace Settings {
      export interface Charges {
        /**
         * The maximum dollar amount of charges in a calendar day.
         */
        daily_amount: number;

        /**
         * The amount of time it takes for a charge to be funded. This value is defined by
         * Straddle.
         */
        funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day';

        /**
         * The unique identifier of the linked bank account associated with charges. This
         * value is defined by Straddle.
         */
        linked_bank_account_id: string;

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

      export interface Payouts {
        /**
         * The maximum dollar amount of payouts in a day.
         */
        daily_amount: number;

        /**
         * The amount of time it takes for a payout to be funded. This value is defined by
         * Straddle.
         */
        funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day';

        /**
         * The unique identifier of the linked bank account to use for payouts.
         */
        linked_bank_account_id: string;

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
    }

    export interface TermsOfService {
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

export interface AccountPaged {
  data: Array<AccountPaged.Data>;

  /**
   * Metadata about the API request, including an identifier, timestamp, and
   * pagination details.
   */
  meta: AccountPaged.Meta;

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

export namespace AccountPaged {
  export interface Data {
    /**
     * Unique identifier for the account.
     */
    id: string;

    /**
     * The access level granted to the account. This is determined by your platform
     * configuration. Use `standard` unless instructed otherwise by Straddle.
     */
    access_level: 'standard' | 'managed';

    /**
     * The unique identifier of the organization this account belongs to.
     */
    organization_id: string;

    /**
     * The current status of the account (e.g., 'active', 'inactive', 'pending').
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

    status_detail: Data.StatusDetail;

    /**
     * The type of account (e.g., 'individual', 'business').
     */
    type: 'business';

    business_profile?: Data.BusinessProfile;

    capabilities?: Data.Capabilities;

    /**
     * Timestamp of when the account was created.
     */
    created_at?: string | null;

    /**
     * Unique identifier for the account in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the account in a structured format.
     */
    metadata?: Record<string, string | null> | null;

    settings?: Data.Settings;

    terms_of_service?: Data.TermsOfService;

    /**
     * Timestamp of the most recent update to the account.
     */
    updated_at?: string | null;
  }

  export namespace Data {
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
        | 'disabled'
        | 'terminated';

      /**
       * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
       * This helps in tracking the cause of status updates.
       */
      source: 'watchtower';
    }

    export interface BusinessProfile {
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
      address?: BusinessProfile.Address | null;

      /**
       * A brief description of the business and its products or services.
       */
      description?: string | null;

      industry?: BusinessProfile.Industry;

      /**
       * The official registered name of the business.
       */
      legal_name?: string | null;

      /**
       * The primary contact phone number for the business.
       */
      phone?: string | null;

      support_channels?: BusinessProfile.SupportChannels;

      /**
       * The business's tax identification number (e.g., EIN in the US).
       */
      tax_id?: string | null;

      /**
       * A description of how the business intends to use Straddle's services.
       */
      use_case?: string | null;
    }

    export namespace BusinessProfile {
      /**
       * The address object is optional. If provided, it must be a valid address.
       */
      export interface Address {
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

      export interface Industry {
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

      export interface SupportChannels {
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
    }

    export interface Capabilities {
      consent_types: Capabilities.ConsentTypes;

      customer_types: Capabilities.CustomerTypes;

      payment_types: Capabilities.PaymentTypes;
    }

    export namespace Capabilities {
      export interface ConsentTypes {
        /**
         * Whether the internet payment authorization capability is enabled for the
         * account.
         */
        internet: ConsentTypes.Internet;

        /**
         * Whether the signed agreement payment authorization capability is enabled for the
         * account.
         */
        signed_agreement: ConsentTypes.SignedAgreement;
      }

      export namespace ConsentTypes {
        /**
         * Whether the internet payment authorization capability is enabled for the
         * account.
         */
        export interface Internet {
          capability_status: 'active' | 'inactive';
        }

        /**
         * Whether the signed agreement payment authorization capability is enabled for the
         * account.
         */
        export interface SignedAgreement {
          capability_status: 'active' | 'inactive';
        }
      }

      export interface CustomerTypes {
        businesses: CustomerTypes.Businesses;

        individuals: CustomerTypes.Individuals;
      }

      export namespace CustomerTypes {
        export interface Businesses {
          capability_status: 'active' | 'inactive';
        }

        export interface Individuals {
          capability_status: 'active' | 'inactive';
        }
      }

      export interface PaymentTypes {
        charges: PaymentTypes.Charges;

        payouts: PaymentTypes.Payouts;
      }

      export namespace PaymentTypes {
        export interface Charges {
          capability_status: 'active' | 'inactive';
        }

        export interface Payouts {
          capability_status: 'active' | 'inactive';
        }
      }
    }

    export interface Settings {
      charges: Settings.Charges;

      payouts: Settings.Payouts;
    }

    export namespace Settings {
      export interface Charges {
        /**
         * The maximum dollar amount of charges in a calendar day.
         */
        daily_amount: number;

        /**
         * The amount of time it takes for a charge to be funded. This value is defined by
         * Straddle.
         */
        funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day';

        /**
         * The unique identifier of the linked bank account associated with charges. This
         * value is defined by Straddle.
         */
        linked_bank_account_id: string;

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

      export interface Payouts {
        /**
         * The maximum dollar amount of payouts in a day.
         */
        daily_amount: number;

        /**
         * The amount of time it takes for a payout to be funded. This value is defined by
         * Straddle.
         */
        funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day';

        /**
         * The unique identifier of the linked bank account to use for payouts.
         */
        linked_bank_account_id: string;

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
    }

    export interface TermsOfService {
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

export interface AccountGetResponse {
  /**
   * Unique identifier for the account.
   */
  id: string;

  /**
   * The access level granted to the account. This is determined by your platform
   * configuration. Use `standard` unless instructed otherwise by Straddle.
   */
  access_level: 'standard' | 'managed';

  /**
   * The unique identifier of the organization this account belongs to.
   */
  organization_id: string;

  /**
   * The current status of the account (e.g., 'active', 'inactive', 'pending').
   */
  status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

  status_detail: AccountGetResponse.StatusDetail;

  /**
   * The type of account (e.g., 'individual', 'business').
   */
  type: 'business';

  business_profile?: AccountGetResponse.BusinessProfile;

  capabilities?: AccountGetResponse.Capabilities;

  /**
   * Timestamp of when the account was created.
   */
  created_at?: string | null;

  /**
   * Unique identifier for the account in your database, used for cross-referencing
   * between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Up to 20 additional user-defined key-value pairs. Useful for storing additional
   * information about the account in a structured format.
   */
  metadata?: Record<string, string | null> | null;

  settings?: AccountGetResponse.Settings;

  terms_of_service?: AccountGetResponse.TermsOfService;

  /**
   * Timestamp of the most recent update to the account.
   */
  updated_at?: string | null;
}

export namespace AccountGetResponse {
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
      | 'disabled'
      | 'terminated';

    /**
     * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
     * This helps in tracking the cause of status updates.
     */
    source: 'watchtower';
  }

  export interface BusinessProfile {
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
    address?: BusinessProfile.Address | null;

    /**
     * A brief description of the business and its products or services.
     */
    description?: string | null;

    industry?: BusinessProfile.Industry;

    /**
     * The official registered name of the business.
     */
    legal_name?: string | null;

    /**
     * The primary contact phone number for the business.
     */
    phone?: string | null;

    support_channels?: BusinessProfile.SupportChannels;

    /**
     * The business's tax identification number (e.g., EIN in the US).
     */
    tax_id?: string | null;

    /**
     * A description of how the business intends to use Straddle's services.
     */
    use_case?: string | null;
  }

  export namespace BusinessProfile {
    /**
     * The address object is optional. If provided, it must be a valid address.
     */
    export interface Address {
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

    export interface Industry {
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

    export interface SupportChannels {
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
  }

  export interface Capabilities {
    consent_types: Capabilities.ConsentTypes;

    customer_types: Capabilities.CustomerTypes;

    payment_types: Capabilities.PaymentTypes;
  }

  export namespace Capabilities {
    export interface ConsentTypes {
      /**
       * Whether the internet payment authorization capability is enabled for the
       * account.
       */
      internet: ConsentTypes.Internet;

      /**
       * Whether the signed agreement payment authorization capability is enabled for the
       * account.
       */
      signed_agreement: ConsentTypes.SignedAgreement;
    }

    export namespace ConsentTypes {
      /**
       * Whether the internet payment authorization capability is enabled for the
       * account.
       */
      export interface Internet {
        capability_status: 'active' | 'inactive';
      }

      /**
       * Whether the signed agreement payment authorization capability is enabled for the
       * account.
       */
      export interface SignedAgreement {
        capability_status: 'active' | 'inactive';
      }
    }

    export interface CustomerTypes {
      businesses: CustomerTypes.Businesses;

      individuals: CustomerTypes.Individuals;
    }

    export namespace CustomerTypes {
      export interface Businesses {
        capability_status: 'active' | 'inactive';
      }

      export interface Individuals {
        capability_status: 'active' | 'inactive';
      }
    }

    export interface PaymentTypes {
      charges: PaymentTypes.Charges;

      payouts: PaymentTypes.Payouts;
    }

    export namespace PaymentTypes {
      export interface Charges {
        capability_status: 'active' | 'inactive';
      }

      export interface Payouts {
        capability_status: 'active' | 'inactive';
      }
    }
  }

  export interface Settings {
    charges: Settings.Charges;

    payouts: Settings.Payouts;
  }

  export namespace Settings {
    export interface Charges {
      /**
       * The maximum dollar amount of charges in a calendar day.
       */
      daily_amount: number;

      /**
       * The amount of time it takes for a charge to be funded. This value is defined by
       * Straddle.
       */
      funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day';

      /**
       * The unique identifier of the linked bank account associated with charges. This
       * value is defined by Straddle.
       */
      linked_bank_account_id: string;

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

    export interface Payouts {
      /**
       * The maximum dollar amount of payouts in a day.
       */
      daily_amount: number;

      /**
       * The amount of time it takes for a payout to be funded. This value is defined by
       * Straddle.
       */
      funding_time: 'immediate' | 'next_day' | 'one_day' | 'two_day' | 'three_day';

      /**
       * The unique identifier of the linked bank account to use for payouts.
       */
      linked_bank_account_id: string;

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
  }

  export interface TermsOfService {
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
  business_profile: AccountCreateParams.BusinessProfile;

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

export namespace AccountCreateParams {
  export interface BusinessProfile {
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
    address?: BusinessProfile.Address | null;

    /**
     * A brief description of the business and its products or services.
     */
    description?: string | null;

    industry?: BusinessProfile.Industry;

    /**
     * The official registered name of the business.
     */
    legal_name?: string | null;

    /**
     * The primary contact phone number for the business.
     */
    phone?: string | null;

    support_channels?: BusinessProfile.SupportChannels;

    /**
     * The business's tax identification number (e.g., EIN in the US).
     */
    tax_id?: string | null;

    /**
     * A description of how the business intends to use Straddle's services.
     */
    use_case?: string | null;
  }

  export namespace BusinessProfile {
    /**
     * The address object is optional. If provided, it must be a valid address.
     */
    export interface Address {
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

    export interface Industry {
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

    export interface SupportChannels {
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
  }
}

export interface AccountUpdateParams {
  /**
   * Body param:
   */
  business_profile: AccountUpdateParams.BusinessProfile;

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

export namespace AccountUpdateParams {
  export interface BusinessProfile {
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
    address?: BusinessProfile.Address | null;

    /**
     * A brief description of the business and its products or services.
     */
    description?: string | null;

    industry?: BusinessProfile.Industry;

    /**
     * The official registered name of the business.
     */
    legal_name?: string | null;

    /**
     * The primary contact phone number for the business.
     */
    phone?: string | null;

    support_channels?: BusinessProfile.SupportChannels;

    /**
     * The business's tax identification number (e.g., EIN in the US).
     */
    tax_id?: string | null;

    /**
     * A description of how the business intends to use Straddle's services.
     */
    use_case?: string | null;
  }

  export namespace BusinessProfile {
    /**
     * The address object is optional. If provided, it must be a valid address.
     */
    export interface Address {
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

    export interface Industry {
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

    export interface SupportChannels {
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
  }
}

export interface AccountListParams extends PageNumberSchemaParams {
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
  terms_of_service: AccountOnboardParams.TermsOfService;

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

export namespace AccountOnboardParams {
  export interface TermsOfService {
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

Accounts.AccountPagedDataPageNumberSchema = AccountPagedDataPageNumberSchema;
Accounts.CapabilityRequests = CapabilityRequests;
Accounts.CapabilityRequestPagedDataPageNumberSchema = CapabilityRequestPagedDataPageNumberSchema;

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountPaged as AccountPaged,
    type AccountGetResponse as AccountGetResponse,
    AccountPagedDataPageNumberSchema as AccountPagedDataPageNumberSchema,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountGetParams as AccountGetParams,
    type AccountOnboardParams as AccountOnboardParams,
    type AccountSimulateParams as AccountSimulateParams,
  };

  export {
    CapabilityRequests as CapabilityRequests,
    type CapabilityRequestPaged as CapabilityRequestPaged,
    CapabilityRequestPagedDataPageNumberSchema as CapabilityRequestPagedDataPageNumberSchema,
    type CapabilityRequestCreateParams as CapabilityRequestCreateParams,
    type CapabilityRequestListParams as CapabilityRequestListParams,
  };
}
