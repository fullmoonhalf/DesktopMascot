# Project Goal

Desktop mascot powered by Local LLM and MCP.

The application acts as a personal desktop assistant that can:

* Fetch and summarize information.
* Connect to external systems through adapters and MCP.
* Notify the user through a mascot interface.
* Evolve from a simple notification tool into an intelligent desktop companion.

---

# Current Milestone

## MVP Goal

* Fetch RSS news.
* Summarize news with a Local LLM.
* Display summaries as mascot notifications.
* Persist notification history.

---

# Architecture

* Use a layered architecture.
* UI and business logic must be separated.
* Business logic should be independent of the platform.
* External systems are accessed through adapters.
* MCP is the preferred mechanism for supported integrations.
* Local LLM providers must implement a common interface.

## Design Principle

The mascot is not the application.

The mascot is a user interface for the application.

The mascot displays information and accepts user interaction, but does not own business logic.

---

# Technologies

* Tauri is the application shell and OS bridge.
* React is presentation only.
* Agent Core owns application logic.
* React components must not call LLM, MCP, SQLite, or Tauri APIs directly.
* External systems must be accessed through adapters.
* LLM providers must be swappable.
* MCP servers must be configurable.
* Mascot renderers must be replaceable (PNG first, Live2D later).

---

# Layers

* `apps/desktop`

  * React UI
  * Tauri application shell
  * Presentation and user interaction only

* `packages/agent-core`

  * Application orchestration
  * Business decisions
  * Workflow coordination

* `packages/shared`

  * Domain models
  * Shared types
  * Common interfaces

* `packages/llm`

  * LLM provider abstraction
  * Provider implementations

* `packages/mcp-client`

  * MCP client abstraction
  * MCP server integrations

* `packages/news`

  * RSS and news source integrations

* `packages/storage`

  * SQLite persistence
  * Repositories and storage services

---

# Dependency Rules

Dependencies must follow this direction:

```text
React UI
→ Agent Core
→ Adapters (LLM, MCP, Storage)
→ Tauri APIs
→ Operating System
```

Lower layers must never depend on upper layers.

---

# Domain Rules

The `shared` package contains domain models and shared types only.

It must not depend on:

* React
* Tauri
* MCP implementations
* LLM implementations
* SQLite
* Browser APIs

---

# Agent Rules

Agent Core orchestrates services.

Business decisions belong in Agent Core.

External services should not communicate with each other directly.

Preferred:

```text
AgentCore
├─ NewsService
├─ LlmProvider
├─ StorageService
└─ NotificationService
```

Avoid:

```text
NewsService
→ LlmProvider
→ StorageService
```

---

# Adapter Rules

Adapters translate external systems into domain interfaces.

Adapters may depend on external libraries.

Domain and Agent Core must never depend on adapter implementations.

Examples:

* Ollama adapter
* MCP adapter
* SQLite adapter
* Notification adapter

---

# State Management

* Avoid global mutable state.
* UI state and persisted state should be separated.
* Persisted state belongs in StorageService.
* React Context should not be used for application-wide business state.

---

# Package Rules

Each package should expose a small public API.

Preferred structure:

```text
src/
├─ index.ts
├─ domain/
├─ services/
├─ adapters/
└─ types/
```

Avoid deep cross-package imports.

---

# Mascot Rules

The mascot is a presentation layer only.

Responsibilities:

* Display text
* Display emotions
* Play animations
* Display notifications

Non-responsibilities:

* Execute tools
* Fetch data
* Make decisions
* Persist data

---

# Agent Core Rules

Agent Core must be platform independent.

It must not depend on:

* React
* Tauri
* Browser APIs
* DOM APIs

Agent Core should be testable in Node.js.

---

# Abstraction Rules

All external services should be accessed through interfaces.

Examples:

* `LlmProvider`
* `McpClient`
* `StorageService`
* `NotificationService`
* `MascotRenderer`

---

# Async Rules

* Use async/await.
* Avoid blocking operations.
* Long-running tasks should be cancellable.
* Background jobs should be isolated from UI rendering.

---

# Tauri Rules

Prefer TypeScript implementations.

Use Tauri only for:

* File system access
* Native notifications
* Window management
* System tray
* Secure storage

Avoid implementing business logic in Rust.

---

# Dependency Injection

Prefer constructor injection.

Avoid:

* Service locators
* Global singletons
* Hidden dependencies

---

# Error Handling

Do not throw exceptions across layer boundaries.

Prefer:

* Result types
* Explicit error objects

All external failures should be recoverable.

---

# Forbidden

* Do not put business logic in React components.
* Do not call MCP tools from React components.
* Do not access SQLite from React components.
* Do not hard-code provider-specific LLM logic in Agent Core.
* Do not couple mascot rendering to news, MCP, or LLM logic.
* Do not introduce cyclic dependencies between packages.

---

# Testing

* Business logic should be unit-testable.
* React components should remain thin.
* New abstractions should include tests when possible.
* Agent Core should be executable in isolation.

---

# Future Requirements

The architecture should support:

* Replacing PNG renderers with Live2D renderers.
* Swapping Local LLM providers.
* Adding new MCP servers without changing the UI.
* Running Agent Core independently from Tauri.
* Supporting multiple mascot personalities in the future.
