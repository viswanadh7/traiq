import React from "react";
import StockCardSkeleton from "./ui/StockCardSkeleton";
import ThemedView from "./ui/ThemedView";

const WatchListLoading = ({ noOfCards }: { noOfCards?: number }) => {
  return (
    <ThemedView>
      {Array.from({ length: noOfCards || 3 }).map((_, index) => (
        <StockCardSkeleton key={index} />
      ))}
    </ThemedView>
  );
};

export default WatchListLoading;
