import { useGlobalState } from "@/hooks/use-global-state";
import { THistory } from "@/types/stock.type";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Divider from "./ui/Divider";
import Typo from "./ui/Typo";

type HistoryCardProps = {
  stock: THistory;
};
const HistoryCard = ({ stock }: HistoryCardProps) => {
  const { theme } = useGlobalState();

  const STATUS_MAP = {
    TARGET: { text: "TARGET HIT", color: "#16a34a" },
    STOP: { text: "STOP LOSS", color: "#dc2626" },
    ACTIVE: { text: "ACTIVE", color: "#0047AB" },
    CLOSED: { text: "CLOSED", color: "#6b7280" },
  };

  const getStatus = () => {
    if (stock.isTargetHit) return STATUS_MAP.TARGET;
    if (stock.isStopLossHit) return STATUS_MAP.STOP;
    if (stock.isActive) return STATUS_MAP.ACTIVE;
    return STATUS_MAP.CLOSED;
  };
  const status = getStatus();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.tabIconDefault,
        },
      ]}
    >
      <View style={styles.topRow}>
        <View>
          <Typo styles={styles.symbol}>{stock.symbol}</Typo>
          <Typo styles={styles.price}>₹ {stock.price}</Typo>
        </View>

        <View style={[styles.statusChip, { backgroundColor: status.color }]}>
          <Text style={styles.statusText}>{status.text}</Text>
        </View>
      </View>

      <Divider />

      <View style={styles.levelsContainer}>
        <View style={styles.levelBox}>
          <Typo styles={styles.levelLabel}>ENTRY</Typo>
          <Typo styles={styles.levelValue}>{stock.entry}</Typo>
        </View>

        <View style={styles.levelBox}>
          <Typo styles={styles.levelLabel}>TARGET</Typo>
          <Text style={[styles.levelValue, styles.target]}>{stock.target}</Text>
        </View>

        <View style={styles.levelBox}>
          <Typo styles={styles.levelLabel}>STOP LOSS</Typo>
          <Text style={[styles.levelValue, styles.stopLoss]}>
            {stock.stopLoss}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 18,
    marginVertical: 10,
    borderWidth: 0.5,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  symbol: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1,
  },

  price: {
    marginTop: 2,
    fontSize: 18,
    opacity: 0.6,
    fontWeight: "500",
  },

  statusChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  levelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  levelBox: {
    flex: 1,
    alignItems: "center",
  },

  levelLabel: {
    fontSize: 11,
    opacity: 0.6,
    fontWeight: "600",
    letterSpacing: 0.6,
  },

  levelValue: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "700",
  },

  target: {
    color: "#16a34a",
  },

  stopLoss: {
    color: "#dc2626",
  },
});

export default HistoryCard;
