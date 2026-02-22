import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const cellLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 8,
};

const cellSub: CSSProperties = {
  fontSize: 10,
  color: "#a1a1aa",
  marginTop: 6,
};

const mockCard: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 12,
  minHeight: 56,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/* ── Mini Badge ── */
function Badge({ count, max }: { count: number; max?: number }) {
  const display =
    max && count > max ? `${max}+` : count === 0 ? "" : String(count);
  if (!display) return null;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 20,
        height: 20,
        borderRadius: 10,
        background: "#18181b",
        color: "#fff",
        fontSize: 11,
        fontWeight: 600,
        padding: "0 6px",
      }}
    >
      {display}
    </span>
  );
}

/* ── Stars ── */
function Stars({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{ fontSize: 14, color: i <= score ? "#18181b" : "#d4d4d8" }}
        >
          &#9733;
        </span>
      ))}
      <span
        style={{ fontSize: 12, fontWeight: 500, color: "#3f3f46", marginLeft: 4 }}
      >
        {score.toFixed(1)}
      </span>
    </div>
  );
}

/* ── Bell icon ── */
function BellIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3f3f46"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

export default function Fig45() {
  return (
    <IllustrationFrame title="Number型: 数値の表示ルール">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 12,
          width: CONTENT_WIDTH,
        }}
      >
        {/* 1. Normal badge */}
        <div>
          <div style={cellLabel}>通常</div>
          <div style={mockCard}>
            <div style={{ position: "relative", display: "inline-flex" }}>
              <BellIcon />
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -10,
                }}
              >
                <Badge count={3} />
              </span>
            </div>
          </div>
          <div style={cellSub}>count: 3</div>
        </div>

        {/* 2. Zero */}
        <div>
          <div style={cellLabel}>0件</div>
          <div style={mockCard}>
            <div style={{ position: "relative", display: "inline-flex" }}>
              <BellIcon />
            </div>
          </div>
          <div style={cellSub}>0 → バッジ非表示</div>
        </div>

        {/* 3. Overflow */}
        <div>
          <div style={cellLabel}>上限超過</div>
          <div style={mockCard}>
            <div style={{ position: "relative", display: "inline-flex" }}>
              <BellIcon />
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -14,
                }}
              >
                <Badge count={312} max={99} />
              </span>
            </div>
          </div>
          <div style={cellSub}>312 → 99+ 表示</div>
        </div>

        {/* 4. Rating */}
        <div>
          <div style={cellLabel}>評価スコア</div>
          <div style={mockCard}>
            <Stars score={4} />
          </div>
          <div style={cellSub}>数値 → 視覚表現</div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
