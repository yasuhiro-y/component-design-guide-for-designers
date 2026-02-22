import { CSSProperties } from "react";
import { color, fontSize, space } from "../styles/tokens";

interface CaptionProps {
  text: string;
  sub?: string;
}

export function Caption({ text, sub }: CaptionProps) {
  const style: CSSProperties = {
    marginTop: space.lg,
    textAlign: "center",
    fontSize: fontSize.sm,
    color: color.textTertiary,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
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
