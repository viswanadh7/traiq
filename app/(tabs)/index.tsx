import StockCard from "@/components/StockCard";
import ThemedView from "@/components/ui/ThemedView";
import { sampleData } from "@/constants/data";
import React from "react";
import { FlatList } from "react-native";

const WatchList = () => {
  return (
    <ThemedView>
      <FlatList
        data={sampleData}
        renderItem={({ item, index }) => <StockCard key={index} stock={item} />}
      />
    </ThemedView>
  );
};

export default WatchList;
