import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colLabel = { fontSize: 11, fontWeight: 500, color: "#3f3f46", letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: 8 };

function IconSvg({ fill }: { fill: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function DemoRow({ bg, textColor, iconColor, problem }: {
  bg: string; textColor: string; iconColor: string; problem?: boolean;
}) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, padding: "8px 12px",
      background: bg, borderRadius: 6, marginBottom: 6,
      border: problem ? "1px dashed #fecaca" : "1px solid #e4e4e7",
    }}>
      <IconSvg fill={iconColor} />
      <span style={{ fontSize: 12, color: textColor, flex: 1 }}>テキスト</span>
      {problem && (
        <span style={{ fontSize: 9, color: "#ef4444" }}>見えない</span>
      )}
    </div>
  );
}

export default function Fig30() {
  return (
    <IllustrationFrame title="SVGの色制御: currentColor">
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={colLabel}>fill="#1A1A1A"（固定色）</div>
          <div style={{ fontSize: 11, fontFamily: '"SF Mono", Menlo, monospace', color: "#52525b", marginBottom: 8 }}>
            {'<svg fill="#1A1A1A" ...>'}
          </div>
          <DemoRow bg="#ffffff" textColor="#18181b" iconColor="#1a1a1a" />
          <DemoRow bg="#18181b" textColor="#fafafa" iconColor="#1a1a1a" problem />
          <DemoRow bg="#3b82f6" textColor="#ffffff" iconColor="#1a1a1a" problem />
          <div style={{ fontSize: 10, color: "#ef4444", marginTop: 6, lineHeight: 1.5 }}>
            背景色が変わるとアイコンが見えなくなる
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={colLabel}>fill="currentColor"（自動）</div>
          <div style={{ fontSize: 11, fontFamily: '"SF Mono", Menlo, monospace', color: "#52525b", marginBottom: 8 }}>
            {'<svg fill="currentColor" ...>'}
          </div>
          <DemoRow bg="#ffffff" textColor="#18181b" iconColor="#18181b" />
          <DemoRow bg="#18181b" textColor="#fafafa" iconColor="#fafafa" />
          <DemoRow bg="#3b82f6" textColor="#ffffff" iconColor="#ffffff" />
          <div style={{ fontSize: 10, color: "#059669", marginTop: 6, lineHeight: 1.5 }}>
            親要素のテキスト色を自動で引き継ぐ
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
