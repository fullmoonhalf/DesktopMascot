import { useEffect, useMemo, useState } from "react";
import type { MascotExpression } from "@desktop-mascot/shared";
import type { LoadedPersona } from "./PersonaLoader.js";

type PngMascotRendererProps = {
  readonly expression: MascotExpression;
  readonly persona: LoadedPersona;
  readonly alt?: string | undefined;
};

export function PngMascotRenderer({
  expression,
  persona,
  alt,
}: PngMascotRendererProps): React.JSX.Element {
  const imageCandidates = useMemo(() => {
    const expressionImage = persona.resolveExpressionImage(expression);
    const neutralImage = persona.resolveExpressionImage(
      persona.manifest.defaultExpression,
    );

    return [expressionImage, neutralImage, persona.placeholderImage] as const;
  }, [expression, persona]);

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [imageCandidates]);

  return (
    <img
      className="mascot-image"
      src={imageCandidates[Math.min(imageIndex, imageCandidates.length - 1)]}
      alt={alt ?? `${persona.manifest.displayName} mascot`}
      onError={() => {
        setImageIndex((current) => Math.min(current + 1, imageCandidates.length - 1));
      }}
    />
  );
}
