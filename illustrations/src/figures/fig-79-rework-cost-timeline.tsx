import { CSSProperties, ReactNode } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

function ImagePlaceholder({ w, h, radius = 10 }: { w: number | string; h: number; radius?: number }) {
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: radius,
        background: "linear-gradient(135deg, #e4e4e7 0%, #d4d4d8 100%)",
        flexShrink: 0,
      }}
    />
  );
}

function TextLine({ w, h = 8, color = "#d4d4d8" }: { w: number; h?: number; color?: string }) {
  return <div style={{ width: w, height: h, borderRadius: h / 2, background: color }} />;
}

function VerticalCard({ badge, hackBadge }: { badge?: boolean; hackBadge?: boolean }) {
  return (
    <div
      style={{
        width: 152,
        background: "#fff",
        borderRadius: 14,
        border: `1px solid ${border}`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <ImagePlaceholder w="100%" h={72} radius={0} />
      {badge && hackBadge && (
        <div
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            background: text,
            color: "#fff",
            fontSize: 8,
            fontWeight: 700,
            padding: "1px 5px",
            borderRadius: 4,
            border: "1.5px dashed #ef4444",
          }}
        >
          NEW
        </div>
      )}
      {badge && !hackBadge && (
        <div
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            background: text,
            color: "#fff",
            fontSize: 8,
            fontWeight: 700,
            padding: "1px 5px",
            borderRadius: 4,
          }}
        >
          NEW
        </div>
      )}
      <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 5 }}>
        <TextLine w={80} h={10} color={text} />
        <TextLine w={110} />
        <TextLine w={70} />
      </div>
    </div>
  );
}

function HorizontalCard() {
  return (
    <div
      style={{
        width: 280,
        background: "#fff",
        borderRadius: 14,
        border: `1px solid ${border}`,
        overflow: "hidden",
        display: "flex",
      }}
    >
      <ImagePlaceholder w={90} h={80} radius={0} />
      <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
        <TextLine w={80} h={10} color={text} />
        <TextLine w={120} />
        <TextLine w={60} />
      </div>
    </div>
  );
}

interface PhaseProps {
  month: string;
  title: string;
  cost: string;
  accent?: boolean;
  children: ReactNode;
  annotation?: ReactNode;
}

function Phase({ month, title, cost, accent, children, annotation }: PhaseProps) {
  const headerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 10,
  };

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={headerStyle}>
        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: accent ? "#ef4444" : tertiary,
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              marginBottom: 2,
            }}
          >
            {month}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: text }}>{title}</div>
        </div>
        <div
          style={{
            fontFamily: mono,
            fontSize: 13,
            fontWeight: 700,
            color: accent ? text : secondary,
          }}
        >
          {cost}
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 16,
          border: accent ? `2px solid ${text}` : `1px solid ${border}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          minHeight: 130,
          justifyContent: "center",
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
    <div style={{ display: "flex", alignItems: "center", paddingTop: 26, flexShrink: 0 }}>
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
        <line x1="0" y1="5" x2="14" y2="5" stroke="#d4d4d8" strokeWidth="1.5" />
        <polygon points="14,1.5 20,5 14,8.5" fill="#d4d4d8" />
      </svg>
    </div>
  );
}

export default function Fig79() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <Phase month="Month 0" title="初期実装" cost="¥35,000">
            <VerticalCard />
            <div style={{ fontSize: 10, color: tertiary }}>
              固定レイアウト + すり合わせMTG
            </div>
          </Phase>

          <RightArrow />

          <Phase month="Month 3" title="バッジ追加" cost="+¥27,500">
            <VerticalCard badge hackBadge />
            <div style={{ fontSize: 10, color: tertiary }}>
              CSS上書きで応急処置 + 方針MTG
            </div>
          </Phase>

          <RightArrow />

          <Phase
            month="Month 5"
            title="横並び対応（作り直し）"
            cost="+¥95,000"
            accent
          >
            <HorizontalCard />
            <div style={{ fontSize: 10, color: tertiary }}>
              内部構造リファクタ + 15画面確認
            </div>
          </Phase>
        </div>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            gap: 16,
            alignItems: "stretch",
          }}
        >
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
                実際にかかったコスト
              </div>
              <div style={{ fontFamily: mono, fontSize: 18, fontWeight: 700, color: "#fff" }}>
                ¥157,500
              </div>
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", textAlign: "right", lineHeight: 1.5 }}>
              + 機会損失<br />+ チームの士気
            </div>
          </div>
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              padding: "12px 16px",
              border: `1px dashed ${border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 10, color: tertiary, marginBottom: 2 }}>
                最初から拡張性を設計していたら
              </div>
              <div style={{ fontFamily: mono, fontSize: 18, fontWeight: 700, color: secondary }}>
                ≈ ¥50,000
              </div>
            </div>
            <div style={{ fontSize: 10, color: tertiary, textAlign: "right", lineHeight: 1.5 }}>
              スロット構造<br />レイアウト切替口
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
