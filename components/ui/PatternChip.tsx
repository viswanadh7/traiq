import { Text } from "react-native";

type PatternChipProps = {
  text: string;
  color: string;
  backgroundColor: string;
};

const PatternChip = ({ text, color, backgroundColor }: PatternChipProps) => {
  return (
    <Text
      style={{
        backgroundColor: backgroundColor,
        color: color,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 20,
        maxWidth: "80%",
      }}
    >
      {text}
    </Text>
  );
};

export default PatternChip;
