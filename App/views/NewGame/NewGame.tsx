import React, { useState, useRef, useContext } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";

import globalStyles, { flexBox, clr } from "globalStyles";
import { Header, Button } from "base";

interface NewGameProps {
  navigation: Navigation;
  route: RouteProp<Record<string, obj>, "new-game">;
}

function NewGame({ navigation, route }: NewGameProps) {
  const { card } = route.params;
  const code = useRef(randCode());
  const [numPlayers, setNumPlayers] = useState(Math.floor(Math.random() * 10));

  return (
    <View style={globalStyles.full}>
      <Header navigation={navigation} title="New Game" />
      <View style={styles.flex}>
        <Image source={card} style={[globalStyles.card, { marginTop: 30 }]} />
        <Text style={globalStyles.h1}>Secret Code:</Text>
        <Text style={globalStyles.h3}>{code.current}</Text>
        <Text style={globalStyles.h4}>NOW YOU'RE IN CHARGE! TELL YOUR FRIENDS TO ENTER THIS CODE TO JOIN YOUR GAME</Text>
      </View>
      <View style={styles.flex}>
        <Text style={globalStyles.h3}>{numPlayers} players joined!</Text>
        <Text style={globalStyles.h4}>Waiting for players to join.</Text>
        <Button style={styles.button} onPress={console.log} underlayColor={clr.malibu}>
          <Text style={globalStyles.buttonText}>Start Now!</Text>
        </Button>
      </View>
    </View>
  );
}

export default NewGame;

const randCode = () => {
  let code = "";

  for (let i = 0; i < 4; i++) {
    code += Math.floor(Math.random() * 10).toString();
  }

  return code;
};

const styles = StyleSheet.create({
  flex: {
    ...flexBox(),
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
  }
});
