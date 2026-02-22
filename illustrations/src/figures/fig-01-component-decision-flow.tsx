import { Node, Edge } from "@xyflow/react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { FlowDiagram } from "../shared/FlowDiagram";
import { Caption } from "../shared/Caption";

const cx = 260;

const nodes: Node[] = [
  {
    id: "q1",
    type: "custom",
    position: { x: cx, y: 0 },
    data: { label: "2回以上使う？", sub: "複数画面で同じUIが登場するか", variant: "decision" },
  },
  {
    id: "r1",
    type: "custom",
    position: { x: cx + 260, y: 10 },
    data: { label: "コンポーネント化しない", sub: "その場で直接作る", variant: "result", width: 180 },
  },
  {
    id: "q2",
    type: "custom",
    position: { x: cx, y: 120 },
    data: { label: "デザイン統一が必要？", sub: "見た目やふるまいを揃えたいか", variant: "decision" },
  },
  {
    id: "r2",
    type: "custom",
    position: { x: cx + 260, y: 130 },
    data: { label: "コンポーネント化しない", sub: "共通化のコストに見合わない", variant: "result", width: 180 },
  },
  {
    id: "r3",
    type: "custom",
    position: { x: cx, y: 240 },
    data: { label: "コンポーネント化する", sub: "再利用可能な部品として設計", variant: "result", width: 200 },
  },
];

const edges: Edge[] = [
  { id: "q1-r1", source: "q1", target: "r1", sourceHandle: "right", targetHandle: "left", label: "No" },
  { id: "q1-q2", source: "q1", target: "q2", label: "Yes" },
  { id: "q2-r2", source: "q2", target: "r2", sourceHandle: "right", targetHandle: "left", label: "No" },
  { id: "q2-r3", source: "q2", target: "r3", label: "Yes" },
];

export default function Fig01() {
  return (
    <IllustrationFrame title="コンポーネント化の判断フロー">
      <FlowDiagram nodes={nodes} edges={edges} height={320} />
      <Caption text="コンポーネント化の判断フロー" />
    </IllustrationFrame>
  );
}
