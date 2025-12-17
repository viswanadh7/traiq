import { useGlobalState } from "@/hooks/use-global-state";
import { Tabs } from "expo-router";
import { InfoIcon, ListHeartIcon, RssSimpleIcon } from "phosphor-react-native";
import React from "react";

const TabLayout = () => {
  const { theme } = useGlobalState();
  return (
    <Tabs
      screenOptions={{ tabBarStyle: { backgroundColor: theme.background } }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <RssSimpleIcon size={30} color={color} weight="thin" />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "WatchList",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <ListHeartIcon size={30} color={color} weight="thin" />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Info",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <InfoIcon size={30} color={color} weight="thin" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
