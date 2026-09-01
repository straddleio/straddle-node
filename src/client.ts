// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise, type APIResponseProps } from './api-promise';
import * as Errors from './error';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON, isEmptyObj } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
import { castToError, isAbortError } from './internal/errors';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
  type LogLevel,
  type Logger,
} from './internal/utils/log';
export type { Logger, LogLevel } from './internal/utils/log';
import type { RequestInit, RequestInfo, BodyInit, Fetch } from './internal/builtin-types';
import { buildHeaders, type HeadersLike, type NullableHeaders } from './internal/headers';
import type { FinalRequestOptions, RequestOptions } from './internal/request-options';
import type { HTTPMethod, FinalizedRequestInit, MergedRequestInit, PromiseOrValue } from './internal/types';
import { stringifyQuery } from './internal/utils/query';
import { toFile } from './core/uploads';
import { VERSION } from './version';
import {
  Accounts,
  type AccountResponse,
  type AccountList,
  type ResponseMetadata,
  type Account,
  type PageMetadata,
  type AccountStatusDetail,
  type AccountBusinessProfile,
  type AccountCapabilities,
  type AccountPaymentSettings,
  type TermsOfService,
  type SortOrder,
  type AccountAddress,
  type AccountIndustry,
  type AccountSupportChannels,
  type AccountPaymentCapabilities,
  type AccountCustomerCapabilities,
  type AccountConsentCapabilities,
  type AccountChargeSettings,
  type AccountPayoutSettings,
  type AccountCapability,
  type AccountRetrieveParams,
  type AccountUpdateParams,
  type AccountCreateParams,
  type AccountListParams,
  type AccountOnboardParams,
  type AccountSimulateOnboardingParams,
} from './resources/accounts';
import {
  CapabilityRequests,
  type CapabilityRequestList,
  type CapabilityRequest,
  type CapabilityRequestCreateParams,
  type CapabilityRequestListParams,
} from './resources/capability-requests';
import {
  LinkedBankAccounts,
  type LinkedBankAccountResponse,
  type LinkedBankAccountList,
  type UnmaskedLinkedBankAccountResponse,
  type LinkedBankAccount,
  type UnmaskedLinkedBankAccount,
  type LinkedBankAccountStatusDetail,
  type MaskedLinkedBankAccountDetails,
  type UnmaskedLinkedBankAccountDetails,
  type LinkedBankAccountCreateParams,
  type LinkedBankAccountListParams,
  type LinkedBankAccountUpdateParams,
  type LinkedBankAccountRetrieveParams,
  type LinkedBankAccountListUnmaskedParams,
  type LinkedBankAccountCancelParams,
} from './resources/linked-bank-accounts';
import {
  Organizations,
  type OrganizationResponse,
  type OrganizationList,
  type Organization,
  type OrganizationCreateParams,
  type OrganizationListParams,
  type OrganizationRetrieveParams,
} from './resources/organizations';
import {
  Representatives,
  type RepresentativeResponse,
  type RepresentativeList,
  type UnmaskedRepresentativeResponse,
  type Representative,
  type UnmaskedRepresentative,
  type RepresentativeStatusDetail,
  type RepresentativeRelationship,
  type RepresentativeCreateParams,
  type RepresentativeListParams,
  type RepresentativeUpdateParams,
  type RepresentativeRetrieveParams,
  type RepresentativeListUnmaskedParams,
} from './resources/representatives';
import {
  Bridge,
  type PaykeyResponse,
  type BridgeTokenResponse,
  type RevealedPaykeyResponse,
  type ResponseType,
  type Paykey,
  type BridgeToken,
  type RevealedPaykey,
  type PaykeySource,
  type PaykeyStatus,
  type PaymentStatusDetails,
  type PaykeyBankDetails,
  type PaykeyConfiguration,
  type PaykeyBalanceDetails,
  type PaymentStatusReason,
  type PaymentStatusSource,
  type AccountType,
  type SimulatedPaykeyOutcome,
  type PaykeyProcessingMode,
  type PaykeyBalanceRefreshStatus,
  type BridgeCreateBankAccountPaykeyParams,
  type BridgeCreatePlaidPaykeyParams,
  type BridgeCreateTokenParams,
  type BridgeCreateQuilttPaykeyParams,
} from './resources/bridge';
import {
  Customers,
  type CustomerResponse,
  type CustomerSummaryList,
  type UnmaskedCustomerResponse,
  type Customer,
  type CustomerSummary,
  type UnmaskedCustomer,
  type CustomerType,
  type CustomerStatus,
  type CustomerAddress,
  type ComplianceProfile,
  type MaskedCustomerDevice,
  type CustomerConfiguration,
  type UnmaskedComplianceProfile,
  type CustomerDevice,
  type BusinessCustomerRepresentative,
  type SimulatedCustomerOutcome,
  type CustomerRetrieveParams,
  type CustomerUpdateParams,
  type CustomerDeleteParams,
  type CustomerListParams,
  type CustomerCreateParams,
  type CustomerListUnmaskedParams,
  type CustomerRefreshReviewParams,
} from './resources/customers/customers';
import {
  Paykeys,
  type UnmaskedPaykeyResponse,
  type PaykeySummaryList,
  type UnmaskedPaykey,
  type PaykeySummary,
  type UnmaskedPaykeyBankDetails,
  type PaykeyRetrieveParams,
  type PaykeyListUnmaskedParams,
  type PaykeyListParams,
  type PaykeyRevealParams,
  type PaykeyCancelParams,
  type PaykeyRefreshReviewParams,
  type PaykeyRefreshBalanceParams,
  type PaykeyUnblockParams,
} from './resources/paykeys/paykeys';
import {
  Charges,
  type ChargeResponse,
  type UnmaskedChargeResponse,
  type PayoutResponse,
  type Charge,
  type UnmaskedCharge,
  type Payout,
  type PaymentRail,
  type PaykeyDetails,
  type CustomerDetails,
  type ConsentType,
  type MaskedPaymentDevice,
  type ChargeConfiguration,
  type PaymentStatus,
  type PaymentStatusHistory,
  type RelatedPayment,
  type PaymentAuthorizationProof,
  type PaymentDevice,
  type PayoutConfiguration,
  type BalanceCheckMode,
  type SimulatedPaymentOutcome,
  type PaymentRelationship,
  type PaymentType,
  type PaymentDocumentType,
  type ChargeRetrieveParams,
  type ChargeUpdateParams,
  type ChargeCreateParams,
  type ChargeHoldParams,
  type ChargeReleaseParams,
  type ChargeCancelParams,
  type ChargeListUnmaskedParams,
  type ChargeResubmitParams,
  type ChargeRefundParams,
  type ChargeUploadAuthorizationProofParams,
} from './resources/charges';
import {
  FundingEvents,
  type FundingEventSummaryList,
  type FundingEventResponse,
  type FundingEventSimulation,
  type FundingEventPaymentList,
  type FundingEventSummary,
  type FundingEvent,
  type FundingEventSimulationResult,
  type FundingEventPayment,
  type TransferDirection,
  type FundingEventType,
  type FundingEventTransferDirection,
  type FundingEventConfiguration,
  type FundingEventPaymentReason,
  type FundingEventListParams,
  type FundingEventRetrieveParams,
  type FundingEventSimulateParams,
  type FundingEventListPaymentsParams,
} from './resources/funding-events';
import {
  Payments,
  type PaymentSummaryList,
  type PaymentSummary,
  type PaymentListParams,
} from './resources/payments';
import {
  Payouts,
  type UnmaskedPayoutResponse,
  type UnmaskedPayout,
  type PayoutRetrieveParams,
  type PayoutUpdateParams,
  type PayoutCreateParams,
  type PayoutHoldParams,
  type PayoutReleaseParams,
  type PayoutCancelParams,
  type PayoutListUnmaskedParams,
  type PayoutResubmitParams,
  type PayoutUploadAuthorizationProofParams,
} from './resources/payouts';
import {
  AccountSettingResource,
  type AccountSettingsResponse,
  type AccountSettings,
  type ChargeSettings,
  type PayoutSettings,
  type AccountStatementSettings,
  type AccountPaymentTypeSettings,
  type AccountCustomerTypeSettings,
  type AccountConsentSettings,
  type AccountPolicyControls,
  type AccountSettingRetrieveParams,
} from './resources/account-settings';
import {
  Webhooks,
  type AccountCreatedV1WebhookEvent,
  type AccountEventV1WebhookEvent,
  type RepresentativeEventV1WebhookEvent,
  type RepresentativeCreatedV1WebhookEvent,
  type LinkedBankAccountEventV1WebhookEvent,
  type LinkedBankAccountCreatedV1WebhookEvent,
  type CapabilityRequestEventV1WebhookEvent,
  type CapabilityRequestCreatedV1WebhookEvent,
  type CustomerEventV1WebhookEvent,
  type CustomerCreatedV1WebhookEvent,
  type PaykeyEventV1WebhookEvent,
  type PaykeyCreatedV1WebhookEvent,
  type ChargeCreatedV1WebhookEvent,
  type ChargeEventV1WebhookEvent,
  type PayoutCreatedV1WebhookEvent,
  type PayoutEventV1WebhookEvent,
  type PlatformEventV1WebhookEvent,
  type PlatformCreatedV1WebhookEvent,
  type UserEventV1WebhookEvent,
  type UserCreatedV1WebhookEvent,
  type FundingEventCreatedV1WebhookEvent,
  type FundingEventEventV1WebhookEvent,
  type ParsedWebhookEvent,
} from './resources/webhooks';

