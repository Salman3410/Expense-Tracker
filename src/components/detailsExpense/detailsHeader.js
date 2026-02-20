import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DetailsHeader({ title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Ionicons name="arrow-back" size={24} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity
        style={styles.blank}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("EditExpense")}
      >
        <Feather name="edit" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: 1,
  },
  backBtn: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  blank: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  backIcon: {
    color: "#000",
  },
});
