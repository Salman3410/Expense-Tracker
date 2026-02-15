import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SubmitExpenseButton() {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
      <Text style={styles.btnText}>Add Expense</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "90%",
    backgroundColor: "#000080",
    padding: 12,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: { textAlign: "center", color: "#fff", fontWeight: "400" },
});
