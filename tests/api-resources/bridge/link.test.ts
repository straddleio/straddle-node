// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from '@straddleio/straddle';
import { Response } from 'node-fetch';

const client = new Straddle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource link', () => {
  test('bankAccount: only required params', async () => {
    const responsePromise = client.bridge.link.bankAccount({
      account_number: 'account_number',
      account_type: 'checking',
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      routing_number: 'xxxxxxxxx',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bankAccount: required and optional params', async () => {
    const response = await client.bridge.link.bankAccount({
      account_number: 'account_number',
      account_type: 'checking',
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      routing_number: 'xxxxxxxxx',
      metadata: { foo: 'string' },
      'Correlation-Id': 'Correlation-Id',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('plaid: only required params', async () => {
    const responsePromise = client.bridge.link.plaid({
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      plaid_token: 'plaid_token',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('plaid: required and optional params', async () => {
    const response = await client.bridge.link.plaid({
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      plaid_token: 'plaid_token',
      metadata: { foo: 'string' },
      'Correlation-Id': 'Correlation-Id',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
