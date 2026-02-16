import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/dashboard/card";
import Services from "../../components/dashboard/services";
import HeaderBar from "../../components/dashboard/headerBar";
import CustomButton from "../../components/common/customButton";

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <Card />
      <Services />
      <CustomButton
        title="Add Expense"
        onPress={() => navigation.navigate("AddExpense")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
