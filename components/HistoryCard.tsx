import { useGlobalState } from "@/hooks/use-global-state";
import { THistory } from "@/types/stock.type";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Typo from "./ui/Typo";

type HistoryCardProps = {
  stock: THistory;
};

const HistoryCard = ({ stock }: HistoryCardProps) => {
  const { theme } = useGlobalState();

  const getStatusConfig = () => {
    if (stock.isTargetHit) return theme.target;
    if (stock.isStopLossHit) return theme.stopLoss;
    if (stock.isActive) return theme.active;
    return theme.closed;
  };

  const status = getStatusConfig();

  const calculatePnL = () => {
    if (stock.isTargetHit) {
      return ((stock.target - stock.entry) / stock.entry) * 100;
    }
    if (stock.isStopLossHit) {
      return ((stock.stopLoss - stock.entry) / stock.entry) * 100;
    }
    return ((stock.price - stock.entry) / stock.entry) * 100;
  };

  const pnl = calculatePnL();
  const isProfitable = pnl >= 0;

  const pnlConfig = isProfitable ? theme.target : theme.stopLoss;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.card,
          },
        ]}
      >
        <View style={styles.headerSection}>
          <View style={styles.symbolRow}>
            <Typo styles={[styles.symbol, { color: theme.text }]}>
              {stock.symbol}
            </Typo>
            <View
              style={[
                styles.statusPill,
                { backgroundColor: status.background },
              ]}
            >
              <Text style={[styles.statusLabel, { color: status.color }]}>
                {stock.isTargetHit
                  ? "Target Hit"
                  : stock.isStopLossHit
                    ? "Stop Loss"
                    : stock.isActive
                      ? "Active"
                      : "Closed"}
              </Text>
            </View>
          </View>

          <View style={styles.priceSection}>
            <Typo styles={[styles.currentPrice, { color: theme.text }]}>
              ₹{stock.price}
            </Typo>
            <View
              style={[
                styles.pnlContainer,
                { backgroundColor: pnlConfig.background },
              ]}
            >
              <Text style={[styles.pnlText, { color: pnlConfig.color }]}>
                {isProfitable ? "▲" : "▼"} {Math.abs(pnl).toFixed(2)}%
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.levelsGrid,
            { backgroundColor: theme.levelBackground },
          ]}
        >
          <View style={styles.levelItem}>
            <View style={styles.levelHeader}>
              <View
                style={[
                  styles.levelDot,
                  { backgroundColor: theme.tabIconDefault },
                ]}
              />
              <Text style={[styles.levelTitle, { color: theme.icon }]}>
                Entry
              </Text>
            </View>
            <Typo styles={[styles.levelPrice, { color: theme.text }]}>
              ₹{stock.entry}
            </Typo>
          </View>

          <View
            style={[styles.verticalDivider, { backgroundColor: theme.divider }]}
          />

          <View style={styles.levelItem}>
            <View style={styles.levelHeader}>
              <View
                style={[
                  styles.levelDot,
                  { backgroundColor: theme.target.color },
                ]}
              />
              <Text style={[styles.levelTitle, { color: theme.icon }]}>
                Target
              </Text>
            </View>
            <Text style={[styles.levelPrice, { color: theme.target.color }]}>
              ₹{stock.target}
            </Text>
            <Text style={[styles.levelDiff, { color: theme.icon }]}>
              +{(((stock.target - stock.entry) / stock.entry) * 100).toFixed(1)}
              %
            </Text>
          </View>

          <View
            style={[styles.verticalDivider, { backgroundColor: theme.divider }]}
          />

          <View style={styles.levelItem}>
            <View style={styles.levelHeader}>
              <View
                style={[
                  styles.levelDot,
                  { backgroundColor: theme.stopLoss.color },
                ]}
              />
              <Text style={[styles.levelTitle, { color: theme.icon }]}>
                Stop Loss
              </Text>
            </View>
            <Text style={[styles.levelPrice, { color: theme.stopLoss.color }]}>
              ₹{stock.stopLoss}
            </Text>
            <Text style={[styles.levelDiff, { color: theme.icon }]}>
              {(((stock.stopLoss - stock.entry) / stock.entry) * 100).toFixed(
                1,
              )}
              %
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  card: {
    borderRadius: 24,
    padding: 24,
  },
  headerSection: {
    marginBottom: 12,
  },
  symbolRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  symbol: {
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 1,
  },
  statusPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  statusLabel: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  currentPrice: {
    fontSize: 22,
    fontWeight: "light",
    opacity: 0.6,
  },
  pnlContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pnlText: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  levelsGrid: {
    flexDirection: "row",
    borderRadius: 16,
    padding: 20,
    gap: 16,
  },
  levelItem: {
    flex: 1,
    alignItems: "center",
    gap: 8,
  },
  levelHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  levelDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  levelTitle: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  levelPrice: {
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: -0.2,
  },
  levelDiff: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 2,
  },
  verticalDivider: {
    width: 1,
  },
});

export default HistoryCard;
