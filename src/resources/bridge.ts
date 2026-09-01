// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import type * as AccountsAPI from './accounts';

export class Bridge extends APIResource {
  /**
   * Creates a paykey from a routing number, account number, and account type.
   *
   * @param {BridgeCreateBankAccountPaykeyParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PaykeyResponse>} Created
   *
   * @example
   * ```ts
   * const paykey = await client.bridge.createBankAccountPaykey({
   *   customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   routing_number: 'xxxxxxxxx',
   *   account_number: '',
   *   account_type: 'checking',
   * });
   * ```
   */
  createBankAccountPaykey(
    params: BridgeCreateBankAccountPaykeyParams,
    options?: RequestOptions,
  ): APIPromise<PaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/bridge/bank_account', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates a paykey from a Plaid processor token.
   *
   * @param {BridgeCreatePlaidPaykeyParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PaykeyResponse>} Created
   *
   * @example
   * ```ts
   * const paykey = await client.bridge.createPlaidPaykey({
   *   customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   plaid_token: '',
   * });
   * ```
   */
  createPlaidPaykey(
    params: BridgeCreatePlaidPaykeyParams,
    options?: RequestOptions,
  ): APIPromise<PaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/bridge/plaid', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates a session token for the Bridge widget.
   *
   * @param {BridgeCreateTokenParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<BridgeTokenResponse>} Created
   *
   * @example
   * ```ts
   * const bridgeToken = await client.bridge.createToken({
   *   customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * });
   * ```
   */
  createToken(params: BridgeCreateTokenParams, options?: RequestOptions): APIPromise<BridgeTokenResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/bridge/initialize', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates a paykey from a Quiltt processor token.
   *
   * @param {BridgeCreateQuilttPaykeyParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<RevealedPaykeyResponse>} Created
   *
   * @example
   * ```ts
   * const revealedPaykey = await client.bridge.createQuilttPaykey({
   *   customer_id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   quiltt_token: '',
   * });
   * ```
   */
  createQuilttPaykey(
    params: BridgeCreateQuilttPaykeyParams,
    options?: RequestOptions,
  ): APIPromise<RevealedPaykeyResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/bridge/quiltt', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }
}

export interface PaykeyResponse {
  /**
   * Metadata for an API request.
   */
  meta: AccountsAPI.ResponseMetadata;
  /**
   * Shape of the response envelope.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of JSON objects.
   * - `error` means `error` contains the error details.
   * - `none` means the response contains no data.
   */
  response_type: ResponseType;
  data: Paykey;
}

export interface BridgeTokenResponse {
  /**
   * Metadata for an API request.
   */
  meta: AccountsAPI.ResponseMetadata;
  /**
   * Shape of the response envelope.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of JSON objects.
   * - `error` means `error` contains the error details.
   * - `none` means the response contains no data.
   */
  response_type: ResponseType;
  data: BridgeToken;
}

export interface RevealedPaykeyResponse {
  /**
   * Metadata for an API request.
   */
  meta: AccountsAPI.ResponseMetadata;
  /**
   * Shape of the response envelope.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of JSON objects.
   * - `error` means `error` contains the error details.
   * - `none` means the response contains no data.
   */
  response_type: ResponseType;
  data: RevealedPaykey;
}

/**
 * Shape of the response envelope.
 * - `object` means `data` contains one JSON object.
 * - `array` means `data` contains an array of JSON objects.
 * - `error` means `error` contains the error details.
 * - `none` means the response contains no data.
 */
export type ResponseType = 'object' | 'array' | 'error' | 'none';

