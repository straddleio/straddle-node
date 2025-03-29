// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { tools, handlers } from './tools';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import './resources/shared';
import './resources/embed/embed';
import './resources/embed/accounts/accounts';
import './resources/embed/accounts/capability-requests';
import './resources/embed/linked-bank-accounts';
import './resources/embed/organizations';
import './resources/embed/representatives';
import './resources/bridge/bridge';
import './resources/bridge/link';
import './resources/customers/customers';
import './resources/customers/review';
import './resources/paykeys';
import './resources/charges';
import './resources/funding-events';
import './resources/payments';
import './resources/payouts';
import './resources/reports';
import Straddle from '@straddleio/straddle';
export { tools, handlers } from './tools';

// Instantiate client
const client = new Straddle();

// Create server instance
export const server = new Server(
  {
    name: 'straddle_api',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

export function initServer() {
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools,
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    const handler = handlers[name];
    if (!handler) {
      throw new Error(`Unknown tool: ${name}`);
    }

    const result = await handler(client, args);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  });
}

async function main() {
  initServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Server running on stdio');
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
  });
}
