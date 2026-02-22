import { CSSProperties, ReactNode } from "react";
import { color, fontSize, space, radius } from "../styles/tokens";

interface ComponentShowcaseProps {
  library: string;
  name: string;
  children: ReactNode;
}

export function ComponentShowcase({ library, name, children }: ComponentShowcaseProps) {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: space.sm,
  };

  const badgeStyle: CSSProperties = {
    fontSize: fontSize.xs,
    fontWeight: 500,
    color: color.textTertiary,
    letterSpacing: "0.02em",
  };

  const nameStyle: CSSProperties = {
    fontSize: fontSize.lg,
    fontWeight: 500,
    color: color.text,
    fontFamily: '"SF Mono", "Fira Code", "Fira Mono", Menlo, monospace',
    letterSpacing: "-0.01em",
  };

  const panelStyle: CSSProperties = {
    background: color.bg,
    borderRadius: radius.lg,
    padding: space.lg,
    border: `1px solid ${color.border}`,
  };

  return (
    <div style={containerStyle}>
      <span style={badgeStyle}>{library}</span>
      <div style={nameStyle}>{name}</div>
      <div style={panelStyle}>{children}</div>
    </div>
  );
}
