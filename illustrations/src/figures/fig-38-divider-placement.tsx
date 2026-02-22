import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const patternTitle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 8,
};

const card: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 12,
};

const annotation: CSSProperties = {
  fontSize: 10,
  color: "#3f3f46",
  marginTop: 6,
  lineHeight: 1.4,
};

const items = ["設定 1", "設定 2", "設定 3"];

function PatternA() {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={patternTitle}>コンポーネント内包</div>
      <div style={card}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              padding: "8px 0",
              borderBottom: "1px solid #e4e4e7",
              fontSize: 12,
              color: "#18181b",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={annotation}>
        最後にも線がつく — 制御不能
      </div>
    </div>
  );
}

function PatternB() {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={patternTitle}>親が制御</div>
      <div style={card}>
        {items.map((item, i) => (
          <div key={item}>
            <div
              style={{
                padding: "8px 0",
                fontSize: 12,
                color: "#18181b",
              }}
            >
              {item}
            </div>
            {i < items.length - 1 && (
              <div style={{ height: 1, background: "#e4e4e7" }} />
            )}
          </div>
        ))}
      </div>
      <div style={annotation}>
        最後は線なし — 親のループで挿入
      </div>
    </div>
  );
}

function PatternC() {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={patternTitle}>Boolean 制御</div>
      <div style={card}>
        {items.map((item, i) => (
          <div key={item}>
            <div
              style={{
                padding: "8px 0",
                fontSize: 12,
                color: "#18181b",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{item}</span>
              {i === items.length - 1 && (
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: '"SF Mono", Menlo, monospace',
                    color: "#52525b",
                    background: "#f4f4f5",
                    padding: "1px 5px",
                    borderRadius: 3,
                  }}
                >
                  divider: off
                </span>
              )}
            </div>
            {i < items.length - 1 && (
              <div style={{ height: 1, background: "#e4e4e7" }} />
            )}
          </div>
        ))}
      </div>
      <div style={annotation}>
        showDivider で末尾だけ非表示
      </div>
    </div>
  );
}

export default function Fig38() {
  return (
    <IllustrationFrame title="区切り線: コンポーネントに含めるか、親が制御するか">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        <PatternA />
        <PatternB />
        <PatternC />
      </div>
    </IllustrationFrame>
  );
}
