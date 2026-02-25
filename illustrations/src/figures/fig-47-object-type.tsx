import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { avatars } from "../shared/unsplash";
import { CONTENT_WIDTH } from "../styles/tokens";

const colTitle: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#18181b",
  marginBottom: 8,
};

/* Code panel — explanation surface (white, no border) */
const codePanel: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  padding: 20,
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const codeBox: CSSProperties = {
  background: "#f8f8fa",
  borderRadius: 12,
  padding: "14px 16px",
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 12,
  lineHeight: 1.8,
  color: "#3f3f46",
  flex: 1,
};

const kw: CSSProperties = { color: "#52525b" };
const tp: CSSProperties = { color: "#18181b", fontWeight: 700 };

/* ── Stars ── */
function Stars({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{ fontSize: 12, color: i <= score ? "#18181b" : "#d4d4d8" }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

/* ── UI mock: rendered UserCard ── */
function UserCardVisual() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #e4e4e7",
        padding: 16,
        display: "flex",
        gap: 12,
        alignItems: "center",
      }}
    >
      <img
        src={avatars.chen}
        style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#18181b" }}>田中 太郎</span>
          <span style={{ fontSize: 10, fontWeight: 400, color: "#3f3f46", background: "#f4f4f5", borderRadius: 9999, padding: "2px 10px" }}>アクティブ</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Stars score={4} />
          <span style={{ fontSize: 11, color: "#52525b" }}>4.0</span>
        </div>
      </div>
    </div>
  );
}

export default function Fig47() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ maxWidth: 360, marginBottom: 20 }}>
          <UserCardVisual />
        </div>

        {/* Two approaches — equal-height flex for visual contrast */}
        <div style={{ display: "flex", gap: 20 }}>
          {/* Left: Individual props — dense */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={colTitle}>個別に渡す</div>
            <div style={codePanel}>
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
            </div>
          </div>

          {/* Right: Object prop — sparse, whitespace communicates simplicity */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={colTitle}>オブジェクトで渡す</div>
            <div style={codePanel}>
              <div style={codeBox}>
                <div>
                  <span style={kw}>&lt;UserCard </span>
                  <span style={kw}>user=</span><span style={tp}>{"{ user }"}</span>
                  <span style={kw}> /&gt;</span>
                </div>
                <div style={{ marginTop: 16, borderTop: "1px dashed #e4e4e7", paddingTop: 12, fontSize: 10, color: "#71717a", lineHeight: 1.7 }}>
                  <div>type User = {"{"}</div>
                  <div style={{ paddingLeft: 12 }}>name: string</div>
                  <div style={{ paddingLeft: 12 }}>image: string</div>
                  <div style={{ paddingLeft: 12 }}>rating: number</div>
                  <div style={{ paddingLeft: 12 }}>status: string</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
