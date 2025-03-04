// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import * as AccountsAPI from './embed/accounts/accounts';
import { PageNumberSchema } from '../pagination';

export type AccountTypeV1 = 'checking' | 'savings';

export interface AccountV1 {
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

  status_detail: AccountV1.StatusDetail;

  /**
   * The type of account (e.g., 'individual', 'business').
   */
  type: 'business';

  business_profile?: BusinessProfileV1;

  capabilities?: AccountV1.Capabilities;

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

  settings?: AccountV1.Settings;

  terms_of_service?: TermsOfServiceV1;

  /**
   * Timestamp of the most recent update to the account.
   */
  updated_at?: string | null;
}

export namespace AccountV1 {
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
      | 'terminated'
      | 'new';

    /**
     * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
     * This helps in tracking the cause of status updates.
     */
    source: 'watchtower';
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
      internet: Shared.Capability;

      /**
       * Whether the signed agreement payment authorization capability is enabled for the
       * account.
       */
      signed_agreement: Shared.Capability;
    }

    export interface CustomerTypes {
      businesses: Shared.Capability;

      individuals: Shared.Capability;
    }

    export interface PaymentTypes {
      charges: Shared.Capability;

      payouts: Shared.Capability;
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
}

export interface AddressV11 {
  /**
   * Primary address line (e.g., street, PO Box).
   */
  address1: string;

  /**
   * City, district, suburb, town, or village.
   */
  city: string;

  /**
   * Two-letter state code.
   */
  state: string;

  /**
   * Zip or postal code.
   */
  zip: string;

  /**
   * Secondary address line (e.g., apartment, suite, unit, or building).
   */
  address2?: string | null;
}

export interface BankAccountV1Request {
  /**
   * The name of the account holder as it appears on the bank account. Typically,
   * this is the legal name of the business associated with the account.
   */
  account_holder: string;

  /**
   * The bank account number.
   */
  account_number: string;

  /**
   * The routing number of the bank account.
   */
  routing_number: string;
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
  address?: AccountsAPI.AddressV1 | null;

  /**
   * A brief description of the business and its products or services.
   */
  description?: string | null;

  industry?: AccountsAPI.IndustryV1;

  /**
   * The official registered name of the business.
   */
  legal_name?: string | null;

  /**
   * The primary contact phone number for the business.
   */
  phone?: string | null;

  support_channels?: AccountsAPI.SupportChannelsV1;

  /**
   * The business's tax identification number (e.g., EIN in the US).
   */
  tax_id?: string | null;

  /**
   * A description of how the business intends to use Straddle's services.
   */
  use_case?: string | null;
}

export interface Capability {
  capability_status: 'active' | 'inactive';
}

export interface ChargeConfigurationV1 {
  /**
   * Defines whether to check the customer's balance before processing the charge.
   */
  balance_check: 'required' | 'enabled' | 'disabled';
}

export interface ChargeV1ItemResponse {
  data: ChargeV1ItemResponse.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: ResponseMetadata;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: ResponseTypeEnum;
}

export namespace ChargeV1ItemResponse {
  export interface Data {
    /**
     * Unique identifier for the charge.
     */
    id: string;

    /**
     * The amount of the charge in cents.
     */
    amount: number;

    /**
     * Configuration options for the charge.
     */
    config: Shared.ChargeConfigurationV1;

    /**
     * The channel or mechanism through which the payment was authorized. Use
     * `internet` for payments made online or through a mobile app and `signed` for
     * signed agreements where there is a consent form or contract. Use `signed` for
     * PDF signatures.
     */
    consent_type: Shared.ConsentTypeV1;

    /**
     * Timestamp of when the charge was created.
     */
    created_at: string | null;

    /**
     * The currency of the charge. Only USD is supported.
     */
    currency: string;

    /**
     * An arbitrary description for the charge.
     */
    description: string;

    /**
     * Information about the device used when the customer authorized the payment.
     */
    device: Shared.DeviceInfoV1;

    /**
     * Unique identifier for the charge in your database. This value must be unique
     * across all charges.
     */
    external_id: string;

