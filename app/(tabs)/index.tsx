import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import * as Font from "expo-font";
import ListLoader from "@/components/ListLoader";

const { height: screenHeight } = Dimensions.get("window");

export default function HomeScreen() {
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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Faire Plats</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.sectionContent}>
            This app is designed to make cooking easier by providing an
            easy-to-follow recipe.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <Text style={styles.sectionContent}>
            Using a user-friendly interface, the user can find the recipe they
            need to enjoy a good meal in the appropriate time.
          </Text>
        </View>
        <ListLoader />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <Text style={styles.sectionContent}>
            We prioritize user satisfaction and allow our users to create and
            share their own recipes.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get Started</Text>
          <Text style={styles.sectionContent}>
            Download the app, sign up, and start cooking.
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Thank you for cooking with Faire Plats!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4A261",
    fontFamily: "Poppins-Regular",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4A261",
    width: "100%",
    height: screenHeight * 0.3,
  },
  title: {
    color: "#FFF",
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    fontSize: 36,
  },
  scrollContainer: {
    paddingBottom: 32,
  },
  section: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    fontFamily: "Poppins-Regular",
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    fontFamily: "Poppins-Regular",
  },
  footer: {
    alignItems: "center",
    marginTop: 16,
    padding: 16,
  },
  footerText: {
    fontSize: 16,
    color: "#888",
    fontFamily: "Poppins-Regular",
  },
});
