import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screen/StartGameScreen";
import GameScreen from "./screen/GameScreen";
import GameOver from "./screen/GameOver";
import React, { useState } from "react";

export default function App() {
  const [selectedNum, setSelectedNum] = useState("");
  const [guessRounds, setGuessRounds] = useState(0);

  const configNewGame = () => {
    setGuessRounds(0);
    setSelectedNum(null);
  };

  const gameHandler = selectedNum => {
    setSelectedNum(selectedNum);
    setGuessRounds(0);
  };

  const gameOverHandler = totalRound => {
    setGuessRounds(totalRound);
  };

  let content = <StartGameScreen onStartGame={gameHandler} />;

  if (selectedNum && guessRounds === 0) {
    content = (
      <GameScreen userChoice={selectedNum} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        userChoice={selectedNum}
        roundNumber={guessRounds}
        restart={configNewGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number " />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
