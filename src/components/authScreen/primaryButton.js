import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PrimaryButton({ onPress, title }) {
  return (
    <TouchableOpacity
      style={styles.buttonBox}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    marginTop: 20,
    backgroundColor: "#000080",
    paddingVertical: 13,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
