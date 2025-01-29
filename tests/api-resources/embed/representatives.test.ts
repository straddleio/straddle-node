// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from '@straddleio/straddle';
import { Response } from 'node-fetch';

const client = new Straddle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource representatives', () => {
  test('create: only required params', async () => {
    const responsePromise = client.embed.representatives.create({
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dob: '1980-01-01',
      email: 'ron.swanson@pawnee.com',
      first_name: 'first_name',
      last_name: 'last_name',
      mobile_number: '+12128675309',
      relationship: { control: true, owner: true, primary: true },
      ssn_last4: '1234',
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
    const response = await client.embed.representatives.create({
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dob: '1980-01-01',
      email: 'ron.swanson@pawnee.com',
      first_name: 'first_name',
      last_name: 'last_name',
      mobile_number: '+12128675309',
      relationship: { control: true, owner: true, primary: true, percent_ownership: 0, title: 'title' },
      ssn_last4: '1234',
      external_id: 'external_id',
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.embed.representatives.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      dob: '1980-01-01',
      email: 'ron.swanson@pawnee.com',
      first_name: 'Ron',
      last_name: 'Swanson',
      mobile_number: '+12128675309',
      relationship: { control: true, owner: true, primary: true },
      ssn_last4: '1234',
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
    const response = await client.embed.representatives.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      dob: '1980-01-01',
      email: 'ron.swanson@pawnee.com',
      first_name: 'Ron',
      last_name: 'Swanson',
      mobile_number: '+12128675309',
      relationship: { control: true, owner: true, primary: true, percent_ownership: 0, title: 'title' },
      ssn_last4: '1234',
      external_id: 'external_id',
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });

  test('list', async () => {
    const responsePromise = client.embed.representatives.list();
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
    await expect(client.embed.representatives.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Straddle.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.embed.representatives.list(
        {
          account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          page_number: 0,
          page_size: 0,
          platform_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          sort_by: 'sort_by',
          sort_order: 'asc',
          'correlation-id': 'correlation-id',
          'request-id': 'request-id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.embed.representatives.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.embed.representatives.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.embed.representatives.get(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { 'correlation-id': 'correlation-id', 'request-id': 'request-id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('unmask', async () => {
    const responsePromise = client.embed.representatives.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.embed.representatives.unmask('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('unmask: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.embed.representatives.unmask(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { 'correlation-id': 'correlation-id', 'request-id': 'request-id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });
});
