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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No expenses yet</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#000080",
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 14,
    color: "#888",
    fontStyle: "italic",
    marginTop: 10,
  },
});
