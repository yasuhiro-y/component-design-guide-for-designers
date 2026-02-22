import { CSSProperties, ReactNode } from "react";
import { FRAME_WIDTH, FRAME_PADDING } from "../styles/tokens";

export function IllustrationFrame({ children }: { children: ReactNode }) {
  const style: CSSProperties = {
    width: FRAME_WIDTH,
    padding: FRAME_PADDING,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
    background: "#f4f4f5",
  };

  return (
    <div data-testid="illustration-frame" style={style}>
      {children}
    </div>
  );
}
