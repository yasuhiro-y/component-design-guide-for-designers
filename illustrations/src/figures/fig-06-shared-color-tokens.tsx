import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const semantic = {
  info: { color: "#3b82f6", bg: "#eff6ff", border: "#bfdbfe" },
  success: { color: "#22c55e", bg: "#f0fdf4", border: "#bbf7d0" },
  warning: { color: "#eab308", bg: "#fefce8", border: "#fef08a" },
  error: { color: "#ef4444", bg: "#fef2f2", border: "#fecaca" },
};

function TokenSwatch({ name, c }: { name: string; c: { color: string; bg: string } }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 24, height: 24, borderRadius: 6, background: c.color }} />
      <span style={{ fontSize: 12, fontWeight: 600, color: "#3f3f46" }}>{name}</span>
    </div>
  );
}

function TagSample({ name, c }: { name: string; c: { color: string; bg: string; border: string } }) {
  return (
    <span style={{ display: "inline-flex", padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 500, background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
      {name}
    </span>
  );
}

function BadgeDot({ c }: { c: { color: string } }) {
  return <span style={{ width: 8, height: 8, borderRadius: "50%", background: c.color, display: "inline-block" }} />;
}

function CalloutSample({ name, c }: { name: string; c: { color: string; bg: string; border: string } }) {
  return (
    <div style={{ padding: "8px 12px", borderRadius: 6, background: c.bg, border: `1px solid ${c.border}`, fontSize: 11, color: c.color, fontWeight: 500 }}>
      {name}: メッセージテキスト
    </div>
  );
}

const section: CSSProperties = { marginBottom: 20 };
const sectionLabel: CSSProperties = { fontSize: 11, fontWeight: 500, color: "#a1a1aa", marginBottom: 8 };

export default function Fig06() {
  const entries = Object.entries(semantic) as [string, typeof semantic.info][];

  return (
    <IllustrationFrame title="セマンティックカラートークンの共有">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Token swatches */}
        <div style={section}>
          <div style={sectionLabel}>Semantic Color Tokens</div>
          <div style={{ display: "flex", gap: 24 }}>
            {entries.map(([n, c]) => (
              <TokenSwatch key={n} name={n} c={c} />
            ))}
          </div>
        </div>

        {/* Connector line */}
        <div style={{ borderTop: "1px dashed #d4d4d8", margin: "8px 0 20px" }} />

        {/* Components using tokens */}
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={sectionLabel}>Tag</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {entries.map(([n, c]) => (
                <TagSample key={n} name={n} c={c} />
              ))}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={sectionLabel}>Badge</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {entries.map(([n, c]) => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <BadgeDot c={c} />
                  <span style={{ fontSize: 12, color: "#52525b" }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1.2 }}>
            <div style={sectionLabel}>Callout</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {entries.slice(0, 3).map(([n, c]) => (
                <CalloutSample key={n} name={n} c={c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
