import React from "react";
import NewsCardSkeleton from "./ui/NewsCardSkeleton";
import ThemedView from "./ui/ThemedView";

const FeedLoading = ({ noOfCards }: { noOfCards?: number }) => {
  return (
    <ThemedView>
      {Array.from({ length: noOfCards || 3 }).map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </ThemedView>
  );
};

export default FeedLoading;
