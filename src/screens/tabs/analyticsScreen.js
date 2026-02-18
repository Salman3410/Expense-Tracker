import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExpenseChart from "../../components/analytics/expenseChart";
import TransactionsTabs from "../transaction/transactionsTabs";

export default function AnalyticsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Expenses</Text>
      </View>
      <ExpenseChart />
      <View style={styles.tabsContainer}>
        <TransactionsTabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flex: 1,
    marginTop: 10,
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
