import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const legendItem: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontSize: 11,
  color: "#52525b",
};

export default function Fig19() {
  return (
    <IllustrationFrame title="padding vs margin の責任分離">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Legend */}
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          <span style={legendItem}>
            <span style={{ width: 12, height: 12, borderRadius: 2, background: "#e4e4e7" }} />
            padding（内側）
          </span>
          <span style={legendItem}>
            <span style={{ width: 12, height: 12, borderRadius: 2, border: "1.5px dashed #a1a1aa", background: "transparent" }} />
            margin（外側）
          </span>
        </div>

        {/* Demo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            padding: "30px 0",
          }}
        >
          {/* Button with padding visible */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                border: "1.5px dashed #a1a1aa",
                borderRadius: 12,
                padding: 16,
                display: "inline-block",
              }}
            >
              <div
                style={{
                  background: "#e4e4e7",
                  borderRadius: 8,
                  padding: 12,
                  display: "inline-block",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    padding: "8px 20px",
                    background: "#18181b",
                    color: "#fff",
                    borderRadius: 6,
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  Button
                </span>
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#71717a", marginTop: 10 }}>
              <span style={{ fontWeight: 600, color: "#3f3f46" }}>padding</span> = コンポーネントの責任
            </div>
            <div style={{ fontSize: 11, color: "#71717a", marginTop: 2 }}>
              <span style={{ fontWeight: 600, color: "#3f3f46" }}>margin</span> = 親の責任
            </div>
          </div>

          {/* Arrow */}
          <div style={{ fontSize: 12, color: "#a1a1aa" }}>→</div>

          {/* In context */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                border: "1px solid #e4e4e7",
                borderRadius: 8,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                background: "#fafafa",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  padding: "8px 20px",
                  background: "#18181b",
                  color: "#fff",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: '"Inter", sans-serif',
                  alignSelf: "flex-start",
                }}
              >
                Button
              </span>
              <span
                style={{
                  display: "inline-flex",
                  padding: "8px 20px",
                  background: "#18181b",
                  color: "#fff",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: '"Inter", sans-serif',
                  alignSelf: "flex-start",
                }}
              >
                Button
              </span>
            </div>
            <div style={{ fontSize: 11, color: "#71717a", marginTop: 10 }}>
              親が <span style={{ fontWeight: 600, color: "#3f3f46" }}>gap: 12px</span> で間隔を制御
            </div>
          </div>
        </div>
      </div>
      <Caption text="padding（内側）と margin（外側）の責任分離" />
    </IllustrationFrame>
  );
}
