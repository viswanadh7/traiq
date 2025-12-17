import { Colors, ColorsType } from "@/styles/theme";
import { createContext, ReactNode } from "react";
import { useColorScheme } from "react-native";

type TContext = {
  theme: ColorsType;
};

export const Context = createContext<TContext>({} as TContext);

const Provider = ({ children }: { children: ReactNode }) => {
  const theme = useColorScheme() === "dark" ? Colors.dark : Colors.light;

  return <Context.Provider value={{ theme }}>{children}</Context.Provider>;
};

export default Provider;
