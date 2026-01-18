import React from "react";
import { StyleSheet, View } from "react-native";
import ThemedView from "./ThemedView";
import Typo from "./Typo";

const NoNetwork = () => {
  return (
    <ThemedView>
      <View style={styles.view}>
        <Typo styles={styles.text}>No Network!</Typo>
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
  text: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 5,
    letterSpacing: 0.8,
  },
});

export default NoNetwork;
