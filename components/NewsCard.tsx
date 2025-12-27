import { ColorsType } from "@/styles/theme";
import { TNews } from "@/types/news.type";
import { CalendarDotsIcon } from "phosphor-react-native";
import React, { memo, useCallback } from "react";
import {
  Alert,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Typo from "./ui/Typo";

type TNewsCard = {
  news: TNews;
  theme: ColorsType;
};

const NewsCard = memo(({ news, theme }: TNewsCard) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(news.link);
    if (supported) {
      await Linking.openURL(news.link);
    } else {
      Alert.alert("Couldn't open the url");
    }
  }, [news.link]);

  const formattedDate = new Date(news.created_at!).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{ uri: news.image_url }} style={styles.image} />
        <View style={[styles.cardBody, { backgroundColor: theme.card }]}>
          <View style={styles.dateView}>
            <CalendarDotsIcon size={15} color={theme.text} />
            <Typo styles={styles.date}>{formattedDate}</Typo>
          </View>
          <Typo styles={styles.title}>{news.title}</Typo>
          <Typo numberOfLines={4}>{news.description}</Typo>
        </View>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 8,
  },
  cardBody: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  dateView: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 8,
    opacity: 0.6,
  },
  date: {
    fontSize: 13,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});

export default NewsCard;
