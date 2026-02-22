import { CSSProperties, ReactNode } from "react";
import { color, fontSize, space, radius } from "../styles/tokens";

interface Column {
  label: string;
  children: ReactNode;
}

interface ComparisonLayoutProps {
  columns: Column[];
  gap?: number;
}

export function ComparisonLayout({ columns, gap = space.md }: ComparisonLayoutProps) {
  const containerStyle: CSSProperties = {
    display: "flex",
    gap,
  };

  const columnStyle: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: space.sm,
  };

  return (
    <div style={containerStyle}>
      {columns.map((col, i) => {
        const labelStyle: CSSProperties = {
          fontSize: fontSize.xs,
          fontWeight: 500,
          color: color.textSecondary,
          letterSpacing: "0.04em",
          textTransform: "uppercase" as const,
        };

        const bodyStyle: CSSProperties = {
          background: color.bg,
          borderRadius: radius.lg,
          padding: space.lg,
          flex: 1,
          border: `1px solid ${color.border}`,
        };

        return (
          <div key={i} style={columnStyle}>
            <span style={labelStyle}>{col.label}</span>
            <div style={bodyStyle}>{col.children}</div>
          </div>
        );
      })}
    </div>
  );
}