export interface Paykey {
  /**
   * Unique identifier for the paykey.
   * @format uuid
   */
  id: string;
  /**
   * Human-readable label for the paykey.
   */
  label: string;
  source: PaykeySource;
  status: PaykeyStatus;
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
   * Masked paykey value.
   */
  paykey: string;
  config: PaykeyConfiguration;
  /**
   * Unique identifier for the customer associated with the paykey.
   * @format uuid
   */
  customer_id?: string | null;
  /**
   * Name of the financial institution.
   */
  institution_name?: string | null;
  status_details?: PaymentStatusDetails;
  /**
   * Expiration date and time of the paykey, if applicable.
   * @format date-time
   */
  expires_at?: string | null;
  bank_data?: PaykeyBankDetails;
  /**
   * Up to 20 user-defined key-value pairs associated with the paykey.
   */
  metadata?: Record<string, string> | null;
  balance?: PaykeyBalanceDetails;
  /**
   * Unique identifier for the paykey in your system.
   */
  external_id?: string | null;
  /**
   * Whether the paykey is eligible for client-initiated unblocking. `true` only when the paykey is blocked by an `R29` return and has not been unblocked before. `false` for other blocked paykeys. `null` when the paykey is not blocked.
   */
  unblock_eligible?: boolean | null;
}

export interface BridgeToken {
  /**
   * JSON Web Token (JWT) for the Bridge widget.
   */
  bridge_token: string;
}

export interface RevealedPaykey {
  /**
   * Unique identifier for the paykey.
   * @format uuid
   */
  id: string;
  /**
   * Full paykey value for creating payments. Store this value securely.
   */
  paykey: string;
  /**
   * Display label combining the bank name and masked account number.
   */
  label: string;
  source: PaykeySource;
  status: PaykeyStatus;
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
  config: PaykeyConfiguration;
  /**
   * Unique identifier for the customer associated with the paykey.
   * @format uuid
   */
  customer_id?: string | null;
  /**
   * Name of the financial institution.
   */
  institution_name?: string | null;
  status_details?: PaymentStatusDetails;
  /**
   * Expiration date and time of the paykey, if applicable.
   * @format date-time
   */
  expires_at?: string | null;
  bank_data?: PaykeyBankDetails;
  /**
   * Up to 20 user-defined key-value pairs associated with the paykey.
   */
  metadata?: Record<string, string> | null;
  balance?: PaykeyBalanceDetails;
  /**
   * Unique identifier for the paykey in your system.
   */
  external_id?: string | null;
}

export type PaykeySource = 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt';

export type PaykeyStatus = 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked';

export interface PaymentStatusDetails {
  /**
   * Human-readable status description.
   */
  message: string;
  /**
   * Machine-readable reason for the status.
   */
  reason: PaymentStatusReason;
  /**
   * Source of the status change.
   */
  source: PaymentStatusSource;
  /**
   * Timestamp when the status changed.
   * @format date-time
   */
  changed_at: string;
  /**
   * Status code, when available.
   */
  code?: string | null;
}

export interface PaykeyBankDetails {
  /**
   * Bank routing number.
   * @minLength 9
   * @maxLength 9
   */
  routing_number: string;
  /**
   * Masked bank account number.
   */
  account_number: string;
  account_type: AccountType;
}

export interface PaykeyConfiguration {
  sandbox_outcome?: SimulatedPaykeyOutcome;
  processing_method?: PaykeyProcessingMode;
}

export interface PaykeyBalanceDetails {
  status: PaykeyBalanceRefreshStatus;
  /**
   * Most recently retrieved account balance in cents.
   * @format int32
   */
  account_balance?: number | null;
  /**
   * Timestamp of the most recent account balance update.
   * @format date-time
   */
  updated_at?: string | null;
}

export type PaymentStatusReason =
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
  | 'validating'
  | 'auto_hold';

export type PaymentStatusSource =
  | 'watchtower'
  | 'bank_decline'
  | 'customer_dispute'
  | 'user_action'
  | 'system';

export type AccountType = 'checking' | 'savings';

export type SimulatedPaykeyOutcome = 'standard' | 'active' | 'rejected' | 'review';

export type PaykeyProcessingMode = 'inline' | 'background' | 'skip';

export type PaykeyBalanceRefreshStatus = 'pending' | 'completed' | 'failed';

