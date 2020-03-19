import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions, CardStyleInterpolators } from "@react-navigation/stack";

import Home from "./views/Home";
import NewGame from "./views/NewGame";
import JoinGame from "./views/JoinGame";
import { clr } from "globalStyles";

const Stack = createStackNavigator();

const options: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};

export default function App() {
  return (
    <View style={styles.root}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} options={options} />
          <Stack.Screen name="new-game" component={NewGame} options={options} />
          <Stack.Screen name="join-game" component={JoinGame} options={options} />
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
