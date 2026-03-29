import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import TButton from "../components/TButton";
import MessageBoard from "../components/MessageBoard";

const credits = `Credits

This app was made for Week 3 Mobile Application Development lab.
Built with React Native and React Navigation.`;

export default function Credits() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.table}>
          <Title title="Credits" />
          <MessageBoard message={[credits]} />
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
