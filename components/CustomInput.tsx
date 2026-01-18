import { useGlobalState } from "@/hooks/use-global-state";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type CustomInputProps = {
  label: string;
  error?: string;
  icon?: React.ReactNode;
} & TextInputProps;
const CustomInput = ({ label, error, icon, ...rest }: CustomInputProps) => {
  const { theme } = useGlobalState();
  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { borderColor: theme.icon }]}>
        {icon}
        <TextInput
          {...rest}
          style={[styles.input, { color: theme.text }]}
          placeholderTextColor={theme.icon}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    gap: 10,
  },
  input: {
    fontSize: 18,
    width: "90%",
  },
  error: {
    marginTop: 5,
    color: "#FF2C2C",
  },
});

export default CustomInput;
