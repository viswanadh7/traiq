import { useGlobalState } from "@/hooks/use-global-state";
import { Direction } from "@/types/stock.type";
import React from "react";
import { StyleSheet, View } from "react-native";
import Typo from "./ui/Typo";
import PatternChip from "./ui/PatternChip";

type TIntradaySignal = {
  symbol: string;
  direction: Direction;
  pattern: string;

  entry_price: number;
  stop_loss: number;
  target: number;
  rr_ratio: number;

  session_window: string;
  confluence_score: number;
};

const IntradayCard = ({ stock }: { stock: TIntradaySignal }) => {
  const { theme } = useGlobalState();
  const isLong = stock.direction === Direction.LONG;

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <View style={styles.topRow}>
        <Typo style={styles.symbol}>{stock.symbol}</Typo>

        <View
          style={[
            styles.badge,
            {
              backgroundColor: isLong
                ? theme.target.background
                : theme.stopLoss.background,
            },
          ]}
        >
          <Typo
            style={{
              color: isLong ? theme.target.color : theme.stopLoss.color,
              fontWeight: "700",
              fontSize: 12,
            }}
          >
            {stock.direction}
          </Typo>
        </View>
      </View>

      <View style={styles.header}>
        <PatternChip
          text={stock.pattern}
          color={
            stock.direction === Direction.LONG
              ? theme.target.color
              : theme.stopLoss.color
          }
          backgroundColor={
            stock.direction === Direction.LONG
              ? theme.target.background
              : theme.stopLoss.background
          }
        />

        <Typo style={{ opacity: 0.6 }}>{stock.session_window}</Typo>
      </View>

      <View style={[styles.strip, { backgroundColor: theme.background }]}>
        <View style={styles.cell}>
          <Typo style={styles.label}>ENTRY</Typo>
          <Typo style={styles.value}>₹{stock.entry_price}</Typo>
        </View>

        <View style={styles.cell}>
          <Typo style={[styles.label, { color: theme.target.color }]}>
            TARGET
          </Typo>
          <Typo style={[styles.value, { color: theme.target.color }]}>
            ₹{stock.target}
          </Typo>
        </View>

        <View style={styles.cell}>
          <Typo style={[styles.label, { color: theme.stopLoss.color }]}>
            STOP LOSS
          </Typo>
          <Typo style={[styles.value, { color: theme.stopLoss.color }]}>
            ₹{stock.stop_loss}
          </Typo>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Typo>R:R</Typo>
          <Typo style={{ color: theme.rr }}>1 : {stock.rr_ratio}</Typo>
        </View>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Typo>Confluence</Typo>
          <Typo style={{ color: theme.rr }}>{stock.confluence_score}/5</Typo>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 12,
    marginVertical: 8,
    gap: 10,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  symbol: {
    fontSize: 18,
    fontWeight: "800",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pattern: {
    fontWeight: "600",
  },
  strip: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 10,
  },
  cell: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 10,
  },
  value: {
    fontSize: 14,
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  confBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
});

export default IntradayCard;
