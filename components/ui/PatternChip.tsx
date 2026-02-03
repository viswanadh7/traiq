import { useGlobalState } from "@/hooks/use-global-state";
import { Text } from "react-native";

const PatternChip = ({ text }: { text: string }) => {
  const { theme } = useGlobalState();
  return (
    <Text
      style={{
        backgroundColor: theme.target.background,
        color: theme.target.color,
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
