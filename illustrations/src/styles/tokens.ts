export const color = {
  bg: "#fafafa",
  surface: "#ffffff",
  text: "#09090b",
  textSecondary: "#71717a",
  textTertiary: "#a1a1aa",
  border: "#e4e4e7",
  borderLight: "#f4f4f5",

  accent: "#18181b",
  accentLight: "#f4f4f5",
  accentMuted: "#71717a",

  info: "#71717a",
  infoLight: "#f4f4f5",
  success: "#18181b",
  successLight: "#f4f4f5",
  warning: "#a1a1aa",
  warningLight: "#fafafa",
  error: "#18181b",
  errorLight: "#f4f4f5",

  good: "#18181b",
  goodLight: "#f4f4f5",
  bad: "#71717a",
  badLight: "#fafafa",

  nodeAccentBlue: "#18181b",
  nodeAccentGreen: "#52525b",
  nodeAccentOrange: "#71717a",
  nodeAccentRed: "#a1a1aa",
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

export const FRAME_WIDTH = 800;
export const FRAME_PADDING = 40;
export const CONTENT_WIDTH = FRAME_WIDTH - FRAME_PADDING * 2;
