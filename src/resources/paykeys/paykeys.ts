// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ReviewAPI from './review';
import {
  Review,
  ReviewDecisionParams,
  ReviewGetParams,
  ReviewGetResponse,
  ReviewRefreshReviewParams,
} from './review';
import { APIPromise } from '../../core/api-promise';
import { PageNumberSchema, type PageNumberSchemaParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Paykeys extends APIResource {
  review: ReviewAPI.Review = new ReviewAPI.Review(this._client);

  /**
   * Returns a list of paykeys associated with a Straddle account. This endpoint
   * supports advanced sorting and filtering options.
   */
  list(
    params: PaykeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PaykeySummaryPagedV1DataPageNumberSchema, PaykeySummaryPagedV1.Data> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...query
    } = params ?? {};
    return this._client.getAPIList('/v1/paykeys', PageNumberSchema<PaykeySummaryPagedV1.Data>, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  cancel(
    id: string,
    params: PaykeyCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaykeyV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...body
    } = params ?? {};
    return this._client.put(path`/v1/paykeys/${id}/cancel`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the details of an existing paykey. Supply the unique paykey `id` and
   * Straddle will return the corresponding paykey record , including the `paykey`
   * token value and masked bank account details.
   */
  get(
    id: string,
    params: PaykeyGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaykeyV1> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.get(path`/v1/paykeys/${id}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
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
    params: PaykeyRevealParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaykeyRevealResponse> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.get(path`/v1/paykeys/${id}/reveal`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
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
    params: PaykeyUnmaskedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaykeyUnmaskedV1> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.get(path`/v1/paykeys/${id}/unmasked`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates the balance of a paykey. This endpoint allows you to refresh the balance
   * of a paykey.
   */
  updateBalance(
    id: string,
    params: PaykeyUpdateBalanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaykeyV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.put(path`/v1/paykeys/${id}/refresh_balance`, {
      ...options,
      headers: buildHeaders([
        {
          ...(correlationID != null ? { 'Correlation-Id': correlationID } : undefined),
          ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
          ...(requestID != null ? { 'Request-Id': requestID } : undefined),
          ...(straddleAccountID != null ? { 'Straddle-Account-Id': straddleAccountID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type PaykeySummaryPagedV1DataPageNumberSchema = PageNumberSchema<PaykeySummaryPagedV1.Data>;

export interface PaykeySummaryPagedV1 {
  data: Array<PaykeySummaryPagedV1.Data>;

  meta: PaykeySummaryPagedV1.Meta;

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

export namespace PaykeySummaryPagedV1 {
  export interface Data {
    /**
     * Unique identifier for the paykey.
     */
    id: string;

    config: Data.Config;

    /**
     * Timestamp of when the paykey was created.
     */
    created_at: string;

    /**
     * Human-readable label that combines the bank name and masked account number to
     * help easility represent this paykey in a UI
     */
    label: string;

    /**
     * The tokenized paykey value. This value is used to create payments and should be
     * stored securely.
     */
    paykey: string;

    source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt';

    status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked';

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
     * Unique identifier for the paykey in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Name of the financial institution.
     */
    institution_name?: string | null;

    status_details?: Data.StatusDetails;
  }

  export namespace Data {
    export interface Config {
      processing_method?: 'inline' | 'background' | 'skip';

      sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review';
    }

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
       * The time the status change occurred.
       */
      changed_at: string;

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
        | 'cancel_request'
        | 'failed_verification'
        | 'require_review'
        | 'blocked_by_system'
        | 'watchtower_review';

      source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';

      /**
       * The status code if applicable.
       */
      code?: string | null;
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

    /**
     * The number of pages available.
     */
    total_pages: number;
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
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace PaykeyUnmaskedV1 {
  export interface Data {
    /**
     * Unique identifier for the paykey.
     */
    id: string;

    config: Data.Config;

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

    source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt';

    status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked';

    /**
     * Timestamp of the most recent update to the paykey.
     */
    updated_at: string;

    balance?: Data.Balance;

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
     * Unique identifier for the paykey in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Name of the financial institution.
     */
    institution_name?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the paykey in a structured format.
     */
    metadata?: { [key: string]: string } | null;

    status_details?: Data.StatusDetails;
  }

  export namespace Data {
    export interface Config {
      processing_method?: 'inline' | 'background' | 'skip';

      sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review';
    }

    export interface Balance {
      status: 'pending' | 'completed' | 'failed';

      /**
       * Account Balance when last retrieved
       */
      account_balance?: number | null;

      /**
       * Last time account balance was updated.
       */
      updated_at?: string | null;
    }

    export interface BankData {
      /**
       * The bank account number
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
       * The time the status change occurred.
       */
      changed_at: string;

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
        | 'cancel_request'
        | 'failed_verification'
        | 'require_review'
        | 'blocked_by_system'
        | 'watchtower_review';

      source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';

      /**
       * The status code if applicable.
       */
      code?: string | null;
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
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace PaykeyV1 {
  export interface Data {
    /**
     * Unique identifier for the paykey.
     */
    id: string;

    config: Data.Config;

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

    source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt';

    status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked';

    /**
     * Timestamp of the most recent update to the paykey.
     */
    updated_at: string;

    balance?: Data.Balance;

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
     * Unique identifier for the paykey in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Name of the financial institution.
     */
    institution_name?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the paykey in a structured format.
     */
    metadata?: { [key: string]: string } | null;

    status_details?: Data.StatusDetails;
  }

  export namespace Data {
    export interface Config {
      processing_method?: 'inline' | 'background' | 'skip';

      sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review';
    }

    export interface Balance {
      status: 'pending' | 'completed' | 'failed';

      /**
       * Account Balance when last retrieved
       */
      account_balance?: number | null;

      /**
       * Last time account balance was updated.
       */
      updated_at?: string | null;
    }

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
       * The time the status change occurred.
       */
      changed_at: string;

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
        | 'cancel_request'
        | 'failed_verification'
        | 'require_review'
        | 'blocked_by_system'
        | 'watchtower_review';

      source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }
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
  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace PaykeyRevealResponse {
  export interface Data {
    /**
     * Unique identifier for the paykey.
     */
    id: string;

    config: Data.Config;

    /**
     * Timestamp of when the paykey was created.
     */
    created_at: string;

    /**
     * Human-readable label that combines the bank name and masked account number to
     * help easility represent this paykey in a UI
     */
    label: string;

    /**
     * The tokenized paykey value. This token is used to create payments and should be
     * stored securely.
     */
    paykey: string;

    source: 'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt';

    status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked';

    /**
     * Timestamp of the most recent update to the paykey.
     */
    updated_at: string;

    balance?: Data.Balance;

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
     * Unique identifier for the paykey in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Name of the financial institution.
     */
    institution_name?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the paykey in a structured format.
     */
    metadata?: { [key: string]: string } | null;

    status_details?: Data.StatusDetails;
  }

  export namespace Data {
    export interface Config {
      processing_method?: 'inline' | 'background' | 'skip';

      sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review';
    }

    export interface Balance {
      status: 'pending' | 'completed' | 'failed';

      /**
       * Account Balance when last retrieved
       */
      account_balance?: number | null;

      /**
       * Last time account balance was updated.
       */
      updated_at?: string | null;
    }

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
       * The time the status change occurred.
       */
      changed_at: string;

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
        | 'cancel_request'
        | 'failed_verification'
        | 'require_review'
        | 'blocked_by_system'
        | 'watchtower_review';

      source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }
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
   * Query param: Filter paykeys by their source.
   */
  source?: Array<'bank_account' | 'straddle' | 'mx' | 'plaid' | 'tan' | 'quiltt'>;

  /**
   * Query param: Filter paykeys by their current status.
   */
  status?: Array<'pending' | 'active' | 'inactive' | 'rejected' | 'review' | 'blocked'>;

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

export interface PaykeyCancelParams {
  /**
   * Body param:
   */
  reason?: string | null;

  /**
   * Header param: Optional client generated identifier to trace and debug a series
   * of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Header param: Optional client generated value to use for idempotent requests.
   */
  'Idempotency-Key'?: string;

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

export interface PaykeyUpdateBalanceParams {
  /**
   * Optional client generated identifier to trace and debug a series of requests.
   */
  'Correlation-Id'?: string;

  /**
   * Optional client generated value to use for idempotent requests.
   */
  'Idempotency-Key'?: string;

  /**
   * Optional client generated identifier to trace and debug a request.
   */
  'Request-Id'?: string;

  /**
   * For use by platforms to specify an account id and set scope of a request.
   */
  'Straddle-Account-Id'?: string;
}

Paykeys.Review = Review;

export declare namespace Paykeys {
  export {
    type PaykeySummaryPagedV1 as PaykeySummaryPagedV1,
    type PaykeyUnmaskedV1 as PaykeyUnmaskedV1,
    type PaykeyV1 as PaykeyV1,
    type PaykeyRevealResponse as PaykeyRevealResponse,
    type PaykeySummaryPagedV1DataPageNumberSchema as PaykeySummaryPagedV1DataPageNumberSchema,
    type PaykeyListParams as PaykeyListParams,
    type PaykeyCancelParams as PaykeyCancelParams,
    type PaykeyGetParams as PaykeyGetParams,
    type PaykeyRevealParams as PaykeyRevealParams,
    type PaykeyUnmaskedParams as PaykeyUnmaskedParams,
    type PaykeyUpdateBalanceParams as PaykeyUpdateBalanceParams,
  };

  export {
    Review as Review,
    type ReviewGetResponse as ReviewGetResponse,
    type ReviewDecisionParams as ReviewDecisionParams,
    type ReviewGetParams as ReviewGetParams,
    type ReviewRefreshReviewParams as ReviewRefreshReviewParams,
  };
}
