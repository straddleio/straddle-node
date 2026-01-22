// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as LinkAPI from './link';
import {
  Link,
  LinkBankAccountParams,
  LinkCreatePaykeyParams,
  LinkCreatePaykeyResponse,
  LinkCreateTanParams,
  LinkCreateTanResponse,
  LinkPlaidParams,
} from './link';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Bridge extends APIResource {
  link: LinkAPI.Link = new LinkAPI.Link(this._client);

  /**
   * Use this endpoint to generate a session token for use in the Bridge widget.
   */
  initialize(params: BridgeInitializeParams, options?: RequestOptions): APIPromise<BridgeTokenV1> {
    const {
      'Correlation-Id': correlationID,
      'Idempotency-Key': idempotencyKey,
      'Request-Id': requestID,
      'Straddle-Account-Id': straddleAccountID,
      ...body
    } = params;
    return this._client.post('/v1/bridge/initialize', {
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
}

export interface BridgeTokenV1 {
  data: BridgeTokenV1.Data;

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

export namespace BridgeTokenV1 {
  export interface Data {
    /**
     * JWT Token to use in the bridge widget.
     */
    bridge_token: string;
  }
}

export interface BridgeInitializeParams {
  /**
   * Body param: The Straddle generated unique identifier of the `customer` to create
   * a bridge token for.
   */
  customer_id: string;

  /**
   * Body param
   */
  config?: BridgeInitializeParams.Config;

  /**
   * Body param: Unique identifier for the paykey in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

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

export namespace BridgeInitializeParams {
  export interface Config {
    processing_method?: 'inline' | 'background' | 'skip';

    sandbox_outcome?: 'standard' | 'active' | 'rejected' | 'review';
  }
}

Bridge.Link = Link;

export declare namespace Bridge {
  export { type BridgeTokenV1 as BridgeTokenV1, type BridgeInitializeParams as BridgeInitializeParams };

  export {
    Link as Link,
    type LinkCreatePaykeyResponse as LinkCreatePaykeyResponse,
    type LinkCreateTanResponse as LinkCreateTanResponse,
    type LinkBankAccountParams as LinkBankAccountParams,
    type LinkCreatePaykeyParams as LinkCreatePaykeyParams,
    type LinkCreateTanParams as LinkCreateTanParams,
    type LinkPlaidParams as LinkPlaidParams,
  };
}
