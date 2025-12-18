import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import ThemedView from "./ThemedView";

const Loading = () => {
  return (
    <ThemedView>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={50} />
      </View>
    </ThemedView>
  );
};
const styles = StyleSheet.create({
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Loading;
