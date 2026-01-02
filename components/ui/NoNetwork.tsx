import React from "react";
import { StyleSheet, View } from "react-native";
import ThemedView from "./ThemedView";
import Typo from "./Typo";

const NoNetwork = () => {
  return (
    <ThemedView>
      <View style={styles.view}>
        <Typo>No Network!</Typo>
        <Typo>Please check your internet connection.</Typo>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  view: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NoNetwork;
