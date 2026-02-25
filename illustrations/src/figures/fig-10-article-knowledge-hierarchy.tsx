import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const layers = [
  { num: 1, label: "原則", sub: "再利用性・変更のしやすさ・拡張・関心の分離" },
  { num: 2, label: "構築戦略", sub: "フルスクラッチ / 既存ライブラリ / Headless UI" },
  { num: 3, label: "コンポーネント分割", sub: "汎用 vs ドメイン・命名・分割基準" },
  { num: 4, label: "現実的な問題", sub: "ライフサイクル・破壊的変更・例外設計" },
  { num: 5, label: "変数", sub: "Boolean / Enum / String / Element…" },
  { num: 6, label: "レイアウト", sub: "padding vs margin・幅の振る舞い" },
  { num: 7, label: "アセット", sub: "カラートークン・アイコン・SVG管理" },
];

export default function Fig10() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {layers.map((l) => (
            <div key={l.num} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "#18181b", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, flexShrink: 0,
              }}>
                {l.num}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#18181b" }}>{l.label}</div>
                <div style={{ fontSize: 11, color: "#52525b", marginTop: 2 }}>{l.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IllustrationFrame>
  );
}
