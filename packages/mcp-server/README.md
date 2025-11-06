# Straddle TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export STRADDLE_API_KEY="My API Key"
export STRADDLE_ENVIRONMENT="sandbox"
npx -y @straddlecom/straddle-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "straddlecom_straddle_api": {
      "command": "npx",
      "args": ["-y", "@straddlecom/straddle-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "STRADDLE_API_KEY": "My API Key",
        "STRADDLE_ENVIRONMENT": "sandbox"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=@straddlecom/straddle-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBzdHJhZGRsZWNvbS9zdHJhZGRsZS1tY3AiXSwiZW52Ijp7IlNUUkFERExFX0FQSV9LRVkiOiJTZXQgeW91ciBTVFJBRERMRV9BUElfS0VZIGhlcmUuIn19)

## Exposing endpoints to your MCP Client

There are three ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API
3. Exposing a docs search tool and a code execution tool, allowing the client to write code to be executed against the TypeScript client

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Code execution

If you specify `--tools=code` to the MCP server, it will expose just two tools:

- `search_docs` - Searches the API documentation and returns a list of markdown results
- `execute` - Runs code against the TypeScript client

This allows the LLM to implement more complex logic by chaining together many API calls without loading
intermediary results into its context window.

The code execution itself happens in a Deno sandbox that has network access only to the base URL for the API.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| -------------------- | ------------------------ | --------------- |
| `x-straddle-api-key` | `apiKey` | Bearer |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "straddlecom_straddle_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@straddlecom/straddle-mcp/server";

// import a specific tool
import createEmbedAccounts from "@straddlecom/straddle-mcp/tools/embed/accounts/create-embed-accounts";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createEmbedAccounts, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `embed.accounts`:

- `create_embed_accounts` (`write`): Creates a new account associated with your Straddle platform integration. This endpoint allows you to set up an account with specified details, including business information and access levels.
- `update_embed_accounts` (`write`): Updates an existing account's information. This endpoint allows you to update various account details during onboarding or after the account has been created.
- `list_embed_accounts` (`read`): Returns a list of accounts associated with your Straddle platform integration. The accounts are returned sorted by creation date, with the most recently created accounts appearing first. This endpoint supports advanced sorting and filtering options.
- `get_embed_accounts` (`read`): Retrieves the details of an account that has previously been created. Supply the unique account ID that was returned from your previous request, and Straddle will return the corresponding account information.
- `onboard_embed_accounts` (`write`): Initiates the onboarding process for a new account. This endpoint can only be used for accounts where at least one representative and one bank account have already been created.
- `simulate_embed_accounts` (`write`): Simulate the status transitions for sandbox accounts. This endpoint can only be used for sandbox accounts.

### Resource `embed.accounts.capability_requests`:

- `create_accounts_embed_capability_requests` (`write`): Submits a request to enable a specific capability for an account. Use this endpoint to request additional features or services for an account.
- `list_accounts_embed_capability_requests` (`read`): Retrieves a list of capability requests associated with an account. The requests are returned sorted by creation date, with the most recent requests appearing first. This endpoint supports advanced sorting and filtering options.

### Resource `embed.linked_bank_accounts`:

- `create_embed_linked_bank_accounts` (`write`): Creates a new linked bank account associated with a Straddle account. This endpoint allows you to associate external bank accounts with a Straddle account for various payment operations such as payment deposits, payout withdrawals, and more.
- `update_embed_linked_bank_accounts` (`write`): Updates an existing linked bank account's information. This can be used to update account details during onboarding or to update metadata associated with the linked account. The linked bank account must be in 'created' or 'onboarding' status.
- `list_embed_linked_bank_accounts` (`read`): Returns a list of bank accounts associated with a specific Straddle account. The linked bank accounts are returned sorted by creation date, with the most recently created appearing first. This endpoint supports pagination to handle accounts with multiple linked bank accounts.
- `cancel_embed_linked_bank_accounts` (`write`): Cancels an existing linked bank account. This can be used to cancel a linked bank account before it has been reviewed. The linked bank account must be in 'created' status.
- `get_embed_linked_bank_accounts` (`read`): Retrieves the details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information. The response includes masked account details for security purposes.
- `unmask_embed_linked_bank_accounts` (`read`): Retrieves the unmasked details of a linked bank account that has previously been created. Supply the unique linked bank account `id`, and Straddle will return the corresponding information, including sensitive details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.

### Resource `embed.organizations`:

- `create_embed_organizations` (`write`): Creates a new organization related to your Straddle integration. Organizations can be used to group related accounts and manage permissions across multiple users.
- `list_embed_organizations` (`read`): Retrieves a list of organizations associated with your Straddle integration. The organizations are returned sorted by creation date, with the most recently created organizations appearing first. This endpoint supports advanced sorting and filtering options to help you find specific organizations.
- `get_embed_organizations` (`read`): Retrieves the details of an Organization that has previously been created. Supply the unique organization ID that was returned from your previous request, and Straddle will return the corresponding organization information.

### Resource `embed.representatives`:

- `create_embed_representatives` (`write`): Creates a new representative associated with an account. Representatives are individuals who have legal authority or significant responsibility within the business.
- `update_embed_representatives` (`write`): Updates an existing representative's information. This can be used to update personal details, contact information, or the relationship to the account or organization.
- `list_embed_representatives` (`read`): Returns a list of representatives associated with a specific account or organization. The representatives are returned sorted by creation date, with the most recently created representatives appearing first. This endpoint supports advanced sorting and filtering options.
- `get_embed_representatives` (`read`): Retrieves the details of an existing representative. Supply the unique representative ID, and Straddle will return the corresponding representative information.
- `unmask_embed_representatives` (`read`): Retrieves the unmasked details of a representative that has previously been created. Supply the unique representative ID, and Straddle will return the corresponding representative information, including sensitive details. This endpoint requires additional authentication and should be used with caution.

### Resource `bridge`:

- `initialize_bridge` (`write`): Use this endpoint to generate a session token for use in the Bridge widget.

### Resource `bridge.link`:

- `bank_account_bridge_link` (`write`): Use Bridge to create a new paykey using a bank routing and account number as the source. This endpoint allows you to create a secure payment token linked to a specific bank account.
- `create_paykey_bridge_link` (`write`): Creates a new paykey using a Quiltt token as the source. This endpoint allows you to create a secure payment token linked to a bank account authenticated through Quiltt.
- `create_tan_bridge_link` (`write`):
- `plaid_bridge_link` (`write`): Use Bridge to create a new paykey using a Plaid token as the source. This endpoint allows you to create a secure payment token linked to a bank account authenticated through Plaid.

### Resource `customers`:

- `create_customers` (`write`): Creates a new customer record and automatically initiates identity, fraud, and risk assessment scores. This endpoint allows you to create a customer profile and associate it with paykeys and payments.
- `update_customers` (`write`): Updates an existing customer's information. This endpoint allows you to modify the customer's contact details, PII, and metadata.
- `list_customers` (`read`): Lists or searches customers connected to your account. All supported query parameters are optional. If none are provided, the response will include all customers connected to your account. This endpoint supports advanced sorting and filtering options.
- `delete_customers` (`write`): Permanently removes a customer record from Straddle. This action cannot be undone and should only be used to satisfy regulatory requirements or for privacy compliance.
- `get_customers` (`read`): Retrieves the details of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information.
- `refresh_review_customers` (`write`): Updates the decision of a customer's identity validation. This endpoint allows you to modify the outcome of a customer decision and is useful for correcting or updating the status of a customer's verification.
- `unmasked_customers` (`read`): Retrieves the unmasked details, including PII, of an existing customer. Supply the unique customer ID that was returned from your 'create customer' request, and Straddle will return the corresponding customer information. This endpoint needs to be enabled by Straddle and should only be used when absolutely necessary.

### Resource `customers.review`:

- `decision_customers_review` (`write`): Updates the status of a customer's identity decision. This endpoint allows you to modify the outcome of a customer risk screening and is useful for correcting or updating the status of a customer's verification. Note that this endpoint is only available for customers with a current status of `review`.
- `get_customers_review` (`read`): Retrieves and analyzes the results of a customer's identity validation and fraud score. This endpoint provides a comprehensive breakdown of the validation outcome, including:
  - Risk and correlation scores
  - Reason codes for the decision
  - Results of watchlist screening
  - Any network alerts detected
    Use this endpoint to gain insights into the verification process and make informed decisions about customer onboarding.

### Resource `paykeys`:

- `list_paykeys` (`read`): Returns a list of paykeys associated with a Straddle account. This endpoint supports advanced sorting and filtering options.
- `cancel_paykeys` (`write`):
- `get_paykeys` (`read`): Retrieves the details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record , including the `paykey` token value and masked bank account details.
- `reveal_paykeys` (`read`): Retrieves the details of a paykey that has previously been created, including unmasked bank account fields. Supply the unique paykey ID that was returned from your previous request, and Straddle will return the corresponding paykey information.
- `review_paykeys` (`write`): Update the status of a paykey when in review status
- `unmasked_paykeys` (`read`): Retrieves the unmasked details of an existing paykey. Supply the unique paykey `id` and Straddle will return the corresponding paykey record, including the unmasked bank account details. This endpoint needs to be enabled by Straddle for your account and should only be used when absolutely necessary.

### Resource `charges`:

- `create_charges` (`write`): Use charges to collect money from a customer for the sale of goods or services.
- `update_charges` (`write`): Change the values of parameters associated with a charge prior to processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.
- `cancel_charges` (`write`): Cancel a charge to prevent it from being originated for processing. The status of the charge must be `created`, `scheduled`, or `on_hold`.
- `get_charges` (`read`): Retrieves the details of an existing charge. Supply the unique charge `id`, and Straddle will return the corresponding charge information.
- `hold_charges` (`write`): Place a charge on hold to prevent it from being originated for processing. The status of the charge must be `created` or `scheduled`.
- `release_charges` (`write`): Release a charge from an `on_hold` status to allow it to be rescheduled for processing.
- `unmask_charges` (`read`): Get a charge by id.

### Resource `funding_events`:

- `list_funding_events` (`read`): Retrieves a list of funding events for your account. This endpoint supports advanced sorting and filtering options.
- `get_funding_events` (`read`): Retrieves the details of an existing funding event. Supply the unique funding event `id`, and Straddle will return the individual transaction items that make up the funding event.

### Resource `payments`:

- `list_payments` (`read`): Search for payments, including `charges` and `payouts`, using a variety of criteria. This endpoint supports advanced sorting and filtering options.

### Resource `payouts`:

- `create_payouts` (`write`): Use payouts to send money to your customers.
- `update_payouts` (`write`): Update the details of a payout prior to processing. The status of the payout must be `created`, `scheduled`, or `on_hold`.
- `cancel_payouts` (`write`): Cancel a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.
- `get_payouts` (`read`): Retrieves the details of an existing payout. Supply the unique payout `id` to retrieve the corresponding payout information.
- `hold_payouts` (`write`): Hold a payout to prevent it from being processed. The status of the payout must be `created`, `scheduled`, or `on_hold`.
- `release_payouts` (`write`): Release a payout from a `hold` status to allow it to be rescheduled for processing.
- `unmask_payouts` (`read`): Get a payout by id.

### Resource `reports`:

- `create_total_customers_by_status_reports` (`write`):
