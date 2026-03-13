import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/authContext";

const cardNumber = "****  ****  ****  4821";

export default function Card() {
  const { user } = useContext(AuthContext);

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = String(today.getFullYear()).slice(-2);
  const formattedDate = `${month}/${year}`;
  return (
    <TouchableOpacity style={styles.wrap} activeOpacity={0.8}>
      <LinearGradient
        colors={["#0F2027", "#203A43", "#2C5364"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Top */}
        <View style={styles.cardTop}>
          <Text style={styles.cardType}>Balance</Text>
          <Text style={styles.cardName}>VISA</Text>
        </View>

        {/* Chip */}
        <MaterialCommunityIcons
          name="credit-card-chip"
          size={40}
          color="#d4af37"
          style={styles.chip}
        />

        {/* Card Number */}
        <Text style={styles.cardNumber}>{cardNumber}</Text>

        {/* Bottom */}
        <View style={styles.cardBottom}>
          <Text style={styles.userName}>{user?.name || "No Name"}</Text>
          <Text style={styles.cardDate}>{formattedDate}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    elevation: 3,
  },
  card: {
    height: 180,
    borderRadius: 10,
    padding: 16,
    paddingTop: 22,
    paddingBottom: 18,
    justifyContent: "space-between",
  },
  cardTop: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardType: {
    color: "#bbb",
    fontSize: 15,
    letterSpacing: 1,
  },
  cardName: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  chip: {
    marginTop: 5,
  },
  cardNumber: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 2,
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
