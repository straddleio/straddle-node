// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
}

export const sdkMethods: SdkMethod[] = [{
  clientCallName: 'client.embed.accounts.create',
  fullyQualifiedName: 'embed.accounts.create',
  httpMethod: 'post',
  httpPath: '/v1/accounts',
},{
  clientCallName: 'client.embed.accounts.update',
  fullyQualifiedName: 'embed.accounts.update',
  httpMethod: 'put',
  httpPath: '/v1/accounts/{account_id}',
},{
  clientCallName: 'client.embed.accounts.list',
  fullyQualifiedName: 'embed.accounts.list',
  httpMethod: 'get',
  httpPath: '/v1/accounts',
},{
  clientCallName: 'client.embed.accounts.get',
  fullyQualifiedName: 'embed.accounts.get',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{account_id}',
},{
  clientCallName: 'client.embed.accounts.onboard',
  fullyQualifiedName: 'embed.accounts.onboard',
  httpMethod: 'post',
  httpPath: '/v1/accounts/{account_id}/onboard',
},{
  clientCallName: 'client.embed.accounts.simulate',
  fullyQualifiedName: 'embed.accounts.simulate',
  httpMethod: 'post',
  httpPath: '/v1/accounts/{account_id}/simulate',
},{
  clientCallName: 'client.embed.accounts.capabilityRequests.create',
  fullyQualifiedName: 'embed.accounts.capabilityRequests.create',
  httpMethod: 'post',
  httpPath: '/v1/accounts/{account_id}/capability_requests',
},{
  clientCallName: 'client.embed.accounts.capabilityRequests.list',
  fullyQualifiedName: 'embed.accounts.capabilityRequests.list',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{account_id}/capability_requests',
},{
  clientCallName: 'client.embed.linkedBankAccounts.create',
  fullyQualifiedName: 'embed.linkedBankAccounts.create',
  httpMethod: 'post',
  httpPath: '/v1/linked_bank_accounts',
},{
  clientCallName: 'client.embed.linkedBankAccounts.update',
  fullyQualifiedName: 'embed.linkedBankAccounts.update',
  httpMethod: 'put',
  httpPath: '/v1/linked_bank_accounts/{linked_bank_account_id}',
},{
  clientCallName: 'client.embed.linkedBankAccounts.list',
  fullyQualifiedName: 'embed.linkedBankAccounts.list',
  httpMethod: 'get',
  httpPath: '/v1/linked_bank_accounts',
},{
  clientCallName: 'client.embed.linkedBankAccounts.cancel',
  fullyQualifiedName: 'embed.linkedBankAccounts.cancel',
  httpMethod: 'patch',
  httpPath: '/v1/linked_bank_accounts/{linked_bank_account_id}/cancel',
},{
  clientCallName: 'client.embed.linkedBankAccounts.get',
  fullyQualifiedName: 'embed.linkedBankAccounts.get',
  httpMethod: 'get',
  httpPath: '/v1/linked_bank_accounts/{linked_bank_account_id}',
},{
  clientCallName: 'client.embed.linkedBankAccounts.unmask',
  fullyQualifiedName: 'embed.linkedBankAccounts.unmask',
  httpMethod: 'get',
  httpPath: '/v1/linked_bank_accounts/{linked_bank_account_id}/unmask',
},{
  clientCallName: 'client.embed.organizations.create',
  fullyQualifiedName: 'embed.organizations.create',
  httpMethod: 'post',
  httpPath: '/v1/organizations',
},{
  clientCallName: 'client.embed.organizations.list',
  fullyQualifiedName: 'embed.organizations.list',
  httpMethod: 'get',
  httpPath: '/v1/organizations',
},{
  clientCallName: 'client.embed.organizations.get',
  fullyQualifiedName: 'embed.organizations.get',
  httpMethod: 'get',
  httpPath: '/v1/organizations/{organization_id}',
},{
  clientCallName: 'client.embed.representatives.create',
  fullyQualifiedName: 'embed.representatives.create',
  httpMethod: 'post',
  httpPath: '/v1/representatives',
},{
  clientCallName: 'client.embed.representatives.update',
  fullyQualifiedName: 'embed.representatives.update',
  httpMethod: 'put',
  httpPath: '/v1/representatives/{representative_id}',
},{
  clientCallName: 'client.embed.representatives.list',
  fullyQualifiedName: 'embed.representatives.list',
  httpMethod: 'get',
  httpPath: '/v1/representatives',
},{
  clientCallName: 'client.embed.representatives.get',
  fullyQualifiedName: 'embed.representatives.get',
  httpMethod: 'get',
  httpPath: '/v1/representatives/{representative_id}',
},{
  clientCallName: 'client.embed.representatives.unmask',
  fullyQualifiedName: 'embed.representatives.unmask',
  httpMethod: 'get',
  httpPath: '/v1/representatives/{representative_id}/unmask',
},{
  clientCallName: 'client.bridge.initialize',
  fullyQualifiedName: 'bridge.initialize',
  httpMethod: 'post',
  httpPath: '/v1/bridge/initialize',
},{
  clientCallName: 'client.bridge.link.bankAccount',
  fullyQualifiedName: 'bridge.link.bankAccount',
  httpMethod: 'post',
  httpPath: '/v1/bridge/bank_account',
},{
  clientCallName: 'client.bridge.link.createPaykey',
  fullyQualifiedName: 'bridge.link.createPaykey',
  httpMethod: 'post',
  httpPath: '/v1/bridge/quiltt',
},{
  clientCallName: 'client.bridge.link.createTan',
  fullyQualifiedName: 'bridge.link.createTan',
  httpMethod: 'post',
  httpPath: '/v1/bridge/tan',
},{
  clientCallName: 'client.bridge.link.plaid',
  fullyQualifiedName: 'bridge.link.plaid',
  httpMethod: 'post',
  httpPath: '/v1/bridge/plaid',
},{
  clientCallName: 'client.customers.create',
  fullyQualifiedName: 'customers.create',
  httpMethod: 'post',
  httpPath: '/v1/customers',
},{
  clientCallName: 'client.customers.update',
  fullyQualifiedName: 'customers.update',
  httpMethod: 'put',
  httpPath: '/v1/customers/{id}',
},{
  clientCallName: 'client.customers.list',
  fullyQualifiedName: 'customers.list',
  httpMethod: 'get',
  httpPath: '/v1/customers',
},{
  clientCallName: 'client.customers.delete',
  fullyQualifiedName: 'customers.delete',
  httpMethod: 'delete',
  httpPath: '/v1/customers/{id}',
},{
  clientCallName: 'client.customers.get',
  fullyQualifiedName: 'customers.get',
  httpMethod: 'get',
  httpPath: '/v1/customers/{id}',
},{
  clientCallName: 'client.customers.unmasked',
  fullyQualifiedName: 'customers.unmasked',
  httpMethod: 'get',
  httpPath: '/v1/customers/{id}/unmasked',
},{
  clientCallName: 'client.customers.review.decision',
  fullyQualifiedName: 'customers.review.decision',
  httpMethod: 'patch',
  httpPath: '/v1/customers/{id}/review',
},{
  clientCallName: 'client.customers.review.get',
  fullyQualifiedName: 'customers.review.get',
  httpMethod: 'get',
  httpPath: '/v1/customers/{id}/review',
},{
  clientCallName: 'client.customers.review.refreshReview',
  fullyQualifiedName: 'customers.review.refreshReview',
  httpMethod: 'put',
  httpPath: '/v1/customers/{id}/refresh_review',
},{
  clientCallName: 'client.paykeys.list',
  fullyQualifiedName: 'paykeys.list',
  httpMethod: 'get',
  httpPath: '/v1/paykeys',
},{
  clientCallName: 'client.paykeys.cancel',
  fullyQualifiedName: 'paykeys.cancel',
  httpMethod: 'put',
  httpPath: '/v1/paykeys/{id}/cancel',
},{
  clientCallName: 'client.paykeys.get',
  fullyQualifiedName: 'paykeys.get',
  httpMethod: 'get',
  httpPath: '/v1/paykeys/{id}',
},{
  clientCallName: 'client.paykeys.reveal',
  fullyQualifiedName: 'paykeys.reveal',
  httpMethod: 'get',
  httpPath: '/v1/paykeys/{id}/reveal',
},{
  clientCallName: 'client.paykeys.unmasked',
  fullyQualifiedName: 'paykeys.unmasked',
  httpMethod: 'get',
  httpPath: '/v1/paykeys/{id}/unmasked',
},{
  clientCallName: 'client.paykeys.updateBalance',
  fullyQualifiedName: 'paykeys.updateBalance',
  httpMethod: 'put',
  httpPath: '/v1/paykeys/{id}/refresh_balance',
},{
  clientCallName: 'client.paykeys.review.decision',
  fullyQualifiedName: 'paykeys.review.decision',
  httpMethod: 'patch',
  httpPath: '/v1/paykeys/{id}/review',
},{
  clientCallName: 'client.paykeys.review.get',
  fullyQualifiedName: 'paykeys.review.get',
  httpMethod: 'get',
  httpPath: '/v1/paykeys/{id}/review',
},{
  clientCallName: 'client.paykeys.review.refreshReview',
  fullyQualifiedName: 'paykeys.review.refreshReview',
  httpMethod: 'put',
  httpPath: '/v1/paykeys/{id}/refresh_review',
},{
  clientCallName: 'client.charges.create',
  fullyQualifiedName: 'charges.create',
  httpMethod: 'post',
  httpPath: '/v1/charges',
},{
  clientCallName: 'client.charges.update',
  fullyQualifiedName: 'charges.update',
  httpMethod: 'put',
  httpPath: '/v1/charges/{id}',
},{
  clientCallName: 'client.charges.cancel',
  fullyQualifiedName: 'charges.cancel',
  httpMethod: 'put',
  httpPath: '/v1/charges/{id}/cancel',
},{
  clientCallName: 'client.charges.get',
  fullyQualifiedName: 'charges.get',
  httpMethod: 'get',
  httpPath: '/v1/charges/{id}',
},{
  clientCallName: 'client.charges.hold',
  fullyQualifiedName: 'charges.hold',
  httpMethod: 'put',
  httpPath: '/v1/charges/{id}/hold',
},{
  clientCallName: 'client.charges.release',
  fullyQualifiedName: 'charges.release',
  httpMethod: 'put',
  httpPath: '/v1/charges/{id}/release',
},{
  clientCallName: 'client.charges.unmask',
  fullyQualifiedName: 'charges.unmask',
  httpMethod: 'get',
  httpPath: '/v1/charges/{id}/unmask',
},{
  clientCallName: 'client.fundingEvents.list',
  fullyQualifiedName: 'fundingEvents.list',
  httpMethod: 'get',
  httpPath: '/v1/funding_events',
},{
  clientCallName: 'client.fundingEvents.get',
  fullyQualifiedName: 'fundingEvents.get',
  httpMethod: 'get',
  httpPath: '/v1/funding_events/{id}',
},{
  clientCallName: 'client.payments.list',
  fullyQualifiedName: 'payments.list',
  httpMethod: 'get',
  httpPath: '/v1/payments',
},{
  clientCallName: 'client.payouts.create',
  fullyQualifiedName: 'payouts.create',
  httpMethod: 'post',
  httpPath: '/v1/payouts',
},{
  clientCallName: 'client.payouts.update',
  fullyQualifiedName: 'payouts.update',
  httpMethod: 'put',
  httpPath: '/v1/payouts/{id}',
},{
  clientCallName: 'client.payouts.cancel',
  fullyQualifiedName: 'payouts.cancel',
  httpMethod: 'put',
  httpPath: '/v1/payouts/{id}/cancel',
},{
  clientCallName: 'client.payouts.get',
  fullyQualifiedName: 'payouts.get',
  httpMethod: 'get',
  httpPath: '/v1/payouts/{id}',
},{
  clientCallName: 'client.payouts.hold',
  fullyQualifiedName: 'payouts.hold',
  httpMethod: 'put',
  httpPath: '/v1/payouts/{id}/hold',
},{
  clientCallName: 'client.payouts.release',
  fullyQualifiedName: 'payouts.release',
  httpMethod: 'put',
  httpPath: '/v1/payouts/{id}/release',
},{
  clientCallName: 'client.payouts.unmask',
  fullyQualifiedName: 'payouts.unmask',
  httpMethod: 'get',
  httpPath: '/v1/payouts/{id}/unmask',
},{
  clientCallName: 'client.reports.createTotalCustomersByStatus',
  fullyQualifiedName: 'reports.createTotalCustomersByStatus',
  httpMethod: 'post',
  httpPath: '/v1/reports/total_customers_by_status',
}];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods.filter((method) => method.httpMethod === 'get').forEach(
        (method) => allowedMethodsSet.add(method)
      );
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(`Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`);
        }
      });

      sdkMethods.filter((method) =>
          allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName))
        ).forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(`Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`);
      }
    });

    allowedMethods = allowedMethods.filter((method) =>
      !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName))
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
