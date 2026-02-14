import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const SERVICES = [
  {
    id: 1,
    title: "Save more",
    subtitle: "Learn more",
    image: require("../../../assets/images/money_note.png"),
  },
  {
    id: 2,
    title: "Send money",
    subtitle: "Transfer instantly",
    image: require("../../../assets/images/send.png"),
  },
  {
    id: 3,
    title: "Analytics",
    subtitle: "Track spending",
    image: require("../../../assets/images/analytics.png"),
  },
];

function ServiceCard({ item }) {
  return (
    <View style={styles.serviceCard}>
      <Image source={item.image} style={styles.noteImage} />
      <View style={styles.serviceText}>
        <Text style={styles.serviceTitle}>{item.title}</Text>
        <Text style={styles.serviceSub}>{item.subtitle}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <FontAwesome name="long-arrow-right" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Information about User and greet  */}
      <View style={styles.header}>
        <View style={styles.greetBox}>
          <Image
            source={require("../../../assets/images/Mi.jpeg")}
            style={styles.image}
          />
          <View>
            <Text style={styles.greet}>Welcome Back!</Text>
            <Text style={styles.name}>Sam</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Alert.alert("No Notification Yet")}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Card details */}
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

      {/* Services */}
      <View style={styles.servicesBox}>
        <Text style={styles.service}>Services</Text>

        {SERVICES.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </View>

      {/* Expense Button */}
      <TouchableOpacity
        style={styles.expenseBtn}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Text style={styles.btnText}>Add Expense</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  greetBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  greet: {
    color: "#999",
    fontSize: 15,
    fontWeight: "400",
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
  },
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
  servicesBox: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  service: {
    fontSize: 18,
    color: "#000080",
    fontWeight: "500",
  },
  serviceCard: {
    width: "100%",
    backgroundColor: "#000080",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 12,
  },
  noteImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  serviceText: {
    flex: 1,
    marginHorizontal: 12,
  },
  serviceTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  serviceSub: {
    color: "#9aa0ff",
    fontSize: 13,
  },
  expenseBtn: {
    alignSelf: "center",
    marginTop: 20,
    width: "90%",
    backgroundColor: "#000080",
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
