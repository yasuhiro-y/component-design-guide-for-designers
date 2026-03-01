import { CSSProperties, ReactNode } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";

function TextLine({ w, h = 7, color = "#d4d4d8" }: { w: number; h?: number; color?: string }) {
  return <div style={{ width: w, height: h, borderRadius: h / 2, background: color }} />;
}

function Avatar({ size = 28 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        background: "linear-gradient(135deg, #d4d4d8 0%, #a1a1aa 100%)",
        flexShrink: 0,
      }}
    />
  );
}

interface ListItemProps {
  title: string;
  subtitle?: string;
  highlighted?: boolean;
  error?: boolean;
  selected?: boolean;
  hackIcon?: boolean;
  hackIconShifted?: boolean;
  broken?: boolean;
}

function ListItem({
  title,
  subtitle = "2時間前・東京都渋谷区",
  highlighted,
  error,
  selected,
  hackIcon,
  hackIconShifted,
  broken,
}: ListItemProps) {
  const bg = highlighted ? "#eef2ff" : "#fff";
  const borderCol = error ? "#ef4444" : border;
  const brokenBg = broken ? "linear-gradient(90deg, #eef2ff 0%, #fef2f2 100%)" : undefined;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: brokenBg ?? bg,
        border: `1.5px solid ${borderCol}`,
        borderRadius: 12,
        padding: "10px 14px",
        position: "relative",
        overflow: "visible",
      }}
    >
      {highlighted && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 8,
            bottom: 8,
            width: 3,
            borderRadius: 2,
            background: "#6366f1",
          }}
        />
      )}

      {selected && (
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 5,
            border: `1.5px solid ${text}`,
            background: text,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5L4 7.2L8 2.8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      <Avatar />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: highlighted ? 700 : 600,
            color: text,
            marginBottom: 2,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 10, color: tertiary }}>{subtitle}</div>
      </div>

      {hackIcon && !hackIconShifted && (
        <div
          style={{
            position: "absolute",
            right: -4,
            top: -4,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#ef4444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        >
          <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, lineHeight: 1 }}>!</span>
        </div>
      )}

      {hackIcon && hackIconShifted && (
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#ef4444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, lineHeight: 1 }}>!</span>
        </div>
      )}

      {broken && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 12,
            border: "2px dashed #ef4444",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}

interface PanelProps {
  step: string;
  label: string;
  sublabel?: string;
  broken?: boolean;
  children: ReactNode;
  annotation?: string;
}

function Panel({ step, label, sublabel, broken, children, annotation }: PanelProps) {
  const headerColor = broken ? "#ef4444" : tertiary;

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: headerColor,
            letterSpacing: "0.04em",
            textTransform: "uppercase" as const,
            marginBottom: 2,
          }}
        >
          {step}
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: text }}>{label}</div>
        {sublabel && (
          <div style={{ fontSize: 10, color: tertiary, marginTop: 1 }}>{sublabel}</div>
        )}
      </div>
      <div
        style={{
          background: "#fafafa",
          borderRadius: 14,
          padding: 10,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          border: broken ? "1.5px dashed #fca5a5" : `1px solid ${border}`,
        }}
      >
        {children}
      </div>
      {annotation && (
        <div style={{ fontSize: 10, color: tertiary, marginTop: 6, lineHeight: 1.5 }}>
          {annotation}
        </div>
      )}
    </div>
  );
}

function RightArrow() {
  return (
    <div style={{ display: "flex", alignItems: "center", paddingTop: 30, flexShrink: 0 }}>
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
        <line x1="0" y1="5" x2="14" y2="5" stroke="#d4d4d8" strokeWidth="1.5" />
        <polygon points="14,1.5 20,5 14,8.5" fill="#d4d4d8" />
      </svg>
    </div>
  );
}

export default function Fig80() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <Panel step="Step 1" label="highlighted を追加" annotation="施策で注目アイテムを目立たせる。2hで完了。">
            <ListItem title="田中 太郎" />
            <ListItem title="鈴木 花子" highlighted />
          </Panel>

          <RightArrow />

          <Panel
            step="Step 2"
            label="error との掛け合わせ"
            sublabel="highlighted × error = ?"
            broken
            annotation="青背景 × 赤ボーダー → 視覚的に破綻。本来の修正は3日。スプリントは明日終了。"
          >
            <ListItem title="佐藤 一郎" error />
            <ListItem title="鈴木 花子" highlighted error broken />
          </Panel>

          <RightArrow />

          <Panel
            step="Step 3"
            label="応急処置の連鎖"
            sublabel="条件分岐 × 3"
            annotation="絶対配置のアイコン → チェックボックスと衝突 → さらに位置をずらす条件分岐。"
          >
            <ListItem title="鈴木 花子" highlighted hackIcon />
            <ListItem title="鈴木 花子" highlighted hackIcon hackIconShifted selected />
          </Panel>
        </div>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              padding: "12px 16px",
              border: `1px solid ${border}`,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 10, color: tertiary, marginBottom: 2 }}>
              最初の対応
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: text, fontFamily: '"SF Mono", Menlo, monospace' }}>
              2h
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 16, color: "#d4d4d8" }}>→</div>
          <div
            style={{
              flex: 1,
              background: text,
              borderRadius: 12,
              padding: "12px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>
              応急処置の累計
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", fontFamily: '"SF Mono", Menlo, monospace' }}>
              15h+
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 16, color: "#d4d4d8" }}>→</div>
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              padding: "12px 16px",
              border: `1px dashed ${border}`,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 10, color: tertiary, marginBottom: 2 }}>
              条件分岐
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: secondary }}>
              3つ以上
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
