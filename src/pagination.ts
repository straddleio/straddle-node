// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageNumberSchemaResponse<Item> {
  data: Array<Item>;

  meta: PageNumberSchemaResponse.Meta;
}

export namespace PageNumberSchemaResponse {
  export interface Meta {
    page_number?: number;

    total_items?: number;
  }
}

export interface PageNumberSchemaParams {
  page_number?: number;

  page_size?: number;
}

export class PageNumberSchema<Item> extends AbstractPage<Item> implements PageNumberSchemaResponse<Item> {
  data: Array<Item>;

  meta: PageNumberSchemaResponse.Meta;

  constructor(
    client: APIClient,
    response: Response,
    body: PageNumberSchemaResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.meta = body.meta || {};
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageNumberSchemaParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const currentPage = this.meta?.page_number;

    return { params: { page_number: currentPage + 1 } };
  }
}
