import type { MascotExpression } from "@desktop-mascot/shared";

export type PersonaRenderer = "png";

export interface PersonaManifest {
  readonly id: string;
  readonly displayName: string;
  readonly renderer: PersonaRenderer;
  readonly defaultExpression: MascotExpression;
}
