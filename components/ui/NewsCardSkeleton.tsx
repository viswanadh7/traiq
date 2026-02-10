import { useGlobalState } from "@/hooks/use-global-state";
import React from "react";
import { StyleSheet, View } from "react-native";

const NewsCardSkeleton = () => {
  const { theme } = useGlobalState();
  const skeletonColor = theme.icon;

  return (
    <View style={styles.card}>
      <View style={[styles.image, { backgroundColor: skeletonColor }]} />

      <View style={[styles.cardBody, { backgroundColor: theme.card }]}>
        <View style={styles.dateView}>
          <View style={[styles.dateIcon, { backgroundColor: skeletonColor }]} />
          <View style={[styles.dateText, { backgroundColor: skeletonColor }]} />
        </View>

        <View style={[styles.title, { backgroundColor: skeletonColor }]} />

        <View style={[styles.descLine, { backgroundColor: skeletonColor }]} />
        <View style={[styles.descLine, { backgroundColor: skeletonColor }]} />
        <View
          style={[styles.descLineShort, { backgroundColor: skeletonColor }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 8,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    opacity: 0.6,
  },
  cardBody: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  dateView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dateIcon: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 6,
  },
  dateText: {
    width: 120,
    height: 12,
    borderRadius: 4,
  },
  title: {
    width: "80%",
    height: 18,
    borderRadius: 4,
    marginBottom: 10,
  },
  descLine: {
    width: "100%",
    height: 12,
    borderRadius: 4,
    marginBottom: 6,
  },
  descLineShort: {
    width: "70%",
    height: 12,
    borderRadius: 4,
  },
});

export default NewsCardSkeleton;
