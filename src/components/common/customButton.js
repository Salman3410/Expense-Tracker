import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity
      style={styles.expenseBtn}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{title}</Text>
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
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
