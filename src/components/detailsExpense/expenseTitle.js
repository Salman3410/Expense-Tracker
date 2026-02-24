import { StyleSheet, Text, View } from "react-native";

export default function ExpenseTitle({ title }) {
  return (
    <View style={styles.border}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    padding: 6,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
});
