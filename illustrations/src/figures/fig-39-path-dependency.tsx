import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ─── Styles ─── */
const nodeBox: CSSProperties = {
  background: "#fff",
  borderRadius: 6,
  border: "1px solid #e4e4e7",
  padding: "10px 14px",
  fontSize: 11,
  fontWeight: 500,
  color: "#18181b",
  textAlign: "center",
  lineHeight: 1.5,
};

const lockedNode: CSSProperties = {
  ...nodeBox,
  background: "#fafafa",
  border: "1px solid #d4d4d8",
  color: "#3f3f46",
};

const decisionNode: CSSProperties = {
  ...nodeBox,
  border: "2px solid #18181b",
  fontWeight: 600,
};

const arrowCol: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 28,
};

const timeLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#52525b",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  marginBottom: 6,
};

const funnelBar = (width: string, opacity: number): CSSProperties => ({
  height: 4,
  background: "#18181b",
  borderRadius: 2,
  width,
  opacity,
  margin: "0 auto",
});

const annotationStyle: CSSProperties = {
  fontSize: 10,
  color: "#3f3f46",
  textAlign: "center",
  marginTop: 2,
};

/* ─── Arrow SVG ─── */
function Arrow() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
      <line x1="0" y1="6" x2="14" y2="6" stroke="#d4d4d8" strokeWidth="1.5" />
      <polygon points="14,2 20,6 14,10" fill="#d4d4d8" />
    </svg>
  );
}

/* ─── Lock icon ─── */
function LockIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#52525b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: 3, verticalAlign: "middle" }}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

export default function Fig39() {
  return (
    <IllustrationFrame title="経路依存性: 初期の選択が未来を縛る">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* ── Funnel: Freedom narrows over time ── */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 0,
          }}
        >
          {/* Step 1: Initial decision */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={timeLabel}>立ち上げ期</div>
            <div style={decisionNode}>
              MUI を採用
              <div style={{ fontSize: 9, color: "#52525b", fontWeight: 400, marginTop: 4 }}>
                管理画面を速く作りたい
              </div>
            </div>
            <div style={{ marginTop: 8 }}>
              <div style={funnelBar("100%", 0.15)} />
              <div style={annotationStyle}>自由度: 高い</div>
            </div>
          </div>

          <div style={arrowCol}><Arrow /></div>

          {/* Step 2: Growing customization */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={timeLabel}>半年後</div>
            <div style={nodeBox}>
              カスタマイズが増える
              <div style={{ fontSize: 9, color: "#52525b", fontWeight: 400, marginTop: 4 }}>
                MUI のスタイル上書きが散在
              </div>
            </div>
            <div style={{ marginTop: 8 }}>
              <div style={funnelBar("65%", 0.25)} />
              <div style={annotationStyle}>自由度: 中</div>
            </div>
          </div>

          <div style={arrowCol}><Arrow /></div>

          {/* Step 3: Desire to change */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={timeLabel}>1年後</div>
            <div style={nodeBox}>
              独自デザインが必要に
              <div style={{ fontSize: 9, color: "#52525b", fontWeight: 400, marginTop: 4 }}>
                Headless UI に乗り換えたいが…
              </div>
            </div>
            <div style={{ marginTop: 8 }}>
              <div style={funnelBar("35%", 0.4)} />
              <div style={annotationStyle}>自由度: 低い</div>
            </div>
          </div>

          <div style={arrowCol}><Arrow /></div>

          {/* Step 4: Locked in */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={timeLabel}>現在</div>
            <div style={lockedNode}>
              <LockIcon />
              移行コストが大きすぎて
              <br />
              方向転換できない
            </div>
            <div style={{ marginTop: 8 }}>
              <div style={funnelBar("12%", 0.6)} />
              <div style={annotationStyle}>自由度: ほぼなし</div>
            </div>
          </div>
        </div>

        {/* ── Takeaway ── */}
        <div
          style={{
            marginTop: 16,
            padding: "10px 16px",
            background: "#fff",
            borderRadius: 6,
            border: "1px dashed #d4d4d8",
            fontSize: 11,
            color: "#3f3f46",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          初期の選択 → 利用箇所が増える → 依存が深まる → 変更コストが膨らむ
          <br />
          <span style={{ color: "#18181b", fontWeight: 500 }}>
            命名・ディレクトリ構造・ライブラリ選択——すべてに同じ力学が働く
          </span>
        </div>
      </div>
    </IllustrationFrame>
  );
}
