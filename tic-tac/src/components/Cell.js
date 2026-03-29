import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Cell({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: "33.3333%",
    aspectRatio: 1,
    backgroundColor: "green",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
});