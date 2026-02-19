import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddExpenseHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Ionicons name="arrow-back" size={24} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Add Expense</Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  backBtn: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  backIcon: {
    color: "#000",
  },
});
