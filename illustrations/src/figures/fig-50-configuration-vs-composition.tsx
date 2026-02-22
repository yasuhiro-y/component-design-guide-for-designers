import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ── tiny UI parts ── */

function Avatar() {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 18,
        background: "#e4e4e7",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="3" fill="#a1a1aa" />
        <path d="M2 15c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="#a1a1aa" />
      </svg>
    </div>
  );
}

function Badge({ count }: { count: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 18,
        height: 18,
        borderRadius: 9,
        background: "#18181b",
        color: "#fff",
        fontSize: 10,
        fontWeight: 700,
        padding: "0 4px",
      }}
    >
      {count}
    </span>
  );
}

function SmallButton({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        borderRadius: 4,
        background: "#18181b",
        color: "#fff",
        fontSize: 10,
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
}

/* ── shared styles ── */

const columnLabel: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: "#18181b",
  textAlign: "center",
  marginBottom: 8,
};

const cardOuter: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 14,
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const caption: CSSProperties = {
  textAlign: "center",
  marginTop: 8,
  fontSize: 10,
  color: "#a1a1aa",
};

const propRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 0",
  borderBottom: "1px solid #f4f4f5",
  fontSize: 10,
  color: "#3f3f46",
  fontFamily: '"SF Mono", Menlo, monospace',
};

const slotOutline: CSSProperties = {
  border: "1.5px dashed #d4d4d8",
  borderRadius: 6,
  padding: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative" as const,
};

const slotLabel: CSSProperties = {
  position: "absolute" as const,
  top: -7,
  left: 8,
  fontSize: 8,
  fontWeight: 600,
  color: "#a1a1aa",
  background: "#fff",
  padding: "0 3px",
  fontFamily: '"SF Mono", Menlo, monospace',
};

/* ── props list for configuration side ── */
const configProps = [
  "title", "subtitle", "showAvatar", "avatarSrc",
  "showBadge", "badgeCount", "showAction", "actionLabel",
  "variant", "iconName", "iconPosition", "showIcon",
];

export default function Fig50() {
  return (
    <IllustrationFrame title="Configuration vs Composition: 設定の山か、組み合わせか">
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH, alignItems: "start" }}>

        {/* ── Left: Configuration ── */}
        <div style={{ flex: 1 }}>
          <div style={columnLabel}>Configuration（設定型）</div>

          {/* Visual card */}
          <div style={cardOuter}>
            <Avatar />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#18181b" }}>山田太郎</div>
              <div style={{ fontSize: 10, color: "#a1a1aa", marginTop: 1 }}>エンジニア</div>
            </div>
            <Badge count={3} />
            <SmallButton label="フォロー" />
          </div>

          {/* Props panel */}
          <div
            style={{
              background: "#f4f4f5",
              borderRadius: 6,
              border: "1px solid #e4e4e7",
              padding: "8px 12px",
              marginTop: 8,
            }}
          >
            <div style={{ fontSize: 9, fontWeight: 600, color: "#a1a1aa", marginBottom: 4, letterSpacing: "0.05em" }}>
              PROPERTIES
            </div>
            {configProps.map((p, i) => (
              <div key={p} style={{ ...propRow, borderBottom: i < configProps.length - 1 ? "1px solid #e4e4e7" : "none" }}>
                <span>{p}</span>
              </div>
            ))}
          </div>
          <div style={caption}>1つのコンポーネントに props 12個</div>
        </div>

        {/* ── Center ── */}
        <div style={{ display: "flex", alignItems: "center", paddingTop: 60, flexShrink: 0 }}>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <line x1="0" y1="8" x2="24" y2="8" stroke="#d4d4d8" strokeWidth="1.5" />
            <polygon points="24,3 32,8 24,13" fill="#d4d4d8" />
          </svg>
        </div>

        {/* ── Right: Composition ── */}
        <div style={{ flex: 1 }}>
          <div style={columnLabel}>Composition（組み合わせ型）</div>

          {/* Visual card with slot outlines */}
          <div style={{ ...cardOuter, gap: 8 }}>
            <div style={{ ...slotOutline, padding: 4 }}>
              <span style={slotLabel}>leading</span>
              <Avatar />
            </div>
            <div style={{ ...slotOutline, flex: 1, padding: "8px 10px", flexDirection: "column", alignItems: "flex-start" }}>
              <span style={slotLabel}>content</span>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#18181b" }}>山田太郎</div>
              <div style={{ fontSize: 10, color: "#a1a1aa", marginTop: 1 }}>エンジニア</div>
            </div>
            <div style={{ ...slotOutline, gap: 6 }}>
              <span style={slotLabel}>trailing</span>
              <Badge count={3} />
              <SmallButton label="フォロー" />
            </div>
          </div>

          {/* Slot explanation */}
          <div
            style={{
              display: "flex",
              gap: 6,
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            {[
              { slot: "leading", examples: "Avatar / Icon / なし" },
              { slot: "content", examples: "自由なレイアウト" },
              { slot: "trailing", examples: "Badge / Button / なし" },
            ].map((s) => (
              <div
                key={s.slot}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "6px 4px",
                  background: "#fafafa",
                  borderRadius: 4,
                  border: "1px solid #f4f4f5",
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 600, color: "#52525b", fontFamily: '"SF Mono", Menlo, monospace' }}>
                  {s.slot}
                </div>
                <div style={{ fontSize: 9, color: "#a1a1aa", marginTop: 2 }}>
                  {s.examples}
                </div>
              </div>
            ))}
          </div>
          <div style={caption}>差し込み口に好きな部品を入れる</div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
