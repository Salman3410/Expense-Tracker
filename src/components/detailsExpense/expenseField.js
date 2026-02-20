import { StyleSheet, Text, View } from "react-native";

export default function ExpenseField({ label, value }) {
  return (
    <View style={styles.border}>
      <Text style={styles.text}>
        {label}: <Text style={styles.date}>{value}</Text>
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
    fontSize: 18,
    fontWeight: "400",
  },
  date: {
    fontWeight: "600",
  },
});
