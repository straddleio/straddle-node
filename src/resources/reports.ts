// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class Reports extends APIResource {
  createTotalCustomersByStatus(
    params?: ReportCreateTotalCustomersByStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportCreateTotalCustomersByStatusResponse>;
  createTotalCustomersByStatus(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportCreateTotalCustomersByStatusResponse>;
  createTotalCustomersByStatus(
    params: ReportCreateTotalCustomersByStatusParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportCreateTotalCustomersByStatusResponse> {
    if (isRequestOptions(params)) {
      return this.createTotalCustomersByStatus({}, params);
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

export interface ReportCreateTotalCustomersByStatusResponse {
  data: ReportCreateTotalCustomersByStatusResponse.Data;

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

export namespace ReportCreateTotalCustomersByStatusResponse {
  export interface Data {
    inactive: number;

    pending: number;

    rejected: number;

    review: number;

    verified: number;
  }
}

export interface ReportCreateTotalCustomersByStatusParams {
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
    type ReportCreateTotalCustomersByStatusResponse as ReportCreateTotalCustomersByStatusResponse,
    type ReportCreateTotalCustomersByStatusParams as ReportCreateTotalCustomersByStatusParams,
  };
}