    /**
     * Value of the `paykey` used for the charge.
     */
    paykey: string;

    /**
     * The desired date on which the payment should be occur. For charges, this means
     * the date you want the customer to be debited on.
     */
    payment_date: string;

    /**
     * The current status of the charge.
     */
    status: Shared.PaymentStatusV1;

    /**
     * Additional details about the current status of the charge.
     */
    status_details: Shared.StatusDetailsV1;

    /**
     * Status history.
     */
    status_history: Array<Shared.StatusHistoryV1>;

    /**
     * Timestamp of when the charge was last updated.
     */
    updated_at: string | null;

    /**
     * Information about the customer associated with the charge.
     */
    customer_details?: Shared.CustomerDetailsV1;

    /**
     * Timestamp of when the charge was effective in the customer's bank account,
     * otherwise known as the date on which the customer is debited.
     */
    effective_at?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the charge in a structured format.
     */
    metadata?: Record<string, string> | null;

    /**
     * Information about the paykey used for the charge.
     */
    paykey_details?: Shared.PaykeyDetailsV1;

    /**
     * The payment rail that the charge will be processed through.
     */
    payment_rail?: Shared.PaymentRailV1;

    /**
     * Timestamp of when the charge was processed by Straddle and originated to the
     * payment rail.
     */
    processed_at?: string | null;
  }
}

/**
 * Compliance profile for individual customers
 */
export type ComplianceProfileUnmaskedV1 =
  | ComplianceProfileUnmaskedV1.IndividualComplianceProfile
  | ComplianceProfileUnmaskedV1.BusinessComplianceProfile;

export namespace ComplianceProfileUnmaskedV1 {
  /**
   * Compliance profile for individual customers
   */
  export interface IndividualComplianceProfile {
    /**
     * Date of birth in YYYY-MM-DD format.
     */
    dob: string;

    /**
     * Social Security Number in the format XXX-XX-XXXX.
     */
    ssn: string;

    /**
     * Full 9-digit Employer Identification Number for businesses. This data is
     * required to trigger Patriot Act compliant KYB verification. Only valid where
     * customer type is 'business'.
     */
    ein?: string | null;

    /**
     * The official name of the business. This name should be correlated with the ein
     * value. Only valid where customer type is 'business'.
     */
    legal_business_name?: string | null;

    /**
     * URL of the company's official website.
     */
    website?: string | null;
  }

  /**
   * Compliance profile for business customers
   */
  export interface BusinessComplianceProfile {
    /**
     * Employer Identification Number in the format XX-XXXXXXX.
     */
    ein: string;

    /**
     * The official registered name of the business. This name should be correlated
     * with the `ein` value.
     */
    legal_business_name: string;

    /**
     * Date of birth for individual customers in ISO 8601 format (YYYY-MM-DD). This
     * data is required to trigger Patriot Act compliant KYC verification. Required if
     * SSN is provided. Only valid where customer type is 'individual'.
     */
    dob?: string | null;

    /**
     * Full 9-digit Social Security Number or government identifier for individuals.
     * This data is required to trigger Patriot Act compliant KYC verification.
     * Required if DOB is provided. Only valid where customer type is 'individual'.
     */
    ssn?: string | null;

    /**
     * Business website URL.
     */
    website?: string;
  }
}

/**
 * The channel or mechanism through which the payment was authorized. Use
 * `internet` for payments made online or through a mobile app and `signed` for
 * signed agreements where there is a consent form or contract. Use `signed` for
 * PDF signatures.
 */
export type ConsentTypeV1 = 'internet' | 'signed';

/**
 * Information about the customer associated with the charge or payout.
 */
export interface CustomerDetailsV1 {
  /**
   * Unique identifier for the customer.
   */
  id: string;

  /**
   * The type of customer.
   */
  customer_type: 'individual' | 'business';

  /**
   * Email.
   */
  email: string;

  /**
   * The name of the customer.
   */
  name: string;

  /**
   * Phone.
   */
  phone: string;
}

export type CustomerStatusV1 = 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

