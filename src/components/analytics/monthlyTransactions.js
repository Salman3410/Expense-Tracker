import { StyleSheet, Text, View, FlatList } from "react-native";
import useExpense from "../../hooks/useExpense";
import AnalyticsCard from "./analyticsCard";
import { getMonthlyExpenses } from "../../utils/filterExpenses";

export default function MonthlyTransactions() {
  const { expenses } = useExpense();
  const monthlyData = getMonthlyExpenses(expenses);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Monthly Transactions</Text>

      <FlatList
        data={monthlyData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AnalyticsCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  heading: {
    paddingHorizontal: 20,
    marginTop: 30,
    fontSize: 16,
    fontWeight: "500",
    color: "#000080",
  },
});
