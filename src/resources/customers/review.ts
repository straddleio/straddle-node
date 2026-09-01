// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import type { RequestOptions } from '../../internal/request-options';
import { buildHeaders } from '../../internal/headers';
import { path as __scalarPath } from '../../internal/utils/path';
import type * as CustomersAPI from './customers';
import type * as AccountsAPI from '../accounts';
import type * as BridgeAPI from '../bridge';

export class Review extends APIResource {
  /**
   * Returns the results of a customer's identity and fraud review. The response includes decisions, risk and correlation scores, reason codes, watchlist matches, and network alerts.
   *
   * @param {string} id - Unique identifier for the customer.
   * @param {ReviewListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomerReviewResponse>} OK
   *
   * @example
   * ```ts
   * const customerReview = await client.customers.review.list('7c9e6679-7425-40de-944b-e07fc1f90ae7');
   * ```
   */
  list(
    id: string,
    params: ReviewListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerReviewResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
    } = params ?? {};
    return this._client.get(__scalarPath`/v1/customers/${id}/review`, {
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Updates the verification decision for a customer. The customer's current `status` must be `review`.
   *
   * @param {string} id - Unique identifier for the customer.
   * @param {ReviewSetVerificationDecisionParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CustomersAPI.CustomerResponse>} OK
   *
   * @example
   * ```ts
   * const customer = await client.customers.review.setVerificationDecision(
   *   '7c9e6679-7425-40de-944b-e07fc1f90ae7',
   *   {
   *     status: 'verified',
   *   },
   * );
   * ```
   */
  setVerificationDecision(
    id: string,
    params: ReviewSetVerificationDecisionParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.CustomerResponse> {
    const {
      'Straddle-Account-Id': straddleAccountID,
      'Request-Id': requestID,
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      ...body
    } = params;
    return this._client.patch(__scalarPath`/v1/customers/${id}/review`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(straddleAccountID !== undefined ? { 'Straddle-Account-Id': straddleAccountID } : {}),
          ...(requestID !== undefined ? { 'Request-Id': requestID } : {}),
          ...(correlationID !== undefined ? { 'Correlation-Id': correlationID } : {}),
          ...(idempotencyKey !== undefined ? { 'Idempotency-Key': idempotencyKey } : {}),
        },
        options?.headers,
      ]),
    });
  }
}

export interface CustomerReviewResponse {
  /**
   * Metadata for an API request.
   */
  meta: AccountsAPI.ResponseMetadata;
  /**
   * Shape of the response envelope.
   * - `object` means `data` contains one JSON object.
   * - `array` means `data` contains an array of JSON objects.
   * - `error` means `error` contains the error details.
   * - `none` means the response contains no data.
   */
  response_type: BridgeAPI.ResponseType;
  data: CustomerReview;
}

export interface CustomerReview {
  customer_details: CustomersAPI.Customer;
  identity_details?: CustomerIdentityVerification;
}

export interface CustomerIdentityVerification {
  /**
   * Unique identifier for the review.
   * @format uuid
   */
  review_id: string;
  decision: VerificationDecision;
  /**
   * Results for each customer verification check, including decisions, risk scores, and correlation scores.
   */
  breakdown: CustomerIdentityVerification.Breakdown;
  /**
   * Timestamp of when the review was initiated.
   * @format date-time
   */
  created_at: string;
  /**
   * Timestamp of the most recent update to the review.
   * @format date-time
   */
  updated_at: string;
  /**
   * Messages returned by the customer verification process.
   */
  messages?: Record<string, string> | null;
  network_alerts?: IdentityVerificationAlerts;
  watch_list?: IdentityVerificationWatchlist;
  kyc?: CustomerKYCVerification;
  reputation?: ReputationCheck;
}

export namespace CustomerIdentityVerification {
  export interface Breakdown {
    address?: IdentityVerificationBreakdown;
    email?: IdentityVerificationBreakdown;
    fraud?: IdentityVerificationBreakdown;
    phone?: IdentityVerificationBreakdown;
    synthetic?: IdentityVerificationBreakdown;
    business_identification?: IdentityVerificationBreakdown;
    business_validation?: IdentityVerificationBreakdown;
    business_evaluation?: IdentityVerificationBreakdown;
  }
}

export type VerificationDecision = 'accept' | 'reject' | 'review';

