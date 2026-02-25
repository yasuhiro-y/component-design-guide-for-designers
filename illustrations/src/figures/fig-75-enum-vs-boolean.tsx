import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

const colTitle: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: text,
  textAlign: "center",
  marginBottom: 12,
};

const toggleRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 12px",
  background: "#fafafa",
  borderRadius: 10,
};

const propName: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  fontWeight: 700,
  color: text,
};

/* ── Toggle switch visual ── */
function ToggleSwitch({ on }: { on: boolean }) {
  return (
    <div
      style={{
        width: 36,
        height: 20,
        borderRadius: 10,
        background: on ? "#22c55e" : "#d4d4d8",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#fff",
          position: "absolute",
          top: 2,
          left: on ? 18 : 2,
          transition: "left 0.15s",
        }}
      />
    </div>
  );
}

/* ── Enum selector visual ── */
function EnumSelector({ value, options }: { value: string; options: string[] }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
      }}
    >
      {options.map((opt) => (
        <div
          key={opt}
          style={{
            padding: "4px 10px",
            borderRadius: 8,
            fontSize: 10,
            fontWeight: 700,
            fontFamily: mono,
            background: opt === value ? text : "#f4f4f5",
            color: opt === value ? "#fff" : tertiary,
          }}
        >
          {opt}
        </div>
      ))}
    </div>
  );
}

export default function Fig75() {
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
        {/* ── Left: Boolean x 2 ── */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            borderRadius: 16,
            padding: 16,
          }}
        >
          <div style={colTitle}>Boolean x 2</div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={toggleRow}>
              <span style={propName}>isPrimary</span>
              <ToggleSwitch on={true} />
            </div>
            <div style={toggleRow}>
              <span style={propName}>isDestructive</span>
              <ToggleSwitch on={true} />
            </div>
          </div>

          {/* Contradiction */}
          <div
            style={{
              marginTop: 12,
              padding: "10px 14px",
              borderRadius: 12,
              background: "#fef2f2",
              border: "1px solid #fecaca",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5" />
              <line
                x1="5"
                y1="5"
                x2="11"
                y2="11"
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="11"
                y1="5"
                x2="5"
                y2="11"
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span style={{ fontSize: 10, color: "#ef4444", fontWeight: 700 }}>
              両方 ON は矛盾
            </span>
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 10,
              color: secondary,
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            2つの Boolean が独立に動くため
            <br />
            不正な組み合わせが生まれる
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

        {/* ── Right: Enum x 1 ── */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            borderRadius: 16,
            padding: 16,
          }}
        >
          <div style={colTitle}>Enum x 1</div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                ...toggleRow,
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 8,
              }}
            >
              <span style={propName}>variant</span>
              <EnumSelector
                value="primary"
                options={["primary", "secondary", "destructive"]}
              />
            </div>
          </div>

          {/* Success indicator */}
          <div
            style={{
              marginTop: 12,
              padding: "10px 14px",
              borderRadius: 12,
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#22c55e" strokeWidth="1.5" />
              <path
                d="M5 8.5l2 2 4-4"
                stroke="#22c55e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ fontSize: 10, color: "#15803d", fontWeight: 700 }}>
              常に1つだけ選択
            </span>
          </div>

          {/* Code example */}
          <div
            style={{
              marginTop: 10,
              padding: "8px 12px",
              borderRadius: 10,
              background: "#fafafa",
              border: `1px solid ${border}`,
              fontFamily: mono,
              fontSize: 10,
              color: secondary,
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            variant: &apos;primary&apos; | &apos;secondary&apos; |
            &apos;destructive&apos;
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 10,
              color: secondary,
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            排他的な選択肢は Enum で
            <br />
            <span style={{ fontWeight: 700, color: text }}>
              矛盾を型レベルで防止する
            </span>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
