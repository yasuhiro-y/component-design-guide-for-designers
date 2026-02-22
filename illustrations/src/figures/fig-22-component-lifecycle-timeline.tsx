import { Node, Edge } from "@xyflow/react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { FlowDiagram } from "../shared/FlowDiagram";

const phases = [
  { id: "draft", label: "Draft", sub: "検討中・実験的" },
  { id: "stable", label: "Stable", sub: "本番利用OK" },
  { id: "deprecated", label: "Deprecated", sub: "非推奨・移行中" },
  { id: "removed", label: "Removed", sub: "完全削除" },
];

const nodes: Node[] = phases.map((p, i) => ({
  id: p.id,
  type: "custom",
  position: { x: i * 170, y: 30 },
  data: {
    label: p.label,
    sub: p.sub,
    variant: (i === 0 ? "default" : i === phases.length - 1 ? "result" : "default") as "default" | "result",
    width: 140,
  },
}));

const edges: Edge[] = phases.slice(0, -1).map((p, i) => ({
  id: `${p.id}-${phases[i + 1].id}`,
  source: p.id,
  sourceHandle: "right",
  target: phases[i + 1].id,
  targetHandle: "left",
}));

export default function Fig22() {
  return (
    <IllustrationFrame title="コンポーネントのライフサイクル">
      <FlowDiagram nodes={nodes} edges={edges} height={140} />
    </IllustrationFrame>
  );
}
