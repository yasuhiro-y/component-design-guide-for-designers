import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH, font } from "../styles/tokens";

const stateLabel: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: "#18181b",
  marginBottom: 8,
  fontFamily: font.sans,
  fontFeatureSettings: font.featureSettings,
};

const stateNote: CSSProperties = {
  fontSize: 11,
  color: "#3f3f46",
  marginTop: 8,
  fontFamily: font.sans,
  fontFeatureSettings: font.featureSettings,
};

const card: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  padding: 16,
  minHeight: 160,
};

const avatarSize = 40;

const skeletonBar = (
  width: string | number,
  height: number = 10
): CSSProperties => ({
  width,
  height,
  borderRadius: 8,
  background: "#f4f4f5",
});

const textLine = (
  width: string | number,
  height: number = 10
): CSSProperties => ({
  width,
  height,
  borderRadius: 8,
  background: "#e4e4e7",
});

/* ── Loading state: full skeleton ── */
function LoadingState() {
  return (
    <div style={card}>
      {/* Header skeleton */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: "50%",
            background: "#f4f4f5",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={skeletonBar("70%", 12)} />
          <div style={skeletonBar("45%", 8)} />
        </div>
      </div>

      {/* Body skeleton lines */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={skeletonBar("100%", 10)} />
        <div style={skeletonBar("90%", 10)} />
        <div style={skeletonBar("60%", 10)} />
      </div>

      {/* Footer skeleton */}
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <div style={skeletonBar(60, 24)} />
        <div style={skeletonBar(60, 24)} />
      </div>
    </div>
  );
}

/* ── Partial state: mix of real data and skeleton ── */
function PartialState() {
  return (
    <div style={card}>
      {/* Header with real avatar + skeleton text */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: "50%",
            background: "#18181b",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          TN
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#18181b",
              marginBottom: 4,
              fontFamily: font.sans,
              fontFeatureSettings: font.featureSettings,
            }}
          >
            Tanaka Yui
          </div>
          <div style={skeletonBar("45%", 8)} />
        </div>
      </div>

      {/* Body: one real line + skeleton */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 11, color: "#52525b", lineHeight: 1.5, fontFamily: font.sans, fontFeatureSettings: font.featureSettings }}>
          UI Designer at Example Corp.
        </div>
        <div style={skeletonBar("90%", 10)} />
        <div style={skeletonBar("60%", 10)} />
      </div>

      {/* Footer: real tag + skeleton */}
      <div style={{ display: "flex", gap: 8, marginTop: 16, alignItems: "center" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: 24,
            padding: "0 10px",
            borderRadius: 9999,
            background: "#f4f4f5",
            fontSize: 10,
            fontWeight: 700,
            color: "#52525b",
          }}
        >
          Figma
        </span>
        <div style={skeletonBar(60, 24)} />
      </div>
    </div>
  );
}

/* ── Error state ── */
function ErrorState() {
  return (
    <div style={{ ...card, display: "flex", flexDirection: "column" }}>
      {/* Header placeholder */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: "50%",
            background: "#fef2f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="9" r="7" />
            <line x1="9" y1="6" x2="9" y2="10" />
            <circle cx="9" cy="12.5" r="0.5" fill="#ef4444" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={textLine("70%", 12)} />
          <div style={{ ...textLine("45%", 8), marginTop: 6 }} />
        </div>
      </div>

      {/* Error message area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: "8px 0",
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, color: "#ef4444", fontFamily: font.sans, fontFeatureSettings: font.featureSettings }}>
          読み込みに失敗しました
        </div>
        <div style={{ fontSize: 10, color: "#52525b", fontFamily: font.sans, fontFeatureSettings: font.featureSettings }}>
          ネットワークエラー
        </div>
        <button
          style={{
            padding: "6px 16px",
            borderRadius: 8,
            border: "1px solid #d4d4d8",
            background: "#fff",
            fontSize: 11,
            color: "#3f3f46",
            fontFamily: font.sans,
              fontFeatureSettings: font.featureSettings,
            cursor: "default",
            marginTop: 4,
          }}
        >
          再試行
        </button>
      </div>
    </div>
  );
}

export default function Fig77() {
  const states = [
    { label: "Loading", el: <LoadingState />, note: "全データが未取得" },
    { label: "Partial", el: <PartialState />, note: "一部だけ取得済み" },
    { label: "Error", el: <ErrorState />, note: "取得に失敗" },
  ];

  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 12, width: CONTENT_WIDTH }}>
        {states.map((s) => (
          <div key={s.label} style={{ flex: 1, minWidth: 0 }}>
            <div style={stateLabel}>{s.label}</div>
            {s.el}
            <div style={stateNote}>{s.note}</div>
          </div>
        ))}
      </div>
    </IllustrationFrame>
  );
}
