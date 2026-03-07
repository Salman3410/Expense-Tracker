import { useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/authContext";
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  const { user, logout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      {/* Profile  */}
      <View style={styles.profile}>
        <Image
          source={require("../../../assets/images/user.jpg")}
          style={styles.image}
        />

        <View>
          <Text style={styles.welcome}>Welcome Back!</Text>
          <Text style={styles.name}>{user?.name || "User"}</Text>
        </View>
      </View>

      {/* Tabs Button*/}
      <View style={styles.menu}>
        <DrawerItem
          label="Home"
          icon={({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )}
          onPress={() =>
            props.navigation.navigate("AppTabs", { screen: "Home" })
          }
        />

        <DrawerItem
          label="Analytics"
          icon={({ size, color }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          )}
          onPress={() =>
            props.navigation.navigate("AppTabs", { screen: "Analytics" })
          }
        />

        <DrawerItem
          label="Settings"
          icon={({ size, color }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          )}
          onPress={() =>
            props.navigation.navigate("AppTabs", { screen: "Settings" })
          }
        />
      </View>

      {/* Logout Button */}
      <View style={styles.logout}>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={logout}
          activeOpacity={0.8}
        >
          <Ionicons name="log-out-outline" size={22} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profile: {
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#000080",
    flexDirection: "row",
    gap: 5,
    borderRadius: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  welcome: {
    color: "#dcdcdc",
    fontSize: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  menu: {
    flex: 1,
  },
  logout: {
    borderTopWidth: 1,
    borderColor: "#eee",
    padding: 20,
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoutText: {
    color: "red",
    fontSize: 16,
    fontWeight: "500",
  },
});
