// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as LinkAPI from './link';
import {
  Link,
  LinkBankAccountParams,
  LinkBankAccountResponse,
  LinkPlaidParams,
  LinkPlaidResponse,
} from './link';

export class Bridge extends APIResource {
  link: LinkAPI.Link = new LinkAPI.Link(this._client);

  /**
   * Create a JWT token to use in the bridge widget
   */
  initialize(params: BridgeInitializeParams, options?: Core.RequestOptions): Core.APIPromise<BridgeToken> {
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

export interface BridgeToken {
  data: BridgeToken.Data;

  meta: BridgeToken.Meta;

  response_type: 'object' | 'array' | 'error' | 'none';
}

export namespace BridgeToken {
  export interface Data {
    /**
     * JWT Token to use in the bridge widget.
     */
    bridge_token: string;
  }

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

export interface BridgeInitializeParams {
  /**
   * Body param: Customer Id to create token for.
   */
  customer_id: string;

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

Bridge.Link = Link;

export declare namespace Bridge {
  export { type BridgeToken as BridgeToken, type BridgeInitializeParams as BridgeInitializeParams };

  export {
    Link as Link,
    type LinkBankAccountResponse as LinkBankAccountResponse,
    type LinkPlaidResponse as LinkPlaidResponse,
    type LinkBankAccountParams as LinkBankAccountParams,
    type LinkPlaidParams as LinkPlaidParams,
  };
}
