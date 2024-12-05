import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
      });
      setFontsLoaded(true);
    })();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F4A261", dark: "#F4A261" }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>
          Discover Faire Plats
        </ThemedText>
      </ThemedView>
      <ThemedText style={styles.text}>
        Here you can learn more about Faire plats and its functionalities.
      </ThemedText>
      <Collapsible title="Recipe Searcher">
        <ThemedText style={styles.text}>
          This app has a searcher to find specific recipes based on its name
        </ThemedText>
      </Collapsible>
      <Collapsible title="Cards">
        <ThemedText style={styles.text}>
          Cards are implemented as a way for the user to see if the recipe he
          has found is suitable for his needs, and if you clicked a recipe, it
          will show you its details
        </ThemedText>
      </Collapsible>
      <Collapsible title="Recipes">
        <ThemedText style={styles.text}>
          Recipes are made of 6 different components:{"\n"}
          <ThemedText type="defaultSemiBold">It's name</ThemedText>, it's simply
          the name of the recipe{"\n"}
          <ThemedText type="defaultSemiBold">It's image</ThemedText>, how the
          the finished recipe would look like{"\n"}
          <ThemedText type="defaultSemiBold">It's difficulty</ThemedText>, Shown
          by the number of stars it has{"\n"}
          <ThemedText type="defaultSemiBold">It's timer</ThemedText>, an
          aproximate of how long it takes to make the recipe{"\n"}
          <ThemedText type="defaultSemiBold">It's ingredients</ThemedText>, the
          number of ingredients needed to realize the recipe{"\n"}
          <ThemedText type="defaultSemiBold">It's Steps</ThemedText>, the steps
          you need to follow to complete the recipe{"\n"}
        </ThemedText>
      </Collapsible>
      <Collapsible title="Steps">
        <ThemedText style={styles.text}>
          Steps are short videos that are meant to show you how to follow the
          recipe in a more interactive way rather than a paragraph of text
        </ThemedText>
      </Collapsible>
      <Collapsible title="My-recipes">
        <ThemedText style={styles.text}>
          It's a search page that only shows you recipes that have been created
          by the user
        </ThemedText>
      </Collapsible>
      <Collapsible title="Online">
        <ThemedText style={styles.text}>
          It's another search page that only shows you recipes that have been
          created by other users, and have shared them
        </ThemedText>
      </Collapsible>
      <Collapsible title="Create Recipes">
        <ThemedText style={styles.text}>
          It's an option in my-recipes page, that allows the user to make a
          recipe filling all its components in the correct maner. Some
          components like the ingredients or the steps, have to be selected
          insted of created, due to the nature of the page{" "}
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  Collapsible: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  titleText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});
