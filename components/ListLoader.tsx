import { Text, View, StyleSheet } from "react-native";
import Card from "./Card";

const ListLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4A261",
      }}
    >
      <Card id={1} title="White Rice" dificulty={2} image="image1" time={10} />
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
