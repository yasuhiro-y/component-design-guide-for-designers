import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

interface Layer {
  name: string;
  nameEn: string;
  example: string;
  accent: string;
  width: string;
}

const layers: Layer[] = [
  {
    name: "Pages",
    nameEn: "ページ",
    example: "実データ入りの最終画面",
    accent: "#18181b",
    width: "100%",
  },
  {
    name: "Templates",
    nameEn: "テンプレート",
    example: "ページのスケルトン構造",
    accent: "#3f3f46",
    width: "88%",
  },
  {
    name: "Organisms",
    nameEn: "有機体",
    example: "Header, Sidebar, Card",
    accent: "#52525b",
    width: "76%",
  },
  {
    name: "Molecules",
    nameEn: "分子",
    example: "SearchBar, FormField",
    accent: "#71717a",
    width: "64%",
  },
  {
    name: "Atoms",
    nameEn: "原子",
    example: "Button, Input, Label",
    accent: "#a1a1aa",
    width: "52%",
  },
];

const barStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  background: "#fff",
  border: "1px solid #e4e4e7",
  borderRadius: 6,
  overflow: "hidden",
  marginBottom: 6,
};

const accentBar = (color: string): CSSProperties => ({
  width: 5,
  alignSelf: "stretch",
  background: color,
  flexShrink: 0,
  borderRadius: "6px 0 0 6px",
});

const nameStyle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#18181b",
  fontFamily: '"SF Mono", Menlo, monospace',
};

const nameEnStyle: CSSProperties = {
  fontSize: 10,
  color: "#a1a1aa",
  marginLeft: 6,
};

const exampleStyle: CSSProperties = {
  fontSize: 11,
  color: "#71717a",
};

export default function Fig40() {
  return (
    <IllustrationFrame title="Atomic Design: 5つの階層">
      <div style={{ width: CONTENT_WIDTH }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {layers.map((layer) => (
            <div
              key={layer.name}
              style={{
                width: layer.width,
                marginBottom: 6,
              }}
            >
              <div style={barStyle}>
                <div style={accentBar(layer.accent)} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 14px",
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                    }}
                  >
                    <span style={nameStyle}>{layer.name}</span>
                    <span style={nameEnStyle}>{layer.nameEn}</span>
                  </div>
                  <span style={exampleStyle}>{layer.example}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow and label showing composition direction */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            marginTop: 12,
          }}
        >
          <span style={{ fontSize: 10, color: "#a1a1aa" }}>小さい</span>
          <svg
            width="120"
            height="12"
            viewBox="0 0 120 12"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <line
              x1="0"
              y1="6"
              x2="110"
              y2="6"
              stroke="#d4d4d8"
              strokeWidth="1.5"
            />
            <polygon points="110,2 118,6 110,10" fill="#d4d4d8" />
          </svg>
          <span style={{ fontSize: 10, color: "#a1a1aa" }}>大きい</span>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 10,
            color: "#a1a1aa",
            marginTop: 4,
          }}
        >
          粒度: 下の層を組み合わせて上の層を構成する
        </div>
      </div>
      <Caption text="Atomic Design: 5つの階層" />
    </IllustrationFrame>
  );
}
