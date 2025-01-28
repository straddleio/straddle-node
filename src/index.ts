// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type PageNumberSchemaParams, PageNumberSchemaResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Charge,
  ChargeCancelParams,
  ChargeCreateParams,
  ChargeGetParams,
  ChargeHoldParams,
  ChargeReleaseParams,
  ChargeUpdateParams,
  Charges,
} from './resources/charges';
import {
  FundingEventGetParams,
  FundingEventListParams,
  FundingEventSummaryItem,
  FundingEventSummaryPaged,
  FundingEventSummaryPagedDataPageNumberSchema,
  FundingEvents,
} from './resources/funding-events';
import {
  Paykey,
  PaykeyGetParams,
  PaykeyListParams,
  PaykeyRevealParams,
  PaykeyRevealResponse,
  PaykeySummaryPaged,
  PaykeySummaryPagedDataPageNumberSchema,
  PaykeyUnmasked,
  PaykeyUnmaskedParams,
  Paykeys,
} from './resources/paykeys';
import {
  PaymentListParams,
  PaymentSummaryPaged,
  PaymentSummaryPagedDataPageNumberSchema,
  Payments,
} from './resources/payments';
import {
  Payout,
  PayoutCancelParams,
  PayoutCreateParams,
  PayoutGetParams,
  PayoutHoldParams,
  PayoutReleaseParams,
  PayoutUpdateParams,
  Payouts,
} from './resources/payouts';
import { Bridge, BridgeInitializeParams, BridgeToken } from './resources/bridge/bridge';
import {
  Customer,
  CustomerCreateParams,
  CustomerDeleteParams,
  CustomerGetParams,
  CustomerListParams,
  CustomerSummaryPaged,
  CustomerSummaryPagedDataPageNumberSchema,
  CustomerUnmasked,
  CustomerUnmaskedParams,
  CustomerUpdateParams,
  Customers,
} from './resources/customers/customers';
import { Embed } from './resources/embed/embed';

const environments = {
  production: 'https://production.straddle.io',
  sandbox: 'https://sandbox.straddle.io',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Api Key for authenticating with the Straddle API.
   */
  apiKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://production.straddle.io`
   * - `sandbox` corresponds to `https://sandbox.straddle.io`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['STRADDLE_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Straddle API.
 */
export class Straddle extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Straddle API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['STRADDLE_API_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['STRADDLE_BASE_URL'] ?? https://production.straddle.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('STRADDLE_BASE_URL'),
    apiKey = Core.readEnv('STRADDLE_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.StraddleError(
        "The STRADDLE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Straddle client with an apiKey option, like new Straddle({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.StraddleError(
        'Ambiguous URL; The `baseURL` option (or STRADDLE_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  embed: API.Embed = new API.Embed(this);
  bridge: API.Bridge = new API.Bridge(this);
  customers: API.Customers = new API.Customers(this);
  paykeys: API.Paykeys = new API.Paykeys(this);
  charges: API.Charges = new API.Charges(this);
  fundingEvents: API.FundingEvents = new API.FundingEvents(this);
  payments: API.Payments = new API.Payments(this);
  payouts: API.Payouts = new API.Payouts(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Straddle = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static StraddleError = Errors.StraddleError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Straddle.Embed = Embed;
Straddle.Bridge = Bridge;
Straddle.Customers = Customers;
Straddle.CustomerSummaryPagedDataPageNumberSchema = CustomerSummaryPagedDataPageNumberSchema;
Straddle.Paykeys = Paykeys;
Straddle.PaykeySummaryPagedDataPageNumberSchema = PaykeySummaryPagedDataPageNumberSchema;
Straddle.Charges = Charges;
Straddle.FundingEvents = FundingEvents;
Straddle.FundingEventSummaryPagedDataPageNumberSchema = FundingEventSummaryPagedDataPageNumberSchema;
Straddle.Payments = Payments;
Straddle.PaymentSummaryPagedDataPageNumberSchema = PaymentSummaryPagedDataPageNumberSchema;
Straddle.Payouts = Payouts;
export declare namespace Straddle {
  export type RequestOptions = Core.RequestOptions;

  export import PageNumberSchema = Pagination.PageNumberSchema;
  export {
    type PageNumberSchemaParams as PageNumberSchemaParams,
    type PageNumberSchemaResponse as PageNumberSchemaResponse,
  };

  export { Embed as Embed };

  export {
    Bridge as Bridge,
    type BridgeToken as BridgeToken,
    type BridgeInitializeParams as BridgeInitializeParams,
  };

  export {
    Customers as Customers,
    type Customer as Customer,
    type CustomerSummaryPaged as CustomerSummaryPaged,
    type CustomerUnmasked as CustomerUnmasked,
    CustomerSummaryPagedDataPageNumberSchema as CustomerSummaryPagedDataPageNumberSchema,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerDeleteParams as CustomerDeleteParams,
    type CustomerGetParams as CustomerGetParams,
    type CustomerUnmaskedParams as CustomerUnmaskedParams,
  };

  export {
    Paykeys as Paykeys,
    type Paykey as Paykey,
    type PaykeySummaryPaged as PaykeySummaryPaged,
    type PaykeyUnmasked as PaykeyUnmasked,
    type PaykeyRevealResponse as PaykeyRevealResponse,
    PaykeySummaryPagedDataPageNumberSchema as PaykeySummaryPagedDataPageNumberSchema,
    type PaykeyListParams as PaykeyListParams,
    type PaykeyGetParams as PaykeyGetParams,
    type PaykeyRevealParams as PaykeyRevealParams,
    type PaykeyUnmaskedParams as PaykeyUnmaskedParams,
  };

  export {
    Charges as Charges,
    type Charge as Charge,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeCancelParams as ChargeCancelParams,
    type ChargeGetParams as ChargeGetParams,
    type ChargeHoldParams as ChargeHoldParams,
    type ChargeReleaseParams as ChargeReleaseParams,
  };

  export {
    FundingEvents as FundingEvents,
    type FundingEventSummaryItem as FundingEventSummaryItem,
    type FundingEventSummaryPaged as FundingEventSummaryPaged,
    FundingEventSummaryPagedDataPageNumberSchema as FundingEventSummaryPagedDataPageNumberSchema,
    type FundingEventListParams as FundingEventListParams,
    type FundingEventGetParams as FundingEventGetParams,
  };

  export {
    Payments as Payments,
    type PaymentSummaryPaged as PaymentSummaryPaged,
    PaymentSummaryPagedDataPageNumberSchema as PaymentSummaryPagedDataPageNumberSchema,
    type PaymentListParams as PaymentListParams,
  };

  export {
    Payouts as Payouts,
    type Payout as Payout,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutGetParams as PayoutGetParams,
    type PayoutHoldParams as PayoutHoldParams,
    type PayoutReleaseParams as PayoutReleaseParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  StraddleError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Straddle;
