import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * レイアウトバリエーションの命名パターン:
 * レイアウト形状で名前を分ける方法と、配置場所で名前を分ける方法
 */

const mono: CSSProperties = {
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 11,
  fontWeight: 600,
};

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

const headerCell: CSSProperties = {
  fontSize: 9,
  fontWeight: 600,
  color: "#a1a1aa",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  padding: "6px 8px",
  textAlign: "left",
};

const cellStyle: CSSProperties = {
  padding: "8px 8px",
  verticalAlign: "middle",
};

const nameChip: CSSProperties = {
  ...mono,
  fontSize: 11,
  color: "#18181b",
  background: "#f4f4f5",
  border: "1px solid #e4e4e7",
  borderRadius: 5,
  padding: "3px 10px",
  display: "inline-block",
  whiteSpace: "nowrap",
};

const descStyle: CSSProperties = {
  fontSize: 10,
  color: "#52525b",
  lineHeight: 1.4,
};

const layoutIcon = {
  card: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="3" width="20" height="22" rx="3" stroke="#71717a" strokeWidth="1.2" />
      <rect x="4" y="3" width="20" height="10" rx="3" fill="#e4e4e7" />
      <rect x="7" y="16" width="14" height="2" rx="1" fill="#d4d4d8" />
      <rect x="7" y="20" width="8" height="2" rx="1" fill="#e4e4e7" />
    </svg>
  ),
  cell: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="2" y="7" width="24" height="14" rx="3" stroke="#71717a" strokeWidth="1.2" />
      <rect x="4" y="9" width="8" height="10" rx="2" fill="#e4e4e7" />
      <rect x="15" y="10" width="9" height="2" rx="1" fill="#d4d4d8" />
      <rect x="15" y="14" width="6" height="2" rx="1" fill="#e4e4e7" />
    </svg>
  ),
  item: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="2" y="10" width="24" height="8" rx="3" stroke="#71717a" strokeWidth="1.2" />
      <rect x="5" y="12.5" width="10" height="2" rx="1" fill="#d4d4d8" />
      <rect x="17" y="12.5" width="6" height="2" rx="1" fill="#e4e4e7" />
    </svg>
  ),
};

/* ── Left: naming by layout shape ── */
function ByLayoutShape() {
  const rows = [
    { icon: layoutIcon.card, suffix: "Card", desc: "縦型・画像つきのリッチな表示", example: "ArticleCard" },
    { icon: layoutIcon.cell, suffix: "Cell", desc: "横幅いっぱいのリスト行", example: "ArticleCell" },
    { icon: layoutIcon.item, suffix: "Item", desc: "最小限の情報だけを並べるコンパクト行", example: "ArticleItem" },
  ];

  return (
    <div style={{ flex: 1 }}>
      <div style={sectionLabel}>レイアウト形状で分ける</div>
      <div style={panel}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #e4e4e7" }}>
              <th style={{ ...headerCell, width: 36 }}></th>
              <th style={headerCell}>接尾辞</th>
              <th style={headerCell}>コンポーネント名</th>
              <th style={headerCell}>特徴</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.suffix} style={i < rows.length - 1 ? { borderBottom: "1px solid #f4f4f5" } : {}}>
                <td style={{ ...cellStyle, textAlign: "center" }}>{row.icon}</td>
                <td style={cellStyle}><span style={nameChip}>{row.suffix}</span></td>
                <td style={cellStyle}><span style={{ ...nameChip, background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#166534" }}>{row.example}</span></td>
                <td style={{ ...cellStyle, ...descStyle }}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 12, fontSize: 10, color: "#52525b", padding: "6px 10px", background: "#f4f4f5", borderRadius: 4 }}>
          <span style={{ fontWeight: 600 }}>Article</span> + <span style={{ fontWeight: 600 }}>Card / Cell / Item</span> = レイアウトの違いが名前に表れる
        </div>
      </div>
    </div>
  );
}

/* ── Right: naming by placement ── */
function ByPlacement() {
  const rows = [
    { place: "一覧ページ", example: "ArticleListCard", desc: "検索結果や記事一覧に表示" },
    { place: "サイドバー", example: "ArticleSidebarItem", desc: "関連記事として横に並ぶ" },
    { place: "フィード", example: "ArticleFeedCell", desc: "タイムライン上の1行" },
  ];

  return (
    <div style={{ flex: 1 }}>
      <div style={sectionLabel}>配置場所で分ける</div>
      <div style={panel}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #e4e4e7" }}>
              <th style={headerCell}>配置場所</th>
              <th style={headerCell}>コンポーネント名</th>
              <th style={headerCell}>特徴</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.place} style={i < rows.length - 1 ? { borderBottom: "1px solid #f4f4f5" } : {}}>
                <td style={{ ...cellStyle, fontSize: 11, fontWeight: 500, color: "#18181b" }}>{row.place}</td>
                <td style={cellStyle}><span style={{ ...nameChip, background: "#eff6ff", border: "1px solid #bfdbfe", color: "#1e40af" }}>{row.example}</span></td>
                <td style={{ ...cellStyle, ...descStyle }}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 12, fontSize: 10, color: "#52525b", padding: "6px 10px", background: "#f4f4f5", borderRadius: 4 }}>
          <span style={{ fontWeight: 600 }}>Article</span> + <span style={{ fontWeight: 600 }}>場所名</span> = 使われる文脈が名前に表れる
        </div>
      </div>
    </div>
  );
}

export default function Fig69() {
  return (
    <IllustrationFrame title="レイアウトバリエーションの命名: 形状で分けるか、場所で分けるか">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        <ByLayoutShape />
        <ByPlacement />
      </div>
    </IllustrationFrame>
  );
}
