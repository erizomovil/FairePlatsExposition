import React from "react";
import { View, StyleSheet } from "react-native";
import { AirbnbRating } from "react-native-ratings";

type StaticStarsProp = {
  rating: number;
};

const StaticStars: React.FC<StaticStarsProp> = ({ rating }) => (
  <View style={styles.container}>
    <AirbnbRating
      isDisabled={true}
      defaultRating={rating}
      count={5}
      showRating={false}
      size={30}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default StaticStars;
