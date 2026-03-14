import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WeeklyTransactions from "../../components/analytics/weeklyTransactions";
import MonthlyTransactions from "../../components/analytics/monthlyTransactions";

const Tab = createMaterialTopTabNavigator();

export default function TransactionsTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#eee",
          marginHorizontal: 20,
          marginTop: 5,
          borderRadius: 24,
          elevation: 2,
          borderWidth: 1,
          borderColor: "#fff",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#000080",
          height: "100%",
          borderRadius: 24,
        },
        tabBarLabelStyle: { fontWeight: "700" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#777",
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="Weekly" component={WeeklyTransactions} />
      <Tab.Screen name="Monthly" component={MonthlyTransactions} />
    </Tab.Navigator>
  );
}
