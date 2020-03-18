import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./views/Home";
import NewGame from "./views/NewGame";
import JoinGame from "./views/JoinGame";
import { clr } from "globalStyles";

const placeholder = {
  uri: "https://placekitten.com/300/200"
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.root}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="new-game" component={NewGame} options={{ headerShown: false }} />
          <Stack.Screen name="join-game" component={JoinGame} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: clr.codGray,
    justifyContent: "center",
    zIndex: -1
  }
});
