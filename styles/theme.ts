const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#f0f0f0ff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    card: "#fff",
    submit: "#6796faff",
    target: {
      background: "#d1fae5",
      color: "#10b981",
    },
    stopLoss: {
      background: "#fee2e2",
      color: "#ef4444",
    },
    active: {
      background: "#dbeafe",
      color: "#3b82f6",
    },
    closed: {
      background: "#f3f4f6",
      color: "#6b7280",
    },
    levelBackground: "#f8fafc",
    divider: "#e2e8f0",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    card: "#000000ff",
    submit: "#3e7bffff",
    target: {
      background: "#064e3b",
      color: "#10b981",
    },
    stopLoss: {
      background: "#7f1d1d",
      color: "#ef4444",
    },
    active: {
      background: "#1e3a8a",
      color: "#3b82f6",
    },
    closed: {
      background: "#374151",
      color: "#6b7280",
    },
    levelBackground: "#1f2937",
    divider: "#374151",
  },
};

export type ColorsType = typeof Colors.dark;
