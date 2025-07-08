// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
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

export class Bridge extends APIResource {
  link: LinkAPI.Link = new LinkAPI.Link(this._client);

  /**
   * Use this endpoint to generate a session token for use in the Bridge widget.
   */
  initialize(params: BridgeInitializeParams, options?: Core.RequestOptions): Core.APIPromise<BridgeTokenV1> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.post('/v1/bridge/initialize', {
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
   * Body param:
   */
  config?: BridgeInitializeParams.Config;

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

export namespace BridgeInitializeParams {
  export interface Config {
    sandbox_outcome?: 'standard' | 'active' | 'rejected';
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
