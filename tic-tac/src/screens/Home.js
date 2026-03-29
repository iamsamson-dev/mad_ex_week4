import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Board from "../components/Board";
import Title from "../components/Title";
import TButton from "../components/TButton";
import {
  createNewHistory,
  getCurrentBoard,
  canGoBack,
  canGoForward,
  canNewGame,
  getXIsNext,
  makeMove,
  goBackStep,
  goForwardStep,
} from "../datamodel/game";

export default function Home({ navigation }) {
  const [history, setHistory] = useState(createNewHistory());
  const [step, setStep] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const plays = getCurrentBoard(history, step);

  const backEnabled = canGoBack(step);
  const forwardEnabled = canGoForward(step, history);
  const newGameEnabled = canNewGame(plays);

  const newGame = () => {
    setHistory(createNewHistory());
    setStep(0);
    setXIsNext(true);
  };

  const handleCellPress = (index) => {
    const result = makeMove(history, step, plays, index, xIsNext);
    setHistory(result.history);
    setStep(result.step);
    setXIsNext(result.xIsNext);
  };

  const goBack = () => {
    const newStep = goBackStep(step);
    setStep(newStep);
    setXIsNext(getXIsNext(newStep));
  };

  const goForward = () => {
    const newStep = goForwardStep(step, history);
    setStep(newStep);
    setXIsNext(getXIsNext(newStep));
  };

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <Title title="Tic Tac Toe" />

        <View style={styles.controlRow}>
          <TButton label="<" fun={goBack} disabled={!backEnabled} />
          <TButton label="New Game" fun={newGame} disabled={!newGameEnabled} />
          <TButton label=">" fun={goForward} disabled={!forwardEnabled} />
        </View>

        <Board plays={plays} onCellPress={handleCellPress} />

        <View style={styles.buttonPanel}>
          <TButton label="Rules" fun={() => navigation.navigate("Rules")} />
          <TButton label="Credits" fun={() => navigation.navigate("Credits")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  table: {
    flex: 1,
    backgroundColor: "#ccc",
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonPanel: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
  },
  controlRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
});