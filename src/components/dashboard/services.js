import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
});
