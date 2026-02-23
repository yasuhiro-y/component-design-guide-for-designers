import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { ServiceIcon } from "../shared/icons";
import { CONTENT_WIDTH } from "../styles/tokens";

const timeLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#52525b",
  marginBottom: 6,
};

const nodeBox: CSSProperties = {
  background: "#fff",
  borderRadius: 6,
  border: "1px solid #e4e4e7",
  padding: "10px 12px",
  fontSize: 12,
  fontWeight: 600,
  color: "#18181b",
  textAlign: "center",
  lineHeight: 1.5,
};

const sub: CSSProperties = {
  fontSize: 10,
  color: "#52525b",
  fontWeight: 400,
  marginTop: 4,
};

function Arrow() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: 24 }}>
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
        <line x1="0" y1="5" x2="10" y2="5" stroke="#d4d4d8" strokeWidth="1.5" />
        <polygon points="10,1.5 16,5 10,8.5" fill="#d4d4d8" />
      </svg>
    </div>
  );
}

export default function Fig39() {
  return (
    <IllustrationFrame title="経路依存性: 初期の選択が未来を縛る">
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={timeLabel}>立ち上げ期</div>
            <div style={{ ...nodeBox, border: "2px solid #18181b" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <ServiceIcon name="mui" size={16} />
                MUI を採用
              </span>
              <div style={sub}>管理画面を速く作りたい</div>
            </div>
          </div>

          <Arrow />

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={timeLabel}>半年後</div>
            <div style={nodeBox}>
              カスタマイズが増える
              <div style={sub}>スタイル上書きが散在</div>
            </div>
          </div>

          <Arrow />

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={timeLabel}>1年後</div>
            <div style={nodeBox}>
              独自デザインが必要に
              <div style={sub}>乗り換えたいが…</div>
            </div>
          </div>

          <Arrow />

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={timeLabel}>現在</div>
            <div style={{ ...nodeBox, background: "#fafafa", border: "1px solid #d4d4d8", color: "#3f3f46" }}>
              移行コストが大きすぎて方向転換できない
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 11,
            color: "#3f3f46",
            textAlign: "center",
          }}
        >
          初期の選択 → 利用箇所が増える → 依存が深まる → 変更コストが膨らむ
        </div>
      </div>
    </IllustrationFrame>
  );
}
