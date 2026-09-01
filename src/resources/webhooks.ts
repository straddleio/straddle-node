// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import * as AccountAPI from './accounts';
import * as RepresentativeAPI from './representatives';
import * as LinkedBankAccountAPI from './linked-bank-accounts';
import * as CapabilityRequestAPI from './capability-requests';
import * as MaskedCustomerDeviceAPI from './customers/customers';
import * as PaykeySourceAPI from './bridge';
import * as MaskedPaymentDeviceAPI from './charges';
import * as FundingEventTransferDirectionAPI from './funding-events';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unwrap(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): ParsedWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookSecret : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as ParsedWebhookEvent;
  }
}

export interface AccountCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: AccountAPI.Account;
}

export interface AccountEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: AccountAPI.Account;
}

export interface RepresentativeEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: RepresentativeAPI.Representative;
}

export interface RepresentativeCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: RepresentativeAPI.Representative;
}

export interface LinkedBankAccountEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: LinkedBankAccountAPI.LinkedBankAccount;
}

export interface LinkedBankAccountCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: LinkedBankAccountAPI.LinkedBankAccount;
}

export interface CapabilityRequestEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: CapabilityRequestAPI.CapabilityRequest;
}

export interface CapabilityRequestCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: CapabilityRequestAPI.CapabilityRequest;
}

export interface CustomerEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: CustomerEventV1WebhookEvent.Data;
}

export namespace CustomerEventV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the customer.
     * @format uuid
     */
    id: string;
    device: MaskedCustomerDeviceAPI.MaskedCustomerDevice;
    /**
     * Full name for an individual customer or business name for a business customer.
     */
    name: string;
    type: MaskedCustomerDeviceAPI.CustomerType;
    /**
     * Customer email address.
     */
    email: string;
    /**
     * Customer phone number in E.164 format.
     */
    phone: string;
    status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';
    /**
     * Timestamp of when the customer record was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Timestamp of the most recent update to the customer record.
     * @format date-time
     */
    updated_at: string;
    address?: Data.Address;
    compliance_profile?: Data.ComplianceProfile;
    /**
     * Unique identifier for the customer in your system.
     */
    external_id?: string | null;
    /**
     * Up to 20 user-defined key-value pairs associated with the customer.
     */
    metadata?: Record<string, string | null> | null;
  }

  export namespace Data {
    export interface Address {
      /**
       * Primary address line, such as a street address or PO Box.
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
       * ZIP or postal code.
       */
      zip: string;
      /**
       * Secondary address line, such as an apartment, suite, unit, or building.
       */
      address2?: string | null;
    }

    export interface ComplianceProfile {
      /**
       * Masked date of birth for an individual customer in `****-**-**` format.
       * @format ****-**-**
       */
      dob?: string | null;
      /**
       * Masked Social Security number for an individual customer in `***-**-****` format.
       * @format ***-**-****
       */
      ssn?: string | null;
      /**
       * Masked Employer Identification Number for a business customer in `**-*******` format.
       * @format **-*******
       */
      ein?: string | null;
      /**
       * Official registered name of the business customer.
       */
      legal_business_name?: string | null;
      /**
       * Official website URL for the business customer.
       */
      website?: string | null;
    }
  }
}

export interface CustomerCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: CustomerCreatedV1WebhookEvent.Data;
}

export namespace CustomerCreatedV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the customer.
     * @format uuid
     */
    id: string;
    device: MaskedCustomerDeviceAPI.MaskedCustomerDevice;
    /**
     * Full name for an individual customer or business name for a business customer.
     */
    name: string;
    type: MaskedCustomerDeviceAPI.CustomerType;
    /**
     * Customer email address.
     */
    email: string;
    /**
     * Customer phone number in E.164 format.
     */
    phone: string;
    status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';
    /**
     * Timestamp of when the customer record was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Timestamp of the most recent update to the customer record.
     * @format date-time
     */
    updated_at: string;
    address?: Data.Address;
    compliance_profile?: Data.ComplianceProfile;
    /**
     * Unique identifier for the customer in your system.
     */
    external_id?: string | null;
    /**
     * Up to 20 user-defined key-value pairs associated with the customer.
     */
    metadata?: Record<string, string | null> | null;
  }

  export namespace Data {
    export interface Address {
      /**
       * Primary address line, such as a street address or PO Box.
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
       * ZIP or postal code.
       */
      zip: string;
      /**
       * Secondary address line, such as an apartment, suite, unit, or building.
       */
      address2?: string | null;
    }

    export interface ComplianceProfile {
      /**
       * Masked date of birth for an individual customer in `****-**-**` format.
       * @format ****-**-**
       */
      dob?: string | null;
      /**
       * Masked Social Security number for an individual customer in `***-**-****` format.
       * @format ***-**-****
       */
      ssn?: string | null;
      /**
       * Masked Employer Identification Number for a business customer in `**-*******` format.
       * @format **-*******
       */
      ein?: string | null;
      /**
       * Official registered name of the business customer.
       */
      legal_business_name?: string | null;
      /**
       * Official website URL for the business customer.
       */
      website?: string | null;
    }
  }
}

export interface PaykeyEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: PaykeyEventV1WebhookEvent.Data;
}

