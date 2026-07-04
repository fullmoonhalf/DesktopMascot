import type { MascotExpression } from "@desktop-mascot/shared";
import type { PersonaManifest } from "./PersonaManifest.js";

export interface LoadedPersona {
  readonly manifest: PersonaManifest;
  resolveExpressionImage(expression: MascotExpression): string;
  readonly placeholderImage: string;
}

interface PersonaDefinition {
  readonly manifest: PersonaManifest;
  readonly images: Partial<Record<MascotExpression, string>>;
}

const defaultPersonaManifest: PersonaManifest = {
  id: "default",
  displayName: "Default",
  renderer: "png",
  defaultExpression: "neutral",
};

const defaultPersonaImages: Record<MascotExpression, string> = {
  neutral: "/assets/personas/default/images/neutral.png",
  happy: "/assets/personas/default/images/happy.png",
  thinking: "/assets/personas/default/images/thinking.png",
  surprised: "/assets/personas/default/images/surprised.png",
  sleepy: "/assets/personas/default/images/sleepy.png",
  warning: "/assets/personas/default/images/warning.png",
};

const personas: Record<string, PersonaDefinition> = {
  default: {
    manifest: defaultPersonaManifest,
    images: defaultPersonaImages,
  },
};

const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23222'/%3E%3Ctext x='64' y='72' fill='white' text-anchor='middle' font-size='20' font-family='sans-serif'%3E%3F%3C/text%3E%3C/svg%3E";

export function loadPersona(personaId = "default"): LoadedPersona {
  const fallbackPersona = personas.default;
  if (!fallbackPersona) {
    throw new Error("Default persona is not configured");
  }

  const persona = personas[personaId] ?? fallbackPersona;

  return {
    manifest: persona.manifest,
    placeholderImage,
    resolveExpressionImage(expression: MascotExpression): string {
      return (
        persona.images[expression] ??
        persona.images[persona.manifest.defaultExpression] ??
        placeholderImage
      );
    },
  };
}
