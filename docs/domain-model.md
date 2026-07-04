# Domain Model

## Core Concepts

### Mascot

Represents the desktop character shown to the user.

Responsibilities:

* Display text
* Display emotions
* Play animations

Non-responsibilities:

* Fetch data
* Execute tools
* Persist data
* Make decisions

---

## AgentMessage

A message produced by Agent Core and displayed by the mascot.

Fields:

* id
* text
* expression
* motion
* source
* createdAt

---

## MascotExpression

Represents the mascot's emotional state.

Examples:

* neutral
* happy
* thinking
* surprised
* sleepy
* warning

---

## MascotMotion

Represents animation commands.

Examples:

* idle
* nod
* wave
* jump
* alert

---

## NotificationItem

Represents a persisted notification.

Fields:

* id
* title
* body
* source
* priority
* createdAt
* readAt

---

## NewsItem

Represents a raw news item.

Fields:

* id
* title
* url
* source
* summary
* publishedAt

---

## LlmProvider

Abstraction for Local LLM providers.

Responsibilities:

* Summarize text
* Generate responses
* Classify information

Examples:

* OllamaProvider
* OpenAIProvider

---

## McpClient

Abstraction for MCP integrations.

Responsibilities:

* List tools
* Call tools
* Normalize results

Examples:

* ConfluenceMcpClient
* TeamsMcpClient

---

## StorageService

Abstraction for persistence.

Responsibilities:

* Save notifications
* Load notification history
* Mark notifications as read
* Save application settings

---

## NotificationService

Abstraction for user notifications.

Responsibilities:

* Display native notifications
* Queue notifications
* Handle notification clicks

---

## MascotRenderer

Abstraction for mascot rendering.

Responsibilities:

* Display text
* Display expressions
* Play animations

Examples:

* PngMascotRenderer
* Live2DMascotRenderer

---

# Domain Rules

Domain models must not depend on:

* React
* Tauri
* Browser APIs
* SQLite implementations
* MCP implementations
* LLM implementations

Domain models should remain platform independent.
