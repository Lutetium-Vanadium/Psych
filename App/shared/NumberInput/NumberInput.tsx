import React from "react";
import { View, TextInput, Text, StyleSheet, Dimensions } from "react-native";
import { flexBox } from "globalStyles";

const { width } = Dimensions.get("window");

interface NumberInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  numDigits?: number;
}

function NumberInput({ value, setValue, numDigits = 4 }: NumberInputProps) {
  const onChange = (text: string) => {
    const len = text.length;

    if (/[0-9]/.test(text.charAt(len - 1)) || len === 0) {
      setValue(len > numDigits ? text.slice(len - numDigits, len) : fixLength(text, numDigits, "0"));
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput caretHidden style={styles.input} value={value} onChangeText={onChange} keyboardType="numeric" />
      {value.split("").map((char, index) => (
        <Text key={index} style={[styles.box, { width: width / (2 * numDigits) }]}>
          {char}
        </Text>
      ))}
    </View>
  );
}

export default NumberInput;

const styles = StyleSheet.create({
  wrapper: {
    ...flexBox({ align: "center", justify: "space-around", direction: "row" }),
    width: 0.8 * width,
    padding: "3%",
    height: 80
  },
  input: {
    opacity: 0,
    position: "absolute",
    left: "-25%",
    width: "150%",
    height: "175%"
  },
  box: {
    height: "100%",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#eee",
    fontSize: 25
  }
});

const fixLength = (str: string, len: number, fill: string) => {
  if (fill.length > 1) {
    fill = fill.charAt(fill.length - 1);
  }
  return fill.repeat(len - str.length) + str;
};
