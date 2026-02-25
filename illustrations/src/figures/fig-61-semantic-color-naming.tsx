import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * 色のセマンティクス: 見た目の色名（red, blue）ではなく
 * 役割（danger, info）で名付けることの重要性を示す図。
 * Bad: variant = red / blue / green / yellow
 * Good: variant = danger / info / success / warning
 */

const badColors = [
  { name: "red", color: "#ef4444", bg: "#fef2f2", border: "#fecaca" },
  { name: "blue", color: "#3b82f6", bg: "#eff6ff", border: "#bfdbfe" },
  { name: "green", color: "#22c55e", bg: "#f0fdf4", border: "#bbf7d0" },
  { name: "yellow", color: "#eab308", bg: "#fefce8", border: "#fef08a" },
] as const;

const goodColors = [
  { name: "danger", color: "#ef4444", bg: "#fef2f2", border: "#fecaca" },
  { name: "info", color: "#3b82f6", bg: "#eff6ff", border: "#bfdbfe" },
  { name: "success", color: "#22c55e", bg: "#f0fdf4", border: "#bbf7d0" },
  { name: "warning", color: "#eab308", bg: "#fefce8", border: "#fef08a" },
] as const;

const afterColors = [
  { name: "danger", color: "#c026d3", bg: "#fdf4ff", border: "#f0abfc" },
  { name: "info", color: "#0ea5e9", bg: "#f0f9ff", border: "#bae6fd" },
  { name: "success", color: "#14b8a6", bg: "#f0fdfa", border: "#99f6e4" },
  { name: "warning", color: "#f97316", bg: "#fff7ed", border: "#fed7aa" },
] as const;

function MiniTag({
  label,
  color,
  bg,
  border,
}: {
  label: string;
  color: string;
  bg: string;
  border: string;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 28,
        padding: "0 10px",
        borderRadius: 8,
        background: bg,
        color,
        border: `1px solid ${border}`,
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {label}
    </span>
  );
}

function MiniButton({
  label,
  color,
  bg,
}: {
  label: string;
  color: string;
  bg: string;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 28,
        padding: "0 12px",
        borderRadius: 5,
        background: bg,
        color: "#fff",
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {label}
    </span>
  );
}

const panelStyle = {
  background: "#fff",
  borderRadius: 16,
  padding: 16,
  flex: 1,
  minWidth: 0,
} as const;

const headerStyle = {
  fontSize: 11,
  fontWeight: 700,
  color: "#52525b",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
  marginBottom: 12,
} as const;

const rowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "6px 0",
  borderBottom: "1px solid #f4f4f5",
} as const;

const rowLast = {
  ...rowStyle,
  borderBottom: "none",
} as const;

const codeStyle = {
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 11,
  color: "#3f3f46",
  width: 60,
  flexShrink: 0,
} as const;

export default function Fig61() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Bad vs Good comparison */}
        <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
          {/* Bad: literal color names */}
          <div style={panelStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#a1a1aa",
                  background: "#f4f4f5",
                  padding: "2px 8px",
                  borderRadius: 8,
                }}
              >
                NG
              </span>
              <span style={headerStyle}>見た目の色名</span>
            </div>
            {badColors.map((c, i) => (
              <div key={c.name} style={i === badColors.length - 1 ? rowLast : rowStyle}>
                <span style={codeStyle}>{c.name}</span>
                <MiniTag label={c.name} color={c.color} bg={c.bg} border={c.border} />
                <MiniButton label={c.name} color="#fff" bg={c.color} />
              </div>
            ))}
          </div>

          {/* Good: semantic names */}
          <div style={panelStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#18181b",
                  background: "#f0fdf4",
                  padding: "2px 8px",
                  borderRadius: 8,
                }}
              >
                OK
              </span>
              <span style={headerStyle}>役割で命名</span>
            </div>
            {goodColors.map((c, i) => (
              <div key={c.name} style={i === goodColors.length - 1 ? rowLast : rowStyle}>
                <span style={codeStyle}>{c.name}</span>
                <MiniTag label={c.name} color={c.color} bg={c.bg} border={c.border} />
                <MiniButton label={c.name} color="#fff" bg={c.color} />
              </div>
            ))}
          </div>
        </div>

        {/* After theme change */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 16,
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: "#18181b", marginBottom: 4 }}>
            ブランドカラーが変わったら？
          </div>
          <div style={{ fontSize: 11, color: "#52525b", marginBottom: 12 }}>
            セマンティック命名なら、トークンの値を差し替えるだけで名前が壊れない
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {/* Before */}
            <div style={{ flex: 1 }}>
              <div style={{ ...headerStyle, marginBottom: 8 }}>変更前</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {goodColors.map((c) => (
                  <MiniTag key={c.name} label={c.name} color={c.color} bg={c.bg} border={c.border} />
                ))}
              </div>
            </div>
            {/* Arrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 18,
                color: "#a1a1aa",
                flexShrink: 0,
              }}
            >
              →
            </div>
            {/* After */}
            <div style={{ flex: 1 }}>
              <div style={{ ...headerStyle, marginBottom: 8 }}>変更後</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {afterColors.map((c) => (
                  <MiniTag key={c.name} label={c.name} color={c.color} bg={c.bg} border={c.border} />
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 11,
              color: "#52525b",
              borderTop: "1px dashed #e4e4e7",
              paddingTop: 10,
            }}
          >
            <code style={{ fontFamily: '"SF Mono", Menlo, monospace', fontSize: 11 }}>red</code>{" "}
            は紫になったら名前が矛盾する。
            <code style={{ fontFamily: '"SF Mono", Menlo, monospace', fontSize: 11 }}>danger</code>{" "}
            は色が変わっても意味が通る
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
