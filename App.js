import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Componetns from "./componet";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to starasdfasdfsat working on your app!</Text>
      <Componetns />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
