import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderBar() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.getParent()?.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.8} onPress={openDrawer}>
        <Octicons name="three-bars" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.dashboard}>Dashboard</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => Alert.alert("No notifications yet")}
      >
        <Ionicons name="notifications-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 10,
  },
  dashboard: {
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: "500",
  },
});
