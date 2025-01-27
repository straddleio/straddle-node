// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Charge,
  ChargeCancelParams,
  ChargeCreateParams,
  ChargeHoldParams,
  ChargeReleaseParams,
  ChargeRetrieveParams,
  ChargeUpdateParams,
  Charges,
} from './resources/charges';
import {
  FundingEventListParams,
  FundingEventRetrieveParams,
  FundingEventSummaryItem,
  FundingEventSummaryPaged,
  FundingEvents,
} from './resources/funding-events';
import {
  LinkedBankAccount,
  LinkedBankAccountCreateParams,
  LinkedBankAccountListParams,
  LinkedBankAccountPaged,
  LinkedBankAccountRetrieveParams,
  LinkedBankAccountUnmask,
  LinkedBankAccountUnmaskParams,
  LinkedBankAccountUpdateParams,
  LinkedBankAccounts,
} from './resources/linked-bank-accounts';
import {
  Organization,
  OrganizationCreateParams,
  OrganizationListParams,
  OrganizationPaged,
  Organizations,
} from './resources/organizations';
import {
  PaykeyListParams,
  PaykeyRetrieveParams,
  PaykeySummaryPaged,
  PaykeyUnmasked,
  PaykeyUnmaskedParams,
  Paykeys,
} from './resources/paykeys';
import { PaymentListParams, PaymentSummaryPaged, Payments } from './resources/payments';
import {
  Payout,
  PayoutCancelParams,
  PayoutCreateParams,
  PayoutHoldParams,
  PayoutReleaseParams,
  PayoutRetrieveParams,
  PayoutUpdateParams,
  Payouts,
} from './resources/payouts';
import {
  ReportTotalCustomersByStatusParams,
  ReportTotalCustomersByStatusResponse,
  Reports,
} from './resources/reports';
import {
  Representative,
  RepresentativeCreateParams,
  RepresentativeListParams,
  RepresentativePaged,
  RepresentativeRetrieveParams,
  RepresentativeUpdateParams,
  Representatives,
} from './resources/representatives';
import {
  Account,
  AccountCreateParams,
  AccountListParams,
  AccountOnboardParams,
  AccountPaged,
  AccountRetrieveParams,
  AccountSimulateParams,
  AccountUpdateParams,
  Accounts,
} from './resources/accounts/accounts';
import { Bridge, BridgeInitializeParams, BridgePlaidParams, BridgeToken } from './resources/bridge/bridge';
import {
  Customer,
  CustomerCreateParams,
  CustomerDeleteParams,
  CustomerListParams,
  CustomerRetrieveParams,
  CustomerSummaryPaged,
  CustomerUnmasked,
  CustomerUnmaskedParams,
  CustomerUpdateParams,
  Customers,
} from './resources/customers/customers';

