// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from '@straddleio/straddle';

const client = new Straddle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payouts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.payouts.create({
      amount: 10000,
      currency: 'currency',
      description: 'Vendor invoice payment',
      device: { ip_address: '192.168.1.1' },
      external_id: 'external_id',
      paykey: 'paykey',
      payment_date: '2019-12-27',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.payouts.create({
      amount: 10000,
      currency: 'currency',
      description: 'Vendor invoice payment',
      device: { ip_address: '192.168.1.1' },
      external_id: 'external_id',
      paykey: 'paykey',
      payment_date: '2019-12-27',
      config: { sandbox_outcome: 'standard' },
      metadata: { foo: 'string' },
      'Correlation-Id': 'Correlation-Id',
      'Idempotency-Key': 'xxxxxxxxxx',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.payouts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 10000,
      description: 'description',
      payment_date: '2019-12-27',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.payouts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 10000,
      description: 'description',
      payment_date: '2019-12-27',
      metadata: { foo: 'string' },
      'Correlation-Id': 'Correlation-Id',
      'Idempotency-Key': 'xxxxxxxxxx',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('cancel: only required params', async () => {
    const responsePromise = client.payouts.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'reason',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await client.payouts.cancel('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'reason',
      'Correlation-Id': 'Correlation-Id',
      'Idempotency-Key': 'xxxxxxxxxx',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('get', async () => {
    const responsePromise = client.payouts.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.payouts.get(
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

  test('hold: only required params', async () => {
    const responsePromise = client.payouts.hold('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { reason: 'reason' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('hold: required and optional params', async () => {
    const response = await client.payouts.hold('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'reason',
      'Correlation-Id': 'Correlation-Id',
      'Idempotency-Key': 'xxxxxxxxxx',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('release: only required params', async () => {
    const responsePromise = client.payouts.release('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'reason',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('release: required and optional params', async () => {
    const response = await client.payouts.release('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'reason',
      'Correlation-Id': 'Correlation-Id',
      'Idempotency-Key': 'xxxxxxxxxx',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('unmask', async () => {
    const responsePromise = client.payouts.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unmask: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payouts.unmask(
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
});
