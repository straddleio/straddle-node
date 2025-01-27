// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from 'straddle';
import { Response } from 'node-fetch';

const client = new Straddle({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource linkedBankAccounts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.linkedBankAccounts.create({
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      bank_account: {
        account_holder: 'account_holder',
        account_number: 'account_number',
        routing_number: 'xxxxxxxxx',
      },
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
    const response = await client.linkedBankAccounts.create({
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      bank_account: {
        account_holder: 'account_holder',
        account_number: 'account_number',
        routing_number: 'xxxxxxxxx',
      },
      metadata: { foo: 'string' },
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.linkedBankAccounts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.linkedBankAccounts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.linkedBankAccounts.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { 'correlation-id': 'correlation-id', 'request-id': 'request-id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.linkedBankAccounts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      bank_account: {
        account_holder: 'account_holder',
        account_number: 'account_number',
        routing_number: 'xxxxxxxxx',
      },
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
    const response = await client.linkedBankAccounts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      bank_account: {
        account_holder: 'account_holder',
        account_number: 'account_number',
        routing_number: 'xxxxxxxxx',
      },
      metadata: { foo: 'string' },
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });

  test('list', async () => {
    const responsePromise = client.linkedBankAccounts.list();
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
    await expect(client.linkedBankAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Straddle.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.linkedBankAccounts.list(
        {
          account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          page_number: 0,
          page_size: 0,
          sort_by: 'sort_by',
          sort_order: 'asc',
          'correlation-id': 'correlation-id',
          'request-id': 'request-id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('unmask', async () => {
    const responsePromise = client.linkedBankAccounts.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unmask: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.linkedBankAccounts.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('unmask: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.linkedBankAccounts.unmask(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { 'correlation-id': 'correlation-id', 'request-id': 'request-id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });
});
