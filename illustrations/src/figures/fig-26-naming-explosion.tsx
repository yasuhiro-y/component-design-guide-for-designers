import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colLabel = { fontSize: 11, fontWeight: 700, color: "#3f3f46", letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: 8 };

function BadName({ name, strikethrough }: { name: string; strikethrough?: boolean }) {
  return (
    <div style={{
      padding: "6px 12px", borderRadius: 12, border: "1px solid #e4e4e7", background: "#fff",
      fontSize: 11, fontFamily: '"SF Mono", Menlo, monospace', color: strikethrough ? "#52525b" : "#3f3f46",
      textDecoration: strikethrough ? "line-through" : "none",
      marginBottom: 4,
    }}>
      {name}
    </div>
  );
}

function PropRow({ name, values }: { name: string; values: string[] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
      <span style={{ fontSize: 11, fontFamily: '"SF Mono", Menlo, monospace', color: "#3f3f46", minWidth: 70 }}>{name}</span>
      <div style={{ display: "flex", gap: 4 }}>
        {values.map((v) => (
          <span key={v} style={{ padding: "2px 8px", borderRadius: 8, background: "#f4f4f5", border: "1px solid #e4e4e7", fontSize: 10, color: "#52525b" }}>{v}</span>
        ))}
      </div>
    </div>
  );
}

export default function Fig26() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={colLabel}>名前に状態を含める</div>
          <BadName name="RedButton" />
          <BadName name="LoadingButton" />
          <BadName name="SmallButton" />
          <BadName name="SmallRedButton" />
          <BadName name="SmallLoadingButton" />
          <BadName name="RedLoadingButton" />
          <div style={{ borderTop: "1px dashed #e4e4e7", margin: "8px 0", paddingTop: 8 }}>
            <BadName name="SmallRedLoadingButton" strikethrough />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 14, color: "#52525b" }}>vs</div>

        <div style={{ flex: 1 }}>
          <div style={colLabel}>プロパティで表現する</div>
          <div style={{ background: "#fff", borderRadius: 16, padding: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#18181b", fontFamily: '"SF Mono", Menlo, monospace', marginBottom: 12 }}>
              Button
            </div>
            <PropRow name="variant" values={["primary", "danger", "secondary"]} />
            <PropRow name="size" values={["S", "M", "L"]} />
            <PropRow name="isLoading" values={["true", "false"]} />
            <div style={{ borderTop: "1px solid #e4e4e7", margin: "10px 0", paddingTop: 8 }}>
              <div style={{ fontSize: 10, color: "#3f3f46", lineHeight: 1.5 }}>
                3 x 3 x 2 = <span style={{ fontWeight: 700, color: "#3f3f46" }}>18通り</span>の組み合わせを3つのプロパティだけで表現
              </div>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
