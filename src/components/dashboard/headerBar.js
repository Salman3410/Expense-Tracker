import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderBar() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
