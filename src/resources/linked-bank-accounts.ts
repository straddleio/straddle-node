// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';
import type * as AccountsAPI from './accounts';

export class LinkedBankAccounts extends APIResource {
  /**
   * Creates a linked bank account for an account or platform, assigns its payment purposes, and returns the linked bank account.
   *
   * @param {LinkedBankAccountCreateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LinkedBankAccountResponse>} Created
   *
   * @example
   * ```ts
   * const linkedBankAccount = await client.linkedBankAccounts.create({
   *   bank_account: {
   *     account_holder: '',
   *     routing_number: 'xxxxxxxxx',
   *     account_number: '',
   *   },
   * });
   * ```
   */
  create(
    params: LinkedBankAccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<LinkedBankAccountResponse> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.post('/v1/linked_bank_accounts', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a paginated list of linked bank accounts. Filter the list by account, scope, purpose, or status.
   *
   * @param {LinkedBankAccountListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LinkedBankAccountList>} OK
   *
   * @example
   * ```ts
   * const linkedBankAccountList = await client.linkedBankAccounts.list({
   *   page_number: 1,
   *   page_size: 100,
   *   sort_by: 'id',
   *   sort_order: 'asc',
   * });
   * ```
   */
  list(
    params: LinkedBankAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkedBankAccountList> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID, ...query } = params ?? {};
    return this._client.get('/v1/linked_bank_accounts', {
      query,
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

  /**
   * Updates bank account details and metadata, then returns the linked bank account. The linked bank account must have status `created`, or status `onboarding` with `status_detail.reason` set to `stuck`.
   *
   * @param {string} linkedBankAccountID - The ID of the linked bank account.
   * @param {LinkedBankAccountUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LinkedBankAccountResponse>} OK
   *
   * @example
   * ```ts
   * const linkedBankAccount = await client.linkedBankAccounts.update('7c9e6679-7425-40de-944b-e07fc1f90ae7', {
   *   bank_account: {
   *     account_holder: '',
   *     routing_number: 'xxxxxxxxx',
   *     account_number: '',
   *   },
   * });
   * ```
   */
  update(
    linkedBankAccountID: string,
    params: LinkedBankAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LinkedBankAccountResponse> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.put(__scalarPath`/v1/linked_bank_accounts/${linkedBankAccountID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns the linked bank account with the specified ID. The response masks the account number.
   *
   * @param {string} linkedBankAccountID - The ID of the linked bank account.
   * @param {LinkedBankAccountRetrieveParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LinkedBankAccountResponse>} OK
   *
   * @example
   * ```ts
   * const linkedBankAccount = await client.linkedBankAccounts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  retrieve(
    linkedBankAccountID: string,
    params: LinkedBankAccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkedBankAccountResponse> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID } = params ?? {};
    return this._client.get(__scalarPath`/v1/linked_bank_accounts/${linkedBankAccountID}`, {
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

  /**
   * Returns the linked bank account with the specified ID without masking its account number. This endpoint is available only when Straddle enables data unmasking for the account.
   *
   * @param {string} linkedBankAccountID - The ID of the linked bank account.
   * @param {LinkedBankAccountListUnmaskedParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<UnmaskedLinkedBankAccountResponse>} OK
   *
   * @example
   * ```ts
   * const unmaskedLinkedBankAccount = await client.linkedBankAccounts.listUnmasked(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   * );
   * ```
   */
  listUnmasked(
    linkedBankAccountID: string,
    params: LinkedBankAccountListUnmaskedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnmaskedLinkedBankAccountResponse> {
    const { 'Request-Id': requestID, 'Correlation-Id': correlationID } = params ?? {};
    return this._client.get(__scalarPath`/v1/linked_bank_accounts/${linkedBankAccountID}/unmask`, {
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

  /**
   * Cancels a linked bank account and returns it with status `canceled`. The linked bank account must have status `created`.
   *
   * @param {string} linkedBankAccountID - The ID of the linked bank account.
   * @param {LinkedBankAccountCancelParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<LinkedBankAccountResponse>} OK
   *
   * @example
   * ```ts
   * const linkedBankAccount = await client.linkedBankAccounts.cancel('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  cancel(
    linkedBankAccountID: string,
    params: LinkedBankAccountCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkedBankAccountResponse> {
    const {
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
    } = params ?? {};
    return this._client.patch(__scalarPath`/v1/linked_bank_accounts/${linkedBankAccountID}/cancel`, {
      ...options,
      headers: buildHeaders([
        {
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }
}

export interface LinkedBankAccountResponse {
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
  data: LinkedBankAccount;
}

export interface LinkedBankAccountList {
  /**
   * Metadata for an API request and a page of results.
   */
  meta: AccountsAPI.PageMetadata;
  /**
   * Indicates how the response content is structured.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of objects.
   * - `error` means `error` contains error details.
   * - `none` means the response has no data.
   */
  response_type: 'object' | 'array' | 'error' | 'none';
  /**
   * Linked bank accounts returned for this page.
   */
  data: Array<LinkedBankAccount>;
}

export interface UnmaskedLinkedBankAccountResponse {
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
  data: UnmaskedLinkedBankAccount;
}

export interface LinkedBankAccount {
  /**
   * Straddle's unique ID for the linked bank account.
   * @format uuid
   */
  id: string;
  /**
   * ID of the related account, if this is an account-level linked bank account.
   * @format uuid
   */
  account_id: string | null;
  /**
   * Status of the linked bank account.
   */
  status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled';
  status_detail: LinkedBankAccountStatusDetail;
  bank_account: MaskedLinkedBankAccountDetails;
  /**
   * Date and time when Straddle created the linked bank account.
   * @format date-time
   */
  created_at: string;
  /**
   * Date and time of the most recent linked bank account update.
   * @format date-time
   */
  updated_at: string;
  /**
   * Payment purposes assigned to the linked bank account.
   */
  purposes: Array<'charges' | 'payouts' | 'billing'>;
  /**
   * Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string | null> | null;
  /**
   * ID of the related platform, if this is a platform-level linked bank account.
   * @format uuid
   */
  platform_id?: string | null;
  /**
   * Your description for the linked bank account.
   */
  description?: string | null;
}

export interface UnmaskedLinkedBankAccount {
  /**
   * Straddle's unique ID for the linked bank account.
   * @format uuid
   */
  id: string;
  /**
   * ID of the Straddle account associated with the linked bank account.
   * @format uuid
   */
  account_id: string;
  /**
   * Status of the linked bank account.
   */
  status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled';
  /**
   * Details about the linked bank account's status.
   */
  status_detail: LinkedBankAccountStatusDetail;
  /**
   * Unmasked bank account details.
   */
  bank_account: UnmaskedLinkedBankAccountDetails;
  /**
   * Date and time when Straddle created the linked bank account.
   * @format date-time
   */
  created_at: string;
  /**
   * Date and time of the most recent linked bank account update.
   * @format date-time
   */
  updated_at: string;
  metadata?: Record<string, string | null> | null;
}

export interface LinkedBankAccountStatusDetail {
  /**
   * Machine-readable reason for the linked bank account's status.
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
   * System that produced the linked bank account status detail.
   */
  source: 'watchtower';
  /**
   * Machine-readable status code from the source.
   */
  code: string;
  /**
   * Human-readable description of the linked bank account's status.
   */
  message: string;
}

export interface MaskedLinkedBankAccountDetails {
  /**
   * Name of the financial institution.
   */
  institution_name: string;
  /**
   * Name of the account holder as it appears on the bank account.
   */
  account_holder: string;
  /**
   * Nine-digit ABA routing number for the bank account.
   */
  routing_number: string;
  /**
   * Last four digits of the bank account number.
   */
  account_mask: string;
}

export interface UnmaskedLinkedBankAccountDetails {
  /**
   * Name of the financial institution.
   */
  institution_name: string;
  /**
   * Name of the account holder as it appears on the bank account.
   */
  account_holder: string;
  /**
   * Nine-digit ABA routing number for the bank account.
   */
  routing_number: string;
  /**
   * Bank account number.
   */
  account_number: string;
}

export interface LinkedBankAccountCreateParams {
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
   * Body param: ID of the account that will own the linked bank account. Omit this field to assign ownership to the platform in the authenticated request context.
   * @format uuid
   */
  account_id?: string | null;
  /**
   * Body param
   */
  bank_account: LinkedBankAccountCreateParams.BankAccount;
  /**
   * Body param: Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string | null> | null;
  /**
   * Body param: ID of the platform to associate with the linked bank account.
   * @format uuid
   */
  platform_id?: string | null;
  /**
   * Body param: Payment purposes for the linked bank account. Defaults to `charges`, `payouts`, and `billing`.
   */
  purposes?: Array<'charges' | 'payouts' | 'billing'> | null;
  /**
   * Body param: Your description for the linked bank account.
   */
  description?: string | null;
}

export namespace LinkedBankAccountCreateParams {
  export interface BankAccount {
    /**
     * Account holder name as it appears on the bank account. This is usually the business's legal name.
     */
    account_holder: string;
    /**
     * Nine-digit ABA routing number.
     * @minLength 9
     * @maxLength 9
     */
    routing_number: string;
    /**
     * The bank account number.
     */
    account_number: string;
  }
}

export interface LinkedBankAccountListParams {
  /**
   * Query param: Account ID used to filter the results.
   * @format uuid
   */
  account_id?: string;
  /**
   * Query param: Page number. Defaults to `1`.
   * @format int32
   */
  page_number?: number;
  /**
   * Query param: Number of results per page. Defaults to `100`. Maximum `1000`.
   * @format int32
   */
  page_size?: number;
  /**
   * Query param: Field used to sort results. Defaults to `id`.
   */
  sort_by?: string;
  /**
   * Query param: Sort direction. Defaults to `asc`.
   */
  sort_order?: 'asc' | 'desc';
  /**
   * Query param: Scope of linked bank accounts to return.
   */
  level?: 'account' | 'platform';
  /**
   * Query param: Linked bank account purpose. Accepted values are `charges`, `payouts`, and `billing`.
   */
  purpose?: 'charges' | 'payouts' | 'billing';
  /**
   * Query param: Linked bank account status. Accepted values are `created`, `onboarding`, `active`, `rejected`, `inactive`, and `canceled`.
   */
  status?: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled';
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface LinkedBankAccountUpdateParams {
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
   * Body param
   */
  bank_account: LinkedBankAccountUpdateParams.BankAccount;
  /**
   * Body param: Up to 20 user-defined key-value pairs.
   */
  metadata?: Record<string, string | null> | null;
}

export namespace LinkedBankAccountUpdateParams {
  export interface BankAccount {
    /**
     * Account holder name as it appears on the bank account. This is usually the business's legal name.
     */
    account_holder: string;
    /**
     * Nine-digit ABA routing number.
     * @minLength 9
     * @maxLength 9
     */
    routing_number: string;
    /**
     * The bank account number.
     */
    account_number: string;
  }
}

export interface LinkedBankAccountRetrieveParams {
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface LinkedBankAccountListUnmaskedParams {
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface LinkedBankAccountCancelParams {
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
}
export declare namespace LinkedBankAccounts {
  export {
    type LinkedBankAccountResponse as LinkedBankAccountResponse,
    type LinkedBankAccountList as LinkedBankAccountList,
    type UnmaskedLinkedBankAccountResponse as UnmaskedLinkedBankAccountResponse,
    type LinkedBankAccount as LinkedBankAccount,
    type UnmaskedLinkedBankAccount as UnmaskedLinkedBankAccount,
    type LinkedBankAccountStatusDetail as LinkedBankAccountStatusDetail,
    type MaskedLinkedBankAccountDetails as MaskedLinkedBankAccountDetails,
    type UnmaskedLinkedBankAccountDetails as UnmaskedLinkedBankAccountDetails,
    type LinkedBankAccountCreateParams as LinkedBankAccountCreateParams,
    type LinkedBankAccountListParams as LinkedBankAccountListParams,
    type LinkedBankAccountUpdateParams as LinkedBankAccountUpdateParams,
    type LinkedBankAccountRetrieveParams as LinkedBankAccountRetrieveParams,
    type LinkedBankAccountListUnmaskedParams as LinkedBankAccountListUnmaskedParams,
    type LinkedBankAccountCancelParams as LinkedBankAccountCancelParams,
  };
}
