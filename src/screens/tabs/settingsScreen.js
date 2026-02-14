import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import useAuth from "../../hooks/useAuth";

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

export default function SettingsScreen() {
  const { logout } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      {/* User Info  */}
      <View style={styles.innerContainer}>
        <View style={styles.userCard}>
          <Image
            source={require("../../../assets/images/Mi.jpeg")}
            style={styles.image}
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Salman Saeed</Text>
            <Text style={styles.email}>salman.123@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.editBtn}>
          <Text style={styles.editText}>Edit</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Setting Options */}
      <View style={styles.optionContainer}>
        {OPTIONS.map((item) => (
          <OptionCard key={item.id} item={item} />
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => logout()}
        activeOpacity={0.8}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 10,
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
  },
  settingBtn: {
    width: 30,
    height: 30,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 20,
    elevation: 2,
    marginTop: 10,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  userInfo: {
    marginLeft: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
  },
  email: {
    color: "#999",
    fontSize: 14,
    fontWeight: "400",
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  editText: {
    fontWeight: "500",
    color: "#999",
  },
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
  logoutBtn: {
    alignSelf: "center",
    backgroundColor: "darkred",
    width: "90%",
    alignItems: "center",
    paddingVertical: 14,
    marginTop: 10,
    borderRadius: 10,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "500",
  },
});
