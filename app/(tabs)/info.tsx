import Divider from "@/components/ui/Divider";
import ThemedView from "@/components/ui/ThemedView";
import Typo from "@/components/ui/Typo";
import { useGlobalState } from "@/hooks/use-global-state";
import Constants from "expo-constants";
import { GithubLogoIcon } from "phosphor-react-native";
import React from "react";
import { Linking, Pressable, ScrollView, StyleSheet } from "react-native";

const Info = () => {
  const GITHUB_URL = process.env.EXPO_PUBLIC_GITHUB_URL as string;
  const appVersion = Constants.expoConfig?.version;
  const { theme } = useGlobalState();
  return (
    <ThemedView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Typo styles={styles.title}>TRAIQ</Typo>
        <Typo styles={styles.description}>
          TraiQ is a read-only market watchlist app that displays a curated list
          of stocks which may show notable price movement over the next 1 to 10
          trading days.
        </Typo>

        <Divider />

        <Typo styles={styles.heading}>What TraiQ Shows</Typo>
        <Typo styles={styles.text}>TraiQ displays:</Typo>
        <Typo styles={styles.bullet}>
          • A system-generated watchlist of stocks
        </Typo>
        <Typo styles={styles.bullet}>
          • Expected movement window ranging from 1 to 10 days
        </Typo>
        <Typo styles={styles.bullet}>
          • Directional bias such as bullish or momentum-based setups
        </Typo>
        <Typo styles={styles.bullet}>
          • Supporting context presented in a simple and readable format
        </Typo>
        <Typo styles={styles.bullet}>
          • Market-related news in the Feed tab for general awareness
        </Typo>
        <Typo styles={styles.text}>
          All data shown in the app is read-only.
        </Typo>

        <Divider />

        <Typo styles={styles.heading}>What TraiQ Does Not Do</Typo>
        <Typo styles={styles.bullet}>
          • Does not provide buy or sell instructions
        </Typo>
        <Typo styles={styles.bullet}>
          • Does not execute trades or connect to brokers
        </Typo>
        <Typo styles={styles.bullet}>
          • Does not guarantee accuracy or profits
        </Typo>
        <Typo styles={styles.bullet}>
          • Does not offer personalized financial advice
        </Typo>
        <Typo styles={styles.bullet}>
          • Does not allow users to modify or manage the watchlist
        </Typo>

        <Divider />

        <Typo styles={styles.heading}>How to Read the Watchlist</Typo>
        <Typo styles={styles.text}>
          Each stock shown represents a potential market opportunity, not a
          recommendation.
        </Typo>
        <Typo styles={styles.text}>
          Directional labels reflect market bias only and do not imply
          certainty. Users are encouraged to perform their own analysis before
          making any financial decisions.
        </Typo>

        <Divider />

        <Typo styles={styles.heading}>Data and Updates</Typo>
        <Typo styles={styles.bullet}>
          • Watchlist data is refreshed periodically
        </Typo>
        <Typo styles={styles.bullet}>
          • Market news is sourced from third-party public APIs
        </Typo>
        <Typo styles={styles.bullet}>
          • Data may be delayed, incomplete, or subject to change
        </Typo>

        <Divider />

        <Typo styles={styles.heading}>Disclaimer</Typo>
        <Typo styles={styles.text}>
          TraiQ is not a registered investment advisor.
        </Typo>
        <Typo styles={styles.text}>
          All information provided by TraiQ is for educational and informational
          purposes only and should not be considered financial, investment, or
          trading advice.
        </Typo>
        <Typo styles={styles.text}>
          Stock market investments are subject to risk. Past performance does
          not guarantee future results. Users assume full responsibility for any
          decisions made based on the information shown in this app.
        </Typo>

        <Divider />

        <Typo styles={styles.heading}>Open Source</Typo>
        <Typo styles={styles.text}>
          TraiQ is an open-source project created for learning, transparency,
          and experimentation. The source code is available on GitHub.
        </Typo>
        <Pressable
          onPress={() => Linking.openURL(GITHUB_URL)}
          style={({ pressed }) => [
            styles.githubButton,
            { borderColor: theme.icon },
            pressed && { opacity: 0.7 },
          ]}
        >
          <GithubLogoIcon size={20} color={theme.icon} />
          <Typo styles={styles.githubText}>View on GitHub</Typo>
        </Pressable>

        <Divider />

        <Typo styles={styles.version}>Version {appVersion}</Typo>
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 4,
  },
  githubButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  githubText: {
    fontSize: 14,
    fontWeight: "500",
  },
  version: {
    fontSize: 12,
    opacity: 0.6,
    marginVertical: 8,
    textAlign: "center",
  },
});

export default Info;
