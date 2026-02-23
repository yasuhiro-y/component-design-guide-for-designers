import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

function ButtonState({ label, bg, border, opacity, ring, note }: {
  label: string; bg: string; border?: string; opacity?: number; ring?: boolean; note: string;
}) {
  return (
    <div style={{ flex: 1, textAlign: "center" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "#3f3f46", marginBottom: 10 }}>{label}</div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 40 }}>
        <div style={{ position: "relative" as const, display: "inline-flex" }}>
          {ring && (
            <div style={{
              position: "absolute", inset: -3,
              borderRadius: 9,
              border: "2px solid #18181b",
              opacity: 0.4,
            }} />
          )}
          <button style={{
            display: "inline-flex", padding: "8px 20px", borderRadius: 6,
            border: border || "none",
            background: bg,
            color: "#fff",
            fontSize: 12, fontWeight: 500,
            fontFamily: '"Inter", "Noto Sans JP", sans-serif',
            cursor: "default",
            opacity: opacity ?? 1,
          }}>
            Button
          </button>
        </div>
      </div>
      <div style={{ fontSize: 10, color: "#3f3f46", marginTop: 8, lineHeight: 1.4 }}>{note}</div>
    </div>
  );
}

export default function Fig29() {
  return (
    <IllustrationFrame title="インタラクション状態">
      <div style={{ display: "flex", gap: 10, width: CONTENT_WIDTH }}>
        <ButtonState label="Default" bg="#18181b" note="通常の状態" />
        <ButtonState label="Hover" bg="#27272a" note="8% のオーバーレイ" />
        <ButtonState label="Pressed" bg="#3f3f46" note="さらに明るく変化" />
        <ButtonState label="Disabled" bg="#18181b" opacity={0.38} note="opacity: 38%" />
        <ButtonState label="Focus" bg="#18181b" ring note="フォーカスリング表示" />
      </div>
    </IllustrationFrame>
  );
}
