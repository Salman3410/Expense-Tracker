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
    <View style={styles.expense}>
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

      <PieChart
        data={pieData}
        donut
        showText
        textColor="white"
        textSize={12}
        radius={75}
        innerRadius={45}
      />

      <Text style={styles.totalText}>Total: Rs {totalExpense}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  expense: {
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    elevation: 2,
  },
  category: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 5,
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
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