const environments = {
  sandbox: 'https://{environment}.straddle.io',
  production: 'https://{environment}.straddle.io',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Api Key Token for authenticating with the Straddle API.
   */
  apiKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `sandbox` corresponds to `https://{environment}.straddle.io`
   * - `production` corresponds to `https://{environment}.straddle.io`
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
   * @param {string | undefined} [opts.apiKey=process.env['STRADDLE_TOKEN'] ?? undefined]
   * @param {Environment} [opts.environment=sandbox] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['STRADDLE_BASE_URL'] ?? https://{environment}.straddle.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('STRADDLE_BASE_URL'),
    apiKey = Core.readEnv('STRADDLE_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.StraddleError(
        "The STRADDLE_TOKEN environment variable is missing or empty; either provide it, or instantiate the Straddle client with an apiKey option, like new Straddle({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'sandbox',
    };

    if (baseURL && opts.environment) {
      throw new Errors.StraddleError(
        'Ambiguous URL; The `baseURL` option (or STRADDLE_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'sandbox'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  accounts: API.Accounts = new API.Accounts(this);
  linkedBankAccounts: API.LinkedBankAccounts = new API.LinkedBankAccounts(this);
  organizations: API.Organizations = new API.Organizations(this);
  representatives: API.Representatives = new API.Representatives(this);
  bridge: API.Bridge = new API.Bridge(this);
  customers: API.Customers = new API.Customers(this);
  paykeys: API.Paykeys = new API.Paykeys(this);
  reports: API.Reports = new API.Reports(this);
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

Straddle.Accounts = Accounts;
Straddle.LinkedBankAccounts = LinkedBankAccounts;
Straddle.Organizations = Organizations;
Straddle.Representatives = Representatives;
Straddle.Bridge = Bridge;
Straddle.Customers = Customers;
Straddle.Paykeys = Paykeys;
Straddle.Reports = Reports;
Straddle.Charges = Charges;
Straddle.FundingEvents = FundingEvents;
Straddle.Payments = Payments;
Straddle.Payouts = Payouts;
export declare namespace Straddle {
  export type RequestOptions = Core.RequestOptions;

  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountPaged as AccountPaged,
    type AccountCreateParams as AccountCreateParams,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountOnboardParams as AccountOnboardParams,
    type AccountSimulateParams as AccountSimulateParams,
  };

  export {
    LinkedBankAccounts as LinkedBankAccounts,
    type LinkedBankAccount as LinkedBankAccount,
    type LinkedBankAccountPaged as LinkedBankAccountPaged,
    type LinkedBankAccountUnmask as LinkedBankAccountUnmask,
    type LinkedBankAccountCreateParams as LinkedBankAccountCreateParams,
    type LinkedBankAccountRetrieveParams as LinkedBankAccountRetrieveParams,
    type LinkedBankAccountUpdateParams as LinkedBankAccountUpdateParams,
    type LinkedBankAccountListParams as LinkedBankAccountListParams,
    type LinkedBankAccountUnmaskParams as LinkedBankAccountUnmaskParams,
  };

  export {
    Organizations as Organizations,
    type Organization as Organization,
    type OrganizationPaged as OrganizationPaged,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationListParams as OrganizationListParams,
  };

  export {
    Representatives as Representatives,
    type Representative as Representative,
    type RepresentativePaged as RepresentativePaged,
    type RepresentativeCreateParams as RepresentativeCreateParams,
    type RepresentativeRetrieveParams as RepresentativeRetrieveParams,
    type RepresentativeUpdateParams as RepresentativeUpdateParams,
    type RepresentativeListParams as RepresentativeListParams,
  };

  export {
    Bridge as Bridge,
    type BridgeToken as BridgeToken,
    type BridgeInitializeParams as BridgeInitializeParams,
    type BridgePlaidParams as BridgePlaidParams,
  };

  export {
    Customers as Customers,
    type Customer as Customer,
    type CustomerSummaryPaged as CustomerSummaryPaged,
    type CustomerUnmasked as CustomerUnmasked,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
    type CustomerDeleteParams as CustomerDeleteParams,
    type CustomerUnmaskedParams as CustomerUnmaskedParams,
  };

  export {
    Paykeys as Paykeys,
    type PaykeySummaryPaged as PaykeySummaryPaged,
    type PaykeyUnmasked as PaykeyUnmasked,
    type PaykeyRetrieveParams as PaykeyRetrieveParams,
    type PaykeyListParams as PaykeyListParams,
    type PaykeyUnmaskedParams as PaykeyUnmaskedParams,
  };

  export {
    Reports as Reports,
    type ReportTotalCustomersByStatusResponse as ReportTotalCustomersByStatusResponse,
    type ReportTotalCustomersByStatusParams as ReportTotalCustomersByStatusParams,
  };

  export {
    Charges as Charges,
    type Charge as Charge,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeRetrieveParams as ChargeRetrieveParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeCancelParams as ChargeCancelParams,
    type ChargeHoldParams as ChargeHoldParams,
    type ChargeReleaseParams as ChargeReleaseParams,
  };

  export {
    FundingEvents as FundingEvents,
    type FundingEventSummaryItem as FundingEventSummaryItem,
    type FundingEventSummaryPaged as FundingEventSummaryPaged,
    type FundingEventRetrieveParams as FundingEventRetrieveParams,
    type FundingEventListParams as FundingEventListParams,
  };

  export {
    Payments as Payments,
    type PaymentSummaryPaged as PaymentSummaryPaged,
    type PaymentListParams as PaymentListParams,
  };

  export {
    Payouts as Payouts,
    type Payout as Payout,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutHoldParams as PayoutHoldParams,
    type PayoutReleaseParams as PayoutReleaseParams,
  };

  export type Paykey = API.Paykey;
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
