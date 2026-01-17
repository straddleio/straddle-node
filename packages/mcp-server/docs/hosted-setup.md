# Straddle Hosted MCP Server

Connect Claude, Cursor, or any MCP client to Straddle's API.

## Endpoint

```text
https://mcp.straddle.com
```

## Authentication

Pass your Straddle API key via the `Authorization` header:

```text
Authorization: Bearer sk_live_xxxxx
```

Or use the custom header:

```text
X-Straddle-API-Key: sk_live_xxxxx
```

## Claude Desktop Setup

Add to your Claude Desktop config (on macOS:
`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "straddle": {
      "url": "https://mcp.straddle.com",
      "headers": {
        "Authorization": "Bearer YOUR_STRADDLE_API_KEY"
      }
    }
  }
}
```

## Cursor Setup

In Cursor Settings > Tools & MCP:

- **URL:** `https://mcp.straddle.com`
- **Headers:** `Authorization: Bearer YOUR_STRADDLE_API_KEY`

## Available Tools

The MCP server exposes all Straddle API endpoints as tools:

- **Charges** - create, update, cancel, get, hold, release
- **Payouts** - create, update, cancel, get, hold, release
- **Customers** - create, update, list, delete, review
- **Paykeys** - list, get, reveal, cancel, review
- **Payments** - list
- **Funding Events** - list, get
- **Embed** - accounts, organizations, representatives, linked bank accounts

## Filtering Tools

Add query parameters to reduce context size:

| Parameter   | Example              | Description                  |
| ----------- | -------------------- | ---------------------------- |
| `resource`  | `?resource=charges`  | Only charge-related tools    |
| `operation` | `?operation=read`    | Only read operations         |
| `client`    | `?client=claude`     | Optimize schemas for Claude  |

Example with filters:

```json
{
  "mcpServers": {
    "straddle": {
      "url": "https://mcp.straddle.com?resource=charges&operation=read",
      "headers": {
        "Authorization": "Bearer YOUR_STRADDLE_API_KEY"
      }
    }
  }
}
```

## Health Check

Verify the server is running:

```bash
curl https://mcp.straddle.com/health
# Returns: {"status":"ok","version":"<current-version>"}
```

## Troubleshooting

### 401 Unauthorized

Your API key is missing or invalid. Ensure the `Authorization` header is set.

### 400 Invalid Request

Check your query parameters. Valid options:

- `resource`: matches API resource names (charges, payouts, customers, etc.)
- `operation`: `read` or `write`
- `client`: `claude`, `cursor`, or omit for default

### Connection Issues

1. Verify your network can reach `https://mcp.straddle.com`
2. Check if your firewall allows outbound HTTPS connections
3. Try the health check endpoint to confirm the server is running

---

## Deployment (Internal)

This service is deployed on Render using the `render.yaml` Blueprint at repo root.

**To deploy:**

1. Connect the GitHub repo to Render
2. Render auto-detects `render.yaml` and creates the service
3. Set up custom domain `mcp.straddle.com` in Render dashboard

Environment variables are passed via headers from clients, not server config.
