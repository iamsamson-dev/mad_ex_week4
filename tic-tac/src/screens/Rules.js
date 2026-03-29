import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import TButton from "../components/TButton";
import MessageBoard from "../components/MessageBoard";

const rules = `Tic Tac Toe Rules

1. The game is played on a 3 by 3 grid.
2. Player X and player O take turns.
3. Put your mark in an empty square.
4. Get 3 in a row to win.
5. If all 9 squares are full and no one has 3 in a row, the game is a tie.`;

export default function Rules() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.table}>
          <Title title="Rules" />
          <MessageBoard message={[rules]} />
          <TButton label="Back" fun={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  table: {
    flex: 1,
    backgroundColor: "#ccc",
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
});