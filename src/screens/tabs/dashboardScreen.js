import { StyleSheet, View } from "react-native";
import Card from "../../components/dashboard/card";
import Services from "../../components/dashboard/services";
import HeaderBar from "../../components/dashboard/headerBar";
import CustomButton from "../../components/common/customButton";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <Card />
      <Services />
      <CustomButton
        title="Add Expense"
        onPress={() => navigation.navigate("AddExpense")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
