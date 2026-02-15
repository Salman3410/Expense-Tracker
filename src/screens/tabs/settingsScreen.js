import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserCard from "../../components/setting/userCard";
import CardOptions from "../../components/setting/cardOptions";
import LogoutButton from "../../components/setting/logoutButton";
import useAuth from "../../hooks/useAuth";

export default function SettingsScreen() {
  const { logout } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <UserCard />
      <CardOptions />
      <LogoutButton onPress={() => logout()} />
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
});
