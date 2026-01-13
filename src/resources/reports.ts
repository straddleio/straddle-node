// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Reports extends APIResource {
  createTotalCustomersByStatus(
    params: ReportCreateTotalCustomersByStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportCreateTotalCustomersByStatusResponse> {
    const {
      'Correlation-Id': correlationID,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
    } = params ?? {};
    return this._client.post('/v1/reports/total_customers_by_status', {
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
  response_type: 'object' | 'array' | 'error' | 'none' | 'Object' | 'Array' | 'Error' | 'None';
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
