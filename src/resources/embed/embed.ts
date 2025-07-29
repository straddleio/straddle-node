// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LinkedBankAccountsAPI from './linked-bank-accounts';
import {
  LinkedBankAccountCancelParams,
  LinkedBankAccountCreateParams,
  LinkedBankAccountGetParams,
  LinkedBankAccountListParams,
  LinkedBankAccountPagedV1,
  LinkedBankAccountPagedV1DataPageNumberSchema,
  LinkedBankAccountUnmaskParams,
  LinkedBankAccountUnmaskV1,
  LinkedBankAccountUpdateParams,
  LinkedBankAccountV1,
  LinkedBankAccounts,
} from './linked-bank-accounts';
import * as OrganizationsAPI from './organizations';
import {
  OrganizationCreateParams,
  OrganizationGetParams,
  OrganizationListParams,
  OrganizationPagedV1,
  OrganizationPagedV1DataPageNumberSchema,
  OrganizationV1,
  Organizations,
} from './organizations';
import * as RepresentativesAPI from './representatives';
import {
  Representative,
  RepresentativeCreateParams,
  RepresentativeGetParams,
  RepresentativeListParams,
  RepresentativePaged,
  RepresentativePagedDataPageNumberSchema,
  RepresentativeUnmaskParams,
  RepresentativeUpdateParams,
  Representatives,
} from './representatives';
import * as AccountsAPI from './accounts/accounts';
import {
  AccountCreateParams,
  AccountGetParams,
  AccountListParams,
  AccountOnboardParams,
  AccountPagedV1,
  AccountPagedV1DataPageNumberSchema,
  AccountSimulateParams,
  AccountUpdateParams,
  AccountV1,
  Accounts,
  AddressV1,
  BusinessProfileV1,
  CapabilityV1,
  IndustryV1,
  SupportChannelsV1,
  TermsOfServiceV1,
} from './accounts/accounts';

export class Embed extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  linkedBankAccounts: LinkedBankAccountsAPI.LinkedBankAccounts = new LinkedBankAccountsAPI.LinkedBankAccounts(
    this._client,
  );
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  representatives: RepresentativesAPI.Representatives = new RepresentativesAPI.Representatives(this._client);
}

Embed.Accounts = Accounts;
Embed.AccountPagedV1DataPageNumberSchema = AccountPagedV1DataPageNumberSchema;
Embed.LinkedBankAccounts = LinkedBankAccounts;
Embed.LinkedBankAccountPagedV1DataPageNumberSchema = LinkedBankAccountPagedV1DataPageNumberSchema;
Embed.Organizations = Organizations;
Embed.OrganizationPagedV1DataPageNumberSchema = OrganizationPagedV1DataPageNumberSchema;
Embed.Representatives = Representatives;
Embed.RepresentativePagedDataPageNumberSchema = RepresentativePagedDataPageNumberSchema;

export declare namespace Embed {
  export {
    Accounts as Accounts,
    type AccountPagedV1 as AccountPagedV1,
    type AccountV1 as AccountV1,
    type AddressV1 as AddressV1,
    type BusinessProfileV1 as BusinessProfileV1,
    type CapabilityV1 as CapabilityV1,
    type IndustryV1 as IndustryV1,
    type SupportChannelsV1 as SupportChannelsV1,
    type TermsOfServiceV1 as TermsOfServiceV1,
    AccountPagedV1DataPageNumberSchema as AccountPagedV1DataPageNumberSchema,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountGetParams as AccountGetParams,
    type AccountOnboardParams as AccountOnboardParams,
    type AccountSimulateParams as AccountSimulateParams,
  };

  export {
    LinkedBankAccounts as LinkedBankAccounts,
    type LinkedBankAccountPagedV1 as LinkedBankAccountPagedV1,
    type LinkedBankAccountUnmaskV1 as LinkedBankAccountUnmaskV1,
    type LinkedBankAccountV1 as LinkedBankAccountV1,
    LinkedBankAccountPagedV1DataPageNumberSchema as LinkedBankAccountPagedV1DataPageNumberSchema,
    type LinkedBankAccountCreateParams as LinkedBankAccountCreateParams,
    type LinkedBankAccountUpdateParams as LinkedBankAccountUpdateParams,
    type LinkedBankAccountListParams as LinkedBankAccountListParams,
    type LinkedBankAccountCancelParams as LinkedBankAccountCancelParams,
    type LinkedBankAccountGetParams as LinkedBankAccountGetParams,
    type LinkedBankAccountUnmaskParams as LinkedBankAccountUnmaskParams,
  };

  export {
    Organizations as Organizations,
    type OrganizationPagedV1 as OrganizationPagedV1,
    type OrganizationV1 as OrganizationV1,
    OrganizationPagedV1DataPageNumberSchema as OrganizationPagedV1DataPageNumberSchema,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationGetParams as OrganizationGetParams,
  };

  export {
    Representatives as Representatives,
    type Representative as Representative,
    type RepresentativePaged as RepresentativePaged,
    RepresentativePagedDataPageNumberSchema as RepresentativePagedDataPageNumberSchema,
    type RepresentativeCreateParams as RepresentativeCreateParams,
    type RepresentativeUpdateParams as RepresentativeUpdateParams,
    type RepresentativeListParams as RepresentativeListParams,
    type RepresentativeGetParams as RepresentativeGetParams,
    type RepresentativeUnmaskParams as RepresentativeUnmaskParams,
  };
}
