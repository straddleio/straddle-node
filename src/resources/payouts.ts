// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class Payouts extends APIResource {
  /**
   * Use payouts to send money to your customers.
   *
   * @example
   * ```ts
   * const payoutV1 = await client.payouts.create({
   *   amount: 10000,
   *   currency: 'currency',
   *   description: 'Vendor invoice payment',
   *   device: { ip_address: '192.168.1.1' },
   *   external_id: 'external_id',
   *   paykey: 'paykey',
   *   payment_date: '2019-12-27',
   * });
   * ```
   */
  create(params: PayoutCreateParams, options?: Core.RequestOptions): Core.APIPromise<PayoutV1> {
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
   * Update the details of a payout prior to processing. The status of the payout
   * must be `created`, `scheduled`, or `on_hold`.
   *
   * @example
   * ```ts
   * const payoutV1 = await client.payouts.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     amount: 10000,
   *     description: 'description',
   *     payment_date: '2019-12-27',
   *   },
   * );
   * ```
   */
  update(id: string, params: PayoutUpdateParams, options?: Core.RequestOptions): Core.APIPromise<PayoutV1> {
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
   *
   * @example
   * ```ts
   * const payoutV1 = await client.payouts.cancel(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { reason: 'reason' },
   * );
   * ```
   */
  cancel(id: string, params: PayoutCancelParams, options?: Core.RequestOptions): Core.APIPromise<PayoutV1> {
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
   * Retrieves the details of an existing payout. Supply the unique payout `id` to
   * retrieve the corresponding payout information.
   *
   * @example
   * ```ts
   * const payoutV1 = await client.payouts.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  get(id: string, params?: PayoutGetParams, options?: Core.RequestOptions): Core.APIPromise<PayoutV1>;
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<PayoutV1>;
  get(
    id: string,
    params: PayoutGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayoutV1> {
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
   * Hold a payout to prevent it from being processed. The status of the payout must
   * be `created`, `scheduled`, or `on_hold`.
   *
   * @example
   * ```ts
   * const payoutV1 = await client.payouts.hold(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { reason: 'reason' },
   * );
   * ```
   */
  hold(id: string, params: PayoutHoldParams, options?: Core.RequestOptions): Core.APIPromise<PayoutV1> {
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
   *
   * @example
   * ```ts
   * const payoutV1 = await client.payouts.release(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { reason: 'reason' },
   * );
   * ```
   */
  release(id: string, params: PayoutReleaseParams, options?: Core.RequestOptions): Core.APIPromise<PayoutV1> {
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

  /**
   * Get a payout by id.
   *
   * @example
   * ```ts
   * const response = await client.payouts.unmask(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  unmask(
    id: string,
    params?: PayoutUnmaskParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayoutUnmaskResponse>;
  unmask(id: string, options?: Core.RequestOptions): Core.APIPromise<PayoutUnmaskResponse>;
  unmask(
    id: string,
    params: PayoutUnmaskParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayoutUnmaskResponse> {
    if (isRequestOptions(params)) {
      return this.unmask(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/payouts/${id}/unmask`, {
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

export interface PayoutV1 {
  data: PayoutV1.Data;

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

export namespace PayoutV1 {
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
     * Configuration for the payout.
     */
    config: unknown;

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
    device: Shared.DeviceInfoV1;

    /**
     * Unique identifier for the payout in your database. This value must be unique
     * across all payouts.
     */
    external_id: string;

    /**
     * Funding Ids
     */
    funding_ids: Array<string>;

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
    status_details: Shared.StatusDetailsV1;

    /**
     * History of the status changes for the payout.
     */
    status_history: Array<Data.StatusHistory>;

    /**
     * The time the payout was created.
     */
    created_at?: string | null;

    /**
     * Information about the customer associated with the payout.
     */
    customer_details?: Shared.CustomerDetailsV1;

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
    paykey_details?: Shared.PaykeyDetailsV1;

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

export interface PayoutUnmaskResponse {
  data: PayoutUnmaskResponse.Data;

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

export namespace PayoutUnmaskResponse {
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
     * Created at.
     */
    created_at?: string | null;

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
  device: Shared.DeviceInfoV1;

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

export interface PayoutUnmaskParams {
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

export declare namespace Payouts {
  export {
    type PayoutV1 as PayoutV1,
    type PayoutUnmaskResponse as PayoutUnmaskResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutGetParams as PayoutGetParams,
    type PayoutHoldParams as PayoutHoldParams,
    type PayoutReleaseParams as PayoutReleaseParams,
    type PayoutUnmaskParams as PayoutUnmaskParams,
  };
}
