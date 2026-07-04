import type { MascotExpression, MascotMotion } from "./mascot.js";

export type MessageSource = "news" | "user" | "system";

export interface AgentMessage {
  readonly id: string;
  readonly text: string;
  readonly expression: MascotExpression;
  readonly motion: MascotMotion;
  readonly source: MessageSource;
  /** ISO 8601 date-time string. */
  readonly createdAt: string;
}
