// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Information about the customer associated with the charge or payout.
 */
export interface CustomerDetailsV1 {
  /**
   * Unique identifier for the customer
   */
  id: string;

  /**
   * The type of customer
   */
  customer_type: 'individual' | 'business';

  /**
   * The customer's email address
   */
  email: string;

  /**
   * The name of the customer
   */
  name: string;

  /**
   * The customer's phone number in E.164 format
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

  sort_order: 'asc' | 'desc' | 'Asc' | 'Desc';

  /**
   * Total number of items returned in this response.
   */
  total_items: number;

  /**
   * The number of pages available.
   */
  total_pages: number;
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
   * Human-readable label that combines the bank name and masked account number to
   * help easility represent this paykey in a UI
   */
  label: string;

  /**
   * The most recent balance of the bank account associated with the paykey in
   * dollars.
   */
  balance?: number | null;
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
  reason:
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
    | 'payout_refused'
    | 'cancel_request'
    | 'failed_verification'
    | 'require_review'
    | 'blocked_by_system'
    | 'watchtower_review'
    | 'InsufficientFunds'
    | 'ClosedBankAccount'
    | 'InvalidBankAccount'
    | 'InvalidRouting'
    | 'Disputed'
    | 'PaymentStopped'
    | 'OwnerDeceased'
    | 'FrozenBankAccount'
    | 'RiskReview'
    | 'Fraudulent'
    | 'DuplicateEntry'
    | 'InvalidPaykey'
    | 'PaymentBlocked'
    | 'AmountTooLarge'
    | 'TooManyAttempts'
    | 'InternalSystemError'
    | 'UserRequest'
    | 'Ok'
    | 'OtherNetworkReturn'
    | 'PayoutRefused';

  /**
   * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
   * This helps in tracking the cause of status updates.
   */
  source:
    | 'watchtower'
    | 'bank_decline'
    | 'customer_dispute'
    | 'user_action'
    | 'system'
    | 'Watchtower'
    | 'BankDecline'
    | 'CustomerDispute'
    | 'UserAction'
    | 'System';

  /**
   * The status code if applicable.
   */
  code?: string | null;
}
