import { StyleSheet, Text, View } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function ExpenseChart() {
  return (
    <View style={styles.expense}>
      <View style={styles.row}>
        <Feather name="shopping-bag" size={20} color="black" />
        <Text style={styles.title}>Shopping</Text>
        <Text style={styles.amount}>Rs25,000</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome5 name="mobile-alt" size={20} color="black" />
        <Text style={styles.title}>Subscription</Text>
        <Text style={styles.amount}>Rs10,000</Text>
      </View>
      <View style={styles.lastRow}>
        <MaterialCommunityIcons
          name="silverware-fork-knife"
          size={20}
          color="black"
        />
        <Text style={styles.title}>Groceries</Text>
        <Text style={styles.amount}>Rs50,000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  expense: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    elevation: 2,
  },
  row: {
    borderRightWidth: 1,
    borderRightColor: "#eee",
    padding: 8,
  },
  lastRow: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  amount: {
    color: "#999",
  },
});
