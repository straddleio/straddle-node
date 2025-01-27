// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from 'straddle';
import { Response } from 'node-fetch';

const client = new Straddle({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  test('list', async () => {
    const responsePromise = client.payments.list();
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
    await expect(client.payments.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Straddle.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payments.list(
        {
          customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          default_page_size: 0,
          default_sort: 'created_at',
          default_sort_order: 'asc',
          external_id: 'external_id',
          funding_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          max_amount: 0,
          max_created_at: '2019-12-27T18:11:19.117Z',
          max_effective_at: '2019-12-27T18:11:19.117Z',
          max_payment_date: '2019-12-27',
          min_amount: 0,
          min_created_at: '2019-12-27T18:11:19.117Z',
          min_effective_at: '2019-12-27T18:11:19.117Z',
          min_payment_date: '2019-12-27',
          page_number: 0,
          page_size: 0,
          paykey: 'paykey',
          paykey_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          payment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          payment_status: ['created'],
          payment_type: ['charge'],
          search_text: 'search_text',
          sort_by: 'created_at',
          sort_order: 'asc',
          'Correlation-Id': 'Correlation-Id',
          'Request-Id': 'Request-Id',
          'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });
});