export type CustomerTypeV1 = 'individual' | 'business';

export interface CustomerV1 {
  /**
   * Unique identifier for the customer.
   */
  id: string;

  /**
   * Timestamp of when the customer record was created.
   */
  created_at: string;

  /**
   * The customer's email address.
   */
  email: string;

  /**
   * Full name of the individual or business name.
   */
  name: string;

  /**
   * The customer's phone number in E.164 format.
   */
  phone: string;

  status: CustomerStatusV1;

  type: CustomerTypeV1;

  /**
   * Timestamp of the most recent update to the customer record.
   */
  updated_at: string;

  address?: AddressV11 | null;

  /**
   * Compliance profile for individual customers
   */
  compliance_profile?: CustomerV1.IndividualComplianceProfile | CustomerV1.BusinessComplianceProfile;

  device?: CustomerV1.Device;

  /**
   * Unique identifier for the customer in your database, used for cross-referencing
   * between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Up to 20 additional user-defined key-value pairs. Useful for storing additional
   * information about the customer in a structured format.
   */
  metadata?: Record<string, string> | null;
}

export namespace CustomerV1 {
  /**
   * Compliance profile for individual customers
   */
  export interface IndividualComplianceProfile {
    /**
     * Date of birth in YYYY-MM-DD format.
     */
    dob: string;

    /**
     * Social Security Number in the format XXX-XX-XXXX.
     */
    ssn: string;

    /**
     * Full 9-digit Employer Identification Number for businesses. This data is
     * required to trigger Patriot Act compliant Know Your Business (KYB) verification.
     * Only valid where customer type is 'business'.
     */
    ein?: string | null;

    /**
     * The official name of the business. This name should be correlated with the ein
     * value. Only valid where customer type is 'business'.
     */
    legal_business_name?: string | null;

    /**
     * URL of the company's official website. Only valid where customer type is
     * 'business'.
     */
    website?: string | null;
  }

  /**
   * Compliance profile for business customers
   */
  export interface BusinessComplianceProfile {
    /**
     * Employer Identification Number in the format XX-XXXXXXX.
     */
    ein: string;

    /**
     * The official registered name of the business. This name should be correlated
     * with the `ein` value.
     */
    legal_business_name: string;

    /**
     * Date of birth for individual customers in ISO 8601 format (YYYY-MM-DD). This
     * data is required to trigger Patriot Act compliant Know Your Customer (KYC)
     * verification. Required if SSN is provided. Only valid where customer type is
     * 'individual'.
     */
    dob?: string | null;

    /**
     * Full 9-digit Social Security Number or government identifier for individuals.
     * This data is required to trigger Patriot Act compliant KYC verification.
     * Required if DOB is provided. Only valid where customer type is 'individual'.
     */
    ssn?: string | null;

    /**
     * Business website URL.
     */
    website?: string;
  }

  export interface Device {
    /**
     * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
     * represent an offline customer registration.
     */
    ip_address: string;
  }
}

export interface CustomerV1ItemResponse {
  data: CustomerV1;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: ResponseMetadata;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: ResponseTypeEnum;
}

/**
 * Information about the customer associated with the charge or payout.
 */
export interface CustomerDetailsV1 {
  /**
   * Unique identifier for the customer.
   */
  id: string;

  /**
   * The type of customer.
   */
  customer_type: 'individual' | 'business';

  /**
   * Email.
   */
  email: string;

  /**
   * The name of the customer.
   */
  name: string;

  /**
   * Phone.
   */
  phone: string;
}

export interface DeviceInfoV1 {
  /**
   * The IP address of the device used when the customer authorized the charge or
   * payout. Use `0.0.0.0` to represent an offline consent interaction.
   */
  ip_address: string;
}

export interface DeviceUnmaskedV1 {
  /**
   * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
   * represent an offline customer registration.
   */
  ip_address: string;
}

export interface DeviceInfoV1 {
  /**
   * The IP address of the device used when the customer authorized the charge or
   * payout. Use `0.0.0.0` to represent an offline consent interaction.
   */
  ip_address: string;
}

