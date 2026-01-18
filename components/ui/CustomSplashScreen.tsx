import React from "react";
import { Image, StyleSheet, View } from "react-native";

const CustomSplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/traiq-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: 220,
    height: 220,
  },
});

export default CustomSplashScreen;
