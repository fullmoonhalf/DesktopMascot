export type NotificationPriority = "low" | "normal" | "high";

export interface NotificationItem {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly source: string;
  readonly priority: NotificationPriority;
  /** ISO 8601 date-time string. */
  readonly createdAt: string;
  /** ISO 8601 date-time string. */
  readonly readAt?: string;
}
