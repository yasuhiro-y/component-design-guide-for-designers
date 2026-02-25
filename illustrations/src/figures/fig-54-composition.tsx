import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ── tokens ── */
const text = "#18181b";
const secondary = "#3f3f46";
const border = "#e4e4e7";

/* ── atom parts ── */
function AtomAvatar() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 16,
        background: "#e4e4e7",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="3" fill="#a1a1aa" />
        <path d="M2 15c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="#a1a1aa" />
      </svg>
    </div>
  );
}

function AtomText({ width, lines }: { width: number; lines?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <div style={{ width, height: 8, borderRadius: 8, background: "#a1a1aa" }} />
      {(lines ?? 1) > 1 && (
        <div style={{ width: width * 0.6, height: 6, borderRadius: 8, background: "#d4d4d8" }} />
      )}
    </div>
  );
}

function AtomBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2px 8px",
        borderRadius: 9,
        background: "#18181b",
        color: "#fff",
        fontSize: 9,
        fontWeight: 700,
      }}
    >
      {label}
    </span>
  );
}

function AtomButton({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        borderRadius: 8,
        background: "#18181b",
        color: "#fff",
        fontSize: 9,
        fontWeight: 700,
      }}
    >
      {label}
    </span>
  );
}

/* ── atom display card ── */
function AtomCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "10px 12px",
        background: "#fff",
        borderRadius: 12,
        border: `1px solid ${border}`,
        minWidth: 68,
      }}
    >
      {children}
      <span style={{ fontSize: 10, color: secondary }}>{label}</span>
    </div>
  );
}

/* ── composed card ── */
const composedCard: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 14px",
  background: "#fff",
  borderRadius: 16,
  border: `1px solid ${border}`,
};

const composedLabel: CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  color: secondary,
  textAlign: "center" as const,
  marginBottom: 6,
};

export default function Fig54() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        {/* ── Top: atoms ── */}
        <div style={{ marginBottom: 6 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#52525b",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              marginBottom: 10,
            }}
          >
            Parts
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <AtomCard label="Avatar">
              <AtomAvatar />
            </AtomCard>
            <AtomCard label="Text">
              <AtomText width={48} lines={2} />
            </AtomCard>
            <AtomCard label="Badge">
              <AtomBadge label="New" />
            </AtomCard>
            <AtomCard label="Button">
              <AtomButton label="Action" />
            </AtomCard>
          </div>
        </div>

        {/* ── Middle: arrow ── */}
        <div style={{ display: "flex", justifyContent: "center", padding: "10px 0" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <line x1="8" y1="0" x2="8" y2="18" stroke="#d4d4d8" strokeWidth="1.5" />
              <polygon points="3,18 13,18 8,24" fill="#d4d4d8" />
            </svg>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#71717a" }}>組み合わせる</span>
          </div>
        </div>

        {/* ── Bottom: composed results ── */}
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#52525b",
            letterSpacing: "0.04em",
            textTransform: "uppercase" as const,
            marginBottom: 10,
          }}
        >
          Results
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {/* UserCard */}
          <div style={{ flex: 1 }}>
            <div style={composedLabel}>UserCard</div>
            <div style={composedCard}>
              <AtomAvatar />
              <div style={{ flex: 1 }}>
                <AtomText width={60} lines={2} />
              </div>
              <AtomBadge label="Admin" />
            </div>
          </div>

          {/* NotificationItem */}
          <div style={{ flex: 1 }}>
            <div style={composedLabel}>NotificationItem</div>
            <div style={composedCard}>
              <AtomBadge label="3" />
              <div style={{ flex: 1 }}>
                <AtomText width={80} lines={2} />
              </div>
              <AtomButton label="View" />
            </div>
          </div>
        </div>

      </div>
    </IllustrationFrame>
  );
}
