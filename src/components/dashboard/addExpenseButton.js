import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function AddExpenseButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.expenseBtn}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("AddExpense")}
    >
      <Text style={styles.btnText}>Add Expense</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  expenseBtn: {
    alignSelf: "center",
    marginTop: 20,
    width: "90%",
    backgroundColor: "#000080",
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
