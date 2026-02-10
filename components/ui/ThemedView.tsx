import { useGlobalState } from "@/hooks/use-global-state";
import React, { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ThemedViewProps = {
  children: ReactNode;
  paddingHorizontal?: number;
};

const ThemedView = ({ children, paddingHorizontal }: ThemedViewProps) => {
  const { theme } = useGlobalState();
  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: theme.background,
        paddingHorizontal: paddingHorizontal ?? 20,
      }}
    >
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default ThemedView;
