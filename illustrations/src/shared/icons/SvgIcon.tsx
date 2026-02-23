import { CSSProperties, useId } from "react";

interface SvgIconProps {
  svg: string;
  size?: number;
  style?: CSSProperties;
}

/**
 * Generic SVG icon component.
 * Receives an SVG string (via Vite ?raw import), renders it inline
 * with original brand colors preserved.
 *
 * - Rewrites internal IDs (clipPath, gradient, etc.) with useId() to avoid collisions
 * - Controls sizing via width/height while preserving viewBox
 */
export function SvgIcon({ svg, size = 16, style }: SvgIconProps) {
  const uid = useId();

  let processed = svg;

  // Collect all id="..." references
  const idMatches = processed.matchAll(/\bid="([^"]+)"/g);
  const ids = new Set<string>();
  for (const m of idMatches) {
    ids.add(m[1]);
  }

  // Rewrite internal IDs to avoid collisions when multiple icons render
  for (const id of ids) {
    const safeUid = uid.replace(/:/g, "_");
    const newId = `${safeUid}_${id}`;
    processed = processed.split(`id="${id}"`).join(`id="${newId}"`);
    processed = processed.split(`url(#${id})`).join(`url(#${newId})`);
    processed = processed.split(`href="#${id}"`).join(`href="#${newId}"`);
  }

  // Strip the outer <svg> width/height so we control sizing, but keep viewBox
  processed = processed.replace(
    /<svg[^>]*>/,
    (match) => {
      let tag = match.replace(/\s+width="[^"]*"/, "");
      tag = tag.replace(/\s+height="[^"]*"/, "");
      return tag;
    }
  );

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        flexShrink: 0,
        ...style,
      }}
      dangerouslySetInnerHTML={{
        __html: processed.replace(
          "<svg",
          `<svg width="${size}" height="${size}" style="display:block"`
        ),
      }}
    />
  );
}
