import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

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
        <Feather name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default function Services() {
  return (
    <View style={styles.servicesBox}>
      <Text style={styles.service}>Services</Text>

      {SERVICES.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#fff",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
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
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "600",
  },
  serviceSub: {
    color: "#64748B",
    fontSize: 13,
  },
});
