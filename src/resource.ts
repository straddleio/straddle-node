// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { StraddleAPI } from './client';

export abstract class APIResource {
  protected _client: StraddleAPI;

  constructor(client: StraddleAPI) {
    this._client = client;
  }
}
