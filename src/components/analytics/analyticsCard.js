import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function AnalyticsCard({ item }) {
  const navigation = useNavigation();

  function toDate(value) {
    if (value?.toDate) return value.toDate();
    return new Date(value);
  }
  return (
    <TouchableOpacity
      style={styles.transactions}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailsExpense", { id: item.id })}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.sub}>{item.category}</Text>
        </View>
      </View>
      <View style={styles.rightBox}>
        <Text style={styles.amount}>-Rs {item.amount}</Text>
        <Text style={styles.date}>
          {toDate(item.date).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
