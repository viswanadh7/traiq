import supabase from "@/supabase";
import { TNews } from "@/types/news.type";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY as string;
const API_URL = process.env.EXPO_PUBLIC_API_URL as string;
const URL = `${API_URL}?apikey=${API_KEY}`;

const fetchNewsFromAPI = async () => {
  const keywords = [
    "indian stock market",
    "indian economy",
    "stock trends",
    "market updates",
    "economic growth",
  ];
  let promises = [];
  for (let keyword of keywords) {
    promises.push(fetch(`${URL}&q=${encodeURIComponent(keyword)}`));
  }
  const res = await Promise.all(promises);
  const data = await Promise.all(res.map((item) => item.json()));
  return data.flatMap((item) => item.results);
};

const getLatestNewsFromDB = async (start: Date, end: Date) => {
  return await supabase
    .from("news")
    .select("*")
    .gte("created_at", start.toISOString())
    .lte("created_at", end.toISOString());
};

const uploadLatestNewsIntoDB = async (news: TNews[]) => {
  return await supabase.from("news").insert(news);
};

const removeOldNewsFromDB = async (old: Date) => {
  return await supabase.from("news").delete().lt("created_at", old);
};

export const getLatestNews = async () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);

  // fetch latest news from the database
  const { data, error: fetchError } = await getLatestNewsFromDB(start, end);
  if (fetchError) {
    console.log("Error while fetch news from database", fetchError);
    return;
  }
  // return latest news fetched from database
  if (data?.length) {
    return data;
  }
  // remove the old news from database
  await removeOldNewsFromDB(start);
  // if no news fetched from database, fetch the latest news from api
  const fetchedNews: TNews[] = await fetchNewsFromAPI();
  let filteredNews = [];
  for (let news of fetchedNews) {
    if (news.title && news.description && news.image_url && news.link) {
      filteredNews.push({
        title: news.title,
        description: news.description,
        link: news.link,
        image_url: news.image_url,
      });
    }
  }
  // upload latest news fetched from api to the database
  const { error: uploadError } = await uploadLatestNewsIntoDB(filteredNews);
  if (!uploadError) {
    return filteredNews;
  }
};
