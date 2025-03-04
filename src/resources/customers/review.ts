// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Review extends APIResource {
  /**
   * Updates the status of a customer's identity decision. This endpoint allows you
   * to modify the outcome of a customer risk screening and is useful for correcting
   * or updating the status of a customer's verification. Note that this endpoint is
   * only available for customers with a current status of `review`.
   */
  decision(
    id: string,
    params: ReviewDecisionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.CustomerV1ItemResponse> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.patch(`/v1/customers/${id}/review`, {
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
   * Retrieves and analyzes the results of a customer's identity validation and fraud
   * score. This endpoint provides a comprehensive breakdown of the validation
   * outcome, including:
   *
   * - Risk and correlation scores
   * - Reason codes for the decision
   * - Results of watchlist screening
   * - Any network alerts detected Use this endpoint to gain insights into the
   *   verification process and make informed decisions about customer onboarding.
   */
  get(id: string, params?: ReviewGetParams, options?: Core.RequestOptions): Core.APIPromise<CustomerReviewV1>;
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<CustomerReviewV1>;
  get(
    id: string,
    params: ReviewGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerReviewV1> {
    if (isRequestOptions(params)) {
      return this.get(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/customers/${id}/review`, {
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

export interface CustomerReviewV1 {
  data: CustomerReviewV1.Data;

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
  response_type: Shared.ResponseTypeEnum;
}

export namespace CustomerReviewV1 {
  export interface Data {
    customer_details: Shared.CustomerV1;

    identity_details?: Data.IdentityDetails;
  }

  export namespace Data {
    export interface IdentityDetails {
      /**
       * Detailed breakdown of the customer verification results, including decisions,
       * risk scores, correlation score, and more.
       */
      breakdown: IdentityDetails.Breakdown;

      /**
       * Timestamp of when the review was initiated.
       */
      created_at: string;

      decision: Shared.IdentityDecisionV1;

      /**
       * Unique identifier for the review.
       */
      review_id: string;

      /**
       * Timestamp of the most recent update to the review.
       */
      updated_at: string;

      kyc?: IdentityDetails.KYC;

      /**
       * Dictionary of all messages from the customer verification process.
       */
      messages?: Record<string, string> | null;

      network_alerts?: IdentityDetails.NetworkAlerts;

      watch_list?: IdentityDetails.WatchList;
    }

    export namespace IdentityDetails {
      /**
       * Detailed breakdown of the customer verification results, including decisions,
       * risk scores, correlation score, and more.
       */
      export interface Breakdown {
        address?: Shared.IdentityVerificationBreakdownV1;

        email?: Shared.IdentityVerificationBreakdownV1;

        fraud?: Shared.IdentityVerificationBreakdownV1;

        phone?: Shared.IdentityVerificationBreakdownV1;

        synthetic?: Shared.IdentityVerificationBreakdownV1;
      }

      export interface KYC {
        /**
         * Boolean values indicating the result of each validation in the KYC process.
         */
        validations: KYC.Validations;

        /**
         * List of specific result codes from the KYC screening process.
         */
        codes?: Array<string> | null;

        decision?: Shared.IdentityDecisionV1;
      }

      export namespace KYC {
        /**
         * Boolean values indicating the result of each validation in the KYC process.
         */
        export interface Validations {
          address?: boolean;

          city?: boolean;

          dob?: boolean;

          email?: boolean;

          first_name?: boolean;

          last_name?: boolean;

          phone?: boolean;

          ssn?: boolean;

          state?: boolean;

          zip?: boolean;
        }
      }

      export interface NetworkAlerts {
        /**
         * Any alerts or flags raised during the consortium alert screening.
         */
        alerts?: Array<string> | null;

        /**
         * List of specific result codes from the consortium alert screening.
         */
        codes?: Array<string> | null;

        decision?: Shared.IdentityDecisionV1;
      }

      export interface WatchList {
        /**
         * Specific codes related to the Straddle watchlist screening results.
         */
        codes?: Array<string> | null;

        decision?: Shared.IdentityDecisionV1;

        /**
         * Information about any matches found during screening.
         */
        matched?: Array<string> | null;
      }
    }
  }
}

export interface IdentityVerificationBreakdownV1 {
  /**
   * List of specific result codes from the fraud and risk screening.
   */
  codes?: Array<string> | null;

  /**
   * Represents the strength of the correlation between provided and known
   * information. A higher score indicates a stronger correlation.
   */
  correlation_score?: number | null;

  decision?: Shared.IdentityDecisionV1;

  /**
   * Predicts the inherent risk associated with the customer for a given module. A
   * higher score indicates a greater likelihood of fraud.
   */
  risk_score?: number | null;
}

export interface ReviewDecisionParams {
  /**
   * Body param: The final status of the customer review.
   */
  status: 'verified' | 'rejected';

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

export declare namespace Review {
  export {
    type CustomerReviewV1 as CustomerReviewV1,
    type IdentityVerificationBreakdownV1 as IdentityVerificationBreakdownV1,
    type ReviewDecisionParams as ReviewDecisionParams,
    type ReviewGetParams as ReviewGetParams,
  };
}
