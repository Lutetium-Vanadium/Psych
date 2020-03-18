import React from "react";
import { TouchableHighlight, TouchableHighlightProps } from "react-native";

interface ButtonProps extends TouchableHighlightProps {
  children: any;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableHighlight {...props} style={props.style}>
      {children}
    </TouchableHighlight>
  );
}

export default Button;
