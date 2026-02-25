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
  borderRadius: 16,
  padding: 16,
};

const sectionLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#52525b",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  marginBottom: 10,
};

const nameText: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: "#18181b",
  whiteSpace: "nowrap",
};

const nameMuted: CSSProperties = {
  ...nameText,
  color: "#71717a",
};

const headerCell: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  color: "#71717a",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  padding: "0 0 8px",
};

const cell: CSSProperties = {
  padding: "8px 0",
};

const arrowCell: CSSProperties = {
  ...cell,
  textAlign: "center",
  color: "#d4d4d8",
  fontWeight: 700,
  fontSize: 12,
  width: 24,
};

function MatchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ verticalAlign: "middle" }}>
      <circle cx="6" cy="6" r="5" stroke="#22c55e" strokeWidth="1.2" />
      <path d="M3.5 6L5.2 8L8.5 4.5" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Fig66() {
  return (
    <IllustrationFrame>
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
                      <td style={{ ...cell, width: 18 }}><MatchIcon /></td>
                      <td style={cell}><span style={nameText}>{row.figma}</span></td>
                      <td style={arrowCell}>=</td>
                      <td style={cell}><span style={nameText}>{row.code}</span></td>
                      <td style={arrowCell}>←</td>
                      <td style={cell}><span style={nameText}>{row.api}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: 12, fontSize: 10, color: "#166534", textAlign: "center" }}>
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
                      <td style={cell}><span style={nameMuted}>{row.figma}</span></td>
                      <td style={{ ...arrowCell, color: "#d4d4d8" }}>=</td>
                      <td style={cell}><span style={nameMuted}>{row.code}</span></td>
                      <td style={{ ...cell, fontSize: 10, color: "#71717a", fontStyle: "italic", paddingLeft: 8 }}>データ非依存</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: 12, fontSize: 10, color: "#71717a", textAlign: "center" }}>
                特定のデータに依存しない → どのデータにも使える
              </div>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
