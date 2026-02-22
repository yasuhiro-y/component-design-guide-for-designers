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

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
};

const codeFont: CSSProperties = {
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
  fontSize: 12,
  lineHeight: 1.8,
};

const required: CSSProperties = {
  ...codeFont,
  color: "#18181b",
};

const optional: CSSProperties = {
  ...codeFont,
  color: "#a1a1aa",
};

const noteStyle: CSSProperties = {
  fontSize: 11,
  color: "#71717a",
  textAlign: "center",
  marginTop: 16,
  padding: "8px 16px",
  background: "#fff",
  borderRadius: 6,
  border: "1px dashed #d4d4d8",
};

const countBadge = (n: number, accent: boolean): CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 10,
  fontWeight: 600,
  color: accent ? "#ef4444" : "#22c55e",
  background: accent ? "#fef2f2" : "#f0fdf4",
  borderRadius: 999,
  padding: "2px 8px",
  marginTop: 10,
});

export default function Fig36() {
  return (
    <IllustrationFrame title="必須と任意: デフォルト値で使いやすさが決まる">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        {/* Bad: All required */}
        <div style={{ flex: 1 }}>
          <div>
            <span style={badTag}>全て必須</span>
          </div>
          <div style={panel}>
            <div style={{ marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#18181b",
                  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
                }}
              >
                {"<Button"}
              </span>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <div style={required}>{"label=\"保存\""}</div>
              <div style={required}>{"size=\"M\""}</div>
              <div style={required}>{"variant=\"primary\""}</div>
              <div style={required}>{"disabled={false}"}</div>
              <div style={required}>{"icon={null}"}</div>
              <div style={required}>{"onClick={handleClick}"}</div>
            </div>
            <div style={{ ...codeFont, color: "#18181b", marginTop: 4 }}>{"/>"}</div>
            <div style={countBadge(6, true)}>毎回6つ指定が必要</div>
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            color: "#a1a1aa",
            flexShrink: 0,
          }}
        >
          →
        </div>

        {/* Good: With defaults */}
        <div style={{ flex: 1 }}>
          <div>
            <span style={goodTag}>デフォルトあり</span>
          </div>
          <div style={panel}>
            <div style={{ marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#18181b",
                  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
                }}
              >
                {"<Button"}
              </span>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <div style={required}>{"label=\"保存\""}</div>
              <div style={optional}>
                {"size=\"M\""}
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", sans-serif' }}>
                  default
                </span>
              </div>
              <div style={optional}>
                {"variant=\"primary\""}
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", sans-serif' }}>
                  default
                </span>
              </div>
              <div style={optional}>
                {"disabled={false}"}
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", sans-serif' }}>
                  default
                </span>
              </div>
              <div style={optional}>
                {"icon={undefined}"}
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", sans-serif' }}>
                  default
                </span>
              </div>
              <div style={optional}>
                {"onClick={undefined}"}
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", sans-serif' }}>
                  default
                </span>
              </div>
            </div>
            <div style={{ ...codeFont, color: "#18181b", marginTop: 4 }}>{"/>"}</div>
            <div style={countBadge(1, false)}>必須は1つだけ</div>
          </div>
        </div>
      </div>

      <div style={noteStyle}>
        8割のユースケースは何も指定しなくてもそのまま使える
      </div>

      <Caption text="必須と任意: デフォルト値で使いやすさが決まる" />
    </IllustrationFrame>
  );
}
