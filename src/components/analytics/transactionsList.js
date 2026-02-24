import { StyleSheet, Text, View, FlatList } from "react-native";
import useExpense from "../../hooks/useExpense";
import AnalyticsCard from "./analyticsCard";

export default function TransactionsList({ label, data }) {
  const { expenses } = useExpense();

  return (
    <View style={styles.container}>
      <View style={styles.recent}>
        <Text style={styles.recentText}>{label}</Text>
      </View>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AnalyticsCard item={item} />}
        data={data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  recent: {
    paddingHorizontal: 20,
  },
  recentText: {
    fontSize: 16,
    color: "#000080",
    fontWeight: "500",
    marginTop: 30,
  },
  transactions: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "#000",
    borderRadius: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  sub: {
    color: "#999",
    fontWeight: "400",
  },
  rightBox: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 15,
    fontWeight: "500",
    color: "darkred",
  },
  date: {
    color: "#999",
    fontSize: 12,
  },
});
