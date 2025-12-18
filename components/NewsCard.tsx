import { TNews } from "@/types/news.type";
import React, { memo } from "react";
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import Typo from "./ui/Typo";

type TNewsCard = {
  news: TNews;
};

const NewsCard = memo(({ news }: TNewsCard) => {
  const isDarkTheme = useColorScheme() === "dark";

  const handlePress = async () => {
    const supported = await Linking.canOpenURL(news.link);
    if (supported) {
      await Linking.openURL(news.link);
    } else {
      Alert.alert("Couldn't open the url");
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{ uri: news.image_url }} style={styles.image} />
        <View
          style={[
            styles.cardBody,
            { backgroundColor: isDarkTheme ? "#000000ff" : "#f0f0f0ff" },
          ]}
        >
          <Typo styles={styles.title}>{news.title}</Typo>
          <Typo styles={styles.description}>{news.description}</Typo>
        </View>
      </View>
    </TouchableOpacity>
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
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  description: {
    maxHeight: 80,
    textOverflow: "ellipsis",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});

export default NewsCard;
