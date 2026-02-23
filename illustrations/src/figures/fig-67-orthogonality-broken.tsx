import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * 直交性の崩れ: 1つのプロパティに2つの関心を混ぜた場合 vs 分離した場合
 * 左: style に色の種類と色の強さを混在 → ghost × danger が成立しない
 * 右: variant と colorScheme を分離 → すべての組み合わせが成立
 */

const sectionLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#52525b",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  marginBottom: 10,
};

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 14,
};

const headerCell: CSSProperties = {
  fontSize: 9,
  fontWeight: 600,
  color: "#a1a1aa",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  padding: "6px 8px",
  textAlign: "center",
};

const cellBase: CSSProperties = {
  padding: "5px 6px",
  textAlign: "center",
};

const rowHeader: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#52525b",
  padding: "5px 8px 5px 0",
  textAlign: "right",
  whiteSpace: "nowrap",
};

/* ── Button chips ── */
function Btn({ bg, color, border, label, opacity }: { bg: string; color: string; border?: string; label: string; opacity?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 9,
        fontWeight: 600,
        padding: "3px 8px",
        borderRadius: 4,
        background: bg,
        color,
        border: border || "none",
        whiteSpace: "nowrap",
        opacity: opacity ?? 1,
      }}
    >
      {label}
    </span>
  );
}

function BrokenCell() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 24,
        borderRadius: 4,
        border: "1.5px dashed #e4e4e7",
        fontSize: 9,
        color: "#d4d4d8",
        fontWeight: 600,
      }}
    >
      ???
    </span>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ verticalAlign: "middle" }}>
      <circle cx="6" cy="6" r="5" stroke="#22c55e" strokeWidth="1.2" />
      <path d="M3.5 6L5.2 8L8.5 4.5" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ verticalAlign: "middle" }}>
      <circle cx="6" cy="6" r="5" stroke="#ef4444" strokeWidth="1.2" />
      <path d="M4 4L8 8M8 4L4 8" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/* ── Left: Mixed (broken) ── */
function BrokenTable() {
  const styles = ["primary", "secondary", "danger", "ghost"] as const;

  const cells: Record<string, { bg: string; color: string; border?: string; label: string }> = {
    primary: { bg: "#18181b", color: "#fff", label: "Primary" },
    secondary: { bg: "#f4f4f5", color: "#18181b", border: "1px solid #e4e4e7", label: "Secondary" },
    danger: { bg: "#ef4444", color: "#fff", label: "Danger" },
    ghost: { bg: "transparent", color: "#71717a", border: "1px dashed #e4e4e7", label: "Ghost" },
  };

  return (
    <div>
      <div style={sectionLabel}>1つのプロパティに混在</div>
      <div style={panel}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "#18181b", marginBottom: 8 }}>
          <code style={{ fontFamily: '"SF Mono", Menlo, monospace', fontSize: 10, background: "#f4f4f5", padding: "2px 5px", borderRadius: 3 }}>style</code> プロパティ
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #e4e4e7" }}>
              <th style={{ ...headerCell, textAlign: "left", width: 60 }}>style</th>
              <th style={headerCell}>見た目</th>
              <th style={{ ...headerCell, width: 50 }}>関心</th>
            </tr>
          </thead>
          <tbody>
            {styles.map((s, i) => {
              const c = cells[s];
              const isGhost = s === "ghost";
              return (
                <tr
                  key={s}
                  style={{
                    borderBottom: i < styles.length - 1 ? "1px solid #f4f4f5" : "none",
                    background: isGhost ? "#fef2f2" : undefined,
                  }}
                >
                  <td style={{ ...rowHeader, textAlign: "left", fontFamily: '"SF Mono", Menlo, monospace', fontSize: 10 }}>{s}</td>
                  <td style={cellBase}>
                    <Btn bg={c.bg} color={c.color} border={c.border} label={c.label} />
                  </td>
                  <td style={{ ...cellBase, fontSize: 9, color: isGhost ? "#ef4444" : "#a1a1aa", fontWeight: isGhost ? 600 : 400 }}>
                    {isGhost ? "強さ?" : "種類"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 10px",
            background: "#fef2f2",
            borderRadius: 4,
            border: "1px solid #fecaca",
            fontSize: 10,
            color: "#b91c1c",
          }}
        >
          <XIcon />
          <span>ghost × danger が成立しない</span>
        </div>
      </div>
    </div>
  );
}

/* ── Right: Separated (working) ── */
function WorkingTable() {
  const colorSchemes = ["primary", "danger"] as const;
  const variants = ["solid", "subtle", "ghost"] as const;

  const matrix: Record<string, Record<string, { bg: string; color: string; border?: string }>> = {
    primary: {
      solid: { bg: "#18181b", color: "#fff" },
      subtle: { bg: "#f4f4f5", color: "#18181b" },
      ghost: { bg: "transparent", color: "#18181b" },
    },
    danger: {
      solid: { bg: "#ef4444", color: "#fff" },
      subtle: { bg: "#fef2f2", color: "#ef4444" },
      ghost: { bg: "transparent", color: "#ef4444" },
    },
  };

  return (
    <div>
      <div style={sectionLabel}>2つのプロパティに分離</div>
      <div style={panel}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "#18181b", marginBottom: 8 }}>
          <code style={{ fontFamily: '"SF Mono", Menlo, monospace', fontSize: 10, background: "#f4f4f5", padding: "2px 5px", borderRadius: 3 }}>colorScheme</code>
          {" × "}
          <code style={{ fontFamily: '"SF Mono", Menlo, monospace', fontSize: 10, background: "#f4f4f5", padding: "2px 5px", borderRadius: 3 }}>variant</code>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #e4e4e7" }}>
              <th style={{ ...headerCell, width: 60 }}></th>
              {variants.map((v) => (
                <th key={v} style={headerCell}>{v}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {colorSchemes.map((cs, i) => (
              <tr key={cs} style={{ borderBottom: i < colorSchemes.length - 1 ? "1px solid #f4f4f5" : "none" }}>
                <td style={rowHeader}>{cs}</td>
                {variants.map((v) => {
                  const cell = matrix[cs][v];
                  const label = cs === "primary" ? "Button" : "Danger";
                  return (
                    <td key={v} style={cellBase}>
                      <Btn bg={cell.bg} color={cell.color} border={v === "ghost" ? `1px dashed ${cs === "danger" ? "#fecaca" : "#e4e4e7"}` : undefined} label={label} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 10px",
            background: "#f0fdf4",
            borderRadius: 4,
            border: "1px solid #bbf7d0",
            fontSize: 10,
            color: "#166534",
          }}
        >
          <CheckIcon />
          <span>すべての組み合わせが成立する</span>
        </div>
      </div>
    </div>
  );
}

export default function Fig67() {
  return (
    <IllustrationFrame title="直交性の崩れ: 1つのプロパティに混ぜる vs 分離する">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <BrokenTable />
        </div>
        <div style={{ flex: 1 }}>
          <WorkingTable />
        </div>
      </div>
    </IllustrationFrame>
  );
}
