// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Link extends APIResource {
  /**
   * Creates a new paykey using a bank routing and account number as the source. This
   * endpoint allows you to create a secure payment token linked to a specific bank
   * account.
   */
  bankAccount(
    params: LinkBankAccountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkBankAccountResponse> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.post('/v1/bridge/bank_account', {
      body,
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
   * Creates a new paykey using a Plaid token as the source. This endpoint allows you
   * to create a secure payment token linked to a bank account authenticated through
   * Plaid.
   */
  plaid(params: LinkPlaidParams, options?: Core.RequestOptions): Core.APIPromise<LinkPlaidResponse> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.post('/v1/bridge/plaid', {
      body,
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

export interface LinkBankAccountResponse {
  data: LinkBankAccountResponse.Data;

  meta: LinkBankAccountResponse.Meta;

  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace LinkBankAccountResponse {
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
       * Bank routing number.
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
       * Identifies the origin of the status change (e.g., 'bank_decline', 'watchtower').
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
  }
}

export interface LinkPlaidResponse {
  data: LinkPlaidResponse.Data;

  meta: LinkPlaidResponse.Meta;

  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace LinkPlaidResponse {
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
       * Bank routing number.
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
       * Identifies the origin of the status change (e.g., 'bank_decline', 'watchtower').
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
  }
}

export interface LinkBankAccountParams {
  /**
   * Body param: Bank account number.
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
   * Body param: Bank routing number.
   */
  routing_number: string;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the paykey in a structured format.
   */
  metadata?: Record<string, string> | null;

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
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the paykey in a structured format.
   */
  metadata?: Record<string, string> | null;

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

export declare namespace Link {
  export {
    type LinkBankAccountResponse as LinkBankAccountResponse,
    type LinkPlaidResponse as LinkPlaidResponse,
    type LinkBankAccountParams as LinkBankAccountParams,
    type LinkPlaidParams as LinkPlaidParams,
  };
}
