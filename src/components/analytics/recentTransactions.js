import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const OPTIONS = [
  {
    id: 1,
    title: "Day",
  },
  {
    id: 2,
    title: "Week",
  },
  {
    id: 3,
    title: "Months",
  },
  {
    id: 4,
    title: "Year",
  },
];

const TRANSACTIONS = [
  {
    id: 1,
    title: "MTN",
    sub: "Airtime exchange",
    amount: "3,000",
    date: "10/01/26",
    image: require("../../../assets/images/MTN.jpg"),
  },
  {
    id: 2,
    title: "Spotify",
    sub: "Subscription",
    amount: "4,400",
    date: "13/01/26",
    image: require("../../../assets/images/Spotify_01.jpg"),
  },
  {
    id: 3,
    title: "Netflix",
    sub: "Subscription",
    amount: "5,400",
    date: "17/01/26",
    image: require("../../../assets/images/Netflix.png"),
  },
];

export default function RecentTransactions() {
  const [active, setActive] = useState("Week");
  return (
    <View>
      <View style={styles.recent}>
        <Text style={styles.recentText}>Recent Transactions</Text>
      </View>
      <View style={styles.bar}>
        {OPTIONS.map((item) => {
          const isActive = active === item.title;
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.barBtn, isActive && styles.activeBarBtn]}
              onPress={() => setActive(item.title)}
            >
              <Text style={[styles.barText, isActive && styles.activeBarText]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Transactions */}
      {TRANSACTIONS.map((item) => (
        <View style={styles.transactions} key={item.id}>
          <View style={styles.row}>
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.sub}>{item.sub}</Text>
            </View>
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.amount}>-Rs{item.amount}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  recent: {
    paddingHorizontal: 20,
  },
  recentText: {
    fontSize: 16,
    color: "#000080",
    fontWeight: "500",
    marginTop: 30,
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#eee",
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 10,
    elevation: 1,
  },
  barBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  activeBarBtn: {
    backgroundColor: "#000080",
  },
  activeBarText: {
    color: "#fff",
    fontWeight: "600",
  },
  barText: {
    color: "#999",
    fontSize: 16,
    fontWeight: "500",
  },
  transactions: {
    marginTop: 20,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
