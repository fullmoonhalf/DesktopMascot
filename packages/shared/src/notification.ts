import type { IsoDateString } from "./primitives.js";

export type NotificationPriority = "low" | "normal" | "high";

export interface NotificationItem {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly source: string;
  readonly priority: NotificationPriority;
  readonly createdAt: IsoDateString;
  readonly readAt?: IsoDateString;
}
