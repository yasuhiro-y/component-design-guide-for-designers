import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * データモデルとAPI名称: Figma・コード・APIの名前を揃えることで
 * 翻訳コストをなくすことを図示。
 * ドメインコンポーネント（名前を揃える）vs 汎用コンポーネント（抽象的な名前）
 */

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
};

const sectionLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#52525b",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  marginBottom: 10,
};

const layerRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "8px 0",
  borderBottom: "1px solid #f4f4f5",
};

const layerRowLast: CSSProperties = {
  ...layerRow,
  borderBottom: "none",
};

const layerLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#a1a1aa",
  width: 50,
  flexShrink: 0,
  textAlign: "right",
};

const nameChip = (match: boolean): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  fontSize: 12,
  fontWeight: 600,
  fontFamily: '"SF Mono", Menlo, monospace',
  color: match ? "#18181b" : "#52525b",
  background: match ? "#f0fdf4" : "#f4f4f5",
  border: `1px solid ${match ? "#bbf7d0" : "#e4e4e7"}`,
  borderRadius: 5,
  padding: "3px 10px",
});

const connectorStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 11,
  color: "#22c55e",
  fontWeight: 600,
  width: 16,
  flexShrink: 0,
};

const mismatchConnector: CSSProperties = {
  ...connectorStyle,
  color: "#ef4444",
};

interface NamingExample {
  figma: string;
  code: string;
  api: string;
  match: boolean;
}

const domainExamples: NamingExample[] = [
  { figma: "ShiftCard", code: "<ShiftCard />", api: "Shift", match: true },
  { figma: "JobListItem", code: "<JobListItem />", api: "Job", match: true },
  { figma: "UserAvatar", code: "<UserAvatar />", api: "User", match: true },
];

const genericExamples: { figma: string; code: string; note: string }[] = [
  { figma: "Avatar", code: "<Avatar />", note: "データ非依存" },
  { figma: "Card", code: "<Card />", note: "データ非依存" },
  { figma: "Badge", code: "<Badge />", note: "データ非依存" },
];

function MatchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="5" stroke="#22c55e" strokeWidth="1.5" />
      <path d="M3.5 6L5.5 8L8.5 4.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Fig66() {
  return (
    <IllustrationFrame title="データモデルとコンポーネント名: 揃えるか、離すか">
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", gap: 14 }}>
          {/* Left: Domain components — names match API */}
          <div style={{ flex: 1 }}>
            <div style={sectionLabel}>ドメインコンポーネント: API名と揃える</div>
            <div style={panel}>
              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  paddingBottom: 8,
                  borderBottom: "2px solid #e4e4e7",
                  marginBottom: 4,
                }}
              >
                <span style={{ ...layerLabel, color: "#a1a1aa" }}>レイヤー</span>
                <div style={{ display: "flex", gap: 6, flex: 1 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: "#a1a1aa", width: 70 }}>Figma</span>
                  <span style={{ width: 16 }} />
                  <span style={{ fontSize: 9, fontWeight: 600, color: "#a1a1aa", width: 100 }}>コード</span>
                  <span style={{ width: 16 }} />
                  <span style={{ fontSize: 9, fontWeight: 600, color: "#a1a1aa" }}>API</span>
                </div>
              </div>

              {domainExamples.map((ex, i) => (
                <div key={ex.figma} style={i === domainExamples.length - 1 ? layerRowLast : layerRow}>
                  <span style={layerLabel}>
                    <MatchIcon />
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
                    <span style={nameChip(true)}>{ex.figma}</span>
                    <span style={connectorStyle}>=</span>
                    <span style={{ ...nameChip(true), fontSize: 11 }}>{ex.code}</span>
                    <span style={connectorStyle}>←</span>
                    <span style={nameChip(true)}>{ex.api}</span>
                  </div>
                </div>
              ))}

              <div
                style={{
                  marginTop: 10,
                  fontSize: 10,
                  color: "#52525b",
                  padding: "6px 10px",
                  background: "#f0fdf4",
                  borderRadius: 4,
                  border: "1px solid #bbf7d0",
                  textAlign: "center",
                }}
              >
                Figma・コード・API が同じ語彙 → 翻訳不要
              </div>
            </div>
          </div>

          {/* Right: Generic components — abstract names */}
          <div style={{ flex: 1 }}>
            <div style={sectionLabel}>汎用コンポーネント: 抽象的な名前</div>
            <div style={panel}>
              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  paddingBottom: 8,
                  borderBottom: "2px solid #e4e4e7",
                  marginBottom: 4,
                }}
              >
                <span style={{ ...layerLabel, color: "#a1a1aa" }}></span>
                <div style={{ display: "flex", gap: 6, flex: 1 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: "#a1a1aa", width: 70 }}>Figma</span>
                  <span style={{ width: 16 }} />
                  <span style={{ fontSize: 9, fontWeight: 600, color: "#a1a1aa", width: 100 }}>コード</span>
                  <span style={{ width: 16 }} />
                  <span style={{ fontSize: 9, fontWeight: 600, color: "#a1a1aa" }}></span>
                </div>
              </div>

              {genericExamples.map((ex, i) => (
                <div key={ex.figma} style={i === genericExamples.length - 1 ? layerRowLast : layerRow}>
                  <span style={layerLabel}></span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
                    <span style={nameChip(false)}>{ex.figma}</span>
                    <span style={{ ...connectorStyle, color: "#a1a1aa" }}>=</span>
                    <span style={{ ...nameChip(false), fontSize: 11 }}>{ex.code}</span>
                    <span style={{ width: 16, flexShrink: 0 }} />
                    <span
                      style={{
                        fontSize: 9,
                        color: "#a1a1aa",
                        fontStyle: "italic",
                      }}
                    >
                      {ex.note}
                    </span>
                  </div>
                </div>
              ))}

              <div
                style={{
                  marginTop: 10,
                  fontSize: 10,
                  color: "#52525b",
                  padding: "6px 10px",
                  background: "#f4f4f5",
                  borderRadius: 4,
                  border: "1px solid #e4e4e7",
                  textAlign: "center",
                }}
              >
                特定のデータに依存しない → どのデータにも使える
              </div>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
