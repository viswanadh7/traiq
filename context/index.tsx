import { Colors, ColorsType } from "@/styles/theme";
import NetInfo from "@react-native-community/netinfo";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type TContext = {
  theme: ColorsType;
  isConnected: boolean | null;
};

export const Context = createContext<TContext>({} as TContext);

const Provider = ({ children }: { children: ReactNode }) => {
  const theme = useColorScheme() === "dark" ? Colors.dark : Colors.light;
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) =>
      setIsConnected(state.isConnected)
    );
    return () => unsubscribe();
  }, []);

  return (
    <Context.Provider value={{ theme, isConnected }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
