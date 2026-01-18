import { useGlobalState } from "@/hooks/use-global-state";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Typo from "./Typo";

type SubmitButtonProps = {
  onPress: () => void;
  name: string;
};
const SubmitButton = ({ onPress, name }: SubmitButtonProps) => {
  const { theme } = useGlobalState();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: theme.submit }]}
    >
      <Typo styles={styles.buttonText}>{name}</Typo>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
});

export default SubmitButton;
