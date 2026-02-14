import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/tabs/dashboardScreen";
import AnalyticsScreen from "../screens/tabs/analyticsScreen";
import SettingsScreen from "../screens/tabs/settingsScreen";

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Home" component={DashboardScreen} />
      <BottomTab.Screen name="Analytics" component={AnalyticsScreen} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({});
