// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from '@straddleio/straddle';
import { Response } from 'node-fetch';

const client = new Straddle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.embed.accounts.create({
      access_level: 'standard',
      account_type: 'unknown',
      business_profile: { name: 'name', website: 'website' },
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.embed.accounts.create({
      access_level: 'standard',
      account_type: 'unknown',
      business_profile: {
        name: 'name',
        website: 'website',
        address: {
          city: 'city',
          country: 'country',
          line1: 'line1',
          line2: 'line2',
          postal_code: 'postal_code',
          state: 'state',
        },
        description: 'description',
        industry: { category: 'category', mcc: 'mcc', sector: 'sector' },
        legal_name: 'legal_name',
        phone: 'phone',
        support_channels: { email: 'email', phone: 'phone', url: 'url' },
        tax_id: 'tax_id',
        use_case: 'use_case',
      },
      organization_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      external_id: 'external_id',
      metadata: { foo: 'string' },
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.embed.accounts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      business_profile: { name: 'name', website: 'website' },
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
    const response = await client.embed.accounts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      business_profile: {
        name: 'name',
        website: 'website',
        address: {
          city: 'city',
          country: 'country',
          line1: 'line1',
          line2: 'line2',
          postal_code: 'postal_code',
          state: 'state',
        },
        description: 'description',
        industry: { category: 'category', mcc: 'mcc', sector: 'sector' },
        legal_name: 'legal_name',
        phone: 'phone',
        support_channels: { email: 'email', phone: 'phone', url: 'url' },
        tax_id: 'tax_id',
        use_case: 'use_case',
      },
      external_id: 'external_id',
      metadata: { foo: 'string' },
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.embed.accounts.list({ page_number: 0, page_size: 0, sort_order: 'asc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.embed.accounts.list({
      page_number: 0,
      page_size: 0,
      sort_order: 'asc',
      search_text: 'search_text',
      sort_by: 'sort_by',
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });

  test('get', async () => {
    const responsePromise = client.embed.accounts.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.embed.accounts.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.embed.accounts.get(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { 'correlation-id': 'correlation-id', 'request-id': 'request-id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('onboard: only required params', async () => {
    const responsePromise = client.embed.accounts.onboard('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      terms_of_service: { accepted_date: '2019-12-27T18:11:19.117Z', agreement_type: 'embedded' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('onboard: required and optional params', async () => {
    const response = await client.embed.accounts.onboard('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      terms_of_service: {
        accepted_date: '2019-12-27T18:11:19.117Z',
        agreement_type: 'embedded',
        accepted_ip: 'accepted_ip',
        accepted_user_agent: 'accepted_user_agent',
        agreement_url: 'agreement_url',
      },
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });

  test('simulate', async () => {
    const responsePromise = client.embed.accounts.simulate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('simulate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.embed.accounts.simulate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Straddle.NotFoundError);
  });

  test('simulate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.embed.accounts.simulate(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { final_status: 'onboarding', 'correlation-id': 'correlation-id', 'request-id': 'request-id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Straddle.NotFoundError);
  });
});
