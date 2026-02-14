import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../hooks/useAuth";
import AuthStack from "./authStack";
import TabNavigator from "./tabNavigator";
import AddExpenseScreen from "../screens/tabs/addExpenseScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Auth flow */}
      {!user && <Stack.Screen name="Auth" component={AuthStack} />}

      {/* App flow */}
      {user && (
        <>
          <Stack.Screen name="AppTabs" component={TabNavigator} />
          <Stack.Screen
            name="AddExpense"
            component={AddExpenseScreen}
            options={{ presentation: "modal" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
