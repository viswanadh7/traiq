import Provider from "@/context";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
