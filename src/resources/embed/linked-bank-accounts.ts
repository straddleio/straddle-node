// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { PageNumberSchema, type PageNumberSchemaParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LinkedBankAccounts extends APIResource {
  /**
   * Creates a new linked bank account associated with a Straddle account. This
   * endpoint allows you to associate external bank accounts with a Straddle account
   * for various payment operations such as payment deposits, payout withdrawals, and
   * more.
   *
   * @example
   * ```ts
   * const linkedBankAccountV1 =
   *   await client.embed.linkedBankAccounts.create({
   *     account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     bank_account: {
   *       account_holder: 'account_holder',
   *       account_number: 'account_number',
   *       routing_number: 'xxxxxxxxx',
   *     },
   *   });
   * ```
   */
  create(params: LinkedBankAccountCreateParams, options?: RequestOptions): APIPromise<LinkedBankAccountV1> {
    const {
      'correlation-id': correlationID,
      'idempotency-key': idempotencyKey,
      'request-id': requestID,
      ...body
    } = params;
    return this._client.post('/v1/linked_bank_accounts', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
          ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined),
          ...(requestID != null ? { 'request-id': requestID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates an existing linked bank account's information. This can be used to
   * update account details during onboarding or to update metadata associated with
   * the linked account. The linked bank account must be in 'created' or 'onboarding'
   * status.
   *
   * @example
   * ```ts
   * const linkedBankAccountV1 =
   *   await client.embed.linkedBankAccounts.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       bank_account: {
   *         account_holder: 'account_holder',
   *         account_number: 'account_number',
   *         routing_number: 'xxxxxxxxx',
   *       },
   *     },
   *   );
   * ```
   */
  update(
    linkedBankAccountID: string,
    params: LinkedBankAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LinkedBankAccountV1> {
    const {
      'correlation-id': correlationID,
      'idempotency-key': idempotencyKey,
      'request-id': requestID,
      ...body
    } = params;
    return this._client.put(path`/v1/linked_bank_accounts/${linkedBankAccountID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
          ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined),
          ...(requestID != null ? { 'request-id': requestID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns a list of bank accounts associated with a specific Straddle account. The
   * linked bank accounts are returned sorted by creation date, with the most
   * recently created appearing first. This endpoint supports pagination to handle
   * accounts with multiple linked bank accounts.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const linkedBankAccount of client.embed.linkedBankAccounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: LinkedBankAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LinkedBankAccountPagedV1DataPageNumberSchema, LinkedBankAccountPagedV1.Data> {
    const { 'correlation-id': correlationID, 'request-id': requestID, ...query } = params ?? {};
    return this._client.getAPIList(
      '/v1/linked_bank_accounts',
      PageNumberSchema<LinkedBankAccountPagedV1.Data>,
      {
        query,
        ...options,
        headers: buildHeaders([
          {
            ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
            ...(requestID != null ? { 'request-id': requestID } : undefined),
          },
          options?.headers,
        ]),
      },
    );
  }

  /**
   * Cancels an existing linked bank account. This can be used to cancel a linked
   * bank account before it has been reviewed. The linked bank account must be in
   * 'created' status.
   *
   * @example
   * ```ts
   * const linkedBankAccountV1 =
   *   await client.embed.linkedBankAccounts.cancel(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  cancel(
    linkedBankAccountID: string,
    params: LinkedBankAccountCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkedBankAccountV1> {
    const {
      'correlation-id': correlationID,
      'idempotency-key': idempotencyKey,
      'request-id': requestID,
    } = params ?? {};
    return this._client.patch(path`/v1/linked_bank_accounts/${linkedBankAccountID}/cancel`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
          ...(idempotencyKey != null ? { 'idempotency-key': idempotencyKey } : undefined),
          ...(requestID != null ? { 'request-id': requestID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the details of a linked bank account that has previously been created.
   * Supply the unique linked bank account `id`, and Straddle will return the
   * corresponding information. The response includes masked account details for
   * security purposes.
   *
   * @example
   * ```ts
   * const linkedBankAccountV1 =
   *   await client.embed.linkedBankAccounts.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  get(
    linkedBankAccountID: string,
    params: LinkedBankAccountGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkedBankAccountV1> {
    const { 'correlation-id': correlationID, 'request-id': requestID } = params ?? {};
    return this._client.get(path`/v1/linked_bank_accounts/${linkedBankAccountID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
          ...(requestID != null ? { 'request-id': requestID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the unmasked details of a linked bank account that has previously been
   * created. Supply the unique linked bank account `id`, and Straddle will return
   * the corresponding information, including sensitive details. This endpoint needs
   * to be enabled by Straddle for your account and should only be used when
   * absolutely necessary.
   *
   * @example
   * ```ts
   * const linkedBankAccountUnmaskV1 =
   *   await client.embed.linkedBankAccounts.unmask(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  unmask(
    linkedBankAccountID: string,
    params: LinkedBankAccountUnmaskParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkedBankAccountUnmaskV1> {
    const { 'correlation-id': correlationID, 'request-id': requestID } = params ?? {};
    return this._client.get(path`/v1/linked_bank_accounts/${linkedBankAccountID}/unmask`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'correlation-id': correlationID } : undefined),
          ...(requestID != null ? { 'request-id': requestID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type LinkedBankAccountPagedV1DataPageNumberSchema = PageNumberSchema<LinkedBankAccountPagedV1.Data>;

export interface LinkedBankAccountPagedV1 {
  data: Array<LinkedBankAccountPagedV1.Data>;

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

export namespace LinkedBankAccountPagedV1 {
  export interface Data {
    /**
     * Unique identifier for the linked bank account.
     */
    id: string;

    /**
     * The unique identifier of the Straddle account related to this bank account.
     */
    account_id: string | null;

    bank_account: Data.BankAccount;

    /**
     * Timestamp of when the bank account object was created.
     */
    created_at: string;

    /**
     * The purposes for the linked bank account.
     */
    purposes: Array<'charges' | 'payouts' | 'billing'>;

    /**
     * The current status of the linked bank account.
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled';

    status_detail: Data.StatusDetail;

    /**
     * Timestamp of the most recent update to the linked bank account.
     */
    updated_at: string;

    /**
     * Optional description for the bank account.
     */
    description?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the linked bank account in a structured format.
     */
    metadata?: { [key: string]: string | null } | null;

    /**
     * The unique identifier of the Straddle Platform relatd to this bank account.
     */
    platform_id?: string | null;
  }

  export namespace Data {
    export interface BankAccount {
      account_holder: string;

      account_mask: string;

      institution_name: string;

      routing_number: string;
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
}

export interface LinkedBankAccountUnmaskV1 {
  data: LinkedBankAccountUnmaskV1.Data;

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

export namespace LinkedBankAccountUnmaskV1 {
  export interface Data {
    /**
     * Unique identifier for the linked bank account.
     */
    id: string;

    /**
     * Unique identifier for the Straddle account related to this bank account.
     */
    account_id: string;

    /**
     * The bank account details associated with the linked bank account.
     */
    bank_account: Data.BankAccount;

    /**
     * Timestamp of when the linked bank account was created.
     */
    created_at: string;

    /**
     * The current status of the linked bank account.
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled';

    /**
     * Additional details about the current status of the linked bank account.
     */
    status_detail: Data.StatusDetail;

    /**
     * Timestamp of when the linked bank account was last updated.
     */
    updated_at: string;

    metadata?: { [key: string]: string | null } | null;
  }

  export namespace Data {
    /**
     * The bank account details associated with the linked bank account.
     */
    export interface BankAccount {
      account_holder: string;

      account_number: string;

      institution_name: string;

      routing_number: string;
    }

    /**
     * Additional details about the current status of the linked bank account.
     */
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
}

export interface LinkedBankAccountV1 {
  data: LinkedBankAccountV1.Data;

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

export namespace LinkedBankAccountV1 {
  export interface Data {
    /**
     * Unique identifier for the linked bank account.
     */
    id: string;

    /**
     * The unique identifier of the Straddle account related to this bank account.
     */
    account_id: string | null;

    bank_account: Data.BankAccount;

    /**
     * Timestamp of when the bank account object was created.
     */
    created_at: string;

    /**
     * The purposes for the linked bank account.
     */
    purposes: Array<'charges' | 'payouts' | 'billing'>;

    /**
     * The current status of the linked bank account.
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive' | 'canceled';

    status_detail: Data.StatusDetail;

    /**
     * Timestamp of the most recent update to the linked bank account.
     */
    updated_at: string;

    /**
     * Optional description for the bank account.
     */
    description?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the linked bank account in a structured format.
     */
    metadata?: { [key: string]: string | null } | null;

    /**
     * The unique identifier of the Straddle Platform relatd to this bank account.
     */
    platform_id?: string | null;
  }

  export namespace Data {
    export interface BankAccount {
      account_holder: string;

      account_mask: string;

      institution_name: string;

      routing_number: string;
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
}

export interface LinkedBankAccountCreateParams {
  /**
   * Body param: The unique identifier of the Straddle account to associate this bank
   * account with.
   */
  account_id: string | null;

  /**
   * Body param:
   */
  bank_account: LinkedBankAccountCreateParams.BankAccount;

  /**
   * Body param: Optional description for the bank account.
   */
  description?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the linked bank account in a structured format.
   */
  metadata?: { [key: string]: string | null } | null;

  /**
   * Body param: The unique identifier of the Straddle Platform to associate this
   * bank account with.
   */
  platform_id?: string | null;

  /**
   * Body param: The purposes for the linked bank account.
   */
  purposes?: Array<'charges' | 'payouts' | 'billing'> | null;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'correlation-id'?: string;

  /**
   * Header param: Optional client generated value to use for idempotent requests.
   */
  'idempotency-key'?: string;

  /**
   * Header param: Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export namespace LinkedBankAccountCreateParams {
  export interface BankAccount {
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
}

export interface LinkedBankAccountUpdateParams {
  /**
   * Body param:
   */
  bank_account: LinkedBankAccountUpdateParams.BankAccount;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the linked bank account in a structured format.
   */
  metadata?: { [key: string]: string | null } | null;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'correlation-id'?: string;

  /**
   * Header param: Optional client generated value to use for idempotent requests.
   */
  'idempotency-key'?: string;

  /**
   * Header param: Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export namespace LinkedBankAccountUpdateParams {
  export interface BankAccount {
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
}

export interface LinkedBankAccountListParams extends PageNumberSchemaParams {
  /**
   * Query param: The unique identifier of the related account.
   */
  account_id?: string;

  /**
   * Query param:
   */
  level?: 'account' | 'platform';

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

export interface LinkedBankAccountCancelParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'correlation-id'?: string;

  /**
   * Optional client generated value to use for idempotent requests.
   */
  'idempotency-key'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export interface LinkedBankAccountGetParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'correlation-id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export interface LinkedBankAccountUnmaskParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'correlation-id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
}

export declare namespace LinkedBankAccounts {
  export {
    type LinkedBankAccountPagedV1 as LinkedBankAccountPagedV1,
    type LinkedBankAccountUnmaskV1 as LinkedBankAccountUnmaskV1,
    type LinkedBankAccountV1 as LinkedBankAccountV1,
    type LinkedBankAccountPagedV1DataPageNumberSchema as LinkedBankAccountPagedV1DataPageNumberSchema,
    type LinkedBankAccountCreateParams as LinkedBankAccountCreateParams,
    type LinkedBankAccountUpdateParams as LinkedBankAccountUpdateParams,
    type LinkedBankAccountListParams as LinkedBankAccountListParams,
    type LinkedBankAccountCancelParams as LinkedBankAccountCancelParams,
    type LinkedBankAccountGetParams as LinkedBankAccountGetParams,
    type LinkedBankAccountUnmaskParams as LinkedBankAccountUnmaskParams,
  };
}
