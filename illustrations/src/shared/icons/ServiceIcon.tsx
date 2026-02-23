import { CSSProperties } from "react";
import { SvgIcon } from "./SvgIcon";

import reactSvg from "../../../icons/react.svg?raw";
import figmaSvg from "../../../icons/figma.svg?raw";
import typescriptSvg from "../../../icons/typescript.svg?raw";
import shadcnSvg from "../../../icons/shadcn.svg?raw";
import radixSvg from "../../../icons/radix.svg?raw";
import chakraSvg from "../../../icons/chakra.svg?raw";
import githubSvg from "../../../icons/github.svg?raw";
import materialdesignSvg from "../../../icons/materialdesign.svg?raw";
import muiSvg from "../../../icons/mui.svg?raw";
import antdesignSvg from "../../../icons/antdesign.svg?raw";
import jetpackcomposeSvg from "../../../icons/jetpackcompose.svg?raw";
import swiftSvg from "../../../icons/swift.svg?raw";

const svgMap = {
  react: reactSvg,
  figma: figmaSvg,
  typescript: typescriptSvg,
  shadcn: shadcnSvg,
  radix: radixSvg,
  chakra: chakraSvg,
  github: githubSvg,
  materialdesign: materialdesignSvg,
  mui: muiSvg,
  antdesign: antdesignSvg,
  jetpackcompose: jetpackcomposeSvg,
  swift: swiftSvg,
} as const;

export type ServiceIconName = keyof typeof svgMap;

interface ServiceIconProps {
  name: ServiceIconName;
  size?: number;
  style?: CSSProperties;
}

export function ServiceIcon({ name, size = 16, style }: ServiceIconProps) {
  const svg = svgMap[name];
  if (!svg) return null;
  return <SvgIcon svg={svg} size={size} style={style} />;
}
