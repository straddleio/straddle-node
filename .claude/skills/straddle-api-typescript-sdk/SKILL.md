---
name: straddle-api-typescript-sdk
description: "TypeScript SDK for Straddle API. Use when writing TypeScript code that calls Straddle API with the @straddlecom/straddle package: installing it, constructing and authenticating the client, and calling API operations."
---

# Straddle API TypeScript SDK

Generated TypeScript client for Straddle API, published as `@straddlecom/straddle`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @straddlecom/straddle
```

## Client setup and authentication

```ts
import StraddleAPI from '@straddlecom/straddle';

const client = new StraddleAPI({
  bearer: process.env['BEARER'], // defaults to the BEARER env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `bearer` (env: `BEARER`) — Send the API key as a bearer token in the `Authorization` header.

## Calling operations

```ts
import StraddleAPI from '@straddlecom/straddle';

const client = new StraddleAPI({
  bearer: process.env['BEARER'], // defaults to the BEARER env var
});

const account = await client.accounts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');

console.log(account);
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@straddlecom/straddle';

try {
  const account = await client.accounts.retrieve('7c9e6679-7425-40de-944b-e07fc1f90ae7');
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](../../../README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](../../../api.md) — complete catalogue of every operation with request and response types.
