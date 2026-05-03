import IntradaySignalCard from "@/components/IntradayCard";
import EmptyWatchList from "@/components/ui/EmptyWatchList";
import NoNetwork from "@/components/ui/NoNetwork";
import ThemedView from "@/components/ui/ThemedView";
import WatchListLoading from "@/components/WatchListLoading";
import { useGlobalState } from "@/hooks/use-global-state";
import supabase from "@/supabase";
import { Signal } from "@/types/stock.type";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

const Intraday = () => {
  const { isConnected } = useGlobalState();
  const [stocks, setStocks] = useState<Signal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getStocks();
  }, []);

  const getStocks = async () => {
    const { data, error } = await supabase.from("signals").select("*");
    if (error) {
      console.log(error);
    }
    setStocks(data as Signal[]);
    setLoading(false);
  };

  if (!isConnected) return <NoNetwork />;
  if (loading) return <WatchListLoading />;

  return (
    <ThemedView paddingHorizontal={0}>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        data={stocks}
        renderItem={({ item }) => <IntradaySignalCard stock={item} />}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyWatchList />}
      />
    </ThemedView>
  );
};

export default Intraday;
