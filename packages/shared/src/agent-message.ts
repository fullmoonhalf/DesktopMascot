import type { MascotExpression, MascotMotion } from "./mascot.js";
import type { IsoDateString } from "./primitives.js";

export type MessageSource = "news" | "user" | "system";

export interface AgentMessage {
  readonly id: string;
  readonly text: string;
  readonly expression: MascotExpression;
  readonly motion: MascotMotion;
  readonly source: MessageSource;
  readonly createdAt: IsoDateString;
}
