import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { avatars } from "../shared/unsplash";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ── Domain icon + name label ── */
function DomainLabel({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <div style={{ color: "#52525b", flexShrink: 0 }}>{icon}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#18181b", letterSpacing: "-0.01em" }}>{name}</div>
    </div>
  );
}

/* Icons */
const ShoppingBagIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const CartIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
  </svg>
);

const CalendarIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ListIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="16" x2="12" y2="16" />
  </svg>
);

/* ── UI mock card (white + border) ── */
const mockCard: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  border: "1px solid #e4e4e7",
  overflow: "hidden",
};

const tag = (bg: string, textColor: string): CSSProperties => ({
  display: "inline-block",
  padding: "2px 10px",
  borderRadius: 9999,
  background: bg,
  fontSize: 10,
  fontWeight: 400,
  color: textColor,
});

/* ── Image placeholder with icon ── */
function ImagePlaceholder({ h = 56 }: { h?: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: h,
        borderRadius: 12,
        background: "#f4f4f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
}

export default function Fig60() {
  return (
    <IllustrationFrame>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 20,
          width: CONTENT_WIDTH,
        }}
      >
        {/* ── ProductCard ── */}
        <div>
          <DomainLabel icon={ShoppingBagIcon} name="ProductCard" />
          <div style={{ ...mockCard, maxWidth: 200 }}>
            <div style={{ padding: 16 }}>
              <ImagePlaceholder h={80} />
              <div style={{ marginTop: 12, fontSize: 13, fontWeight: 700, color: "#18181b" }}>
                ワイヤレスイヤホン Pro
              </div>
              <div style={{ marginTop: 4, fontSize: 12, color: "#52525b" }}>
                ¥4,980
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={tag("#f0fdf4", "#16a34a")}>在庫あり</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── CartItem ── */}
        <div>
          <DomainLabel icon={CartIcon} name="CartItem" />
          <div style={{ ...mockCard, padding: 16, display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: "#f4f4f5",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 400, color: "#18181b" }}>USB-C ケーブル 1m</div>
              <div style={{ fontSize: 11, color: "#71717a", marginTop: 2 }}>¥980 × 2</div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#18181b", flexShrink: 0 }}>
              ¥1,960
            </div>
          </div>
        </div>

        {/* ── ShiftCard ── */}
        <div>
          <DomainLabel icon={CalendarIcon} name="ShiftCard" />
          <div style={{ ...mockCard, padding: 16, maxWidth: 200 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
              <img src={avatars.sato} style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 400, color: "#18181b" }}>田中太郎</div>
                <div style={{ fontSize: 10, color: "#71717a" }}>フロント担当</div>
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#71717a", marginBottom: 4 }}>
              3/1 09:00–18:00
            </div>
            <span style={tag("#eff6ff", "#2563eb")}>早番</span>
          </div>
        </div>

        {/* ── OrderListItem ── */}
        <div>
          <DomainLabel icon={ListIcon} name="OrderListItem" />
          <div
            style={{
              ...mockCard,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div style={{ fontFamily: '"SF Mono", Menlo, monospace', fontSize: 11, color: "#52525b", flexShrink: 0 }}>
              #A-2847
            </div>
            <div style={{ fontSize: 12, color: "#18181b", flex: 1 }}>佐藤花子</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#18181b", flexShrink: 0 }}>
              ¥12,400
            </div>
            <span style={tag("#fffbeb", "#ca8a04")}>発送準備中</span>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
