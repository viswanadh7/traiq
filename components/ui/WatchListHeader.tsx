import React from "react";
import { StyleSheet } from "react-native";
import Typo from "./Typo";

type WatchListHeaderProps = {
  date: Date;
};
const WatchListHeader = ({ date }: WatchListHeaderProps) => {
  return (
    <Typo styles={styles.listHeader}>
      Watchlist updated on{" "}
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </Typo>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default WatchListHeader;
