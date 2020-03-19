import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Button } from "base";

import globalStyles, { clr, flexBox } from "globalStyles";

interface HomeProps {
  navigation: Navigation;
}

function Home({ navigation }: HomeProps) {
  const joinGame = () => {
    navigation.navigate("join-game");
  };

  const createGame = src => {
    navigation.navigate("new-game", { card: src });
  };

  const placeholder = {
    uri: "https://placekitten.com/300/200"
  };

  return (
    <View style={globalStyles.full}>
      <LinearGradient colors={[clr.dodgerBlue, clr.stTropaz]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.titleWrapper}>
        <Text style={styles.title}>Psych</Text>
        <Text style={styles.subtitle}>OUTWIT YOUR FRIENDS</Text>
      </LinearGradient>
      <View style={[styles.flex, { justifyContent: "space-around" }]}>
        <Button style={styles.button} onPress={joinGame} underlayColor={clr.malibu}>
          <Text style={globalStyles.buttonText}>Join A Game</Text>
        </Button>
        <Text style={globalStyles.h3}>OR IF YOU'RE THE GAME LEADER, START A GAME FROM ONE OF THE DECKS BELOW</Text>
      </View>
      <View style={[styles.flex, { flexDirection: "row" }]}>
        <Button style={styles.flex} onPress={() => createGame(placeholder)}>
          <Image source={placeholder} style={globalStyles.card} />
        </Button>
        <Button style={styles.flex} onPress={() => createGame(placeholder)}>
          <Image source={placeholder} style={globalStyles.card} />
        </Button>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  title: {
    ...globalStyles.h1,
    fontSize: 70,
    fontWeight: "900"
  },
  titleWrapper: {
    ...flexBox(),
    backgroundColor: clr.dodgerBlue,
    flex: 3,
    alignSelf: "stretch"
  },
  flex: {
    ...flexBox(),
    flex: 2
  },
  button: {
    ...flexBox(),
    height: 55,
    width: 150,
    backgroundColor: clr.dodgerBlue,
    transform: [
      {
        translateY: 10
      }
    ]
  },
  subtitle: {
    color: "white",
    opacity: 0.7,
    fontSize: 17,
    fontStyle: "italic",
    letterSpacing: 2,
    marginTop: 6
  }
});
