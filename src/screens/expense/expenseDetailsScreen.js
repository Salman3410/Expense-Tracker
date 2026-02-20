import { StyleSheet, Text, View } from "react-native";
import DetailsHeader from "../../components/detailsExpense/detailsHeader";
import ExpenseField from "../../components/detailsExpense/expenseField";
import ReceiptImage from "../../components/detailsExpense/receiptImage";
import ExpenseTitle from "../../components/detailsExpense/expenseTitle";
import ExpenseNote from "../../components/detailsExpense/expenseNote";
import ExpenseDetailsCard from "../../components/detailsExpense/expenseDetailsCard";

export default function ExpenseDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <DetailsHeader navigation={navigation} title="Edit Expense" />
      <ExpenseDetailsCard>
        <ExpenseTitle title="MTN" />
        <ExpenseNote note="Airtime Exchange" />
        <ExpenseField label="Date" value="Jan 01, 2026" />
        <ExpenseField label="Amount" value="-Rs3,000" />
        <ReceiptImage
          source={require("../../../assets/images/money_note.png")}
        />
      </ExpenseDetailsCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
