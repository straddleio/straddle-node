// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Payouts extends APIResource {
  /**
   * Use payouts to send money to your customers.
   */
  create(params: PayoutCreateParams, options?: Core.RequestOptions): Core.APIPromise<Payout> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.post('/v1/payouts', {
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
   * Retrieves the details of an existing payout. Supply the unique payout `id` to
   * retrieve the corresponding payout information.
   */
  retrieve(id: string, params?: PayoutRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Payout>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Payout>;
  retrieve(
    id: string,
    params: PayoutRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Payout> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/payouts/${id}`, {
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
   * Update the details of a payout prior to processing. The status of the payout
   * must be `created`, `scheduled`, or `on_hold`.
   */
  update(id: string, params: PayoutUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Payout> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/payouts/${id}`, {
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
   * Cancel a payout to prevent it from being processed. The status of the payout
   * must be `created`, `scheduled`, or `on_hold`.
   */
  cancel(id: string, params: PayoutCancelParams, options?: Core.RequestOptions): Core.APIPromise<Payout> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/payouts/${id}/cancel`, {
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
   * Hold a payout to prevent it from being processed. The status of the payout must
   * be `created`, `scheduled`, or `on_hold`.
   */
  hold(id: string, params: PayoutHoldParams, options?: Core.RequestOptions): Core.APIPromise<Payout> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/payouts/${id}/hold`, {
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
   * Release a payout from a `hold` status to allow it to be rescheduled for
   * processing.
   */
  release(id: string, params: PayoutReleaseParams, options?: Core.RequestOptions): Core.APIPromise<Payout> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/payouts/${id}/release`, {
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

export interface Payout {
  data: Payout.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: Payout.Meta;

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

export namespace Payout {
  export interface Data {
    /**
     * Unique identifier for the payout.
     */
    id: string;

    /**
     * The amount of the payout in cents.
     */
    amount: number;

    /**
     * The currency of the payout. Only USD is supported.
     */
    currency: string;

    /**
     * An arbitrary description for the payout.
     */
    description: string;

    /**
     * Information about the device used when the customer authorized the payout.
     */
    device: Data.Device;

    /**
     * Unique identifier for the payout in your database. This value must be unique
     * across all payouts.
     */
    external_id: string;

    /**
     * Value of the `paykey` used for the payout.
     */
    paykey: string;

    /**
     * The desired date on which the payment should be occur. For payouts, this means
     * the date you want the funds to be sent from your bank account.
     */
    payment_date: string;

    /**
     * The current status of the payout.
     */
    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';

    /**
     * Details about the current status of the payout.
     */
    status_details: Data.StatusDetails;

    /**
     * History of the status changes for the payout.
     */
    status_history: Array<Data.StatusHistory>;

    /**
     * Configuration for the payout.
     */
    config?: unknown;

    /**
     * The time the payout was created.
     */
    created_at?: string | null;

    /**
     * Information about the customer associated with the payout.
     */
    customer_details?: Data.CustomerDetails;

    /**
     * The actual date on which the payment occurred. For payouts, this is the date the
     * funds were sent from your bank account.
     */
    effective_at?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the payout in a structured format.
     */
    metadata?: Record<string, string> | null;

    /**
     * Information about the paykey used for the payout.
     */
    paykey_details?: Data.PaykeyDetails;

    /**
     * The payment rail used for the payout.
     */
    payment_rail?: 'ach';

    /**
     * The time the payout was processed by Straddle and originated to the payment
     * rail.
     */
    processed_at?: string | null;

    /**
     * The time the payout was last updated.
     */
    updated_at?: string | null;
  }

  export namespace Data {
    /**
     * Information about the device used when the customer authorized the payout.
     */
    export interface Device {
      /**
       * The IP address of the device used when the customer authorized the charge or
       * payout. Use `0.0.0.0` to represent an offline consent interaction.
       */
      ip_address: string;
    }

    /**
     * Details about the current status of the payout.
     */
    export interface StatusDetails {
      /**
       * The time the status change occurred.
       */
      changed_at: string;

      /**
       * A human-readable description of the current status.
       */
      message: string;

      /**
       * A machine-readable identifier for the specific status, useful for programmatic
       * handling.
       */
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

      /**
       * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
       * This helps in tracking the cause of status updates.
       */
      source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';
    }

    export interface StatusHistory {
      /**
       * The time the status change occurred.
       */
      changed_at: string;

      /**
       * A human-readable description of the status.
       */
      message: string;

      /**
       * A machine-readable identifier for the specific status, useful for programmatic
       * handling.
       */
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

      /**
       * Identifies the origin of the status change (e.g., `bank_decline`, `watchtower`).
       * This helps in tracking the cause of status updates.
       */
      source: 'watchtower' | 'bank_decline' | 'customer_dispute' | 'user_action' | 'system';

      /**
       * The current status of the `charge` or `payout`.
       */
      status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    /**
     * Information about the customer associated with the payout.
     */
    export interface CustomerDetails {
      /**
       * Unique identifier for the customer.
       */
      id: string;

      /**
       * The type of customer.
       */
      customer_type: 'individual' | 'business';

      /**
       * The name of the customer.
       */
      name: string;
    }

    /**
     * Information about the paykey used for the payout.
     */
    export interface PaykeyDetails {
      /**
       * Unique identifier for the paykey.
       */
      id: string;

      /**
       * Unique identifier for the customer associated with the paykey.
       */
      customer_id: string;

      /**
       * Human-readable label used to represent this paykey in a UI.
       */
      label: string;

      /**
       * The most recent balance of the bank account associated with the paykey in
       * dollars.
       */
      balance?: number | null;
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

export interface PayoutCreateParams {
  /**
   * Body param: The amount of the payout in cents.
   */
  amount: number;

  /**
   * Body param: The currency of the payout. Only USD is supported.
   */
  currency: string;

  /**
   * Body param: An arbitrary description for the payout.
   */
  description: string;

  /**
   * Body param: Information about the device used when the customer authorized the
   * payout.
   */
  device: PayoutCreateParams.Device;

  /**
   * Body param: Unique identifier for the payout in your database. This value must
   * be unique across all payouts.
   */
  external_id: string;

  /**
   * Body param: Value of the `paykey` used for the payout.
   */
  paykey: string;

  /**
   * Body param: The desired date on which the payout should be occur. For payouts,
   * this means the date you want the funds to be sent from your bank account.
   */
  payment_date: string;

  /**
   * Body param:
   */
  config?: unknown;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the payout in a structured format.
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

export namespace PayoutCreateParams {
  /**
   * Information about the device used when the customer authorized the payout.
   */
  export interface Device {
    /**
     * The IP address of the device used when the customer authorized the charge or
     * payout. Use `0.0.0.0` to represent an offline consent interaction.
     */
    ip_address: string;
  }
}

export interface PayoutRetrieveParams {
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

export interface PayoutUpdateParams {
  /**
   * Body param: The amount of the payout in cents.
   */
  amount: number;

  /**
   * Body param: An arbitrary description for the payout.
   */
  description: string;

  /**
   * Body param: The desired date on which the payment should be occur. For payouts,
   * this means the date you want the funds to be sent from your bank account.
   */
  payment_date: string;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the payout in a structured format.
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

export interface PayoutCancelParams {
  /**
   * Body param: Details about why the payout status was updated.
   */
  reason: string;

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

export interface PayoutHoldParams {
  /**
   * Body param: Details about why the payout status was updated.
   */
  reason: string;

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

export interface PayoutReleaseParams {
  /**
   * Body param: Details about why the payout status was updated.
   */
  reason: string;

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

export declare namespace Payouts {
  export {
    type Payout as Payout,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutHoldParams as PayoutHoldParams,
    type PayoutReleaseParams as PayoutReleaseParams,
  };
}
