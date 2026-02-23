import { CSSProperties } from "react";
import { ServiceIcon, ServiceIconName } from "./icons";

interface LibraryLabelProps {
  name: string;
  icon: ServiceIconName;
  style?: CSSProperties;
}

export function LibraryLabel({ name, icon, style }: LibraryLabelProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 11,
        color: "#52525b",
        marginBottom: 4,
        ...style,
      }}
    >
      <ServiceIcon name={icon} size={18} />
      <span>{name}</span>
    </div>
  );
}
