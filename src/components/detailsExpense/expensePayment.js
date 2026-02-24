import { StyleSheet, Text, View } from "react-native";

export default function ExpensePayment({ payment }) {
  return (
    <View style={styles.border}>
      <Text style={styles.text}>{payment}</Text>
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
