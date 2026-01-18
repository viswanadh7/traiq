import { Colors, ColorsType } from "@/styles/theme";
import supabase from "@/supabase";
import NetInfo from "@react-native-community/netinfo";
import { Session } from "@supabase/supabase-js";
import { router } from "expo-router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type TContext = {
  theme: ColorsType;
  isConnected: boolean | null;

  // auth
  session: Session | null;
  loading: boolean;
};

export const Context = createContext<TContext>({} as TContext);

const Provider = ({ children }: { children: ReactNode }) => {
  const theme = useColorScheme() === "dark" ? Colors.dark : Colors.light;
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) =>
      setIsConnected(state.isConnected)
    );
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !session) {
      router.replace("/signin");
    }
  }, [loading, session]);

  return (
    <Context.Provider value={{ theme, isConnected, session, loading }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
