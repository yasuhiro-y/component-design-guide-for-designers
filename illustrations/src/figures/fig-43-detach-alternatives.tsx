import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

interface StepData {
  number: number;
  title: string;
  description: string;
  note?: string;
}

const steps: StepData[] = [
  {
    number: 1,
    title: "組み合わせで解決",
    description: "既存コンポーネント + Slot で構成",
  },
  {
    number: 2,
    title: "バリアント追加",
    description: "新しいバリアント / プロパティを追加",
  },
  {
    number: 3,
    title: "新規コンポーネント",
    description: "設計原則に沿って新規作成",
  },
  {
    number: 4,
    title: "例外として許容",
    description: "ワンオフの実装を許可",
    note: "N回発生したらコンポーネント化を検討",
  },
];

const stepCard: CSSProperties = {
  display: "flex",
  alignItems: "stretch",
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  overflow: "hidden",
};

const numberBadge: CSSProperties = {
  width: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#18181b",
  color: "#fff",
  fontSize: 14,
  fontWeight: 700,
  flexShrink: 0,
};

export default function Fig43() {
  return (
    <IllustrationFrame title="既存コンポーネントで実現できないとき: 4つの選択肢">
      <div style={{ width: CONTENT_WIDTH }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {steps.map((step, i) => (
            <div key={step.number}>
              <div style={stepCard}>
                {/* Number indicator */}
                <div
                  style={{
                    ...numberBadge,
                    opacity: 1 - i * 0.15,
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div style={{ padding: "10px 14px", flex: 1 }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#18181b",
                      marginBottom: 2,
                    }}
                  >
                    {step.title}
                  </div>
                  <div style={{ fontSize: 11, color: "#52525b" }}>
                    {step.description}
                  </div>
                  {step.note && (
                    <div
                      style={{
                        fontSize: 10,
                        color: "#52525b",
                        marginTop: 4,
                        fontStyle: "italic",
                      }}
                    >
                      {step.note}
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "2px 0",
                  }}
                >
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                  >
                    <line
                      x1="6"
                      y1="0"
                      x2="6"
                      y2="9"
                      stroke="#d4d4d8"
                      strokeWidth="1.5"
                    />
                    <polygon points="2,9 6,14 10,9" fill="#d4d4d8" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </IllustrationFrame>
  );
}
