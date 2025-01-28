// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Charges extends APIResource {
  /**
   * Use charges to collect money from a customer for the sale of goods or services.
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
   * Change the values of parameters associated with a charge prior to processing.
   * The status of the charge must be `created`, `scheduled`, or `on_hold`.
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
   * Cancel a charge to prevent it from being originated for processing. The status
   * of the charge must be `created`, `scheduled`, or `on_hold`.
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
   * Retrieves the details of an existing charge. Supply the unique charge `id`, and
   * Straddle will return the corresponding charge information.
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
   * Place a charge on hold to prevent it from being originated for processing. The
   * status of the charge must be `created` or `scheduled`.
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
   * Release a charge from an `on_hold` status to allow it to be rescheduled for
   * processing.
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

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: Charge.Meta;

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

export namespace Charge {
  export interface Data {
    /**
     * Unique identifier for the charge.
     */
    id: string;

    /**
     * The amount of the charge in cents.
     */
    amount: number;

    /**
     * Configuration options for the charge.
     */
    config: Data.Config;

    /**
     * The channel or mechanism through which the payment was authorized. Use
     * `internet` for payments made online or through a mobile app and `signed` for
     * signed agreements where there is a consent form or contract. Use `signed` for
     * PDF signatures.
     */
    consent_type: 'internet' | 'signed';

    /**
     * Timestamp of when the charge was created.
     */
    created_at: string | null;

    /**
     * The currency of the charge. Only USD is supported.
     */
    currency: string;

    /**
     * An arbitrary description for the charge.
     */
    description: string;

    /**
     * Information about the device used when the customer authorized the payment.
     */
    device: Data.Device;

    /**
     * Unique identifier for the charge in your database. This value must be unique
     * across all charges.
     */
    external_id: string;

    /**
     * Value of the `paykey` used for the charge.
     */
    paykey: string;

    /**
     * The desired date on which the payment should be occur. For charges, this means
     * the date you want the customer to be debited on.
     */
    payment_date: string;

    /**
     * The current status of the charge.
     */
    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';

    /**
     * Additional details about the current status of the charge.
     */
    status_details: Data.StatusDetails;

    /**
     * Status history.
     */
    status_history: Array<Data.StatusHistory>;

    /**
     * Timestamp of when the charge was last updated.
     */
    updated_at: string | null;

    /**
     * Information about the customer associated with the charge.
     */
    customer_details?: Data.CustomerDetails;

    /**
     * Timestamp of when the charge was effective in the customer's bank account,
     * otherwise known as the date on which the customer is debited.
     */
    effective_at?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the charge in a structured format.
     */
    metadata?: Record<string, string> | null;

    /**
     * Information about the paykey used for the charge.
     */
    paykey_details?: Data.PaykeyDetails;

    /**
     * The payment rail that the charge will be processed through.
     */
    payment_rail?: 'ach';

    /**
     * Timestamp of when the charge was processed by Straddle and originated to the
     * payment rail.
     */
    processed_at?: string | null;
  }

  export namespace Data {
    /**
     * Configuration options for the charge.
     */
    export interface Config {
      /**
       * Defines whether to check the customer's balance before processing the charge.
       */
      balance_check: 'required' | 'enabled' | 'disabled';
    }

    /**
     * Information about the device used when the customer authorized the payment.
     */
    export interface Device {
      /**
       * The IP address of the device used when the customer authorized the charge or
       * payout. Use `0.0.0.0` to represent an offline consent interaction.
       */
      ip_address: string;
    }

    /**
     * Additional details about the current status of the charge.
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

      /**
       * The status code if applicable.
       */
      code?: string | null;
    }

    /**
     * A record of the charge's status changes over time.
     */
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
     * Information about the customer associated with the charge.
     */
    export interface CustomerDetails {
      /**
       * Unique identifier for the customer.
       */
      id: string;

      /**
       * The type of customer.
       */
      customer_type: 'individual' | 'business' | 'unknown';

      /**
       * Email.
       */
      email: string;

      /**
       * The name of the customer.
       */
      name: string;

      /**
       * Phone.
       */
      phone: string;
    }

    /**
     * Information about the paykey used for the charge.
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

export interface ChargeCreateParams {
  /**
   * Body param: The amount of the charge in cents.
   */
  amount: number;

  /**
   * Body param:
   */
  config: ChargeCreateParams.Config;

  /**
   * Body param: The channel or mechanism through which the payment was authorized.
   * Use `internet` for payments made online or through a mobile app and `signed` for
   * signed agreements where there is a consent form or contract. Use `signed` for
   * PDF signatures.
   */
  consent_type: 'internet' | 'signed';

  /**
   * Body param: The currency of the charge. Only USD is supported.
   */
  currency: string;

  /**
   * Body param: An arbitrary description for the charge.
   */
  description: string;

  /**
   * Body param:
   */
  device: ChargeCreateParams.Device;

  /**
   * Body param: Unique identifier for the charge in your database. This value must
   * be unique across all charges.
   */
  external_id: string;

  /**
   * Body param: Value of the `paykey` used for the charge.
   */
  paykey: string;

  /**
   * Body param: The desired date on which the payment should be occur. For charges,
   * this means the date you want the customer to be debited on.
   */
  payment_date: string;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the charge in a structured format.
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
    /**
     * Defines whether to check the customer's balance before processing the charge.
     */
    balance_check: 'required' | 'enabled' | 'disabled';
  }

  export interface Device {
    /**
     * The IP address of the device used when the customer authorized the charge or
     * payout. Use `0.0.0.0` to represent an offline consent interaction.
     */
    ip_address: string;
  }
}

export interface ChargeUpdateParams {
  /**
   * Body param: The amount of the charge in cents.
   */
  amount: number;

  /**
   * Body param: An arbitrary description for the charge.
   */
  description: string;

  /**
   * Body param: The desired date on which the payment should be occur. For charges,
   * this means the date you want the customer to be debited on.
   */
  payment_date: string;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the charge in a structured format.
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
   * Body param: Details about why the charge status was updated.
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
   * Body param: Details about why the charge status was updated.
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
   * Body param: Details about why the charge status was updated.
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
