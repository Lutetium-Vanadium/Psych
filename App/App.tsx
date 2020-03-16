import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import Home from "./Home";

const dims = Dimensions.get("window");
const innerHeight = dims.height;
const innerWidth = dims.width;

export default function App() {
  return (
    <View style={styles.root}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center"
  }
});
