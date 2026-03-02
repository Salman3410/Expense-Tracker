import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./authStack";
import TabNavigator from "./tabNavigator";
import AddExpenseScreen from "../screens/tabs/addExpenseScreen";
import ExpenseDetailsScreen from "../screens/expense/expenseDetailsScreen";
import EditExpenseScreen from "../screens/expense/editExpenseScreen";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="AppTabs" component={TabNavigator} />
          <Stack.Screen
            name="AddExpense"
            component={AddExpenseScreen}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="DetailsExpense"
            component={ExpenseDetailsScreen}
          />
          <Stack.Screen name="EditExpense" component={EditExpenseScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
