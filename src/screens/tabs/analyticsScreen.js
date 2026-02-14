import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExpenseChart from "../../components/analytics/expenseChart";
import RecentTransactions from "../../components/analytics/recentTransactions";

export default function AnalyticsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Expenses</Text>
      </View>
      <ExpenseChart />
      <RecentTransactions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000080",
  },
});
