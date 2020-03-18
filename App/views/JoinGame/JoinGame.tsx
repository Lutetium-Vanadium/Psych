import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { Header, Button } from "base";
import { NumberInput } from "shared";

import globalStyles, { flexBox, clr } from "globalStyles";

interface JoinGameProps {
  navigation: Navigation;
}

function JoinGame({ navigation }: JoinGameProps) {
  const [code, setCode] = useState("0000");

  const joinGame = () => {
    console.log("Joining", code);
    // TODO add join code

    // TODO change to game screen
    navigation.navigate("home");
  };

  return (
    <View style={globalStyles.full}>
      <Header title="Join a Game" navigation={navigation} />
      <View style={styles.flex}>
        <NumberInput value={code} setValue={setCode} />
        <Button style={styles.button} onPress={joinGame} underlayColor={clr.malibu}>
          <Text style={globalStyles.buttonText}>Join</Text>
        </Button>
      </View>
      {/* Leave the bottom half empty for now */}
      <View style={styles.flex}></View>
    </View>
  );
}

export default JoinGame;

const styles = StyleSheet.create({
  flex: {
    ...flexBox({ justify: "space-evenly", align: "center", direction: "column" }),
    flex: 4
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
