import { StyleSheet, Text, View } from "react-native";

export default function ExpenseCategory({ category }) {
  return (
    <View style={styles.border}>
      <Text style={styles.text}>{category}</Text>
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
  },
});
