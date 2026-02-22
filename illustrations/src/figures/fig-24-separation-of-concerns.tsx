import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colTitle = { fontSize: 13, fontWeight: 600, color: "#18181b", marginBottom: 4 } as const;
const colDesc = { fontSize: 10, color: "#3f3f46", marginBottom: 12 } as const;

function PropTag({ children }: { children: string }) {
  return (
    <span style={{
      display: "inline-block", padding: "2px 8px", borderRadius: 4, fontSize: 10,
      fontFamily: '"SF Mono", Menlo, monospace',
      background: "#f4f4f5", border: "1px solid #e4e4e7", color: "#52525b",
      marginRight: 4, marginBottom: 4,
    }}>
      {children}
    </span>
  );
}

export default function Fig24() {
  return (
    <IllustrationFrame title="関心の分離: 3つのレイヤー">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Rendered UserCard at top */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 20px",
            background: "#fff", borderRadius: 10, border: "1px solid #e4e4e7",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%", background: "#e4e4e7",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 600, color: "#52525b",
            }}>TK</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#18181b" }}>UserCard</div>
              <div style={{ fontSize: 11, color: "#52525b" }}>Designer</div>
            </div>
          </div>
        </div>

        {/* 3 columns */}
        <div style={{ display: "flex", gap: 12 }}>
          {/* Style */}
          <div style={{ flex: 1 }}>
            <div style={colTitle}>見た目</div>
            <div style={colDesc}>色・角丸・フォントなどの装飾</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { label: "color", value: "#18181b" },
                { label: "radius", value: "8px" },
                { label: "font", value: "14px" },
                { label: "shadow", value: "sm" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11 }}>
                  <span style={{ color: "#52525b", fontFamily: '"SF Mono", Menlo, monospace', minWidth: 50 }}>{label}</span>
                  <span style={{ color: "#3f3f46" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Structure */}
          <div style={{ flex: 1, borderLeft: "1px solid #e4e4e7", paddingLeft: 12 }}>
            <div style={colTitle}>構造</div>
            <div style={colDesc}>レイアウトの骨組み</div>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, padding: 10,
              borderRadius: 6, border: "1.5px dashed #d4d4d8", background: "#fafafa",
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%", border: "1.5px dashed #d4d4d8",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 8, color: "#52525b",
              }}>img</div>
              <div style={{ flex: 1 }}>
                <div style={{ height: 8, borderRadius: 3, background: "#d4d4d8", width: "70%", marginBottom: 4 }} />
                <div style={{ height: 6, borderRadius: 3, background: "#e4e4e7", width: "40%" }} />
              </div>
            </div>
            <div style={{ fontSize: 10, color: "#52525b", marginTop: 6 }}>
              Auto Layout / Flexbox
            </div>
          </div>

          {/* Data */}
          <div style={{ flex: 1, borderLeft: "1px solid #e4e4e7", paddingLeft: 12 }}>
            <div style={colTitle}>データ</div>
            <div style={colDesc}>外から渡される Props</div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <PropTag>userName: string</PropTag>
              <PropTag>avatarURL: string</PropTag>
              <PropTag>role: string</PropTag>
            </div>
            <div style={{ fontSize: 10, color: "#52525b", marginTop: 8 }}>
              コンポーネントは中身を知らない
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
