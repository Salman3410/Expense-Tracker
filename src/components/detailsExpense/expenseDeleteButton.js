import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ExpenseDeleteButton({ onDelete }) {
  return (
    <TouchableOpacity
      style={styles.border}
      activeOpacity={0.8}
      onPress={onDelete}
    >
      <Text style={styles.text}>Delete</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  border: {
    marginLeft: 10,
    paddingVertical: 8,
    backgroundColor: "darkred",
    width: "40%",
    alignItems: "center",
    borderRadius: 10,
    // alignSelf: "center",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
});
