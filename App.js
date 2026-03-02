import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/rootNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { ExpenseProvider } from "./src/context/expenseContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/context/authContext";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <AuthProvider>
          <ExpenseProvider>
            <NavigationContainer>
              <SafeAreaView style={{ flex: 1 }}>
                <StatusBar style="dark" />
                <RootNavigator />
              </SafeAreaView>
            </NavigationContainer>
          </ExpenseProvider>
        </AuthProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
