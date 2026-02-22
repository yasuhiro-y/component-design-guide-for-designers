import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const colTitle: CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 12,
};

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
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

const codeFont: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
  fontSize: 12,
  color: "#3f3f46",
  lineHeight: 1.7,
};

const countCircle = (n: number): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  borderRadius: "50%",
  background: "#f4f4f5",
  fontSize: 13,
  fontWeight: 700,
  color: "#18181b",
});

const noteText: CSSProperties = {
  fontSize: 11,
  color: "#71717a",
  marginTop: 10,
  lineHeight: 1.5,
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

export default function Fig37() {
  return (
    <IllustrationFrame title="条件付き表示: Figmaでは2つ、コードでは1つ">
      <div style={{ display: "flex", gap: 0, width: CONTENT_WIDTH, alignItems: "stretch" }}>
        {/* Figma side */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>Figma</div>
          <div style={panel}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#a1a1aa", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10 }}>
              Properties
            </div>
            <div style={propRow}>
              <span style={propLabel}>サブタイトルを表示</span>
              <Toggle on />
            </div>
            <div style={{ ...propRow, borderBottom: "none" }}>
              <span style={propLabel}>サブタイトル</span>
              <TextVal value="補足テキスト" />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, paddingTop: 12, borderTop: "1px solid #e4e4e7" }}>
              <span style={countCircle(2)}>2</span>
              <span style={{ fontSize: 12, color: "#52525b", fontWeight: 500 }}>プロパティ</span>
            </div>
            <div style={noteText}>
              Boolean + Text の2つで制御
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 16px",
            flexShrink: 0,
            paddingTop: 30,
          }}
        >
          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            fill="none"
            style={{ marginBottom: 4 }}
          >
            <path
              d="M2 10h32M28 4l6 6-6 6"
              stroke="#d4d4d8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: 10, color: "#a1a1aa" }}>mismatch</span>
        </div>

        {/* Code side */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>コード</div>
          <div style={panel}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#a1a1aa", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10 }}>
              Props
            </div>
            <div
              style={{
                background: "#fafafa",
                borderRadius: 6,
                border: "1px solid #e4e4e7",
                padding: 12,
              }}
            >
              <pre style={codeFont}>
                {`subtitle?: string`}
              </pre>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, paddingTop: 12, borderTop: "1px solid #e4e4e7" }}>
              <span style={countCircle(1)}>1</span>
              <span style={{ fontSize: 12, color: "#52525b", fontWeight: 500 }}>プロパティ</span>
            </div>
            <div style={noteText}>
              渡せば表示、省略すれば非表示
            </div>
          </div>
        </div>
      </div>
      <Caption text="条件付き表示: Figmaでは2つ、コードでは1つ" />
    </IllustrationFrame>
  );
}