export namespace PaykeyEventV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the paykey.
     * @format uuid
     */
    id: string;
    /**
     * Human-readable label for the paykey.
     */
    label: string;
    source: PaykeySourceAPI.PaykeySource;
    status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked';
    /**
     * Timestamp of when the paykey was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Timestamp of the most recent update to the paykey.
     * @format date-time
     */
    updated_at: string;
    /**
     * Full paykey value for creating payments. Store this value securely.
     */
    paykey: string;
    /**
     * Unique identifier for the customer associated with the paykey.
     * @format uuid
     */
    customer_id?: string | null;
    /**
     * Name of the financial institution.
     */
    institution_name?: string | null;
    status_details?: Data.StatusDetails;
    /**
     * Expiration date and time of the paykey, if applicable.
     * @format date-time
     */
    expires_at?: string | null;
    bank_data?: Data.BankData;
    /**
     * Up to 20 user-defined key-value pairs associated with the paykey.
     */
    metadata?: Record<string, string | null> | null;
    balance?: Data.Balance;
  }

  export namespace Data {
    export interface StatusDetails {
      /**
       * A human-readable description of the current status.
       */
      message: string;
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * The status code if applicable.
       */
      code: string | null;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
    }

    export interface BankData {
      /**
       * Bank routing number.
       */
      routing_number: string;
      /**
       * Masked bank account number.
       */
      account_number: string;
      account_type: PaykeySourceAPI.AccountType;
    }

    export interface Balance {
      status: PaykeySourceAPI.PaykeyBalanceRefreshStatus;
      /**
       * Most recently retrieved account balance in dollars.
       * @format double
       */
      account_balance?: number | null;
      /**
       * Timestamp of the most recent account balance update.
       * @format date-time
       */
      updated_at?: string | null;
    }
  }
}

export interface PaykeyCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: PaykeyCreatedV1WebhookEvent.Data;
}

export namespace PaykeyCreatedV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the paykey.
     * @format uuid
     */
    id: string;
    /**
     * Human-readable label for the paykey.
     */
    label: string;
    source: PaykeySourceAPI.PaykeySource;
    status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked';
    /**
     * Timestamp of when the paykey was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Timestamp of the most recent update to the paykey.
     * @format date-time
     */
    updated_at: string;
    /**
     * Full paykey value for creating payments. Store this value securely.
     */
    paykey: string;
    /**
     * Unique identifier for the customer associated with the paykey.
     * @format uuid
     */
    customer_id?: string | null;
    /**
     * Name of the financial institution.
     */
    institution_name?: string | null;
    status_details?: Data.StatusDetails;
    /**
     * Expiration date and time of the paykey, if applicable.
     * @format date-time
     */
    expires_at?: string | null;
    bank_data?: Data.BankData;
    /**
     * Up to 20 user-defined key-value pairs associated with the paykey.
     */
    metadata?: Record<string, string | null> | null;
    balance?: Data.Balance;
  }

  export namespace Data {
    export interface StatusDetails {
      /**
       * A human-readable description of the current status.
       */
      message: string;
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * The status code if applicable.
       */
      code: string | null;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
    }

    export interface BankData {
      /**
       * Bank routing number.
       */
      routing_number: string;
      /**
       * Masked bank account number.
       */
      account_number: string;
      account_type: PaykeySourceAPI.AccountType;
    }

    export interface Balance {
      status: PaykeySourceAPI.PaykeyBalanceRefreshStatus;
      /**
       * Most recently retrieved account balance in dollars.
       * @format double
       */
      account_balance?: number | null;
      /**
       * Timestamp of the most recent account balance update.
       * @format date-time
       */
      updated_at?: string | null;
    }
  }
}

export interface ChargeCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: ChargeCreatedV1WebhookEvent.Data;
}

