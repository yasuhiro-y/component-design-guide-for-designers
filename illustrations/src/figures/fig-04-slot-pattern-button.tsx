import { Node, Edge } from "@xyflow/react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { FlowDiagram } from "../shared/FlowDiagram";
import { Caption } from "../shared/Caption";

const nodes: Node[] = [
  {
    id: "button",
    type: "custom",
    position: { x: 260, y: 0 },
    data: { label: "Button", variant: "decision", width: 160 },
  },
  {
    id: "leading",
    type: "custom",
    position: { x: 60, y: 100 },
    data: { label: "leadingContent", sub: "スロット", variant: "default", width: 140 },
  },
  {
    id: "label",
    type: "custom",
    position: { x: 260, y: 100 },
    data: { label: "Label", sub: "テキスト", variant: "default", width: 140 },
  },
  {
    id: "trailing",
    type: "custom",
    position: { x: 460, y: 100 },
    data: { label: "trailingContent", sub: "スロット", variant: "default", width: 140 },
  },
  {
    id: "icon",
    type: "custom",
    position: { x: 0, y: 210 },
    data: { label: "Icon", variant: "result", width: 90 },
  },
  {
    id: "badge",
    type: "custom",
    position: { x: 120, y: 210 },
    data: { label: "Badge", variant: "result", width: 90 },
  },
  {
    id: "nothing",
    type: "custom",
    position: { x: 280, y: 210 },
    data: { label: "Nothing", sub: "空にもできる", variant: "result", width: 100 },
  },
  {
    id: "spinner",
    type: "custom",
    position: { x: 460, y: 210 },
    data: { label: "Spinner", variant: "result", width: 90 },
  },
];

const edges: Edge[] = [
  { id: "b-lead", source: "button", target: "leading" },
  { id: "b-label", source: "button", target: "label" },
  { id: "b-trail", source: "button", target: "trailing" },
  { id: "lead-icon", source: "leading", target: "icon", style: { strokeDasharray: "4 4" } },
  { id: "lead-badge", source: "leading", target: "badge", style: { strokeDasharray: "4 4" } },
  { id: "lead-nothing", source: "leading", target: "nothing", style: { strokeDasharray: "4 4" } },
  { id: "trail-spinner", source: "trailing", target: "spinner", style: { strokeDasharray: "4 4" } },
  { id: "trail-nothing", source: "trailing", target: "nothing", style: { strokeDasharray: "4 4" } },
];

export default function Fig04() {
  return (
    <IllustrationFrame>
      <FlowDiagram nodes={nodes} edges={edges} height={300} />
      <Caption text="Button のスロット構造" />
    </IllustrationFrame>
  );
}
