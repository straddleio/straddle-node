// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { PageNumberSchema, type PageNumberSchemaParams } from '../../pagination';

export class LinkedBankAccounts extends APIResource {
  /**
   * Creates a new linked bank account associated with a Straddle account. This
   * endpoint allows you to associate external bank accounts with a Straddle account
   * for various payment operations such as payment deposits, payout withdrawals, and
   * more.
   */
  create(
    params: LinkedBankAccountCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountV1> {
    const { 'correlation-id': correlationId, 'request-id': requestId, ...body } = params;
    return this._client.post('/v1/linked_bank_accounts', {
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
   * Updates an existing linked bank account's information. This can be used to
   * update account details during onboarding or to update metadata associated with
   * the linked account. The linked bank account must be in 'created' or 'onboarding'
   * status.
   */
  update(
    linkedBankAccountId: string,
    params: LinkedBankAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountV1> {
    const { 'correlation-id': correlationId, 'request-id': requestId, ...body } = params;
    return this._client.put(`/v1/linked_bank_accounts/${linkedBankAccountId}`, {
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
   * Returns a list of bank accounts associated with a specific Straddle account. The
   * linked bank accounts are returned sorted by creation date, with the most
   * recently created appearing first. This endpoint supports pagination to handle
   * accounts with multiple linked bank accounts.
   */
  list(
    params?: LinkedBankAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LinkedBankAccountPagedV1DataPageNumberSchema, LinkedBankAccountPagedV1.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<LinkedBankAccountPagedV1DataPageNumberSchema, LinkedBankAccountPagedV1.Data>;
  list(
    params: LinkedBankAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LinkedBankAccountPagedV1DataPageNumberSchema, LinkedBankAccountPagedV1.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId, ...query } = params;
    return this._client.getAPIList('/v1/linked_bank_accounts', LinkedBankAccountPagedV1DataPageNumberSchema, {
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
   * Retrieves the details of a linked bank account that has previously been created.
   * Supply the unique linked bank account `id`, and Straddle will return the
   * corresponding information. The response includes masked account details for
   * security purposes.
   */
  get(
    linkedBankAccountId: string,
    params?: LinkedBankAccountGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountV1>;
  get(linkedBankAccountId: string, options?: Core.RequestOptions): Core.APIPromise<LinkedBankAccountV1>;
  get(
    linkedBankAccountId: string,
    params: LinkedBankAccountGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountV1> {
    if (isRequestOptions(params)) {
      return this.get(linkedBankAccountId, {}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId } = params;
    return this._client.get(`/v1/linked_bank_accounts/${linkedBankAccountId}`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves the unmasked details of a linked bank account that has previously been
   * created. Supply the unique linked bank account `id`, and Straddle will return
   * the corresponding information, including sensitive details. This endpoint needs
   * to be enabled by Straddle for your account and should only be used when
   * absolutely necessary.
   */
  unmask(
    linkedBankAccountId: string,
    params?: LinkedBankAccountUnmaskParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountUnmaskV1>;
  unmask(
    linkedBankAccountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountUnmaskV1>;
  unmask(
    linkedBankAccountId: string,
    params: LinkedBankAccountUnmaskParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountUnmaskV1> {
    if (isRequestOptions(params)) {
      return this.unmask(linkedBankAccountId, {}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId } = params;
    return this._client.get(`/v1/linked_bank_accounts/${linkedBankAccountId}/unmask`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'correlation-id': correlationId } : undefined),
        ...(requestId != null ? { 'request-id': requestId } : undefined),
        ...options?.headers,
      },
    });
  }
}

export class LinkedBankAccountPagedV1DataPageNumberSchema extends PageNumberSchema<LinkedBankAccountPagedV1.Data> {}

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
    account_id: string;

    bank_account: Data.BankAccount;

    /**
     * Timestamp of when the bank account object was created.
     */
    created_at: string;

    /**
     * The current status of the linked bank account.
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

    status_detail: Data.StatusDetail;

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
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

    /**
     * Additional details about the current status of the linked bank account.
     */
    status_detail: Data.StatusDetail;

    /**
     * Timestamp of when the linked bank account was last updated.
     */
    updated_at: string;

    metadata?: Record<string, string | null> | null;
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
    account_id: string;

    bank_account: Data.BankAccount;

    /**
     * Timestamp of when the bank account object was created.
     */
    created_at: string;

    /**
     * The current status of the linked bank account.
     */
    status: 'created' | 'onboarding' | 'active' | 'rejected' | 'inactive';

    status_detail: Data.StatusDetail;

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
  account_id: string;

  /**
   * Body param:
   */
  bank_account: LinkedBankAccountCreateParams.BankAccount;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the linked bank account in a structured format.
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

LinkedBankAccounts.LinkedBankAccountPagedV1DataPageNumberSchema =
  LinkedBankAccountPagedV1DataPageNumberSchema;

export declare namespace LinkedBankAccounts {
  export {
    type LinkedBankAccountPagedV1 as LinkedBankAccountPagedV1,
    type LinkedBankAccountUnmaskV1 as LinkedBankAccountUnmaskV1,
    type LinkedBankAccountV1 as LinkedBankAccountV1,
    LinkedBankAccountPagedV1DataPageNumberSchema as LinkedBankAccountPagedV1DataPageNumberSchema,
    type LinkedBankAccountCreateParams as LinkedBankAccountCreateParams,
    type LinkedBankAccountUpdateParams as LinkedBankAccountUpdateParams,
    type LinkedBankAccountListParams as LinkedBankAccountListParams,
    type LinkedBankAccountGetParams as LinkedBankAccountGetParams,
    type LinkedBankAccountUnmaskParams as LinkedBankAccountUnmaskParams,
  };
}
