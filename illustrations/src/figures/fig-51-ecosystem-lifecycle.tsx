import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const box: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 20px",
  borderRadius: 8,
  textAlign: "center",
  minWidth: 120,
};

const label: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 2,
};

const sub: CSSProperties = {
  fontSize: 10,
  color: "#a1a1aa",
};

function Arrow() {
  return (
    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" style={{ flexShrink: 0 }}>
      <line x1="0" y1="8" x2="24" y2="8" stroke="#d4d4d8" strokeWidth="1.5" />
      <polygon points="24,3 32,8 24,13" fill="#d4d4d8" />
    </svg>
  );
}

function DownArrow() {
  return (
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
      <line x1="8" y1="0" x2="8" y2="18" stroke="#d4d4d8" strokeWidth="1.5" />
      <polygon points="3,18 8,24 13,18" fill="#d4d4d8" />
    </svg>
  );
}

export default function Fig51() {
  return (
    <IllustrationFrame title="デザインシステムの進化サイクル">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Top row: linear flow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
          <div style={{ ...box, background: "#f4f4f5", border: "1.5px solid #d4d4d8" }}>
            <div style={{ ...label, color: "#18181b" }}>システム</div>
            <div style={sub}>公式コンポーネント</div>
          </div>
          <Arrow />
          <div style={{ ...box, background: "#fff", border: "1.5px solid #e4e4e7" }}>
            <div style={{ ...label, color: "#52525b" }}>Detach</div>
            <div style={sub}>逸脱 = 突然変異</div>
          </div>
          <Arrow />
          <div style={{ ...box, background: "#fff", border: "1.5px solid #e4e4e7" }}>
            <div style={{ ...label, color: "#52525b" }}>検証</div>
            <div style={sub}>有用か？</div>
          </div>
        </div>

        {/* Branch */}
        <div style={{ display: "flex", justifyContent: "center", gap: 80, marginTop: 4 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <DownArrow />
            <div style={{ ...box, background: "#f4f4f5", border: "1.5px solid #18181b" }}>
              <div style={{ ...label, color: "#18181b" }}>昇格</div>
              <div style={sub}>システムに還元</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <DownArrow />
            <div style={{ ...box, background: "#fafafa", border: "1.5px dashed #d4d4d8" }}>
              <div style={{ ...label, color: "#a1a1aa" }}>淘汰</div>
              <div style={sub}>自然に消滅</div>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
