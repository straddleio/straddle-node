// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { PageNumberSchema, type PageNumberSchemaParams } from '../pagination';

export class Paykeys extends APIResource {
  /**
   * Returns a list of paykeys associated with a Straddle account. This endpoint
   * supports advanced sorting and filtering options.
   */
  list(
    params?: PaykeyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaykeySummaryPagedV1DataPageNumberSchema, PaykeySummaryPagedV1.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaykeySummaryPagedV1DataPageNumberSchema, PaykeySummaryPagedV1.Data>;
  list(
    params: PaykeyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaykeySummaryPagedV1DataPageNumberSchema, PaykeySummaryPagedV1.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...query
    } = params;
    return this._client.getAPIList('/v1/paykeys', PaykeySummaryPagedV1DataPageNumberSchema, {
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
  get(
    id: string,
    params?: PaykeyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PaykeyV1ItemResponse>;
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.PaykeyV1ItemResponse>;
  get(
    id: string,
    params: PaykeyGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.PaykeyV1ItemResponse> {
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
   * Retrieves the details of a paykey that has previously been created, including
   * unmasked bank account fields. Supply the unique paykey ID that was returned from
   * your previous request, and Straddle will return the corresponding paykey
   * information.
   */
  reveal(
    id: string,
    params?: PaykeyRevealParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaykeyRevealResponse>;
  reveal(id: string, options?: Core.RequestOptions): Core.APIPromise<PaykeyRevealResponse>;
  reveal(
    id: string,
    params: PaykeyRevealParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaykeyRevealResponse> {
    if (isRequestOptions(params)) {
      return this.reveal(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/paykeys/${id}/reveal`, {
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
  ): Core.APIPromise<PaykeyUnmaskedV1>;
  unmasked(id: string, options?: Core.RequestOptions): Core.APIPromise<PaykeyUnmaskedV1>;
  unmasked(
    id: string,
    params: PaykeyUnmaskedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaykeyUnmaskedV1> {
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

export class PaykeySummaryPagedV1DataPageNumberSchema extends PageNumberSchema<PaykeySummaryPagedV1.Data> {}

export interface PaykeySummaryPagedV1 {
  data: Array<PaykeySummaryPagedV1.Data>;

  meta: Shared.PagedResponseMetadata1;

  /**
   * Indicates the structure of the returned content.
   *
   * - "object" means the `data` field contains a single JSON object.
   * - "array" means the `data` field contains an array of objects.
   * - "error" means the `data` field contains an error object with details of the
   *   issue.
   * - "none" means no data is returned.
   */
  response_type: Shared.ResponseTypeEnum;
}

export namespace PaykeySummaryPagedV1 {
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

    status_details?: Shared.StatusDetailsV1;
  }
}

export interface PaykeyUnmaskedV1 {
  data: PaykeyUnmaskedV1.Data;

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
  response_type: Shared.ResponseTypeEnum;
}

export namespace PaykeyUnmaskedV1 {
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

    status_details?: Shared.StatusDetailsV1;
  }

  export namespace Data {
    export interface BankData {
      /**
       * The bank account number. This value is masked by default for security reasons.
       * Use the /unmask endpoint to access the unmasked value.
       */
      account_number: string;

      account_type: Shared.AccountTypeV1;

      /**
       * The routing number of the bank account.
       */
      routing_number: string;
    }
  }
}

export interface PaykeyV1 {
  data: PaykeyV1.Data;

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
  response_type: Shared.ResponseTypeEnum;
}

export namespace PaykeyV1 {
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

export interface PaykeyRevealResponse {
  data: PaykeyRevealResponse.Data;

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
  response_type: Shared.ResponseTypeEnum;
}

export namespace PaykeyRevealResponse {
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
  sort_order?: Shared.SortOrder;

  /**
   * Query param: Filter paykeys by their current status.
   */
  status?: Array<Shared.PaykeyStatusV1>;

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

export interface PaykeyRevealParams {
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

Paykeys.PaykeySummaryPagedV1DataPageNumberSchema = PaykeySummaryPagedV1DataPageNumberSchema;

export declare namespace Paykeys {
  export {
    type PaykeySummaryPagedV1 as PaykeySummaryPagedV1,
    type PaykeyUnmaskedV1 as PaykeyUnmaskedV1,
    type PaykeyV1 as PaykeyV1,
    type PaykeyRevealResponse as PaykeyRevealResponse,
    PaykeySummaryPagedV1DataPageNumberSchema as PaykeySummaryPagedV1DataPageNumberSchema,
    type PaykeyListParams as PaykeyListParams,
    type PaykeyGetParams as PaykeyGetParams,
    type PaykeyRevealParams as PaykeyRevealParams,
    type PaykeyUnmaskedParams as PaykeyUnmaskedParams,
  };
}