export interface FundingEventSummaryV1 {
  /**
   * Unique identifier for the funding event.
   */
  id: string;

  /**
   * The amount of the funding event in cents.
   */
  amount: number;

  /**
   * Describes the direction of the funding event from the perspective of the
   * `linked_bank_account`.
   */
  direction: TransferDirectionV1;

  /**
   * The funding event types describes the direction and reason for the funding
   * event.
   */
  event_type: FundingEventTypeV1;

  /**
   * The number of payments associated with the funding event.
   */
  payment_count: number;

  /**
   * Trace number.
   */
  trace_numbers: Array<string>;

  /**
   * The date on which the funding event occurred. For `deposits` and `returns`, this
   * is the date the funds were credited to your bank account. For `withdrawals` and
   * `reversals`, this is the date the funds were debited from your bank account.
   */
  transfer_date: string;

  /**
   * The trace number of the funding event.
   */
  trace_number?: string | null;
}

/**
 * The funding event types describes the direction and reason for the funding
 * event.
 */
export type FundingEventTypeV1 = 'charge_deposit' | 'charge_reversal' | 'payout_return' | 'payout_withdrawal';

export type IdentityDecisionV1 = 'accept' | 'reject' | 'review';

export interface IdentityVerificationBreakdownV1 {
  /**
   * List of specific result codes from the fraud and risk screening.
   */
  codes?: Array<string> | null;

  /**
   * Represents the strength of the correlation between provided and known
   * information. A higher score indicates a stronger correlation.
   */
  correlation_score?: number | null;

  decision?: IdentityDecisionV1;

  /**
   * Predicts the inherent risk associated with the customer for a given module. A
   * higher score indicates a greater likelihood of fraud.
   */
  risk_score?: number | null;
}

export interface ItemResponseOfAccountV1 {
  data: AccountV1;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: ResponseMetadata;

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

export interface ItemResponseOfLinkedBankAccountV1 {
  data: LinkedBankAccountV1;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: ResponseMetadata;

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

export interface ItemResponseOfOrganizationV1 {
  data: OrganizationV1;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: ResponseMetadata;

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

export interface ItemResponseOfRepresentativeV1 {
  data: RepresentativeV1;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: ResponseMetadata;

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

export interface LinkedBankAccountV1 {
  /**
   * Unique identifier for the linked bank account.
   */
  id: string;

  /**
   * The unique identifier of the Straddle account related to this bank account.
   */
  account_id: string;

  bank_account: LinkedBankAccountV1.BankAccount;

  /**
   * Timestamp of when the bank account object was created.
   */
  created_at: string;

  /**
   * The current status of the linked bank account.
   */
  status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

  status_detail: StatusDetailOfLinkedBankAccountStatusDetailEnum;

  /**
   * Timestamp of the most recent update to the linked bank account.
   */
  updated_at: string;

  /**
   * Up to 20 additional user-defined key-value pairs. Useful for storing additional
   * information about the linked bank account in a structured format.
   */
  metadata?: Record<string, string | null> | null;
}

export namespace LinkedBankAccountV1 {
  export interface BankAccount {
    account_holder: string;

    account_mask: string;

    institution_name: string;

    routing_number: string;
  }
}

export interface OrganizationV1 {
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
  metadata?: Record<string, string | null> | null;
}

/**
 * Metadata about the API request, including an identifier, timestamp, and
 * pagination details.
 */
export interface PagedResponseMetadata {
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

  /**
   * The number of pages available.
   */
  total_pages: number;
}

export interface PagedResponseMetadata1 {
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

  sort_order: SortOrder;

  total_items: number;

  /**
   * The number of pages available.
   */
  total_pages: number;
}

export interface PagedResponseMetadata2 {
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

  sort_order: SortOrder;

  total_items: number;

  /**
   * The number of pages available.
   */
  total_pages: number;
}

export interface PagedResponseOfCapabilityRequestV1 {
  data: Array<PagedResponseOfCapabilityRequestV1.Data>;

