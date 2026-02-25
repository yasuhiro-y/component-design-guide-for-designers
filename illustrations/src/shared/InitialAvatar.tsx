import { CSSProperties } from "react";

const palette = [
  "#bfdbfe", // soft blue
  "#bbf7d0", // soft green
  "#ddd6fe", // soft purple
  "#fed7aa", // soft orange
  "#fecdd3", // soft pink
] as const;

const textColors: Record<string, string> = {
  "#bfdbfe": "#1e40af",
  "#bbf7d0": "#166534",
  "#ddd6fe": "#5b21b6",
  "#fed7aa": "#9a3412",
  "#fecdd3": "#9f1239",
};

function pickColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return palette[Math.abs(hash) % palette.length];
}

interface InitialAvatarProps {
  name: string;
  size?: number;
}

export function InitialAvatar({ name, size = 36 }: InitialAvatarProps) {
  const bg = pickColor(name);
  const initial = name.charAt(0);
  const fontSize = Math.round(size * 0.4);

  const style: CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize,
    fontWeight: 700,
    color: textColors[bg] || "#3f3f46",
    flexShrink: 0,
    lineHeight: 1,
  };

  return <div style={style}>{initial}</div>;
}
