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

const mono: CSSProperties = {
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 12,
  fontWeight: 600,
};

const headerCell: CSSProperties = {
  fontSize: 9,
  fontWeight: 600,
  color: "#a1a1aa",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  padding: "0 0 8px",
};

const cell: CSSProperties = {
  padding: "8px 0",
};

const matchChip: CSSProperties = {
  ...mono,
  color: "#18181b",
  background: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: 5,
  padding: "3px 10px",
  display: "inline-block",
  whiteSpace: "nowrap",
};

const neutralChip: CSSProperties = {
  ...mono,
  color: "#52525b",
  background: "#f4f4f5",
  border: "1px solid #e4e4e7",
  borderRadius: 5,
  padding: "3px 10px",
  display: "inline-block",
  whiteSpace: "nowrap",
};

const arrowCell: CSSProperties = {
  ...cell,
  textAlign: "center",
  color: "#22c55e",
  fontWeight: 600,
  fontSize: 13,
  width: 24,
};

function MatchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ verticalAlign: "middle" }}>
      <circle cx="7" cy="7" r="6" stroke="#22c55e" strokeWidth="1.5" />
      <path d="M4 7L6 9.5L10 5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Fig66() {
  return (
    <IllustrationFrame title="データモデルとコンポーネント名: 揃えるか、離すか">
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", gap: 14 }}>
          {/* Left: Domain — match API names */}
          <div style={{ flex: 1 }}>
            <div style={sectionLabel}>ドメインコンポーネント: API名と揃える</div>
            <div style={panel}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #e4e4e7" }}>
                    <th style={headerCell}></th>
                    <th style={{ ...headerCell, textAlign: "left" }}>Figma</th>
                    <th style={headerCell}></th>
                    <th style={{ ...headerCell, textAlign: "left" }}>コード</th>
                    <th style={headerCell}></th>
                    <th style={{ ...headerCell, textAlign: "left" }}>API</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { figma: "ShiftCard", code: "ShiftCard", api: "Shift" },
                    { figma: "JobListItem", code: "JobListItem", api: "Job" },
                    { figma: "UserAvatar", code: "UserAvatar", api: "User" },
                  ].map((row, i, arr) => (
                    <tr key={row.figma} style={i < arr.length - 1 ? { borderBottom: "1px solid #f4f4f5" } : {}}>
                      <td style={{ ...cell, width: 20 }}><MatchIcon /></td>
                      <td style={cell}><span style={matchChip}>{row.figma}</span></td>
                      <td style={arrowCell}>=</td>
                      <td style={cell}><span style={matchChip}>{row.code}</span></td>
                      <td style={arrowCell}>←</td>
                      <td style={cell}><span style={matchChip}>{row.api}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                style={{
                  marginTop: 12,
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

          {/* Right: Generic — abstract names */}
          <div style={{ flex: 1 }}>
            <div style={sectionLabel}>汎用コンポーネント: 抽象的な名前</div>
            <div style={panel}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #e4e4e7" }}>
                    <th style={{ ...headerCell, textAlign: "left" }}>Figma</th>
                    <th style={headerCell}></th>
                    <th style={{ ...headerCell, textAlign: "left" }}>コード</th>
                    <th style={{ ...headerCell, textAlign: "left" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { figma: "Avatar", code: "Avatar" },
                    { figma: "Card", code: "Card" },
                    { figma: "Badge", code: "Badge" },
                  ].map((row, i, arr) => (
                    <tr key={row.figma} style={i < arr.length - 1 ? { borderBottom: "1px solid #f4f4f5" } : {}}>
                      <td style={cell}><span style={neutralChip}>{row.figma}</span></td>
                      <td style={{ ...arrowCell, color: "#a1a1aa" }}>=</td>
                      <td style={cell}><span style={neutralChip}>{row.code}</span></td>
                      <td style={{ ...cell, fontSize: 9, color: "#a1a1aa", fontStyle: "italic", paddingLeft: 8 }}>データ非依存</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                style={{
                  marginTop: 12,
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
