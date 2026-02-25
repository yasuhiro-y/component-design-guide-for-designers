import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const dimensions = [
  { key: "hierarchy", icon: "H", title: "階層", desc: "どの粒度に位置するか" },
  { key: "name", icon: "N", title: "名前", desc: "役割が伝わる命名か" },
  { key: "props", icon: "P", title: "プロパティ", desc: "外部から何を受け取るか" },
  { key: "visual", icon: "V", title: "見た目", desc: "サイズ・色・余白の定義" },
  { key: "state", icon: "S", title: "状態", desc: "Loading/Empty/Errorの扱い" },
  { key: "deps", icon: "D", title: "依存関係", desc: "他のコンポーネントとの関係" },
  { key: "token", icon: "T", title: "トークン", desc: "デザイントークンとの接続" },
  { key: "behavior", icon: "B", title: "振る舞い", desc: "操作時のインタラクション" },
] as const;

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: 1,
  background: "#e4e4e7",
  borderRadius: 16,
  overflow: "hidden",
  width: CONTENT_WIDTH,
};

const cell: CSSProperties = {
  background: "#fff",
  padding: 16,
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const iconBox: CSSProperties = {
  width: 28,
  height: 28,
  borderRadius: 12,
  background: "#f4f4f5",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 11,
  fontWeight: 700,
  color: "#3f3f46",
  flexShrink: 0,
};

const titleStyle: CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: "#18181b",
};

const descStyle: CSSProperties = {
  fontSize: 11,
  color: "#3f3f46",
  lineHeight: 1.4,
};

export default function Fig31() {
  return (
    <IllustrationFrame>
      <div style={grid}>
        {dimensions.map((d) => (
          <div key={d.key} style={cell}>
            <div style={iconBox}>{d.icon}</div>
            <div style={titleStyle}>{d.title}</div>
            <div style={descStyle}>{d.desc}</div>
          </div>
        ))}
      </div>
    </IllustrationFrame>
  );
}