  /**
   * Metadata about the API request, including an identifier, timestamp, and
   * pagination details.
   */
  meta: PagedResponseMetadata;

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

export namespace PagedResponseOfCapabilityRequestV1 {
  export interface Data {
    /**
     * Unique identifier for the capability request.
     */
    id: string;

    /**
     * The unique identifier of the account associated with this capability request.
     */
    account_id: string;

    /**
     * The category of the requested capability. Use `payment_type` for charges and
     * payouts, `customer_type` to define `individuals` or `businesses`, and
     * `consent_type` for `signed_agreement` or `internet` payment authorization.
     */
    category: 'payment_type' | 'customer_type' | 'consent_type';

    /**
     * Timestamp of when the capability request was created.
     */
    created_at: string;

    /**
     * The current status of the capability request.
     */
    status: 'active' | 'inactive' | 'in_review' | 'rejected' | 'approved' | 'reviewing';

    /**
     * The specific type of capability being requested within the category.
     */
    type: 'charges' | 'payouts' | 'individuals' | 'businesses' | 'signed_agreement' | 'internet';

    /**
     * Timestamp of the most recent update to the capability request.
     */
    updated_at: string;

    /**
     * Any specific settings or configurations related to the requested capability.
     */
    settings?: Record<string, unknown> | null;
  }
}

/**
 * Metadata about the API request, including an identifier, timestamp, and
 * pagination details.
 */
export interface PagedResponseMetadata {
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

  /**
   * The number of pages available.
   */
  total_pages: number;
}

export interface PaykeyBankDetailsV1 {
  /**
   * Bank account number. This value is masked by default for security reasons. Use
   * the /unmask endpoint to access the unmasked value.
   */
  account_number: string;

  account_type: AccountTypeV1;

  /**
   * The routing number of the bank account.
   */
  routing_number: string;
}

export interface PaykeyDetailsV1 {
  /**
   * Unique identifier for the paykey.
   */
  id: string;

  /**
   * Unique identifier for the customer associated with the paykey.
   */
  customer_id: string;

  /**
   * Human-readable label used to represent this paykey in a UI.
   */
  label: string;

  /**
   * The most recent balance of the bank account associated with the paykey in
   * dollars.
   */
  balance?: number | null;
}

export type PaykeySourceV1 = 'bank_account' | 'straddle' | 'mx' | 'plaid';

export type PaykeyStatusV1 = 'pending' | 'active' | 'inactive' | 'rejected';

export interface PaykeyV1ItemResponse {
  data: PaykeyV1ItemResponse.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: ResponseMetadata;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: ResponseTypeEnum;
}

export namespace PaykeyV1ItemResponse {
  export interface Data {
    /**
     * Unique identifier for the paykey.
     */
    id: string;

    /**
     * Timestamp of when the paykey was created.
     */
    created_at: string;

    /**
     * Human-readable label used to represent this paykey in a UI.
     */
    label: string;

    /**
     * The tokenized paykey value. This value is used to create payments and should be
     * stored securely.
     */
    paykey: string;

    source: Shared.PaykeySourceV1;

    status: Shared.PaykeyStatusV1;

    /**
     * Timestamp of the most recent update to the paykey.
     */
    updated_at: string;

    bank_data?: Shared.PaykeyBankDetailsV1;

    /**
     * Unique identifier of the related customer object.
     */
    customer_id?: string | null;

    /**
     * Expiration date and time of the paykey, if applicable.
     */
    expires_at?: string | null;

    /**
     * Name of the financial institution.
     */
    institution_name?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the paykey in a structured format.
     */
    metadata?: Record<string, string> | null;

    status_details?: Shared.StatusDetailsV1;
  }
}

export interface PaykeyDetailsV1 {
  /**
   * Unique identifier for the paykey.
   */
  id: string;

  /**
   * Unique identifier for the customer associated with the paykey.
   */
  customer_id: string;

  /**
   * Human-readable label used to represent this paykey in a UI.
   */
  label: string;

