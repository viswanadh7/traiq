import StockCard from "@/components/StockCard";
import ThemedView from "@/components/ui/ThemedView";
import supabase from "@/supabase";
import { TStock } from "@/types/stock.type";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

const WatchList = () => {
  const [stocks, setStocks] = useState<TStock[]>();

  useEffect(() => {
    getStocks();
  }, []);

  const getStocks = async () => {
    const { data, error } = await supabase.from("stocks").select("*");
    if (error) {
      console.log(error);
    }
    setStocks(data as TStock[]);
  };
  return (
    <ThemedView>
      <FlatList
        data={stocks}
        renderItem={({ item, index }) => <StockCard key={index} stock={item} />}
      />
    </ThemedView>
  );
};

export default WatchList;
