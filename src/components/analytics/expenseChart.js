import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import useExpense from "../../hooks/useExpense";
import { PieChart } from "react-native-gifted-charts";

export default function ExpenseChart() {
  const { expenses } = useExpense();

  const totals = useMemo(() => {
    return expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});
  }, [expenses]);

  const totalExpense = useMemo(() => {
    return Object.values(totals).reduce((sum, val) => sum + val, 0);
  }, [totals]);

  const pieData = useMemo(() => {
    if (totalExpense === 0) return [{ value: 1, color: "#ccc", text: "0%" }];

    return [
      {
        value: totals["Shopping"] || 0,
        color: "#000080",
        text: `${Math.round(((totals["Shopping"] || 0) / totalExpense) * 100)}%`,
      },
      {
        value: totals["Subscription"] || 0,
        color: "#ee5b2f",
        text: `${Math.round(
          ((totals["Subscription"] || 0) / totalExpense) * 100,
        )}%`,
      },
      {
        value: totals["Groceries"] || 0,
        color: "#00ef",
        text: `${Math.round(
          ((totals["Groceries"] || 0) / totalExpense) * 100,
        )}%`,
      },
    ];
  }, [totals, totalExpense]);

  return (
    <View>
      <View style={styles.expense}>
        <View>
          <Text style={styles.totalText}>Total Spent</Text>
          <Text style={styles.amountText}>Rs {totalExpense}</Text>
        </View>
        <PieChart
          data={pieData}
          donut
          showText
          textColor="white"
          textSize={12}
          radius={65}
          innerRadius={35}
        />
      </View>

      <View style={styles.category}>
        <View style={styles.row}>
          <Feather name="shopping-bag" size={20} color="black" />
          <Text style={styles.title}>Shopping</Text>
          <Text style={styles.amount}>Rs {totals["Shopping"] || 0}</Text>
        </View>

        <View style={styles.row}>
          <FontAwesome5 name="mobile-alt" size={20} color="black" />
          <Text style={styles.title}>Subscription</Text>
          <Text style={styles.amount}>Rs {totals["Subscription"] || 0}</Text>
        </View>

        <View style={styles.lastRow}>
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={20}
            color="black"
          />
          <Text style={styles.title}>Groceries</Text>
          <Text style={styles.amount}>Rs {totals["Groceries"] || 0}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  expense: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",

    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 10,
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    elevation: 2,
  },
  category: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    elevation: 2,
    justifyContent: "space-between",
    padding: 20,
  },
  row: {
    borderRightWidth: 1,
    borderRightColor: "#eee",
    padding: 8,
    alignItems: "center",
  },
  lastRow: {
    padding: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  amount: {
    color: "#999",
    marginBottom: 10,
  },
  totalText: {
    fontSize: 15,
    marginTop: 5,
  },
  amountText: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
