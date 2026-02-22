import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const headerStyle = { fontSize: 10, fontWeight: 600, color: "#3f3f46", padding: "6px 0", textAlign: "center" as const };
const rowLabelStyle = { fontSize: 10, fontWeight: 500, color: "#52525b", padding: "6px 8px", minWidth: 56 };

const colors: Record<string, { solid: string; subtle: string; text: string }> = {
  info:    { solid: "#3b82f6", subtle: "#dbeafe", text: "#1d4ed8" },
  success: { solid: "#22c55e", subtle: "#dcfce7", text: "#15803d" },
  warning: { solid: "#eab308", subtle: "#fef9c3", text: "#a16207" },
  error:   { solid: "#ef4444", subtle: "#fee2e2", text: "#b91c1c" },
};

function TagCell({ colorScheme, variant }: { colorScheme: string; variant: "solid" | "subtle" | "outline" }) {
  const c = colors[colorScheme];
  const label = colorScheme === "info" ? "情報" : colorScheme === "success" ? "成功" : colorScheme === "warning" ? "警告" : "エラー";

  const styles: Record<string, React.CSSProperties> = {
    solid: { background: c.solid, color: "#fff", border: "none" },
    subtle: { background: c.subtle, color: c.text, border: "none" },
    outline: { background: "transparent", color: c.text, border: `1.5px solid ${c.solid}` },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 4 }}>
      <span style={{
        display: "inline-block", padding: "3px 10px", borderRadius: 4,
        fontSize: 10, fontWeight: 500, lineHeight: 1.4,
        ...styles[variant],
      }}>
        {label}
      </span>
    </div>
  );
}

export default function Fig28() {
  const colorSchemes = ["info", "success", "warning", "error"];
  const variants: Array<"solid" | "subtle" | "outline"> = ["solid", "subtle", "outline"];

  return (
    <IllustrationFrame title="直交性マトリクス">
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#18181b", fontFamily: '"SF Mono", Menlo, monospace', marginBottom: 4, textAlign: "center" }}>
          Tag
        </div>
        <div style={{ fontSize: 11, color: "#71717a", marginBottom: 16, textAlign: "center" }}>
          colorScheme x variant = すべての組み合わせが独立して機能する
        </div>

        {/* Matrix */}
        <div style={{ maxWidth: 420, margin: "0 auto" }}>
          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "56px repeat(4, 1fr)", gap: 2 }}>
            <div />
            {colorSchemes.map((cs) => (
              <div key={cs} style={headerStyle}>{cs}</div>
            ))}
          </div>

          {/* Data rows */}
          {variants.map((v) => (
            <div key={v} style={{ display: "grid", gridTemplateColumns: "56px repeat(4, 1fr)", gap: 2, marginTop: 4 }}>
              <div style={rowLabelStyle}>{v}</div>
              {colorSchemes.map((cs) => (
                <TagCell key={`${cs}-${v}`} colorScheme={cs} variant={v} />
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 16 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "#3f3f46" }}>colorScheme</div>
            <div style={{ fontSize: 10, color: "#a1a1aa" }}>意味（横軸）</div>
          </div>
          <div style={{ fontSize: 12, color: "#d4d4d8" }}>x</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "#3f3f46" }}>variant</div>
            <div style={{ fontSize: 10, color: "#a1a1aa" }}>強さ（縦軸）</div>
          </div>
          <div style={{ fontSize: 12, color: "#d4d4d8" }}>=</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "#3f3f46" }}>12通り</div>
            <div style={{ fontSize: 10, color: "#a1a1aa" }}>すべて独立</div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
