import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const headerCell: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#3f3f46",
  fontFamily: '"SF Mono", Menlo, monospace',
  padding: "8px 0",
  textAlign: "center",
};

const dataCell: CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  color: "#18181b",
  textAlign: "center",
  padding: 12,
  background: "#fff",
  border: "1px solid #e4e4e7",
};

const rowHeader: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#3f3f46",
  fontFamily: '"SF Mono", Menlo, monospace',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 8px",
};

const contradictionCell: CSSProperties = {
  ...dataCell,
  background: "#fef2f2",
  border: "1px solid #fecaca",
  color: "#ef4444",
  fontWeight: 700,
};

const solutionLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#15803d",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

const codeStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  fontFamily: '"SF Mono", Menlo, monospace',
  color: "#18181b",
  background: "#fff",
  border: "1px solid #e4e4e7",
  borderRadius: 6,
  padding: "10px 20px",
  textAlign: "center",
};

export default function Fig42() {
  return (
    <IllustrationFrame title="Boolean の矛盾: 2つのトグルより1つの Enum">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Matrix */}
        <div style={{ maxWidth: 360, margin: "0 auto" }}>
          {/* Column headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 1fr",
              gap: 2,
            }}
          >
            <div />
            <div style={headerCell}>isSmall = false</div>
            <div style={headerCell}>isSmall = true</div>
          </div>

          {/* Row 1: isLarge = false */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 1fr",
              gap: 2,
              marginTop: 2,
            }}
          >
            <div style={rowHeader}>isLarge = false</div>
            <div style={{ ...dataCell, borderRadius: "6px 0 0 0" }}>
              通常 (M)
            </div>
            <div style={{ ...dataCell, borderRadius: "0 6px 0 0" }}>
              小 (S)
            </div>
          </div>

          {/* Row 2: isLarge = true */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 1fr",
              gap: 2,
              marginTop: 2,
            }}
          >
            <div style={rowHeader}>isLarge = true</div>
            <div style={{ ...dataCell, borderRadius: "0 0 0 6px" }}>
              大 (L)
            </div>
            <div style={{ ...contradictionCell, borderRadius: "0 0 6px 0" }}>
              ???
            </div>
          </div>

          {/* Contradiction note */}
          <div
            style={{
              textAlign: "center",
              marginTop: 8,
              fontSize: 10,
              color: "#ef4444",
            }}
          >
            isSmall = true かつ isLarge = true は矛盾
          </div>
        </div>

        {/* Arrow pointing to solution */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 16,
            gap: 8,
          }}
        >
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
          >
            <line
              x1="8"
              y1="0"
              x2="8"
              y2="18"
              stroke="#d4d4d8"
              strokeWidth="1.5"
            />
            <polygon points="3,18 8,24 13,18" fill="#d4d4d8" />
          </svg>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={solutionLabel}>Solution</span>
            <div style={codeStyle}>
              size: &apos;S&apos; | &apos;M&apos; | &apos;L&apos;
            </div>
          </div>

          <div style={{ fontSize: 10, color: "#3f3f46", textAlign: "center" }}>
            Enum なら矛盾が発生しない: 常に1つだけ選択される
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
