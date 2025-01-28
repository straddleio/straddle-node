// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Payouts extends APIResource {
  /**
   * Create a payout.
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
   * Update a payout.
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
   * Cancel a payout.
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
   * Get a payout by id.
   */
  get(id: string, params?: PayoutGetParams, options?: Core.RequestOptions): Core.APIPromise<Payout>;
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Payout>;
  get(
    id: string,
    params: PayoutGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Payout> {
    if (isRequestOptions(params)) {
      return this.get(id, {}, params);
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
   * Put a payout on hold.
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
   * Release a payout from hold.
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

  meta: Payout.Meta;

  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace Payout {
  export interface Data {
    /**
     * Id.
     */
    id: string;

    /**
     * Amount.
     */
    amount: number;

    config: unknown;

    /**
     * Currency.
     */
    currency: string;

    /**
     * Description.
     */
    description: string;

    device: Data.Device;

    /**
     * External id.
     */
    external_id: string;

    /**
     * Paykey.
     */
    paykey: string;

    /**
     * Payment date.
     */
    payment_date: string;

    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';

    status_details: Data.StatusDetails;

    /**
     * Status history.
     */
    status_history: Array<Data.StatusHistory>;

    /**
     * Created at.
     */
    created_at?: string | null;

    customer_details?: Data.CustomerDetails;

    /**
     * Effective at.
     */
    effective_at?: string | null;

    /**
     * Metadata.
     */
    metadata?: Record<string, string> | null;

    paykey_details?: Data.PaykeyDetails;

    payment_rail?: 'ach';

    /**
     * Processed at.
     */
    processed_at?: string | null;

    /**
     * Updated at.
     */
    updated_at?: string | null;
  }

  export namespace Data {
    export interface Device {
      /**
       * Ip address.
       */
      ip_address: string;
    }

    export interface StatusDetails {
      /**
       * The time the status change occurred.
       */
      changed_at: string;

      /**
       * A human-readable description of the status.
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

    export interface StatusHistory {
      /**
       * The time the status change occurred.
       */
      changed_at: string;

      /**
       * A human-readable description of the status.
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

      status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    export interface CustomerDetails {
      /**
       * Id.
       */
      id: string;

      customer_type: 'unknown' | 'individual' | 'business';

      /**
       * Email.
       */
      email: string;

      /**
       * Name.
       */
      name: string;

      /**
       * Phone.
       */
      phone: string;
    }

    export interface PaykeyDetails {
      /**
       * Id.
       */
      id: string;

      /**
       * Customer id.
       */
      customer_id: string;

      /**
       * Label.
       */
      label: string;

      /**
       * Balance.
       */
      balance?: number | null;
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

export interface PayoutCreateParams {
  /**
   * Body param: Amount.
   */
  amount: number;

  /**
   * Body param: Currency.
   */
  currency: string;

  /**
   * Body param: Description.
   */
  description: string;

  /**
   * Body param:
   */
  device: PayoutCreateParams.Device;

  /**
   * Body param: External id.
   */
  external_id: string;

  /**
   * Body param: Paykey.
   */
  paykey: string;

  /**
   * Body param: Payment date.
   */
  payment_date: string;

  /**
   * Body param:
   */
  config?: unknown;

  /**
   * Body param: Metadata.
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
  export interface Device {
    /**
     * Ip address.
     */
    ip_address: string;
  }
}

export interface PayoutUpdateParams {
  /**
   * Body param: Amount.
   */
  amount: number;

  /**
   * Body param: Description.
   */
  description: string;

  /**
   * Body param: Payment date.
   */
  payment_date: string;

  /**
   * Body param: Metadata.
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
   * Body param: Reason.
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

export interface PayoutGetParams {
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

export interface PayoutHoldParams {
  /**
   * Body param: Reason.
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
   * Body param: Reason.
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
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutGetParams as PayoutGetParams,
    type PayoutHoldParams as PayoutHoldParams,
    type PayoutReleaseParams as PayoutReleaseParams,
  };
}
