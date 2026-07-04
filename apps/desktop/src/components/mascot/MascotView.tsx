import type { MascotExpression, MascotMotion } from "@desktop-mascot/shared";
import { loadPersona } from "./PersonaLoader.js";
import { PngMascotRenderer } from "./PngMascotRenderer.js";
import "./mascot.css";

export type MascotViewProps = {
  readonly expression: MascotExpression;
  readonly motion?: MascotMotion;
  readonly personaId?: string;
  readonly alt?: string;
};

export function MascotView({
  expression,
  motion,
  personaId,
  alt,
}: MascotViewProps): React.JSX.Element {
  const persona = loadPersona(personaId);

  return (
    <div className="mascot-view" data-motion={motion ?? "idle"}>
      {persona.manifest.renderer === "png" ? (
        <PngMascotRenderer expression={expression} persona={persona} alt={alt} />
      ) : (
        <div className="mascot-placeholder" aria-label={alt ?? "Mascot placeholder"}>
          ?
        </div>
      )}
    </div>
  );
}
