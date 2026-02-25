import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colLabel = { fontSize: 11, fontWeight: 700, color: "#3f3f46", letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: 8 };

function ScreenBox({ label, color, borderColor }: { label: string; color: string; borderColor: string }) {
  return (
    <div style={{ width: 80, height: 56, borderRadius: 12, border: `1.5px solid ${borderColor}`, background: "#fff", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", gap: 4 }}>
      <div style={{ width: 40, height: 8, borderRadius: 8, background: color }} />
      <div style={{ width: 30, height: 6, borderRadius: 8, background: "#e4e4e7" }} />
      <div style={{ fontSize: 10, color: "#52525b", marginTop: 2 }}>{label}</div>
    </div>
  );
}

export default function Fig23() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={colLabel}>コンポーネントなし</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            <ScreenBox label="画面A" color="#3b82f6" borderColor="#e4e4e7" />
            <ScreenBox label="画面B" color="#2563eb" borderColor="#e4e4e7" />
            <ScreenBox label="画面C" color="#60a5fa" borderColor="#e4e4e7" />
            <ScreenBox label="画面D" color="#3b82f6" borderColor="#e4e4e7" />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={colLabel}>コンポーネント管理</div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
            <div style={{ padding: "6px 14px", borderRadius: 12, background: "#18181b", color: "#fff", fontSize: 11, fontWeight: 700 }}>
              Button
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
            <svg width="200" height="20" viewBox="0 0 200 20">
              {[40, 80, 120, 160].map((x) => (
                <line key={x} x1="100" y1="0" x2={x} y2="18" stroke="#d4d4d8" strokeWidth="1" />
              ))}
            </svg>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            <ScreenBox label="画面A" color="#3b82f6" borderColor="#3b82f6" />
            <ScreenBox label="画面B" color="#3b82f6" borderColor="#3b82f6" />
            <ScreenBox label="画面C" color="#3b82f6" borderColor="#3b82f6" />
            <ScreenBox label="画面D" color="#3b82f6" borderColor="#3b82f6" />
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
