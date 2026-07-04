// Domain types for DesktopMascot

// ── Mascot ────────────────────────────────────────────────────────────────────

export type MascotExpression =
  | "neutral"
  | "happy"
  | "thinking"
  | "surprised"
  | "sleepy"
  | "warning";

export type MascotMotion =
  | "idle"
  | "nod"
  | "wave"
  | "jump"
  | "alert";

// ── Agent message ─────────────────────────────────────────────────────────────

export type AgentMessageSource = "news" | "user" | "system";

export interface AgentMessage {
  readonly id: string;
  readonly text: string;
  readonly expression: MascotExpression;
  readonly motion: MascotMotion;
  readonly source: AgentMessageSource;
  readonly createdAt: Date;
}

// ── Notification ──────────────────────────────────────────────────────────────

export type NotificationPriority = "low" | "normal" | "high";

export interface NotificationItem {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly source: string;
  readonly priority: NotificationPriority;
  readonly createdAt: Date;
  readonly readAt: Date | undefined;
}

// ── News ──────────────────────────────────────────────────────────────────────

export interface NewsItem {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly source: string;
  readonly summary: string | undefined;
  readonly publishedAt: Date;
}

// ── Provider / service interfaces ─────────────────────────────────────────────

export interface LlmProvider {
  summarize(text: string): Promise<string>;
  generate(prompt: string): Promise<string>;
}

export interface McpClient {
  listTools(): Promise<ReadonlyArray<string>>;
  callTool(name: string, args: Record<string, unknown>): Promise<unknown>;
}

export interface StorageService {
  saveNotification(item: NotificationItem): Promise<void>;
  loadNotifications(): Promise<ReadonlyArray<NotificationItem>>;
  markAsRead(id: string, readAt: Date): Promise<void>;
}

export interface NotificationService {
  notify(item: NotificationItem): Promise<void>;
}

export interface MascotRenderer {
  showMessage(message: AgentMessage): void;
}
