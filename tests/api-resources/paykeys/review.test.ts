// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from '@straddlecom/straddle';

const client = new Straddle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource review', () => {
  test('decision: only required params', async () => {
    const responsePromise = client.paykeys.review.decision('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      status: 'active',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('decision: required and optional params', async () => {
    const response = await client.paykeys.review.decision('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      status: 'active',
      'Correlation-Id': 'Correlation-Id',
      'Idempotency-Key': 'xxxxxxxxxx',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('get', async () => {
    const responsePromise = client.paykeys.review.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.paykeys.review.get(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          'Correlation-Id': 'Correlation-Id',
          'Request-Id': 'Request-Id',
          'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('refreshReview', async () => {
    const responsePromise = client.paykeys.review.refreshReview('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('refreshReview: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.paykeys.review.refreshReview(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          'Correlation-Id': 'Correlation-Id',
          'Idempotency-Key': 'xxxxxxxxxx',
          'Request-Id': 'Request-Id',
          'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });
});
