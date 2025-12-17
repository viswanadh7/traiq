import { useGlobalState } from "@/hooks/use-global-state";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ThemedViewProps = {
  children: ReactNode;
};

const ThemedView = ({ children }: ThemedViewProps) => {
  const { theme } = useGlobalState();
  return (
    <SafeAreaView style={[styles.view, { backgroundColor: theme.background }]}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default ThemedView;