export namespace ChargeCreatedV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for this charge.
     * @format uuid
     */
    id: string;
    /**
     * The masked paykey token used for this charge.
     */
    paykey: string;
    /**
     * A human-readable description of the charge.
     */
    description: string | null;
    /**
     * Amount in cents.
     * @format int32
     */
    amount: number;
    /**
     * Currency code. Only `USD` is supported.
     */
    currency: string;
    /**
     * Date when Straddle submits the charge for processing.
     * @format date
     */
    payment_date: string;
    consent_type: 'internet' | 'signed';
    device: MaskedPaymentDeviceAPI.MaskedPaymentDevice;
    config: Data.Config;
    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
    status_details: Data.StatusDetails;
    /**
     * Complete ordered history of all status changes for this charge.
     */
    status_history: Array<Data.StatusHistory>;
    /**
     * IDs of the funding events that included this charge.
     */
    funding_ids: Array<string>;
    /**
     * Whether this charge resubmits an original charge.
     */
    is_resubmit: boolean;
    /**
     * Whether this charge has been resubmitted.
     */
    has_resubmit: boolean;
    /**
     * Whether an associated payout has refunded this charge.
     */
    has_refund: boolean;
    payment_rail?: 'ach';
    paykey_details?: Data.PaykeyDetails;
    customer_details?: Data.CustomerDetails;
    /**
     * Your unique identifier for this charge, used to correlate with your internal records.
     */
    external_id?: string | null;
    /**
     * Timestamp when this charge was created.
     * @format date-time
     */
    created_at?: string | null;
    /**
     * Timestamp when this charge was last updated.
     * @format date-time
     */
    updated_at?: string | null;
    /**
     * Timestamp when this charge was submitted to the payment network. Null until processed.
     * @format date-time
     */
    processed_at?: string | null;
    /**
     * Timestamp when funds were settled. Null until settlement is confirmed.
     * @format date-time
     */
    effective_at?: string | null;
    /**
     * Key-value metadata stored with this charge.
     */
    metadata?: Record<string, string | null> | null;
    /**
     * Related payments and their relationship to this charge.
     */
    related_payments?: Array<MaskedPaymentDeviceAPI.RelatedPayment> | null;
    /**
     * Authorization documents for this charge, ordered by upload time.
     */
    documents?: Array<MaskedPaymentDeviceAPI.PaymentAuthorizationProof> | null;
  }

  export namespace Data {
    export interface Config {
      balance_check: MaskedPaymentDeviceAPI.BalanceCheckMode;
    }

    export interface StatusDetails {
      /**
       * A human-readable description of the current status.
       */
      message: string;
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * The status code if applicable.
       */
      code: string | null;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
    }

    export interface StatusHistory {
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * A human-readable description of the status.
       */
      message: string;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
      status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    export interface PaykeyDetails {
      /**
       * Unique identifier for the paykey.
       * @format uuid
       */
      id: string;
      /**
       * Unique identifier for the customer associated with the paykey.
       * @format uuid
       */
      customer_id: string;
      /**
       * Display label combining the bank name and masked account number.
       */
      label: string;
      /**
       * Available balance in cents when a balance check was performed. Null otherwise.
       * @format int32
       */
      balance?: number | null;
    }

    export interface CustomerDetails {
      /**
       * Unique identifier for the customer.
       * @format uuid
       */
      id: string;
      /**
       * Customer's full name or business name.
       */
      name: string;
      /**
       * Customer's email address.
       */
      email: string;
      /**
       * Customer's phone number in E.164 format.
       */
      phone: string;
      /**
       * Whether the customer is an individual or a business.
       */
      customer_type: MaskedCustomerDeviceAPI.CustomerType;
    }
  }
}

export interface ChargeEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: ChargeEventV1WebhookEvent.Data;
}

export namespace ChargeEventV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for this charge.
     * @format uuid
     */
    id: string;
    /**
     * The masked paykey token used for this charge.
     */
    paykey: string;
    /**
     * A human-readable description of the charge.
     */
    description: string | null;
    /**
     * Amount in cents.
     * @format int32
     */
    amount: number;
    /**
     * Currency code. Only `USD` is supported.
     */
    currency: string;
    /**
     * Date when Straddle submits the charge for processing.
     * @format date
     */
    payment_date: string;
    consent_type: 'internet' | 'signed';
    device: MaskedPaymentDeviceAPI.MaskedPaymentDevice;
    config: Data.Config;
    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
    status_details: Data.StatusDetails;
    /**
     * Complete ordered history of all status changes for this charge.
     */
    status_history: Array<Data.StatusHistory>;
    /**
     * IDs of the funding events that included this charge.
     */
    funding_ids: Array<string>;
    /**
     * Whether this charge resubmits an original charge.
     */
    is_resubmit: boolean;
    /**
     * Whether this charge has been resubmitted.
     */
    has_resubmit: boolean;
    /**
     * Whether an associated payout has refunded this charge.
     */
    has_refund: boolean;
    payment_rail?: 'ach';
    paykey_details?: Data.PaykeyDetails;
    customer_details?: Data.CustomerDetails;
    /**
     * Your unique identifier for this charge, used to correlate with your internal records.
     */
    external_id?: string | null;
    /**
     * Timestamp when this charge was created.
     * @format date-time
     */
    created_at?: string | null;
    /**
     * Timestamp when this charge was last updated.
     * @format date-time
     */
    updated_at?: string | null;
    /**
     * Timestamp when this charge was submitted to the payment network. Null until processed.
     * @format date-time
     */
    processed_at?: string | null;
    /**
     * Timestamp when funds were settled. Null until settlement is confirmed.
     * @format date-time
     */
    effective_at?: string | null;
    /**
     * Key-value metadata stored with this charge.
     */
    metadata?: Record<string, string | null> | null;
    /**
     * Related payments and their relationship to this charge.
     */
    related_payments?: Array<MaskedPaymentDeviceAPI.RelatedPayment> | null;
    /**
     * Authorization documents for this charge, ordered by upload time.
     */
    documents?: Array<MaskedPaymentDeviceAPI.PaymentAuthorizationProof> | null;
  }

  export namespace Data {
    export interface Config {
      balance_check: MaskedPaymentDeviceAPI.BalanceCheckMode;
    }

    export interface StatusDetails {
      /**
       * A human-readable description of the current status.
       */
      message: string;
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * The status code if applicable.
       */
      code: string | null;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
    }

    export interface StatusHistory {
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * A human-readable description of the status.
       */
      message: string;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
      status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    export interface PaykeyDetails {
      /**
       * Unique identifier for the paykey.
       * @format uuid
       */
      id: string;
      /**
       * Unique identifier for the customer associated with the paykey.
       * @format uuid
       */
      customer_id: string;
      /**
       * Display label combining the bank name and masked account number.
       */
      label: string;
      /**
       * Available balance in cents when a balance check was performed. Null otherwise.
       * @format int32
       */
      balance?: number | null;
    }

    export interface CustomerDetails {
      /**
       * Unique identifier for the customer.
       * @format uuid
       */
      id: string;
      /**
       * Customer's full name or business name.
       */
      name: string;
      /**
       * Customer's email address.
       */
      email: string;
      /**
       * Customer's phone number in E.164 format.
       */
      phone: string;
      /**
       * Whether the customer is an individual or a business.
       */
      customer_type: MaskedCustomerDeviceAPI.CustomerType;
    }
  }
}

