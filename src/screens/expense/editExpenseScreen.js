import { StyleSheet, Text, View } from "react-native";
import AddExpenseHeader from "../../components/addExpense/addExpenseHeader";

export default function EditExpenseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AddExpenseHeader header="Edit Expense" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
