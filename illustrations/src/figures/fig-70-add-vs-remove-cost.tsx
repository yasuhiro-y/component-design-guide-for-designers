import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

/* ── Button-like component mockups ── */
interface MockButtonProps {
  label: string;
  variant: string;
  style?: CSSProperties;
}

function MockButton({ label, variant, style: extraStyle }: MockButtonProps) {
  const variants: Record<string, CSSProperties> = {
    primary: { background: text, color: "#fff", border: `1px solid ${text}` },
    secondary: {
      background: "#fff",
      color: text,
      border: `1px solid ${border}`,
    },
    outline: {
      background: "transparent",
      color: text,
      border: `1px solid ${text}`,
    },
    ghost: {
      background: "transparent",
      color: text,
      border: "1px solid transparent",
    },
    subtle: {
      background: "#f4f4f5",
      color: secondary,
      border: "1px solid transparent",
    },
    muted: {
      background: "#fafafa",
      color: tertiary,
      border: `1px solid ${border}`,
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "7px 18px",
          borderRadius: 6,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          ...variants[variant],
          ...extraStyle,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: mono,
          fontSize: 9,
          color: tertiary,
        }}
      >
        {variant}
      </div>
    </div>
  );
}

export default function Fig70() {
  return (
    <IllustrationFrame title="追加と削除の非対称性: 似たバリアントは増えやすく、減らしにくい">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* ── Row of similar buttons ── */}
        <div
          style={{
            background: "#fff",
            border: `1px solid ${border}`,
            borderRadius: 8,
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <MockButton label="Button" variant="primary" />
            <MockButton label="Button" variant="secondary" />
            <MockButton label="Button" variant="outline" />
            <MockButton label="Button" variant="ghost" />
            <MockButton label="Button" variant="subtle" />
            <MockButton label="Button" variant="muted" />
          </div>

          <div
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: `1px solid ${border}`,
              fontSize: 11,
              color: secondary,
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            <code style={{ fontFamily: mono, fontSize: 10, color: tertiary }}>
              secondary
            </code>
            {" と "}
            <code style={{ fontFamily: mono, fontSize: 10, color: tertiary }}>
              outline
            </code>
            {" と "}
            <code style={{ fontFamily: mono, fontSize: 10, color: tertiary }}>
              ghost
            </code>
            {" と "}
            <code style={{ fontFamily: mono, fontSize: 10, color: tertiary }}>
              subtle
            </code>
            {" と "}
            <code style={{ fontFamily: mono, fontSize: 10, color: tertiary }}>
              muted
            </code>
            {" ——どれが要らないか、判断できますか？"}
          </div>
        </div>

        {/* ── Comparison: add vs remove ── */}
        <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
          <div
            style={{
              flex: 1,
              background: "#fff",
              border: `1px solid ${border}`,
              borderRadius: 8,
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: secondary,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              追加
            </div>
            <div style={{ fontSize: 11, color: secondary, lineHeight: 1.7 }}>
              コードを数行足すだけ。
              <br />
              既存の利用箇所に影響なし。
              <br />
              <span style={{ fontWeight: 600, color: text }}>5分で完了。</span>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              background: "#fff",
              border: `1px solid ${border}`,
              borderRadius: 8,
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: secondary,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              削除
            </div>
            <div style={{ fontSize: 11, color: secondary, lineHeight: 1.7 }}>
              利用箇所の洗い出し・個別判断。
              <br />
              Figma・コード・ドキュメントの更新。
              <br />
              <span style={{ fontWeight: 600, color: text }}>
                数日〜数週間。使われるほど膨らむ。
              </span>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
