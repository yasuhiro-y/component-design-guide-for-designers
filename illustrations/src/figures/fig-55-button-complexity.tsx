import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ── tokens ── */
const mono = '"SF Mono", Menlo, monospace';
const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";

/* ── axis data ── */
const axes = [
  { label: "Size", values: ["xs", "s", "m", "l"] },
  { label: "Variant", values: ["primary", "secondary", "destructive"] },
  { label: "State", values: ["default", "hover", "pressed", "disabled", "focus"] },
  { label: "Icon", values: ["none", "left", "right", "both"] },
  { label: "Theme", values: ["light", "dark"] },
  { label: "Loading", values: ["false", "true"] },
];

const chipStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "2px 6px",
  borderRadius: 3,
  background: "#fafafa",
  border: `1px solid ${border}`,
  fontFamily: mono,
  fontSize: 9,
  color: tertiary,
  whiteSpace: "nowrap",
};

const axisLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: secondary,
  minWidth: 56,
  letterSpacing: "0.02em",
};

export default function Fig55() {
  return (
    <IllustrationFrame title="ボタンの複雑さ: シンプルに見えて設計判断の山">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* ── Top: Simple button ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 28px",
              borderRadius: 6,
              background: text,
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Button
          </div>
          <div
            style={{
              fontSize: 11,
              color: secondary,
              marginTop: 8,
            }}
          >
            見かけはシンプル
          </div>
        </div>

        {/* ── Arrow ── */}
        <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <line x1="8" y1="0" x2="8" y2="18" stroke="#d4d4d8" strokeWidth="1.5" />
            <polygon points="3,18 13,18 8,24" fill="#d4d4d8" />
          </svg>
        </div>

        {/* ── Bottom: Expanded axes ── */}
        <div
          style={{
            background: "#fff",
            border: `1px solid ${border}`,
            borderRadius: 8,
            padding: "16px 20px",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: tertiary,
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              marginBottom: 12,
            }}
          >
            Design Axes
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {axes.map((axis) => (
              <div key={axis.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={axisLabel}>{axis.label}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {axis.values.map((v) => (
                    <span key={v} style={chipStyle}>{v}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 14,
              paddingTop: 12,
              borderTop: `1px solid ${border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 11, color: secondary }}>
              組み合わせ総数
            </span>
            <span
              style={{
                fontFamily: mono,
                fontSize: 14,
                fontWeight: 700,
                color: text,
              }}
            >
              4 × 3 × 5 × 4 × 2 × 2 = 960
            </span>
          </div>
        </div>

        {/* ── Caption ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: 14,
            fontSize: 11,
            color: secondary,
            lineHeight: 1.6,
          }}
        >
          <span style={{ fontWeight: 600, color: text }}>
            カプセル化されたコンポーネントは、この複雑さを隠す。
          </span>
          使う側は variant と size を選ぶだけ。
        </div>
      </div>
    </IllustrationFrame>
  );
}
