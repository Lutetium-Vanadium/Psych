import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles, { clr, flexBox } from "globalStyles";
import Button from "./Button";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

interface HeaderProps {
  navigation: Navigation;
  title?: string;
}

function Header({ navigation, title = "" }: HeaderProps) {
  return (
    <LinearGradient colors={[clr.dodgerBlue, clr.stTropaz]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.titleWrapper}>
      <Button onPress={() => navigation.goBack()} style={{ flex: 2 }} underlayColor={clr.malibu}>
        <Text style={[styles.title, { fontSize: 45, transform: [{ translateX: 15 }, { translateY: -5 }] }]}>‹</Text>
      </Button>
      <View style={{ flex: 13, ...flexBox() }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </LinearGradient>
  );
}

export default Header;

const styles = StyleSheet.create({
  title: {
    ...globalStyles.h3,
    fontWeight: "900",
    marginTop: STATUSBAR_HEIGHT,
    transform: [{ translateX: -Dimensions.get("window").width / 15 }]
  },
  titleWrapper: {
    ...flexBox({ justify: "center", align: "center", direction: "row" }),
    flex: 1,
    alignSelf: "stretch",
    marginBottom: 3 * STATUSBAR_HEIGHT
  }
});
