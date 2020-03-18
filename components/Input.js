import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props => {
  return <TextInput {...props} style={{ ...style.input, ...props.style }} />;
};

const style = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "purple",
    borderBottomWidth: 2,
    marginVertical: 20
  }
});

export default Input;
