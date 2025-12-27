export type TNews = {
  id: number;
  title: string;
  description: string;
  link: string;
  image_url: string;
  created_at: string;
};

export type TNewsData = Omit<TNews, "id" | "created_at">;