export interface IdentityVerificationBreakdown {
  decision?: VerificationDecision;
  /**
   * List of specific result codes from the fraud and risk screening.
   */
  codes?: Array<string> | null;
  /**
   * Predicts the inherent risk associated with the customer for a given module. A higher score indicates a greater likelihood of fraud.
   * @format double
   */
  risk_score?: number | null;
  /**
   * Represents the strength of the correlation between provided and known information. A higher score indicates a stronger correlation.
   * @format double
   */
  correlation_score?: number | null;
  correlation?: CorrelationBucket;
}

export interface IdentityVerificationAlerts {
  decision?: VerificationDecision;
  /**
   * List of specific result codes from the consortium alert screening.
   */
  codes?: Array<string> | null;
  /**
   * Any alerts or flags raised during the consortium alert screening.
   */
  alerts?: Array<string> | null;
}

export interface IdentityVerificationWatchlist {
  decision?: VerificationDecision;
  /**
   * Result codes from Straddle watchlist screening.
   */
  codes?: Array<string> | null;
  /**
   * Names of watchlists with matches.
   */
  matched?: Array<string> | null;
  /**
   * Details for matches found during watchlist screening.
   */
  matches?: Array<IdentityVerificationWatchlistMatch> | null;
}

export interface CustomerKYCVerification {
  /**
   * Results for each Know Your Customer (KYC) validation.
   */
  validations: CustomerKYCVerification.Validations;
  decision?: VerificationDecision;
  /**
   * Result codes from Know Your Customer (KYC) screening.
   */
  codes?: Array<string> | null;
}

export namespace CustomerKYCVerification {
  export interface Validations {
    /**
     * Whether the customer's first name passed validation.
     */
    first_name?: boolean;
    /**
     * Whether the customer's last name passed validation.
     */
    last_name?: boolean;
    /**
     * Whether the customer's address passed validation.
     */
    address?: boolean;
    /**
     * Whether the customer's city passed validation.
     */
    city?: boolean;
    /**
     * Whether the customer's state passed validation.
     */
    state?: boolean;
    /**
     * Whether the customer's ZIP code passed validation.
     */
    zip?: boolean;
    /**
     * Whether the customer's phone passed validation.
     */
    phone?: boolean;
    /**
     * Whether the customer's date of birth passed validation.
     */
    dob?: boolean;
    /**
     * Whether the customer's Social Security number passed validation.
     */
    ssn?: boolean;
    /**
     * Whether the customer's email passed validation.
     */
    email?: boolean;
  }
}

export interface ReputationCheck {
  decision?: VerificationDecision;
  /**
   * Specific codes related to the Straddle reputation screening results.
   */
  codes?: Array<string> | null;
  /**
   * Risk score produced by the reputation check.
   * @format double
   */
  risk_score?: number | null;
  insights?: ReputationInsights;
}

export type CorrelationBucket = 'low_confidence' | 'potential_match' | 'likely_match' | 'high_confidence';

export interface IdentityVerificationWatchlistMatch {
  /**
   * Name of the watchlist that contains the matching record.
   */
  list_name: string;
  /**
   * Source URLs associated with the match.
   */
  urls: Array<string>;
  /**
   * Customer fields that match the watchlist record.
   */
  match_fields: Array<string>;
  correlation: CorrelationBucket;
}

