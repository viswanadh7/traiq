import StockCard from "@/components/StockCard";
import EmptyWatchList from "@/components/ui/EmptyWatchList";
import NoNetwork from "@/components/ui/NoNetwork";
import ThemedView from "@/components/ui/ThemedView";
import WatchListHeader from "@/components/ui/WatchListHeader";
import WatchListLoading from "@/components/WatchListLoading";
import { useGlobalState } from "@/hooks/use-global-state";
import supabase from "@/supabase";
import { TStock } from "@/types/stock.type";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

const WatchList = () => {
  const { isConnected } = useGlobalState();
  const [stocks, setStocks] = useState<TStock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getStocks();
  }, []);

  const getStocks = async () => {
    const { data, error } = await supabase.from("stocks").select("*");
    if (error) {
      console.log(error);
    }
    setStocks(data as TStock[]);
    setLoading(false);
  };

  if (!isConnected) return <NoNetwork />;
  if (loading) return <WatchListLoading />;

  return (
    <ThemedView paddingHorizontal={0}>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        data={stocks}
        renderItem={({ item }) => <StockCard stock={item} />}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyWatchList />}
        ListHeaderComponent={
          stocks.length ? (
            <WatchListHeader date={stocks?.[0].created_at} />
          ) : null
        }
      />
    </ThemedView>
  );
};

export default WatchList;
