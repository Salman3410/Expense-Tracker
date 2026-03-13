import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Card from "../../components/dashboard/card";
import Services from "../../components/dashboard/services";
import HeaderBar from "../../components/dashboard/headerBar";

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <HeaderBar />
      <Card />
      <Services />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Feather name="plus" size={28} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  button: {
    position: "absolute",
    bottom: -60,
    right: 20,
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: "#000080",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
});
