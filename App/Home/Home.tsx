import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableHighlight, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "globalStyles";

const height = Dimensions.get("window").height;

function Home() {
  const joinGame = () => {
    // TODO implement joining games
    console.log("joinGame");
  };

  const placeholder = {
    uri: "https://placekitten.com/300/200"
  };

  const cards = [
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder,
    placeholder
  ];

  return (
    <View style={{ flex: 1, alignSelf: "stretch" }}>
      <LinearGradient colors={["#3980fc", "#224b99"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.titleWrapper}>
        <Text style={[globalStyles.h1, styles.title]}>Psych</Text>
        <Text style={styles.subtitle}>OUTWIT YOUR FRIENDS</Text>
      </LinearGradient>
      <View style={[styles.flex, { justifyContent: "space-around" }]}>
        <TouchableHighlight style={styles.button} onPress={joinGame} underlayColor="#224b99">
          <Text style={globalStyles.buttonText}>Join A Game</Text>
        </TouchableHighlight>
        <Text style={globalStyles.h3}>OR IF YOU'RE THE GAME LEADER, START A GAME FROM ONE OF THE DECKS BELOW</Text>
      </View>
      <View style={[styles.flex, { flexDirection: "row" }]}>
        <FlatList
          horizontal
          data={cards}
          renderItem={({ item }) => <Image source={item} style={styles.card} />}
          keyExtractor={card => card.uri}
        />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 70,
    fontWeight: "900"
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#396afc",
    flex: 3
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 2
  },
  card: {
    height: height / 4,
    width: height / 6,
    margin: "5%",
    marginTop: 0,
    alignSelf: "flex-start",
    borderRadius: height / 69
  },
  button: {
    height: 55,
    width: 150,
    backgroundColor: "#3980fc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
