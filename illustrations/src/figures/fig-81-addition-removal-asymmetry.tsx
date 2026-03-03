import { ReactNode } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

function Tag({ children, accent }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: 6,
        fontSize: 10,
        fontWeight: 600,
        fontFamily: mono,
        background: accent ? text : "#f4f4f5",
        color: accent ? "#fff" : secondary,
      }}
    >
      {children}
    </span>
  );
}

function PhaseCard({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: tertiary,
            letterSpacing: "0.04em",
            textTransform: "uppercase" as const,
            marginBottom: 2,
          }}
        >
          {step}
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: text }}>{title}</div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: 16,
          border: `1px solid ${border}`,
          minHeight: 120,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function RightArrow() {
  return (
    <div style={{ display: "flex", alignItems: "center", paddingTop: 26, flexShrink: 0 }}>
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
        <line x1="0" y1="5" x2="14" y2="5" stroke="#d4d4d8" strokeWidth="1.5" />
        <polygon points="14,1.5 20,5 14,8.5" fill="#d4d4d8" />
      </svg>
    </div>
  );
}

function MockButton({ label, variant }: { label: string; variant: "primary" | "outline" | "ghost" }) {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: text, color: "#fff", border: `1px solid ${text}` },
    outline: { background: "transparent", color: text, border: `1px solid ${text}` },
    ghost: { background: "transparent", color: text, border: "1px solid transparent" },
  };
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px 14px",
        borderRadius: 7,
        fontSize: 11,
        fontWeight: 700,
        ...styles[variant],
      }}
    >
      {label}
    </div>
  );
}

function CheckItem({ children, checked }: { children: ReactNode; checked?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, color: secondary }}>
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 4,
          border: `1.5px solid ${checked ? text : border}`,
          background: checked ? text : "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {checked && (
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1.5 4L3 5.7L6.5 2.3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      {children}
    </div>
  );
}

export default function Fig81() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          {/* Phase 1: Addition */}
          <PhaseCard step="追加" title="ghost バリアント追加">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <MockButton label="Button" variant="primary" />
                <MockButton label="Button" variant="outline" />
                <MockButton label="Button" variant="ghost" />
              </div>
              <Tag accent>5min</Tag>
              <div style={{ fontSize: 10, color: tertiary, textAlign: "center" }}>
                コード数行 + Figmaバリアント1つ
              </div>
            </div>
          </PhaseCard>

          <RightArrow />

          {/* Phase 2: Spread */}
          <PhaseCard step="半年後" title="広がり">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <Tag>12画面</Tag>
                <Tag>テスト</Tag>
                <Tag>ドキュメント</Tag>
              </div>
              <div style={{ fontSize: 10, color: tertiary, lineHeight: 1.6 }}>
                チームの語彙に定着<br />
                新メンバーが前提として学習<br />
                削除コストが加速度的に上昇
              </div>
            </div>
          </PhaseCard>

          <RightArrow />

          {/* Phase 3: Deletion decision */}
          <PhaseCard step="削除の判断" title="outline と統合したい">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <CheckItem checked>全画面を洗い出す</CheckItem>
              <CheckItem checked>個別に置換判断</CheckItem>
              <CheckItem>Figma・コード・テスト更新</CheckItem>
              <CheckItem>チームへ説明・合意</CheckItem>
              <div style={{ marginTop: 4 }}>
                <Tag accent>数日〜数週間</Tag>
              </div>
            </div>
          </PhaseCard>
        </div>

        {/* Cost comparison bar */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            gap: 12,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              padding: "12px 16px",
              border: `1px solid ${border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 10, color: tertiary, marginBottom: 2 }}>追加コスト</div>
              <div style={{ fontFamily: mono, fontSize: 18, fontWeight: 700, color: secondary }}>
                5min
              </div>
            </div>
            <div style={{ fontSize: 10, color: tertiary }}>ほぼ無料に見える</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 16, color: "#d4d4d8" }}>
            vs
          </div>
          <div
            style={{
              flex: 1,
              background: text,
              borderRadius: 12,
              padding: "12px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>
                削除コスト
              </div>
              <div style={{ fontFamily: mono, fontSize: 18, fontWeight: 700, color: "#fff" }}>
                数日〜数週間
              </div>
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textAlign: "right", lineHeight: 1.5 }}>
              時間とともに<br />加速度的に増加
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
