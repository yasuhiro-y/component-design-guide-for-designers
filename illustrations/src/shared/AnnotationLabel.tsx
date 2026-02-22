import { CSSProperties } from "react";
import { color, fontSize, space } from "../styles/tokens";

interface AnnotationLabelProps {
  text: string;
  sub?: string;
  align?: "left" | "center" | "right";
}

export function AnnotationLabel({ text, sub, align = "center" }: AnnotationLabelProps) {
  const style: CSSProperties = {
    fontSize: fontSize.sm,
    color: color.textSecondary,
    textAlign: align,
    lineHeight: 1.4,
  };

  const subStyle: CSSProperties = {
    fontSize: fontSize.xs,
    color: color.textTertiary,
    marginTop: space.xs,
  };

  return (
    <div style={style}>
      <div>{text}</div>
      {sub && <div style={subStyle}>{sub}</div>}
    </div>
  );
}
