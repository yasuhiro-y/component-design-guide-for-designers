import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * テキストのオーバーフロー: 省略（truncate）、行数制限（line-clamp）、折り返し（wrap）の
 * 3パターンを並べて比較する図。
 */

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 14,
  flex: 1,
  minWidth: 0,
};

const labelStyle: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#52525b",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  marginBottom: 8,
};

const descStyle: CSSProperties = {
  fontSize: 10,
  color: "#a1a1aa",
  marginTop: 8,
};

const cardBase: CSSProperties = {
  background: "#fafafa",
  borderRadius: 6,
  border: "1px solid #f4f4f5",
  padding: 10,
};

const longName = "Alexander Bartholomew Christopher Davidson III";
const longDesc =
  "コンポーネント設計の基礎から応用まで、デザイナーとエンジニアが共通言語で語れるようになるためのガイドブックです。Figmaとコードの対応を意識しながら解説します。";

function MiniAvatar() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "#bfdbfe",
        flexShrink: 0,
      }}
    />
  );
}


/* ── 1行省略（truncate） ── */
function TruncateExample() {
  return (
    <div style={panel}>
      <div style={labelStyle}>省略（Truncate）</div>
      <div style={cardBase}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <MiniAvatar />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#18181b",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {longName}
            </div>
            <div style={{ fontSize: 10, color: "#52525b" }}>Product Designer</div>
          </div>
        </div>
      </div>
      <div style={descStyle}>
        1行で切り、末尾に … を表示
      </div>
      <div
        style={{
          marginTop: 6,
          fontFamily: '"SF Mono", Menlo, monospace',
          fontSize: 9,
          color: "#a1a1aa",
          lineHeight: 1.6,
        }}
      >
        text-overflow: ellipsis
        <br />
        Figma: Truncate Text
      </div>
    </div>
  );
}

/* ── 行数制限（line-clamp） ── */
function LineClampExample() {
  return (
    <div style={panel}>
      <div style={labelStyle}>行数制限（Line Clamp）</div>
      <div style={cardBase}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#18181b", marginBottom: 4 }}>
          コンポーネント設計ガイド
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#3f3f46",
            lineHeight: 1.6,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {longDesc}
        </div>
      </div>
      <div style={descStyle}>
        最大2行まで表示し、超えたら … で省略
      </div>
      <div
        style={{
          marginTop: 6,
          fontFamily: '"SF Mono", Menlo, monospace',
          fontSize: 9,
          color: "#a1a1aa",
          lineHeight: 1.6,
        }}
      >
        -webkit-line-clamp: 2
        <br />
        Figma: Max Lines
      </div>
    </div>
  );
}

/* ── 折り返し（wrap） ── */
function WrapExample() {
  return (
    <div style={panel}>
      <div style={labelStyle}>折り返し（Wrap）</div>
      <div style={cardBase}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#18181b", marginBottom: 4 }}>
          利用規約
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#3f3f46",
            lineHeight: 1.6,
            wordBreak: "break-word",
          }}
        >
          {longDesc}
        </div>
      </div>
      <div style={descStyle}>
        制限なく折り返して全文を表示
      </div>
      <div
        style={{
          marginTop: 6,
          fontFamily: '"SF Mono", Menlo, monospace',
          fontSize: 9,
          color: "#a1a1aa",
          lineHeight: 1.6,
        }}
      >
        overflow-wrap: break-word
        <br />
        Figma: Auto Height
      </div>
    </div>
  );
}

export default function Fig64() {
  return (
    <IllustrationFrame title="テキストのオーバーフロー: 省略・行数制限・折り返し">
      <div style={{ display: "flex", gap: 12, width: CONTENT_WIDTH }}>
        <TruncateExample />
        <LineClampExample />
        <WrapExample />
      </div>
    </IllustrationFrame>
  );
}