export interface PayoutCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: PayoutCreatedV1WebhookEvent.Data;
}

export namespace PayoutCreatedV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for this payout.
     * @format uuid
     */
    id: string;
    /**
     * The masked paykey token used for this payout.
     */
    paykey: string;
    /**
     * A human-readable description of the payout.
     */
    description: string | null;
    /**
     * Amount in cents.
     * @format int32
     */
    amount: number;
    /**
     * Currency code. Only `USD` is supported.
     */
    currency: string;
    /**
     * Date when Straddle submits the payout for processing.
     * @format date
     */
    payment_date: string;
    consent_type: 'internet' | 'signed';
    device: MaskedPaymentDeviceAPI.MaskedPaymentDevice;
    config: Record<string, unknown>;
    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
    status_details: Data.StatusDetails;
    /**
     * Complete ordered history of all status changes for this payout.
     */
    status_history: Array<Data.StatusHistory>;
    /**
     * IDs of the funding events that included this payout.
     */
    funding_ids: Array<string>;
    /**
     * Whether this payout resubmits an original payout.
     */
    is_resubmit: boolean;
    /**
     * Whether this payout has been resubmitted.
     */
    has_resubmit: boolean;
    /**
     * Whether this payout refunds an original charge.
     */
    is_refund: boolean;
    payment_rail?: 'ach';
    paykey_details?: Data.PaykeyDetails;
    customer_details?: Data.CustomerDetails;
    /**
     * Your unique identifier for this payout, used to correlate with your internal records.
     */
    external_id?: string | null;
    /**
     * Timestamp when this payout was created.
     * @format date-time
     */
    created_at?: string | null;
    /**
     * Timestamp when this payout was last updated.
     * @format date-time
     */
    updated_at?: string | null;
    /**
     * Timestamp when this payout was submitted to the payment network. Null until processed.
     * @format date-time
     */
    processed_at?: string | null;
    /**
     * Timestamp when funds were settled. Null until settlement is confirmed.
     * @format date-time
     */
    effective_at?: string | null;
    /**
     * Key-value metadata stored with this payout.
     */
    metadata?: Record<string, string | null> | null;
    /**
     * Related payments and their relationship to this payout.
     */
    related_payments?: Array<MaskedPaymentDeviceAPI.RelatedPayment> | null;
    /**
     * Authorization documents for this payout, ordered by upload time.
     */
    documents?: Array<MaskedPaymentDeviceAPI.PaymentAuthorizationProof> | null;
  }

  export namespace Data {
    export interface StatusDetails {
      /**
       * A human-readable description of the current status.
       */
      message: string;
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * The status code if applicable.
       */
      code: string | null;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
    }

    export interface StatusHistory {
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * A human-readable description of the status.
       */
      message: string;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
      status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    export interface PaykeyDetails {
      /**
       * Unique identifier for the paykey.
       * @format uuid
       */
      id: string;
      /**
       * Unique identifier for the customer associated with the paykey.
       * @format uuid
       */
      customer_id: string;
      /**
       * Display label combining the bank name and masked account number.
       */
      label: string;
      /**
       * Available balance in cents when a balance check was performed. Null otherwise.
       * @format int32
       */
      balance?: number | null;
    }

    export interface CustomerDetails {
      /**
       * Unique identifier for the customer.
       * @format uuid
       */
      id: string;
      /**
       * Customer's full name or business name.
       */
      name: string;
      /**
       * Customer's email address.
       */
      email: string;
      /**
       * Customer's phone number in E.164 format.
       */
      phone: string;
      /**
       * Whether the customer is an individual or a business.
       */
      customer_type: MaskedCustomerDeviceAPI.CustomerType;
    }
  }
}

export interface PayoutEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: PayoutEventV1WebhookEvent.Data;
}

