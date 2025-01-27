// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Reports extends APIResource {
  totalCustomersByStatus(
    params?: ReportTotalCustomersByStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportTotalCustomersByStatusResponse>;
  totalCustomersByStatus(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportTotalCustomersByStatusResponse>;
  totalCustomersByStatus(
    params: ReportTotalCustomersByStatusParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportTotalCustomersByStatusResponse> {
    if (isRequestOptions(params)) {
      return this.totalCustomersByStatus({}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.post('/v1/reports/total_customers_by_status', {
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

export interface ReportTotalCustomersByStatusResponse {
  data: ReportTotalCustomersByStatusResponse.Data;

  /**
   * Metadata about the API request, including an identifier and timestamp.
   */
  meta: ReportTotalCustomersByStatusResponse.Meta;

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

export namespace ReportTotalCustomersByStatusResponse {
  export interface Data {
    inactive: number;

    pending: number;

    rejected: number;

    review: number;

    verified: number;
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

export interface ReportTotalCustomersByStatusParams {
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

export declare namespace Reports {
  export {
    type ReportTotalCustomersByStatusResponse as ReportTotalCustomersByStatusResponse,
    type ReportTotalCustomersByStatusParams as ReportTotalCustomersByStatusParams,
  };
}
