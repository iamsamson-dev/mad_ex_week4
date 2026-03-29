import { View, StyleSheet } from "react-native";
import Cell from "./Cell";

export default function Board({ plays, onCellPress }) {
  return (
    <View style={styles.board}>
      {plays.map((play, index) => (
        <Cell
          key={index}
          value={play}
          onPress={() => onCellPress(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: 210,
    height: 210,
    backgroundColor: "orange",
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});