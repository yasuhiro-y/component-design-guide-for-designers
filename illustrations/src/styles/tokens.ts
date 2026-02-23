export const color = {
  bg: "#fafafa",
  surface: "#ffffff",
  text: "#09090b",
  textSecondary: "#3f3f46",
  textTertiary: "#52525b",
  border: "#e4e4e7",
  borderLight: "#f4f4f5",

  accent: "#18181b",
  accentLight: "#f4f4f5",
  accentMuted: "#3f3f46",

  info: "#3f3f46",
  infoLight: "#f4f4f5",
  success: "#18181b",
  successLight: "#f4f4f5",
  warning: "#52525b",
  warningLight: "#fafafa",
  error: "#18181b",
  errorLight: "#f4f4f5",

  good: "#18181b",
  goodLight: "#f4f4f5",
  bad: "#3f3f46",
  badLight: "#fafafa",

  nodeAccentBlue: "#18181b",
  nodeAccentGreen: "#52525b",
  nodeAccentOrange: "#3f3f46",
  nodeAccentRed: "#52525b",
  nodeAccentPurple: "#3f3f46",

  semantic: {
    info: "#3b82f6",
    infoLight: "#eff6ff",
    success: "#22c55e",
    successLight: "#f0fdf4",
    warning: "#f59e0b",
    warningLight: "#fffbeb",
    error: "#ef4444",
    errorLight: "#fef2f2",
  },
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const fontSize = {
  xs: 11,
  sm: 12,
  md: 13,
  lg: 15,
  xl: 18,
  xxl: 22,
} as const;

export const radius = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  full: 9999,
} as const;

export const font = {
  sans: '"Inter", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: '"SF Mono", "Fira Code", Menlo, monospace',
  featureSettings: '"palt", "cv02", "cv03", "cv04", "cv11"',
} as const;

export const iconSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const FRAME_WIDTH = 800;
export const FRAME_PADDING = 40;
export const CONTENT_WIDTH = FRAME_WIDTH - FRAME_PADDING * 2;
