import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../common/customInput";

export default function AmountInput({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Amount</Text>
      <View style={styles.amount}>
        <CustomInput
          placeholder="$0.00"
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
          showIcon={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  amount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginHorizontal: 10,
    marginTop: 10,
  },
});
