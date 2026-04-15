import { useGlobalState } from "@/hooks/use-global-state";
import React, { ReactNode } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TypoProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

const Typo = ({ children, style, ...rest }: TypoProps) => {
  const { theme } = useGlobalState();

  const flattenedStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style || {};

  const hasColor = flattenedStyle?.color;

  return (
    <Text
      {...rest}
      allowFontScaling={false}
      style={[{ color: hasColor ?? theme.text }, style]}
    >
      {children}
    </Text>
  );
};

export default Typo;
