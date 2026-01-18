import React from "react";
import { StyleSheet, View } from "react-native";
import Typo from "./Typo";

const EmptyWatchList = () => {
  return (
    <View style={styles.view}>
      <Typo styles={styles.text}>Watchlist is empty</Typo>
      <Typo>Stay tuned, we will update the watchlist soon</Typo>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 300,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 5,
    letterSpacing: 0.8,
  },
});

export default EmptyWatchList;
