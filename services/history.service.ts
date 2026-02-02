import supabase from "@/supabase";

export const fetchHistory = async () => {
  return await supabase.from("history").select("*");
};
