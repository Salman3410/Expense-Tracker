import { StyleSheet, Text, View, FlatList } from "react-native";
import useExpense from "../../hooks/useExpense";
import AnalyticsCard from "./analyticsCard";
import { getWeeklyExpenses } from "../../utils/filterExpenses";

export default function WeeklyTransactions() {
  const { expenses } = useExpense();
  const weeklyData = getWeeklyExpenses(expenses);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weekly Transactions</Text>

      <FlatList
        data={weeklyData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AnalyticsCard item={item} />}
        style={styles.flatlist}
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
    paddingBottom: 40,
  },
  heading: {
    paddingHorizontal: 20,
    marginTop: 30,
    fontSize: 16,
    fontWeight: "500",
    color: "#000080",
  },
  flatlist: {
    paddingVertical: 6,
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
