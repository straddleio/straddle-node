// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CustomersAPI from './customers';
import * as Shared from '../shared';
import * as ReviewAPI from './review';
import {
  CustomerReviewV1,
  IdentityVerificationBreakdownV1,
  Review,
  ReviewDecisionParams,
  ReviewGetParams,
} from './review';
import { PageNumberSchema, type PageNumberSchemaParams } from '../../pagination';

export class Customers extends APIResource {
  review: ReviewAPI.Review = new ReviewAPI.Review(this._client);

  /**
   * Creates a new customer record and automatically initiates identity, fraud, and
   * risk assessment scores. This endpoint allows you to create a customer profile
   * and associate it with paykeys and payments.
   */
  create(params: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomerV1> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.post('/v1/customers', {
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

  /**
   * Updates an existing customer's information. This endpoint allows you to modify
   * the customer's contact details, PII, and metadata.
   */
  update(
    id: string,
    params: CustomerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerV1> {
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...body
    } = params;
    return this._client.put(`/v1/customers/${id}`, {
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

  /**
   * Lists or searches customers connected to your account. All supported query
   * parameters are optional. If none are provided, the response will include all
   * customers connected to your account. This endpoint supports advanced sorting and
   * filtering options.
   */
  list(
    params?: CustomerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerSummaryPagedV1DataPageNumberSchema, CustomerSummaryPagedV1.Data>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerSummaryPagedV1DataPageNumberSchema, CustomerSummaryPagedV1.Data>;
  list(
    params: CustomerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerSummaryPagedV1DataPageNumberSchema, CustomerSummaryPagedV1.Data> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
      ...query
    } = params;
    return this._client.getAPIList('/v1/customers', CustomerSummaryPagedV1DataPageNumberSchema, {
      query,
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Permanently removes a customer record from Straddle. This action cannot be
   * undone and should only be used to satisfy regulatory requirements or for privacy
   * compliance.
   */
  delete(
    id: string,
    params?: CustomerDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerV1>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<CustomerV1>;
  delete(
    id: string,
    params: CustomerDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerV1> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.delete(`/v1/customers/${id}`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves the details of an existing customer. Supply the unique customer ID
   * that was returned from your 'create customer' request, and Straddle will return
   * the corresponding customer information.
   */
  get(id: string, params?: CustomerGetParams, options?: Core.RequestOptions): Core.APIPromise<CustomerV1>;
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<CustomerV1>;
  get(
    id: string,
    params: CustomerGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerV1> {
    if (isRequestOptions(params)) {
      return this.get(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/customers/${id}`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Updates the decision of a customer's identity validation. This endpoint allows
   * you to modify the outcome of a customer decision and is useful for correcting or
   * updating the status of a customer's verification.
   */
  refreshReview(
    id: string,
    params?: CustomerRefreshReviewParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerV1>;
  refreshReview(id: string, options?: Core.RequestOptions): Core.APIPromise<CustomerV1>;
  refreshReview(
    id: string,
    params: CustomerRefreshReviewParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerV1> {
    if (isRequestOptions(params)) {
      return this.refreshReview(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.put(`/v1/customers/${id}/refresh_review`, {
      ...options,
      headers: {
        ...(correlationId != null ? { 'Correlation-Id': correlationId } : undefined),
        ...(requestId != null ? { 'Request-Id': requestId } : undefined),
        ...(straddleAccountId != null ? { 'Straddle-Account-Id': straddleAccountId } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Retrieves the unmasked details, including PII, of an existing customer. Supply
   * the unique customer ID that was returned from your 'create customer' request,
   * and Straddle will return the corresponding customer information. This endpoint
   * needs to be enabled by Straddle and should only be used when absolutely
   * necessary.
   */
  unmasked(
    id: string,
    params?: CustomerUnmaskedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerUnmaskedV1>;
  unmasked(id: string, options?: Core.RequestOptions): Core.APIPromise<CustomerUnmaskedV1>;
  unmasked(
    id: string,
    params: CustomerUnmaskedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerUnmaskedV1> {
    if (isRequestOptions(params)) {
      return this.unmasked(id, {}, params);
    }
    const {
      'Correlation-Id': correlationId,
      'Request-Id': requestId,
      'Straddle-Account-Id': straddleAccountId,
    } = params;
    return this._client.get(`/v1/customers/${id}/unmasked`, {
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

export class CustomerSummaryPagedV1DataPageNumberSchema extends PageNumberSchema<CustomerSummaryPagedV1.Data> {}

/**
 * An object containing the customer's address. This is optional, but if provided,
 * all required fields must be present.
 */
export interface CustomerAddressV1 {
  /**
   * Primary address line (e.g., street, PO Box).
   */
  address1: string;

  /**
   * City, district, suburb, town, or village.
   */
  city: string;

  /**
   * Two-letter state code.
   */
  state: string;

  /**
   * Zip or postal code.
   */
  zip: string;

  /**
   * Secondary address line (e.g., apartment, suite, unit, or building).
   */
  address2?: string | null;
}

export interface CustomerSummaryPagedV1 {
  data: Array<CustomerSummaryPagedV1.Data>;

  meta: CustomerSummaryPagedV1.Meta;

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

export namespace CustomerSummaryPagedV1 {
  export interface Data {
    /**
     * Unique identifier for the customer.
     */
    id: string;

    /**
     * Timestamp of when the customer record was created.
     */
    created_at: string;

    /**
     * The customer's email address.
     */
    email: string;

    /**
     * Full name of the individual or business name.
     */
    name: string;

    /**
     * The customer's phone number in E.164 format.
     */
    phone: string;

    status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

    type: 'individual' | 'business';

    /**
     * Timestamp of the most recent update to the customer record.
     */
    updated_at: string;

    /**
     * Unique identifier for the customer in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;
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

    /**
     * Maximum allowed page size for this endpoint.
     */
    max_page_size: number;

    /**
     * Page number for paginated results.
     */
    page_number: number;

    /**
     * Number of items per page in this response.
     */
    page_size: number;

    /**
     * The field that the results were sorted by.
     */
    sort_by: string;

    sort_order: 'asc' | 'desc';

    total_items: number;

    /**
     * The number of pages available.
     */
    total_pages: number;
  }
}

export interface CustomerUnmaskedV1 {
  data: CustomerUnmaskedV1.Data;

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

export namespace CustomerUnmaskedV1 {
  export interface Data {
    /**
     * Unique identifier for the customer.
     */
    id: string;

    /**
     * Timestamp of when the customer record was created.
     */
    created_at: string;

    /**
     * The customer's email address.
     */
    email: string;

    /**
     * Full name of the individual or business name.
     */
    name: string;

    /**
     * The customer's phone number in E.164 format.
     */
    phone: string;

    status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

    type: 'individual' | 'business';

    /**
     * Timestamp of the most recent update to the customer record.
     */
    updated_at: string;

    /**
     * An object containing the customer's address. This is optional, but if provided,
     * all required fields must be present.
     */
    address?: CustomersAPI.CustomerAddressV1 | null;

    /**
     * Individual PII data required to trigger Patriot Act compliant KYC verification.
     */
    compliance_profile?: Data.IndividualComplianceProfile | Data.BusinessComplianceProfile | null;

    device?: CustomersAPI.DeviceUnmaskedV1;

    /**
     * Unique identifier for the customer in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the customer in a structured format.
     */
    metadata?: Record<string, string> | null;
  }

  export namespace Data {
    /**
     * Individual PII data required to trigger Patriot Act compliant KYC verification.
     */
    export interface IndividualComplianceProfile {
      /**
       * Date of birth (YYYY-MM-DD). Required for Patriot Act-compliant KYC verification.
       */
      dob: string | null;

      /**
       * Social Security Number (format XXX-XX-XXXX). Required for Patriot Act-compliant
       * KYC verification.
       */
      ssn: string | null;

      /**
       * Full 9-digit Employer Identification Number for businesses. This data is
       * required to trigger Patriot Act compliant KYB verification. Only valid where
       * customer type is 'business'.
       */
      ein?: string | null;

      /**
       * The official name of the business. This name should be correlated with the ein
       * value. Only valid where customer type is 'business'.
       */
      legal_business_name?: string | null;

      /**
       * A list of people related to the company. Only valid where customer type is
       * 'business'.
       */
      representatives?: Array<IndividualComplianceProfile.Representative> | null;

      /**
       * URL of the company's official website. Only valid where customer type is
       * 'business'.
       */
      website?: string | null;
    }

    export namespace IndividualComplianceProfile {
      export interface Representative {
        name: string;

        email?: string | null;

        phone?: string | null;
      }
    }

    /**
     * Business registration data required to trigger Patriot Act compliant KYB
     * verification.
     */
    export interface BusinessComplianceProfile {
      /**
       * Employer Identification Number (format XX-XXXXXXX). Required for Patriot
       * Act-compliant KYB verification.
       */
      ein: string | null;

      /**
       * Official registered business name as listed with the IRS. This value will be
       * matched against the 'legal_business name'.
       */
      legal_business_name: string | null;

      /**
       * Date of birth for individual customers in ISO 8601 format (YYYY-MM-DD). This
       * data is required to trigger Patriot Act compliant KYC verification. Required if
       * SSN is provided. Only valid where customer type is 'individual'.
       */
      dob?: string | null;

      /**
       * A list of people related to the company. Only valid where customer type is
       * 'business'.
       */
      representatives?: Array<BusinessComplianceProfile.Representative> | null;

      /**
       * Full 9-digit Social Security Number or government identifier for individuals.
       * This data is required to trigger Patriot Act compliant KYC verification.
       * Required if DOB is provided. Only valid where customer type is 'individual'.
       */
      ssn?: string | null;

      /**
       * Official business website URL. Optional but recommended for enhanced KYB.
       */
      website?: string | null;
    }

    export namespace BusinessComplianceProfile {
      export interface Representative {
        name: string;

        email?: string | null;

        phone?: string | null;
      }
    }
  }
}

export interface CustomerV1 {
  data: CustomerV1.Data;

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

export namespace CustomerV1 {
  export interface Data {
    /**
     * Unique identifier for the customer.
     */
    id: string;

    /**
     * Timestamp of when the customer record was created.
     */
    created_at: string;

    /**
     * The customer's email address.
     */
    email: string;

    /**
     * Full name of the individual or business name.
     */
    name: string;

    /**
     * The customer's phone number in E.164 format.
     */
    phone: string;

    status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

    type: 'individual' | 'business';

    /**
     * Timestamp of the most recent update to the customer record.
     */
    updated_at: string;

    /**
     * An object containing the customer's address. This is optional, but if provided,
     * all required fields must be present.
     */
    address?: CustomersAPI.CustomerAddressV1 | null;

    /**
     * PII required to trigger Patriot Act compliant KYC verification.
     */
    compliance_profile?: Data.IndividualComplianceProfile | Data.BusinessComplianceProfile | null;

    device?: Data.Device;

    /**
     * Unique identifier for the customer in your database, used for cross-referencing
     * between Straddle and your systems.
     */
    external_id?: string | null;

    /**
     * Up to 20 additional user-defined key-value pairs. Useful for storing additional
     * information about the customer in a structured format.
     */
    metadata?: Record<string, string> | null;
  }

  export namespace Data {
    /**
     * PII required to trigger Patriot Act compliant KYC verification.
     */
    export interface IndividualComplianceProfile {
      /**
       * Masked date of birth in \***\*-**-\*\* format.
       */
      dob: string | null;

      /**
       * Masked Social Security Number in the format **\*-**-\*\*\*\*.
       */
      ssn: string | null;

      /**
       * Full 9-digit Employer Identification Number for businesses. This data is
       * required to trigger Patriot Act compliant Know Your Business (KYB) verification.
       * Only valid where customer type is 'business'.
       */
      ein?: string | null;

      /**
       * The official name of the business. This name should be correlated with the ein
       * value. Only valid where customer type is 'business'.
       */
      legal_business_name?: string | null;

      /**
       * A list of people related to the company. Only valid where customer type is
       * 'business'.
       */
      representatives?: Array<IndividualComplianceProfile.Representative> | null;

      /**
       * URL of the company's official website. Only valid where customer type is
       * 'business'.
       */
      website?: string | null;
    }

    export namespace IndividualComplianceProfile {
      export interface Representative {
        name: string;

        email?: string | null;

        phone?: string | null;
      }
    }

    /**
     * Business registration data required to trigger Patriot Act compliant KYB
     * verification.
     */
    export interface BusinessComplianceProfile {
      /**
       * Masked Employer Identification Number in the format **-**\*****
       */
      ein: string | null;

      /**
       * The official registered name of the business. This name should be correlated
       * with the `ein` value.
       */
      legal_business_name: string | null;

      /**
       * Date of birth for individual customers in ISO 8601 format (YYYY-MM-DD). This
       * data is required to trigger Patriot Act compliant Know Your Customer (KYC)
       * verification. Required if SSN is provided. Only valid where customer type is
       * 'individual'.
       */
      dob?: string | null;

      /**
       * A list of people related to the company. Only valid where customer type is
       * 'business'.
       */
      representatives?: Array<BusinessComplianceProfile.Representative> | null;

      /**
       * Full 9-digit Social Security Number or government identifier for individuals.
       * This data is required to trigger Patriot Act compliant KYC verification.
       * Required if DOB is provided. Only valid where customer type is 'individual'.
       */
      ssn?: string | null;

      /**
       * Official business website URL. Optional but recommended for enhanced KYB.
       */
      website?: string | null;
    }

    export namespace BusinessComplianceProfile {
      export interface Representative {
        name: string;

        email?: string | null;

        phone?: string | null;
      }
    }

    export interface Device {
      /**
       * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
       * represent an offline customer registration.
       */
      ip_address: string;
    }
  }
}

export interface DeviceUnmaskedV1 {
  /**
   * The customer's IP address at the time of profile creation. Use `0.0.0.0` to
   * represent an offline customer registration.
   */
  ip_address: string;
}

export interface CustomerCreateParams {
  /**
   * Body param:
   */
  device: DeviceUnmaskedV1;

  /**
   * Body param: The customer's email address.
   */
  email: string;

  /**
   * Body param: Full name of the individual or business name.
   */
  name: string;

  /**
   * Body param: The customer's phone number in E.164 format. Mobile number is
   * preferred.
   */
  phone: string;

  /**
   * Body param:
   */
  type: 'individual' | 'business';

  /**
   * Body param: An object containing the customer's address. **This is optional.**
   * If used, all required fields must be present.
   */
  address?: CustomerAddressV1 | null;

  /**
   * Body param: An object containing the customer's compliance profile. **This is
   * optional.** If all required fields must be present for the appropriate customer
   * type.
   */
  compliance_profile?:
    | CustomerCreateParams.IndividualComplianceProfile
    | CustomerCreateParams.BusinessComplianceProfile
    | null;

  /**
   * Body param: Unique identifier for the customer in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the customer in a structured format.
   */
  metadata?: Record<string, string> | null;

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

export namespace CustomerCreateParams {
  /**
   * Individual PII data required to trigger Patriot Act compliant KYC verification.
   */
  export interface IndividualComplianceProfile {
    /**
     * Date of birth (YYYY-MM-DD). Required for Patriot Act-compliant KYC verification.
     */
    dob: string | null;

    /**
     * Social Security Number (format XXX-XX-XXXX). Required for Patriot Act-compliant
     * KYC verification.
     */
    ssn: string | null;

    /**
     * Full 9-digit Employer Identification Number for businesses. This data is
     * required to trigger Patriot Act compliant KYB verification. Only valid where
     * customer type is 'business'.
     */
    ein?: string | null;

    /**
     * The official name of the business. This name should be correlated with the ein
     * value. Only valid where customer type is 'business'.
     */
    legal_business_name?: string | null;

    /**
     * A list of people related to the company. Only valid where customer type is
     * 'business'.
     */
    representatives?: Array<IndividualComplianceProfile.Representative> | null;

    /**
     * URL of the company's official website. Only valid where customer type is
     * 'business'.
     */
    website?: string | null;
  }

  export namespace IndividualComplianceProfile {
    export interface Representative {
      name: string;

      email?: string | null;

      phone?: string | null;
    }
  }

  /**
   * Business registration data required to trigger Patriot Act compliant KYB
   * verification.
   */
  export interface BusinessComplianceProfile {
    /**
     * Employer Identification Number (format XX-XXXXXXX). Required for Patriot
     * Act-compliant KYB verification.
     */
    ein: string | null;

    /**
     * Official registered business name as listed with the IRS. This value will be
     * matched against the 'legal_business name'.
     */
    legal_business_name: string | null;

    /**
     * Date of birth for individual customers in ISO 8601 format (YYYY-MM-DD). This
     * data is required to trigger Patriot Act compliant KYC verification. Required if
     * SSN is provided. Only valid where customer type is 'individual'.
     */
    dob?: string | null;

    /**
     * A list of people related to the company. Only valid where customer type is
     * 'business'.
     */
    representatives?: Array<BusinessComplianceProfile.Representative> | null;

    /**
     * Full 9-digit Social Security Number or government identifier for individuals.
     * This data is required to trigger Patriot Act compliant KYC verification.
     * Required if DOB is provided. Only valid where customer type is 'individual'.
     */
    ssn?: string | null;

    /**
     * Official business website URL. Optional but recommended for enhanced KYB.
     */
    website?: string | null;
  }

  export namespace BusinessComplianceProfile {
    export interface Representative {
      name: string;

      email?: string | null;

      phone?: string | null;
    }
  }
}

export interface CustomerUpdateParams {
  /**
   * Body param:
   */
  device: DeviceUnmaskedV1;

  /**
   * Body param: The customer's email address.
   */
  email: string;

  /**
   * Body param: The customer's full name or business name.
   */
  name: string;

  /**
   * Body param: The customer's phone number in E.164 format.
   */
  phone: string;

  /**
   * Body param:
   */
  status: 'pending' | 'review' | 'verified' | 'inactive' | 'rejected';

  /**
   * Body param: An object containing the customer's address. This is optional, but
   * if provided, all required fields must be present.
   */
  address?: CustomerAddressV1 | null;

  /**
   * Body param: Individual PII data required to trigger Patriot Act compliant KYC
   * verification.
   */
  compliance_profile?:
    | CustomerUpdateParams.IndividualComplianceProfile
    | CustomerUpdateParams.BusinessComplianceProfile
    | null;

  /**
   * Body param: Unique identifier for the customer in your database, used for
   * cross-referencing between Straddle and your systems.
   */
  external_id?: string | null;

  /**
   * Body param: Up to 20 additional user-defined key-value pairs. Useful for storing
   * additional information about the customer in a structured format.
   */
  metadata?: Record<string, string> | null;

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

export namespace CustomerUpdateParams {
  /**
   * Individual PII data required to trigger Patriot Act compliant KYC verification.
   */
  export interface IndividualComplianceProfile {
    /**
     * Date of birth (YYYY-MM-DD). Required for Patriot Act-compliant KYC verification.
     */
    dob: string | null;

    /**
     * Social Security Number (format XXX-XX-XXXX). Required for Patriot Act-compliant
     * KYC verification.
     */
    ssn: string | null;

    /**
     * Full 9-digit Employer Identification Number for businesses. This data is
     * required to trigger Patriot Act compliant KYB verification. Only valid where
     * customer type is 'business'.
     */
    ein?: string | null;

    /**
     * The official name of the business. This name should be correlated with the ein
     * value. Only valid where customer type is 'business'.
     */
    legal_business_name?: string | null;

    /**
     * A list of people related to the company. Only valid where customer type is
     * 'business'.
     */
    representatives?: Array<IndividualComplianceProfile.Representative> | null;

    /**
     * URL of the company's official website. Only valid where customer type is
     * 'business'.
     */
    website?: string | null;
  }

  export namespace IndividualComplianceProfile {
    export interface Representative {
      name: string;

      email?: string | null;

      phone?: string | null;
    }
  }

  /**
   * Business registration data required to trigger Patriot Act compliant KYB
   * verification.
   */
  export interface BusinessComplianceProfile {
    /**
     * Employer Identification Number (format XX-XXXXXXX). Required for Patriot
     * Act-compliant KYB verification.
     */
    ein: string | null;

    /**
     * Official registered business name as listed with the IRS. This value will be
     * matched against the 'legal_business name'.
     */
    legal_business_name: string | null;

    /**
     * Date of birth for individual customers in ISO 8601 format (YYYY-MM-DD). This
     * data is required to trigger Patriot Act compliant KYC verification. Required if
     * SSN is provided. Only valid where customer type is 'individual'.
     */
    dob?: string | null;

    /**
     * A list of people related to the company. Only valid where customer type is
     * 'business'.
     */
    representatives?: Array<BusinessComplianceProfile.Representative> | null;

    /**
     * Full 9-digit Social Security Number or government identifier for individuals.
     * This data is required to trigger Patriot Act compliant KYC verification.
     * Required if DOB is provided. Only valid where customer type is 'individual'.
     */
    ssn?: string | null;

    /**
     * Official business website URL. Optional but recommended for enhanced KYB.
     */
    website?: string | null;
  }

  export namespace BusinessComplianceProfile {
    export interface Representative {
      name: string;

      email?: string | null;

      phone?: string | null;
    }
  }
}

export interface CustomerListParams extends PageNumberSchemaParams {
  /**
   * Query param: Start date for filtering by `created_at` date.
   */
  created_from?: string;

  /**
   * Query param: End date for filtering by `created_at` date.
   */
  created_to?: string;

  /**
   * Query param: Filter customers by `email` address.
   */
  email?: string;

  /**
   * Query param: Filter by your system's `external_id`.
   */
  external_id?: string;

  /**
   * Query param: Filter customers by `name` (partial match).
   */
  name?: string;

  /**
   * Query param: General search term to filter customers.
   */
  search_text?: string;

  /**
   * Query param:
   */
  sort_by?: 'name' | 'created_at';

  /**
   * Query param:
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Query param: Filter customers by their current `status`.
   */
  status?: Array<'pending' | 'review' | 'verified' | 'inactive' | 'rejected'>;

  /**
   * Query param: Filter by customer type `individual` or `business`.
   */
  types?: Array<'individual' | 'business'>;

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
   * Header param: For use by platforms to specify an `account_id` to set the scope
   * of a request.
   */
  'Straddle-Account-Id'?: string;
}

export interface CustomerDeleteParams {
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

export interface CustomerGetParams {
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

export interface CustomerRefreshReviewParams {
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

export interface CustomerUnmaskedParams {
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

Customers.CustomerSummaryPagedV1DataPageNumberSchema = CustomerSummaryPagedV1DataPageNumberSchema;
Customers.Review = Review;

export declare namespace Customers {
  export {
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
    type CustomerRefreshReviewParams as CustomerRefreshReviewParams,
    type CustomerUnmaskedParams as CustomerUnmaskedParams,
  };

  export {
    Review as Review,
    type CustomerReviewV1 as CustomerReviewV1,
    type IdentityVerificationBreakdownV1 as IdentityVerificationBreakdownV1,
    type ReviewDecisionParams as ReviewDecisionParams,
    type ReviewGetParams as ReviewGetParams,
  };
}
