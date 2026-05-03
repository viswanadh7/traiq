import Intraday from "@/screens/Intraday";
import WatchList from "@/screens/Watchlist";
import * as React from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useGlobalState } from "@/hooks/use-global-state";
import ThemedView from "@/components/ui/ThemedView";

const renderScene = SceneMap({
  watchlist: WatchList,
  intraday: Intraday,
});

const routes = [
  { key: "intraday", title: "Intraday" },
  { key: "watchlist", title: "Watchlist" },
];

export default function App() {
  const layout = useWindowDimensions();
  const { theme } = useGlobalState();
  const [index, setIndex] = React.useState(0);

  return (
    <ThemedView paddingHorizontal={0}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{
              backgroundColor: theme.background,
              elevation: 0,
              shadowOpacity: 0,
            }}
            indicatorStyle={{
              backgroundColor: theme.text,
              height: 2,
              borderRadius: 2,
            }}
            activeColor={theme.text}
            inactiveColor={theme.icon}
          />
        )}
      />
    </ThemedView>
  );
}
