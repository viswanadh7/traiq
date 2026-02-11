import { useGlobalState } from "@/hooks/use-global-state";
import { Direction, TStock } from "@/types/stock.type";
import { calculatePotential, calculateRR } from "@/utils/calculations";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PatternChip from "./ui/PatternChip";
import Typo from "./ui/Typo";

type TStockCard = {
  stock: TStock;
};

const StockCard = ({ stock }: TStockCard) => {
  const { theme } = useGlobalState();
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
        },
      ]}
    >
      <View>
        <View style={styles.header}>
          <Typo styles={styles.symbol}>{stock.symbol}</Typo>
          <Typo styles={styles.price}>₹ {stock.price}</Typo>
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

          <Text
            style={{
              color:
                stock.changePercent > 0
                  ? theme.target.color
                  : theme.stopLoss.color,
            }}
          >
            {stock.changePercent}%
          </Text>
        </View>
      </View>
      <View
        style={[styles.priceContainer, { backgroundColor: theme.background }]}
      >
        <View>
          <Typo styles={styles.setupLabel}>ENTRY</Typo>
          <Typo styles={styles.setupPrice}>₹{stock.entry}</Typo>
        </View>
        <View
          style={[
            styles.verticalDivider,
            { backgroundColor: theme.tabIconDefault },
          ]}
        />
        <View>
          <Text style={[styles.setupLabel, { color: theme.target.color }]}>
            TARGET
          </Text>
          <Text style={[styles.setupPrice, { color: theme.target.color }]}>
            ₹{stock.target}
          </Text>
        </View>
        <View
          style={[
            styles.verticalDivider,
            { backgroundColor: theme.tabIconDefault },
          ]}
        />
        <View>
          <Text style={[styles.setupLabel, { color: theme.stopLoss.color }]}>
            STOP LOSS
          </Text>
          <Text style={[styles.setupPrice, { color: theme.stopLoss.color }]}>
            ₹{stock.stopLoss}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Typo>Potential:</Typo>
          <Text
            style={{
              color:
                stock.direction === Direction.LONG
                  ? theme.target.color
                  : theme.stopLoss.color,
            }}
          >
            {calculatePotential(stock.entry, stock.target)}%
          </Text>
        </View>
        <View
          style={[
            styles.verticalDivider,
            { backgroundColor: theme.tabIconDefault },
          ]}
        />
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Typo>R:R:</Typo>
          <Text style={{ color: theme.rr }}>
            1 : {calculateRR(stock.entry, stock.target, stock.stopLoss)}
          </Text>
        </View>
      </View>
      <Typo styles={styles.reason}>{stock.reason}</Typo>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4,
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
    fontWeight: "bold",
    letterSpacing: 0.8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  priceContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  setupLabel: {
    fontSize: 12,
    fontWeight: "thin",
    textAlign: "center",
  },
  setupPrice: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  reason: {
    fontSize: 13,
    fontWeight: "400",
    opacity: 0.6,
  },
  verticalDivider: {
    width: 0.5,
  },
});

export default StockCard;
