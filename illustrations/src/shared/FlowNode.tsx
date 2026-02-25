import { CSSProperties, memo } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";

type FlowNodeVariant = "default" | "decision" | "result" | "group";

interface FlowNodeData {
  label: string;
  sub?: string;
  variant?: FlowNodeVariant;
  width?: number;
}

function FlowNodeInner({ data }: NodeProps & { data: FlowNodeData }) {
  const variant = data.variant ?? "default";

  const base: CSSProperties = {
    fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
    fontFeatureSettings: '"palt", "cv02", "cv03", "cv04", "cv11"',
    fontSize: 13,
    lineHeight: 1.55,
    minWidth: data.width ?? 120,
    maxWidth: data.width ?? 200,
    textAlign: "center",
  };

  const sub: CSSProperties = {
    fontSize: 11,
    color: "#3f3f46",
    marginTop: 3,
    fontWeight: 400,
  };

  if (variant === "decision") {
    return (
      <div
        style={{
          ...base,
          background: "#f4f4f5",
          border: "1.5px solid #3f3f46",
          borderRadius: 8,
          padding: "10px 18px",
        }}
      >
        <Handle type="target" position={Position.Top} />
        <div style={{ fontWeight: 700, color: "#18181b", fontSize: 13 }}>{data.label}</div>
        {data.sub && <div style={sub}>{data.sub}</div>}
        <Handle type="source" position={Position.Bottom} />
        <Handle type="source" position={Position.Right} id="right" />
        <Handle type="source" position={Position.Left} id="left" />
      </div>
    );
  }

  if (variant === "result") {
    return (
      <div
        style={{
          ...base,
          background: "#f4f4f5",
          border: "none",
          borderRadius: 8,
          padding: "10px 16px",
        }}
      >
        <Handle type="target" position={Position.Top} />
        <Handle type="target" position={Position.Left} id="left" />
        <div style={{ fontWeight: 700, color: "#3f3f46" }}>{data.label}</div>
        {data.sub && <div style={sub}>{data.sub}</div>}
        <Handle type="source" position={Position.Bottom} />
        <Handle type="source" position={Position.Right} id="right" />
      </div>
    );
  }

  if (variant === "group") {
    return (
      <div
        style={{
          ...base,
          background: "transparent",
          border: "1.5px dashed #d4d4d8",
          borderRadius: 12,
          padding: "8px 14px",
          minWidth: 160,
        }}
      >
        <Handle type="target" position={Position.Top} />
        <div
          style={{
            fontWeight: 700,
            fontSize: 12,
            color: "#52525b",
            letterSpacing: "0.02em",
          }}
        >
          {data.label}
        </div>
        {data.sub && (
          <div style={{ fontSize: 11, color: "#3f3f46", marginTop: 2 }}>
            {data.sub}
          </div>
        )}
        <Handle type="source" position={Position.Bottom} />
      </div>
    );
  }

  // default
  return (
    <div
      style={{
        ...base,
        background: "#fff",
        border: "1px solid #e4e4e7",
        borderRadius: 8,
        padding: "8px 16px",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} id="left" />
      <div style={{ fontWeight: 700, color: "#18181b" }}>{data.label}</div>
      {data.sub && <div style={sub}>{data.sub}</div>}
      <Handle type="source" position={Position.Bottom} />
      <Handle type="source" position={Position.Right} id="right" />
    </div>
  );
}

export const FlowNode = memo(FlowNodeInner);
