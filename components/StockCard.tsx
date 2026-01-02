import { useGlobalState } from "@/hooks/use-global-state";
import { TStock } from "@/types/stock.type";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
          borderColor: theme.tabIconDefault,
        },
      ]}
    >
      <View style={styles.header}>
        <Typo styles={styles.symbol}>{stock.symbol}</Typo>
        <Text
          style={{
            color: stock.close.changePercent > 0 ? "#16A34A" : "#DC2626",
          }}
        >
          <Text style={styles.price}>₹ {stock.close.price}</Text> (
          {stock.close.changePercent}%)
        </Text>
      </View>
      <Typo>{stock.pattern}</Typo>
      <View style={styles.priceContainer}>
        <Typo styles={styles.prediction}>Entry: {stock.entry}</Typo>
        <Typo styles={styles.prediction}>Target: {stock.target}</Typo>
        <Typo styles={styles.prediction}>Stop loss: {stock.stopLoss}</Typo>
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
    padding: 10,
    marginVertical: 8,
    borderWidth: 0.5,
    borderRadius: 6,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  symbol: {
    fontSize: 20,
    fontWeight: "700",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
  },
  priceContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prediction: {
    fontSize: 15,
  },
  reason: {
    fontSize: 13,
    fontWeight: "400",
  },
});

export default StockCard;