export namespace PayoutEventV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for this payout.
     * @format uuid
     */
    id: string;
    /**
     * The masked paykey token used for this payout.
     */
    paykey: string;
    /**
     * A human-readable description of the payout.
     */
    description: string | null;
    /**
     * Amount in cents.
     * @format int32
     */
    amount: number;
    /**
     * Currency code. Only `USD` is supported.
     */
    currency: string;
    /**
     * Date when Straddle submits the payout for processing.
     * @format date
     */
    payment_date: string;
    consent_type: 'internet' | 'signed';
    device: MaskedPaymentDeviceAPI.MaskedPaymentDevice;
    config: Record<string, unknown>;
    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
    status_details: Data.StatusDetails;
    /**
     * Complete ordered history of all status changes for this payout.
     */
    status_history: Array<Data.StatusHistory>;
    /**
     * IDs of the funding events that included this payout.
     */
    funding_ids: Array<string>;
    /**
     * Whether this payout resubmits an original payout.
     */
    is_resubmit: boolean;
    /**
     * Whether this payout has been resubmitted.
     */
    has_resubmit: boolean;
    /**
     * Whether this payout refunds an original charge.
     */
    is_refund: boolean;
    payment_rail?: 'ach';
    paykey_details?: Data.PaykeyDetails;
    customer_details?: Data.CustomerDetails;
    /**
     * Your unique identifier for this payout, used to correlate with your internal records.
     */
    external_id?: string | null;
    /**
     * Timestamp when this payout was created.
     * @format date-time
     */
    created_at?: string | null;
    /**
     * Timestamp when this payout was last updated.
     * @format date-time
     */
    updated_at?: string | null;
    /**
     * Timestamp when this payout was submitted to the payment network. Null until processed.
     * @format date-time
     */
    processed_at?: string | null;
    /**
     * Timestamp when funds were settled. Null until settlement is confirmed.
     * @format date-time
     */
    effective_at?: string | null;
    /**
     * Key-value metadata stored with this payout.
     */
    metadata?: Record<string, string | null> | null;
    /**
     * Related payments and their relationship to this payout.
     */
    related_payments?: Array<MaskedPaymentDeviceAPI.RelatedPayment> | null;
    /**
     * Authorization documents for this payout, ordered by upload time.
     */
    documents?: Array<MaskedPaymentDeviceAPI.PaymentAuthorizationProof> | null;
  }

  export namespace Data {
    export interface StatusDetails {
      /**
       * A human-readable description of the current status.
       */
      message: string;
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * The status code if applicable.
       */
      code: string | null;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
    }

    export interface StatusHistory {
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * A human-readable description of the status.
       */
      message: string;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
      status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    export interface PaykeyDetails {
      /**
       * Unique identifier for the paykey.
       * @format uuid
       */
      id: string;
      /**
       * Unique identifier for the customer associated with the paykey.
       * @format uuid
       */
      customer_id: string;
      /**
       * Display label combining the bank name and masked account number.
       */
      label: string;
      /**
       * Available balance in cents when a balance check was performed. Null otherwise.
       * @format int32
       */
      balance?: number | null;
    }

    export interface CustomerDetails {
      /**
       * Unique identifier for the customer.
       * @format uuid
       */
      id: string;
      /**
       * Customer's full name or business name.
       */
      name: string;
      /**
       * Customer's email address.
       */
      email: string;
      /**
       * Customer's phone number in E.164 format.
       */
      phone: string;
      /**
       * Whether the customer is an individual or a business.
       */
      customer_type: MaskedCustomerDeviceAPI.CustomerType;
    }
  }
}

export interface PlatformEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: PlatformEventV1WebhookEvent.Data;
}

export namespace PlatformEventV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the platform.
     * @format uuid
     */
    id: string;
    /**
     * Current lifecycle status of the platform.
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';
    status_detail: Data.StatusDetail;
    business_profile?: Data.BusinessProfile;
    /**
     * Key-value metadata associated with the platform.
     */
    metadata?: Record<string, string | null> | null;
    /**
     * Your unique identifier for the platform.
     */
    external_id?: string | null;
    /**
     * Timestamp when the platform was created.
     * @format date-time
     */
    created_at?: string | null;
    /**
     * Timestamp when the platform was last updated.
     * @format date-time
     */
    updated_at?: string | null;
  }

  export namespace Data {
    export interface StatusDetail {
      /**
       * Machine-readable reason for the current platform status.
       */
      reason:
        | 'unverified'
        | 'new'
        | 'in_review'
        | 'pending'
        | 'stuck'
        | 'verified'
        | 'failed_verification'
        | 'disabled'
        | 'terminated';
      /**
       * Source that produced the current platform status.
       */
      source: 'watchtower';
      /**
       * Machine-readable code for the current platform status.
       */
      code: string;
      /**
       * Human-readable explanation of the current platform status.
       */
      message: string;
    }

    export interface BusinessProfile {
      /**
       * Display name of the business.
       */
      name: string;
      /**
       * URL of the business website.
       */
      website: string;
      /**
       * Registered legal name of the business.
       */
      legal_name?: string | null;
      /**
       * Description of the business.
       */
      description?: string | null;
      /**
       * Description of how the business uses Straddle.
       */
      use_case?: string | null;
      /**
       * Tax identification number of the business.
       */
      tax_id?: string | null;
      /**
       * Primary phone number for the business.
       */
      phone?: string | null;
      address?: BusinessProfile.Address;
      industry?: BusinessProfile.Industry;
      support_channels?: BusinessProfile.SupportChannels;
    }

    export namespace BusinessProfile {
      export interface Address {
        /**
         * Primary street address.
         */
        line1?: string | null;
        /**
         * Additional address information, such as a suite or unit.
         */
        line2?: string | null;
        /**
         * City for the address.
         */
        city?: string | null;
        /**
         * State or region for the address.
         */
        state?: string | null;
        /**
         * Postal code for the address.
         */
        postal_code?: string | null;
        /**
         * Two-letter ISO 3166-1 country code.
         */
        country?: string | null;
      }

      export interface Industry {
        /**
         * Merchant Category Code assigned to the business.
         */
        mcc?: string | null;
        /**
         * Industry sector of the business.
         */
        sector?: string | null;
        /**
         * Industry category of the business.
         */
        category?: string | null;
      }

      export interface SupportChannels {
        /**
         * Customer support email address.
         */
        email?: string | null;
        /**
         * Customer support phone number.
         */
        phone?: string | null;
        /**
         * URL of the customer support page or contact form.
         */
        url?: string | null;
      }
    }
  }
}

