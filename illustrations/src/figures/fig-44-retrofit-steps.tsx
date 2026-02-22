import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

interface StepData {
  number: number;
  title: string;
  description: string;
  note: string;
  noteColor: string;
}

const steps: StepData[] = [
  {
    number: 1,
    title: "トークンから入る",
    description: "カラー・タイポグラフィ・スペーシングをトークン化し、既存コードに適用",
    note: "低リスク・高効果",
    noteColor: "#22c55e",
  },
  {
    number: 2,
    title: "新規画面から準拠",
    description: "新しく作る画面はデザインシステムに 100% 準拠するルールを設定",
    note: "100%準拠ルール",
    noteColor: "#3b82f6",
  },
  {
    number: 3,
    title: "既存画面を段階的移行",
    description: "優先度の高い画面から順にコンポーネント適用を進める",
    note: "優先度順",
    noteColor: "#71717a",
  },
];

const stepCard: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const stepNumber = (num: number): CSSProperties => {
  const shades = ["#18181b", "#3f3f46", "#71717a"];
  return {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: shades[num - 1] || "#18181b",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 700,
    flexShrink: 0,
  };
};

function StepIcon({ step }: { step: number }) {
  if (step === 1) {
    // Color swatches icon
    return (
      <div style={{ display: "flex", gap: 3 }}>
        {["#18181b", "#52525b", "#a1a1aa", "#d4d4d8"].map((c) => (
          <div
            key={c}
            style={{
              width: 14,
              height: 14,
              borderRadius: 3,
              background: c,
            }}
          />
        ))}
      </div>
    );
  }
  if (step === 2) {
    // New screen vs old screen
    return (
      <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
        <div
          style={{
            width: 24,
            height: 30,
            borderRadius: 3,
            border: "1px solid #e4e4e7",
            background: "#fafafa",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 8, color: "#a1a1aa" }}>old</span>
        </div>
        <div
          style={{
            width: 24,
            height: 30,
            borderRadius: 3,
            border: "1.5px solid #22c55e",
            background: "#f0fdf4",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <polyline
              points="2,5 4.5,7.5 8,3"
              stroke="#22c55e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }
  // Step 3: screens being converted
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "flex-end" }}>
      {[true, true, false, false].map((done, i) => (
        <div
          key={i}
          style={{
            width: 14,
            height: 22,
            borderRadius: 2,
            border: done ? "1.5px solid #22c55e" : "1px solid #e4e4e7",
            background: done ? "#f0fdf4" : "#fafafa",
          }}
        />
      ))}
    </div>
  );
}

const arrowSvg = (
  <svg
    width="32"
    height="12"
    viewBox="0 0 32 12"
    fill="none"
    style={{ flexShrink: 0, marginTop: 20 }}
  >
    <line
      x1="0"
      y1="6"
      x2="24"
      y2="6"
      stroke="#d4d4d8"
      strokeWidth="1.5"
    />
    <polygon points="24,2 32,6 24,10" fill="#d4d4d8" />
  </svg>
);

export default function Fig44() {
  return (
    <IllustrationFrame title="後発導入: 稼働中プロダクトへの3ステップ">
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
                      fontWeight: 600,
                      color: "#18181b",
                    }}
                  >
                    {step.title}
                  </div>
                </div>

                {/* Icon */}
                <div style={{ padding: "4px 0" }}>
                  <StepIcon step={step.number} />
                </div>

                {/* Description */}
                <div
                  style={{
                    fontSize: 11,
                    color: "#52525b",
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {step.description}
                </div>

                {/* Note tag */}
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 10,
                      fontWeight: 600,
                      color: step.noteColor,
                      background:
                        step.noteColor === "#22c55e"
                          ? "#f0fdf4"
                          : step.noteColor === "#3b82f6"
                            ? "#eff6ff"
                            : "#f4f4f5",
                      border: `1px solid ${
                        step.noteColor === "#22c55e"
                          ? "#bbf7d0"
                          : step.noteColor === "#3b82f6"
                            ? "#bfdbfe"
                            : "#e4e4e7"
                      }`,
                      borderRadius: 4,
                      padding: "2px 8px",
                    }}
                  >
                    {step.note}
                  </span>
                </div>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && arrowSvg}
            </div>
          ))}
        </div>
      </div>
      <Caption text="後発導入: 稼働中プロダクトへの3ステップ" />
    </IllustrationFrame>
  );
}
