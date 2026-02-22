import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const cardStyle = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
  flex: 1,
  minWidth: 0,
};

const titleStyle = {
  fontSize: 13,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 8,
};

const descStyle = {
  fontSize: 11,
  color: "#71717a",
  lineHeight: 1.6,
};

const tagStyle = (active: boolean) => ({
  display: "inline-block",
  padding: "2px 8px",
  borderRadius: 4,
  fontSize: 10,
  fontWeight: 500,
  background: active ? "#18181b" : "#f4f4f5",
  color: active ? "#fff" : "#71717a",
  marginRight: 4,
  marginBottom: 4,
});

const exampleStyle = {
  fontSize: 10,
  color: "#a1a1aa",
  fontFamily: '"SF Mono", Menlo, monospace' as const,
  marginTop: 8,
};

export default function Fig25() {
  const strategies = [
    {
      title: "汎用ライブラリ",
      examples: "MUI, Chakra UI, Ant Design",
      customization: 1,
      effort: 1,
      desc: "すぐに開発を始められる。独自性は薄くなりがち。",
      tags: ["管理画面", "MVP"],
    },
    {
      title: "Headless UI",
      examples: "Radix UI, React Aria",
      customization: 3,
      effort: 2,
      desc: "見た目は自由。振る舞いとa11yをライブラリに任せる。",
      tags: ["ToC", "長期運用"],
    },
    {
      title: "ハイブリッド",
      examples: "Headless + 独自",
      customization: 3,
      effort: 3,
      desc: "基本部品はHeadless、ドメイン部品は独自開発。",
      tags: ["中〜大規模"],
    },
    {
      title: "フルスクラッチ",
      examples: "SmartHR UI, デジタル庁DS",
      customization: 4,
      effort: 4,
      desc: "100%自社の設計思想。構築・維持コストは最大。",
      tags: ["独自性重視", "大規模"],
    },
  ];

  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Spectrum bar */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 16, padding: "0 8px" }}>
          <span style={{ fontSize: 10, color: "#a1a1aa", whiteSpace: "nowrap" }}>低コスト / 低自由度</span>
          <div style={{ flex: 1, height: 2, background: "linear-gradient(to right, #e4e4e7, #18181b)", margin: "0 12px", borderRadius: 1 }} />
          <span style={{ fontSize: 10, color: "#a1a1aa", whiteSpace: "nowrap" }}>高コスト / 高自由度</span>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", gap: 10 }}>
          {strategies.map((s) => (
            <div key={s.title} style={cardStyle}>
              <div style={titleStyle}>{s.title}</div>
              <div style={descStyle}>{s.desc}</div>
              <div style={exampleStyle}>{s.examples}</div>
              <div style={{ marginTop: 8 }}>
                {s.tags.map((t) => (
                  <span key={t} style={tagStyle(false)}>{t}</span>
                ))}
              </div>
              {/* Bars */}
              <div style={{ marginTop: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 9, color: "#a1a1aa", width: 36 }}>自由度</span>
                  <div style={{ flex: 1, height: 4, background: "#f4f4f5", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ width: `${s.customization * 25}%`, height: "100%", background: "#18181b", borderRadius: 2 }} />
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 9, color: "#a1a1aa", width: 36 }}>コスト</span>
                  <div style={{ flex: 1, height: 4, background: "#f4f4f5", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ width: `${s.effort * 25}%`, height: "100%", background: "#a1a1aa", borderRadius: 2 }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Caption text="構築戦略の4パターン: コストと自由度のトレードオフ" />
    </IllustrationFrame>
  );
}