export interface ReputationInsights {
  /**
   * Number of fraudulent ACH transactions.
   * @format int32
   */
  ach_fraud_transactions_count?: number | null;
  /**
   * Total amount of fraudulent ACH transactions.
   * @format double
   */
  ach_fraud_transactions_total_amount?: number | null;
  /**
   * Dates when fraudulent ACH transactions occurred.
   */
  ach_fraud_transactions_dates?: Array<string> | null;
  /**
   * Number of returned ACH transactions.
   * @format int32
   */
  ach_returned_transactions_count?: number | null;
  /**
   * Total amount of returned ACH transactions.
   * @format double
   */
  ach_returned_transactions_total_amount?: number | null;
  /**
   * Dates when ACH transactions were returned.
   */
  ach_returned_transactions_dates?: Array<string> | null;
  /**
   * Number of fraudulent card transactions.
   * @format int32
   */
  card_fraud_transactions_count?: number | null;
  /**
   * Total amount of fraudulent card transactions.
   * @format double
   */
  card_fraud_transactions_total_amount?: number | null;
  /**
   * Dates when fraudulent card transactions occurred.
   */
  card_fraud_transactions_dates?: Array<string> | null;
  /**
   * Number of disputed card transactions.
   * @format int32
   */
  card_disputed_transactions_count?: number | null;
  /**
   * Total amount of disputed card transactions.
   * @format double
   */
  card_disputed_transactions_total_amount?: number | null;
  /**
   * Dates when card transactions were disputed.
   */
  card_disputed_transactions_dates?: Array<string> | null;
  /**
   * Number of stopped card transactions.
   * @format int32
   */
  card_stopped_transactions_count?: number | null;
  /**
   * Dates when card transactions were stopped.
   */
  card_stopped_transactions_dates?: Array<string> | null;
  /**
   * Number of accounts associated with the identity.
   * @format int32
   */
  accounts_count?: number | null;
  /**
   * Number of active accounts associated with the identity.
   * @format int32
   */
  accounts_active_count?: number | null;
  /**
   * Number of closed accounts associated with the identity.
   * @format int32
   */
  accounts_closed_count?: number | null;
  /**
   * Dates when accounts associated with the identity were closed.
   */
  accounts_closed_dates?: Array<string> | null;
  /**
   * Number of accounts associated with fraud.
   * @format int32
   */
  accounts_fraud_count?: number | null;
  /**
   * Total fraud loss associated with the accounts.
   * @format double
   */
  accounts_fraud_loss_total_amount?: number | null;
  /**
   * Dates when accounts were labeled as fraudulent.
   */
  accounts_fraud_labeled_dates?: Array<string> | null;
  /**
   * Number of applications associated with the identity.
   * @format int32
   */
  applications_count?: number | null;
  /**
   * Dates when applications associated with the identity were submitted.
   */
  applications_dates?: Array<string> | null;
  /**
   * Number of approved applications associated with the identity.
   * @format int32
   */
  applications_approved_count?: number | null;
  /**
   * Number of declined applications associated with the identity.
   * @format int32
   */
  applications_declined_count?: number | null;
  /**
   * Number of applications associated with fraud.
   * @format int32
   */
  applications_fraud_count?: number | null;
  /**
   * Number of financial institutions associated with the identity.
   * @format int32
   */
  user_institution_count?: number | null;
  /**
   * Number of dates of birth associated with the identity.
   * @format int32
   */
  user_dob_count?: number | null;
  /**
   * Number of mobile numbers associated with the identity.
   * @format int32
   */
  user_mobile_count?: number | null;
  /**
   * Number of email addresses associated with the identity.
   * @format int32
   */
  user_email_count?: number | null;
  /**
   * Number of addresses associated with the identity.
   * @format int32
   */
  user_address_count?: number | null;
  /**
   * Number of active profiles associated with the identity.
   * @format int32
   */
  user_active_profile_count?: number | null;
  /**
   * Number of closed profiles associated with the identity.
   * @format int32
   */
  user_closed_profile_count?: number | null;
}

export interface ReviewListParams {
  /**
   * For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
}

export interface ReviewSetVerificationDecisionParams {
  /**
   * Header param: For platform requests, the embedded account UUID that sets the request scope.
   * @format uuid
   */
  'Straddle-Account-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing one request.
   */
  'Request-Id'?: string;
  /**
   * Header param: Optional client-generated identifier for tracing a series of related requests.
   */
  'Correlation-Id'?: string;
  /**
   * Header param: Optional client-generated key for an idempotent request.
   * @minLength 10
   * @maxLength 40
   */
  'Idempotency-Key'?: string;
  /**
   * Body param: The final status of the customer review.
   */
  status: 'verified' | 'rejected';
}
export declare namespace Review {
  export {
    type CustomerReviewResponse as CustomerReviewResponse,
    type CustomerReview as CustomerReview,
    type CustomerIdentityVerification as CustomerIdentityVerification,
    type VerificationDecision as VerificationDecision,
    type IdentityVerificationBreakdown as IdentityVerificationBreakdown,
    type IdentityVerificationAlerts as IdentityVerificationAlerts,
    type IdentityVerificationWatchlist as IdentityVerificationWatchlist,
    type CustomerKYCVerification as CustomerKYCVerification,
    type ReputationCheck as ReputationCheck,
    type CorrelationBucket as CorrelationBucket,
    type IdentityVerificationWatchlistMatch as IdentityVerificationWatchlistMatch,
    type ReputationInsights as ReputationInsights,
    type ReviewListParams as ReviewListParams,
    type ReviewSetVerificationDecisionParams as ReviewSetVerificationDecisionParams,
  };
}
