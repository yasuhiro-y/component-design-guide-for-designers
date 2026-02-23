import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ── tokens ── */
const mono = '"SF Mono", Menlo, monospace';
const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";

/* ── pattern data ── */
const patterns: {
  category: string;
  bad: string;
  good: string;
  reason: string;
}[] = [
  {
    category: "Boolean",
    bad: "isNotDisabled",
    good: "isDisabled",
    reason: "二重否定を避ける",
  },
  {
    category: "Enum",
    bad: 'size: "Default"',
    good: 'size: "medium"',
    reason: "スケール上の位置を明確に",
  },
  {
    category: "Color",
    bad: 'variant: "Blue"',
    good: 'variant: "Primary"',
    reason: "見た目でなく役割で名付ける",
  },
  {
    category: "Scale",
    bad: "Small / Smaller / Tiny",
    good: "xs / s / m / l / xl",
    reason: "拡張可能な体系を使う",
  },
];

const cellBase: CSSProperties = {
  padding: "10px 14px",
  fontFamily: mono,
  fontSize: 11,
  lineHeight: 1.4,
};

const headerCell: CSSProperties = {
  ...cellBase,
  fontSize: 10,
  fontWeight: 700,
  color: tertiary,
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  background: "#fafafa",
  fontFamily: '"Inter", -apple-system, sans-serif',
};

export default function Fig58() {
  return (
    <IllustrationFrame title="プロパティ命名: 4つの判断パターン">
      <div style={{ width: CONTENT_WIDTH }}>
        <div
          style={{
            background: "#fff",
            border: `1px solid ${border}`,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {/* ── Header ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 24px 1fr 1fr",
              borderBottom: `1px solid ${border}`,
            }}
          >
            <div style={{ ...headerCell, borderRight: `1px solid ${border}` }}>Type</div>
            <div style={{ ...headerCell, borderRight: `1px solid ${border}`, color: "#ef4444" }}>
              Bad
            </div>
            <div style={{ ...headerCell }} />
            <div style={{ ...headerCell, borderRight: `1px solid ${border}`, color: "#22c55e" }}>
              Good
            </div>
            <div style={{ ...headerCell }}>Why</div>
          </div>

          {/* ── Rows ── */}
          {patterns.map((p, i) => (
            <div
              key={p.category}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 24px 1fr 1fr",
                borderBottom: i < patterns.length - 1 ? `1px solid ${border}` : "none",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  ...cellBase,
                  fontWeight: 600,
                  color: secondary,
                  borderRight: `1px solid ${border}`,
                  fontFamily: '"Inter", -apple-system, sans-serif',
                  fontSize: 11,
                }}
              >
                {p.category}
              </div>
              <div
                style={{
                  ...cellBase,
                  color: "#71717a",
                  borderRight: `1px solid ${border}`,
                  textDecoration: "line-through",
                  textDecorationColor: "#d4d4d8",
                }}
              >
                {p.bad}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 2px",
                }}
              >
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <line x1="0" y1="5" x2="10" y2="5" stroke="#d4d4d8" strokeWidth="1.5" />
                  <polygon points="10,2 10,8 14,5" fill="#d4d4d8" />
                </svg>
              </div>
              <div
                style={{
                  ...cellBase,
                  color: text,
                  fontWeight: 600,
                  borderRight: `1px solid ${border}`,
                }}
              >
                {p.good}
              </div>
              <div
                style={{
                  ...cellBase,
                  color: secondary,
                  fontFamily: '"Inter", -apple-system, sans-serif',
                  fontSize: 10,
                }}
              >
                {p.reason}
              </div>
            </div>
          ))}
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
          命名は
          <span style={{ fontWeight: 600, color: text }}>
            「いまの見た目」ではなく「意味と拡張性」
          </span>
          で判断する。
        </div>
      </div>
    </IllustrationFrame>
  );
}
