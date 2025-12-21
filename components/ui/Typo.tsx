import { useGlobalState } from "@/hooks/use-global-state";
import React, { ReactNode } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TypoProps = {
  children: ReactNode;
  styles?: StyleProp<TextStyle>;
} & TextProps;

const Typo = ({ children, styles, ...rest }: TypoProps) => {
  const { theme } = useGlobalState();
  return (
    <Text style={[styles, { color: theme.text }]} {...rest}>
      {children}
    </Text>
  );
};

export default Typo;
