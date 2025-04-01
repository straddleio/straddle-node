# Straddle Node MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Via Claude Desktop

See [the user guide](https://modelcontextprotocol.io/quickstart/user) for setup.

Once it's set up, find your `claude_desktop_config.json` file:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following value to your `mcpServers` section. Make sure to provide any necessary environment variables (like API keys) as well.

```json
{
  "mcpServers": {
    "straddleio_straddle_api": {
      "command": "npx",
      "args": ["-y", "@straddleio/straddle-mcp"],
      "env": {
        "STRADDLE_API_KEY": "My API Key"
      }
    }
  }
}
```
