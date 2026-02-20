import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../hooks/useAuth";
import AuthStack from "./authStack";
import TabNavigator from "./tabNavigator";
import AddExpenseScreen from "../screens/tabs/addExpenseScreen";
import ExpenseDetailsScreen from "../screens/expense/expenseDetailsScreen";
import EditExpenseScreen from "../screens/expense/editExpenseScreen";

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
          <Stack.Screen
            name="DetailsExpense"
            component={ExpenseDetailsScreen}
          />
          <Stack.Screen name="EditExpense" component={EditExpenseScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
