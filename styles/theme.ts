const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#21293b",
    background: "#f0f0f0ff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    card: "#fff",
    submit: "#6796faff",
    target: {
      background: "#d1fae5",
      color: "#16A34A",
    },
    stopLoss: {
      background: "#fee2e2",
      color: "#ef4444",
    },
    rr: "#FFAA33",
    divider: "#e2e8f0",
  },
  dark: {
    text: "#f5f8ff",
    background: "#161920",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    card: "#20242F",
    submit: "#3e7bffff",
    target: {
      background: "#064e3b",
      color: "#16A34A",
    },
    stopLoss: {
      background: "#490808",
      color: "#DC2626",
    },
    rr: "#f5ff3d",
    divider: "#374151",
  },
};

export type ColorsType = typeof Colors.dark;
