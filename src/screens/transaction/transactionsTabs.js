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
          marginTop: 15,
          borderRadius: 10,
          elevation: 1,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#000080",
          height: "100%",
          borderRadius: 10,
        },
        tabBarLabelStyle: { fontWeight: "600" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#777",
      }}
    >
      <Tab.Screen name="Weekly" component={WeeklyTransactions} />
      <Tab.Screen name="Monthly" component={MonthlyTransactions} />
    </Tab.Navigator>
  );
}
