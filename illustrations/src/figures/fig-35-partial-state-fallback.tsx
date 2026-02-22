import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const headerCell: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#18181b",
  padding: "10px 12px",
  background: "#f4f4f5",
};

const bodyCell: CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid #f4f4f5",
  fontSize: 12,
  color: "#3f3f46",
  verticalAlign: "middle",
};

const fieldLabel: CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  color: "#18181b",
};

const miniAvatar = (hasImage: boolean): CSSProperties => ({
  width: 28,
  height: 28,
  borderRadius: "50%",
  background: hasImage ? "#e4e4e7" : "#f4f4f5",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 10,
  fontWeight: 600,
  color: hasImage ? "#52525b" : "#a1a1aa",
  border: hasImage ? "none" : "1px dashed #d4d4d8",
});

const tagPresent: CSSProperties = {
  display: "inline-block",
  fontSize: 10,
  fontWeight: 500,
  color: "#22c55e",
  background: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: 3,
  padding: "1px 6px",
};

const tagAbsent: CSSProperties = {
  display: "inline-block",
  fontSize: 10,
  fontWeight: 500,
  color: "#ef4444",
  background: "#fef2f2",
  border: "1px solid #fecaca",
  borderRadius: 3,
  padding: "1px 6px",
};

const fallbackNote: CSSProperties = {
  fontSize: 11,
  color: "#71717a",
  marginLeft: 8,
};

const skillTag: CSSProperties = {
  display: "inline-block",
  fontSize: 10,
  fontWeight: 500,
  color: "#3f3f46",
  background: "#fff",
  border: "1px solid #e4e4e7",
  borderRadius: 999,
  padding: "2px 8px",
  marginRight: 4,
};

const starsRow: CSSProperties = {
  display: "flex",
  gap: 2,
  alignItems: "center",
};

export default function Fig35() {
  return (
    <IllustrationFrame title="Partial State: データ欠損時のフォールバック">
      <div
        style={{
          width: CONTENT_WIDTH,
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #e4e4e7",
          overflow: "hidden",
        }}
      >
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #e4e4e7", gap: 8 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#18181b",
              fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
            }}
          >
            UserCard
          </span>
          <span style={{ fontSize: 11, color: "#a1a1aa" }}>Partial State</span>
        </div>

        {/* Table */}
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...headerCell, width: "28%", textAlign: "left" }}>フィールド</th>
              <th style={{ ...headerCell, width: "36%", textAlign: "left" }}>あり</th>
              <th style={{ ...headerCell, width: "36%", textAlign: "left" }}>なし (フォールバック)</th>
            </tr>
          </thead>
          <tbody>
            {/* Profile image */}
            <tr>
              <td style={bodyCell}>
                <div style={fieldLabel}>プロフィール画像</div>
              </td>
              <td style={bodyCell}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={tagPresent}>あり</span>
                  <span style={miniAvatar(true)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                </div>
              </td>
              <td style={bodyCell}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={tagAbsent}>なし</span>
                  <span style={miniAvatar(false)}>TN</span>
                  <span style={fallbackNote}>イニシャルアイコン</span>
                </div>
              </td>
            </tr>

            {/* Rating score */}
            <tr>
              <td style={bodyCell}>
                <div style={fieldLabel}>評価スコア</div>
              </td>
              <td style={bodyCell}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={tagPresent}>あり</span>
                  <div style={starsRow}>
                    {[1, 2, 3, 4].map((i) => (
                      <span key={i} style={{ fontSize: 12, color: "#f59e0b" }}>&#9733;</span>
                    ))}
                    <span style={{ fontSize: 12, color: "#d4d4d8" }}>&#9733;</span>
                    <span style={{ fontSize: 11, color: "#52525b", marginLeft: 4 }}>4.0</span>
                  </div>
                </div>
              </td>
              <td style={bodyCell}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={tagAbsent}>なし</span>
                  <span style={{ fontSize: 12, color: "#a1a1aa" }}>&mdash;</span>
                  <span style={fallbackNote}>ダッシュ表示</span>
                </div>
              </td>
            </tr>

            {/* Bio */}
            <tr>
              <td style={bodyCell}>
                <div style={fieldLabel}>自己紹介文</div>
              </td>
              <td style={bodyCell}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={tagPresent}>あり</span>
                  <span style={{ fontSize: 11, color: "#52525b" }}>UIデザイナーです</span>
                </div>
              </td>
              <td style={bodyCell}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={tagAbsent}>なし</span>
                  <span style={{ fontSize: 11, color: "#a1a1aa", fontStyle: "italic" }}>領域を詰める</span>
                </div>
              </td>
            </tr>

            {/* Skill tags */}
            <tr>
              <td style={{ ...bodyCell, borderBottom: "none" }}>
                <div style={fieldLabel}>スキルタグ</div>
              </td>
              <td style={{ ...bodyCell, borderBottom: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={tagPresent}>あり</span>
                  <span style={skillTag}>Figma</span>
                  <span style={skillTag}>React</span>
                </div>
              </td>
              <td style={{ ...bodyCell, borderBottom: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={tagAbsent}>なし</span>
                  <span style={{ fontSize: 11, color: "#a1a1aa", fontStyle: "italic" }}>セクション非表示</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Caption text="Partial State: データ欠損時のフォールバック定義" />
    </IllustrationFrame>
  );
}
