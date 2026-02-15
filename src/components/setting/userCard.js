import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function UserCard() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
