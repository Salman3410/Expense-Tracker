import TransactionsList from "./transactionsList";

export default function MonthlyTransactions({ navigation }) {
  return (
    <TransactionsList
      label="Monthly Transactions"
      onPress={() => navigation.navigate("DetailsExpense")}
    />
  );
}
