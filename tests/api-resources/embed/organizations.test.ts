// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Straddle from '@straddleio/straddle';
import { Response } from 'node-fetch';

const client = new Straddle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.embed.organizations.create({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.embed.organizations.create({
      name: 'name',
      external_id: 'external_id',
      metadata: { foo: 'string' },
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.embed.organizations.list({
      page_number: 0,
      page_size: 0,
      sort_by: 'sort_by',
      sort_order: 'asc',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.embed.organizations.list({
      page_number: 0,
      page_size: 0,
      sort_by: 'sort_by',
      sort_order: 'asc',
      external_id: 'external_id',
      name: 'name',
      'correlation-id': 'correlation-id',
      'request-id': 'request-id',
    });
  });
});
