import { useGlobalState } from "@/hooks/use-global-state";
import { Tabs } from "expo-router";
import { InfoIcon, ListHeartIcon, RssSimpleIcon } from "phosphor-react-native";
import React from "react";
import { Text } from "react-native";

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
            <Text
              style={{
                color: focused ? theme.text : theme.tabIconDefault,
                fontSize: 12,
              }}
            >
              Feed
            </Text>
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
            <Text
              style={{
                color: focused ? theme.text : theme.tabIconDefault,
                fontSize: 12,
              }}
            >
              WatchList
            </Text>
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
            <Text
              style={{
                color: focused ? theme.text : theme.tabIconDefault,
                fontSize: 12,
              }}
            >
              Info
            </Text>
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
