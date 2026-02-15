import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function LogoutButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.logoutBtn}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
