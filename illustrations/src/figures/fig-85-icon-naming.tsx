import { ReactNode } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

function IconPlaceholder({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="12" height="12" rx="3" stroke={secondary} strokeWidth="1.5" />
      <circle cx="5" cy="5.5" r="1.5" fill={secondary} />
      <path d="M2 11L5 8L7 10L10 6.5L12 9" stroke={secondary} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MockButton({
  label,
  iconStart,
  iconEnd,
}: {
  label: string;
  iconStart?: boolean;
  iconEnd?: boolean;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 16px",
        borderRadius: 8,
        background: text,
        color: "#fff",
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {iconStart && <IconPlaceholder />}
      {label}
      {iconEnd && <IconPlaceholder />}
    </div>
  );
}

function PropLabel({ name, warning }: { name: string; warning?: boolean }) {
  return (
    <span
      style={{
        fontFamily: mono,
        fontSize: 10,
        fontWeight: 600,
        padding: "2px 6px",
        borderRadius: 4,
        background: warning ? "#fef2f2" : "#f4f4f5",
        color: warning ? "#b91c1c" : secondary,
        border: warning ? "1px solid #fca5a5" : `1px solid ${border}`,
      }}
    >
      {name}
    </span>
  );
}

interface RowProps {
  phase: string;
  label: string;
  bgColor?: string;
  borderColor?: string;
  children: ReactNode;
}

function Row({ phase, label, bgColor, borderColor, children }: RowProps) {
  return (
    <div
      style={{
        background: bgColor ?? "#fff",
        borderRadius: 14,
        padding: "14px 20px",
        border: borderColor ? `1.5px solid ${borderColor}` : `1px solid ${border}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: tertiary,
            letterSpacing: "0.04em",
            textTransform: "uppercase" as const,
          }}
        >
          {phase}
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: text }}>{label}</div>
      </div>
      {children}
    </div>
  );
}

export default function Fig85() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH, display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Row 1: Initial */}
        <Row phase="最初" label="アイコンを1つ追加">
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <MockButton label="送信" iconStart />
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <PropLabel name="icon" />
              <span style={{ fontSize: 10, color: tertiary }}>→ 左側にアイコン。問題なし</span>
            </div>
          </div>
        </Row>

        {/* Row 2: Months later - problem */}
        <Row phase="数ヶ月後" label="右側にもアイコンがほしい" bgColor="#fffbeb" borderColor="#f59e0b">
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <MockButton label="次へ" iconStart iconEnd />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <PropLabel name="icon" />
                <span style={{ fontSize: 10, color: tertiary }}>（左）</span>
                <PropLabel name="iconRight" warning />
                <span style={{ fontSize: 10, color: tertiary }}>（右）</span>
              </div>
              <div style={{ fontSize: 10, color: "#92400e", lineHeight: 1.5 }}>
                左が icon で右が iconRight — 非対称な名前。<br />
                icon を iconLeft にリネームすると全箇所に破壊的変更
              </div>
            </div>
          </div>
        </Row>

        {/* Row 3: Forward-thinking solution */}
        <Row phase="先読み" label="最初から対称に名付ける" bgColor="#f0fdf4" borderColor="#22c55e">
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <MockButton label="次へ" iconStart iconEnd />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <PropLabel name="iconStart" />
                <PropLabel name="iconEnd" />
              </div>
              <div style={{ fontSize: 10, color: "#166534", lineHeight: 1.5 }}>
                対称で、もう一方を足しても破綻しない
              </div>
            </div>
          </div>

          {/* LTR / RTL note */}
          <div
            style={{
              marginTop: 12,
              paddingTop: 10,
              borderTop: `1px solid #bbf7d0`,
              display: "flex",
              gap: 20,
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 9, color: tertiary, marginBottom: 3 }}>LTR</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div
                    style={{
                      width: 20,
                      height: 14,
                      borderRadius: 3,
                      background: "#dcfce7",
                      border: "1px solid #86efac",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 7,
                      color: "#166534",
                    }}
                  >
                    S
                  </div>
                  <div style={{ width: 40, height: 6, borderRadius: 3, background: "#d4d4d8" }} />
                  <div
                    style={{
                      width: 20,
                      height: 14,
                      borderRadius: 3,
                      background: "#dcfce7",
                      border: "1px solid #86efac",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 7,
                      color: "#166534",
                    }}
                  >
                    E
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 9, color: tertiary, marginBottom: 3 }}>RTL</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div
                    style={{
                      width: 20,
                      height: 14,
                      borderRadius: 3,
                      background: "#dcfce7",
                      border: "1px solid #86efac",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 7,
                      color: "#166534",
                    }}
                  >
                    E
                  </div>
                  <div style={{ width: 40, height: 6, borderRadius: 3, background: "#d4d4d8" }} />
                  <div
                    style={{
                      width: 20,
                      height: 14,
                      borderRadius: 3,
                      background: "#dcfce7",
                      border: "1px solid #86efac",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 7,
                      color: "#166534",
                    }}
                  >
                    S
                  </div>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 10, color: "#166534", lineHeight: 1.5 }}>
              start / end は論理方向。<br />
              LTR でも RTL でも意味が通る
            </div>
          </div>
        </Row>
      </div>
    </IllustrationFrame>
  );
}
