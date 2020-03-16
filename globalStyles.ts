import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  h1: {
    color: "white",
    fontSize: 40,
    fontWeight: "600"
  },
  h3: {
    color: "white",
    fontSize: 21,
    textAlign: "center",
    padding: "5%"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    padding: "5%"
  }
});

export default globalStyles;

export const flexBox = (options = { align: "center", justify: "center", direction: "row" }) => ({
  display: "flex",
  alignItems: options.align,
  justifyContent: options.justify,
  direction: options.direction
});
