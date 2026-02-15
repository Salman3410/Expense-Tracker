import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AmountInput() {
  return (
    <View style={styles.amount}>
      <View style={styles.row}>
        <Feather name="dollar-sign" size={24} color="#90EE90" />
        <Text style={styles.text}>Amount</Text>
      </View>
      <View>
        <TextInput placeholder="$0.00" keyboardType="number-pad" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amount: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 12,
    alignSelf: "center",
    elevation: 2,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 5,
  },
});
