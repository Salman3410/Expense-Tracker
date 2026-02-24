import { StyleSheet, View, Text } from "react-native";
import DetailsHeader from "../../components/detailsExpense/detailsHeader";
import ExpenseField from "../../components/detailsExpense/expenseField";
import ReceiptImage from "../../components/detailsExpense/receiptImage";
import ExpenseTitle from "../../components/detailsExpense/expenseTitle";
import ExpenseNote from "../../components/detailsExpense/expenseNote";
import ExpenseDetailsCard from "../../components/detailsExpense/expenseDetailsCard";
import useExpense from "../../hooks/useExpense";
import ExpensePayment from "../../components/detailsExpense/expensePayment";
import ExpenseCategory from "../../components/detailsExpense/expenseCategory";
import ExpenseDeleteButton from "../../components/detailsExpense/expenseDeleteButton";

export default function ExpenseDetailsScreen({ navigation, route }) {
  const id = route?.params?.id;

  const { expenses, deleteExpense } = useExpense();

  if (!id) {
    console.log("ID not received");
    return null;
  }

  const expense = expenses.find(
    (item) => item?.id && item.id.toString() === id.toString(),
  );

  if (!expense) {
    console.log("Expense not found");
    return null;
  }

  function handleDelete() {
    deleteExpense(expense.id);
    navigation.goBack();
  }

  function handleEdit() {
    navigation.navigate("EditExpense", { id: expense.id });
  }
  return (
    <View style={styles.container}>
      <DetailsHeader
        navigation={navigation}
        title="Edit Expense"
        onPress={handleEdit}
      />
      <ExpenseDetailsCard>
        <ExpenseTitle title={expense.title} />
        <ExpenseCategory category={expense.category} />
        <ExpenseNote note={expense.note} />
        <ExpenseField
          label="Date"
          value={new Date(expense.date).toLocaleDateString()}
        />
        <ExpenseField label="Amount" value={`-Rs${expense.amount}`} />
        <ExpensePayment payment={expense.payment} />
        {expense.image ? (
          <ReceiptImage source={{ uri: expense.image }} />
        ) : (
          <View style={styles.noReceiptAttached}>
            <Text style={styles.noReceiptText}>No receipt attached</Text>
          </View>
        )}
        <ExpenseDeleteButton id={expense.id} onDelete={handleDelete} />
      </ExpenseDetailsCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noReceiptContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  noReceiptText: {
    color: "#999",
    fontSize: 14,
    fontWeight: "500",
  },
});
