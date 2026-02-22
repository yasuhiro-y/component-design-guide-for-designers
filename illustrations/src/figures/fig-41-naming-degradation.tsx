import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ── tokens ── */
const surface = "#fff";
const border = "#e4e4e7";
const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const mono = '"SF Mono", Menlo, monospace';

/* ── chaotic button styles (left side — inconsistent conventions) ── */
const chaosButtons: { name: string; style: CSSProperties }[] = [
  {
    name: "primary",
    style: {
      background: "#18181b",
      color: "#fff",
      border: "1px solid #18181b",
      borderRadius: 6,
      padding: "6px 16px",
      fontSize: 12,
      fontWeight: 600,
      cursor: "default",
    },
  },
  {
    name: "secondary",
    style: {
      background: surface,
      color: text,
      border: `1px solid ${border}`,
      borderRadius: 6,
      padding: "6px 16px",
      fontSize: 12,
      fontWeight: 600,
      cursor: "default",
    },
  },
  {
    name: "red-button",
    style: {
      background: "#dc2626",
      color: "#fff",
      border: "1px solid #dc2626",
      borderRadius: 8,
      padding: "8px 14px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "default",
      letterSpacing: "0.02em",
    },
  },
  {
    name: "btn-light",
    style: {
      background: "#f4f4f5",
      color: secondary,
      border: "1px dashed #d4d4d8",
      borderRadius: 4,
      padding: "5px 12px",
      fontSize: 11,
      fontWeight: 500,
      cursor: "default",
    },
  },
  {
    name: "outline-gray",
    style: {
      background: "transparent",
      color: tertiary,
      border: `2px solid ${tertiary}`,
      borderRadius: 10,
      padding: "5px 14px",
      fontSize: 12,
      fontWeight: 400,
      cursor: "default",
      fontStyle: "italic",
    },
  },
];

/* ── systematic button styles (right side — consistent conventions) ── */
const cleanButtons: { name: string; style: CSSProperties }[] = [
  {
    name: "primary",
    style: {
      background: "#18181b",
      color: "#fff",
      border: "1px solid #18181b",
      borderRadius: 6,
      padding: "6px 16px",
      fontSize: 12,
      fontWeight: 600,
      cursor: "default",
    },
  },
  {
    name: "secondary",
    style: {
      background: surface,
      color: text,
      border: `1px solid ${border}`,
      borderRadius: 6,
      padding: "6px 16px",
      fontSize: 12,
      fontWeight: 600,
      cursor: "default",
    },
  },
  {
    name: "destructive",
    style: {
      background: "#dc2626",
      color: "#fff",
      border: "1px solid #dc2626",
      borderRadius: 6,
      padding: "6px 16px",
      fontSize: 12,
      fontWeight: 600,
      cursor: "default",
    },
  },
  {
    name: "ghost",
    style: {
      background: "transparent",
      color: secondary,
      border: "1px solid transparent",
      borderRadius: 6,
      padding: "6px 16px",
      fontSize: 12,
      fontWeight: 600,
      cursor: "default",
    },
  },
];

/* ── shared styles ── */
const columnHeader: CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: text,
  marginBottom: 16,
  letterSpacing: "-0.01em",
};

const card: CSSProperties = {
  background: surface,
  border: `1px solid ${border}`,
  borderRadius: 8,
  padding: "20px 24px",
};

const variantRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 16,
  marginBottom: 14,
};

const nameLabel: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  color: secondary,
  minWidth: 90,
  textAlign: "right",
};

const note: CSSProperties = {
  fontSize: 11,
  color: tertiary,
  marginTop: 12,
  lineHeight: 1.6,
};

/* ── component ── */
export default function Fig41() {
  return (
    <IllustrationFrame title="命名の体系: ルールの有無が半年後の品質を決める">
      <div
        style={{
          width: CONTENT_WIDTH,
          display: "flex",
          gap: 24,
        }}
      >
        {/* ── Left: no rules ── */}
        <div style={{ flex: 1 }}>
          <div style={columnHeader}>ルールなし</div>
          <div style={card}>
            {chaosButtons.map((btn) => (
              <div key={btn.name} style={variantRow}>
                <span style={nameLabel}>{btn.name}</span>
                <button type="button" style={btn.style}>
                  Button
                </button>
              </div>
            ))}
          </div>
          <div style={note}>
            半年後: 5つの variant、命名に規則性がない
          </div>
        </div>

        {/* ── Right: with rules ── */}
        <div style={{ flex: 1 }}>
          <div style={columnHeader}>ルールあり</div>
          <div style={card}>
            {cleanButtons.map((btn) => (
              <div key={btn.name} style={variantRow}>
                <span style={nameLabel}>{btn.name}</span>
                <button type="button" style={btn.style}>
                  Button
                </button>
              </div>
            ))}
          </div>
          <div style={note}>
            半年後: 4つの variant、誰でも次を類推できる
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
