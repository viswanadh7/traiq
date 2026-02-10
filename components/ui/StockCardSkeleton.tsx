import { useGlobalState } from "@/hooks/use-global-state";
import React from "react";
import { StyleSheet, View } from "react-native";

const SkeletonBlock = ({
  width,
  height,
  backgroundColor,
  radius = 6,
}: {
  width?: number;
  height: number;
  backgroundColor?: string;
  radius?: number;
}) => (
  <View
    style={{
      width: width || "100%",
      height,
      borderRadius: radius,
      backgroundColor: backgroundColor || "#E0E0E0",
      opacity: 0.5,
    }}
  />
);

const StockCardSkeleton = () => {
  const { theme } = useGlobalState();

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <View style={styles.header}>
        <SkeletonBlock width={120} height={18} backgroundColor={theme.icon} />
        <SkeletonBlock width={70} height={18} backgroundColor={theme.icon} />
      </View>

      <View style={styles.header}>
        <SkeletonBlock
          width={100}
          height={20}
          radius={14}
          backgroundColor={theme.icon}
        />
        <SkeletonBlock width={50} height={16} backgroundColor={theme.icon} />
      </View>

      <View
        style={[styles.priceContainer, { backgroundColor: theme.background }]}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <React.Fragment key={index}>
            <View style={styles.priceBlock}>
              <SkeletonBlock width={50} height={12} />
              <SkeletonBlock width={65} height={16} />
            </View>

            {index !== 2 && (
              <View
                style={[
                  styles.verticalDivider,
                  { backgroundColor: theme.tabIconDefault },
                ]}
              />
            )}
          </React.Fragment>
        ))}
      </View>

      <View style={styles.bottomRow}>
        <SkeletonBlock width={130} height={14} />
        <View
          style={[
            styles.verticalDivider,
            { backgroundColor: theme.tabIconDefault, height: 16 },
          ]}
        />
        <SkeletonBlock width={90} height={14} />
      </View>

      <SkeletonBlock width={240} height={10} />
      <SkeletonBlock height={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 10,
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 24,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  priceBlock: {
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    flex: 1,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginVertical: 10,
  },
  verticalDivider: {
    width: 0.5,
    height: "100%",
  },
});

export default StockCardSkeleton;