  /**
   * The most recent balance of the bank account associated with the paykey in
   * dollars.
   */
  balance?: number | null;
}

/**
 * The payment rail used for the charge or payout.
 */
export type PaymentRailV1 = 'ach';

/**
 * The field to sort the results by.
 */
export type PaymentSortByV1 = 'created_at' | 'payment_date' | 'effective_at' | 'id' | 'amount';

/**
 * The current status of the `charge` or `payout`.
 */
export type PaymentStatusV1 =
  | 'created'
  | 'scheduled'
  | 'failed'
  | 'cancelled'
  | 'on_hold'
  | 'pending'
  | 'paid'
  | 'reversed';

/**
 * The type of payment.
 */
export type PaymentTypeV1 = 'charge' | 'payout';

export interface PayoutV1ItemResponse {
  data: PayoutV1ItemResponse.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: ResponseMetadata;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: ResponseTypeEnum;
}

export namespace PayoutV1ItemResponse {
  export interface Data {
    /**
     * Unique identifier for the payout.
     */
    id: string;

    /**
     * The amount of the payout in cents.
     */
    amount: number;

    /**
     * Configuration for the payout.
     */
    config: unknown;

    /**
     * The currency of the payout. Only USD is supported.
     */
    currency: string;

    /**
     * An arbitrary description for the payout.
     */
    description: string;

    /**
     * Information about the device used when the customer authorized the payout.
     */
    device: Shared.DeviceInfoV1;

    /**
     * Unique identifier for the payout in your database. This value must be unique
     * across all payouts.
     */
    external_id: string;

    /**
     * Value of the `paykey` used for the payout.
     */
    paykey: string;

    /**
     * The desired date on which the payment should be occur. For payouts, this means
     * the date you want the funds to be sent from your bank account.
     */
    payment_date: string;

    /**
     * The current status of the payout.
     */
    status: Shared.PaymentStatusV1;

    /**
     * Details about the current status of the payout.
     */
    status_details: Shared.StatusDetailsV1;

    /**
     * History of the status changes for the payout.
     */
    status_history: Array<Shared.StatusHistoryV1>;

    /**
     * The time the payout was created.
     */
    created_at?: string | null;

    /**
     * Information about the customer associated with the payout.
     */
    customer_details?: Shared.CustomerDetailsV1;

    /**
     * The actual date on which the payment occurred. For payouts, this is the date the
     * funds were sent from your bank account.
     */
    effective_at?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the payout in a structured format.
     */
    metadata?: Record<string, string> | null;

    /**
     * Information about the paykey used for the payout.
     */
    paykey_details?: Shared.PaykeyDetailsV1;

    /**
     * The payment rail used for the payout.
     */
    payment_rail?: Shared.PaymentRailV1;

    /**
     * The time the payout was processed by Straddle and originated to the payment
     * rail.
     */
    processed_at?: string | null;

    /**
     * The time the payout was last updated.
     */
    updated_at?: string | null;
  }
}

export interface RelationshipV1 {
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

export interface RepresentativeV1 {
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

  relationship: RepresentativeV1.Relationship;

  /**
   * The last 4 digits of the representative's Social Security Number.
   */
  ssn_last4: string;

  /**
   * The current status of the representative.
   */
  status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

  status_detail: RepresentativeV1.StatusDetail;

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

export namespace RepresentativeV1 {
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
      | 'disabled'
      | 'new';

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
export interface ResponseMetadata {
  /**
   * Unique identifier for this API request, useful for troubleshooting.
   */
  api_request_id: string;

  /**
   * Timestamp for this API request, useful for troubleshooting.
   */
  api_request_timestamp: string;
}

/**
 * Indicates the structure of the returned content.
 *
 * - "object" means the `data` field contains a single JSON object.
 * - "array" means the `data` field contains an array of objects.
 * - "error" means the `data` field contains an error object with details of the
 *   issue.
 * - "none" means no data is returned.
 */
export type ResponseTypeEnum = 'object' | 'array' | 'error' | 'none';

/**
 * Metadata about the API request, including an identifier and timestamp.
 */
export interface ResponseMetadata {
  /**
   * Unique identifier for this API request, useful for troubleshooting.
   */
  api_request_id: string;

