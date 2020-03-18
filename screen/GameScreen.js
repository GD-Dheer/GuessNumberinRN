import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = props => {
  const [currentSystemGuess, setCurrentSystemGuess] = useState(
    generateRandom(1, 100, props.userNumber)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [roundCounter, setRoundCounter] = useState(0);

  const { userNumber, onGameOver } = props;

  useEffect(() => {
    if (currentSystemGuess === userNumber) {
      {
        onGameOver();
      }
    }
  }, [currentSystemGuess, userNumber, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "LOWER" && currentSystemGuess < props.userNumber) ||
      (direction === "GREATER" && currentSystemGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }
    if (direction === "LOWER") {
      currentHigh.current = currentSystemGuess;
    } else {
      currentLow.current = currentSystemGuess;
    }
    const nextNum = generateRandom(
      currentLow.current,
      currentHigh.current,
      currentSystemGuess
    );
    setCurrentSystemGuess(nextNum);
    setRoundCounter(currentRound => currentRound + 1);
  };

  return (
    <View style={style.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentSystemGuess}</NumberContainer>
      <Card style={style.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "LOWER")} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "GREATER")}
        />
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
