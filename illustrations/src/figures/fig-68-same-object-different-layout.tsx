import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";
import { avatars } from "../shared/unsplash";

/**
 * 同じオブジェクト（Article）を受け取るが、レイアウトが異なる3パターン:
 * Card（縦型リッチ）、Cell（横幅いっぱいリスト）、Item（コンパクト）
 */

const mono: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
};

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  overflow: "hidden",
};

const tag: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  color: "#3b82f6",
};

const imagePlaceholder: CSSProperties = {
  objectFit: "cover",
  display: "block",
  width: "100%",
};

const sectionLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#52525b",
  marginBottom: 8,
};

const codeLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#52525b",
  marginBottom: 6,
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
        <img
          src={avatars.suzuki.replace("w=100&h=100", "w=400&h=200").replace("crop=face", "crop=center")}
          alt=""
          style={{ ...imagePlaceholder, height: 100, borderRadius: "16px 16px 0 0" }}
        />
        <div style={{ padding: 12 }}>
          <div style={tag}>{article.tag}</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#18181b", marginTop: 6, lineHeight: 1.4 }}>
            {article.title}
          </div>
          <div style={{ fontSize: 10, color: "#71717a", marginTop: 4, lineHeight: 1.4 }}>
            {article.summary.slice(0, 30)}…
          </div>
          <div style={{ fontSize: 10, color: "#71717a", marginTop: 8 }}>
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
        <img
          src={avatars.suzuki.replace("w=100&h=100", "w=160&h=160").replace("crop=face", "crop=center")}
          alt=""
          style={{ width: 80, minHeight: 80, objectFit: "cover", borderRadius: "16px 0 0 16px", display: "block" }}
        />
        <div style={{ padding: "10px 12px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={tag}>{article.tag}</span>
            <span style={{ fontSize: 10, color: "#71717a" }}>{article.date}</span>
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#18181b", marginTop: 4 }}>
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
            <div style={{ fontSize: 11, fontWeight: 700, color: "#18181b" }}>
              {article.title}
            </div>
            <div style={{ fontSize: 10, color: "#71717a", marginTop: 2 }}>
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
        gap: 6,
        padding: "6px 14px",
        background: "#f4f4f5",
        borderRadius: 8,
        marginBottom: 14,
      }}
    >
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="1" width="12" height="12" rx="2" stroke="#71717a" strokeWidth="1.2" />
        <path d="M4 5H10M4 7H10M4 9H7" stroke="#71717a" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <span style={{ fontSize: 11, fontWeight: 600, color: "#3f3f46" }}>
        受け取るオブジェクト: Article
      </span>
    </div>
  );
}

export default function Fig68() {
  return (
    <IllustrationFrame>
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
