import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const secondary = "#3f3f46";

const roles: {
  role: string;
  pain: string;
  severity: string;
}[] = [
  {
    role: "Designer",
    pain: "判断基準が個人の頭の中に閉じる",
    severity: "#ef4444",
  },
  {
    role: "Engineer",
    pain: "同じ意図のUIが画面ごとに異なる実装として積み重なる",
    severity: "#f59e0b",
  },
  {
    role: "PdM",
    pain: "UI変更の影響範囲の特定自体がプロジェクトになる",
    severity: "#f59e0b",
  },
  {
    role: "Manager",
    pain: "画面数が増えるほど開発速度が鈍化する",
    severity: "#ef4444",
  },
];

const roleLabel: CSSProperties = {
  width: 80,
  fontSize: 12,
  fontWeight: 700,
  color: "#18181b",
  flexShrink: 0,
};

export default function Fig73() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {roles.map((r) => (
            <div
              key={r.role}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "#fff",
                borderRadius: 16,
                padding: "12px 16px",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: r.severity,
                  flexShrink: 0,
                }}
              />
              <div style={roleLabel}>{r.role}</div>
              <div style={{ fontSize: 12, color: secondary }}>
                {r.pain}
              </div>
            </div>
          ))}
        </div>
      </div>
    </IllustrationFrame>
  );
}
