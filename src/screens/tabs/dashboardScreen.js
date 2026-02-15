import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/dashboard/card";
import Services from "../../components/dashboard/services";
import HeaderBar from "../../components/dashboard/headerBar";
import AddExpenseButton from "../../components/dashboard/addExpenseButton";

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <Card />
      <Services />
      <AddExpenseButton navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
