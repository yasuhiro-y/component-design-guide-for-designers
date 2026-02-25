import { CSSProperties, ReactNode } from "react";
import { FRAME_WIDTH, FRAME_PADDING, font } from "../styles/tokens";

interface IllustrationFrameProps {
  children: ReactNode;
  title?: string;
}

export function IllustrationFrame({ children, title }: IllustrationFrameProps) {
  const style: CSSProperties = {
    width: FRAME_WIDTH,
    padding: FRAME_PADDING,
    fontFamily: font.sans,
    fontFeatureSettings: font.featureSettings,
    fontKerning: "normal",
    background: "#f4f4f5",
  };

  const titleStyle: CSSProperties = {
    fontSize: 16,
    fontWeight: 700,
    color: "#18181b",
    marginBottom: 20,
    letterSpacing: "-0.01em",
    lineHeight: 1.6,
  };

  return (
    <div data-testid="illustration-frame" style={style}>
      {title && <div style={titleStyle}>{title}</div>}
      {children}
    </div>
  );
}
