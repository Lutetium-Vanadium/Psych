import { StyleSheet, FlexAlignType } from "react-native";

interface Options {
  align: FlexAlignType;
  justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  direction: "row" | "column" | "row-reverse" | "column-reverse";
}

export const flexBox = (options: Options = { align: "center", justify: "center", direction: "column" }) => {
  const style = StyleSheet.create({
    flexBox: {
      display: "flex",
      alignItems: options.align,
      justifyContent: options.justify,
      flexDirection: options.direction
    }
  });

  return style.flexBox;
};
