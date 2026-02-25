import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

/* ── Data: component names across libraries ── */
const components = [
  { name: "Dialog", radix: true, mui: true, chakra: true },
  { name: "Popover", radix: true, mui: true, chakra: true },
  { name: "Accordion", radix: true, mui: true, chakra: true },
  { name: "Breadcrumb", radix: false, mui: true, chakra: true },
  { name: "Tooltip", radix: true, mui: true, chakra: true },
];

const libraries = ["Radix", "MUI", "Chakra"];

const headerCell: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  color: tertiary,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  padding: "8px 10px",
  textAlign: "center",
  background: "#fafafa",
};

const nameCell: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  fontFamily: mono,
  color: text,
  padding: "8px 10px",
};

const checkCell: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 0",
};

/* ── Checkmark icon ── */
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 8.5l3 3 6-6"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <line
        x1="5"
        y1="8"
        x2="11"
        y2="8"
        stroke="#d4d4d8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const colTitle: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: text,
  marginBottom: 12,
};

export default function Fig74() {
  return (
    <IllustrationFrame>
      <div
        style={{
          display: "flex",
          gap: 24,
          width: CONTENT_WIDTH,
          alignItems: "flex-start",
        }}
      >
        {/* ── Left: Library convergence table ── */}
        <div style={{ flex: 3 }}>
          <div style={colTitle}>ライブラリ間の名前の収束</div>
          <div
            style={{
              background: "#fff",
              border: `1px solid ${border}`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px repeat(3, 1fr)",
                borderBottom: `1px solid ${border}`,
              }}
            >
              <div
                style={{
                  ...headerCell,
                  textAlign: "left",
                  borderRight: `1px solid ${border}`,
                }}
              >
                Component
              </div>
              {libraries.map((lib) => (
                <div
                  key={lib}
                  style={{
                    ...headerCell,
                    borderRight: `1px solid ${border}`,
                  }}
                >
                  {lib}
                </div>
              ))}
            </div>

            {/* Rows */}
            {components.map((comp, i) => (
              <div
                key={comp.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px repeat(3, 1fr)",
                  borderBottom:
                    i < components.length - 1
                      ? `1px solid ${border}`
                      : "none",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    ...nameCell,
                    borderRight: `1px solid ${border}`,
                  }}
                >
                  {comp.name}
                </div>
                <div
                  style={{
                    ...checkCell,
                    borderRight: `1px solid ${border}`,
                  }}
                >
                  {comp.radix ? <CheckIcon /> : <DashIcon />}
                </div>
                <div
                  style={{
                    ...checkCell,
                    borderRight: `1px solid ${border}`,
                  }}
                >
                  {comp.mui ? <CheckIcon /> : <DashIcon />}
                </div>
                <div style={checkCell}>
                  {comp.chakra ? <CheckIcon /> : <DashIcon />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Center arrow ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: 80,
            flexShrink: 0,
          }}
        >
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <line
              x1="0"
              y1="8"
              x2="24"
              y2="8"
              stroke="#d4d4d8"
              strokeWidth="1.5"
            />
            <polygon points="24,3 32,8 24,13" fill="#d4d4d8" />
          </svg>
        </div>

        {/* ── Right: Your design system ── */}
        <div style={{ flex: 2 }}>
          <div style={colTitle}>あなたのデザインシステム</div>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {components.map((comp) => (
              <div
                key={comp.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 12px",
                  background: "#f4f4f5",
                  borderRadius: 10,
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="10"
                    height="10"
                    rx="3"
                    stroke={secondary}
                    strokeWidth="1.5"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    fontWeight: 700,
                    color: text,
                  }}
                >
                  {comp.name}
                </span>
              </div>
            ))}

            <div
              style={{
                fontSize: 10,
                color: tertiary,
                marginTop: 4,
                lineHeight: 1.6,
              }}
            >
              業界で定着した名前をそのまま採用する
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
