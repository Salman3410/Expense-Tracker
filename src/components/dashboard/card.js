import { StyleSheet, Text, View } from "react-native";

export default function Card() {
  return (
    <View style={styles.card}>
      {/* Top */}
      <View style={styles.cardTop}>
        <Text style={styles.cardName}>Debit</Text>
      </View>
      {/* Bottom */}
      <View style={styles.cardBottom}>
        <Text style={styles.userName}>Salman Saeed</Text>
        <Text style={styles.cardDate}>01/25</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 180,
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 16,
    justifyContent: "space-between",
    alignSelf: "center",
    paddingTop: 22,
    paddingBottom: 18,
    marginTop: 10,
  },
  cardTop: {
    alignItems: "flex-start",
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardName: {
    color: "#bbb",
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "600",
  },
  userName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cardDate: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
  },
});
