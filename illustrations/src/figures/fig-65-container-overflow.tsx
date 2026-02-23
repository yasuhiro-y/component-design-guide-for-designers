import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * コンテナのオーバーフロー: スクロール / もっと見る / 切り捨て（clip）の
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

const listContainer: CSSProperties = {
  background: "#fafafa",
  borderRadius: 6,
  border: "1px solid #f4f4f5",
  overflow: "hidden",
};

interface ListItemProps {
  name: string;
  role: string;
  isLast?: boolean;
  dimmed?: boolean;
}

function ListItem({ name, role, isLast, dimmed }: ListItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 10px",
        borderBottom: isLast ? "none" : "1px solid #f4f4f5",
        opacity: dimmed ? 0.4 : 1,
      }}
    >
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: dimmed ? "#e4e4e7" : "#bfdbfe",
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "#18181b" }}>{name}</div>
        <div style={{ fontSize: 9, color: "#52525b" }}>{role}</div>
      </div>
    </div>
  );
}

const people = [
  { name: "田中 太郎", role: "Designer" },
  { name: "佐藤 花子", role: "Engineer" },
  { name: "鈴木 一郎", role: "PM" },
  { name: "高橋 美咲", role: "Designer" },
  { name: "伊藤 健太", role: "Engineer" },
  { name: "渡辺 さくら", role: "QA" },
];

/* ── スクロール ── */
function ScrollExample() {
  return (
    <div style={panel}>
      <div style={labelStyle}>スクロール</div>
      <div style={{ ...listContainer, height: 140, position: "relative" }}>
        <div style={{ height: "100%", overflowY: "auto" }}>
          {people.map((p, i) => (
            <ListItem key={p.name} name={p.name} role={p.role} isLast={i === people.length - 1} />
          ))}
        </div>
        {/* Scroll fade indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 24,
            background: "linear-gradient(transparent, #fafafa)",
            pointerEvents: "none",
            borderRadius: "0 0 6px 6px",
          }}
        />
        {/* Scrollbar mock */}
        <div
          style={{
            position: "absolute",
            top: 6,
            right: 3,
            width: 3,
            height: 40,
            borderRadius: 2,
            background: "#d4d4d8",
          }}
        />
      </div>
      <div style={descStyle}>固定高で中身がスクロール</div>
      <div
        style={{
          marginTop: 6,
          fontFamily: '"SF Mono", Menlo, monospace',
          fontSize: 9,
          color: "#a1a1aa",
          lineHeight: 1.6,
        }}
      >
        overflow-y: auto
        <br />
        Figma: Clip Content + Prototype Scroll
      </div>
    </div>
  );
}

/* ── もっと見る ── */
function PaginationExample() {
  return (
    <div style={panel}>
      <div style={labelStyle}>もっと見る</div>
      <div style={listContainer}>
        {people.slice(0, 3).map((p, i) => (
          <ListItem key={p.name} name={p.name} role={p.role} isLast={i === 2} />
        ))}
        <div
          style={{
            textAlign: "center",
            padding: "8px 0",
            fontSize: 11,
            fontWeight: 500,
            color: "#3b82f6",
            borderTop: "1px solid #f4f4f5",
          }}
        >
          さらに表示（+3）
        </div>
      </div>
      <div style={descStyle}>表示件数を制限し、残りはボタンで</div>
      <div
        style={{
          marginTop: 6,
          fontFamily: '"SF Mono", Menlo, monospace',
          fontSize: 9,
          color: "#a1a1aa",
          lineHeight: 1.6,
        }}
      >
        件数制限 + ページネーション
        <br />
        Figma: 表示件数分だけ配置
      </div>
    </div>
  );
}

/* ── 切り捨て（clip） ── */
function ClipExample() {
  return (
    <div style={panel}>
      <div style={labelStyle}>切り捨て（Clip）</div>
      <div style={{ ...listContainer, height: 140, overflow: "hidden", position: "relative" }}>
        {people.slice(0, 5).map((p, i) => (
          <ListItem
            key={p.name}
            name={p.name}
            role={p.role}
            isLast={i === 4}
            dimmed={i >= 3}
          />
        ))}
        {/* Hard clip fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 32,
            background: "linear-gradient(transparent, #fafafa)",
            pointerEvents: "none",
          }}
        />
      </div>
      <div style={descStyle}>枠からはみ出した分を切り捨て</div>
      <div
        style={{
          marginTop: 6,
          fontFamily: '"SF Mono", Menlo, monospace',
          fontSize: 9,
          color: "#a1a1aa",
          lineHeight: 1.6,
        }}
      >
        overflow: hidden
        <br />
        Figma: Clip Content
      </div>
    </div>
  );
}

export default function Fig65() {
  return (
    <IllustrationFrame title="コンテナのオーバーフロー: スクロール・もっと見る・切り捨て">
      <div style={{ display: "flex", gap: 12, width: CONTENT_WIDTH }}>
        <ScrollExample />
        <PaginationExample />
        <ClipExample />
      </div>
    </IllustrationFrame>
  );
}
