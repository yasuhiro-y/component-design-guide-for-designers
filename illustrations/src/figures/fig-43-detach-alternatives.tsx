import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

interface StepData {
  number: number;
  title: string;
  description: string;
  note?: string;
  tint: string;
  borderColor: string;
  accentColor: string;
}

const steps: StepData[] = [
  {
    number: 1,
    title: "組み合わせで解決",
    description: "既存コンポーネント + Slot で構成",
    tint: "#f0fdf4",
    borderColor: "#bbf7d0",
    accentColor: "#22c55e",
  },
  {
    number: 2,
    title: "バリアント追加",
    description: "新しいバリアント / プロパティを追加",
    tint: "#f0fdf4",
    borderColor: "#bbf7d0",
    accentColor: "#22c55e",
  },
  {
    number: 3,
    title: "新規コンポーネント",
    description: "設計原則に沿って新規作成",
    tint: "#fafafa",
    borderColor: "#e4e4e7",
    accentColor: "#71717a",
  },
  {
    number: 4,
    title: "例外として許容",
    description: "ワンオフの実装を許可",
    note: "N回発生したらコンポーネント化を検討",
    tint: "#fffbeb",
    borderColor: "#fde68a",
    accentColor: "#f59e0b",
  },
];

const preferLabel: CSSProperties = {
  fontSize: 9,
  fontWeight: 600,
  color: "#22c55e",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const lastResortLabel: CSSProperties = {
  fontSize: 9,
  fontWeight: 600,
  color: "#f59e0b",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export default function Fig43() {
  return (
    <IllustrationFrame title="既存コンポーネントで実現できないとき: 4つの選択肢">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Preference indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
            padding: "0 4px",
          }}
        >
          <span style={preferLabel}>優先</span>
          <svg
            width="80"
            height="8"
            viewBox="0 0 80 8"
            fill="none"
          >
            <line
              x1="0"
              y1="4"
              x2="72"
              y2="4"
              stroke="#e4e4e7"
              strokeWidth="1"
            />
            <polygon points="72,1 78,4 72,7" fill="#e4e4e7" />
          </svg>
          <span style={lastResortLabel}>最終手段</span>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {steps.map((step, i) => (
            <div key={step.number}>
              <div
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  background: step.tint,
                  borderRadius: 8,
                  border: `1px solid ${step.borderColor}`,
                  overflow: "hidden",
                }}
              >
                {/* Number indicator */}
                <div
                  style={{
                    width: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: step.accentColor,
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 700,
                    flexShrink: 0,
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
                        color: "#a1a1aa",
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
      <Caption text="既存コンポーネントで実現できないとき: 4つの選択肢" />
    </IllustrationFrame>
  );
}
