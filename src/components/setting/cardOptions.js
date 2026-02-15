import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const OPTIONS = [
  {
    id: 1,
    Icon: Feather,
    iconName: "user",
    title: "Account",
    color: "lightblue",
  },
  {
    id: 2,
    Icon: Ionicons,
    iconName: "notifications-outline",
    title: "Notifications",
    color: "#90EE90",
  },
  {
    id: 3,
    Icon: MaterialCommunityIcons,
    iconName: "lock-outline",
    title: "Security",
    color: "#B39EB5",
  },
  {
    id: 4,
    Icon: Feather,
    iconName: "dollar-sign",
    title: "Currency",
    color: "#FFEE8C",
  },
  {
    id: 5,
    Icon: Feather,
    iconName: "monitor",
    title: "Appearence",
  },
  {
    id: 6,
    Icon: Feather,
    iconName: "help-circle",
    title: "Help & Support",
    color: "#CBCBCB",
  },
];

function OptionCard({ item }) {
  const IconComponent = item.Icon;
  return (
    <View style={styles.optionRow}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconComponent
          name={item.iconName}
          size={24}
          color={item.color || "#000"}
        />
        <Text style={styles.optionName}>{item.title}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
      </TouchableOpacity>
    </View>
  );
}

export default function CardOptions() {
  return (
    <View style={styles.optionContainer}>
      {OPTIONS.map((item) => (
        <OptionCard key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionContainer: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
    elevation: 2,
    overflow: "hidden",
  },
  optionName: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "400",
  },
});
