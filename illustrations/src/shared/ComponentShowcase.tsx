import { CSSProperties, ReactNode } from "react";
import { color, fontSize, space, radius } from "../styles/tokens";
import { ServiceIcon, ServiceIconName } from "./icons";

interface ComponentShowcaseProps {
  library: string;
  libraryIcon?: ServiceIconName;
  name: string;
  children: ReactNode;
}

export function ComponentShowcase({ library, libraryIcon, name, children }: ComponentShowcaseProps) {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: space.sm,
  };

  const badgeStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontSize: fontSize.xs,
    fontWeight: 400,
    color: color.textTertiary,
    letterSpacing: "0.02em",
  };

  const nameStyle: CSSProperties = {
    fontSize: fontSize.lg,
    fontWeight: 400,
    color: color.text,
    
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
      <span style={badgeStyle}>
        {libraryIcon && <ServiceIcon name={libraryIcon} size={16} />}
        {library}
      </span>
      <div style={nameStyle}>{name}</div>
      <div style={panelStyle}>{children}</div>
    </div>
  );
}
