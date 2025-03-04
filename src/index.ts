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
  ChargeCancelParams,
  ChargeCreateParams,
  ChargeGetParams,
  ChargeHoldParams,
  ChargeReleaseParams,
  ChargeUpdateParams,
  ChargeV1,
  Charges,
} from './resources/charges';
import {
  FundingEventGetParams,
  FundingEventListParams,
  FundingEventSummaryItemV1,
  FundingEventSummaryPagedV1,
  FundingEvents,
} from './resources/funding-events';
import {
  PaykeyGetParams,
  PaykeyListParams,
  PaykeyRevealParams,
  PaykeyRevealResponse,
  PaykeySummaryPagedV1,
  PaykeySummaryPagedV1DataPageNumberSchema,
  PaykeyUnmaskedParams,
  PaykeyUnmaskedV1,
  PaykeyV1,
  Paykeys,
} from './resources/paykeys';
import {
  PaymentListParams,
  PaymentSummaryPagedV1,
  PaymentSummaryPagedV1DataPageNumberSchema,
  Payments,
} from './resources/payments';
import {
  PayoutCancelParams,
  PayoutCreateParams,
  PayoutGetParams,
  PayoutHoldParams,
  PayoutReleaseParams,
  PayoutUpdateParams,
  PayoutV1,
  Payouts,
} from './resources/payouts';
import {
  ReportCreateTotalCustomersByStatusParams,
  ReportCreateTotalCustomersByStatusResponse,
  Reports,
} from './resources/reports';
import { Bridge, BridgeInitializeParams, BridgeTokenV1 } from './resources/bridge/bridge';
import {
  CustomerAddressV1,
  CustomerCreateParams,
  CustomerDeleteParams,
  CustomerGetParams,
  CustomerListParams,
  CustomerSummaryPagedV1,
  CustomerSummaryPagedV1DataPageNumberSchema,
  CustomerUnmaskedParams,
  CustomerUnmaskedV1,
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
  reports: API.Reports = new API.Reports(this);

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
Straddle.CustomerSummaryPagedV1DataPageNumberSchema = CustomerSummaryPagedV1DataPageNumberSchema;
Straddle.Paykeys = Paykeys;
Straddle.PaykeySummaryPagedV1DataPageNumberSchema = PaykeySummaryPagedV1DataPageNumberSchema;
Straddle.Charges = Charges;
Straddle.FundingEvents = FundingEvents;
Straddle.Payments = Payments;
Straddle.PaymentSummaryPagedV1DataPageNumberSchema = PaymentSummaryPagedV1DataPageNumberSchema;
Straddle.Payouts = Payouts;
Straddle.Reports = Reports;
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
    type BridgeTokenV1 as BridgeTokenV1,
    type BridgeInitializeParams as BridgeInitializeParams,
  };

  export {
    Customers as Customers,
    type CustomerAddressV1 as CustomerAddressV1,
    type CustomerSummaryPagedV1 as CustomerSummaryPagedV1,
    type CustomerUnmaskedV1 as CustomerUnmaskedV1,
    type CustomerV1 as CustomerV1,
    type DeviceUnmaskedV1 as DeviceUnmaskedV1,
    CustomerSummaryPagedV1DataPageNumberSchema as CustomerSummaryPagedV1DataPageNumberSchema,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerDeleteParams as CustomerDeleteParams,
    type CustomerGetParams as CustomerGetParams,
    type CustomerUnmaskedParams as CustomerUnmaskedParams,
  };

  export {
    Paykeys as Paykeys,
    type PaykeySummaryPagedV1 as PaykeySummaryPagedV1,
    type PaykeyUnmaskedV1 as PaykeyUnmaskedV1,
    type PaykeyV1 as PaykeyV1,
    type PaykeyRevealResponse as PaykeyRevealResponse,
    PaykeySummaryPagedV1DataPageNumberSchema as PaykeySummaryPagedV1DataPageNumberSchema,
    type PaykeyListParams as PaykeyListParams,
    type PaykeyGetParams as PaykeyGetParams,
    type PaykeyRevealParams as PaykeyRevealParams,
    type PaykeyUnmaskedParams as PaykeyUnmaskedParams,
  };

  export {
    Charges as Charges,
    type ChargeV1 as ChargeV1,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeCancelParams as ChargeCancelParams,
    type ChargeGetParams as ChargeGetParams,
    type ChargeHoldParams as ChargeHoldParams,
    type ChargeReleaseParams as ChargeReleaseParams,
  };

  export {
    FundingEvents as FundingEvents,
    type FundingEventSummaryItemV1 as FundingEventSummaryItemV1,
    type FundingEventSummaryPagedV1 as FundingEventSummaryPagedV1,
    type FundingEventListParams as FundingEventListParams,
    type FundingEventGetParams as FundingEventGetParams,
  };

  export {
    Payments as Payments,
    type PaymentSummaryPagedV1 as PaymentSummaryPagedV1,
    PaymentSummaryPagedV1DataPageNumberSchema as PaymentSummaryPagedV1DataPageNumberSchema,
    type PaymentListParams as PaymentListParams,
  };

  export {
    Payouts as Payouts,
    type PayoutV1 as PayoutV1,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutGetParams as PayoutGetParams,
    type PayoutHoldParams as PayoutHoldParams,
    type PayoutReleaseParams as PayoutReleaseParams,
  };

  export {
    Reports as Reports,
    type ReportCreateTotalCustomersByStatusResponse as ReportCreateTotalCustomersByStatusResponse,
    type ReportCreateTotalCustomersByStatusParams as ReportCreateTotalCustomersByStatusParams,
  };

  export type AccountTypeV1 = API.AccountTypeV1;
  export type AccountV1 = API.AccountV1;
  export type AddressV11 = API.AddressV11;
  export type BankAccountV1Request = API.BankAccountV1Request;
  export type BusinessProfileV1 = API.BusinessProfileV1;
  export type Capability = API.Capability;
  export type ChargeConfigurationV1 = API.ChargeConfigurationV1;
  export type ChargeV1ItemResponse = API.ChargeV1ItemResponse;
  export type ComplianceProfileUnmaskedV1 = API.ComplianceProfileUnmaskedV1;
  export type ConsentTypeV1 = API.ConsentTypeV1;
  export type CustomerDetailsV1 = API.CustomerDetailsV1;
  export type CustomerStatusV1 = API.CustomerStatusV1;
  export type CustomerTypeV1 = API.CustomerTypeV1;
  export type CustomerV1 = API.CustomerV1;
  export type CustomerV1ItemResponse = API.CustomerV1ItemResponse;
  export type CustomerDetailsV1 = API.CustomerDetailsV1;
  export type DeviceInfoV1 = API.DeviceInfoV1;
  export type DeviceUnmaskedV1 = API.DeviceUnmaskedV1;
  export type DeviceInfoV1 = API.DeviceInfoV1;
  export type FundingEventSummaryV1 = API.FundingEventSummaryV1;
  export type FundingEventTypeV1 = API.FundingEventTypeV1;
  export type IdentityDecisionV1 = API.IdentityDecisionV1;
  export type IdentityVerificationBreakdownV1 = API.IdentityVerificationBreakdownV1;
  export type ItemResponseOfAccountV1 = API.ItemResponseOfAccountV1;
  export type ItemResponseOfLinkedBankAccountV1 = API.ItemResponseOfLinkedBankAccountV1;
  export type ItemResponseOfOrganizationV1 = API.ItemResponseOfOrganizationV1;
  export type ItemResponseOfRepresentativeV1 = API.ItemResponseOfRepresentativeV1;
  export type LinkedBankAccountV1 = API.LinkedBankAccountV1;
  export type OrganizationV1 = API.OrganizationV1;
  export type PagedResponseMetadata = API.PagedResponseMetadata;
  export type PagedResponseMetadata1 = API.PagedResponseMetadata1;
  export type PagedResponseMetadata2 = API.PagedResponseMetadata2;
  export type PagedResponseOfCapabilityRequestV1 = API.PagedResponseOfCapabilityRequestV1;
  export type PagedResponseMetadata = API.PagedResponseMetadata;
  export type PaykeyBankDetailsV1 = API.PaykeyBankDetailsV1;
  export type PaykeyDetailsV1 = API.PaykeyDetailsV1;
  export type PaykeySourceV1 = API.PaykeySourceV1;
  export type PaykeyStatusV1 = API.PaykeyStatusV1;
  export type PaykeyV1ItemResponse = API.PaykeyV1ItemResponse;
  export type PaykeyDetailsV1 = API.PaykeyDetailsV1;
  export type PaymentRailV1 = API.PaymentRailV1;
  export type PaymentSortByV1 = API.PaymentSortByV1;
  export type PaymentStatusV1 = API.PaymentStatusV1;
  export type PaymentTypeV1 = API.PaymentTypeV1;
  export type PayoutV1ItemResponse = API.PayoutV1ItemResponse;
  export type RelationshipV1 = API.RelationshipV1;
  export type RepresentativeV1 = API.RepresentativeV1;
  export type ResponseMetadata = API.ResponseMetadata;
  export type ResponseTypeEnum = API.ResponseTypeEnum;
  export type ResponseMetadata = API.ResponseMetadata;
  export type SortOrder = API.SortOrder;
  export type StatusDetailOfLinkedBankAccountStatusDetailEnum =
    API.StatusDetailOfLinkedBankAccountStatusDetailEnum;
  export type StatusDetailsV1 = API.StatusDetailsV1;
  export type StatusDetailsV1_1 = API.StatusDetailsV1_1;
  export type StatusHistoryV1 = API.StatusHistoryV1;
  export type StatusReasonV1 = API.StatusReasonV1;
  export type StatusSourceV1 = API.StatusSourceV1;
  export type StatusDetailsV1 = API.StatusDetailsV1;
  export type TermsOfServiceV1 = API.TermsOfServiceV1;
  export type TransferDirectionV1 = API.TransferDirectionV1;
  export type UpdateChargeStatusV1Request = API.UpdateChargeStatusV1Request;
  export type UpdatePayoutStatusV1Request = API.UpdatePayoutStatusV1Request;
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
