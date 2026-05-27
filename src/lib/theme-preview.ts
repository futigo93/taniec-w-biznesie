export const THEME_PREVIEW_KEY = "twb-theme-preview";

export const themePreviewOptions = [
  { id: "graphite-quiet", label: "Quiet" },
  { id: "graphite-balanced", label: "Balanced" },
  { id: "graphite-bold", label: "Bold" },
] as const;

export type ThemePreviewId = (typeof themePreviewOptions)[number]["id"];

export const DEFAULT_THEME_PREVIEW: ThemePreviewId = "graphite-balanced";
