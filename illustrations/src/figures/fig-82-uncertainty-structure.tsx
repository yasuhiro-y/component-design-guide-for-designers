import { ReactNode } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

interface PanelProps {
  number: string;
  title: string;
  children: ReactNode;
}

function Panel({ number, title, children }: PanelProps) {
  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        borderRadius: 14,
        padding: 16,
        border: `1px solid ${border}`,
        minWidth: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: text,
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {number}
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: text }}>{title}</div>
      </div>
      {children}
    </div>
  );
}

function CodeTag({ children, strike, error }: { children: ReactNode; strike?: boolean; error?: boolean }) {
  return (
    <span
      style={{
        fontFamily: mono,
        fontSize: 10,
        fontWeight: 600,
        background: error ? "#fef2f2" : "#f4f4f5",
        color: error ? "#b91c1c" : secondary,
        padding: "2px 6px",
        borderRadius: 4,
        textDecoration: strike ? "line-through" : "none",
        opacity: strike ? 0.5 : 1,
      }}
    >
      {children}
    </span>
  );
}

function TokenRow({ token, depth }: { token: string; depth: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: depth * 14 }}>
      {depth > 0 && (
        <span style={{ color: "#d4d4d8", fontSize: 10 }}>└</span>
      )}
      <span style={{ fontFamily: mono, fontSize: 10, color: secondary }}>{token}</span>
    </div>
  );
}

function SizeScale({ sizes, anchor }: { sizes: string[]; anchor: string }) {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
      {sizes.map((s) => {
        const isAnchor = s === anchor;
        const height = s === "xs" ? 16 : s === "sm" ? 22 : s === "md" ? 28 : s === "lg" ? 34 : 40;
        return (
          <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <div
              style={{
                width: 30,
                height,
                borderRadius: 6,
                background: isAnchor ? text : "#f4f4f5",
                border: isAnchor ? `1.5px solid ${text}` : `1px solid ${border}`,
              }}
            />
            <span
              style={{
                fontFamily: mono,
                fontSize: 9,
                fontWeight: isAnchor ? 700 : 400,
                color: isAnchor ? text : tertiary,
              }}
            >
              {s}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SlotBox({ label, slotted }: { label: string; slotted?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 8,
        border: slotted ? `1.5px dashed ${secondary}` : `1px solid ${border}`,
        background: slotted ? "#fafafa" : "#fff",
        fontSize: 10,
        color: secondary,
      }}
    >
      {slotted && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <rect x="1" y="1" width="10" height="10" rx="2" stroke={secondary} strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      )}
      <span style={{ fontFamily: mono, fontWeight: 600 }}>{label}</span>
    </div>
  );
}

export default function Fig82() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {/* (1) Weak semantics */}
          <Panel number="1" title="弱い意味論で仮置きする">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <CodeTag>primary</CodeTag>
                <CodeTag>secondary</CodeTag>
                <CodeTag>tertiary</CodeTag>
              </div>
              <div style={{ fontSize: 10, color: tertiary, lineHeight: 1.5, marginBottom: 4 }}>
                序列で仮置き → パターンが見えたら意味ある名前へ
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <CodeTag error>callToAction</CodeTag>
                <span style={{ fontSize: 9, color: tertiary }}>→ 2つ目の CTA が出た瞬間に破綻</span>
              </div>
            </div>
          </Panel>

          {/* (2) Fixed hierarchy */}
          <Panel number="2" title="階層の深さを固定する">
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TokenRow token="feedback" depth={0} />
              <TokenRow token=".success" depth={1} />
              <TokenRow token=".subtle" depth={2} />
              <TokenRow token=".bold" depth={2} />
              <TokenRow token=".error" depth={1} />
              <TokenRow token=".subtle" depth={2} />
              <TokenRow token=".bold" depth={2} />
            </div>
            <div style={{ fontSize: 10, color: tertiary, lineHeight: 1.5, marginTop: 8 }}>
              ドメイン.カテゴリ.強度の3段階に統一
            </div>
          </Panel>

          {/* (3) Extension path */}
          <Panel number="3" title="拡張パスを確保する">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <SizeScale sizes={["xs", "sm", "md", "lg", "xl"]} anchor="md" />
              <div style={{ fontSize: 10, color: tertiary, lineHeight: 1.5, textAlign: "center" }}>
                medium をアンカーにしておけば<br />両方向に拡張できる
              </div>
            </div>
          </Panel>

          {/* (4) Slot */}
          <Panel number="4" title="スロットで未知に備える">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: text, fontFamily: mono }}>ListItem</div>
              <div style={{ display: "flex", gap: 6 }}>
                <SlotBox label="leading" slotted />
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    justifyContent: "center",
                  }}
                >
                  <div style={{ height: 8, width: "80%", borderRadius: 4, background: "#e4e4e7" }} />
                  <div style={{ height: 6, width: "60%", borderRadius: 3, background: "#f4f4f5" }} />
                </div>
                <SlotBox label="trailing" slotted />
              </div>
              <div style={{ fontSize: 10, color: tertiary, lineHeight: 1.5 }}>
                何が入るかは未定でも、差し込み口は確保
              </div>
            </div>
          </Panel>
        </div>

        {/* Bottom message */}
        <div
          style={{
            marginTop: 12,
            background: text,
            borderRadius: 12,
            padding: "12px 20px",
            textAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.5,
          }}
        >
          中身は後から埋めるが、器の形だけは先に決めておく
        </div>
      </div>
    </IllustrationFrame>
  );
}
