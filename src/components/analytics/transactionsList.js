import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

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

export default function TransactionsList({ label }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.recent}>
        <Text style={styles.recentText}>{label}</Text>
      </View>

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
    </ScrollView>
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
    marginTop: 20,
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
