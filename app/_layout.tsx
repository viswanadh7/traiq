import CustomSplashScreen from "@/components/ui/CustomSplashScreen";
import Provider from "@/context";
import { useGlobalState } from "@/hooks/use-global-state";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";

function StackLayout() {
  const { session, loading } = useGlobalState();
  if (loading) {
    return <CustomSplashScreen />;
  }
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      {session ? (
        <Stack.Screen name="(tabs)" />
      ) : (
        <>
          <Stack.Screen name="signin/index" />
          <Stack.Screen name="signup/index" />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  StatusBar.setBarStyle("default");
  return (
    <Provider>
      <StackLayout />
      <Toast />
    </Provider>
  );
}
