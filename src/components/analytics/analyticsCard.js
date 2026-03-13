import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const icons = {
  Groceries: "silverware-fork-knife",
  Shopping: "shopping",
  Subscription: "cellphone",
};

export default function AnalyticsCard({ item }) {
  const navigation = useNavigation();

  function toDate(value) {
    if (value?.toDate) return value.toDate();
    return new Date(value);
  }

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailsExpense", { id: item.id })}
    >
      <View style={styles.innerContainer}>
        <View style={styles.leftSection}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name={icons[item.category] || "cash"}
              size={20}
              color="#F59E0B"
            />
          </View>

          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>
              {toDate(item.date).toLocaleDateString()}
            </Text>
          </View>
        </View>

        <Text style={styles.amount}>-Rs {item.amount}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    marginTop: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 8,
    elevation: 2,
  },
  innerContainer: {
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#DC2626",
  },
});
