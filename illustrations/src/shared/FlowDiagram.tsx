import { CSSProperties } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FlowNode } from "./FlowNode";
import { CONTENT_WIDTH } from "../styles/tokens";

const nodeTypes = { custom: FlowNode };

interface FlowDiagramProps {
  nodes: Node[];
  edges: Edge[];
  height?: number;
  showBackground?: boolean;
}

const defaultEdgeOptions = {
  type: "straight" as const,
  style: { stroke: "#d4d4d8", strokeWidth: 1.2 },
  labelStyle: { fontSize: 12, fontWeight: 500, fill: "#71717a", fontFamily: '"Inter", sans-serif' },
};

export function FlowDiagram({
  nodes,
  edges,
  height = 400,
  showBackground = false,
}: FlowDiagramProps) {
  const style: CSSProperties = {
    width: CONTENT_WIDTH,
    height,
  };

  return (
    <ReactFlowProvider>
      <div style={style}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          defaultEdgeOptions={defaultEdgeOptions}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.15 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnScroll={false}
          panOnDrag={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
        >
          {showBackground && (
            <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#ddd" />
          )}
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
