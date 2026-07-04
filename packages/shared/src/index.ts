export type { AgentMessage, MessageSource } from "./agent-message.js";
export type { MascotExpression, MascotMotion } from "./mascot.js";
export type { NotificationItem, NotificationPriority } from "./notification.js";
export type { NewsItem } from "./news.js";
export type { Result } from "./result.js";

import type { AgentMessage } from "./agent-message.js";
import type { NotificationItem } from "./notification.js";

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
  markAsRead(id: string, readAt: string): Promise<void>;
}

export interface NotificationService {
  notify(item: NotificationItem): Promise<void>;
}

export interface MascotRenderer {
  showMessage(message: AgentMessage): void;
}
