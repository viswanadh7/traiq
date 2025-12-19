import { useGlobalState } from "@/hooks/use-global-state";
import React from "react";
import { View } from "react-native";

const Divider = () => {
  const { theme } = useGlobalState();
  return (
    <View
      style={{
        height: 1,
        backgroundColor: theme.icon,
        marginVertical: 12,
      }}
    />
  );
};

export default Divider;
