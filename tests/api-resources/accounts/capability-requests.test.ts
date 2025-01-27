// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from 'straddle';
import { Response } from 'node-fetch';

const client = new Straddle({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource capabilityRequests', () => {
  test('create', async () => {
    const responsePromise = client.accounts.capabilityRequests.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.capabilityRequests.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.capabilityRequests.create(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          businesses: { enable: true },
          charges: { daily_amount: 0, enable: true, max_amount: 0, monthly_amount: 0, monthly_count: 0 },
          individuals: { enable: true },
          internet: { enable: true },
          payouts: { daily_amount: 0, enable: true, max_amount: 0, monthly_amount: 0, monthly_count: 0 },
          signed_agreement: { enable: true },
          'correlation-id': 'correlation-id',
          'request-id': 'request-id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.accounts.capabilityRequests.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.capabilityRequests.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.capabilityRequests.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          category: 'payment_type',
          page_number: 0,
          page_size: 0,
          sort_by: 'sort_by',
          sort_order: 'asc',
          status: 'active',
          type: 'charges',
          'correlation-id': 'correlation-id',
          'request-id': 'request-id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });
});
