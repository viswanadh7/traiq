import { useGlobalState } from "@/hooks/use-global-state";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  const { theme } = useGlobalState();
  return (
    <Tabs
      screenOptions={{ tabBarStyle: { backgroundColor: theme.background } }}
    >
      <Tabs.Screen
        name="feed"
        options={{ title: "Feed", headerShown: false }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: "WatchList", headerShown: false }}
      />
      <Tabs.Screen
        name="info"
        options={{ title: "Info", headerShown: false }}
      />
    </Tabs>
  );
};

export default TabLayout;
