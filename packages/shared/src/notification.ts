import type { MessageSource } from "./agent-message.js";

export type NotificationPriority = "low" | "normal" | "high";

export interface NotificationItem {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly source: MessageSource;
  readonly priority: NotificationPriority;
  readonly createdAt: string;
  readonly readAt?: string;
}
