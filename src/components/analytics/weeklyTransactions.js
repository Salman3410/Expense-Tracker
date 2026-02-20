import TransactionsList from "./transactionsList";

export default function WeeklyTransactions({ navigation }) {
  return (
    <TransactionsList
      label="Weekly Transactions"
      onPress={() => navigation.navigate("DetailsExpense")}
    />
  );
}
