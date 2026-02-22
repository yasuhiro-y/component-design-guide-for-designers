import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const badTag: CSSProperties = {
  display: "inline-block",
  fontSize: 11,
  fontWeight: 600,
  color: "#ef4444",
  background: "#fef2f2",
  border: "1px solid #fecaca",
  borderRadius: 4,
  padding: "2px 8px",
  marginBottom: 10,
};

const goodTag: CSSProperties = {
  display: "inline-block",
  fontSize: 11,
  fontWeight: 600,
  color: "#22c55e",
  background: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: 4,
  padding: "2px 8px",
  marginBottom: 10,
};

const nodeBox: CSSProperties = {
  background: "#fff",
  borderRadius: 6,
  border: "1px solid #e4e4e7",
  padding: "8px 10px",
  fontSize: 11,
  fontWeight: 500,
  color: "#18181b",
  textAlign: "center",
  minWidth: 100,
  lineHeight: 1.4,
};

const arrowStyle: CSSProperties = {
  fontSize: 14,
  color: "#a1a1aa",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
};

const costLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  padding: "2px 8px",
  borderRadius: 4,
  textAlign: "center",
  marginTop: 4,
};

const timeLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#71717a",
  textAlign: "center",
  marginBottom: 8,
};

function PathRow({
  tag,
  tagStyle,
  steps,
  costText,
  costColor,
}: {
  tag: string;
  tagStyle: CSSProperties;
  steps: string[];
  costText: string;
  costColor: "red" | "green";
}) {
  const costStyles: CSSProperties =
    costColor === "red"
      ? { ...costLabel, background: "#fef2f2", color: "#ef4444" }
      : { ...costLabel, background: "#f0fdf4", color: "#22c55e" };

  return (
    <div>
      <div>
        <span style={tagStyle}>{tag}</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {steps.map((step, i) => (
          <div key={i} style={{ display: "contents" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={nodeBox}>{step}</div>
            </div>
            {i < steps.length - 1 && <div style={arrowStyle}>&rarr;</div>}
          </div>
        ))}
        <div style={arrowStyle}>&rarr;</div>
        <div style={{ minWidth: 80 }}>
          <div style={costStyles}>{costText}</div>
        </div>
      </div>
    </div>
  );
}

export default function Fig39() {
  return (
    <IllustrationFrame title="経路依存性: 初期の選択が未来を縛る">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Timeline headers */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 16,
            paddingLeft: 0,
          }}
        >
          {["初期選択", "半年後", "1年後", "方向転換"].map((label, i) => (
            <div key={label} style={{ flex: 1, minWidth: 0 }}>
              <div style={timeLabel}>{label}</div>
            </div>
          ))}
          <div style={{ minWidth: 80 }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <PathRow
            tag="MUI 採用"
            tagStyle={badTag}
            steps={[
              "MUI 採用",
              "カスタマイズ増加",
              "独自デザイン必要",
              "移行コスト大",
            ]}
            costText="移行コスト大"
            costColor="red"
          />
          <PathRow
            tag="Headless UI 採用"
            tagStyle={goodTag}
            steps={[
              "Headless UI 採用",
              "スタイル自由",
              "独自デザイン対応",
              "移行コスト小",
            ]}
            costText="移行コスト小"
            costColor="green"
          />
        </div>
      </div>
      <Caption text="経路依存性: 初期の選択が未来の自由度を決める" />
    </IllustrationFrame>
  );
}
