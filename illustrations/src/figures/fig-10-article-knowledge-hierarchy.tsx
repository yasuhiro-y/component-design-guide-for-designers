import { Node, Edge } from "@xyflow/react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { FlowDiagram } from "../shared/FlowDiagram";

const layers = [
  { id: "principles", label: "1. 原則", sub: "再利用性・変更のしやすさ・拡張・関心の分離" },
  { id: "strategy", label: "2. 構築戦略", sub: "フルスクラッチ / 既存ライブラリ / Headless UI" },
  { id: "split", label: "3. コンポーネント分割", sub: "汎用 vs ドメイン・命名・分割基準" },
  { id: "reality", label: "4. 現実的な問題", sub: "ライフサイクル・破壊的変更・例外設計" },
  { id: "props", label: "5. 変数", sub: "Boolean / Enum / String / Element…" },
  { id: "layout", label: "6. レイアウト", sub: "padding vs margin・幅の振る舞い" },
  { id: "assets", label: "7. アセット", sub: "カラートークン・アイコン・SVG管理" },
];

const nodes: Node[] = layers.map((l, i) => ({
  id: l.id,
  type: "custom",
  position: { x: 180, y: i * 66 },
  data: {
    label: l.label,
    sub: l.sub,
    variant: "default" as const,
    width: 360,
  },
}));

const edges: Edge[] = layers.slice(0, -1).map((l, i) => ({
  id: `${l.id}-${layers[i + 1].id}`,
  source: l.id,
  target: layers[i + 1].id,
}));

export default function Fig10() {
  return (
    <IllustrationFrame title="本書の構成と知識の積み上げ">
      <FlowDiagram nodes={nodes} edges={edges} height={480} />
    </IllustrationFrame>
  );
}
