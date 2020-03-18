import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNum, setSelectedNum] = useState();

  const numInputHandler = inputText => {
    setEnteredValue(inputText);
  };

  const resetHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmHander = () => {
    const chosenNum = parseInt(enteredValue);
    if (chosenNum === NaN || chosenNum <= 0 || chosenNum > 99) {
      alert("Your numbers are not valid");
      return;
    }
    setConfirmed(true);
    setSelectedNum(chosenNum);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={style.confirmed}>
        <Text>Your Chosen Number Is: </Text>
        <NumberContainer>{selectedNum}</NumberContainer>
        <Button
          title="START MY GAME"
          onPress={() => {
            props.onStartGame(selectedNum);
          }}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={style.screen}>
        <Text style={style.title}> Start a New Game</Text>
        <Card style={style.inputContainer}>
          <Text>Select a Number ;)</Text>
          <Input
            style={style.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={changed => {
              numInputHandler(changed);
            }}
            value={enteredValue}
          />
          <View style={style.buttonContainer}>
            <View style={style.buttonstyle}>
              <Button title="Reset" color="#c717fc" onPress={resetHandler} />
            </View>
            <View style={style.buttonstyle}>
              <Button title="Confirm" color="#f7287b" onPress={confirmHander} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonstyle: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  confirmed: {
    marginTop: 40,
    alignItems: "center"
  }
});

export default StartGameScreen;
