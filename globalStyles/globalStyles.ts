import { StyleSheet, Dimensions } from "react-native";
import { flexBox } from "./mixins";
import clr from "./colours";

const height = Dimensions.get("window").height;

const globalStyles = StyleSheet.create({
  h1: {
    color: "white",
    fontSize: 40,
    fontWeight: "600"
  },
  h2: {
    color: "white",
    fontSize: 30,
    fontWeight: "600"
  },
  h3: {
    color: "white",
    fontSize: 21,
    textAlign: "center",
    padding: "5%"
  },
  h4: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: "5%"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    padding: "5%"
  },
  card: {
    height: height / 4,
    width: height / 6,
    margin: "5%",
    marginTop: 0,
    borderRadius: height / 69
  },
  full: {
    ...flexBox(),
    alignSelf: "stretch",
    flex: 1,
    zIndex: 1,
    backgroundColor: clr.codGray
  },
  p: {
    color: "white"
  }
});

export default globalStyles;
