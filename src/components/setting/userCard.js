import { StyleSheet, Text, View, Image } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function UserCard() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.innerContainer}>
      <View style={styles.userCard}>
        <Image
          source={require("../../../assets/images/user.jpg")}
          style={styles.image}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user?.name || "No Name"}</Text>
          <Text style={styles.email}>{user?.email || "No Email"}</Text>
        </View>
      </View>
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
});
