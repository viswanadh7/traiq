import Typo from "@/components/ui/Typo";
import { useGlobalState } from "@/hooks/use-global-state";
import { Tabs } from "expo-router";
import { InfoIcon, ListHeartIcon, RssSimpleIcon } from "phosphor-react-native";
import React from "react";

const TabLayout = () => {
  const { theme } = useGlobalState();
  return (
    <Tabs
      initialRouteName="index"
      backBehavior="none"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarLabel: ({ focused }) => (
            <Typo
              style={{
                color: focused ? theme.text : theme.tabIconDefault,
                fontSize: 12,
              }}
            >
              Feed
            </Typo>
          ),
          title: "Feed",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <RssSimpleIcon
              size={30}
              color={focused ? theme.text : theme.tabIconDefault}
              weight="thin"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => (
            <Typo
              style={{
                color: focused ? theme.text : theme.tabIconDefault,
                fontSize: 12,
              }}
            >
              WatchList
            </Typo>
          ),
          title: "WatchList",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ListHeartIcon
              size={30}
              color={focused ? theme.text : theme.tabIconDefault}
              weight="thin"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          tabBarLabel: ({ focused }) => (
            <Typo
              style={{
                color: focused ? theme.text : theme.tabIconDefault,
                fontSize: 12,
              }}
            >
              Info
            </Typo>
          ),
          title: "Info",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <InfoIcon
              size={30}
              color={focused ? theme.text : theme.tabIconDefault}
              weight="thin"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
