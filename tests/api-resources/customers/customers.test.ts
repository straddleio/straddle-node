// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from 'straddle';
import { Response } from 'node-fetch';

const client = new Straddle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.customers.create({
      device: { ip_address: '192.168.1.1' },
      email: 'ron.swanson@pawnee.com',
      name: 'Ron Swanson',
      phone: '+12128675309',
      type: 'individual',
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
    const response = await client.customers.create({
      device: { ip_address: '192.168.1.1' },
      email: 'ron.swanson@pawnee.com',
      name: 'Ron Swanson',
      phone: '+12128675309',
      type: 'individual',
      address: { address1: '123 Main St', city: 'Anytown', state: 'CA', zip: '94105', address2: 'address2' },
      compliance_profile: { dob: '2019-12-27', ssn: '210-69-1329' },
      external_id: 'customer_123',
      metadata: { foo: 'string' },
      'Correlation-Id': 'Correlation-Id',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.customers.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.customers.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.retrieve(
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

  test('update: only required params', async () => {
    const responsePromise = client.customers.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      device: { ip_address: '192.168.1.1' },
      email: 'dev@stainlessapi.com',
      name: 'name',
      phone: '+46991022',
      status: 'pending',
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
    const response = await client.customers.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      device: { ip_address: '192.168.1.1' },
      email: 'dev@stainlessapi.com',
      name: 'name',
      phone: '+46991022',
      status: 'pending',
      address: { address1: '123 Main St', city: 'Anytown', state: 'CA', zip: '94105', address2: 'address2' },
      compliance_profile: { dob: '2019-12-27', ssn: '210-69-1329' },
      external_id: 'external_id',
      metadata: { foo: 'string' },
      'Correlation-Id': 'Correlation-Id',
      'Request-Id': 'Request-Id',
      'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('list', async () => {
    const responsePromise = client.customers.list();
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
    await expect(client.customers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Straddle.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.list(
        {
          created_from: '2019-12-27T18:11:19.117Z',
          created_to: '2019-12-27T18:11:19.117Z',
          email: 'email',
          external_id: 'external_id',
          name: 'name',
          page_number: 0,
          page_size: 0,
          search_text: 'search_text',
          sort_by: 'name',
          sort_order: 'asc',
          status: ['pending'],
          types: ['individual'],
          'Correlation-Id': 'Correlation-Id',
          'Request-Id': 'Request-Id',
          'Straddle-Account-Id': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.customers.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.delete(
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

  test('unmasked', async () => {
    const responsePromise = client.customers.unmasked('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unmasked: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.unmasked('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('unmasked: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.unmasked(
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
