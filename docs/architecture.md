# Architecture

## Goal

Create a desktop mascot application that can:

* Fetch and summarize information.
* Interact with external services through MCP.
* Notify the user through a mascot UI.
* Support future extensions such as Live2D and additional agents.

---

# Design Principle

The mascot is not the application.

The mascot is a user interface for the application.

The mascot:

* Displays information
* Displays emotions
* Accepts user interaction

The mascot does not:

* Execute tools
* Fetch data
* Make business decisions
* Persist data

---

# Layer Overview

```text
React UI
↓
Agent Core
↓
Services / Adapters
↓
Tauri APIs
↓
Operating System
```

---

# Responsibilities

## React UI

Responsibilities:

* Display mascot
* Display speech bubbles
* Display notifications
* Display settings
* Forward user actions to Agent Core

Must not:

* Access SQLite
* Call MCP
* Call LLM
* Make business decisions

---

## Agent Core

Responsibilities:

* Orchestrate workflows
* Decide what should be shown to the user
* Manage conversation state
* Coordinate services

Must not:

* Depend on React
* Depend on Tauri
* Depend on Browser APIs

---

## Services / Adapters

Responsibilities:

* Fetch RSS news
* Access Local LLM
* Access MCP tools
* Persist data
* Show OS notifications

---

## Tauri

Responsibilities:

* Window management
* System tray
* Native notifications
* File access
* Secure storage

Business logic should remain outside of Tauri.

---

# Package Structure

```text
apps/
└── desktop/

packages/
├── agent-core/
├── shared/
├── llm/
├── mcp-client/
├── news/
└── storage/
```

---

# MVP Flow

```text
Scheduler
→ AgentCore.checkNews()
→ NewsService.fetchLatest()
→ LlmProvider.summarize()
→ StorageService.saveNotification()
→ NotificationService.notify()
→ React UI displays message
```

---

# User Conversation Flow

```text
User Input
→ AgentCore.handleMessage()
→ LlmProvider.generate()
→ AgentMessage
→ React UI
```

---

# Future MCP Flow

```text
User Question
→ AgentCore
→ McpClient
→ External System
→ LlmProvider
→ AgentMessage
→ React UI
```

---

# Future Extensions

The architecture should support:

* PNG renderer → Live2D renderer
* Local LLM provider replacement
* Additional MCP servers
* Multiple mascot personalities
* Independent Agent Core execution
* Additional background agents
