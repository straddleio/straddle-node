// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';
import express from 'express';
import helmet from 'helmet';
import { fromError } from 'zod-validation-error/v3';

import { parseAuthHeaders } from './headers.js';
import { McpOptions, parseQueryOptions } from './options.js';
import { ClientOptions, initMcpServer, newMcpServer } from './server.js';

const { version } = require('./package.json');

function sendJsonRpcError(res: express.Response, status: number, message: string): void {
  res.status(status).json({
    jsonrpc: '2.0',
    error: { code: -32000, message },
  });
}

function createServer(
  clientOptions: ClientOptions,
  defaultMcpOptions: McpOptions,
  req: express.Request,
  res: express.Response,
): McpServer | null {
  const server = newMcpServer();

  let mcpOptions: McpOptions;
  try {
    mcpOptions = parseQueryOptions(defaultMcpOptions, req.query);
  } catch (error) {
    sendJsonRpcError(res, 400, `Invalid request: ${fromError(error)}`);
    return null;
  }

  try {
    const authOptions = parseAuthHeaders(req);
    initMcpServer({
      server,
      clientOptions: { ...clientOptions, ...authOptions },
      mcpOptions,
    });
  } catch (error) {
    sendJsonRpcError(res, 401, `Unauthorized: ${error instanceof Error ? error.message : error}`);
    return null;
  }

  return server;
}

function createPostHandler(clientOptions: ClientOptions, mcpOptions: McpOptions) {
  return async function handlePost(req: express.Request, res: express.Response): Promise<void> {
    const server = createServer(clientOptions, mcpOptions, req, res);
    if (server === null) return;

    // Stateless mode: no session management, each request is independent
    const transport = new StreamableHTTPServerTransport({});
    // Type assertion needed due to exactOptionalPropertyTypes strictness in SDK 1.25+
    await server.connect(transport as Transport);
    await transport.handleRequest(req, res, req.body);
  };
}

function handleMethodNotAllowed(_req: express.Request, res: express.Response): void {
  sendJsonRpcError(res, 405, 'Method not supported');
}

export function streamableHTTPApp({
  clientOptions = {},
  mcpOptions = {},
}: {
  clientOptions?: ClientOptions;
  mcpOptions?: McpOptions;
}): express.Express {
  const app = express();
  app.set('query parser', 'extended');
  // SECURITY: HTTP security headers (HSTS, X-Content-Type-Options, etc.)
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'none'"],
          frameAncestors: ["'none'"],
        },
      },
      hsts: {
        maxAge: 31536000, // 1 year
        includeSubDomains: true,
      },
    }),
  );
  app.use(express.json());

  app.get('/', handleMethodNotAllowed);
  app.post('/', createPostHandler(clientOptions, mcpOptions));
  app.delete('/', handleMethodNotAllowed);
  app.get('/health', (_req, res) => res.json({ status: 'ok', version }));

  return app;
}

export async function launchStreamableHTTPServer(
  options: McpOptions,
  port: number | string | undefined,
): Promise<void> {
  const app = streamableHTTPApp({ mcpOptions: options });
  const server = app.listen(port);
  const address = server.address();

  const location =
    typeof address === 'string' ? address
    : address !== null ? `port ${address.port}`
    : `port ${port}`;

  console.error(`MCP Server running on streamable HTTP at ${location}`);
}
