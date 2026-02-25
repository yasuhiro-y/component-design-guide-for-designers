import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

interface StepData {
  number: number;
  title: string;
  description: string;
}

const steps: StepData[] = [
  {
    number: 1,
    title: "非推奨マーク",
    description: "コンポーネントに deprecated ラベルを付与",
  },
  {
    number: 2,
    title: "移行ガイド提供",
    description: "代替コンポーネントと移行手順を文書化",
  },
  {
    number: 3,
    title: "利用箇所の移行",
    description: "既存の利用箇所を新コンポーネントへ置換",
  },
  {
    number: 4,
    title: "安全に削除",
    description: "利用箇所ゼロを確認し、コードベースから削除",
  },
];

const stepCard: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  padding: 16,
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const stepNumber = (num: number): CSSProperties => ({
  width: 28,
  height: 28,
  borderRadius: "50%",
  background: "#18181b",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 13,
  fontWeight: 700,
  flexShrink: 0,
  opacity: 1 - (num - 1) * 0.15,
});

/* Step-specific mini illustrations */
function DeprecatedMark() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "10px 0",
      }}
    >
      <div
        style={{
          padding: "6px 14px",
          borderRadius: 8,
          background: "#f4f4f5",
          fontSize: 12,
          color: "#a1a1aa",
          textDecoration: "line-through",
          fontFamily:
            '"SF Mono", "Fira Code", Menlo, monospace',
        }}
      >
        OldButton
      </div>
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          color: "#ef4444",
          background: "#fef2f2",
          padding: "2px 8px",
          borderRadius: 4,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        deprecated
      </div>
    </div>
  );
}

function MigrationGuide() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "10px 0",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#52525b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="3" width="18" height="22" rx="2" />
        <line x1="9" y1="9" x2="19" y2="9" />
        <line x1="9" y1="13" x2="19" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
      <div style={{ fontSize: 10, color: "#52525b" }}>移行手順書</div>
    </div>
  );
}

function MigrateUsage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        padding: "10px 0",
      }}
    >
      <div
        style={{
          padding: "4px 10px",
          borderRadius: 6,
          background: "#f4f4f5",
          fontSize: 10,
          color: "#a1a1aa",
          textDecoration: "line-through",
          fontFamily:
            '"SF Mono", "Fira Code", Menlo, monospace',
        }}
      >
        Old
      </div>
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
        <line
          x1="0"
          y1="5"
          x2="14"
          y2="5"
          stroke="#d4d4d8"
          strokeWidth="1.5"
        />
        <polygon points="14,2 20,5 14,8" fill="#d4d4d8" />
      </svg>
      <div
        style={{
          padding: "4px 10px",
          borderRadius: 6,
          background: "#18181b",
          fontSize: 10,
          color: "#fff",
          fontFamily:
            '"SF Mono", "Fira Code", Menlo, monospace',
        }}
      >
        New
      </div>
    </div>
  );
}

function SafeRemoval() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "10px 0",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#22c55e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="14" cy="14" r="10" />
        <polyline points="10,14 13,17 19,11" />
      </svg>
      <div style={{ fontSize: 10, color: "#52525b" }}>利用箇所 0</div>
    </div>
  );
}

const illustrations = [
  <DeprecatedMark />,
  <MigrationGuide />,
  <MigrateUsage />,
  <SafeRemoval />,
];

export default function Fig76() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 10,
          }}
        >
          {steps.map((step, i) => (
            <div key={step.number} style={{ display: "contents" }}>
              <div style={stepCard}>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={stepNumber(step.number)}>{step.number}</div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#18181b",
                    }}
                  >
                    {step.title}
                  </div>
                </div>

                {/* Illustration */}
                {illustrations[i]}

                {/* Description */}
                <div
                  style={{
                    fontSize: 11,
                    color: "#52525b",
                    lineHeight: 1.5,
                  }}
                >
                  {step.description}
                </div>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="none"
                  style={{ flexShrink: 0, alignSelf: "center" }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="16"
                    y2="6"
                    stroke="#d4d4d8"
                    strokeWidth="1.5"
                  />
                  <polygon points="16,2 24,6 16,10" fill="#d4d4d8" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </IllustrationFrame>
  );
}
