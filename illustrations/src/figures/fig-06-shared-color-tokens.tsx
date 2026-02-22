import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const sizeTokens = {
  S: { height: 24, fontSize: 10, px: 8, iconSize: 12 },
  M: { height: 32, fontSize: 12, px: 12, iconSize: 14 },
  L: { height: 40, fontSize: 14, px: 16, iconSize: 16 },
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
        borderRadius: 6,
        background: "#18181b",
        color: "#fff",
        fontSize: s.fontSize,
        fontWeight: 500,
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
        borderRadius: 999,
        background: c.bg,
        color: c.color,
        border: `1px solid ${c.border}`,
        fontSize: s.fontSize,
        fontWeight: 500,
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
        borderRadius: 6,
        background: "#fff",
        border: "1px solid #d4d4d8",
        color: "#52525b",
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
  fontWeight: 600,
  color: "#52525b",
  marginBottom: 6,
  fontFamily: '"SF Mono", Menlo, monospace',
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

const sizeLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#52525b",
  fontFamily: '"SF Mono", Menlo, monospace',
  width: 20,
  textAlign: "right",
  flexShrink: 0,
};

export default function Fig06() {
  const sizeKeys: SizeKey[] = ["S", "M", "L"];

  return (
    <IllustrationFrame title="トークンの共有: 複数コンポーネントの一貫性を保つ">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Size tokens shared across Button, Tag, Input */}
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            border: "1px solid #e4e4e7",
            padding: 16,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#18181b",
              marginBottom: 12,
            }}
          >
            同じ size トークンを共有 → 高さが揃う
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30px 1fr 1fr 1fr",
              gap: 10,
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

          <div
            style={{
              marginTop: 12,
              fontSize: 11,
              color: "#3f3f46",
              borderTop: "1px dashed #e4e4e7",
              paddingTop: 10,
            }}
          >
            S の高さを 24→28px に変更 →{" "}
            <strong style={{ color: "#18181b" }}>
              Button・Tag・Input すべての S が一括で更新される
            </strong>
          </div>
        </div>

        {/* Color tokens shared across Tag, Badge, Callout */}
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            border: "1px solid #e4e4e7",
            padding: 16,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#18181b",
              marginBottom: 12,
            }}
          >
            同じ colorScheme トークンを共有 → 色の意味が統一される
          </div>

          <div style={{ display: "flex", gap: 20 }}>
            {/* Tag */}
            <div style={{ flex: 1 }}>
              <div style={colTitle}>Tag</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {(Object.keys(colorTokens) as ColorKey[]).map((c) => (
                  <MiniTag key={c} size="M" colorScheme={c} label={c} />
                ))}
              </div>
            </div>

            {/* Badge dot */}
            <div style={{ flex: 1 }}>
              <div style={colTitle}>Badge</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {(Object.keys(colorTokens) as ColorKey[]).map((c) => (
                  <div
                    key={c}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: colorTokens[c].color,
                      }}
                    />
                    <span style={{ fontSize: 12, color: "#52525b" }}>
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout */}
            <div style={{ flex: 1.5 }}>
              <div style={colTitle}>Callout</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {(Object.keys(colorTokens) as ColorKey[]).map((c) => (
                  <div
                    key={c}
                    style={{
                      padding: "6px 10px",
                      borderRadius: 6,
                      background: colorTokens[c].bg,
                      border: `1px solid ${colorTokens[c].border}`,
                      fontSize: 11,
                      color: colorTokens[c].color,
                      fontWeight: 500,
                    }}
                  >
                    {c}: メッセージ
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 12,
              fontSize: 11,
              color: "#3f3f46",
              borderTop: "1px dashed #e4e4e7",
              paddingTop: 10,
            }}
          >
            info の色を変更 →{" "}
            <strong style={{ color: "#18181b" }}>
              Tag・Badge・Callout すべての info が一括で更新される
            </strong>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
