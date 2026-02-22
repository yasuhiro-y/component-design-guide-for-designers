import { Node, Edge } from "@xyflow/react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { FlowDiagram } from "../shared/FlowDiagram";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const cx = (CONTENT_WIDTH - 220) / 2;

const nodes: Node[] = [
  {
    id: "widgets",
    type: "custom",
    position: { x: cx, y: 0 },
    data: { label: "Widgets", sub: "ページ固有の組み立て", variant: "default", width: 220 },
  },
  {
    id: "features",
    type: "custom",
    position: { x: cx, y: 100 },
    data: { label: "Features", sub: "ビジネスロジックを含む機能単位", variant: "default", width: 220 },
  },
  {
    id: "uikit",
    type: "custom",
    position: { x: cx, y: 200 },
    data: { label: "UI Kit", sub: "汎用コンポーネント (Button, Input…)", variant: "default", width: 220 },
  },
];

const edges: Edge[] = [
  { id: "w-f", source: "widgets", target: "features", label: "uses" },
  { id: "f-u", source: "features", target: "uikit", label: "uses" },
];

export default function Fig02() {
  return (
    <IllustrationFrame>
      <FlowDiagram nodes={nodes} edges={edges} height={280} />
      <Caption text="Feature-Sliced Design の3層構造" />
    </IllustrationFrame>
  );
}