  /**
   * Timestamp for this API request, useful for troubleshooting.
   */
  api_request_timestamp: string;
}

export type SortOrder = 'asc' | 'desc';

export interface StatusDetailOfLinkedBankAccountStatusDetailEnum {
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
    | 'new';

  /**
   * Identifies the origin of the status change (e.g., `watchtower`). This helps in
   * tracking the cause of status updates.
   */
  source: 'watchtower';
}

export interface StatusDetailsV1 {
  /**
   * A human-readable description of the current status.
   */
  message: string;

  /**
   * A machine-readable identifier for the specific status, useful for programmatic
   * handling.
   */
  reason: string;

  /**
   * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
   * This helps in tracking the cause of status updates.
   */
  source: string;
}

export interface StatusDetailsV1_1 {
  /**
   * The time the status change occurred.
   */
  changed_at: string;

  /**
   * A human-readable description of the current status.
   */
  message: string;

  /**
   * A machine-readable identifier for the specific status, useful for programmatic
   * handling.
   */
  reason: StatusReasonV1;

  /**
   * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
   * This helps in tracking the cause of status updates.
   */
  source: StatusSourceV1;

  /**
   * The status code if applicable.
   */
  code?: string | null;
}

export interface StatusHistoryV1 {
  /**
   * The time the status change occurred.
   */
  changed_at: string;

  /**
   * A human-readable description of the status.
   */
  message: string;

  /**
   * A machine-readable identifier for the specific status, useful for programmatic
   * handling.
   */
  reason: StatusReasonV1;

  /**
   * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
   * This helps in tracking the cause of status updates.
   */
  source: StatusSourceV1;

  /**
   * The current status of the `charge` or `payout`.
   */
  status: PaymentStatusV1;

  /**
   * The status code if applicable.
   */
  code?: string | null;
}

export type StatusReasonV1 =
  | 'insufficient_funds'
  | 'closed_bank_account'
  | 'invalid_bank_account'
  | 'invalid_routing'
  | 'disputed'
  | 'payment_stopped'
  | 'owner_deceased'
  | 'frozen_bank_account'
  | 'risk_review'
  | 'fraudulent'
  | 'duplicate_entry'
  | 'invalid_paykey'
  | 'payment_blocked'
  | 'amount_too_large'
  | 'too_many_attempts'
  | 'internal_system_error'
  | 'user_request'
  | 'ok'
  | 'other_network_return'
  | 'payout_refused';

export type StatusSourceV1 = 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';

export interface StatusDetailsV1 {
  /**
   * The time the status change occurred.
   */
  changed_at: string;

  /**
   * A human-readable description of the current status.
   */
  message: string;

  /**
   * A machine-readable identifier for the specific status, useful for programmatic
   * handling.
   */
  reason: StatusReasonV1;

  /**
   * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
   * This helps in tracking the cause of status updates.
   */
  source: StatusSourceV1;

  /**
   * The status code if applicable.
   */
  code?: string | null;
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

/**
 * Describes the direction of the funding event from the perspective of the
 * `linked_bank_account`.
 */
export type TransferDirectionV1 = 'deposit' | 'withdrawal';

export interface UpdateChargeStatusV1Request {
  /**
   * Details about why the charge status was updated.
   */
  reason?: string | null;
}

export interface UpdatePayoutStatusV1Request {
  /**
   * Details about why the payout status was updated.
   */
  reason: string;
}

export class AccountV1sPageNumberSchema extends PageNumberSchema<AccountV1> {}

export class LinkedBankAccountV1sPageNumberSchema extends PageNumberSchema<LinkedBankAccountV1> {}

export class OrganizationV1sPageNumberSchema extends PageNumberSchema<OrganizationV1> {}

export class RepresentativeV1sPageNumberSchema extends PageNumberSchema<RepresentativeV1> {}

export class FundingEventSummaryV1sPageNumberSchema extends PageNumberSchema<FundingEventSummaryV1> {}
