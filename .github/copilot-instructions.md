# Project Goal

Desktop mascot powered by Local LLM and MCP.

The application acts as a personal desktop assistant that can:

* Fetch and summarize information.
* Connect to external systems through adapters and MCP.
* Notify the user through a mascot interface.
* Evolve into an intelligent desktop companion.

---

# Current Milestone

## MVP Goal

* Fetch RSS news.
* Summarize news with a Local LLM.
* Display summaries as mascot notifications.
* Persist notification history.

---

# Architecture Rules

* Use a layered architecture.
* UI and business logic must be separated.
* Business logic should be platform independent.
* External systems are accessed through adapters.
* MCP is the preferred mechanism for supported integrations.
* Local LLM providers must implement a common interface.

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

# Dependency Rules

Dependencies must follow this direction:

React UI
→ Agent Core
→ Adapters (LLM, MCP, Storage)
→ Tauri APIs
→ Operating System

Lower layers must never depend on upper layers.

---

# Agent Rules

Agent Core orchestrates services.

Business decisions belong in Agent Core.

External services should not communicate with each other directly.

---

# Coding Style

* Prefer pure functions.
* Prefer immutable data.
* Use async/await.
* Prefer constructor injection.
* Avoid global mutable state.
* Avoid singletons unless necessary.

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

# Error Handling

* Do not throw exceptions across layer boundaries.
* Prefer Result types or explicit error objects.
* External failures should be recoverable.

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
* Agent Core should be executable in isolation.
* New abstractions should include tests when possible.
