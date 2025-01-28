// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Charges extends APIResource {
  /**
   * Create a charge.
   */
  create(params: ChargeCreateParams, options?: Core.RequestOptions): Core.APIPromise<Charge> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.post('/v1/charges', {
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
   * Update a charge.
   */
  update(id: string, params: ChargeUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Charge> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/charges/${id}`, {
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
   * Cancel a charge.
   */
  cancel(id: string, params?: ChargeCancelParams, options?: Core.RequestOptions): Core.APIPromise<Charge>;
  cancel(id: string, options?: Core.RequestOptions): Core.APIPromise<Charge>;
  cancel(
    id: string,
    params: ChargeCancelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Charge> {
    if (isRequestOptions(params)) {
      return this.cancel(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/charges/${id}/cancel`, {
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
   * Get a charge by id.
   */
  get(id: string, params?: ChargeGetParams, options?: Core.RequestOptions): Core.APIPromise<Charge>;
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Charge>;
  get(
    id: string,
    params: ChargeGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Charge> {
    if (isRequestOptions(params)) {
      return this.get(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/charges/${id}`, {
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
   * Put a charge on hold.
   */
  hold(id: string, params?: ChargeHoldParams, options?: Core.RequestOptions): Core.APIPromise<Charge>;
  hold(id: string, options?: Core.RequestOptions): Core.APIPromise<Charge>;
  hold(
    id: string,
    params: ChargeHoldParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Charge> {
    if (isRequestOptions(params)) {
      return this.hold(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/charges/${id}/hold`, {
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
   * Release a charge from hold.
   */
  release(id: string, params?: ChargeReleaseParams, options?: Core.RequestOptions): Core.APIPromise<Charge>;
  release(id: string, options?: Core.RequestOptions): Core.APIPromise<Charge>;
  release(
    id: string,
    params: ChargeReleaseParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Charge> {
    if (isRequestOptions(params)) {
      return this.release(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/charges/${id}/release`, {
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

export interface Charge {
  data: Charge.Data;

  meta: Charge.Meta;

  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace Charge {
  export interface Data {
    /**
     * Id.
     */
    id: string;

    /**
     * Amount.
     */
    amount: number;

    config: Data.Config;

    consent_type: 'internet' | 'signed';

    /**
     * Created at.
     */
    created_at: string;

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
     * Updated at.
     */
    updated_at: string;

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
  }

  export namespace Data {
    export interface Config {
      balance_check: 'required' | 'enabled' | 'disabled';
    }

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

export interface ChargeCreateParams {
  /**
   * Body param: Amount.
   */
  amount: number;

  /**
   * Body param:
   */
  config: ChargeCreateParams.Config;

  /**
   * Body param:
   */
  consent_type: 'internet' | 'signed';

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
  device: ChargeCreateParams.Device;

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

export namespace ChargeCreateParams {
  export interface Config {
    balance_check: 'required' | 'enabled' | 'disabled';
  }

  export interface Device {
    /**
     * Ip address.
     */
    ip_address: string;
  }
}

export interface ChargeUpdateParams {
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

export interface ChargeCancelParams {
  /**
   * Body param: Reason.
   */
  reason?: string | null;

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

export interface ChargeGetParams {
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

export interface ChargeHoldParams {
  /**
   * Body param: Reason.
   */
  reason?: string | null;

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

export interface ChargeReleaseParams {
  /**
   * Body param: Reason.
   */
  reason?: string | null;

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

export declare namespace Charges {
  export {
    type Charge as Charge,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeCancelParams as ChargeCancelParams,
    type ChargeGetParams as ChargeGetParams,
    type ChargeHoldParams as ChargeHoldParams,
    type ChargeReleaseParams as ChargeReleaseParams,
  };
}
