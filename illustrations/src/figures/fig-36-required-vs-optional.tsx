import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const negativeLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#b91c1c",
  letterSpacing: "0.04em",
  marginBottom: 10,
};

const positiveLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#15803d",
  letterSpacing: "0.04em",
  marginBottom: 10,
};

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
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
  color: "#52525b",
};

const noteStyle: CSSProperties = {
  fontSize: 11,
  color: "#3f3f46",
  textAlign: "center",
  marginTop: 16,
  padding: "8px 16px",
  background: "#fff",
  borderRadius: 12,
  border: "1px dashed #d4d4d8",
};

const countNote: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  color: "#52525b",
  marginTop: 10,
};

export default function Fig36() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        {/* Bad: All required */}
        <div style={{ flex: 1 }}>
          <div style={negativeLabel}>全て必須</div>
          <div style={panel}>
            <div style={{ marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
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
            <div style={countNote}>毎回6つ指定が必要</div>
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            color: "#52525b",
            flexShrink: 0,
          }}
        >
          →
        </div>

        {/* Good: With defaults */}
        <div style={{ flex: 1 }}>
          <div style={positiveLabel}>デフォルトあり</div>
          <div style={panel}>
            <div style={{ marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
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
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif' }}>
                  default
                </span>
              </div>
              <div style={optional}>
                {"variant=\"primary\""}
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif' }}>
                  default
                </span>
              </div>
              <div style={optional}>
                {"disabled={false}"}
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif' }}>
                  default
                </span>
              </div>
              <div style={optional}>
                {"icon={undefined}"}
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif' }}>
                  default
                </span>
              </div>
              <div style={optional}>
                {"onClick={undefined}"}
                <span style={{ fontSize: 10, marginLeft: 8, fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif' }}>
                  default
                </span>
              </div>
            </div>
            <div style={{ ...codeFont, color: "#18181b", marginTop: 4 }}>{"/>"}</div>
            <div style={countNote}>必須は1つだけ</div>
          </div>
        </div>
      </div>

      <div style={noteStyle}>
        8割のユースケースは何も指定しなくてもそのまま使える
      </div>

    </IllustrationFrame>
  );
}
