import HistoryCard from "@/components/HistoryCard";
import Loading from "@/components/ui/Loading";
import NoNetwork from "@/components/ui/NoNetwork";
import ThemedView from "@/components/ui/ThemedView";
import { useGlobalState } from "@/hooks/use-global-state";
import { fetchHistory } from "@/services/history.service";
import { THistory } from "@/types/stock.type";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

const History = () => {
  const { isConnected } = useGlobalState();
  const [history, setHistory] = useState<THistory[]>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    const { data, error } = await fetchHistory();
    if (!error) {
      setHistory(data as THistory[]);
    }
    setLoading(false);
    console.log(error?.message);
  };
  if (!isConnected) return <NoNetwork />;
  if (loading) return <Loading />;
  return (
    <ThemedView>
      <FlatList
        data={history}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <HistoryCard stock={item} />}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
};

export default History;
