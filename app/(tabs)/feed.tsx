import FeedLoading from "@/components/FeedLoading";
import NewsCard from "@/components/NewsCard";
import NoNetwork from "@/components/ui/NoNetwork";
import ThemedView from "@/components/ui/ThemedView";
import { useGlobalState } from "@/hooks/use-global-state";
import { getLatestNews } from "@/services/news.service";
import { TNews } from "@/types/news.type";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

const Feed = () => {
  const { theme, isConnected } = useGlobalState();
  const [latestNews, setLatestNews] = useState<TNews[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const news = await getLatestNews();
    setLatestNews(news);
    setLoading(false);
  };

  const RenderNews = useCallback(
    ({ item }: { item: TNews }) => <NewsCard news={item} theme={theme} />,
    [theme],
  );

  if (!isConnected) return <NoNetwork />;
  if (loading) return <FeedLoading />;

  return (
    <ThemedView>
      <FlatList
        data={latestNews}
        renderItem={RenderNews}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
      />
    </ThemedView>
  );
};

export default Feed;
