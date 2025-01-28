// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from '@straddleio/straddle';
import { Response } from 'node-fetch';

const client = new Straddle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource capabilityRequests', () => {
  test('create', async () => {
    const responsePromise = client.embed.accounts.capabilityRequests.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
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
      client.embed.accounts.capabilityRequests.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.embed.accounts.capabilityRequests.create(
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

  test('list: only required params', async () => {
    const responsePromise = client.embed.accounts.capabilityRequests.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { page_number: 0, page_size: 0, sort_by: 'sort_by', sort_order: 'asc' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.embed.accounts.capabilityRequests.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        page_number: 0,
        page_size: 0,
        sort_by: 'sort_by',
        sort_order: 'asc',
        category: 'payment_type',
        status: 'approved',
        type: 'charges',
        'correlation-id': 'correlation-id',
        'request-id': 'request-id',
      },
    );
  });
});
