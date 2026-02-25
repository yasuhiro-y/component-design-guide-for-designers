import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { avatars } from "../shared/unsplash";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ── tiny UI parts ── */

const avatarImg: CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  objectFit: "cover",
  flexShrink: 0,
};

function Badge({ count }: { count: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 20,
        height: 20,
        borderRadius: 9999,
        background: "#18181b",
        color: "#fff",
        fontSize: 10,
        fontWeight: 700,
        padding: "0 6px",
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
        padding: "6px 16px",
        borderRadius: 12,
        background: "#18181b",
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
      }}
    >
      {label}
    </span>
  );
}

/* ── styles ── */

const columnLabel: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#18181b",
  textAlign: "center",
  marginBottom: 10,
};

/* UI mock card — white + border = looks like real UI */
const mockCard: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  padding: 20,
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const slotOutline: CSSProperties = {
  border: "1.5px dashed #d4d4d8",
  borderRadius: 12,
  padding: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative" as const,
};

const slotLabel: CSSProperties = {
  position: "absolute" as const,
  top: -7,
  left: 10,
  fontSize: 10,
  fontWeight: 700,
  color: "#71717a",
  background: "#fff",
  padding: "0 4px",
  fontFamily: '"SF Mono", Menlo, monospace',
};

/* slot pill colors */
const slotColors: Record<string, { bg: string; color: string }> = {
  leading: { bg: "#eff6ff", color: "#3b82f6" },
  content: { bg: "#f0fdf4", color: "#22c55e" },
  trailing: { bg: "#fefce8", color: "#ca8a04" },
};

/* ── props list ── */
const configProps = [
  "title", "subtitle", "showAvatar", "avatarSrc",
  "showBadge", "badgeCount", "showAction", "actionLabel",
  "variant", "iconName", "iconPosition", "showIcon",
];

export default function Fig50() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH, alignItems: "start" }}>

        {/* ── Left: Configuration ── */}
        <div style={{ flex: 1 }}>
          <div style={columnLabel}>Configuration（設定型）</div>

          {/* UI mock card */}
          <div style={mockCard}>
            <img src={avatars.yamada} style={avatarImg} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#18181b" }}>山田太郎</div>
              <div style={{ fontSize: 11, color: "#71717a", marginTop: 2 }}>エンジニア</div>
            </div>
            <Badge count={3} />
            <SmallButton label="フォロー" />
          </div>

          {/* Props list — dense, communicates "too many" */}
          <div style={{ marginTop: 10, padding: "6px 0" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#71717a", marginBottom: 6, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              Props ×{configProps.length}
            </div>
            {configProps.map((p, i) => (
              <div
                key={p}
                style={{
                  fontSize: 12,
                  color: "#18181b",
                  fontFamily: '"SF Mono", Menlo, monospace',
                  background: i % 2 === 1 ? "rgba(0,0,0,0.04)" : "transparent",
                  borderRadius: 8,
                  padding: "5px 6px",
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* ── Center arrow ── */}
        <div style={{ display: "flex", alignItems: "center", paddingTop: 60, flexShrink: 0 }}>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <line x1="0" y1="8" x2="24" y2="8" stroke="#d4d4d8" strokeWidth="1.5" />
            <polygon points="24,3 32,8 24,13" fill="#d4d4d8" />
          </svg>
        </div>

        {/* ── Right: Composition ── */}
        <div style={{ flex: 1 }}>
          <div style={columnLabel}>Composition（組み合わせ型）</div>

          {/* UI mock card with slots */}
          <div style={{ ...mockCard, gap: 10 }}>
            <div style={{ ...slotOutline, padding: 6 }}>
              <span style={slotLabel}>leading</span>
              <img src={avatars.yamada} style={avatarImg} />
            </div>
            <div style={{ ...slotOutline, flex: 1, padding: "10px 12px", flexDirection: "column", alignItems: "flex-start" }}>
              <span style={slotLabel}>content</span>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#18181b" }}>山田太郎</div>
              <div style={{ fontSize: 11, color: "#71717a", marginTop: 2 }}>エンジニア</div>
            </div>
            <div style={{ ...slotOutline, gap: 8 }}>
              <span style={slotLabel}>trailing</span>
              <Badge count={3} />
              <SmallButton label="フォロー" />
            </div>
          </div>

          {/* Slot pills — colored, visually rich */}
          <div style={{ display: "flex", gap: 10, marginTop: 16, justifyContent: "center" }}>
            {(["leading", "content", "trailing"] as const).map((slot) => (
              <div
                key={slot}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "8px 6px",
                  background: slotColors[slot].bg,
                  borderRadius: 12,
                }}
              >
                <div style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: slotColors[slot].color,
                  fontFamily: '"SF Mono", Menlo, monospace',
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}>
                  {slot}
                </div>
              </div>
            ))}
          </div>

          {/* Visual: slot = 3 clean pieces */}
          <div style={{ marginTop: 12, textAlign: "center" }}>
            <span style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 700,
              color: "#71717a",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
            }}>
              Slots ×3
            </span>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
