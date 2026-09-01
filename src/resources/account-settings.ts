// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as AccountsAPI from './accounts';

export class AccountSettingResource extends APIResource {
  /**
   * Returns all effective settings for the account, including values inherited from its organization, platform, and system defaults.
   *
   * @param {string} accountID - The ID of the account.
   * @param {AccountSettingRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountSettingsResponse>} OK
   *
   * @example
   * ```ts
   * const accountSettings = await client.accountSettings.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    accountID: string,
    params: AccountSettingRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountSettingsResponse> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID } = params ?? {};
    return this._client.get(__scalarPath`/v1/account_settings/${accountID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }
}

export interface AccountSettingsResponse {
  /**
   * Metadata for an API request.
   */
  meta: AccountsAPI.ResponseMetadata;
  /**
   * Indicates how the response content is structured.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of objects.
   * - `error` means `error` contains error details.
   * - `none` means the response has no data.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
  data: AccountSettings;
}

export interface AccountSettings {
  charges: ChargeSettings;
  payouts: PayoutSettings;
  statement_settings: AccountStatementSettings;
  payment_types: AccountPaymentTypeSettings;
  customer_types: AccountCustomerTypeSettings;
  consent_types: AccountConsentSettings;
  configuration: AccountPolicyControls;
}

export interface ChargeSettings {
  /**
   * Maximum amount in cents for one charge.
   * @format int64
   */
  max_amount: number;
  /**
   * Monthly charge amount limit in cents.
   * @format int64
   */
  monthly_amount: number;
  /**
   * Daily charge amount limit in cents.
   * @format int64
   */
  daily_amount: number;
  /**
   * Maximum number of charges per calendar month.
   * @format int64
   */
  monthly_count: number;
  /**
   * Funding schedule applied to charges.
   */
  funding_time?: string | null;
  /**
   * ID of the linked bank account used for charge settlement.
   */
  linked_bank_account_id?: string | null;
}

export interface PayoutSettings {
  /**
   * Maximum amount in cents for one payout.
   * @format int64
   */
  max_amount: number;
  /**
   * Monthly payout amount limit in cents.
   * @format int64
   */
  monthly_amount: number;
  /**
   * Daily payout amount limit in cents.
   * @format int64
   */
  daily_amount: number;
  /**
   * Maximum number of payouts per calendar month.
   * @format int64
   */
  monthly_count: number;
  /**
   * Funding schedule applied to payouts.
   */
  funding_time?: string | null;
  /**
   * ID of the linked bank account used for payout settlement.
   */
  linked_bank_account_id?: string | null;
}

export interface AccountStatementSettings {
  /**
   * Company name used in statement records.
   */
  company_name?: string | null;
  /**
   * Company identifier used in ACH records.
   */
  company_id?: string | null;
  /**
   * Default descriptor for account payments.
   */
  default_descriptor?: string | null;
}

export interface AccountPaymentTypeSettings {
  /**
   * Status of charge support for the account.
   */
  charges: 'active' | 'inactive';
  /**
   * Status of payout support for the account.
   */
  payouts: 'active' | 'inactive';
}

export interface AccountCustomerTypeSettings {
  /**
   * Status of individual-customer support for the account.
   */
  individuals: 'active' | 'inactive';
  /**
   * Status of business-customer support for the account.
   */
  businesses: 'active' | 'inactive';
}

export interface AccountConsentSettings {
  /**
   * Status of internet authorization support for the account.
   */
  internet: 'active' | 'inactive';
  /**
   * Status of signed-agreement authorization support for the account.
   */
  signed_agreement: 'active' | 'inactive';
}

export interface AccountPolicyControls {
  /**
   * Whether the account can retrieve unmasked sensitive fields.
   */
  allow_data_unmask: boolean;
  /**
   * Whether multiple customers can share one email address.
   */
  allow_duplicate_email: boolean;
  /**
   * Whether customer identity verification can be skipped.
   */
  allow_customer_identity_skip: boolean;
  /**
   * Whether paykey verification can be skipped.
   */
  allow_paykey_verification_skip: boolean;
}

export interface AccountSettingRetrieveParams {
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}
export declare namespace AccountSettingResource {
  export {
    type AccountSettingsResponse as AccountSettingsResponse,
    type AccountSettings as AccountSettings,
    type ChargeSettings as ChargeSettings,
    type PayoutSettings as PayoutSettings,
    type AccountStatementSettings as AccountStatementSettings,
    type AccountPaymentTypeSettings as AccountPaymentTypeSettings,
    type AccountCustomerTypeSettings as AccountCustomerTypeSettings,
    type AccountConsentSettings as AccountConsentSettings,
    type AccountPolicyControls as AccountPolicyControls,
    type AccountSettingRetrieveParams as AccountSettingRetrieveParams,
  };
}
