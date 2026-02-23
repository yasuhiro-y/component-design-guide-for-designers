import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * 同じオブジェクト（Article）を受け取るが、レイアウトが異なる3パターン:
 * Card（縦型リッチ）、Cell（横幅いっぱいリスト）、Item（コンパクト）
 */

const mono: CSSProperties = {
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 10,
  fontWeight: 600,
};

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  overflow: "hidden",
};

const tag: CSSProperties = {
  fontSize: 9,
  fontWeight: 600,
  color: "#3b82f6",
  background: "#eff6ff",
  border: "1px solid #bfdbfe",
  borderRadius: 4,
  padding: "1px 6px",
  display: "inline-block",
};

const imagePlaceholder: CSSProperties = {
  background: "linear-gradient(135deg, #e4e4e7 0%, #d4d4d8 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#a1a1aa",
  fontSize: 10,
  fontWeight: 600,
};

const sectionLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#52525b",
  marginBottom: 8,
};

const codeLabel: CSSProperties = {
  ...mono,
  color: "#18181b",
  background: "#f4f4f5",
  border: "1px solid #e4e4e7",
  borderRadius: 4,
  padding: "2px 8px",
  display: "inline-block",
  marginBottom: 8,
};

/* ── Shared data ── */
const article = {
  title: "コンポーネント設計の考え方",
  author: "田中太郎",
  date: "2024/03/15",
  tag: "デザイン",
  summary: "デザインシステムにおけるコンポーネントの設計原則と実践的な考え方を解説…",
};

/* ── Card layout (vertical, rich) ── */
function CardLayout() {
  return (
    <div>
      <div style={sectionLabel}>縦型カード</div>
      <div style={codeLabel}>ArticleCard</div>
      <div style={{ ...panel, width: 200 }}>
        <div style={{ ...imagePlaceholder, height: 100 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#a1a1aa" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="2" stroke="#a1a1aa" strokeWidth="1.2" />
            <path d="M3 16L8 12L12 15L17 10L21 14" stroke="#a1a1aa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ padding: 12 }}>
          <div style={tag}>{article.tag}</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#18181b", marginTop: 6, lineHeight: 1.4 }}>
            {article.title}
          </div>
          <div style={{ fontSize: 10, color: "#71717a", marginTop: 4, lineHeight: 1.4 }}>
            {article.summary.slice(0, 30)}…
          </div>
          <div style={{ fontSize: 9, color: "#a1a1aa", marginTop: 8 }}>
            {article.author} · {article.date}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Cell layout (horizontal, full-width) ── */
function CellLayout() {
  return (
    <div style={{ flex: 1 }}>
      <div style={sectionLabel}>横型セル</div>
      <div style={codeLabel}>ArticleCell</div>
      <div style={{ ...panel, display: "flex" }}>
        <div style={{ ...imagePlaceholder, width: 80, minHeight: 80 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#a1a1aa" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="2" stroke="#a1a1aa" strokeWidth="1.2" />
            <path d="M3 16L8 12L12 15L17 10L21 14" stroke="#a1a1aa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ padding: "10px 12px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={tag}>{article.tag}</span>
            <span style={{ fontSize: 9, color: "#a1a1aa" }}>{article.date}</span>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#18181b", marginTop: 4 }}>
            {article.title}
          </div>
          <div style={{ fontSize: 10, color: "#71717a", marginTop: 2 }}>
            {article.author}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Item layout (compact, minimal) ── */
function ItemLayout() {
  return (
    <div style={{ flex: 1 }}>
      <div style={sectionLabel}>コンパクト</div>
      <div style={codeLabel}>ArticleItem</div>
      <div style={{ ...panel, padding: "10px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#18181b" }}>
              {article.title}
            </div>
            <div style={{ fontSize: 9, color: "#a1a1aa", marginTop: 2 }}>
              {article.author} · {article.date}
            </div>
          </div>
          <span style={tag}>{article.tag}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Shared object indicator ── */
function ObjectBadge() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "8px 16px",
        background: "#f0fdf4",
        border: "1px solid #bbf7d0",
        borderRadius: 6,
        marginBottom: 16,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="1" width="12" height="12" rx="2" stroke="#22c55e" strokeWidth="1.2" />
        <path d="M4 5H10M4 7H10M4 9H7" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <span style={{ ...mono, fontSize: 11, color: "#166534" }}>
        受け取るオブジェクト: Article {"{"} title, author, date, tag, summary {"}"}
      </span>
    </div>
  );
}

export default function Fig68() {
  return (
    <IllustrationFrame title="同じオブジェクトを受け取り、レイアウトだけが異なる">
      <div style={{ width: CONTENT_WIDTH }}>
        <ObjectBadge />
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <CardLayout />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <CellLayout />
            <ItemLayout />
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
