// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as PaykeysAPI from './paykeys';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Review extends APIResource {
  /**
   * Update the status of a paykey when in review status
   */
  decision(
    id: string,
    params: ReviewDecisionParams,
    options?: RequestOptions,
  ): APIPromise<PaykeysAPI.PaykeyV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...body
    } = params;
    return this._client.patch(path`/v1/paykeys/${id}/review`, {
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
   * Get additional details about a paykey.
   */
  get(
    id: string,
    params: ReviewGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReviewGetResponse> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.get(path`/v1/paykeys/${id}/review`, {
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
   * Updates the decision of a paykey's review validation. This endpoint allows you
   * to refresh the outcome of a paykey's decision and is useful for correcting or
   * updating the status of a paykey's verification.
   */
  refreshReview(
    id: string,
    params: ReviewRefreshReviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaykeysAPI.PaykeyV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.put(path`/v1/paykeys/${id}/refresh_review`, {
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

export interface ReviewGetResponse {
  data: ReviewGetResponse.Data;

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

export namespace ReviewGetResponse {
  export interface Data {
    paykey_details: Data.PaykeyDetails;

    verification_details?: Data.VerificationDetails;
  }

  export namespace Data {
    export interface PaykeyDetails {
      /**
       * Unique identifier for the paykey.
       */
      id: string;

      config: PaykeyDetails.Config;

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

      balance?: PaykeyDetails.Balance;

      bank_data?: PaykeyDetails.BankData;

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

      status_details?: PaykeyDetails.StatusDetails;
    }

    export namespace PaykeyDetails {
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

    export interface VerificationDetails {
      /**
       * Unique identifier for the verification details.
       */
      id: string;

      breakdown: VerificationDetails.Breakdown;

      /**
       * Timestamp of when the verification was initiated.
       */
      created_at: string;

      decision: 'accept' | 'reject' | 'review';

      /**
       * Dictionary of all messages from the paykey verification process.
       */
      messages: { [key: string]: string };

      /**
       * Timestamp of the most recent update to the verification details.
       */
      updated_at: string;
    }

    export namespace VerificationDetails {
      export interface Breakdown {
        account_validation?: Breakdown.AccountValidation;

        name_match?: Breakdown.NameMatch;
      }

      export namespace Breakdown {
        export interface AccountValidation {
          codes: Array<string>;

          decision: 'accept' | 'reject' | 'review';

          reason?: string | null;
        }

        export interface NameMatch {
          codes: Array<string>;

          decision: 'accept' | 'reject' | 'review';

          correlation_score?: number | null;

          customer_name?: string | null;

          matched_name?: string | null;

          names_on_account?: Array<string> | null;

          reason?: string | null;
        }
      }
    }
  }
}

export interface ReviewDecisionParams {
  /**
   * Body param
   */
  status: 'active' | 'rejected';

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

export interface ReviewGetParams {
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

export interface ReviewRefreshReviewParams {
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

export declare namespace Review {
  export {
    type ReviewGetResponse as ReviewGetResponse,
    type ReviewDecisionParams as ReviewDecisionParams,
    type ReviewGetParams as ReviewGetParams,
    type ReviewRefreshReviewParams as ReviewRefreshReviewParams,
  };
}
