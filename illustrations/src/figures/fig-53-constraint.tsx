import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ── tokens ── */
const mono = '"SF Mono", Menlo, monospace';
const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";

/* ── free colors (similar, confusing) ── */
const freeColors = [
  "#3b82f6", "#2563eb", "#1d4ed8", "#60a5fa", "#93c5fd",
  "#3b82f6", "#6366f1", "#4f46e5", "#818cf8", "#a78bfa",
  "#8b5cf6", "#7c3aed", "#2dd4bf", "#14b8a6", "#0d9488",
  "#22c55e", "#16a34a", "#f59e0b", "#eab308", "#f97316",
  "#ef4444", "#dc2626", "#ec4899", "#d946ef", "#a855f7",
];

/* ── semantic colors ── */
const semanticColors: { name: string; color: string }[] = [
  { name: "primary", color: "#18181b" },
  { name: "secondary", color: "#52525b" },
  { name: "accent", color: "#3b82f6" },
  { name: "success", color: "#22c55e" },
  { name: "warning", color: "#f59e0b" },
  { name: "error", color: "#ef4444" },
];

/* ── free spacing values ── */
const freeSpacing = [5, 7, 10, 13, 14, 17, 19, 22, 23, 25, 30, 33];

/* ── constrained spacing scale ── */
const constrainedSpacing = [4, 8, 12, 16, 24, 32];

/* ── styles ── */
const columnHeader: CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: text,
  marginBottom: 14,
  letterSpacing: "-0.01em",
};

const card: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  padding: "16px 18px",
};

const sectionLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  color: tertiary,
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  marginBottom: 8,
};

const caption: CSSProperties = {
  fontSize: 11,
  color: secondary,
  marginTop: 12,
  lineHeight: 1.6,
};

export default function Fig53() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        {/* ── Left: Free choice ── */}
        <div style={{ flex: 1 }}>
          <div style={columnHeader}>自由選択</div>
          <div style={card}>
            {/* Free colors */}
            <div style={sectionLabel}>Color</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 16 }}>
              {freeColors.map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 8,
                    background: c,
                  }}
                />
              ))}
            </div>

            {/* Free spacing */}
            <div style={sectionLabel}>Spacing</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {freeSpacing.map((v) => (
                <span
                  key={v}
                  style={{
                    fontFamily: mono,
                    fontSize: 10,
                    color: tertiary,
                    padding: "2px 5px",
                    borderRadius: 8,
                    background: "#fafafa",
                    border: `1px solid ${border}`,
                  }}
                >
                  {v}px
                </span>
              ))}
            </div>
          </div>
          <div style={caption}>
            迷いが増え、ズレが生じる
          </div>
        </div>

        {/* ── Right: Constrained choice ── */}
        <div style={{ flex: 1 }}>
          <div style={columnHeader}>制約された選択</div>
          <div style={card}>
            {/* Semantic colors */}
            <div style={sectionLabel}>Color</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
              {semanticColors.map((sc) => (
                <div key={sc.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 8,
                      background: sc.color,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 10,
                      color: secondary,
                    }}
                  >
                    {sc.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Constrained spacing */}
            <div style={sectionLabel}>Spacing</div>
            <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
              {constrainedSpacing.map((v) => (
                <div key={v} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div
                    style={{
                      width: 20,
                      height: v * 0.8,
                      borderRadius: 2,
                      background: "#18181b",
                      opacity: 0.15 + (v / 32) * 0.6,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 10,
                      color: secondary,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={caption}>
            <span style={{ fontWeight: 700, color: secondary }}>正しい選択が最も簡単になる</span>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