export type AuthTokenProvider = () => string | Promise<string>;

export interface ClientOptions {
  /**
   * Send the API key as a bearer token in the `Authorization` header.
   */
  bearer?: string | AuthTokenProvider | undefined;

  /**
   * Secret used to verify incoming webhook signatures.
   */
  webhookSecret?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env["STRADDLE_BASE_URL"].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

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
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env["STRADDLE_LOG"] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

export type StraddleAPIOptions = ClientOptions;

/**
 * API Client for interfacing with the StraddleApi API.
 */
export class StraddleAPI {
  bearer: string | AuthTokenProvider;
  webhookSecret: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;
  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _baseURLOverridden: boolean;
  private _defaultBaseURL: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the StraddleApi API.
   *
   * @param {string | AuthTokenProvider | undefined} [opts.bearer=process.env["BEARER"] ?? undefined]
   * @param {string | null | undefined} [opts.webhookSecret=process.env["STRADDLE_WEBHOOK_SECRET"] ?? null]
   * @param {string} [opts.baseURL=process.env["STRADDLE_BASE_URL"] ?? https://sandbox.straddle.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('STRADDLE_BASE_URL'),
    bearer = readEnv('BEARER'),
    webhookSecret = readEnv('STRADDLE_WEBHOOK_SECRET') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (bearer === undefined) {
      throw new Errors.StraddleAPIError(
        "The BEARER environment variable is missing or empty; either provide it, or instantiate the StraddleAPI client with an bearer option, like new StraddleAPI({ bearer: 'My Bearer' }).",
      );
    }

    const options: ClientOptions = {
      bearer,
      webhookSecret,
      ...opts,
      baseURL: baseURL || 'https://sandbox.straddle.com',
    };
    const baseURLOverridden = baseURL !== null && baseURL !== undefined && baseURL !== '';
    const defaultBaseURL = 'https://sandbox.straddle.com';
    this.baseURL = options.baseURL || defaultBaseURL;
    this.timeout = options.timeout ?? StraddleAPI.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('STRADDLE_LOG'), 'process.env["STRADDLE_LOG"]', this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    const customHeadersEnv = readEnv('STRADDLE_CUSTOM_HEADERS');
    if (customHeadersEnv) {
      const parsed: Record<string, string> = {};
      for (const line of customHeadersEnv.split('\n')) {
        const colon = line.indexOf(':');
        if (colon >= 0) {
          parsed[line.substring(0, colon).trim()] = line.substring(colon + 1).trim();
        }
      }
      options.defaultHeaders = { ...parsed, ...options.defaultHeaders };
    }

    this._options = { ...options, baseURL: baseURLOverridden ? this.baseURL : undefined };
    this._baseURLOverridden = baseURLOverridden;
    this._defaultBaseURL = defaultBaseURL;

    this.bearer = bearer;
    this.webhookSecret = webhookSecret;
  }

  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as new (props: ClientOptions) => this)({
      ...this._options,
      ...(this.#baseURLOverridden() ? { baseURL: this.baseURL } : {}),
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      bearer: this.bearer,
      webhookSecret: this.webhookSecret,
      ...options,
    });
    return client;
  }