export interface PlatformCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: PlatformCreatedV1WebhookEvent.Data;
}

export namespace PlatformCreatedV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the platform.
     * @format uuid
     */
    id: string;
    /**
     * Current lifecycle status of the platform.
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';
    status_detail: Data.StatusDetail;
    business_profile?: Data.BusinessProfile;
    /**
     * Key-value metadata associated with the platform.
     */
    metadata?: Record<string, string | null> | null;
    /**
     * Your unique identifier for the platform.
     */
    external_id?: string | null;
    /**
     * Timestamp when the platform was created.
     * @format date-time
     */
    created_at?: string | null;
    /**
     * Timestamp when the platform was last updated.
     * @format date-time
     */
    updated_at?: string | null;
  }

  export namespace Data {
    export interface StatusDetail {
      /**
       * Machine-readable reason for the current platform status.
       */
      reason:
        | 'unverified'
        | 'new'
        | 'in_review'
        | 'pending'
        | 'stuck'
        | 'verified'
        | 'failed_verification'
        | 'disabled'
        | 'terminated';
      /**
       * Source that produced the current platform status.
       */
      source: 'watchtower';
      /**
       * Machine-readable code for the current platform status.
       */
      code: string;
      /**
       * Human-readable explanation of the current platform status.
       */
      message: string;
    }

    export interface BusinessProfile {
      /**
       * Display name of the business.
       */
      name: string;
      /**
       * URL of the business website.
       */
      website: string;
      /**
       * Registered legal name of the business.
       */
      legal_name?: string | null;
      /**
       * Description of the business.
       */
      description?: string | null;
      /**
       * Description of how the business uses Straddle.
       */
      use_case?: string | null;
      /**
       * Tax identification number of the business.
       */
      tax_id?: string | null;
      /**
       * Primary phone number for the business.
       */
      phone?: string | null;
      address?: BusinessProfile.Address;
      industry?: BusinessProfile.Industry;
      support_channels?: BusinessProfile.SupportChannels;
    }

    export namespace BusinessProfile {
      export interface Address {
        /**
         * Primary street address.
         */
        line1?: string | null;
        /**
         * Additional address information, such as a suite or unit.
         */
        line2?: string | null;
        /**
         * City for the address.
         */
        city?: string | null;
        /**
         * State or region for the address.
         */
        state?: string | null;
        /**
         * Postal code for the address.
         */
        postal_code?: string | null;
        /**
         * Two-letter ISO 3166-1 country code.
         */
        country?: string | null;
      }

      export interface Industry {
        /**
         * Merchant Category Code assigned to the business.
         */
        mcc?: string | null;
        /**
         * Industry sector of the business.
         */
        sector?: string | null;
        /**
         * Industry category of the business.
         */
        category?: string | null;
      }

      export interface SupportChannels {
        /**
         * Customer support email address.
         */
        email?: string | null;
        /**
         * Customer support phone number.
         */
        phone?: string | null;
        /**
         * URL of the customer support page or contact form.
         */
        url?: string | null;
      }
    }
  }
}

export interface UserEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: UserEventV1WebhookEvent.Data;
}

export namespace UserEventV1WebhookEvent {
  export interface Data {
    /**
     * The unique identifier of the user.
     * @format uuid
     */
    id: string;
    /**
     * The current status of the user.
     */
    status: 'invited' | 'active' | 'onboarding' | 'inactive';
    /**
     * The first name of the user.
     */
    first_name: string;
    /**
     * The last name of the user.
     */
    last_name: string;
    /**
     * The email address of the user.
     */
    email: string;
    /**
     * The current status of the user.
     */
    level: 'none' | 'onboarding' | 'straddle' | 'platform' | 'organization';
    /**
     * The role assigned to the user, determining their permissions within the system.
     */
    roles: Array<'none' | 'member' | 'developer' | 'admin'>;
    /**
     * Timestamp of when the user was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Timestamp of the most recent update to the user.
     * @format date-time
     */
    updated_at: string;
    /**
     * Memberships that grant the user access to Straddle entities.
     */
    memberships: Array<Data.Membership>;
    /**
     * The unique identifier of the organization this user belongs to.
     * @format uuid
     */
    organization_id?: string | null;
    /**
     * The unique identifier of the organization this user belongs to.
     * @format uuid
     */
    platform_id?: string | null;
    /**
     * The unique identifier used for authentication purposes.
     */
    authenticator_id?: string | null;
  }

