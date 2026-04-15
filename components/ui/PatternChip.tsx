import Typo from "./Typo";

type PatternChipProps = {
  text: string;
  color: string;
  backgroundColor: string;
};

const PatternChip = ({ text, color, backgroundColor }: PatternChipProps) => {
  return (
    <Typo
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
    </Typo>
  );
};

export default PatternChip;
