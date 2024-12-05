import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import StaticStars from "./StaticStars";

type CardProps = {
  id: number;
  title: string;
  dificulty: number;
  time: number;
  image: string;
};

const images: { [key: string]: any } = {
  image1: require("../assets/img/fried_egg.jpg"),
};

function Card(props: CardProps) {
  const [altActive, setAltActive] = useState(false);
  const { title, dificulty, time, image } = props;

  function getImageSrc(image: string | undefined, altActive: boolean) {
    if (altActive || !image) {
      return images["placeholder"];
    }
    return images[image] || images["placeholder"];
  }

  return (
    <View style={styles.card}>
      <Image
        source={getImageSrc(image, altActive)}
        style={styles.image}
        onError={() => setAltActive(true)}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <StaticStars rating={dificulty} />
        <Text style={styles.time}>{time}'</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    maxHeight: 140,
    padding: 10,
    margin: 14,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 30,
    marginRight: 20,
    resizeMode: "cover",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  time: {
    fontSize: 30,
    color: "#555",
    marginTop: 8,
  },
  icons: {
    marginVertical: 5,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Card;
