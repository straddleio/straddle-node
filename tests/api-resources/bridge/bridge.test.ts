// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from '@straddleio/straddle';

const client = new Straddle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bridge', () => {
  test('initialize: only required params', async () => {
    const responsePromise = client.bridge.initialize({ customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('initialize: required and optional params', async () => {
    const response = await client.bridge.initialize({
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      config: { sandbox_outcome: 'standard' },
      'Correlation-Id': 'Correlation-Id',
      'Idempotency-Key': 'xxxxxxxxxx',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
