import { CSSProperties, ReactNode } from "react";
import { FRAME_WIDTH, FRAME_PADDING } from "../styles/tokens";

interface IllustrationFrameProps {
  children: ReactNode;
  title?: string;
}

export function IllustrationFrame({ children, title }: IllustrationFrameProps) {
  const style: CSSProperties = {
    width: FRAME_WIDTH,
    padding: FRAME_PADDING,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
    background: "#f4f4f5",
  };

  const titleStyle: CSSProperties = {
    fontSize: 15,
    fontWeight: 700,
    color: "#18181b",
    marginBottom: 20,
    letterSpacing: "-0.01em",
  };

  return (
    <div data-testid="illustration-frame" style={style}>
      {title && <div style={titleStyle}>{title}</div>}
      {children}
    </div>
  );
}
