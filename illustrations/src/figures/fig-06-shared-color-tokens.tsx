import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const sizeTokens = {
  S: { height: 28, fontSize: 11, px: 10, iconSize: 12 },
  M: { height: 34, fontSize: 13, px: 14, iconSize: 14 },
  L: { height: 42, fontSize: 14, px: 18, iconSize: 16 },
} as const;

const colorTokens = {
  info: { bg: "#eff6ff", color: "#3b82f6", border: "#bfdbfe" },
  success: { bg: "#f0fdf4", color: "#22c55e", border: "#bbf7d0" },
  warning: { bg: "#fefce8", color: "#eab308", border: "#fef08a" },
  error: { bg: "#fef2f2", color: "#ef4444", border: "#fecaca" },
} as const;

type SizeKey = keyof typeof sizeTokens;
type ColorKey = keyof typeof colorTokens;

/* ── Button ── */
function MiniButton({ size, label }: { size: SizeKey; label: string }) {
  const s = sizeTokens[size];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: s.height,
        padding: `0 ${s.px}px`,
        borderRadius: 8,
        background: "#18181b",
        color: "#fff",
        fontSize: s.fontSize,
        fontWeight: 400,
      }}
    >
      {label}
    </span>
  );
}

/* ── Tag ── */
function MiniTag({
  size,
  colorScheme,
  label,
}: {
  size: SizeKey;
  colorScheme: ColorKey;
  label: string;
}) {
  const s = sizeTokens[size];
  const c = colorTokens[colorScheme];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: s.height,
        padding: `0 ${s.px}px`,
        borderRadius: 9999,
        background: c.bg,
        color: c.color,
        fontSize: s.fontSize,
        fontWeight: 400,
      }}
    >
      {label}
    </span>
  );
}

/* ── Input ── */
function MiniInput({ size, placeholder }: { size: SizeKey; placeholder: string }) {
  const s = sizeTokens[size];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: s.height,
        padding: `0 ${s.px}px`,
        borderRadius: 8,
        background: "#fff",
        border: "1px solid #e4e4e7",
        color: "#a1a1aa",
        fontSize: s.fontSize,
        minWidth: 100,
      }}
    >
      {placeholder}
    </span>
  );
}

const colTitle: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  color: "#52525b",
  marginBottom: 8,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const sizeLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#52525b",
  width: 20,
  textAlign: "right",
  flexShrink: 0,
};

export default function Fig06() {
  const sizeKeys: SizeKey[] = ["S", "M", "L"];

  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Size tokens — grouping surface (white, no border) */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#18181b",
              marginBottom: 14,
            }}
          >
            同じ size トークンを共有 → 高さが揃う
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30px 1fr 1fr 1fr",
              gap: 12,
              alignItems: "center",
            }}
          >
            {/* Header */}
            <div />
            <div style={colTitle}>Button</div>
            <div style={colTitle}>Tag</div>
            <div style={colTitle}>Input</div>

            {/* Size rows */}
            {sizeKeys.map((s) => (
              <>
                <div key={`label-${s}`} style={sizeLabel}>{s}</div>
                <div key={`btn-${s}`}>
                  <MiniButton size={s} label="保存" />
                </div>
                <div key={`tag-${s}`}>
                  <MiniTag size={s} colorScheme="info" label="info" />
                </div>
                <div key={`input-${s}`}>
                  <MiniInput size={s} placeholder="テキスト" />
                </div>
              </>
            ))}
          </div>

        </div>

        {/* Color tokens — grouping surface (white, no border) */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 20,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#18181b",
              marginBottom: 14,
            }}
          >
            同じ colorScheme トークンを共有 → 色の意味が統一される
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            {/* Tag */}
            <div style={{ flex: 1 }}>
              <div style={colTitle}>Tag</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {(Object.keys(colorTokens) as ColorKey[]).map((c) => (
                  <MiniTag key={c} size="M" colorScheme={c} label={c} />
                ))}
              </div>
            </div>

            {/* Badge dot */}
            <div style={{ flex: 1 }}>
              <div style={colTitle}>Badge</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {(Object.keys(colorTokens) as ColorKey[]).map((c) => (
                  <div
                    key={c}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: colorTokens[c].color,
                      }}
                    />
                    <span style={{ fontSize: 13, color: "#52525b" }}>
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout */}
            <div style={{ flex: 1.5 }}>
              <div style={colTitle}>Callout</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {(Object.keys(colorTokens) as ColorKey[]).map((c) => (
                  <div
                    key={c}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 12,
                      background: colorTokens[c].bg,
                      fontSize: 11,
                      color: colorTokens[c].color,
                      fontWeight: 400,
                    }}
                  >
                    {c}: メッセージ
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </IllustrationFrame>
  );
}
