import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { ServiceIcon } from "../shared/icons";
import { CONTENT_WIDTH } from "../styles/tokens";

const mono: CSSProperties = {
  fontFamily: '"SF Mono", Menlo, monospace',
};

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
  flex: 1,
};

const heading: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#52525b",
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  marginBottom: 12,
  textAlign: "center",
};

const row: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "7px 0",
  borderBottom: "1px solid #f4f4f5",
  fontSize: 11,
  color: "#3f3f46",
};

const items = ["variant", "size", "label", "showIcon"];

export default function Fig52() {
  return (
    <IllustrationFrame title="メンタルモデルの同期: Figma・コード・チームの認知が一致する">
      <div style={{ display: "flex", gap: 12, width: CONTENT_WIDTH, alignItems: "stretch" }}>
        {/* Figma */}
        <div style={panel}>
          <div style={{ ...heading, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
            <ServiceIcon name="figma" size={16} />
            Figma
          </div>
          {items.map((item, i) => (
            <div key={item} style={{ ...row, borderBottom: i < items.length - 1 ? "1px solid #f4f4f5" : "none" }}>
              <span style={{ ...mono, fontWeight: 500, fontSize: 11 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* = sign */}
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#d4d4d8" }}>=</span>
        </div>

        {/* Code */}
        <div style={panel}>
          <div style={{ ...heading, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
            <ServiceIcon name="react" size={14} />
            Code
          </div>
          {items.map((item, i) => (
            <div key={item} style={{ ...row, borderBottom: i < items.length - 1 ? "1px solid #f4f4f5" : "none" }}>
              <span style={{ ...mono, fontWeight: 500, fontSize: 11 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* = sign */}
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#d4d4d8" }}>=</span>
        </div>

        {/* Mental model */}
        <div style={{ ...panel, background: "#f4f4f5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={heading}>チームの認知</div>
          <div style={{ fontSize: 11, color: "#52525b", textAlign: "center", lineHeight: 1.7 }}>
            全員が同じ
            <br />
            <span style={{ ...mono, fontWeight: 600, fontSize: 12, color: "#18181b" }}>{items.join(", ")}</span>
            <br />
            を思い浮かべる
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
