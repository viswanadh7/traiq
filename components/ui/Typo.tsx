import { useGlobalState } from "@/hooks/use-global-state";
import React, { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

type TypoProps = {
  children: ReactNode;
  styles?: StyleProp<TextStyle>;
};

const Typo = ({ children, styles }: TypoProps) => {
  const { theme } = useGlobalState();
  return <Text style={[styles, { color: theme.text }]}>{children}</Text>;
};

export default Typo;