  export namespace Data {
    export interface Membership {
      /**
       * Entity level at which the membership applies.
       */
      level: 'none' | 'onboarding' | 'account' | 'organization' | 'platform' | 'straddle';
      /**
       * Display name of the entity associated with the membership.
       */
      entity_name: string;
      /**
       * Roles granted by the membership.
       */
      roles: Array<'none' | 'member' | 'developer' | 'admin'>;
      /**
       * Organization identifier used by the authentication provider.
       */
      authenticator_organization_id: string;
      /**
       * Unique identifier of the entity associated with the membership.
       * @format uuid
       */
      entity_id?: string | null;
    }
  }
}

export interface UserCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: UserCreatedV1WebhookEvent.Data;
}

export namespace UserCreatedV1WebhookEvent {
  export interface Data {
    /**
     * The unique identifier of the user.
     * @format uuid
     */
    id: string;
    /**
     * The current status of the user.
     */
    status: 'invited' | 'active' | 'onboarding' | 'inactive';
    /**
     * The first name of the user.
     */
    first_name: string;
    /**
     * The last name of the user.
     */
    last_name: string;
    /**
     * The email address of the user.
     */
    email: string;
    /**
     * The current status of the user.
     */
    level: 'none' | 'onboarding' | 'straddle' | 'platform' | 'organization';
    /**
     * The role assigned to the user, determining their permissions within the system.
     */
    roles: Array<'none' | 'member' | 'developer' | 'admin'>;
    /**
     * Timestamp of when the user was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Timestamp of the most recent update to the user.
     * @format date-time
     */
    updated_at: string;
    /**
     * Memberships that grant the user access to Straddle entities.
     */
    memberships: Array<Data.Membership>;
    /**
     * The unique identifier of the organization this user belongs to.
     * @format uuid
     */
    organization_id?: string | null;
    /**
     * The unique identifier of the organization this user belongs to.
     * @format uuid
     */
    platform_id?: string | null;
    /**
     * The unique identifier used for authentication purposes.
     */
    authenticator_id?: string | null;
  }

  export namespace Data {
    export interface Membership {
      /**
       * Entity level at which the membership applies.
       */
      level: 'none' | 'onboarding' | 'account' | 'organization' | 'platform' | 'straddle';
      /**
       * Display name of the entity associated with the membership.
       */
      entity_name: string;
      /**
       * Roles granted by the membership.
       */
      roles: Array<'none' | 'member' | 'developer' | 'admin'>;
      /**
       * Organization identifier used by the authentication provider.
       */
      authenticator_organization_id: string;
      /**
       * Unique identifier of the entity associated with the membership.
       * @format uuid
       */
      entity_id?: string | null;
    }
  }
}

export interface FundingEventCreatedV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: FundingEventCreatedV1WebhookEvent.Data;
}

export namespace FundingEventCreatedV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for this funding event.
     * @format uuid
     */
    id: string;
    /**
     * Total funding event amount in the smallest currency unit. For example, `1000` is $10.00 USD.
     * @format int32
     */
    amount: number;
    /**
     * Transfer direction relative to the linked bank account. `deposit` moves funds into the account, and `withdrawal` moves funds out.
     */
    direction: FundingEventTransferDirectionAPI.FundingEventTransferDirection;
    /**
     * Reason for the funding event. `charge_deposit` settles collected charges to the linked bank account. `charge_reversal` withdraws funds for reversed charges. `payout_withdrawal` withdraws funds for payouts. `payout_return` deposits returned payout funds.
     */
    event_type: FundingEventTransferDirectionAPI.FundingEventType;
    /**
     * Network-level trace identifiers assigned during processing. Keys vary by payment rail.
     */
    trace_ids: Record<string, string>;
    /**
     * Number of payments included in this funding event.
     * @format int32
     */
    payment_count: number;
    /**
     * The date the funds transfer was initiated.
     * @format date
     */
    transfer_date: string;
    /**
     * Timestamp when this funding event was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Timestamp when this funding event was last updated.
     * @format date-time
     */
    updated_at: string;
    /**
     * Complete ordered history of all status changes for this funding event.
     */
    status_history: Array<Data.StatusHistory>;
    /**
     * Current status of this funding event.
     */
    status?: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
    /**
     * Reason, source, and message for the most recent status change.
     */
    status_details?: Data.StatusDetails;
  }

  export namespace Data {
    export interface StatusHistory {
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * A human-readable description of the status.
       */
      message: string;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
      status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    export interface StatusDetails {
      /**
       * A human-readable description of the current status.
       */
      message: string;
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * The status code if applicable.
       */
      code: string | null;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
    }
  }
}

export interface FundingEventEventV1WebhookEvent {
  /**
   * Type of this event.
   */
  event_type: string;
  /**
   * Unique identifier for this event.
   * @format uuid
   */
  event_id: string;
  /**
   * Unique identifier for the account associated with this event.
   * @format uuid
   */
  account_id: string;
  data: FundingEventEventV1WebhookEvent.Data;
}

