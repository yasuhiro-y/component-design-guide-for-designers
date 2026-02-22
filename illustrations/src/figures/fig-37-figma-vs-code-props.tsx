import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const sectionTitle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 10,
};

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
};

const monoSmall: CSSProperties = {
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 10,
  color: "#52525b",
};

/* ── Rendered Card component ── */
function MiniCard({ subtitle }: { subtitle?: string }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #e4e4e7",
        padding: 12,
        width: "100%",
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 600, color: "#18181b" }}>
        カードタイトル
      </div>
      {subtitle && (
        <div style={{ fontSize: 11, color: "#3f3f46", marginTop: 2 }}>
          {subtitle}
        </div>
      )}
    </div>
  );
}

/* ── Figma toggle ── */
function Toggle({ on }: { on: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        width: 28,
        height: 15,
        borderRadius: 8,
        background: on ? "#18181b" : "#d4d4d8",
        padding: 2,
        alignItems: "center",
        justifyContent: on ? "flex-end" : "flex-start",
      }}
    >
      <span
        style={{
          width: 11,
          height: 11,
          borderRadius: 6,
          background: "#fff",
        }}
      />
    </span>
  );
}

function TextInput({ value }: { value: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 6px",
        borderRadius: 4,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 10,
        color: "#3f3f46",
      }}
    >
      {value}
    </span>
  );
}

const figmaPropRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "6px 0",
  fontSize: 11,
  color: "#3f3f46",
};

export default function Fig37() {
  return (
    <IllustrationFrame title="条件付き表示: Figmaでは2つ、コードでは1つ">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Two columns: Figma vs Code */}
        <div style={{ display: "flex", gap: 16, marginBottom: 0 }}>
          {/* ── Figma ── */}
          <div style={{ flex: 1 }}>
            <div style={sectionTitle}>Figma</div>
            <div style={panel}>
              {/* Rendered card with subtitle ON */}
              <div style={{ marginBottom: 12 }}>
                <MiniCard subtitle="補足テキスト" />
              </div>

              {/* Simulated Figma property panel */}
              <div
                style={{
                  background: "#fafafa",
                  borderRadius: 6,
                  border: "1px solid #e4e4e7",
                  padding: "8px 10px",
                }}
              >
                <div style={{ ...monoSmall, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6 }}>
                  設定パネル
                </div>
                <div style={figmaPropRow}>
                  <span>サブタイトルを表示</span>
                  <Toggle on />
                </div>
                <div style={{ ...figmaPropRow, borderTop: "1px solid #e4e4e7", paddingTop: 6 }}>
                  <span>サブタイトル</span>
                  <TextInput value="補足テキスト" />
                </div>
              </div>

              <div style={{ marginTop: 10, fontSize: 11, color: "#3f3f46" }}>
                表示するかどうかの <strong style={{ color: "#18181b" }}>トグル</strong> と
                テキストの <strong style={{ color: "#18181b" }}>入力</strong> で
                合計2つの操作が必要
              </div>
            </div>
          </div>

          {/* ── Code ── */}
          <div style={{ flex: 1 }}>
            <div style={sectionTitle}>コード</div>
            <div style={panel}>
              {/* Two card states side by side */}
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ ...monoSmall, marginBottom: 4 }}>渡す →</div>
                  <MiniCard subtitle="補足テキスト" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ ...monoSmall, marginBottom: 4 }}>渡さない →</div>
                  <MiniCard />
                </div>
              </div>

              {/* Code snippet */}
              <div
                style={{
                  background: "#fafafa",
                  borderRadius: 6,
                  border: "1px solid #e4e4e7",
                  padding: "8px 10px",
                  fontFamily: '"SF Mono", Menlo, monospace',
                  fontSize: 11,
                  lineHeight: 1.7,
                  color: "#3f3f46",
                }}
              >
                <div>
                  <span style={{ color: "#52525b" }}>subtitle</span>
                  <span style={{ color: "#d4d4d8" }}>?: </span>
                  <span style={{ color: "#18181b", fontWeight: 500 }}>string</span>
                </div>
              </div>

              <div style={{ marginTop: 10, fontSize: 11, color: "#3f3f46" }}>
                テキストを渡せば表示、渡さなければ非表示。
                <strong style={{ color: "#18181b" }}>1つ</strong>で済む
              </div>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
