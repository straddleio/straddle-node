// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

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
  ): Core.APIPromise<LinkedBankAccount> {
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
   * Retrieves the details of a linked bank account that has previously been created.
   * Supply the unique linked bank account `id`, and Straddle will return the
   * corresponding information. The response includes masked account details for
   * security purposes.
   */
  retrieve(
    linkedBankAccountId: string,
    params?: LinkedBankAccountRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccount>;
  retrieve(linkedBankAccountId: string, options?: Core.RequestOptions): Core.APIPromise<LinkedBankAccount>;
  retrieve(
    linkedBankAccountId: string,
    params: LinkedBankAccountRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccount> {
    if (isRequestOptions(params)) {
      return this.retrieve(linkedBankAccountId, {}, params);
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
   * Updates an existing linked bank account's information. This can be used to
   * update account details during onboarding or to update metadata associated with
   * the linked account. The linked bank account must be in 'created' or 'onboarding'
   * status.
   */
  update(
    linkedBankAccountId: string,
    params: LinkedBankAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccount> {
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
  ): Core.APIPromise<LinkedBankAccountPaged>;
  list(options?: Core.RequestOptions): Core.APIPromise<LinkedBankAccountPaged>;
  list(
    params: LinkedBankAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountPaged> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'correlation-id': correlationId, 'request-id': requestId, ...query } = params;
    return this._client.get('/v1/linked_bank_accounts', {
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
  ): Core.APIPromise<LinkedBankAccountUnmask>;
  unmask(
    linkedBankAccountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountUnmask>;
  unmask(
    linkedBankAccountId: string,
    params: LinkedBankAccountUnmaskParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkedBankAccountUnmask> {
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

export interface LinkedBankAccount {
  data: LinkedBankAccount.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: LinkedBankAccount.Meta;

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

export namespace LinkedBankAccount {
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
        | 'disabled';

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

export interface LinkedBankAccountPaged {
  data: Array<LinkedBankAccountPaged.Data>;

  /**
   * Metadata about the API request, including an identifier, timestamp, and
   * pagination details.
   */
  meta: LinkedBankAccountPaged.Meta;

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

export namespace LinkedBankAccountPaged {
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
        | 'disabled';

      /**
       * Identifies the origin of the status change (e.g., `watchtower`). This helps in
       * tracking the cause of status updates.
       */
      source: 'watchtower';
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

export interface LinkedBankAccountUnmask {
  data: LinkedBankAccountUnmask.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: LinkedBankAccountUnmask.Meta;

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

export namespace LinkedBankAccountUnmask {
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
        | 'disabled';

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

export interface LinkedBankAccountRetrieveParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'correlation-id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'request-id'?: string;
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

export interface LinkedBankAccountListParams {
  /**
   * Query param: The unique identifier of the related account.
   */
  account_id?: string;

  /**
   * Query param: Results page number. Starts at page 1.
   */
  page_number?: number;

  /**
   * Query param: Page size. Max value: 1000
   */
  page_size?: number;

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
    type LinkedBankAccount as LinkedBankAccount,
    type LinkedBankAccountPaged as LinkedBankAccountPaged,
    type LinkedBankAccountUnmask as LinkedBankAccountUnmask,
    type LinkedBankAccountCreateParams as LinkedBankAccountCreateParams,
    type LinkedBankAccountRetrieveParams as LinkedBankAccountRetrieveParams,
    type LinkedBankAccountUpdateParams as LinkedBankAccountUpdateParams,
    type LinkedBankAccountListParams as LinkedBankAccountListParams,
    type LinkedBankAccountUnmaskParams as LinkedBankAccountUnmaskParams,
  };
}
