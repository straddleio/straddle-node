// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LinkedBankAccountsAPI from './linked-bank-accounts';
import {
  LinkedBankAccount,
  LinkedBankAccountCreateParams,
  LinkedBankAccountGetParams,
  LinkedBankAccountListParams,
  LinkedBankAccountPaged,
  LinkedBankAccountPagedDataPageNumberSchema,
  LinkedBankAccountUnmask,
  LinkedBankAccountUnmaskParams,
  LinkedBankAccountUpdateParams,
  LinkedBankAccounts,
} from './linked-bank-accounts';
import * as OrganizationsAPI from './organizations';
import {
  Organization,
  OrganizationCreateParams,
  OrganizationListParams,
  OrganizationPaged,
  OrganizationPagedDataPageNumberSchema,
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
  RepresentativeUpdateParams,
  Representatives,
} from './representatives';
import * as AccountsAPI from './accounts/accounts';
import {
  Account,
  AccountCreateParams,
  AccountGetParams,
  AccountListParams,
  AccountOnboardParams,
  AccountPaged,
  AccountPagedDataPageNumberSchema,
  AccountSimulateParams,
  AccountUpdateParams,
  Accounts,
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
Embed.AccountPagedDataPageNumberSchema = AccountPagedDataPageNumberSchema;
Embed.LinkedBankAccounts = LinkedBankAccounts;
Embed.LinkedBankAccountPagedDataPageNumberSchema = LinkedBankAccountPagedDataPageNumberSchema;
Embed.Organizations = Organizations;
Embed.OrganizationPagedDataPageNumberSchema = OrganizationPagedDataPageNumberSchema;
Embed.Representatives = Representatives;
Embed.RepresentativePagedDataPageNumberSchema = RepresentativePagedDataPageNumberSchema;

export declare namespace Embed {
  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountPaged as AccountPaged,
    AccountPagedDataPageNumberSchema as AccountPagedDataPageNumberSchema,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountGetParams as AccountGetParams,
    type AccountOnboardParams as AccountOnboardParams,
    type AccountSimulateParams as AccountSimulateParams,
  };

  export {
    LinkedBankAccounts as LinkedBankAccounts,
    type LinkedBankAccount as LinkedBankAccount,
    type LinkedBankAccountPaged as LinkedBankAccountPaged,
    type LinkedBankAccountUnmask as LinkedBankAccountUnmask,
    LinkedBankAccountPagedDataPageNumberSchema as LinkedBankAccountPagedDataPageNumberSchema,
    type LinkedBankAccountCreateParams as LinkedBankAccountCreateParams,
    type LinkedBankAccountUpdateParams as LinkedBankAccountUpdateParams,
    type LinkedBankAccountListParams as LinkedBankAccountListParams,
    type LinkedBankAccountGetParams as LinkedBankAccountGetParams,
    type LinkedBankAccountUnmaskParams as LinkedBankAccountUnmaskParams,
  };

  export {
    Organizations as Organizations,
    type Organization as Organization,
    type OrganizationPaged as OrganizationPaged,
    OrganizationPagedDataPageNumberSchema as OrganizationPagedDataPageNumberSchema,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationListParams as OrganizationListParams,
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
  };
}
