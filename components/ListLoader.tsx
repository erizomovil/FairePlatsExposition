import { Text, View, StyleSheet } from "react-native";
import Card from "./Card";

const ListLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card id={1} title="Fried egg" dificulty={1} image="image1" time={5} />
    </View>
  );
};

export default ListLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "auto",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
