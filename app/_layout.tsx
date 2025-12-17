import Provider from "@/context";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

StatusBar.setBarStyle("default");
export default function RootLayout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
