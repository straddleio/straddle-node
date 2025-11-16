// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PaykeysAPI from '../paykeys';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Link extends APIResource {
  /**
   * Use Bridge to create a new paykey using a bank routing and account number as the
   * source. This endpoint allows you to create a secure payment token linked to a
   * specific bank account.
   */
  bankAccount(params: LinkBankAccountParams, options?: RequestOptions): APIPromise<PaykeysAPI.PaykeyV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...body
    } = params;
    return this._client.post('/v1/bridge/bank_account', {
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
   * Creates a new paykey using a Quiltt token as the source. This endpoint allows
   * you to create a secure payment token linked to a bank account authenticated
   * through Quiltt.
   */
  createPaykey(
    params: LinkCreatePaykeyParams,
    options?: RequestOptions,
  ): APIPromise<LinkCreatePaykeyResponse> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...body
    } = params;
    return this._client.post('/v1/bridge/quiltt', {
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

  createTan(params: LinkCreateTanParams, options?: RequestOptions): APIPromise<LinkCreateTanResponse> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...body
    } = params;
    return this._client.post('/v1/bridge/tan', {
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
   * Use Bridge to create a new paykey using a Plaid token as the source. This
   * endpoint allows you to create a secure payment token linked to a bank account
   * authenticated through Plaid.
   */
  plaid(params: LinkPlaidParams, options?: RequestOptions): APIPromise<PaykeysAPI.PaykeyV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...body
    } = params;
    return this._client.post('/v1/bridge/plaid', {
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
}

export interface LinkCreatePaykeyResponse {
  data: LinkCreatePaykeyResponse.Data;

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

export namespace LinkCreatePaykeyResponse {
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

    status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review';

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
        | 'payout_refused';

      source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }
  }
}

export interface LinkCreateTanResponse {
  data: LinkCreateTanResponse.Data;

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

export namespace LinkCreateTanResponse {
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

    status: 'pending' | 'active' | 'inactive' | 'rejected' | 'review';

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
        | 'payout_refused';

      source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }
  }
}

export interface LinkBankAccountParams {
  /**
   * Body param: The bank account number.
   */
  account_number: string;

  /**
   * Body param:
   */
  account_type: 'checking' | 'savings';

  /**
   * Body param: Unique identifier of the related customer object.
   */
  customer_id: string;

  /**
   * Body param: The routing number of the bank account.
   */
  routing_number: string;

  /**
   * Body param:
   */
  config?: LinkBankAccountParams.Config;

  /**
   * Body param: Unique identifier for the paykey in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the paykey in a structured format.
   */
  metadata?: { [key: string]: string } | null;

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

export namespace LinkBankAccountParams {
  export interface Config {
    processing_method?: 'inline' | 'background' | 'skip';

    sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review';
  }
}

export interface LinkCreatePaykeyParams {
  /**
   * Body param: Unique identifier of the related customer object.
   */
  customer_id: string;

  /**
   * Body param: Quiltt processor token generated by your application for use with
   * the Straddle API.
   */
  quiltt_token: string;

  /**
   * Body param:
   */
  config?: LinkCreatePaykeyParams.Config;

  /**
   * Body param: Unique identifier for the paykey in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the paykey in a structured format.
   */
  metadata?: { [key: string]: string } | null;

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

export namespace LinkCreatePaykeyParams {
  export interface Config {
    processing_method?: 'inline' | 'background' | 'skip';

    sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review';
  }
}

export interface LinkCreateTanParams {
  /**
   * Body param:
   */
  account_type: 'checking' | 'savings';

  /**
   * Body param: Unique identifier of the related customer object.
   */
  customer_id: string;

  /**
   * Body param: Bank routing number.
   */
  routing_number: string;

  /**
   * Body param: Tokenized account number.
   */
  tan: string;

  /**
   * Body param:
   */
  config?: LinkCreateTanParams.Config;

  /**
   * Body param: Unique identifier for the paykey in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the paykey in a structured format.
   */
  metadata?: { [key: string]: string } | null;

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

export namespace LinkCreateTanParams {
  export interface Config {
    processing_method?: 'inline' | 'background' | 'skip';

    sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review';
  }
}

export interface LinkPlaidParams {
  /**
   * Body param: Unique identifier of the related customer object.
   */
  customer_id: string;

  /**
   * Body param: Plaid processor token generated by your application for use with the
   * Straddle API.
   */
  plaid_token: string;

  /**
   * Body param:
   */
  config?: LinkPlaidParams.Config;

  /**
   * Body param: Unique identifier for the paykey in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the paykey in a structured format.
   */
  metadata?: { [key: string]: string } | null;

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

export namespace LinkPlaidParams {
  export interface Config {
    processing_method?: 'inline' | 'background' | 'skip';

    sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review';
  }
}

export declare namespace Link {
  export {
    type LinkCreatePaykeyResponse as LinkCreatePaykeyResponse,
    type LinkCreateTanResponse as LinkCreateTanResponse,
    type LinkBankAccountParams as LinkBankAccountParams,
    type LinkCreatePaykeyParams as LinkCreatePaykeyParams,
    type LinkCreateTanParams as LinkCreateTanParams,
    type LinkPlaidParams as LinkPlaidParams,
  };
}
