// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class Charges extends APIResource {
  /**
   * Use charges to collect money from a customer for the sale of goods or services.
   *
   * @example
   * ```ts
   * const chargeV1 = await client.charges.create({
   *   amount: 10000,
   *   config: { balance_check: 'required' },
   *   consent_type: 'internet',
   *   currency: 'currency',
   *   description: 'Monthly subscription fee',
   *   device: { ip_address: '192.168.1.1' },
   *   external_id: 'external_id',
   *   paykey: 'paykey',
   *   payment_date: '2019-12-27',
   * });
   * ```
   */
  create(params: ChargeCreateParams, options?: Core.RequestOptions): Core.APIPromise<ChargeV1> {
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
   *
   * @example
   * ```ts
   * const chargeV1 = await client.charges.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     amount: 10000,
   *     description: 'Monthly subscription fee',
   *     payment_date: '2019-12-27',
   *   },
   * );
   * ```
   */
  update(id: string, params: ChargeUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ChargeV1> {
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
   *
   * @example
   * ```ts
   * const chargeV1 = await client.charges.cancel(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  cancel(id: string, params?: ChargeCancelParams, options?: Core.RequestOptions): Core.APIPromise<ChargeV1>;
  cancel(id: string, options?: Core.RequestOptions): Core.APIPromise<ChargeV1>;
  cancel(
    id: string,
    params: ChargeCancelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChargeV1> {
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
   *
   * @example
   * ```ts
   * const chargeV1 = await client.charges.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  get(id: string, params?: ChargeGetParams, options?: Core.RequestOptions): Core.APIPromise<ChargeV1>;
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<ChargeV1>;
  get(
    id: string,
    params: ChargeGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChargeV1> {
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
   *
   * @example
   * ```ts
   * const chargeV1 = await client.charges.hold(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  hold(id: string, params?: ChargeHoldParams, options?: Core.RequestOptions): Core.APIPromise<ChargeV1>;
  hold(id: string, options?: Core.RequestOptions): Core.APIPromise<ChargeV1>;
  hold(
    id: string,
    params: ChargeHoldParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChargeV1> {
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
   *
   * @example
   * ```ts
   * const chargeV1 = await client.charges.release(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  release(id: string, params?: ChargeReleaseParams, options?: Core.RequestOptions): Core.APIPromise<ChargeV1>;
  release(id: string, options?: Core.RequestOptions): Core.APIPromise<ChargeV1>;
  release(
    id: string,
    params: ChargeReleaseParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChargeV1> {
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

  /**
   * Get a charge by id.
   *
   * @example
   * ```ts
   * const response = await client.charges.unmask(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  unmask(
    id: string,
    params?: ChargeUnmaskParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChargeUnmaskResponse>;
  unmask(id: string, options?: Core.RequestOptions): Core.APIPromise<ChargeUnmaskResponse>;
  unmask(
    id: string,
    params: ChargeUnmaskParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChargeUnmaskResponse> {
    if (isRequestOptions(params)) {
      return this.unmask(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/charges/${id}/unmask`, {
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

export interface ChargeV1 {
  data: ChargeV1.Data;

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

export namespace ChargeV1 {
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
    device: Shared.DeviceInfoV1;

    /**
     * Unique identifier for the charge in your database. This value must be unique
     * across all charges.
     */
    external_id: string;

    /**
     * Funding Ids
     */
    funding_ids: Array<string>;

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
    status_details: Shared.StatusDetailsV1;

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
    customer_details?: Shared.CustomerDetailsV1;

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
    paykey_details?: Shared.PaykeyDetailsV1;

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

      /**
       * Payment will simulate processing if not Standard.
       */
      sandbox_outcome?:
        | 'standard'
        | 'paid'
        | 'on_hold_daily_limit'
        | 'cancelled_for_fraud_risk'
        | 'cancelled_for_balance_check'
        | 'failed_insufficient_funds'
        | 'reversed_insufficient_funds'
        | 'failed_customer_dispute'
        | 'reversed_customer_dispute'
        | 'failed_closed_bank_account'
        | 'reversed_closed_bank_account';
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
  }
}

export interface ChargeUnmaskResponse {
  data: ChargeUnmaskResponse.Data;

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

export namespace ChargeUnmaskResponse {
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

    /**
     * The channel or mechanism through which the payment was authorized. Use
     * `internet` for payments made online or through a mobile app and `signed` for
     * signed agreements where there is a consent form or contract. Use `signed` for
     * PDF signatures.
     */
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
     * Funding Ids
     */
    funding_ids: Array<string>;

    /**
     * Paykey.
     */
    paykey: string;

    /**
     * Payment date.
     */
    payment_date: string;

    /**
     * The current status of the `charge` or `payout`.
     */
    status: 'created' | 'scheduled' | 'failed' | 'cancelled' | 'on_hold' | 'pending' | 'paid' | 'reversed';

    status_details: Shared.StatusDetailsV1;

    /**
     * Status history.
     */
    status_history: Array<Data.StatusHistory>;

    /**
     * Updated at.
     */
    updated_at: string;

    /**
     * Information about the customer associated with the charge or payout.
     */
    customer_details?: Shared.CustomerDetailsV1;

    /**
     * Effective at.
     */
    effective_at?: string | null;

    /**
     * Metadata.
     */
    metadata?: Record<string, string> | null;

    paykey_details?: Shared.PaykeyDetailsV1;

    /**
     * The payment rail used for the charge or payout.
     */
    payment_rail?: 'ach';

    /**
     * Processed at.
     */
    processed_at?: string | null;
  }

  export namespace Data {
    export interface Config {
      /**
       * Defines whether to check the customer's balance before processing the charge.
       */
      balance_check: 'required' | 'enabled' | 'disabled';

      /**
       * Payment will simulate processing if not Standard.
       */
      sandbox_outcome?:
        | 'standard'
        | 'paid'
        | 'on_hold_daily_limit'
        | 'cancelled_for_fraud_risk'
        | 'cancelled_for_balance_check'
        | 'failed_insufficient_funds'
        | 'reversed_insufficient_funds'
        | 'failed_customer_dispute'
        | 'reversed_customer_dispute'
        | 'failed_closed_bank_account'
        | 'reversed_closed_bank_account';
    }

    export interface Device {
      /**
       * Ip address.
       */
      ip_address: string;
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
  device: Shared.DeviceInfoV1;

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

    /**
     * Payment will simulate processing if not Standard.
     */
    sandbox_outcome?:
      | 'standard'
      | 'paid'
      | 'on_hold_daily_limit'
      | 'cancelled_for_fraud_risk'
      | 'cancelled_for_balance_check'
      | 'failed_insufficient_funds'
      | 'reversed_insufficient_funds'
      | 'failed_customer_dispute'
      | 'reversed_customer_dispute'
      | 'failed_closed_bank_account'
      | 'reversed_closed_bank_account';
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

export interface ChargeUnmaskParams {
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

export declare namespace Charges {
  export {
    type ChargeV1 as ChargeV1,
    type ChargeUnmaskResponse as ChargeUnmaskResponse,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeCancelParams as ChargeCancelParams,
    type ChargeGetParams as ChargeGetParams,
    type ChargeHoldParams as ChargeHoldParams,
    type ChargeReleaseParams as ChargeReleaseParams,
    type ChargeUnmaskParams as ChargeUnmaskParams,
  };
}
