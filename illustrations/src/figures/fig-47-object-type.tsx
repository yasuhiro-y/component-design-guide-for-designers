import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colTitle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 6,
};

const colSub: CSSProperties = {
  fontSize: 10,
  color: "#52525b",
  marginTop: 6,
};

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
};

const codeBox: CSSProperties = {
  background: "#fafafa",
  borderRadius: 6,
  border: "1px solid #e4e4e7",
  padding: "10px 12px",
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 11,
  lineHeight: 1.7,
  color: "#3f3f46",
};

const kw: CSSProperties = { color: "#52525b" };
const tp: CSSProperties = { color: "#18181b", fontWeight: 500 };

/* ── Stars ── */
function Stars({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", gap: 1 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{ fontSize: 10, color: i <= score ? "#18181b" : "#d4d4d8" }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

/* ── Rendered UserCard (shared visual) ── */
function UserCardVisual() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #e4e4e7",
        padding: 12,
        display: "flex",
        gap: 10,
        alignItems: "center",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#18181b" }}>田中 太郎</span>
          <span style={{ fontSize: 10, fontWeight: 500, color: "#3f3f46", background: "#f4f4f5", border: "1px solid #e4e4e7", borderRadius: 999, padding: "1px 8px" }}>アクティブ</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Stars score={4} />
          <span style={{ fontSize: 10, color: "#52525b" }}>4.0</span>
        </div>
      </div>
    </div>
  );
}

export default function Fig47() {
  return (
    <IllustrationFrame title="Object型: 個別の値 vs データのまとまり">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Same rendered result */}
        <div style={{ fontSize: 11, color: "#52525b", marginBottom: 8 }}>
          同じ見た目でも、プロパティの渡し方が異なる
        </div>
        <div style={{ maxWidth: 340, marginBottom: 16 }}>
          <UserCardVisual />
        </div>

        {/* Two approaches side by side */}
        <div style={{ display: "flex", gap: 16 }}>
          {/* Left: Individual props */}
          <div style={{ flex: 1 }}>
            <div style={colTitle}>個別に渡す</div>
            <div style={panel}>
              <div style={codeBox}>
                <div>
                  <span style={kw}>&lt;UserCard</span>
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span style={kw}>name=</span><span style={tp}>"田中 太郎"</span>
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span style={kw}>image=</span><span style={tp}>"url..."</span>
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span style={kw}>rating=</span><span style={tp}>{"{ 4 }"}</span>
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span style={kw}>status=</span><span style={tp}>"アクティブ"</span>
                </div>
                <div>
                  <span style={kw}>/&gt;</span>
                </div>
              </div>
              <div style={colSub}>プロパティが 4 個並ぶ</div>
            </div>
          </div>

          {/* Right: Object prop */}
          <div style={{ flex: 1 }}>
            <div style={colTitle}>オブジェクトで渡す</div>
            <div style={panel}>
              <div style={codeBox}>
                <div>
                  <span style={kw}>&lt;UserCard</span>
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span style={kw}>user=</span><span style={tp}>{"{ user }"}</span>
                </div>
                <div>
                  <span style={kw}>/&gt;</span>
                </div>
                <div style={{ marginTop: 8, borderTop: "1px dashed #e4e4e7", paddingTop: 8, fontSize: 10, color: "#52525b" }}>
                  <div>type User = {"{"}</div>
                  <div style={{ paddingLeft: 12 }}>name: string</div>
                  <div style={{ paddingLeft: 12 }}>image: string</div>
                  <div style={{ paddingLeft: 12 }}>rating: number</div>
                  <div style={{ paddingLeft: 12 }}>status: string</div>
                  <div>{"}"}</div>
                </div>
              </div>
              <div style={colSub}>プロパティは 1 個。データの構造は型が持つ</div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div
          style={{
            marginTop: 16,
            fontSize: 11,
            color: "#3f3f46",
            padding: "8px 16px",
            background: "#fff",
            borderRadius: 6,
            border: "1px dashed #d4d4d8",
            textAlign: "center",
          }}
        >
          汎用コンポーネントは個別の値、ドメインコンポーネントはオブジェクトで渡すのが自然
        </div>
      </div>
    </IllustrationFrame>
  );
}
