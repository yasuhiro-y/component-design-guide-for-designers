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
    title: "トークンから入る",
    description:
      "カラー・タイポグラフィ・スペーシングをトークン化し、既存コードに適用",
  },
  {
    number: 2,
    title: "新規画面から準拠",
    description:
      "新しく作る画面はデザインシステムに100%準拠するルールを設定",
  },
  {
    number: 3,
    title: "既存画面を段階的移行",
    description: "優先度の高い画面から順にコンポーネント適用を進める",
  },
];

const stepCard: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
  flex: 1,
  minWidth: 0,
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
  opacity: 1 - (num - 1) * 0.2,
});

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
                    marginBottom: 10,
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
