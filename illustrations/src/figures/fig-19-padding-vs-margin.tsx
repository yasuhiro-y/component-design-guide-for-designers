import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
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
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Legend */}
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          <span style={legendItem}>
            <span style={{ width: 12, height: 12, borderRadius: 2, background: "#e4e4e7" }} />
            padding（内側）
          </span>
          <span style={legendItem}>
            <span style={{ width: 12, height: 12, borderRadius: 2, border: "1.5px dashed #52525b", background: "transparent" }} />
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
                border: "1.5px dashed #52525b",
                borderRadius: 8,
                padding: 16,
                display: "inline-block",
              }}
            >
              <div
                style={{
                  background: "#e4e4e7",
                  borderRadius: 16,
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
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
                  }}
                >
                  Button
                </span>
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#3f3f46", marginTop: 10 }}>
              <span style={{ fontWeight: 700, color: "#3f3f46" }}>padding</span> = コンポーネントの責任
            </div>
            <div style={{ fontSize: 11, color: "#3f3f46", marginTop: 2 }}>
              <span style={{ fontWeight: 700, color: "#3f3f46" }}>margin</span> = 親の責任
            </div>
          </div>

          {/* Arrow */}
          <div style={{ fontSize: 12, color: "#52525b" }}>→</div>

          {/* In context */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                border: "1px solid #e4e4e7",
                borderRadius: 16,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                background: "#fafafa",
                width: 200,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  padding: "8px 20px",
                  background: "#18181b",
                  color: "#fff",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 400,
                  fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
                  width: "100%",
                  justifyContent: "center",
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
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 400,
                  fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                Button
              </span>
            </div>
            <div style={{ fontSize: 11, color: "#3f3f46", marginTop: 10 }}>
              親が <span style={{ fontWeight: 700, color: "#3f3f46" }}>gap: 12px</span> で間隔を制御
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
