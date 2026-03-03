import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";

interface TechniqueProps {
  number: string;
  title: string;
  description: string;
}

function Technique({ number, title, description }: TechniqueProps) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: text,
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: text, marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 11, color: secondary, lineHeight: 1.5 }}>{description}</div>
      </div>
    </div>
  );
}

function BadItem({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 11,
        color: secondary,
        lineHeight: 1.5,
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#d4d4d8",
          flexShrink: 0,
        }}
      />
      {label}
    </div>
  );
}

export default function Fig80() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
          {/* Left column: 無自覚な場当たり */}
          <div
            style={{
              flex: 1,
              background: "#fafafa",
              borderRadius: 16,
              padding: 20,
              border: `2px dashed #d4d4d8`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: tertiary,
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
                marginBottom: 4,
              }}
            >
              BEFORE
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: secondary, marginBottom: 16 }}>
              無自覚な場当たり
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
              <BadItem label="なんとなく Card と名付けた。本当にそれでよいか未検討" />
              <BadItem label="なんとなく Boolean にした。3つ目が出たらどうなるか未考慮" />
              <BadItem label="なんとなく String にした。許容値の範囲が不明確" />
            </div>
            <div
              style={{
                marginTop: 16,
                paddingTop: 12,
                borderTop: `1px solid ${border}`,
                fontSize: 10,
                color: tertiary,
                lineHeight: 1.5,
                textAlign: "center",
              }}
            >
              半年後、なぜこうなっているかを<br />誰も説明できない
            </div>
          </div>

          {/* Right column: 意図的な妥協 */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 16,
              padding: 20,
              border: `1.5px solid ${text}`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: text,
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
                marginBottom: 4,
              }}
            >
              AFTER
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: text, marginBottom: 16 }}>
              意図的な妥協
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
              <Technique
                number="1"
                title="理由を残す"
                description="「本来は Enum だが、選択肢が確定していないため String で仮置き」と一言書くだけ"
              />
              <Technique
                number="2"
                title="直しやすい方向に倒す"
                description="一括置換しやすい一意な名前にする。より厳密な型への移行が非破壊になる方向を選ぶ"
              />
              <Technique
                number="3"
                title="「今はやらない」と「やらなくていい」を区別する"
                description="先送りした判断を共有し、何が起きたら着手するかのトリガーを決めておく"
              />
            </div>
            <div
              style={{
                marginTop: 16,
                paddingTop: 12,
                borderTop: `1px solid ${border}`,
                fontSize: 10,
                color: tertiary,
                lineHeight: 1.5,
                textAlign: "center",
              }}
            >
              半年後、ここから改善を再開できる
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
