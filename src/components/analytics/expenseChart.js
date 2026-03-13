import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import useExpense from "../../hooks/useExpense";
import { PieChart } from "react-native-gifted-charts";

const CATEGORIES = [
  {
    key: "Shopping",
    title: "Shopping",
    icon: <Feather name="shopping-bag" size={20} color="#4A6CF7" />,
    color: "#4A6CF7",
  },
  {
    key: "Subscription",
    title: "Subscription",
    icon: <FontAwesome5 name="mobile-alt" size={20} color="#F59E0B" />,
    color: "#F59E0B",
  },
  {
    key: "Groceries",
    title: "Groceries",
    icon: (
      <MaterialCommunityIcons
        name="silverware-fork-knife"
        size={20}
        color="#EF4444"
      />
    ),
    color: "#EF4444",
  },
];

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
        color: "#F59E0B",
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
        {CATEGORIES.map((cat) => {
          const value = totals[cat.key] || 0;
          const percent =
            totalExpense === 0 ? 0 : Math.round((value / totalExpense) * 100);

          return (
            <View key={cat.key} style={styles.categoryItem}>
              <View style={styles.iconBox}>{cat.icon}</View>

              <View style={styles.categoryContent}>
                <View style={styles.categoryHeader}>
                  <Text style={styles.title}>{cat.title}</Text>

                  <Text style={styles.amount}>
                    Rs {value} • {percent}%
                  </Text>
                </View>

                <View style={styles.progressBackground}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${percent}%`, backgroundColor: cat.color },
                    ]}
                  />
                </View>
              </View>
            </View>
          );
        })}
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
    borderRadius: 16,
    marginTop: 10,
    elevation: 2,
  },
  category: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    marginTop: 10,
    elevation: 2,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  categoryContent: {
    flex: 1,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  amount: {
    fontSize: 14,
    color: "#6B7280",
  },
  progressBackground: {
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    borderRadius: 10,
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
