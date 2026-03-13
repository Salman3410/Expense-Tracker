import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AddExpenseButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Feather name="plus" size={28} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 90,
    right: 20,
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: "#3D5AFE",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
});
