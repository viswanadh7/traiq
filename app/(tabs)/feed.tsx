import NewsCard from "@/components/NewsCard";
import Loading from "@/components/ui/Loading";
import ThemedView from "@/components/ui/ThemedView";
import { getLatestNews } from "@/services/news.service";
import { TNews } from "@/types/news.type";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

const Feed = () => {
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

  if (loading) {
    return <Loading />;
  }
  return (
    <ThemedView>
      <FlatList
        data={latestNews}
        renderItem={({ item }) => <NewsCard news={item} />}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
};

export default Feed;
