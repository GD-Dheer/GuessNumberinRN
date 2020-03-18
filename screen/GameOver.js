import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOver = props => {
  <View style={style.screen}>
    <Text>Game is Over!</Text>
    <Text>Total Number of Rounds: {props.roundsNumber}</Text>
    <Text>Number was: {props.userChoice}</Text>
    <Button title="START A NEW GAME" onPress={props.restart} />
  </View>;
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOver;
