// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { PageNumberSchema, type PageNumberSchemaParams } from '../pagination';

export class Paykeys extends APIResource {
  /**
   * Returns a list of paykeys associated with a Straddle account. This endpoint
   * supports advanced sorting and filtering options.
   */
  list(
    params?: PaykeyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaykeySummaryPagedDataPageNumberSchema, PaykeySummaryPaged.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaykeySummaryPagedDataPageNumberSchema, PaykeySummaryPaged.Data>;
  list(
    params: PaykeyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaykeySummaryPagedDataPageNumberSchema, PaykeySummaryPaged.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...query
    } = params;
    return this._client.getAPIList('/v1/paykeys', PaykeySummaryPagedDataPageNumberSchema, {
      query,
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves the details of an existing paykey. Supply the unique paykey `id` and
   * Straddle will return the corresponding paykey record , including the `paykey`
   * token value and masked bank account details.
   */
  get(id: string, params?: PaykeyGetParams, options?: Core.RequestOptions): Core.APIPromise<Paykey>;
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Paykey>;
  get(
    id: string,
    params: PaykeyGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Paykey> {
    if (isRequestOptions(params)) {
      return this.get(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/paykeys/${id}`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves the unmasked details of an existing paykey. Supply the unique paykey
   * `id` and Straddle will return the corresponding paykey record, including the
   * unmasked bank account details. This endpoint needs to be enabled by Straddle for
   * your account and should only be used when absolutely necessary.
   */
  unmasked(
    id: string,
    params?: PaykeyUnmaskedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaykeyUnmasked>;
  unmasked(id: string, options?: Core.RequestOptions): Core.APIPromise<PaykeyUnmasked>;
  unmasked(
    id: string,
    params: PaykeyUnmaskedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaykeyUnmasked> {
    if (isRequestOptions(params)) {
      return this.unmasked(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/paykeys/${id}/unmasked`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }
}

export class PaykeySummaryPagedDataPageNumberSchema extends PageNumberSchema<PaykeySummaryPaged.Data> {}

export interface Paykey {
  data: Paykey.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: Paykey.Meta;

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

export namespace Paykey {
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

    source: 'bank_account' | 'straddle' | 'mx' | 'plaid';

    status: 'pending' | 'active' | 'inactive' | 'rejected';

    /**
     * Timestamp of the most recent update to the paykey.
     */
    updated_at: string;

    bank_data?: Data.BankData;

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

    status_details?: Data.StatusDetails;
  }

  export namespace Data {
    export interface BankData {
      /**
       * Bank account number. This value is masked by default for security reasons. Use
       * the /unmask endpoint to access the unmasked value.
       */
      account_number: string;

      account_type: 'checking' | 'savings';

      /**
       * The routing number of the bank account.
       */
      routing_number: string;
    }

    export interface StatusDetails {
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

export interface PaykeySummaryPaged {
  data: Array<PaykeySummaryPaged.Data>;

  meta: PaykeySummaryPaged.Meta;

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

export namespace PaykeySummaryPaged {
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

    source: 'bank_account' | 'straddle' | 'mx' | 'plaid';

    status: 'pending' | 'active' | 'inactive' | 'rejected';

    /**
     * Timestamp of the most recent update to the paykey.
     */
    updated_at: string;

    bank_data?: Data.BankData;

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

    status_details?: Data.StatusDetails;
  }

  export namespace Data {
    export interface BankData {
      /**
       * Bank account number. This value is masked by default for security reasons. Use
       * the /unmask endpoint to access the unmasked value.
       */
      account_number: string;

      account_type: 'checking' | 'savings';

      /**
       * The routing number of the bank account.
       */
      routing_number: string;
    }

    export interface StatusDetails {
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
  }

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

    sort_order: 'asc' | 'desc';

    total_items: number;
  }
}

export interface PaykeyUnmasked {
  data: PaykeyUnmasked.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: PaykeyUnmasked.Meta;

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

export namespace PaykeyUnmasked {
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

    source: 'bank_account' | 'straddle' | 'mx' | 'plaid';

    status: 'pending' | 'active' | 'inactive' | 'rejected';

    /**
     * Timestamp of the most recent update to the paykey.
     */
    updated_at: string;

    bank_data?: Data.BankData;

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

    status_details?: Data.StatusDetails;
  }

  export namespace Data {
    export interface BankData {
      /**
       * The bank account number. This value is masked by default for security reasons.
       * Use the /unmask endpoint to access the unmasked value.
       */
      account_number: string;

      account_type: 'checking' | 'savings';

      /**
       * The routing number of the bank account.
       */
      routing_number: string;
    }

    export interface StatusDetails {
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

export interface PaykeyListParams extends PageNumberSchemaParams {
  /**
   * Query param: Filter paykeys by related customer ID.
   */
  customer_id?: string;

  /**
   * Query param:
   */
  sort_by?: 'institution_name' | 'expires_at' | 'created_at';

  /**
   * Query param:
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Query param: Filter paykeys by their current status.
   */
  status?: Array<'pending' | 'active' | 'inactive' | 'rejected'>;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Header param: Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * Header param: For use by platforms to specify an account id and set scope of a
   * request.
   */
  'Straddle-Account-Id'?: string;
}

export interface PaykeyGetParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * For use by platforms to specify an account id and set scope of a request.
   */
  'Straddle-Account-Id'?: string;
}

export interface PaykeyUnmaskedParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * For use by platforms to specify an account id and set scope of a request.
   */
  'Straddle-Account-Id'?: string;
}

Paykeys.PaykeySummaryPagedDataPageNumberSchema = PaykeySummaryPagedDataPageNumberSchema;

export declare namespace Paykeys {
  export {
    type Paykey as Paykey,
    type PaykeySummaryPaged as PaykeySummaryPaged,
    type PaykeyUnmasked as PaykeyUnmasked,
    PaykeySummaryPagedDataPageNumberSchema as PaykeySummaryPagedDataPageNumberSchema,
    type PaykeyListParams as PaykeyListParams,
    type PaykeyGetParams as PaykeyGetParams,
    type PaykeyUnmaskedParams as PaykeyUnmaskedParams,
  };
}
