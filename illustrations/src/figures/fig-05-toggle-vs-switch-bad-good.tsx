import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const sizes = { S: 24, M: 32, L: 40 } as const;
const variants = {
  primary: { bg: "#18181b", color: "#fff" },
  secondary: { bg: "#f4f4f5", color: "#18181b" },
  destructive: { bg: "#fef2f2", color: "#ef4444" },
} as const;

type Size = keyof typeof sizes;
type Variant = keyof typeof variants;

/* ── Mini Button ── */
function MiniButton({
  size,
  variant,
  label,
}: {
  size: Size;
  variant: Variant;
  label: string;
}) {
  const h = sizes[size];
  const v = variants[variant];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: h,
        padding: `0 ${h * 0.5}px`,
        borderRadius: 6,
        background: v.bg,
        color: v.color,
        fontSize: size === "S" ? 10 : size === "M" ? 12 : 14,
        fontWeight: 500,
        border:
          variant === "secondary" ? "1px solid #e4e4e7" : "none",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

const headerCell: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#52525b",
  textAlign: "center",
  padding: "6px 0",
  fontFamily: '"SF Mono", Menlo, monospace',
};

const rowLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#52525b",
  fontFamily: '"SF Mono", Menlo, monospace',
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: 12,
};

const gridCell: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 0",
};

export default function Fig05() {
  const sizeKeys: Size[] = ["S", "M", "L"];
  const variantKeys: Variant[] = ["primary", "secondary", "destructive"];
  const labels = { primary: "保存", secondary: "キャンセル", destructive: "削除" };

  return (
    <IllustrationFrame title="直交性: size と variant の組み合わせがすべて成立する">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Matrix */}
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
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr 1fr",
              gap: 0,
            }}
          >
            {/* Header row */}
            <div />
            {sizeKeys.map((s) => (
              <div key={s} style={headerCell}>
                size: {s}
              </div>
            ))}

            {/* Data rows */}
            {variantKeys.map((v) => (
              <>
                <div key={`label-${v}`} style={rowLabel}>
                  {v}
                </div>
                {sizeKeys.map((s) => (
                  <div key={`${v}-${s}`} style={gridCell}>
                    <MiniButton size={s} variant={v} label={labels[v]} />
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>

        {/* Annotation */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "10px 14px",
              background: "#fff",
              borderRadius: 6,
              border: "1px solid #e4e4e7",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#18181b",
                marginBottom: 4,
              }}
            >
              独立している（直交）
            </div>
            <div style={{ fontSize: 11, color: "#3f3f46", lineHeight: 1.5 }}>
              size を S→L に変えても variant の見た目は変わらない。
              variant を変えても size は影響を受けない。
              <strong style={{ color: "#18181b" }}>
                どの組み合わせもそれぞれが決まり通りに働く
              </strong>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px 14px",
              background: "#fff",
              borderRadius: 6,
              border: "1px solid #e4e4e7",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#18181b",
                marginBottom: 4,
              }}
            >
              依存していたら（非直交）
            </div>
            <div style={{ fontSize: 11, color: "#3f3f46", lineHeight: 1.5 }}>
              「destructive のときは S が使えない」
              「secondary は L だけ角丸が変わる」
              ——こうした暗黙の制約があると
              <strong style={{ color: "#18181b" }}>
                組み合わせのたびにルール確認が必要になる
              </strong>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
