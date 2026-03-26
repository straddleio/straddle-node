# Straddle MCP Server

Connect your AI tools to the Straddle payments API. This MCP server lets agents search SDK documentation and execute TypeScript code against the Straddle API in a sandboxed environment.

For full SDK documentation, visit [sdk.straddle.com](https://sdk.straddle.com).

This server is available at:

```
{{cloudflareWorkerUrl}}
```

### Claude.ai

To connect Claude Web to this MCP server:

1. Open Claude Web
2. Go to Settings -> Connectors
3. Click "+ Add Custom Connector"
4. Add the MCP server URL: `{{cloudflareWorkerUrl}}`

### Claude Desktop

Claude Desktop requires using the `mcp-remote` package to connect to remote MCP servers:

1. Edit your Claude Desktop configuration file:
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
2. Add the following configuration:

```json
{
  "mcpServers": {
    "straddlecom_straddle_api": {
      "command": "npx",
      "args": ["-y", "mcp-remote@latest", "{{cloudflareWorkerUrl}}"]
    }
  }
}
```

3. Restart Claude Desktop to see the MCP server connection (look for the hammer icon)

### Cursor

1. Edit your Cursor MCP configuration file at `~/.cursor/mcp.json`
2. Add the following configuration:

```json
{
  "mcpServers": {
    "straddlecom_straddle_api": {
      "command": "npx",
      "args": ["-y", "mcp-remote@latest", "{{cloudflareWorkerUrl}}"]
    }
  }
}
```

### Windsurf

1. Edit your Windsurf configuration file at `~/.codeium/windsurf/mcp_config.json`
2. Add the following configuration:

```json
{
  "mcpServers": {
    "straddlecom_straddle_api": {
      "command": "npx",
      "args": ["-y", "mcp-remote@latest", "{{cloudflareWorkerUrl}}"]
    }
  }
}
```

## Troubleshooting

If you encounter issues connecting:

1. Ensure you have Node.js 18 or higher installed
2. Try clearing MCP authentication cache: `rm -rf ~/.mcp-auth`
3. Restart your MCP client application
4. Check client logs for error messages

## Learn More

- [Straddle SDK Documentation](https://sdk.straddle.com)
- [Straddle API Documentation](https://docs.straddle.com)
- [MCP Introduction](https://modelcontextprotocol.io/introduction)
- [mcp-remote package](https://www.npmjs.com/package/mcp-remote)
