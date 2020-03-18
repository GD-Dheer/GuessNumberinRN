import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NumberContainer = props => {
  return (
    <View style={style.container}>
      <Text style={style.number}>{props.children}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    fontSize: 22
  }
});

export default NumberContainer;
