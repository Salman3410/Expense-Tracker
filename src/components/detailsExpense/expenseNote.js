import { StyleSheet, Text, View } from "react-native";

export default function ExpenseNote({ note }) {
  return (
    <View style={styles.border}>
      <Text style={styles.text}>
        {note && note.trim() !== "" ? note : "No note added"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    padding: 6,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
  },
});