  #baseURLOverridden(): boolean {
    // A named environment selects a default URL; only explicit overrides should bypass per-request defaults.
    return this._baseURLOverridden || this.baseURL !== this._defaultBaseURL;
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected stringifyQuery(query: object | Record<string, unknown>): string {
    return stringifyQuery(query);
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `scalar-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: object | undefined,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    // Guarantee exactly one "/" between baseURL and path so that bases without a trailing slash
    // and paths without a leading slash do not fuse into a malformed URL (e.g. ".../v1" + "widgets").
    const url = isAbsoluteURL(path)
      ? new URL(path)
      : new URL(
          (baseURL.endsWith('/') ? baseURL : baseURL + '/') + (path.startsWith('/') ? path.slice(1) : path),
        );

    const defaultQuery = this.defaultQuery();
    const pathQuery = Object.fromEntries(url.searchParams);
    if (!isEmptyObj(defaultQuery) || !isEmptyObj(pathQuery)) {
      query = { ...pathQuery, ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts } as FinalRequestOptions;
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText) as any;
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time, just do what it says,
    // but cap server-provided delays at 60s so an oversized or malformed Retry-After
    // (e.g. `retry-after-ms: 999999999`, a past HTTP-date, or a value that Date.parse
    // failed on) cannot block retries for an unbounded amount of time. Otherwise fall
    // back to the default exponential-backoff calculation.
    const maxRetryAfterMillis = 60 * 1000;
    if (
      timeoutMillis === undefined ||
      !Number.isFinite(timeoutMillis) ||
      timeoutMillis <= 0 ||
      timeoutMillis > maxRetryAfterMillis
    ) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    // Headers read the caller's own options, not the copy defaulted above: `X-Scalar-Timeout`
    // reports an explicit per-request timeout, and the idempotency key written back here has to
    // land where the retry can see it.
    const reqHeaders = await this.buildHeaders({
      options: inputOptions,
      method,
      bodyHeaders,
      retryCount,
      url,
    });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      // `buildBody` already collapses no-body into `undefined`; here we only need to drop that
      // sentinel. A truthiness spread would also strip an intentional empty-string body.
      ...(body !== undefined && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };
    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
    url,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
    url: string;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Scalar-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Scalar-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);
    appendAuthCookies(headers.values, await this.authCookiesAsync());

    this.validateAuth(url, headers.values, options);

    return headers.values;
  }

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `fetchWithTimeout()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    // Skip only `null`/`undefined` so an intentional empty-string (or 0/false) payload still
    // reaches the encoder. A plain `!body` check would silently drop those falsy-but-valid bodies,
    // and `null` must be excluded here too because the iterator check below uses `in`, which
    // throws on null.
    if (body == null) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      // Always pass strings through verbatim. The previous guard required a caller-set
      // `content-type` and otherwise fell through to `FallbackEncoder`, which JSON.stringifies
      // the value and labels it `application/json` — silently quoting plain-text payloads and
      // mislabeling them as JSON. fetch defaults a string body to `text/plain;charset=UTF-8`
      // when no `content-type` is set, which is a safer default than misclaiming JSON.
      typeof body === 'string' ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else if (
      typeof body === 'object' &&
      headers.values.get('content-type') === 'application/x-www-form-urlencoded'
    ) {
      return {
        bodyHeaders: { 'content-type': 'application/x-www-form-urlencoded' },
        body: this.stringifyQuery(body),
      };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  protected validateAuth(url: string, headers: Headers, options: FinalRequestOptions): void {
    if (headers.has('Authorization')) return;
    if (headerExplicitlyOmitted(options.headers, 'Authorization')) return;
    throw new Errors.AuthenticationError(
      401,
      undefined,
      'Could not resolve authentication method. Expected the bearer to be set. Or for the "Authorization" headers to be explicitly omitted',
      headers,
    );
  }

  authHeadersSync(): Record<string, string> {
    const headers: Record<string, string> = {};
    const bearer = this.resolveAuthOptionSync('bearer', this.bearer);
    if (bearer) headers['Authorization'] = `Bearer ${bearer}`;
    return headers;
  }

  webSocketAuthHeaders(): Record<string, string> {
    const bearer = this.resolveAuthOptionSync('bearer', this.bearer);
    if (bearer) return { Authorization: `Bearer ${bearer}` };
    return {};
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    const bearer = await this.resolveAuthOption('bearer', this.bearer);
    if (bearer == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${bearer}` }]);
  }

  private async authQueryAsync(): Promise<Record<string, string>> {
    const query: Record<string, string> = {};
    return query;
  }

  private async authCookiesAsync(): Promise<Record<string, string>> {
    const cookies: Record<string, string> = {};
    return cookies;
  }

  private async resolveAuthOption(
    optionName: string,
    value: string | AuthTokenProvider | null | undefined,
  ): Promise<string | undefined> {
    if (value == null) return undefined;
    const token = typeof value === 'function' ? await value() : value;
    if (!token)
      throw new Errors.StraddleAPIError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  private resolveAuthOptionSync(
    optionName: string,
    value: string | AuthTokenProvider | null | undefined,
  ): string | undefined {
    if (value == null) return undefined;
    const token = typeof value === 'function' ? value() : value;
    if (typeof token !== 'string' || !token)
      throw new Errors.StraddleAPIError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  static StraddleAPI = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static StraddleAPIError = Errors.StraddleAPIError;
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

  static toFile = toFile;

  accounts: Accounts = new Accounts(this);
  capabilityRequests: CapabilityRequests = new CapabilityRequests(this);
  linkedBankAccounts: LinkedBankAccounts = new LinkedBankAccounts(this);
  organizations: Organizations = new Organizations(this);
  representatives: Representatives = new Representatives(this);
  bridge: Bridge = new Bridge(this);
  customers: Customers = new Customers(this);
  paykeys: Paykeys = new Paykeys(this);
  charges: Charges = new Charges(this);
  fundingEvents: FundingEvents = new FundingEvents(this);
  payments: Payments = new Payments(this);
  payouts: Payouts = new Payouts(this);
  accountSettings: AccountSettingResource = new AccountSettingResource(this);
  webhooks: Webhooks = new Webhooks(this);
}

StraddleAPI.Accounts = Accounts;
StraddleAPI.CapabilityRequests = CapabilityRequests;
StraddleAPI.LinkedBankAccounts = LinkedBankAccounts;
StraddleAPI.Organizations = Organizations;
StraddleAPI.Representatives = Representatives;
StraddleAPI.Bridge = Bridge;
StraddleAPI.Customers = Customers;
StraddleAPI.Paykeys = Paykeys;
StraddleAPI.Charges = Charges;
StraddleAPI.FundingEvents = FundingEvents;
StraddleAPI.Payments = Payments;
StraddleAPI.Payouts = Payouts;
StraddleAPI.AccountSettingResource = AccountSettingResource;
StraddleAPI.Webhooks = Webhooks;

export declare namespace StraddleAPI {
  export type RequestOptions = Opts.RequestOptions;
  export {
    Accounts as Accounts,
    type AccountResponse as AccountResponse,
    type AccountList as AccountList,
    type ResponseMetadata as ResponseMetadata,
    type Account as Account,
    type PageMetadata as PageMetadata,
    type AccountStatusDetail as AccountStatusDetail,
    type AccountBusinessProfile as AccountBusinessProfile,
    type AccountCapabilities as AccountCapabilities,
    type AccountPaymentSettings as AccountPaymentSettings,
    type TermsOfService as TermsOfService,
    type SortOrder as SortOrder,
    type AccountAddress as AccountAddress,
    type AccountIndustry as AccountIndustry,
    type AccountSupportChannels as AccountSupportChannels,
    type AccountPaymentCapabilities as AccountPaymentCapabilities,
    type AccountCustomerCapabilities as AccountCustomerCapabilities,
    type AccountConsentCapabilities as AccountConsentCapabilities,
    type AccountChargeSettings as AccountChargeSettings,
    type AccountPayoutSettings as AccountPayoutSettings,
    type AccountCapability as AccountCapability,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountCreateParams as AccountCreateParams,
    type AccountListParams as AccountListParams,
    type AccountOnboardParams as AccountOnboardParams,
    type AccountSimulateOnboardingParams as AccountSimulateOnboardingParams,
  };

  export {
    CapabilityRequests as CapabilityRequests,
    type CapabilityRequestList as CapabilityRequestList,
    type CapabilityRequest as CapabilityRequest,
    type CapabilityRequestCreateParams as CapabilityRequestCreateParams,
    type CapabilityRequestListParams as CapabilityRequestListParams,
  };

  export {
    LinkedBankAccounts as LinkedBankAccounts,
    type LinkedBankAccountResponse as LinkedBankAccountResponse,
    type LinkedBankAccountList as LinkedBankAccountList,
    type UnmaskedLinkedBankAccountResponse as UnmaskedLinkedBankAccountResponse,
    type LinkedBankAccount as LinkedBankAccount,
    type UnmaskedLinkedBankAccount as UnmaskedLinkedBankAccount,
    type LinkedBankAccountStatusDetail as LinkedBankAccountStatusDetail,
    type MaskedLinkedBankAccountDetails as MaskedLinkedBankAccountDetails,
    type UnmaskedLinkedBankAccountDetails as UnmaskedLinkedBankAccountDetails,
    type LinkedBankAccountCreateParams as LinkedBankAccountCreateParams,
    type LinkedBankAccountListParams as LinkedBankAccountListParams,
    type LinkedBankAccountUpdateParams as LinkedBankAccountUpdateParams,
    type LinkedBankAccountRetrieveParams as LinkedBankAccountRetrieveParams,
    type LinkedBankAccountListUnmaskedParams as LinkedBankAccountListUnmaskedParams,
    type LinkedBankAccountCancelParams as LinkedBankAccountCancelParams,
  };

  export {
    Organizations as Organizations,
    type OrganizationResponse as OrganizationResponse,
    type OrganizationList as OrganizationList,
    type Organization as Organization,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationRetrieveParams as OrganizationRetrieveParams,
  };

  export {
    Representatives as Representatives,
    type RepresentativeResponse as RepresentativeResponse,
    type RepresentativeList as RepresentativeList,
    type UnmaskedRepresentativeResponse as UnmaskedRepresentativeResponse,
    type Representative as Representative,
    type UnmaskedRepresentative as UnmaskedRepresentative,
    type RepresentativeStatusDetail as RepresentativeStatusDetail,
    type RepresentativeRelationship as RepresentativeRelationship,
    type RepresentativeCreateParams as RepresentativeCreateParams,
    type RepresentativeListParams as RepresentativeListParams,
    type RepresentativeUpdateParams as RepresentativeUpdateParams,
    type RepresentativeRetrieveParams as RepresentativeRetrieveParams,
    type RepresentativeListUnmaskedParams as RepresentativeListUnmaskedParams,
  };

  export {
    Bridge as Bridge,
    type PaykeyResponse as PaykeyResponse,
    type BridgeTokenResponse as BridgeTokenResponse,
    type RevealedPaykeyResponse as RevealedPaykeyResponse,
    type ResponseType as ResponseType,
    type Paykey as Paykey,
    type BridgeToken as BridgeToken,
    type RevealedPaykey as RevealedPaykey,
    type PaykeySource as PaykeySource,
    type PaykeyStatus as PaykeyStatus,
    type PaymentStatusDetails as PaymentStatusDetails,
    type PaykeyBankDetails as PaykeyBankDetails,
    type PaykeyConfiguration as PaykeyConfiguration,
    type PaykeyBalanceDetails as PaykeyBalanceDetails,
    type PaymentStatusReason as PaymentStatusReason,
    type PaymentStatusSource as PaymentStatusSource,
    type AccountType as AccountType,
    type SimulatedPaykeyOutcome as SimulatedPaykeyOutcome,
    type PaykeyProcessingMode as PaykeyProcessingMode,
    type PaykeyBalanceRefreshStatus as PaykeyBalanceRefreshStatus,
    type BridgeCreateBankAccountPaykeyParams as BridgeCreateBankAccountPaykeyParams,
    type BridgeCreatePlaidPaykeyParams as BridgeCreatePlaidPaykeyParams,
    type BridgeCreateTokenParams as BridgeCreateTokenParams,
    type BridgeCreateQuilttPaykeyParams as BridgeCreateQuilttPaykeyParams,
  };

  export {
    Customers as Customers,
    type CustomerResponse as CustomerResponse,
    type CustomerSummaryList as CustomerSummaryList,
    type UnmaskedCustomerResponse as UnmaskedCustomerResponse,
    type Customer as Customer,
    type CustomerSummary as CustomerSummary,
    type UnmaskedCustomer as UnmaskedCustomer,
    type CustomerType as CustomerType,
    type CustomerStatus as CustomerStatus,
    type CustomerAddress as CustomerAddress,
    type ComplianceProfile as ComplianceProfile,
    type MaskedCustomerDevice as MaskedCustomerDevice,
    type CustomerConfiguration as CustomerConfiguration,
    type UnmaskedComplianceProfile as UnmaskedComplianceProfile,
    type CustomerDevice as CustomerDevice,
    type BusinessCustomerRepresentative as BusinessCustomerRepresentative,
    type SimulatedCustomerOutcome as SimulatedCustomerOutcome,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerDeleteParams as CustomerDeleteParams,
    type CustomerListParams as CustomerListParams,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerListUnmaskedParams as CustomerListUnmaskedParams,
    type CustomerRefreshReviewParams as CustomerRefreshReviewParams,
  };

  export {
    Paykeys as Paykeys,
    type UnmaskedPaykeyResponse as UnmaskedPaykeyResponse,
    type PaykeySummaryList as PaykeySummaryList,
    type UnmaskedPaykey as UnmaskedPaykey,
    type PaykeySummary as PaykeySummary,
    type UnmaskedPaykeyBankDetails as UnmaskedPaykeyBankDetails,
    type PaykeyRetrieveParams as PaykeyRetrieveParams,
    type PaykeyListUnmaskedParams as PaykeyListUnmaskedParams,
    type PaykeyListParams as PaykeyListParams,
    type PaykeyRevealParams as PaykeyRevealParams,
    type PaykeyCancelParams as PaykeyCancelParams,
    type PaykeyRefreshReviewParams as PaykeyRefreshReviewParams,
    type PaykeyRefreshBalanceParams as PaykeyRefreshBalanceParams,
    type PaykeyUnblockParams as PaykeyUnblockParams,
  };

  export {
    Charges as Charges,
    type ChargeResponse as ChargeResponse,
    type UnmaskedChargeResponse as UnmaskedChargeResponse,
    type PayoutResponse as PayoutResponse,
    type Charge as Charge,
    type UnmaskedCharge as UnmaskedCharge,
    type Payout as Payout,
    type PaymentRail as PaymentRail,
    type PaykeyDetails as PaykeyDetails,
    type CustomerDetails as CustomerDetails,
    type ConsentType as ConsentType,
    type MaskedPaymentDevice as MaskedPaymentDevice,
    type ChargeConfiguration as ChargeConfiguration,
    type PaymentStatus as PaymentStatus,
    type PaymentStatusHistory as PaymentStatusHistory,
    type RelatedPayment as RelatedPayment,
    type PaymentAuthorizationProof as PaymentAuthorizationProof,
    type PaymentDevice as PaymentDevice,
    type PayoutConfiguration as PayoutConfiguration,
    type BalanceCheckMode as BalanceCheckMode,
    type SimulatedPaymentOutcome as SimulatedPaymentOutcome,
    type PaymentRelationship as PaymentRelationship,
    type PaymentType as PaymentType,
    type PaymentDocumentType as PaymentDocumentType,
    type ChargeRetrieveParams as ChargeRetrieveParams,
    type ChargeUpdateParams as ChargeUpdateParams,
    type ChargeCreateParams as ChargeCreateParams,
    type ChargeHoldParams as ChargeHoldParams,
    type ChargeReleaseParams as ChargeReleaseParams,
    type ChargeCancelParams as ChargeCancelParams,
    type ChargeListUnmaskedParams as ChargeListUnmaskedParams,
    type ChargeResubmitParams as ChargeResubmitParams,
    type ChargeRefundParams as ChargeRefundParams,
    type ChargeUploadAuthorizationProofParams as ChargeUploadAuthorizationProofParams,
  };

  export {
    FundingEvents as FundingEvents,
    type FundingEventSummaryList as FundingEventSummaryList,
    type FundingEventResponse as FundingEventResponse,
    type FundingEventSimulation as FundingEventSimulation,
    type FundingEventPaymentList as FundingEventPaymentList,
    type FundingEventSummary as FundingEventSummary,
    type FundingEvent as FundingEvent,
    type FundingEventSimulationResult as FundingEventSimulationResult,
    type FundingEventPayment as FundingEventPayment,
    type TransferDirection as TransferDirection,
    type FundingEventType as FundingEventType,
    type FundingEventTransferDirection as FundingEventTransferDirection,
    type FundingEventConfiguration as FundingEventConfiguration,
    type FundingEventPaymentReason as FundingEventPaymentReason,
    type FundingEventListParams as FundingEventListParams,
    type FundingEventRetrieveParams as FundingEventRetrieveParams,
    type FundingEventSimulateParams as FundingEventSimulateParams,
    type FundingEventListPaymentsParams as FundingEventListPaymentsParams,
  };

  export {
    Payments as Payments,
    type PaymentSummaryList as PaymentSummaryList,
    type PaymentSummary as PaymentSummary,
    type PaymentListParams as PaymentListParams,
  };

  export {
    Payouts as Payouts,
    type UnmaskedPayoutResponse as UnmaskedPayoutResponse,
    type UnmaskedPayout as UnmaskedPayout,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutUpdateParams as PayoutUpdateParams,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutHoldParams as PayoutHoldParams,
    type PayoutReleaseParams as PayoutReleaseParams,
    type PayoutCancelParams as PayoutCancelParams,
    type PayoutListUnmaskedParams as PayoutListUnmaskedParams,
    type PayoutResubmitParams as PayoutResubmitParams,
    type PayoutUploadAuthorizationProofParams as PayoutUploadAuthorizationProofParams,
  };

  export {
    AccountSettingResource as AccountSettingResource,
    type AccountSettingsResponse as AccountSettingsResponse,
    type AccountSettings as AccountSettings,
    type ChargeSettings as ChargeSettings,
    type PayoutSettings as PayoutSettings,
    type AccountStatementSettings as AccountStatementSettings,
    type AccountPaymentTypeSettings as AccountPaymentTypeSettings,
    type AccountCustomerTypeSettings as AccountCustomerTypeSettings,
    type AccountConsentSettings as AccountConsentSettings,
    type AccountPolicyControls as AccountPolicyControls,
    type AccountSettingRetrieveParams as AccountSettingRetrieveParams,
  };

  export {
    Webhooks as Webhooks,
    type AccountCreatedV1WebhookEvent as AccountCreatedV1WebhookEvent,
    type AccountEventV1WebhookEvent as AccountEventV1WebhookEvent,
    type RepresentativeEventV1WebhookEvent as RepresentativeEventV1WebhookEvent,
    type RepresentativeCreatedV1WebhookEvent as RepresentativeCreatedV1WebhookEvent,
    type LinkedBankAccountEventV1WebhookEvent as LinkedBankAccountEventV1WebhookEvent,
    type LinkedBankAccountCreatedV1WebhookEvent as LinkedBankAccountCreatedV1WebhookEvent,
    type CapabilityRequestEventV1WebhookEvent as CapabilityRequestEventV1WebhookEvent,
    type CapabilityRequestCreatedV1WebhookEvent as CapabilityRequestCreatedV1WebhookEvent,
    type CustomerEventV1WebhookEvent as CustomerEventV1WebhookEvent,
    type CustomerCreatedV1WebhookEvent as CustomerCreatedV1WebhookEvent,
    type PaykeyEventV1WebhookEvent as PaykeyEventV1WebhookEvent,
    type PaykeyCreatedV1WebhookEvent as PaykeyCreatedV1WebhookEvent,
    type ChargeCreatedV1WebhookEvent as ChargeCreatedV1WebhookEvent,
    type ChargeEventV1WebhookEvent as ChargeEventV1WebhookEvent,
    type PayoutCreatedV1WebhookEvent as PayoutCreatedV1WebhookEvent,
    type PayoutEventV1WebhookEvent as PayoutEventV1WebhookEvent,
    type PlatformEventV1WebhookEvent as PlatformEventV1WebhookEvent,
    type PlatformCreatedV1WebhookEvent as PlatformCreatedV1WebhookEvent,
    type UserEventV1WebhookEvent as UserEventV1WebhookEvent,
    type UserCreatedV1WebhookEvent as UserCreatedV1WebhookEvent,
    type FundingEventCreatedV1WebhookEvent as FundingEventCreatedV1WebhookEvent,
    type FundingEventEventV1WebhookEvent as FundingEventEventV1WebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}

const headerExplicitlyOmitted = (source: HeadersLike | undefined, name: string): boolean => {
  if (!source || Array.isArray(source) || source instanceof Headers) return false;
  const target = name.toLowerCase();
  return Object.entries(source).some(([key, value]) => key.toLowerCase() === target && value === null);
};

const appendAuthCookies = (headers: Headers, cookies: Record<string, string>): void => {
  for (const [name, value] of Object.entries(cookies)) {
    if (cookieHeaderHas(headers.get('Cookie'), name)) continue;
    const cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    const existing = headers.get('Cookie');
    headers.set('Cookie', existing ? existing + '; ' + cookie : cookie);
  }
};

const cookieHeaderHas = (value: string | null, name: string): boolean => {
  if (!value) return false;
  const target = encodeURIComponent(name) + '=';
  return value.split(';').some((cookie) => cookie.trim().startsWith(target));
};
