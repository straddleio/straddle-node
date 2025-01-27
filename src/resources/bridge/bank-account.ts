// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class BankAccount extends APIResource {
  /**
   * Use Bridge to create a new paykey using a bank routing and account number as the
   * source. This endpoint allows you to create a secure payment token linked to a
   * specific bank account.
   */
  create(params: BankAccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Paykey> {
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
}

export interface BankAccountCreateParams {
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

export declare namespace BankAccount {
  export { type BankAccountCreateParams as BankAccountCreateParams };
}
