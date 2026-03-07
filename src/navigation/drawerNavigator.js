import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import TabNavigator from "./tabNavigator";
import CustomDrawer from "../components/TabBar/customDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="AppTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
