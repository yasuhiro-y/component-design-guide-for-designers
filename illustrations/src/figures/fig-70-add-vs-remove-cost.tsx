import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const border = "#e4e4e7";

/* ── Button-like component mockups ── */
interface MockButtonProps {
  label: string;
  variant: string;
  style?: CSSProperties;
}

function MockButton({ label, variant, style: extraStyle }: MockButtonProps) {
  const variants: Record<string, CSSProperties> = {
    primary: { background: text, color: "#fff", border: `1px solid ${text}` },
    secondary: {
      background: "#fff",
      color: text,
      border: `1px solid ${border}`,
    },
    outline: {
      background: "transparent",
      color: text,
      border: `1px solid ${text}`,
    },
    ghost: {
      background: "transparent",
      color: text,
      border: "1px solid transparent",
    },
    subtle: {
      background: "#f4f4f5",
      color: secondary,
      border: "1px solid transparent",
    },
    muted: {
      background: "#fafafa",
      color: secondary,
      border: `1px solid ${border}`,
    },
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7px 18px",
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "-0.01em",
        ...variants[variant],
        ...extraStyle,
      }}
    >
      {label}
    </div>
  );
}

export default function Fig70() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <MockButton label="Button" variant="primary" />
            <MockButton label="Button" variant="secondary" />
            <MockButton label="Button" variant="outline" />
            <MockButton label="Button" variant="ghost" />
            <MockButton label="Button" variant="subtle" />
            <MockButton label="Button" variant="muted" />
          </div>

          <div
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: `1px solid ${border}`,
              fontSize: 12,
              fontWeight: 700,
              color: secondary,
              textAlign: "center",
            }}
          >
            どれが要らないか、判断できますか？
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