export interface BridgeCreateBankAccountPaykeyParams {
  /**
   * Header param: For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Header param: Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
  /**
   * Body param: Unique identifier for the customer associated with the paykey.
   * @format uuid
   */
  customer_id: string;
  /**
   * Body param: Bank routing number.
   * @minLength 9
   * @maxLength 9
   */
  routing_number: string;
  /**
   * Body param: Bank account number.
   */
  account_number: string;
  /**
   * Body param
   */
  account_type: AccountType;
  /**
   * Body param: Up to 20 user-defined key-value pairs associated with the paykey.
   */
  metadata?: Record<string, string> | null;
  /**
   * Body param
   */
  config?: PaykeyConfiguration;
  /**
   * Body param: Unique identifier for the paykey in your system.
   */
  external_id?: string | null;
}

export interface BridgeCreatePlaidPaykeyParams {
  /**
   * Header param: For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Header param: Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
  /**
   * Body param: Unique identifier for the customer associated with the paykey.
   * @format uuid
   */
  customer_id: string;
  /**
   * Body param: Plaid processor token generated by your application for use with the Straddle API.
   */
  plaid_token: string;
  /**
   * Body param: Up to 20 user-defined key-value pairs associated with the paykey.
   */
  metadata?: Record<string, string> | null;
  /**
   * Body param
   */
  config?: PaykeyConfiguration;
  /**
   * Body param: Unique identifier for the paykey in your system.
   */
  external_id?: string | null;
}

export interface BridgeCreateTokenParams {
  /**
   * Header param: For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Header param: Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
  /**
   * Body param: Unique identifier for the customer associated with the Bridge session.
   * @format uuid
   */
  customer_id: string;
  /**
   * Body param
   */
  config?: PaykeyConfiguration;
  /**
   * Body param: Unique identifier for the paykey in your system.
   */
  external_id?: string | null;
}

export interface BridgeCreateQuilttPaykeyParams {
  /**
   * Header param: For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Header param: Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
  /**
   * Body param: Unique identifier for the customer associated with the paykey.
   * @format uuid
   */
  customer_id: string;
  /**
   * Body param: Quiltt processor token generated by your application for use with the Straddle API.
   */
  quiltt_token: string;
  /**
   * Body param: Up to 20 user-defined key-value pairs associated with the paykey.
   */
  metadata?: Record<string, string> | null;
  /**
   * Body param
   */
  config?: PaykeyConfiguration;
  /**
   * Body param: Unique identifier for the paykey in your system.
   */
  external_id?: string | null;
}
export declare namespace Bridge {
  export {
    type PaykeyResponse as PaykeyResponse,
    type BridgeTokenResponse as BridgeTokenResponse,
    type RevealedPaykeyResponse as RevealedPaykeyResponse,
    type ResponseType as ResponseType,
    type Paykey as Paykey,
    type BridgeToken as BridgeToken,
    type RevealedPaykey as RevealedPaykey,
    type PaykeySource as PaykeySource,
    type PaykeyStatus as PaykeyStatus,
    type PaymentStatusDetails as PaymentStatusDetails,
    type PaykeyBankDetails as PaykeyBankDetails,
    type PaykeyConfiguration as PaykeyConfiguration,
    type PaykeyBalanceDetails as PaykeyBalanceDetails,
    type PaymentStatusReason as PaymentStatusReason,
    type PaymentStatusSource as PaymentStatusSource,
    type AccountType as AccountType,
    type SimulatedPaykeyOutcome as SimulatedPaykeyOutcome,
    type PaykeyProcessingMode as PaykeyProcessingMode,
    type PaykeyBalanceRefreshStatus as PaykeyBalanceRefreshStatus,
    type BridgeCreateBankAccountPaykeyParams as BridgeCreateBankAccountPaykeyParams,
    type BridgeCreatePlaidPaykeyParams as BridgeCreatePlaidPaykeyParams,
    type BridgeCreateTokenParams as BridgeCreateTokenParams,
    type BridgeCreateQuilttPaykeyParams as BridgeCreateQuilttPaykeyParams,
  };
}