export namespace FundingEventEventV1WebhookEvent {
  export interface Data {
    /**
     * Unique identifier for this funding event.
     * @format uuid
     */
    id: string;
    /**
     * Total funding event amount in the smallest currency unit. For example, `1000` is $10.00 USD.
     * @format int32
     */
    amount: number;
    /**
     * Transfer direction relative to the linked bank account. `deposit` moves funds into the account, and `withdrawal` moves funds out.
     */
    direction: FundingEventTransferDirectionAPI.FundingEventTransferDirection;
    /**
     * Reason for the funding event. `charge_deposit` settles collected charges to the linked bank account. `charge_reversal` withdraws funds for reversed charges. `payout_withdrawal` withdraws funds for payouts. `payout_return` deposits returned payout funds.
     */
    event_type: FundingEventTransferDirectionAPI.FundingEventType;
    /**
     * Network-level trace identifiers assigned during processing. Keys vary by payment rail.
     */
    trace_ids: Record<string, string>;
    /**
     * Number of payments included in this funding event.
     * @format int32
     */
    payment_count: number;
    /**
     * The date the funds transfer was initiated.
     * @format date
     */
    transfer_date: string;
    /**
     * Timestamp when this funding event was created.
     * @format date-time
     */
    created_at: string;
    /**
     * Timestamp when this funding event was last updated.
     * @format date-time
     */
    updated_at: string;
    /**
     * Complete ordered history of all status changes for this funding event.
     */
    status_history: Array<Data.StatusHistory>;
    /**
     * Current status of this funding event.
     */
    status?: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
    /**
     * Reason, source, and message for the most recent status change.
     */
    status_details?: Data.StatusDetails;
  }

  export namespace Data {
    export interface StatusHistory {
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * A human-readable description of the status.
       */
      message: string;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
      status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';
      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    export interface StatusDetails {
      /**
       * A human-readable description of the current status.
       */
      message: string;
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
        | 'validating'
        | 'auto_hold';
      source: PaykeySourceAPI.PaymentStatusSource;
      /**
       * The status code if applicable.
       */
      code: string | null;
      /**
       * The time the status change occurred.
       * @format date-time
       */
      changed_at: string;
    }
  }
}

export type ParsedWebhookEvent =
  | AccountCreatedV1WebhookEvent
  | AccountEventV1WebhookEvent
  | RepresentativeEventV1WebhookEvent
  | RepresentativeCreatedV1WebhookEvent
  | LinkedBankAccountEventV1WebhookEvent
  | LinkedBankAccountCreatedV1WebhookEvent
  | CapabilityRequestEventV1WebhookEvent
  | CapabilityRequestCreatedV1WebhookEvent
  | CustomerEventV1WebhookEvent
  | CustomerCreatedV1WebhookEvent
  | PaykeyEventV1WebhookEvent
  | PaykeyCreatedV1WebhookEvent
  | ChargeCreatedV1WebhookEvent
  | ChargeEventV1WebhookEvent
  | PayoutCreatedV1WebhookEvent
  | PayoutEventV1WebhookEvent
  | PlatformEventV1WebhookEvent
  | PlatformCreatedV1WebhookEvent
  | UserEventV1WebhookEvent
  | UserCreatedV1WebhookEvent
  | FundingEventCreatedV1WebhookEvent
  | FundingEventEventV1WebhookEvent;

export declare namespace Webhooks {
  export {
    type AccountCreatedV1WebhookEvent as AccountCreatedV1WebhookEvent,
    type AccountEventV1WebhookEvent as AccountEventV1WebhookEvent,
    type RepresentativeEventV1WebhookEvent as RepresentativeEventV1WebhookEvent,
    type RepresentativeCreatedV1WebhookEvent as RepresentativeCreatedV1WebhookEvent,
    type LinkedBankAccountEventV1WebhookEvent as LinkedBankAccountEventV1WebhookEvent,
    type LinkedBankAccountCreatedV1WebhookEvent as LinkedBankAccountCreatedV1WebhookEvent,
    type CapabilityRequestEventV1WebhookEvent as CapabilityRequestEventV1WebhookEvent,
    type CapabilityRequestCreatedV1WebhookEvent as CapabilityRequestCreatedV1WebhookEvent,
    type CustomerEventV1WebhookEvent as CustomerEventV1WebhookEvent,
    type CustomerCreatedV1WebhookEvent as CustomerCreatedV1WebhookEvent,
    type PaykeyEventV1WebhookEvent as PaykeyEventV1WebhookEvent,
    type PaykeyCreatedV1WebhookEvent as PaykeyCreatedV1WebhookEvent,
    type ChargeCreatedV1WebhookEvent as ChargeCreatedV1WebhookEvent,
    type ChargeEventV1WebhookEvent as ChargeEventV1WebhookEvent,
    type PayoutCreatedV1WebhookEvent as PayoutCreatedV1WebhookEvent,
    type PayoutEventV1WebhookEvent as PayoutEventV1WebhookEvent,
    type PlatformEventV1WebhookEvent as PlatformEventV1WebhookEvent,
    type PlatformCreatedV1WebhookEvent as PlatformCreatedV1WebhookEvent,
    type UserEventV1WebhookEvent as UserEventV1WebhookEvent,
    type UserCreatedV1WebhookEvent as UserCreatedV1WebhookEvent,
    type FundingEventCreatedV1WebhookEvent as FundingEventCreatedV1WebhookEvent,
    type FundingEventEventV1WebhookEvent as FundingEventEventV1WebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}
