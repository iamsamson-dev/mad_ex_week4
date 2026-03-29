import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TButton({ label, fun, disabled = false }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={fun}
      disabled={disabled}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#11b5b5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});