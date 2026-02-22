import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const sectionTitle: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#a1a1aa",
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  marginBottom: 10,
};

const propRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 0",
  borderBottom: "1px solid #f4f4f5",
  fontSize: 12,
};

const propLabel: CSSProperties = {
  color: "#3f3f46",
  fontWeight: 500,
};

const arrow: CSSProperties = {
  fontSize: 14,
  color: "#d4d4d8",
  flexShrink: 0,
  padding: "0 16px",
};

const codeBlock: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
  fontSize: 12,
  color: "#3f3f46",
  lineHeight: 1.7,
};

function Toggle({ on }: { on?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        width: 30,
        height: 16,
        borderRadius: 8,
        background: on ? "#18181b" : "#d4d4d8",
        padding: 2,
        alignItems: "center",
        justifyContent: on ? "flex-end" : "flex-start",
      }}
    >
      <span style={{ width: 12, height: 12, borderRadius: 6, background: "#fff" }} />
    </span>
  );
}

function Dropdown({ value }: { value: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 8px",
        borderRadius: 4,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 11,
        color: "#3f3f46",
      }}
    >
      {value} <span style={{ fontSize: 8, color: "#a1a1aa" }}>▾</span>
    </span>
  );
}

function TextVal({ value }: { value: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        padding: "3px 8px",
        borderRadius: 4,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 11,
        color: "#3f3f46",
      }}
    >
      {value}
    </span>
  );
}

export default function Fig18() {
  return (
    <IllustrationFrame title="Figma パネルとコードの対応">
      <div style={{ display: "flex", gap: 0, width: CONTENT_WIDTH }}>
        {/* Figma panel */}
        <div
          style={{
            flex: 1,
            background: "#f4f4f5",
            borderRadius: 8,
            border: "1px solid #e4e4e7",
            padding: 20,
          }}
        >
          <div style={sectionTitle}>Figma Properties</div>
          <div style={propRow}>
            <span style={propLabel}>showIcon</span>
            <Toggle on />
          </div>
          <div style={propRow}>
            <span style={propLabel}>variant</span>
            <Dropdown value="primary" />
          </div>
          <div style={propRow}>
            <span style={propLabel}>size</span>
            <Dropdown value="medium" />
          </div>
          <div style={{ ...propRow, borderBottom: "none" }}>
            <span style={propLabel}>label</span>
            <TextVal value="保存する" />
          </div>
        </div>

        {/* Arrow */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={arrow}>→</span>
        </div>

        {/* Code */}
        <div
          style={{
            flex: 1,
            background: "#f4f4f5",
            borderRadius: 8,
            border: "1px solid #e4e4e7",
            padding: 20,
          }}
        >
          <div style={sectionTitle}>Code Props</div>
          <pre style={codeBlock}>
{`<Button
  showIcon={true}
  variant="primary"
  size="medium"
  label="保存する"
/>`}
          </pre>
        </div>
      </div>
      <Caption text="Figma プロパティパネルとコードの対応関係" />
    </IllustrationFrame>
  );
}
