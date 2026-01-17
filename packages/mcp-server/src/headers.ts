// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from '@straddlecom/straddle';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!.toLowerCase();
    switch (scheme) {
      case 'bearer': {
        const apiKey = req.headers.authorization.slice(scheme.length + 1).trim();
        // SECURITY: Validate bearer token is not empty
        if (!apiKey) {
          throw new Error('Bearer token is empty');
        }
        return { apiKey };
      }
      default:
        throw new Error(
          'Unsupported authorization scheme. Expected the "Authorization" header to be a supported scheme (Bearer).',
        );
    }
  }

  const rawApiKey =
    Array.isArray(req.headers['x-straddle-api-key']) ?
      req.headers['x-straddle-api-key'][0]
    : req.headers['x-straddle-api-key'];

  const apiKey = rawApiKey?.trim();

  // SECURITY: Require API key for all requests - fail fast with clear error
  if (!apiKey) {
    throw new Error(
      'API key required. Provide via "Authorization: Bearer <key>" or "X-Straddle-API-Key" header.',
    );
  }

  return { apiKey };
};
